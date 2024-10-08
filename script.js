// Ensuring the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '⬆️'; // Or use an icon
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Fade-in animation on scroll
    window.addEventListener('scroll', function () {
        const fadeIns = document.querySelectorAll('.fade-in');
        fadeIns.forEach(fadeIn => {
            if (fadeIn) {
                const position = fadeIn.getBoundingClientRect().top;
                const windowHeight = window.innerHeight / 1.5;
                if (position < windowHeight) {
                    fadeIn.classList.add('visible');
                }
            }
        });
    });

    // Text reveal animation - now safely checking if the element exists
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.classList.add('visible');
    }
});
