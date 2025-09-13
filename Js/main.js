document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.main-menu-toggle');
    const navLinks = document.querySelector('.main-nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});