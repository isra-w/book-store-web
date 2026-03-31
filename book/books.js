
const products = [
  {
    id: 1,
    name: "FIKIR ESKE MEKABER",
    price: 800,
    image: "fikir.png",
    description: "A mystery novel full of suspense.",
    category: "Books"
  },
  {
    id: 2,
    name: "ALEMENOR",
    price: 650,
    image: "alemenor.jpg",
    description: "Learn modern JavaScript easily.",
    category: "Books"
  },
  {
    id: 3,
    name: "Echoes of the fall",
    price: 700,
    image: "../photos/echoes of the fall.jpg",
    description: "Start coding with Python today.",
    category: "Books"
  },
  {
    id: 4,
    name: "Felicia daye",
    price: 900,
    image: "../photos/felicia daye.jpg",
    description: "Write clean and maintainable code.",
    category: "Books"
  },
  {
    id: 5,
    name: "Finger Tips at Jwlight",
    price: 750,
    image: "../photos/finger tips at jwlight.jpg",
    description: "Introduction to Artificial Intelligence.",
    category: "Books"
  },
  {
    id: 6,
    name:"Shattered Truths",
    price:400,
    image:"../photos/shattered truths.jpg",
    description:"a very intersting book on the story of a little student girl",
    category:"book"
},
{
id:7,
name:"Star Seed Draft",
price:550,
image:"../photos/star seed draft.jpg",
description:"a science fiction  about identity, space, and hidden origins",
category:"book"
},
{
id:8,
name:"The Echoes",
price:500,
image:"../photos/the echoes.jpg",
description:"a story about sound that reveal hidden truths",
category:"book"
},
{
id:9,
name:"The Moonswept",
price:400,
image:"../photos/the moonswept.jpg",
description:"an exloring story about magic and nature ",
category:"book"
},
{
id:10,
name:"The Silence in The Crumbs",
price:300,
image:"../photos/the silence in the crumbs.jpg",
description:"a literary story about memories and quite moments",
category:"book"
},
{
id:11,
name:"The Alley of Secretes",
price:520,
image:"../photos/the alley of secretes.jpg",
description:"a story about a forbidden gate and its danger",
category:"book"
}
 


];

/* ================= PAGINATION ================= */
const itemsPerPage = 8;
let currentPage = 1;

/* ================= CART COUNT FROM URL ================= */
function updateCartCount() {
  const params = new URLSearchParams(window.location.search);
  const count = params.getAll("add").length;
  document.getElementById("cartCount").textContent = count;
}

/* ================= RENDER PRODUCTS ================= */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageProducts = products.slice(start, end);

  pageProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price} ETB</div>
        <div class="product-actions">
          <a href="../product/product.html?id=${product.id}" class="view-btn">View</a>
          <a href="../cart/cart.html?add=${product.id}" class="cart-btn">Add to Cart</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  updatePagination();
}

/* ================= PAGINATION UI ================= */
function updatePagination() {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  document.getElementById("pageInfo").textContent =
    `Page ${currentPage} of ${totalPages}`;

  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;
}

/* ================= EVENTS ================= */
document.getElementById("prevPage").onclick = () => {
  currentPage--;
  renderProducts();
};

document.getElementById("nextPage").onclick = () => {
  currentPage++;
  renderProducts();
};

/* ================= INIT ================= */
updateCartCount();
renderProducts();
