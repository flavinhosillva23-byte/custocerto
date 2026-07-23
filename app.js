const state={products:[],coupons:[],query:"",category:"",favorites:new Set(JSON.parse(localStorage.getItem("cc-favs")||"[]")),viewed:JSON.parse(localStorage.getItem("cc-viewed")||"[]"),compare:new Set(JSON.parse(localStorage.getItem("cc-compare")||"[]"))};
const $=id=>document.getElementById(id);
const money=v=>Number(v).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const discount=p=>Math.max(0,Math.round((1-p.price/p.old_price)*100));
const icons={"TV e Vídeo":"📺","Celulares":"📱","Notebooks":"💻","Eletrodomésticos":"🧺","Casa e Cozinha":"🍳","Climatização":"❄️","Móveis":"🛋️","Colchões":"🛏️","Ferramentas":"🛠️","Games":"🎮","Esportes":"🚲"};

async function init(){
 const data=await fetch("data.json").then(r=>r.json());
 state.products=data.products;state.coupons=data.coupons;
 buildCategories();buildFilters();bind();renderAll();startClock();
}
function categories(){return [...new Set(state.products.map(p=>p.category))]}
function buildCategories(){
 const cats=categories();
 $("searchCategory").innerHTML='<option value="">Todas as categorias</option>'+cats.map(c=>`<option>${c}</option>`).join("");
 $("categoryNav").innerHTML='<button class="active" data-cat="">🛒 Todos</button>'+cats.map(c=>`<button data-cat="${c}">${icons[c]||"•"} ${c}</button>`).join("");
 $("categoryCards").innerHTML=cats.slice(0,6).map(c=>`<button class="category-card" data-cat="${c}"><span>${icons[c]||"🛍️"}</span><b>${c}</b><small>${state.products.filter(p=>p.category===c).length} ofertas</small></button>`).join("");
 document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>setCategory(b.dataset.cat));
}
function buildFilters(){
 const stores=[...new Set(state.products.map(p=>p.store))].sort();
 $("storeFilter").innerHTML='<option value="">Todas as lojas</option>'+stores.map(s=>`<option>${s}</option>`).join("");
}
function setCategory(c){
 state.category=c;state.query="";$("searchInput").value="";
 document.querySelectorAll("[data-cat]").forEach(b=>b.classList.toggle("active",b.dataset.cat===c));
 renderProducts();$("offers").scrollIntoView({behavior:"smooth"});
}
function bind(){
 $("searchForm").onsubmit=e=>{e.preventDefault();state.query=$("searchInput").value.trim();state.category=$("searchCategory").value;hideSuggestions();renderProducts();$("offers").scrollIntoView({behavior:"smooth"})};
 $("searchInput").oninput=showSuggestions;
 $("searchInput").onfocus=showSuggestions;
 document.addEventListener("click",e=>{if(!e.target.closest(".search-input-wrap"))hideSuggestions()});
 ["storeFilter","sortFilter","maxPrice"].forEach(id=>$(id).addEventListener("input",renderProducts));
 document.querySelectorAll("[data-scroll]").forEach(b=>b.onclick=()=>$(b.dataset.scroll).scrollIntoView({behavior:"smooth"}));
 document.querySelectorAll("[data-category]").forEach(b=>b.onclick=()=>setCategory(b.dataset.category));
 $("themeBtn").onclick=()=>document.body.classList.toggle("dark");
 $("favoritesBtn").onclick=()=>{state.query="__favorites__";state.category="";renderProducts();$("offers").scrollIntoView({behavior:"smooth"})};
 $("viewedBtn").onclick=()=>{state.query="__viewed__";state.category="";renderProducts();$("offers").scrollIntoView({behavior:"smooth"})};
 $("closeDialog").onclick=()=>$("productDialog").close();
 $("closeCompare").onclick=()=>$("compareDialog").close();
 $("openCompare").onclick=openCompare;
}
function showSuggestions(){
 const q=norm($("searchInput").value);if(q.length<2){hideSuggestions();return}
 const arr=[...new Set(state.products.filter(p=>norm([p.name,p.brand,p.category].join(" ")).includes(q)).flatMap(p=>[p.name,p.brand,p.category]))].slice(0,7);
 $("suggestions").innerHTML=arr.map(x=>`<button>${x}</button>`).join("");
 $("suggestions").classList.toggle("hidden",!arr.length);
 $("suggestions").querySelectorAll("button").forEach(b=>b.onclick=()=>{$("searchInput").value=b.textContent;state.query=b.textContent;hideSuggestions();renderProducts();$("offers").scrollIntoView({behavior:"smooth"})});
}
function hideSuggestions(){$("suggestions").classList.add("hidden")}
function getFiltered(){
 let list=[...state.products];
 if(state.query==="__favorites__")list=list.filter(p=>state.favorites.has(p.id));
 else if(state.query==="__viewed__")list=list.filter(p=>state.viewed.includes(p.id));
 else{
  const q=norm(state.query);
  if(q)list=list.filter(p=>norm([p.name,p.brand,p.category,p.store,p.quality].join(" ")).includes(q));
  if(state.category)list=list.filter(p=>p.category===state.category);
 }
 const store=$("storeFilter").value,max=Number($("maxPrice").value||0);
 if(store)list=list.filter(p=>p.store===store);if(max)list=list.filter(p=>p.price<=max);
 const sort=$("sortFilter").value;
 if(sort==="priceAsc")list.sort((a,b)=>a.price-b.price);
 if(sort==="discount")list.sort((a,b)=>discount(b)-discount(a));
 if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
 return list;
}
function renderAll(){renderProducts();renderFlash();renderCoupons();renderTray();updateCounts()}
function renderProducts(){
 const list=getFiltered();$("productGrid").innerHTML="";$("emptyState").classList.toggle("hidden",!!list.length);
 $("resultCount").textContent=`${list.length} produto${list.length===1?"":"s"}`;
 $("offersTitle").textContent=state.query==="__favorites__"?"Seus favoritos":state.query==="__viewed__"?"Vistos recentemente":state.query?`Resultados para “${state.query}”`:state.category||"Produtos em alta";
 list.forEach(p=>$("productGrid").appendChild(productCard(p)));
}
function productCard(p){
 const node=$("productTpl").content.cloneNode(true),card=node.querySelector(".product-card");
 card.querySelector(".product-image").src=p.image;card.querySelector(".discount-badge").textContent=`${discount(p)}% OFF`;
 card.querySelector(".store").textContent=p.store;card.querySelector(".product-name").textContent=p.name;card.querySelector(".quality").textContent=p.quality;
 card.querySelector(".rating").textContent=`★ ${p.rating}  (${p.reviews.toLocaleString("pt-BR")})`;
 card.querySelector(".old-price").textContent=money(p.old_price);card.querySelector(".price").textContent=money(p.price);
 card.querySelector(".installments").textContent=p.installments;card.querySelector(".shipping").textContent=p.shipping;
 const fav=card.querySelector(".favorite");fav.classList.toggle("active",state.favorites.has(p.id));fav.textContent=state.favorites.has(p.id)?"♥":"♡";fav.onclick=()=>toggleFav(p.id);
 card.querySelector(".details").onclick=()=>openProduct(p);
 card.querySelector(".buy").href=p.url;
 const check=card.querySelector(".compare-check input");check.checked=state.compare.has(p.id);check.onchange=()=>toggleCompare(p.id,check.checked);
 return node;
}
function renderFlash(){$("flashGrid").innerHTML="";state.products.filter(p=>p.flash).slice(0,4).forEach(p=>$("flashGrid").appendChild(productCard(p)))}
function renderCoupons(){
 $("couponGrid").innerHTML=state.coupons.map(c=>`<article class="coupon-card"><b>${c.store}</b><h3>${c.title}</h3><p>${c.min}</p><div class="coupon-code"><b>${c.code}</b><button data-code="${c.code}">Copiar</button></div><small>Válido: ${c.expires}</small></article>`).join("");
 $("couponGrid").querySelectorAll("[data-code]").forEach(b=>b.onclick=async()=>{await navigator.clipboard.writeText(b.dataset.code);toast("Cupom copiado")});
}
function toggleFav(id){state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);localStorage.setItem("cc-favs",JSON.stringify([...state.favorites]));renderProducts();updateCounts()}
function toggleCompare(id,on){
 if(on&&state.compare.size>=3){toast("Escolha no máximo 3 produtos");renderProducts();return}
 on?state.compare.add(id):state.compare.delete(id);localStorage.setItem("cc-compare",JSON.stringify([...state.compare]));renderTray();
}
function renderTray(){
 const arr=state.products.filter(p=>state.compare.has(p.id));
 $("compareTray").innerHTML=arr.length?arr.map(p=>`<div class="compare-pill"><img src="${p.image}"><span>${p.name}</span><button data-remove="${p.id}">×</button></div>`).join(""):'<p style="color:var(--muted)">Marque produtos nos cards para comparar.</p>';
 $("compareTray").querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.compare.delete(b.dataset.remove);localStorage.setItem("cc-compare",JSON.stringify([...state.compare]));renderTray();renderProducts()});
}
function openProduct(p){
 if(!state.viewed.includes(p.id))state.viewed.unshift(p.id);state.viewed=state.viewed.slice(0,12);localStorage.setItem("cc-viewed",JSON.stringify(state.viewed));updateCounts();
 const pts=p.history.map((v,i)=>`${20+i*(560/(p.history.length-1))},${140-(v-Math.min(...p.history))*100/(Math.max(...p.history)-Math.min(...p.history)||1)}`).join(" ");
 $("dialogContent").innerHTML=`<div class="detail-layout"><div><img src="${p.image}" alt="${p.name}"></div><div><span class="eyebrow">${p.store}</span><h2>${p.name}</h2><p>${p.quality}</p><div>★ ${p.rating} (${p.reviews.toLocaleString("pt-BR")} avaliações)</div><s>${money(p.old_price)}</s><div class="detail-price">${money(p.price)}</div><p>${p.installments}</p><p>${p.shipping}</p><a class="primary" style="display:inline-block;text-decoration:none" href="${p.url}" target="_blank" rel="nofollow sponsored noopener">Ir para a loja</a><h3>Histórico de preço</h3><svg viewBox="0 0 600 170" class="history-chart"><polyline fill="none" stroke="currentColor" stroke-width="5" points="${pts}"></polyline></svg><small>Menor preço recente: ${money(Math.min(...p.history))}</small></div></div>`;
 $("productDialog").showModal();
}
function openCompare(){
 const arr=state.products.filter(p=>state.compare.has(p.id));if(arr.length<2){toast("Escolha pelo menos 2 produtos");return}
 $("compareContent").innerHTML=`<div class="compare-table"><h2>Comparação de produtos</h2><table><tr><th>Produto</th>${arr.map(p=>`<th><img src="${p.image}"><br>${p.name}</th>`).join("")}</tr><tr><td>Preço</td>${arr.map(p=>`<td><b>${money(p.price)}</b></td>`).join("")}</tr><tr><td>Loja</td>${arr.map(p=>`<td>${p.store}</td>`).join("")}</tr><tr><td>Qualidade</td>${arr.map(p=>`<td>${p.quality}</td>`).join("")}</tr><tr><td>Avaliação</td>${arr.map(p=>`<td>★ ${p.rating}</td>`).join("")}</tr><tr><td>Frete</td>${arr.map(p=>`<td>${p.shipping}</td>`).join("")}</tr><tr><td></td>${arr.map(p=>`<td><a class="primary" href="${p.url}" target="_blank">Comprar</a></td>`).join("")}</tr></table></div>`;
 $("compareDialog").showModal();
}
function updateCounts(){$("favCount").textContent=state.favorites.size;$("viewCount").textContent=state.viewed.length}
function startClock(){let s=7200;setInterval(()=>{s=s<=0?7200:s-1;const t=[Math.floor(s/3600),Math.floor(s%3600/60),s%60].map(x=>String(x).padStart(2,"0")).join(":");$("heroClock").textContent=t;$("flashClock").textContent=t},1000)}
function toast(msg){const d=document.createElement("div");d.className="toast";d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),1800)}
init();