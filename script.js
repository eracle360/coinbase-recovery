// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNav = document.querySelector('.primary-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            primaryNav.classList.toggle('nav-open');
        });
    }

    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add shadow to header on scroll
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header-shadow');
        } else if (currentScroll < lastScroll && currentScroll < 100) {
            header.classList.remove('header-shadow');
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-out');
        observer.observe(section);
    });
});

// Add dynamic header class for scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Handle responsive navigation
const handleResponsiveNav = () => {
    const nav = document.querySelector('.primary-nav');
    if (window.innerWidth > 1024) {
        nav.classList.remove('nav-open');
    }
};

window.addEventListener('resize', handleResponsiveNav);