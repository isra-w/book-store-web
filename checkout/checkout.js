if (
  !sessionStorage.getItem("loggedIn") &&
  !sessionStorage.getItem("guest")
) {
  window.location.href = "../cart/cart.html";
}
