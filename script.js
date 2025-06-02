document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show-nav");
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert(`Thank you for your message, ${name}!`);
  this.reset();
});