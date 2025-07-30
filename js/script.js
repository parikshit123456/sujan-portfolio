// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    initNavigation();
    initTypewriter();
    initScrollAnimations();
    initSkillBars();
    initStatsCounter();
    initContactForm();
    initSmoothScrolling();
    initMobileMenu();
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'var(--bg-primary)';
            navbar.style.boxShadow = 'var(--shadow-medium)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Typewriter
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');
    const text = "Hi, I'm Prathama Dutta";
    let index = 0;
    typewriter.textContent = '';

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 1000);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.about-content, .skill-category, .qualification-category, .timeline-item, .project-card, .contact-info, .contact-form'
    );

    animatedElements.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('fade-in');
        } else {
            el.classList.add(index % 4 === 1 ? 'slide-left' : 'slide-right');
        }
        observer.observe(el);
    });
}

// Skill Bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills');

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 300);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);
}

// Stats Counter
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const rawValue = stat.getAttribute('data-target');
        stat.textContent = rawValue; // show value directly
    });
}

function animateCounter(element, start, end, duration, suffix = '') {
    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = (Math.floor(current * 100) / 100) + suffix; // keeps up to 2 decimals
    }, 16);
}


// ✅ Fixed Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Notification setup
        const style = document.createElement('style');
        const notification = document.createElement('div');
        notification.classList.add('notification', 'notification-success');

        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: black;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: var(--shadow-large);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            .notification-success {
                border-left: 4px solid var(--accent-color);
            }
            .notification-error {
                border-left: 4px solid #EF4444;
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                color: var(--text-secondary);
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;

        notification.innerHTML = `
            <div class="notification-content">
                <span>Message Sent!</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        document.head.appendChild(style);
        document.body.appendChild(notification);

        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
            style.remove();
        });

        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
                style.remove();
            }
        }, 5000);
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        if (!document.querySelector('#mobile-menu-styles')) {
            const mobileStyles = document.createElement('style');
            mobileStyles.id = 'mobile-menu-styles';
            mobileStyles.textContent = `
                .nav-menu.active {
                    display: flex;
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    flex-direction: column;
                    background-color: var(--bg-primary);
                    border-top: 1px solid var(--border-color);
                    padding: 2rem;
                    gap: 1rem;
                    box-shadow: var(--shadow-large);
                    z-index: 999;
                }
                .hamburger.active span:nth-child(1) {
                    transform: rotate(-45deg) translate(-5px, 6px);
                }
                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }
                .hamburger.active span:nth-child(3) {
                    transform: rotate(45deg) translate(-5px, -6px);
                }
            `;
            document.head.appendChild(mobileStyles);
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    // Scroll-dependent functions can be added here
}, 10));

// Lazy Loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}
initLazyLoading();

// ESC key closes mobile menu
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance Monitoring
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
            }, 0);
        });
    }
}
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    logPerformanceMetrics();
}