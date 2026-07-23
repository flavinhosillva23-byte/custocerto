const STORAGE_KEY = "precoCertoDataV1";

const verifiedStores = [
  "Amazon",
  "Mercado Livre",
  "Magazine Luiza",
  "Casas Bahia",
  "Shopee"
];

const demoData = {
  products: [
    {
      id: crypto.randomUUID(),
      name: "TV 55 polegadas com boa imagem",
      category: "TV",
      targetPrice: 2500,
      keywords: ["QLED", "4K", "55 polegadas"],
      brands: ["TCL", "Samsung", "LG"],
      offers: [
        {
          store: "Amazon",
          price: 2399,
          shipping: 0,
          url: "",
          note: "Exemplo de oferta cadastrada manualmente",
          checkedAt: new Date().toISOString()
        }
      ]
    }
  ]
};

let data = loadData();

const productsGrid = document.querySelector("#productsGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const statusFilter = document.querySelector("#statusFilter");
const productModal = document.querySelector("#productModal");
const offerModal = document.querySelector("#offerModal");

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : structuredClone(demoData);
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function currency(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function totalOffer(offer) {
  return Number(offer.price || 0) + Number(offer.shipping || 0);
}

function bestOffer(product) {
  if (!product.offers?.length) return null;
  return [...product.offers].sort((a, b) => totalOffer(a) - totalOffer(b))[0];
}

function productStatus(product) {
  const offer = bestOffer(product);
  if (!offer) return "no-offer";
  return totalOffer(offer) <= product.targetPrice ? "deal" : "above";
}

function renderCategories() {
  const current = categoryFilter.value;
  const categories = [...new Set(data.products.map(p => p.category).filter(Boolean))].sort();
  categoryFilter.innerHTML = '<option value="">Todas</option>' +
    categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  categoryFilter.value = categories.includes(current) ? current : "";
}

function renderStores() {
  document.querySelector("#storesList").innerHTML = verifiedStores
    .map(store => `<div class="store-pill">✓ ${store}</div>`)
    .join("");
  document.querySelector("#storeCount").textContent = verifiedStores.length;

  document.querySelector("#offerStore").innerHTML = verifiedStores
    .map(store => `<option value="${store}">${store}</option>`)
    .join("");
}

function renderSummary() {
  document.querySelector("#trackedCount").textContent = data.products.length;
  document.querySelector("#dealCount").textContent =
    data.products.filter(p => productStatus(p) === "deal").length;
}

function renderProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const status = statusFilter.value;

  const filtered = data.products.filter(product => {
    const text = [
      product.name,
      product.category,
      ...(product.keywords || []),
      ...(product.brands || [])
    ].join(" ").toLowerCase();

    return (!term || text.includes(term)) &&
      (!category || product.category === category) &&
      (!status || productStatus(product) === status);
  });

  productsGrid.innerHTML = filtered.map(productCard).join("");
  emptyState.classList.toggle("hidden", filtered.length > 0);

  document.querySelectorAll("[data-add-offer]").forEach(button => {
    button.addEventListener("click", () => openOfferModal(button.dataset.addOffer));
  });

  document.querySelectorAll("[data-delete-product]").forEach(button => {
    button.addEventListener("click", () => deleteProduct(button.dataset.deleteProduct));
  });
}

function productCard(product) {
  const offer = bestOffer(product);
  const status = productStatus(product);
  const statusText = status === "deal"
    ? "Dentro da meta"
    : status === "above"
      ? "Acima da meta"
      : "Sem oferta";

  const tags = [...(product.brands || []), ...(product.keywords || [])]
    .slice(0, 7)
    .map(tag => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  let offerHtml = `
    <div>
      <span class="badge empty">Sem oferta cadastrada</span>
      <div class="offer-details">Adicione um preço encontrado em uma loja verificada.</div>
    </div>
  `;

  if (offer) {
    const total = totalOffer(offer);
    offerHtml = `
      <div>
        <span class="badge ${status}">${statusText}</span>
        <div class="offer-price">${currency(total)}</div>
        <div class="offer-details">
          ${escapeHtml(offer.store)}
          ${offer.shipping ? ` • frete ${currency(offer.shipping)}` : " • frete grátis"}
          ${offer.note ? ` • ${escapeHtml(offer.note)}` : ""}
        </div>
      </div>
      ${offer.url ? `<a class="secondary-btn" href="${escapeAttribute(offer.url)}" target="_blank" rel="noopener">Ver oferta</a>` : ""}
    `;
  }

  return `
    <article class="product-card">
      <div class="product-top">
        <div>
          <p class="eyebrow">${escapeHtml(product.category || "PRODUTO")}</p>
          <h3>${escapeHtml(product.name)}</h3>
          <div class="product-meta">
            Marcas: ${escapeHtml((product.brands || []).join(", ") || "qualquer")}
          </div>
        </div>
        <div class="price-target">
          <span>Preço máximo</span>
          <strong>${currency(product.targetPrice)}</strong>
        </div>
      </div>

      <div class="tags">${tags || '<span class="tag">Sem filtros extras</span>'}</div>
      <div class="offer-box">${offerHtml}</div>

      <div class="card-actions">
        <button class="primary-btn" data-add-offer="${product.id}">Atualizar preço</button>
        <button class="danger-btn" data-delete-product="${product.id}">Excluir</button>
      </div>
    </article>
  `;
}

function openOfferModal(productId) {
  const product = data.products.find(p => p.id === productId);
  if (!product) return;
  document.querySelector("#offerProductId").value = productId;
  document.querySelector("#offerModalTitle").textContent = `Oferta para ${product.name}`;
  document.querySelector("#offerPrice").value = "";
  document.querySelector("#shippingPrice").value = "0";
  document.querySelector("#offerUrl").value = "";
  document.querySelector("#offerNote").value = "";
  offerModal.showModal();
}

function deleteProduct(productId) {
  const product = data.products.find(p => p.id === productId);
  if (!product) return;
  if (!confirm(`Excluir o acompanhamento de "${product.name}"?`)) return;
  data.products = data.products.filter(p => p.id !== productId);
  saveData();
  renderAll();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value = "") {
  return escapeHtml(value);
}

document.querySelector("#openProductModal").addEventListener("click", () => productModal.showModal());
document.querySelector("#closeProductModal").addEventListener("click", () => productModal.close());
document.querySelector("#cancelProduct").addEventListener("click", () => productModal.close());
document.querySelector("#closeOfferModal").addEventListener("click", () => offerModal.close());
document.querySelector("#cancelOffer").addEventListener("click", () => offerModal.close());

document.querySelector("#productForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector("#productName").value.trim();
  const category = document.querySelector("#productCategory").value.trim();
  const targetPrice = Number(document.querySelector("#targetPrice").value);
  const keywords = document.querySelector("#keywords").value
    .split(",").map(v => v.trim()).filter(Boolean);
  const brands = document.querySelector("#brands").value
    .split(",").map(v => v.trim()).filter(Boolean);

  data.products.unshift({
    id: crypto.randomUUID(),
    name,
    category,
    targetPrice,
    keywords,
    brands,
    offers: []
  });

  saveData();
  event.target.reset();
  productModal.close();
  renderAll();
});

document.querySelector("#offerForm").addEventListener("submit", event => {
  event.preventDefault();

  const productId = document.querySelector("#offerProductId").value;
  const product = data.products.find(p => p.id === productId);
  if (!product) return;

  product.offers = product.offers || [];
  product.offers.push({
    store: document.querySelector("#offerStore").value,
    price: Number(document.querySelector("#offerPrice").value),
    shipping: Number(document.querySelector("#shippingPrice").value || 0),
    url: document.querySelector("#offerUrl").value.trim(),
    note: document.querySelector("#offerNote").value.trim(),
    checkedAt: new Date().toISOString()
  });

  saveData();
  offerModal.close();
  renderAll();
});

[searchInput, categoryFilter, statusFilter].forEach(input => {
  input.addEventListener("input", renderProducts);
  input.addEventListener("change", renderProducts);
});

document.querySelector("#resetDemo").addEventListener("click", () => {
  if (!confirm("Restaurar os dados de exemplo? Seus dados atuais serão substituídos.")) return;
  data = structuredClone(demoData);
  saveData();
  renderAll();
});

function renderAll() {
  renderStores();
  renderCategories();
  renderSummary();
  renderProducts();
}

renderAll();
