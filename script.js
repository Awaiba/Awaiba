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


function toggleSection(sectionId) {
    let content = document.getElementById(sectionId);
    let button = document.getElementById("btn-" + sectionId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Ensure it's visible before animating
        setTimeout(() => {
            content.style.opacity = "1"; // Make it fade in
            content.style.transform = "translateY(0)"; // Slide it in from above
        }, 10); // Small delay to ensure display block is applied before animation
        button.textContent = "✖"; // Change button to "✖" (close)
    } else {
        content.style.opacity = "0"; // Fade out
        content.style.transform = "translateY(-10px)"; // Slide it up
        setTimeout(() => {
            content.style.display = "none"; // Hide it after animation is complete
        }, 300); // Match this time with the transition duration
        button.textContent = "+"; // Change button to "+"
    }
}
