// ===== AURELIA PALACE LUXURY RESORT WEBSITE =====
// Professional JavaScript for Aurelia Palace Royal Heritage Valley

// ===== PAGE LOADER ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.Aurelia-text');
    const loaderLogo = document.querySelector('.loader-logo-img');

    // Add pulsing animation to logo during load
    if (loaderLogo) {
        loaderLogo.style.animation = 'pulse 2s ease infinite';
    }

    // Fancy text reveal effect
    if (loaderText) {
        const text = loaderText.textContent;
        loaderText.textContent = '';

        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.animation = `fadeIn 0.5s ease ${i * 0.05}s forwards`;
            loaderText.appendChild(span);
        });
    }

    // Remove loader after 2.5 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.8s ease';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 800);
    }, 2500);
});

// ===== HERO SLIDER ANIMATION =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length === 0) return;

    // Start with first slide active
    slides[0].classList.add('active');

    // Auto slide every 4 seconds
    const slideInterval = setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);

    // Pause slider on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        heroSection.addEventListener('mouseleave', () => {
            clearInterval(slideInterval);
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4000);
        });
    }
}

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Mobile navbar hide on scroll down, show on scroll up
    if (window.innerWidth < 768) {
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }

    lastScroll = currentScroll;
});

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');

        // Animate hamburger lines
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===== SMOOTH SCROLL WITH OFFSET =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;

        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMATED COUNTER FOR STATS =====
function animateCounter(element, target, duration) {
    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16);
    const counter = target === 5 ? '★' : '+';

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + counter;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');

            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-card') || entry.target.classList.contains('stat-item')) {
                const numberElement = entry.target.querySelector('.stat-number');
                if (numberElement) {
                    const target = parseInt(numberElement.getAttribute('data-target'));
                    animateCounter(numberElement, target, 1500);
                }
            }

            // Observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    '.about-text, .about-image, .amenity-card, .gallery-item, .info-card, ' +
    '.contact-form, .stat-card, .room-card, .feature-item, .weddings-text, ' +
    '.weddings-gallery, .stat-item'
);

animatedElements.forEach(el => {
    if (el) observer.observe(el);
});

// ===== CTA BUTTON EFFECTS =====
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== ROOM CARD HOVER EFFECTS =====
const roomCards = document.querySelectorAll('.room-card');

roomCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';

        // Add glow effect
        this.style.boxShadow = '0 30px 60px var(--shadow)';

        // Animate room category badge
        const badge = this.querySelector('.room-category');
        if (badge) {
            badge.style.transform = 'scale(1.1)';
        }
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 20px var(--shadow-dark)';

        const badge = this.querySelector('.room-category');
        if (badge) {
            badge.style.transform = 'scale(1)';
        }
    });
});

// ===== GALLERY IMAGE EFFECTS =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.15) rotate(0.5deg)';
        }
    });

    item.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'Guest';

        // Create animated success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%);
            padding: 60px 80px;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3);
            z-index: 10000;
            text-align: center;
            animation: slideInScale 0.5s ease;
            border: 3px solid var(--gold);
            max-width: 90%;
            width: 400px;
        `;

        successMessage.innerHTML = `
            <div style="font-size: 4rem; color: #D4AF37; margin-bottom: 20px; animation: scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">✓</div>
            <h3 style="font-size: 1.8rem; color: #333333; margin-bottom: 10px; letter-spacing: 0.1em;">Thank You, ${name}!</h3>
            <p style="color: #666666; margin-bottom: 5px;">Your inquiry has been received successfully.</p>
            <p style="color: #666666;">Aurelia Palace team will contact you within 24 hours.</p>
            <div style="margin-top: 30px; font-size: 0.9rem; color: var(--text-light);">
                Call us now: +91 9122235777
            </div>
        `;

        document.body.appendChild(successMessage);

        // Prevent scrolling while message is displayed
        document.body.style.overflow = 'hidden';

        // Reset form
        contactForm.reset();

        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.style.animation = 'slideOutScale 0.5s ease forwards';
            setTimeout(() => {
                successMessage.remove();
                document.body.style.overflow = 'auto';
            }, 500);
        }, 5000);
    });
}

// ===== PARALLAX EFFECT FOR HERO SECTION =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingShapes = document.querySelectorAll('.shape');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = Math.max(0, 1 - scrolled / 800);
    }

    if (floatingShapes.length > 0) {
        floatingShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.3;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
    }
});

// ===== STAGGERED ANIMATIONS =====
function applyStaggeredAnimations() {
    const amenityCards = document.querySelectorAll('.amenity-card');
    amenityCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
    });

    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.12}s`;
    });

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ===== LOGO ROTATION ANIMATION =====
const logos = document.querySelectorAll('.nav-logo, .footer-logo-img');
logos.forEach(logo => {
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.6s ease';
            this.style.transform = 'rotate(360deg) scale(1.1)';
        });

        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
});

// ===== INFO CARD HOVER EFFECTS =====
const infoCards = document.querySelectorAll('.info-card, .info-box');
infoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) translateY(0)';
    });
});

// ===== ADD DYNAMIC ANIMATIONS CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideInScale {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes slideOutScale {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }

    @keyframes scaleIn {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    /* Smooth scrolling enhancement */
    html {
        scroll-behavior: smooth;
    }

    body {
        transition: opacity 0.3s ease;
    }

    body.page-transition {
        opacity: 0.7;
    }

    /* Active navigation link */
    .nav-link.active {
        color: var(--gold);
        font-weight: bold;
    }

    .nav-link.active::after {
        width: 100%;
    }

    /* Map hover effect */
    .map-container iframe {
        transition: filter 0.5s ease;
    }

    /* Image loading animation */
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    .img-loading {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
    }
`;
document.head.appendChild(style);

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--gold) 0%, var(--dark-gold) 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
        scrollTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
        scrollTopBtn.style.transform = 'translateY(20px)';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.15) rotate(360deg)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});

// ===== ACTIVE NAV LINK INDICATOR =====
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== IMAGE LAZY LOADING =====
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('img-loading');
            observer.unobserve(img);
        }
    });
}, { threshold: 0.1 });

images.forEach(img => {
    img.classList.add('img-loading');
    imageObserver.observe(img);
});

// ===== ROOM CARD DETAILS EXPANSION =====
roomCards.forEach(card => {
    const roomInfo = card.querySelector('.room-info');
    if (roomInfo) {
        card.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                this.classList.toggle('expanded');
            }
        });
    }
});

// ===== INITIALIZE ALL ANIMATIONS =====
function initializeAnimations() {
    // Initialize hero slider
    initHeroSlider();

    // Apply staggered animations
    applyStaggeredAnimations();

    // Initialize counters
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(number => {
        if (!isNaN(parseInt(number.textContent))) {
            number.textContent = '0';
        }
    });

    // Update active nav link on load
    updateActiveNavLink();

    // Add loading class to all images initially
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.classList.add('img-loading');
            img.onload = () => img.classList.remove('img-loading');
            img.onerror = () => img.classList.remove('img-loading');
        }
    });
}

// ===== WINDOW LOAD EVENT =====
window.addEventListener('load', initializeAnimations);

// ===== TOUCH GESTURES FOR MOBILE =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - previous slide
            // Could be used for gallery navigation
        } else {
            // Swipe left - next slide
            // Could be used for gallery navigation
        }
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Update scroll-dependent animations here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c ╔══════════════════════════════════════════╗ ', 'background: #D4AF37; color: white; font-size: 18px; padding: 10px; font-weight: bold;');
console.log('%c ║     WELCOME TO AURELIA PALACE RESORT     ║ ', 'background: #D4AF37; color: white; font-size: 18px; padding: 10px; font-weight: bold;');
console.log('%c ║     Royal Heritage Valley, Grand Estate         ║ ', 'background: #D4AF37; color: white; font-size: 18px; padding: 10px; font-weight: bold;');
console.log('%c ║     61 Luxury Rooms • Infinity Pool      ║ ', 'background: #D4AF37; color: white; font-size: 18px; padding: 10px; font-weight: bold;');
console.log('%c ║     Wedding Destination • Fine Dining     ║ ', 'background: #D4AF37; color: white; font-size: 18px; padding: 10px; font-weight: bold;');
console.log('%c ╚══════════════════════════════════════════╝ ', 'background: #D4AF37; color: white; font-size: 18px; padding: 10px; font-weight: bold;');
console.log('%c Website: www.aureliapalace.com ', 'color: #666666; font-style: italic;');
console.log('%c Phone: +91 9122235777 ', 'color: #666666;');
console.log('%c Location: Narayanpur, Heritage District, Royal Heritage Valley ', 'color: #666666;');
