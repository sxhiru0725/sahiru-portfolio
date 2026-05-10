const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
