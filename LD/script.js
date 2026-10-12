const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});