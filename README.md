🚀 NovaTech Solutions — Company Website

A professional, responsive, multi-page company website built with vanilla HTML, CSS, and JavaScript for NovaTech Solutions — a fictional IT services company based in Abuja, Nigeria.









🔗 View Live Demo → (Replace with your GitHub Pages/Netlify URL)
📌 Table of Contents
About This Project
✨ Features
📸 Screenshots
🛠️ Technologies Used
📂 Project Structure
🚀 How to Run Locally
📄 Pages & Features
⚡ JavaScript Functionality
🎨 Design System
♿ Accessibility
🧪 Testing
🐛 Known Issues
🔮 Future Improvements
📚 Credits & Attribution
✅ Pre-Submission Checklist
👤 Student Information
📌 About This Project
This project was built as the Quarter Assessment for the 3LOGY Software Development Bootcamp (2026). The objective was to demonstrate mastery of front-end fundamentals by building a production-ready, responsive company website using only vanilla HTML, CSS, and JavaScript — no frameworks or libraries allowed.
🎯 Key Objectives Met
✅ Semantic HTML5 structure with proper accessibility attributes
✅ Mobile-first responsive design using CSS Grid, Flexbox, and media queries
✅ DOM manipulation and event handling with vanilla JavaScript
✅ Form validation with user-friendly error messages
✅ Interactive components (mobile nav, accordion, filtering, dark mode)
✅ Consistent design system using CSS custom properties
✅ Clean, maintainable, and well-commented code
🌍 Company Context
NovaTech Solutions is a fictional technology startup headquartered in Abuja, Nigeria, specializing in:
Web & Mobile Application Development
Cloud Infrastructure & DevOps
Cybersecurity & IT Consulting
Corporate Tech Training
✨ Features
🔴 Required Features (Implemented)
Feature
Status
Description
Responsive Navigation
✅
Fixed navbar with mobile hamburger toggle, active page indicator
Mobile-First Design
✅
Fully responsive across desktop (≥992px), tablet (768-991px), mobile (≤767px)
Contact Form Validation
✅
Real-time validation for name, email, subject, message with inline errors
Service Accordion
✅
Expand/collapse service details with single-open behavior
Portfolio Grid
✅
Responsive project showcase with category filtering
Design System Usage
✅
All colors, spacing, and typography use CSS custom properties
Semantic HTML
✅
Proper use of <header>, <main>, <footer>, <nav>, <section>, <article>
Accessibility Basics
✅
Alt text on images, aria-labels on buttons, keyboard-navigable
🟢 Bonus Features (Implemented)
Feature
Status
Description
Scroll-to-Top Button
✅
Appears after 300px scroll, smooth scroll to top
Navbar Scroll Effect
✅
Adds shadow and background change on scroll
Portfolio Filtering
✅
Filter projects by category (All, Web, Mobile, Cloud, Security)
Dark Mode Toggle
✅
Persistent theme preference using localStorage + system detection
Smooth Scroll Anchors
✅
Offset scroll for fixed navbar on anchor link clicks
Typing Animation
✅
Hero section text cycles through keywords with delete/type effect
📸 Screenshots
Replace placeholder images with your actual screenshots before submission
🖥️ Desktop View
Homepage
Services
Contact



📱 Mobile View
Mobile Nav
Form Validation
Dark Mode



🛠️ Technologies Used
Technology
Version
Purpose
HTML5
5
Semantic page structure, accessibility attributes, form elements
CSS3
3
Layout (Grid/Flexbox), animations, responsive media queries, CSS variables
JavaScript
ES6+
DOM manipulation, event handling, form validation, interactive components
Google Fonts
—
Typography: Space Grotesk (headings) + Inter (body text)
Placehold.co
—
Placeholder images during development
TinyPNG
—
Image compression for optimized load times
⚠️ No frameworks or libraries were used. This project is built entirely with vanilla HTML, CSS, and JavaScript as required by the assessment brief.
📂 Project Structure
1234567891011121314151617181920212223242526
🚀 How to Run Locally
Option 1: Direct File Open (Quickest)
bash
12345678910111213
Option 2: VS Code Live Server (Recommended for Development)
bash
1234567
Option 3: Python HTTP Server
bash
123
💡 Tip: Use browser DevTools (F12) to test responsive design and check the Console for JavaScript errors.
📄 Pages & Features
✅ Homepage (index.html)
123456
✅ About Page (about.html)
12345
✅ Services Page (services.html)
12345
✅ Portfolio Page (portfolio.html)
12345
✅ Contact Page (contact.html)
12345
✅ Cross-Cutting Features
12345
⚡ JavaScript Functionality
Core Functions (assets/js/main.js)
javascript
123456789101112
Key Implementation Details
✅ All functions wrapped in DOMContentLoaded event listener
✅ Guard clauses (if (!element) return;) prevent console errors on pages without elements
✅ Form validation uses regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ for email
✅ Accordion uses classList.toggle('active') + CSS max-height transition
✅ Dark mode checks localStorage + window.matchMedia('(prefers-color-scheme: dark)')
✅ All event listeners use addEventListener (no inline onclick)
🎨 Design System
This project uses a centralized CSS custom properties system defined in :root for consistency and maintainability:
css
1234567891011121314151617181920212223242526
Usage Example
css
1234567891011121314
♿ Accessibility
This project follows basic WCAG 2.1 guidelines:
1234567
Testing Tools Used
WAVE Web Accessibility Evaluator
Chrome DevTools Lighthouse Accessibility audit
Manual keyboard navigation testing
🧪 Testing
Browser Compatibility
Browser
Version
Status
Chrome
120+
✅ Fully tested
Firefox
121+
✅ Fully tested
Safari
17+
✅ Fully tested
Edge
120+
✅ Fully tested
Responsive Testing
1234
JavaScript Testing Checklist
12345678
HTML Validation
123
🐛 Known Issues
#
Issue
Page
Severity
Workaround / Notes
1
Placeholder images used for team/portfolio
All
Low
Replace with actual images before final submission
2
Google Maps embed uses generic Abuja coordinates
Contact
Low
Update with exact office coordinates if available
3
Typing animation may feel slow on low-end devices
Homepage
Low
Adjust typeSpeed values in initTypingEffect()
4
No form backend integration (frontend-only)
Contact
N/A
Assessment requirement; would use Formspree/EmailJS in production
✅ No critical bugs at time of submission. All required functionality works as specified.
🔮 Future Improvements
If given more time, I would enhance this project with:
Form Backend Integration
Connect contact form to Formspree or EmailJS for actual message delivery.
Performance Optimizations
Implement lazy loading for images, code splitting for JS, and critical CSS inlining.
Enhanced Animations
Add scroll-triggered animations using Intersection Observer API for fade-in effects.
Advanced Accessibility
Add ARIA live regions for form validation announcements and skip-to-content links.
PWA Features
Add manifest.json and service worker for offline support and installability.
Unit Testing
Implement Jest tests for JavaScript validation and interaction logic.
Internationalization
Add language toggle for Nigerian languages (Hausa, Yoruba, Igbo) using data attributes.
📚 Credits & Attribution
Images & Assets
Asset
Source
License
Team member placeholders
Placehold.co
Free
Portfolio screenshots
Placehold.co
Free
Service icons
Heroicons
MIT
Social media icons
Simple Icons
CC0
Favicon
Custom SVG
—
Fonts
Space Grotesk — Google Fonts — SIL Open Font License
Inter — Google Fonts — SIL Open Font License
Learning Resources
MDN Web Docs — HTML/CSS/JS reference
CSS-Tricks — Layout techniques and guides
W3C Validator — HTML validation
WebAIM Contrast Checker — Accessibility testing
3LOGY Bootcamp course materials and instructor guidance
Design System
The color palette, typography scale, spacing system, and CSS custom properties were provided by the 3LOGY Software Development Bootcamp as part of the assessment starter files.
✅ Pre-Submission Checklist
1234567891011121314151617181920212223242526272829303132
👤 Student Information
Field
Details
Full Name
[Abdurrahman sulaiman]
GitHub Username
Abdulsy2002
@your-username
Cohort
3LOGY Software Development Bootcamp — 2026 Q1
Assessment
Quarter Assessment — HTML, CSS & JavaScript
Submission Date
[19/04/2026]
Live Demo URL
https://yourusername.github.io/NovaTech-Company-Website (Replace with actual URL)
Repository URL
https://github.com/abdulsy2002/abdulsy-novatech.git
💡 Note to Evaluators: This project was built following the official 3LOGY Bootcamp assessment rubric. All required features are implemented per the JS-REQUIREMENTS.md, PAGE-CONTENT-GUIDE.md, and DESIGN-SYSTEM.md specifications. Bonus features were added to demonstrate extended proficiency.
<p align="center">
<strong>Built with ❤️ at 3LOGY Software Development Bootcamp</strong><br>
<em>Empowering the next generation of African tech talent — 2026</em>
</p>

🔄 Quick Start for Evaluators
bash
123456789101112131415
Last Updated: [Date]
Project Status: ✅ Submission Ready
