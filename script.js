function goToHome() {
    window.location.href = 'index.html'; // Replace with your homepage URL if different
}

ScrollReveal().reveal('.section', {
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    opacity: 0,
    origin: 'bottom'
});

// Custom animation for the navbar
ScrollReveal().reveal('.navbar', {
    duration: 1000,
    origin: 'top',
    distance: '20px'
});

const fadeIns = document.querySelectorAll('.fade-in');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

// Apply the observer to each fade-in element
fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
});