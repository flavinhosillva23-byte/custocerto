const DEMO_PRODUCTS = [{"id": "p1", "name": "Smart TV TCL 55 polegadas QLED 4K Google TV", "brand": "TCL", "category": "TV e Vídeo", "store": "Mercado Livre", "price": 2399, "old_price": 2699, "shipping": "Frete grátis", "installments": "10x de R$ 239,90 sem juros", "image": "assets/tv.svg", "url": "https://www.mercadolivre.com.br/", "rating": 4.8, "reviews": 312, "verified": true, "updated": "2026-07-23T01:00:00"}, {"id": "p2", "name": "Smart TV LG 55 polegadas UHD 4K webOS", "brand": "LG", "category": "TV e Vídeo", "store": "Shopee", "price": 2499, "old_price": 2799, "shipping": "Consulte o frete", "installments": "12x disponíveis", "image": "assets/tv.svg", "url": "https://shopee.com.br/", "rating": 4.7, "reviews": 198, "verified": true, "updated": "2026-07-23T00:50:00"}, {"id": "p3", "name": "Smart TV Samsung 50 polegadas Crystal UHD 4K", "brand": "Samsung", "category": "TV e Vídeo", "store": "Amazon", "price": 2299, "old_price": 2599, "shipping": "Frete grátis com Prime", "installments": "10x de R$ 229,90", "image": "assets/tv.svg", "url": "https://www.amazon.com.br/", "rating": 4.9, "reviews": 643, "verified": true, "updated": "2026-07-22T23:50:00"}, {"id": "p4", "name": "Notebook Acer Aspire 5 Ryzen 7 16GB 512GB SSD", "brand": "Acer", "category": "Notebooks", "store": "Magazine Luiza", "price": 3499, "old_price": 3899, "shipping": "Frete grátis", "installments": "10x de R$ 349,90", "image": "assets/notebook.svg", "url": "https://www.magazineluiza.com.br/", "rating": 4.8, "reviews": 174, "verified": true, "updated": "2026-07-23T00:40:00"}, {"id": "p5", "name": "Notebook Lenovo IdeaPad 3 Intel Core i5 8GB 256GB", "brand": "Lenovo", "category": "Notebooks", "store": "Mercado Livre", "price": 2799, "old_price": 3199, "shipping": "Frete grátis", "installments": "10x sem juros", "image": "assets/notebook.svg", "url": "https://www.mercadolivre.com.br/", "rating": 4.7, "reviews": 220, "verified": true, "updated": "2026-07-22T22:40:00"}, {"id": "p6", "name": "Notebook ASUS VivoBook 15 Core i7 16GB 512GB", "brand": "ASUS", "category": "Notebooks", "store": "Amazon", "price": 4199, "old_price": 4599, "shipping": "Frete grátis com Prime", "installments": "10x de R$ 419,90", "image": "assets/notebook.svg", "url": "https://www.amazon.com.br/", "rating": 4.8, "reviews": 99, "verified": true, "updated": "2026-07-22T20:40:00"}, {"id": "p7", "name": "Samsung Galaxy A56 5G 256GB", "brand": "Samsung", "category": "Celulares", "store": "Casas Bahia", "price": 1899, "old_price": 2199, "shipping": "Frete grátis", "installments": "10x de R$ 189,90", "image": "assets/celular.svg", "url": "https://www.casasbahia.com.br/", "rating": 4.9, "reviews": 587, "verified": true, "updated": "2026-07-23T00:30:00"}, {"id": "p8", "name": "Motorola Edge 60 Fusion 5G 256GB", "brand": "Motorola", "category": "Celulares", "store": "Mercado Livre", "price": 2099, "old_price": 2399, "shipping": "Frete grátis", "installments": "12x disponíveis", "image": "assets/celular.svg", "url": "https://www.mercadolivre.com.br/", "rating": 4.7, "reviews": 341, "verified": true, "updated": "2026-07-23T00:20:00"}, {"id": "p9", "name": "iPhone 15 128GB", "brand": "Apple", "category": "Celulares", "store": "Amazon", "price": 4299, "old_price": 4699, "shipping": "Frete grátis com Prime", "installments": "10x de R$ 429,90", "image": "assets/celular.svg", "url": "https://www.amazon.com.br/", "rating": 4.9, "reviews": 912, "verified": true, "updated": "2026-07-22T21:20:00"}, {"id": "p10", "name": "Geladeira Electrolux Frost Free Inverter 480L", "brand": "Electrolux", "category": "Eletrodomésticos", "store": "Magazine Luiza", "price": 3899, "old_price": 4399, "shipping": "Frete com desconto", "installments": "10x de R$ 389,90", "image": "assets/geladeira.svg", "url": "https://www.magazineluiza.com.br/", "rating": 4.8, "reviews": 134, "verified": true, "updated": "2026-07-22T19:30:00"}, {"id": "p11", "name": "Geladeira Brastemp Frost Free Duplex 375L", "brand": "Brastemp", "category": "Eletrodomésticos", "store": "Casas Bahia", "price": 3199, "old_price": 3599, "shipping": "Consulte o frete", "installments": "10x sem juros", "image": "assets/geladeira.svg", "url": "https://www.casasbahia.com.br/", "rating": 4.7, "reviews": 204, "verified": true, "updated": "2026-07-22T18:30:00"}, {"id": "p12", "name": "Lava e Seca LG 11kg Smart VC4", "brand": "LG", "category": "Eletrodomésticos", "store": "Mercado Livre", "price": 3499, "old_price": 3999, "shipping": "Frete grátis", "installments": "10x de R$ 349,90", "image": "assets/lavaseca.svg", "url": "https://www.mercadolivre.com.br/", "rating": 4.9, "reviews": 187, "verified": true, "updated": "2026-07-22T17:30:00"}, {"id": "p13", "name": "Air Fryer Mondial 8L Digital", "brand": "Mondial", "category": "Casa e Cozinha", "store": "Shopee", "price": 499, "old_price": 649, "shipping": "Frete grátis", "installments": "6x disponíveis", "image": "assets/airfryer.svg", "url": "https://shopee.com.br/", "rating": 4.8, "reviews": 1054, "verified": true, "updated": "2026-07-23T00:10:00"}, {"id": "p14", "name": "Micro-ondas Panasonic 34L Inox", "brand": "Panasonic", "category": "Casa e Cozinha", "store": "Amazon", "price": 749, "old_price": 899, "shipping": "Frete grátis com Prime", "installments": "10x de R$ 74,90", "image": "assets/microondas.svg", "url": "https://www.amazon.com.br/", "rating": 4.7, "reviews": 421, "verified": true, "updated": "2026-07-22T23:10:00"}, {"id": "p15", "name": "Aspirador Vertical WAP 2 em 1", "brand": "WAP", "category": "Casa e Cozinha", "store": "Magazine Luiza", "price": 329, "old_price": 399, "shipping": "Retirada grátis", "installments": "4x sem juros", "image": "assets/aspirador.svg", "url": "https://www.magazineluiza.com.br/", "rating": 4.6, "reviews": 773, "verified": true, "updated": "2026-07-22T22:10:00"}, {"id": "p16", "name": "Ar Condicionado LG Dual Inverter 12000 BTUs", "brand": "LG", "category": "Climatização", "store": "Mercado Livre", "price": 2299, "old_price": 2599, "shipping": "Frete grátis", "installments": "10x sem juros", "image": "assets/ar.svg", "url": "https://www.mercadolivre.com.br/", "rating": 4.9, "reviews": 466, "verified": true, "updated": "2026-07-22T21:10:00"}, {"id": "p17", "name": "Ar Condicionado Samsung WindFree 12000 BTUs", "brand": "Samsung", "category": "Climatização", "store": "Casas Bahia", "price": 2499, "old_price": 2899, "shipping": "Consulte o frete", "installments": "10x de R$ 249,90", "image": "assets/ar.svg", "url": "https://www.casasbahia.com.br/", "rating": 4.8, "reviews": 206, "verified": true, "updated": "2026-07-22T20:10:00"}, {"id": "p18", "name": "Fone JBL Tune 770NC Bluetooth", "brand": "JBL", "category": "Áudio", "store": "Amazon", "price": 399, "old_price": 499, "shipping": "Frete grátis com Prime", "installments": "5x sem juros", "image": "assets/fone.svg", "url": "https://www.amazon.com.br/", "rating": 4.8, "reviews": 1582, "verified": true, "updated": "2026-07-22T19:10:00"}, {"id": "p19", "name": "Console PlayStation 5 Slim 1TB", "brand": "Sony", "category": "Games", "store": "Mercado Livre", "price": 3499, "old_price": 3899, "shipping": "Frete grátis", "installments": "10x sem juros", "image": "assets/console.svg", "url": "https://www.mercadolivre.com.br/", "rating": 4.9, "reviews": 2311, "verified": true, "updated": "2026-07-22T18:10:00"}, {"id": "p20", "name": "Monitor Gamer LG UltraGear 24 polegadas 180Hz", "brand": "LG", "category": "Informática", "store": "Kabum", "price": 899, "old_price": 1099, "shipping": "Frete promocional", "installments": "10x de R$ 89,90", "image": "assets/monitor.svg", "url": "https://www.kabum.com.br/", "rating": 4.8, "reviews": 635, "verified": true, "updated": "2026-07-22T17:10:00"}];

const CATEGORIES = [
  {name:"Todos", icon:"🛒"},
  {name:"TV e Vídeo", icon:"📺"},
  {name:"Celulares", icon:"📱"},
  {name:"Notebooks", icon:"💻"},
  {name:"Eletrodomésticos", icon:"🧺"},
  {name:"Casa e Cozinha", icon:"🍳"},
  {name:"Climatização", icon:"❄️"},
  {name:"Áudio", icon:"🎧"},
  {name:"Games", icon:"🎮"},
  {name:"Informática", icon:"🖥️"}
];

const THEMES = ["classic","market","premium"];
const state = {
  products: [],
  query: "",
  category: "",
  brands: new Set(),
  stores: new Set(),
  pageSize: 12,
  visible: 12,
  favorites: new Set(JSON.parse(localStorage.getItem("cc_favorites") || "[]")),
  recent: JSON.parse(localStorage.getItem("cc_recent") || "[]"),
  listView: false
};

const $ = id => document.getElementById(id);
const normalize = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const money = value => Number(value || 0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function createDb(){
  const cfg = window.CUSTO_CERTO_CONFIG || {};
  if(!cfg.supabaseUrl || !cfg.supabasePublishableKey || !window.supabase) return null;
  return window.supabase.createClient(cfg.supabaseUrl,cfg.supabasePublishableKey);
}
const db = createDb();

async function loadProducts(){
  $("loadingState").classList.remove("hidden");
  try{
    if(!db) throw new Error("Supabase ainda não configurado");
    const {data,error} = await db.from("offers_public").select("*").eq("active",true).order("price");
    if(error) throw error;
    state.products = data && data.length ? data.map(mapDbProduct) : DEMO_PRODUCTS;
  }catch(error){
    console.warn("Usando catálogo demonstrativo:",error.message);
    state.products = DEMO_PRODUCTS;
  }
  $("loadingState").classList.add("hidden");
  populateUi();
  render();
}

function mapDbProduct(p){
  return {
    id:p.id,name:p.name,brand:p.brand,category:p.category,store:p.store,
    price:Number(p.price),old_price:p.old_price?Number(p.old_price):null,
    shipping:p.shipping_text||"Consulte o frete",installments:p.installments||"",
    image:p.image_url||"assets/tv.svg",url:p.affiliate_url||p.product_url||"#",
    rating:Number(p.rating||4.7),reviews:Number(p.reviews||0),verified:p.is_verified!==false,
    updated:p.updated_at||new Date().toISOString()
  };
}

function populateUi(){
  $("searchCategory").innerHTML = '<option value="">Todas</option>' + CATEGORIES.filter(c=>c.name!=="Todos").map(c=>`<option value="${c.name}">${c.name}</option>`).join("");
  $("categoryFilter").innerHTML = '<option value="">Todas</option>' + CATEGORIES.filter(c=>c.name!=="Todos").map(c=>`<option value="${c.name}">${c.name}</option>`).join("");
  $("categoryNav").innerHTML = CATEGORIES.map(c=>`<button data-category="${c.name==="Todos"?"":c.name}">${c.icon} ${c.name}</button>`).join("");
  $("categoryCards").innerHTML = CATEGORIES.filter(c=>c.name!=="Todos").slice(0,6).map(c=>{
    const count = state.products.filter(p=>p.category===c.name).length;
    return `<button class="category-card" data-category="${c.name}"><span>${c.icon}</span><strong>${c.name}</strong><small>${count} ofertas</small></button>`;
  }).join("");

  document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>setCategory(btn.dataset.category)));
  document.querySelectorAll("[data-category-go]").forEach(btn=>btn.addEventListener("click",()=>setCategory(btn.dataset.categoryGo)));
  document.querySelectorAll("[data-scroll-products]").forEach(btn=>btn.addEventListener("click",()=>$("productsSection").scrollIntoView({behavior:"smooth"})));
  document.querySelectorAll("[data-search]").forEach(btn=>btn.addEventListener("click",()=>runSearch(btn.dataset.search)));

  refreshFilterLists();
  renderStores();
}

function refreshFilterLists(){
  const brands = [...new Set(state.products.map(p=>p.brand).filter(Boolean))].sort();
  const stores = [...new Set(state.products.map(p=>p.store).filter(Boolean))].sort();
  $("brandChecks").innerHTML = brands.map(v=>`<label><input type="checkbox" value="${escapeHtml(v)}"> ${escapeHtml(v)}</label>`).join("");
  $("storeChecks").innerHTML = stores.map(v=>`<label><input type="checkbox" value="${escapeHtml(v)}"> ${escapeHtml(v)}</label>`).join("");
  $("brandChecks").querySelectorAll("input").forEach(i=>i.addEventListener("change",()=>{toggleSet(state.brands,i.value,i.checked);render();}));
  $("storeChecks").querySelectorAll("input").forEach(i=>i.addEventListener("change",()=>{toggleSet(state.stores,i.value,i.checked);render();}));
}

function renderStores(){
  const stores = [...new Set(state.products.map(p=>p.store))];
  $("storeLogos").innerHTML = stores.slice(0,10).map(s=>`<div class="store-card">${escapeHtml(s)}</div>`).join("");
}

function toggleSet(set,value,checked){ checked ? set.add(value) : set.delete(value); }

function setCategory(category){
  state.category = category || "";
  $("categoryFilter").value = state.category;
  $("searchCategory").value = state.category;
  document.querySelectorAll("#categoryNav button").forEach(b=>b.classList.toggle("active",b.dataset.category===state.category));
  state.visible = state.pageSize;
  render();
  $("productsSection").scrollIntoView({behavior:"smooth"});
}

function runSearch(value){
  state.query = String(value||"").trim();
  $("searchInput").value = state.query;
  $("searchSuggestions").classList.add("hidden");
  state.visible = state.pageSize;
  render();
  $("productsSection").scrollIntoView({behavior:"smooth"});
}

function filteredProducts(){
  const query = normalize(state.query);
  const min = Number($("minPrice").value||0);
  const max = Number($("maxPrice").value||0);
  const shippingOnly = $("freeShippingOnly").checked;
  const discountOnly = $("discountOnly").checked;

  let list = state.products.filter(p=>{
    const haystack = normalize([p.name,p.brand,p.category,p.store].join(" "));
    return (!query || haystack.includes(query))
      && (!state.category || p.category===state.category)
      && (!state.brands.size || state.brands.has(p.brand))
      && (!state.stores.size || state.stores.has(p.store))
      && (!min || p.price>=min)
      && (!max || p.price<=max)
      && (!shippingOnly || normalize(p.shipping).includes("gratis"))
      && (!discountOnly || (p.old_price && p.old_price>p.price));
  });

  const sort = $("sortSelect").value;
  if(sort==="priceAsc") list.sort((a,b)=>a.price-b.price);
  if(sort==="priceDesc") list.sort((a,b)=>b.price-a.price);
  if(sort==="discount") list.sort((a,b)=>discount(b)-discount(a));
  if(sort==="recent") list.sort((a,b)=>new Date(b.updated)-new Date(a.updated));
  if(sort==="featured") list.sort((a,b)=>(b.rating*b.reviews)-(a.rating*a.reviews));
  return list;
}

function discount(p){ return p.old_price && p.old_price>p.price ? Math.round((1-p.price/p.old_price)*100) : 0; }

function render(){
  const all = filteredProducts();
  const visible = all.slice(0,state.visible);
  $("productGrid").innerHTML = "";
  $("emptyState").classList.toggle("hidden",all.length>0);
  $("productsCount").textContent = `${all.length} oferta${all.length===1?"":"s"} encontrada${all.length===1?"":"s"}`;
  $("productsTitle").textContent = state.query ? `Resultados para “${state.query}”` : state.category || "Produtos em destaque";
  $("loadMoreButton").classList.toggle("hidden",state.visible>=all.length || !all.length);
  $("favoriteCount").textContent = state.favorites.size;
  $("recentCount").textContent = state.recent.length;

  const template = $("productTemplate");
  visible.forEach(p=>{
    const node = template.content.cloneNode(true);
    const img = node.querySelector(".product-image");
    img.src=p.image; img.alt=p.name;
    img.onerror=()=>img.src="assets/tv.svg";
    node.querySelector(".store-name").textContent=p.store;
    node.querySelector(".verified-badge").classList.toggle("hidden",!p.verified);
    node.querySelector(".product-name").textContent=p.name;
    node.querySelector(".product-meta").textContent=[p.brand,p.category].filter(Boolean).join(" • ");
    node.querySelector(".rating-count").textContent=`${p.rating.toFixed(1)} (${p.reviews})`;
    node.querySelector(".old-price").textContent=p.old_price?money(p.old_price):"";
    node.querySelector(".current-price").textContent=money(p.price);
    node.querySelector(".installments").textContent=p.installments;
    node.querySelector(".shipping").textContent=p.shipping;
    const badge=node.querySelector(".discount-badge");
    const d=discount(p); if(d){badge.textContent=`${d}% OFF`;badge.classList.remove("hidden");}
    const fav=node.querySelector(".favorite-button");
    fav.classList.toggle("active",state.favorites.has(p.id));
    fav.textContent=state.favorites.has(p.id)?"♥":"♡";
    fav.addEventListener("click",()=>toggleFavorite(p.id));
    node.querySelector(".details-button").addEventListener("click",()=>openDetails(p));
    const buy=node.querySelector(".buy-button");
    buy.href=p.url; buy.addEventListener("click",()=>registerClick(p));
    $("productGrid").appendChild(node);
  });
  renderActiveFilters();
}

function renderActiveFilters(){
  const chips=[];
  if(state.query) chips.push(`Busca: ${state.query}`);
  if(state.category) chips.push(state.category);
  state.brands.forEach(v=>chips.push(v));
  state.stores.forEach(v=>chips.push(v));
  $("activeFilters").innerHTML=chips.map(v=>`<span class="filter-chip">${escapeHtml(v)}</span>`).join("");
}

function toggleFavorite(id){
  state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);
  localStorage.setItem("cc_favorites",JSON.stringify([...state.favorites]));
  render(); showToast(state.favorites.has(id)?"Adicionado aos favoritos":"Removido dos favoritos");
}

function addRecent(id){
  state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,10);
  localStorage.setItem("cc_recent",JSON.stringify(state.recent));
  $("recentCount").textContent=state.recent.length;
}

function openDetails(product){
  addRecent(product.id);
  openDrawer("Detalhes do produto",[product]);
}

function openDrawer(title,products){
  $("drawerTitle").textContent=title;
  $("drawerContent").innerHTML=products.length?products.map(p=>`
    <div class="drawer-item">
      <img src="${p.image}" alt="">
      <div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.store)} • ${money(p.price)}</small><small>${escapeHtml(p.shipping)}</small></div>
    </div>`).join(""):'<div class="state-card">Nenhum item por aqui.</div>';
  $("drawerBackdrop").classList.remove("hidden");
  $("sideDrawer").classList.add("open");
}

function closeDrawer(){
  $("drawerBackdrop").classList.add("hidden");
  $("sideDrawer").classList.remove("open");
}

async function registerClick(product){
  addRecent(product.id);
  if(!db || String(product.id).startsWith("p")) return;
  try{await db.from("affiliate_clicks").insert({offer_id:product.id,store:product.store,referrer:document.referrer||null,user_agent:navigator.userAgent});}catch(e){console.warn(e.message);}
}

function showSuggestions(){
  const value=normalize($("searchInput").value);
  if(value.length<2){$("searchSuggestions").classList.add("hidden");return;}
  const matches=[...new Set(state.products.filter(p=>normalize([p.name,p.brand,p.category].join(" ")).includes(value)).flatMap(p=>[p.name,p.brand,p.category]).filter(Boolean))].slice(0,7);
  $("searchSuggestions").innerHTML=matches.map(v=>`<button type="button" data-value="${escapeHtml(v)}">${escapeHtml(v)}</button>`).join("");
  $("searchSuggestions").classList.toggle("hidden",!matches.length);
  $("searchSuggestions").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>runSearch(b.dataset.value)));
}

function clearFilters(){
  state.query="";state.category="";state.brands.clear();state.stores.clear();state.visible=state.pageSize;
  $("searchInput").value="";$("searchCategory").value="";$("categoryFilter").value="";
  $("minPrice").value="";$("maxPrice").value="";$("freeShippingOnly").checked=false;$("discountOnly").checked=false;
  document.querySelectorAll(".check-list input").forEach(i=>i.checked=false);
  render();
}

function showToast(message){
  $("toast").textContent=message;$("toast").classList.remove("hidden");
  clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$("toast").classList.add("hidden"),2200);
}

function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

$("mainSearch").addEventListener("submit",e=>{e.preventDefault();state.category=$("searchCategory").value;runSearch($("searchInput").value);});
$("searchInput").addEventListener("input",showSuggestions);
$("categoryFilter").addEventListener("change",e=>setCategory(e.target.value));
["minPrice","maxPrice","freeShippingOnly","discountOnly","sortSelect"].forEach(id=>$(id).addEventListener("input",()=>{state.visible=state.pageSize;render();}));
$("clearFilters").addEventListener("click",clearFilters);
$("loadMoreButton").addEventListener("click",()=>{state.visible+=state.pageSize;render();});
$("gridToggle").addEventListener("click",()=>{state.listView=!state.listView;$("productGrid").classList.toggle("list-view",state.listView);$("gridToggle").textContent=state.listView?"☷":"▦";});
$("favoritesButton").addEventListener("click",()=>openDrawer("Favoritos",state.products.filter(p=>state.favorites.has(p.id))));
$("recentButton").addEventListener("click",()=>openDrawer("Vistos recentemente",state.recent.map(id=>state.products.find(p=>p.id===id)).filter(Boolean)));
$("closeDrawer").addEventListener("click",closeDrawer);
$("drawerBackdrop").addEventListener("click",closeDrawer);
$("themeButton").addEventListener("click",()=>{
  const current=document.documentElement.dataset.theme||"classic";
  const next=THEMES[(THEMES.indexOf(current)+1)%THEMES.length];
  document.documentElement.dataset.theme=next;
  localStorage.setItem("cc_theme",next);
  showToast(next==="classic"?"Visual clássico":next==="market"?"Visual marketplace":"Visual premium");
});
$("newsletterForm").addEventListener("submit",e=>{e.preventDefault();e.target.reset();showToast("Cadastro recebido! Integração pronta para conectar.");});

document.documentElement.dataset.theme=localStorage.getItem("cc_theme")||"classic";
loadProducts();
