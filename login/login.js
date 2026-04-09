
        let wrapper = document.getElementById('formWrapper');
        let toggleHeading = document.getElementById('PAGE');
        let toggleBtn = document.getElementById('toggleBtn');
        let toggleText = document.getElementById('PAGE');

        toggleBtn.addEventListener('click', () => {
            wrapper.classList.toggle('active');

            if (wrapper.classList.contains('active')) {
                toggleText.textContent = "LOG IN TO YOUR ACCOUNT";
                toggleBtn.textContent = "LOG IN";
            } else {
                toggleText.textContent = "CREATE YOUR ACCOUNT !";
                toggleBtn.textContent = "SIGN UP";
            }
        });
        function signIn() {
  sessionStorage.setItem("loggedIn", "true");
  window.location.href = "../checkout/checkout.html";
}
function guest() {
  sessionStorage.setItem("guest", "true");
  window.location.href = "../checkout/checkout.html";
}