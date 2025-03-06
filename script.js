let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const utravelContainer = document.getElementById('utravel-container');
const walkonContainer = document.getElementById('walkon-container');

window.addEventListener("scroll", () => {
    // Sticky header logic
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
    } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
})