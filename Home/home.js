/* ================= PRODUCT DATA ================= */
const products = [
  {  
    id: 1,
    name: "The Silent Gate",
    price: 800,
    image: "photos/the silent gate.jpg",
    type: "trendy" 
  },
  { 
    id: 2,
    name: "Dragon Covenant",
    price: 650,
    image: "photos/dragon covenant.jpg",
    type: "trendy" 
  },
  {
    id: 3,
    name: "Echoes of the fall",
    price: 700,
    image: "photos/echoes of the fall.jpg",
    old: 900, 
    type: "discount"
   },
  {
    id: 4,
    name: "Felicia daye",
    price: 900,
    image: "photos/felicia daye.jpg",
    old: 950, 
    type: "discount"
   },
  { id: 5,
    name: "Finger Tips at Jwlight",
    price: 750,
    image: "photos/finger tips at jwlight.jpg",
    buyers: 1200, 
    type: "best" }
];

/* ================= RENDER ================= */
function render(sectionId, filter) {
  const container = document.getElementById(sectionId);
  products.filter(p => p.type === filter).forEach(p => {
    container.innerHTML += `
     <a href="product/product.html?id=${p.id}">
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        ${p.old ? `<span class="old-price">${p.old} ETB</span>` : ""}
        <p class="price">${p.price} ETB</p>       
      </div>
      </a>
    `;
  });
}

render("trendyBooks", "trendy");
render("discountBooks", "discount");
render("bestBooks", "best");

/* ================= CART COUNT ================= */
const params = new URLSearchParams(window.location.search);
document.getElementById("cartCount").textContent = params.getAll("add").length;
