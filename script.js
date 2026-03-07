// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = `
            linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(5, 5, 5, 0.98) 50%, rgba(0, 0, 0, 0.98) 100%),
            radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.12), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(78, 205, 196, 0.12), transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(69, 183, 209, 0.08), transparent 50%)
        `;
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 107, 107, 0.1)';
    } else {
        navbar.style.background = `
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.95) 50%, rgba(0, 0, 0, 0.95) 100%),
            radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.08), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(78, 205, 196, 0.08), transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(69, 183, 209, 0.06), transparent 50%)
        `;
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// BEAST TYPEWRITER EFFECT
class BeastTypewriter {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.typeSpeed = options.typeSpeed || 100;
        this.backSpeed = options.backSpeed || 50;
        this.startDelay = options.startDelay || 1000;
        this.backDelay = options.backDelay || 2000;
        this.loop = options.loop !== false;
        this.currentTextIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.start();
    }

    start() {
        setTimeout(() => {
            this.type();
        }, this.startDelay);
    }

    type() {
        const fullText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.currentText = fullText.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = fullText.substring(0, this.currentText.length + 1);
        }

        this.element.textContent = this.currentText;

        let typeSpeed = this.isDeleting ? this.backSpeed : this.typeSpeed;

        if (!this.isDeleting && this.currentText === fullText) {
            typeSpeed = this.backDelay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = this.typeSpeed;
        }

        setTimeout(() => {
            this.type();
        }, typeSpeed);
    }
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 100);
    }
    
    // Initialize BEAST typewriter
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const texts = [
            'Computer Engineer',
            'Full Stack Developer',
            'UI/UX Designer',
            'Frontend Developer',
            'Backend Developer',
            'Software Engineer',
            'Web Developer',
            'React Developer'
        ];
        
        new BeastTypewriter(typewriterElement, texts, {
            typeSpeed: 150,
            backSpeed: 100,
            startDelay: 2000,
            backDelay: 3000,
            loop: true
        });
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .skill-category, .stat {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .project-card.animate-in, .skill-category.animate-in, .stat.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: #2563eb !important;
        font-weight: 600;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'images/profile.jpg',
        'images/about.jpg',
        'images/project1.jpg',
        'images/project2.jpg',
        'images/project3.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Call preload function
preloadImages();

// (removed duplicate mobile menu functionality)

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation and scroll effects
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }

    @keyframes cardFloat {
        0% {
            transform: translateY(30px) scale(0.95) rotateX(10deg);
            opacity: 0;
        }
        50% {
            transform: translateY(-10px) scale(1.02) rotateX(-2deg);
        }
        100% {
            transform: translateY(0) scale(1) rotateX(0deg);
            opacity: 1;
        }
    }

    @keyframes cardGlow {
        0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.2);
        }
        50% { 
            box-shadow: 0 0 40px rgba(255, 107, 107, 0.4), 0 0 60px rgba(78, 205, 196, 0.3);
        }
    }

    @keyframes skillPop {
        0% {
            transform: scale(0.8) rotate(-5deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.1) rotate(2deg);
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }

    @keyframes statBounce {
        0% {
            transform: translateY(40px) scale(0.9);
            opacity: 0;
        }
        60% {
            transform: translateY(-15px) scale(1.05);
        }
        100% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    }

    @keyframes explosion {
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(loadingStyle); 

// Progress bars animation (linear and circular)
let progressAnimated = false;
function animateProgressBars() {
    if (progressAnimated) return;
    progressAnimated = true;

    // Linear bars
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach((bar, index) => {
        const percentage = parseInt(bar.getAttribute('data-percentage') || '0', 10);
        bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, index * 150);
    });

    // Circular bars
    const circles = document.querySelectorAll('.circular-progress-fill');
    circles.forEach((circle, index) => {
        const percentage = parseInt(circle.getAttribute('data-percentage') || '0', 10);
        const radius = parseFloat(circle.getAttribute('r') || '50');
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = String(circumference);
        circle.style.strokeDashoffset = String(circumference);

        setTimeout(() => {
            const offset = circumference - (percentage / 100) * circumference;
            circle.style.strokeDashoffset = String(offset);

            const item = circle.closest('.circular-progress-item');
            if (item) {
                item.style.animation = 'explosion 0.6s ease-out';
                setTimeout(() => (item.style.animation = ''), 650);
            }
        }, index * 300);
    });
}

// Enhanced scroll animations for all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .about-content, .hero-content, .contact-form');
    
    // Add initial hidden state
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Intersection Observer for smooth section animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const elements = section.querySelectorAll('.project-card, .skill-category, .stat, .about-content, .hero-content, .contact-form');
                
                // Animate elements in sequence
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                        
                        // Add special effects based on element type
                        if (el.classList.contains('project-card')) {
                            el.style.animation = 'cardFloat 0.6s ease-out';
                            // Add continuous glow animation
                            setTimeout(() => {
                                el.style.animation = 'cardGlow 3s ease-in-out infinite';
                            }, 600);
                        }
                        if (el.classList.contains('skill-category')) {
                            el.style.animation = 'skillPop 0.5s ease-out';
                        }
                        if (el.classList.contains('stat')) {
                            el.style.animation = 'statBounce 0.7s ease-out';
                        }
                    }, index * 200);
                });

                // Special handling for progress section
                if (section.id === 'progress') {
                    setTimeout(() => animateProgressBars(), 500);
                }
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Mobile touch interactions
if ('ontouchstart' in window) {
    // Add touch feedback to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', () => {
            card.style.transform = '';
        });
    });
    
    // Add touch feedback to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('touchend', () => {
            btn.style.transform = '';
        });
    });
}

// Optimize animations for mobile
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduce animation complexity on mobile
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        
        // Disable heavy background animations on low-end devices
        if (navigator.hardwareConcurrency <= 4) {
            document.querySelectorAll('.geometric-shapes, .energy-waves-modern').forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        }
    }
}

// Call optimization on load and resize
window.addEventListener('load', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Certificates Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const certificatesBtn = document.querySelector('.certificates-btn');
    
    if (certificatesBtn) {
        certificatesBtn.addEventListener('click', () => {
            showCertificatesModal();
        });
    }
});

function showCertificatesModal() {
    // Create modal HTML
    const modalHTML = `
        <div class="certificates-modal" id="certificatesModal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2><i class="fas fa-certificate"></i> All Certificates</h2>
                    <button class="modal-close" id="closeModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="certificates-modal-grid">
                        <div class="certificate-modal-item">
                            <div class="certificate-image">
                                <img src="images/certificate1.jpg" alt="Web Development Bootcamp Certificate" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkQzNTQwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+V2ViIERldmVsb3BtZW50IEJvb3RjYW1wPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjQ0NDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VWRlbXkgLSBEci4gQW5nZWxhIFl1PC90ZXh0Pgo8L3N2Zz4K'">
                            </div>
                            <div class="certificate-details">
                                <h3>Web Development Bootcamp</h3>
                                <p><strong>Platform:</strong> Udemy</p>
                                <p><strong>Instructor:</strong> Dr. Angela Yu</p>
                                <p><strong>Duration:</strong> 61.5 hours</p>
                                <p><strong>Completed:</strong> December 13, 2024</p>
                                <div class="certificate-badge">
                                    <i class="fas fa-check-circle"></i>
                                    Verified Certificate
                                </div>
                            </div>
                        </div>
                        
                        <div class="certificate-modal-item">
                            <div class="certificate-image">
                                <img src="images/certificate2.jpg" alt="React Native Development Certificate" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkQzNTQwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UmVhY3QgTmF0aXZlIERldmVsb3BtZW50PC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjQ0NDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW5mb3N5cyBTcHJpbmdib2FyZDwvdGV4dD4KPC9zdmc+Cg=='">
                            </div>
                            <div class="certificate-details">
                                <h3>React Native Development</h3>
                                <p><strong>Platform:</strong> Infosys Springboard</p>
                                <p><strong>Course:</strong> Mastering React Native Development</p>
                                <p><strong>Duration:</strong> Comprehensive Course</p>
                                <p><strong>Completed:</strong> March 23, 2025</p>
                                <div class="certificate-badge">
                                    <i class="fas fa-check-circle"></i>
                                    Course Completion Certificate
                                </div>
                            </div>
                        </div>
                        
                        <div class="certificate-modal-item">
                            <div class="certificate-image">
                                <img src="images/certificate3.jpg" alt="Soft Skills Development Certificate" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkQzNTQwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U29mdCBTa2lsbHMgRGV2ZWxvcG1lbnQ8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNDQ0MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TR0JTIHVubmF0aTwvdGV4dD4KPC9zdmc+Cg=='">
                            </div>
                            <div class="certificate-details">
                                <h3>Soft Skills Development</h3>
                                <p><strong>Platform:</strong> SGBS UNNATI Foundation</p>
                                <p><strong>Program:</strong> Soft Skill Development Program</p>
                                <p><strong>Duration:</strong> 165 hours</p>
                                <p><strong>Completed:</strong> November 23, 2024</p>
                                <div class="certificate-badge">
                                    <i class="fas fa-check-circle"></i>
                                    Training Certificate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal with animation
    setTimeout(() => {
        const modal = document.getElementById('certificatesModal');
        modal.classList.add('show');
    }, 10);
    
    // Close modal functionality
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    function closeModalFunc() {
        const modal = document.getElementById('certificatesModal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
    
    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModalFunc();
        }
    });
}