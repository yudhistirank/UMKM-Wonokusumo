// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("navbar-placeholder");
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(html => {
      target.innerHTML = html;
    });
});
