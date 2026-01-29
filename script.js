/**
 * DANIEL NEBRASKA STAINKAMP - PORTFOLIO LOGIC
 */

function showSection(sectionId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Show requested section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }

    // 3. Update sidebar navigation styles
    const navLinks = document.querySelectorAll('.side-nav a');
    navLinks.forEach(link => {
        // If the link's onclick contains the current sectionId, highlight it
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.style.opacity = "1";
            link.style.color = "var(--accent-color)";
        } else {
            link.style.opacity = "0.4";
            link.style.color = "var(--text-color)";
        }
    });

    // 4. Reset scroll of the main container to the top
    document.querySelector('.main-content').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Ensure "Home" is highlighted on initial page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
