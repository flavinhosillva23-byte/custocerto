const cfg = window.CUSTO_CERTO_CONFIG || {};
const $ = (id) => document.getElementById(id);
const money = (value) => Number(value || 0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const normalize = (text) => String(text || "").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

const db = cfg.supabaseUrl && cfg.supabasePublishableKey
  ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabasePublishableKey)
  : null;

const demoProducts = [
  {
    id:"demo-1", name:'Smart TV TCL 55" QLED 4K Google TV', brand:"TCL", category:"TV e Vídeo",
    store:"Mercado Livre", price:2399, old_price:2699, shipping_text:"Frete grátis",
    installments:"10x de R$ 239,90 sem juros", image_url:"https://http2.mlstatic.com/D_NQ_NP_2X_687956-MLA99999999999_112025-F.webp",
    affiliate_url:"https://www.mercadolivre.com.br/", is_verified:true, updated_at:new Date().toISOString()
  },
  {
    id:"demo-2", name:'Smart TV LG 55" 4K UHD webOS', brand:"LG", category:"TV e Vídeo",
    store:"Shopee", price:2499, old_price:2799, shipping_text:"Consulte o frete",
    installments:"12x disponíveis", image_url:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-placeholder",
    affiliate_url:"https://shopee.com.br/", is_verified:true, updated_at:new Date().toISOString()
  },
  {
    id:"demo-3", name:"Notebook Acer Aspire 5 16GB 512GB SSD", brand:"Acer", category:"Notebooks",
    store:"Amazon", price:3299, old_price:3599, shipping_text:"Frete grátis com Prime",
    installments:"10x de R$ 329,90", image_url:"https://placehold.co/600x450?text=Notebook+Acer",
    affiliate_url:"https://www.amazon.com.br/", is_verified:true, updated_at:new Date().toISOString()
  },
  {
    id:"demo-4", name:"Smartphone Samsung Galaxy 5G 256GB", brand:"Samsung", category:"Celulares",
    store:"Magazine Luiza", price:1699, old_price:1899, shipping_text:"Retirada grátis disponível",
    installments:"10x de R$ 169,90", image_url:"https://placehold.co/600x450?text=Galaxy+5G",
    affiliate_url:"https://www.magazineluiza.com.br/", is_verified:true, updated_at:new Date().toISOString()
  }
];

const state = { products:[], query:"", category:"Todos" };

async function loadProducts(){
  $("loading").classList.remove("hidden");
  try{
    if(!db) throw new Error("Supabase não configurado");
    const {data,error} = await db
      .from("offers_public")
      .select("*")
      .eq("active",true)
      .order("price",{ascending:true})
      .limit(500);
    if(error) throw error;
    state.products = data && data.length ? data : demoProducts;
  }catch(error){
    console.warn("Usando produtos demonstrativos:", error.message);
    state.products = demoProducts;
  }
  $("loading").classList.add("hidden");
  refreshFilterOptions();
  render();
}

function refreshFilterOptions(){
  const stores = [...new Set(state.products.map(p=>p.store).filter(Boolean))].sort();
  const brands = [...new Set(state.products.map(p=>p.brand).filter(Boolean))].sort();
  $("storeFilter").innerHTML = '<option value="">Todas</option>' + stores.map(x=>`<option>${escapeHtml(x)}</option>`).join("");
  $("brandFilter").innerHTML = '<option value="">Todas</option>' + brands.map(x=>`<option>${escapeHtml(x)}</option>`).join("");
}

function filteredProducts(){
  const query = normalize(state.query);
  const store = $("storeFilter").value;
  const brand = $("brandFilter").value;
  const maxPrice = Number($("maxPrice").value || 0);
  const sort = $("sortFilter").value;

  let result = state.products.filter(p=>{
    const haystack = normalize([p.name,p.brand,p.category,p.store,p.keywords].join(" "));
    return (!query || haystack.includes(query))
      && (state.category === "Todos" || p.category === state.category)
      && (!store || p.store === store)
      && (!brand || p.brand === brand)
      && (!maxPrice || Number(p.price) <= maxPrice);
  });

  result.sort((a,b)=>{
    if(sort==="price_desc") return Number(b.price)-Number(a.price);
    if(sort==="recent") return new Date(b.updated_at)-new Date(a.updated_at);
    return Number(a.price)-Number(b.price);
  });
  return result;
}

function render(){
  const products = filteredProducts();
  $("productGrid").innerHTML = "";
  $("empty").classList.toggle("hidden", products.length > 0);
  $("resultCount").textContent = `${products.length} oferta${products.length===1?"":"s"} encontrada${products.length===1?"":"s"}`;
  $("resultsTitle").textContent = state.query ? `Resultados para “${state.query}”` : state.category==="Todos" ? "Melhores ofertas" : state.category;

  const template = $("productTemplate");
  products.forEach(p=>{
    const node = template.content.cloneNode(true);
    const image = node.querySelector(".product-image");
    image.src = p.image_url || "https://placehold.co/600x450?text=Produto";
    image.alt = p.name || "Produto";
    image.onerror = () => image.src = "https://placehold.co/600x450?text=Produto";

    node.querySelector(".store-name").textContent = p.store || "Loja";
    node.querySelector(".verified").classList.toggle("hidden", !p.is_verified);
    node.querySelector(".product-name").textContent = p.name || "Produto";
    node.querySelector(".product-brand").textContent = [p.brand,p.category].filter(Boolean).join(" • ");
    node.querySelector(".old-price").textContent = p.old_price && Number(p.old_price)>Number(p.price) ? money(p.old_price) : "";
    node.querySelector(".price").textContent = money(p.price);
    node.querySelector(".installments").textContent = p.installments || "";
    node.querySelector(".shipping").textContent = p.shipping_text || "Consulte o frete na loja";
    node.querySelector(".updated").textContent = `Atualizado em ${new Date(p.updated_at || Date.now()).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}`;

    const badge = node.querySelector(".deal-badge");
    if(p.old_price && Number(p.old_price)>Number(p.price)){
      const discount = Math.round((1-Number(p.price)/Number(p.old_price))*100);
      badge.textContent = `${discount}% OFF`;
      badge.classList.remove("hidden");
    }

    const buy = node.querySelector(".buy-button");
    buy.href = p.affiliate_url || p.product_url || "#";
    buy.dataset.offerId = p.id || "";
    buy.addEventListener("click",()=>registerClick(p));
    $("productGrid").appendChild(node);
  });
}

async function registerClick(product){
  if(!db || !product.id || String(product.id).startsWith("demo-")) return;
  try{
    await db.from("affiliate_clicks").insert({
      offer_id:product.id,
      store:product.store || null,
      referrer:document.referrer || null,
      user_agent:navigator.userAgent
    });
  }catch(error){
    console.warn("Clique não registrado:",error.message);
  }
}

function runSearch(value){
  state.query = value.trim();
  $("searchInput").value = state.query;
  $("suggestions").classList.add("hidden");
  render();
  document.querySelector("#ofertas").scrollIntoView({behavior:"smooth"});
}

function showSuggestions(){
  const value = normalize($("searchInput").value);
  if(value.length < 2){
    $("suggestions").classList.add("hidden");
    return;
  }
  const matches = [...new Set(state.products
    .filter(p=>normalize([p.name,p.brand,p.category].join(" ")).includes(value))
    .flatMap(p=>[p.name,p.brand,p.category])
    .filter(Boolean))]
    .slice(0,6);
  $("suggestions").innerHTML = matches.map(x=>`<button type="button" data-value="${escapeAttr(x)}">${escapeHtml(x)}</button>`).join("");
  $("suggestions").classList.toggle("hidden", matches.length===0);
  $("suggestions").querySelectorAll("button").forEach(b=>b.onclick=()=>runSearch(b.dataset.value));
}

function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function escapeAttr(v){return escapeHtml(v);}

$("searchForm").addEventListener("submit",e=>{e.preventDefault();runSearch($("searchInput").value)});
$("searchInput").addEventListener("input",showSuggestions);
document.querySelectorAll("[data-search]").forEach(b=>b.onclick=()=>runSearch(b.dataset.search));
document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  state.category=b.dataset.category;
  state.query="";
  $("searchInput").value="";
  render();
});
["storeFilter","brandFilter","maxPrice","sortFilter"].forEach(id=>$(id).addEventListener("input",render));

loadProducts();
