// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    updateToggleIcon(true);
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
        updateToggleIcon(false);
    } else {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
        updateToggleIcon(true);
    }
});

function updateToggleIcon(isDark) {
    const icon = darkModeToggle.querySelector('i');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Hamburger Menu for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Project Filtering (on projects page)
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category.includes(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else if (name.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            emailError.textContent = 'Enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        // Subject validation
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (subject.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }
        
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            isValid = false;
        } else {
            messageError.textContent = '';
        }
        
        const formStatus = document.getElementById('formStatus');
        if (isValid) {
            formStatus.textContent = 'Thank you! Your message has been sent.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 3000);
        } else {
            formStatus.textContent = 'Please fix the errors above.';
            formStatus.className = 'form-status error';
        }
    });
}

// Typing animation for hero section
const typedTextElement = document.querySelector('.typed-text');
if (typedTextElement) {
    const phrases = ['Full Stack Java Developer', 'Data Science with Python', 'Spring Boot Enthusiast'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .blog-post, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
