document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.categories-menu-toggle');
    const navLinks = document.querySelector('.categories-nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const showMoreButtons = document.querySelectorAll('.categories-show-more-btn');
    showMoreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Showing more books in this category!');
        });
    });

    const viewAllBtn = document.querySelector('.categories-view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            alert('Viewing all categories!');
        });
    }
});
