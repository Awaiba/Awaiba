let lastScrollY = window.scrollY; // To track the scroll position
const header = document.querySelector("header"); // Target the header element

window.addEventListener("scroll", () => {
    // If we are scrolling down and past a certain point, hide the header
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        header.style.transform = "translateY(-100%)"; // Move header off-screen
    } else {
        // Scrolling up
        header.style.transform = "translateY(0)"; // Bring header back into view
    }

    // Update the last scroll position
    lastScrollY = window.scrollY;
});

function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle('show-menu');
}