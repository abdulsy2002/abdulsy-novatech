// ============================================================
// NovaTech Solutions — Main JavaScript
// File: assets/js/main.js
// ============================================================

// 1. Wait for DOM to fully load before running any code
document.addEventListener('DOMContentLoaded', function () {

    // === REQUIRED FEATURES ===
    initMobileNav();
    initContactForm();
    initServiceAccordion();  // Option A: Accordion (can swap for Tabs or Modal)

    // === BONUS FEATURES ===
    initScrollToTop();
    initNavScroll();
    initPortfolioFilter();
    initDarkMode();
    initSmoothScroll();
    initTypingEffect();

});

// ============================================================
// REQUIRED: Mobile Navigation Toggle
// ============================================================
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Guard clause — exit if elements don't exist
    if (!menuToggle || !navMenu) return;

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ============================================================
// REQUIRED: Contact Form Validation
// ============================================================
function initContactForm() {
    const form = document.getElementById('contact-form');

    // Guard clause — only run on contact.html
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission
        clearErrors();

        // Get and trim field values
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate Full Name
        if (fullName === '' || fullName.length < 2) {
            showError('full-name', 'name-error', 'Please enter your full name (at least 2 characters).');
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            showError('email', 'email-error', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate Subject
        if (subject === '') {
            showError('subject', 'subject-error', 'Please enter a subject.');
            isValid = false;
        }

        // Validate Message
        if (message === '' || message.length < 10) {
            showError('message', 'message-error', 'Please enter a message (at least 10 characters).');
            isValid = false;
        }

        // If all valid — show success message
        if (isValid) {
            form.innerHTML = `
                <div class="form-success" style="text-align: center; padding: 2rem;">
                    <h3 style="color: var(--color-success, #10B981); margin-bottom: 1rem;">
                        Message Sent Successfully! ✅
                    </h3>
                    <p style="color: var(--color-text);">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                </div>
            `;
        }
    });
}

// Helper: Show error message and red border
function showError(inputId, errorSpanId, message) {
    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
        errorSpan.textContent = message;
    }
    const input = document.getElementById(inputId);
    if (input) {
        input.style.borderColor = 'var(--color-error, #EF4444)';
    }
}

// Helper: Clear all errors
function clearErrors() {
    const errorSpans = document.querySelectorAll('.form-error');
    errorSpans.forEach(function (span) {
        span.textContent = '';
    });
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    inputs.forEach(function (input) {
        input.style.borderColor = '';
    });
}

// Helper: Email validation regex
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// ============================================================
// REQUIRED: Service Interaction — Option A: Accordion
// (Swap this function for initServiceTabs() or initServiceModal() if preferred)
// ============================================================
function initServiceAccordion() {
    const headers = document.querySelectorAll('.accordion-header');

    // Guard clause
    if (headers.length === 0) return;

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Close ALL items first (single-open behavior)
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(function (i) {
                i.classList.remove('active');
            });

            // If clicked item wasn't open, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================================
// BONUS: Scroll-to-Top Button
// ============================================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================================
// BONUS: Navbar Scroll Effect
// ============================================================
function initNavScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================================
// BONUS: Portfolio Filtering
// ============================================================
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button state
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');

            // Show/hide cards based on filter
            cards.forEach(function (card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.opacity = '1';
                    // Optional: Add fade-in animation
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================================
// BONUS: Dark Mode Toggle with localStorage
// ============================================================
function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    }

    toggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ============================================================
// BONUS: Smooth Scroll for Anchor Links (with navbar offset)
// ============================================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const navbarHeight = 80; // Adjust to match your fixed navbar height

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle internal anchor links
            if (href === '#' || href.length === 1) return;

            const targetId = href.substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                const position = target.offsetTop - navbarHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================================
// BONUS: Typing Animation for Hero Section
// ============================================================
function initTypingEffect() {
    const element = document.getElementById('typing-text');
    if (!element) return;

    const words = ['Digital Future', 'Innovation', 'Growth', 'Success'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove character
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            // Add character
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        // Word complete — pause then start deleting
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of word
        } 
        // Word fully deleted — move to next word
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typing effect
    type();
}

// ============================================================
// END OF FILE
// ============================================================