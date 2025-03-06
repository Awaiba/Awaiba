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

    // Parallax effect logic
    const utravelRect = utravelContainer.getBoundingClientRect();

    if (utravelRect.top <= 50) {
        // uTravel section is near the top, stop its parallax
        utravelContainer.style.backgroundPositionY = '0px';

        // Start parallax for WalkOn section
        if (walkonContainer) {
            walkonContainer.style.backgroundPositionY = (window.scrollY * 0.2) + 'px';
        }
    } else {
        // uTravel section is not near the top, apply its parallax
        if (utravelContainer) {
            utravelContainer.style.backgroundPositionY = (window.scrollY * 0.3) + 'px';
        }

        // Stop parallax for WalkOn section
        walkonContainer.style.backgroundPositionY = '0px';
    }
});

// Skew 3D effect
