document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.contact-menu-toggle');
    const navLinks = document.querySelector('.contact-nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully! We will get back to you soon.');
            form.reset();
        });
    }
});