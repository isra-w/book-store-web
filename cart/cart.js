/* ================= PRODUCT DATA ================= */
const products = [
  { id: 1,
    name: "FIKIR ESKE MEKABER",
    price: 800, 
    image: "images/book1.jpg" 
},
  { 
    id: 2,
    name: "ALEMENOR", 
    price: 650, 
    image: "images/book2.jpg" 
},
  { id: 3, 
    name: "Python for Beginners", 
    price: 700, 
    image: "images/book3.jpg" 
},
  {
    id: 4,
    name: "Clean Code",
    price: 900,
    image: "images/book4.jpg",
  },
  {
    id: 5,
    name: "AI Basics",
    price: 750,
    image: "images/book5.jpg",
    
  },
  {
    id:6,
    name:"Shattered Truths",
    price:400,
    image:"../photos/shattered truths.jpg"
  },
  {
    id:7,
    name:"Star Seed Draft",
    price:550,
    image:"../photos/star seed draft.jpg"
  },
  {
    id:8,
    name:"The Echoes",
    price:500,
    image:"../photos/the echoes.jpg"
  },
  {
    id:9,
    name:"The Moonswept",
    price:400,
    image:"../photos/the moonswept.jpg"
  },
  {
    id:10,
    name:"The Silence in The Crumbs",
    price:300,
    image:"../photos/the silence in the crumb.jpg"
  },
  {
    id:11,
    name:"The Alley of Secretes",
    price:520,
    image:"../photos/the alley of secretes.jpg"
  }
    
];

/* ================= READ URL ================= */
const params = new URLSearchParams(window.location.search);
const cartIds = params.getAll("add").map(Number);

/* ================= CART COUNT ================= */
document.getElementById("cartCount").textContent = cartIds.length;

/* ================= GROUP ITEMS ================= */
const cartMap = {};
cartIds.forEach(id => {
  cartMap[id] = (cartMap[id] || 0) + 1;
});

/* ================= RENDER CART ================= */
const tbody = document.getElementById("cartItems");
let total = 0;

Object.keys(cartMap).forEach(id => {
  const product = products.find(p => p.id === Number(id));
  const qty = cartMap[id];
  const subtotal = product.price * qty;
  total += subtotal;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${product.image}">
      <p>${product.name}</p>
    </td>
    <td>${product.price} ETB</td>
    <td>${qty}</td>
    <td>${subtotal} ETB</td>
    <td>
      <a href="${removeUrl(id)}">✖</a>
    </td>
  `;
  tbody.appendChild(row);
});

document.getElementById("cartTotal").textContent = total + " ETB";

/* ================= REMOVE ITEM ================= */
function removeUrl(removeId) {
  const newParams = new URLSearchParams();
  cartIds.forEach(id => {
    if (id !== Number(removeId)) {
      newParams.append("add", id);
    }
  });
  return "cart.html?" + newParams.toString();
}
document.querySelector(".checkout-btn").onclick = (e) => {
  e.preventDefault();

  if (!sessionStorage.getItem("loggedIn")) {
    document.getElementById("loginModal").style.display = "flex";
  } else {
    window.location.href = "checkout.html";
  }
};

function goSignIn() {
  window.location.href = "../login/login.html";
}

function continueGuest() {
  sessionStorage.setItem("guest", "true");
  window.location.href = "checkout.html";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

