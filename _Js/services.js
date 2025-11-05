document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.services-menu-toggle');
    const navLinks = document.querySelector('.services-nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Button interactions for demo (extend as needed)
    const getStartedBtn = document.querySelector('.services-get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            alert('Starting your library journey!');
        });
    }

    const learnMoreBtn = document.querySelector('.services-learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('Learn more about our services!');
        });
    }

    const signUpBtn = document.querySelector('.services-sign-up-btn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            alert('Redirecting to sign up!');
        });
    }
});