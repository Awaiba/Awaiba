let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
    } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
});


// Parallax Scroll Effect
window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    // Adjust background position for uTRAVEL container
    var utravelContainer = document.getElementById('utravel-container');
    utravelContainer.style.backgroundPosition = 'center ' + (scrolled * 0.3) + 'px';

    // Adjust background position for WalkON container
    var walkonContainer = document.getElementById('walkon-container');
    walkonContainer.style.backgroundPosition = 'center ' + (scrolled * 0.2) + 'px';
});
