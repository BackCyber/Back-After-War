document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Button interactions for demo (extend as needed)
    const getStartedBtn = document.querySelector('.get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            alert('Starting your library journey!');
        });
    }

    const learnMoreBtn = document.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('Learn more about our services!');
        });
    }

    const signUpBtn = document.querySelector('.sign-up-btn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            alert('Redirecting to sign up!');
        });
    }
});