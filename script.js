// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const headerToggle = document.querySelector('.header .toggle-icon');
    const navbarToggle = document.querySelector('.navbar-toggle-icon');
    
    body.classList.toggle('dark-mode');
    
    // Update icons - swap between moon and sun
    const sunIcon = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    
    if (body.classList.contains('dark-mode')) {
        if (headerToggle) headerToggle.innerHTML = sunIcon;
        if (navbarToggle) navbarToggle.innerHTML = sunIcon;
        localStorage.setItem('darkMode', 'enabled');
    } else {
        if (headerToggle) headerToggle.innerHTML = moonIcon;
        if (navbarToggle) navbarToggle.innerHTML = moonIcon;
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    const sunIcon = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
        const headerToggle = document.querySelector('.header .toggle-icon');
        const navbarToggle = document.querySelector('.navbar-toggle-icon');
        if (headerToggle) headerToggle.innerHTML = sunIcon;
        if (navbarToggle) navbarToggle.innerHTML = sunIcon;
    }
});

// Registration Modal Functions
function openRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'block';
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
const form = document.querySelector('.registration-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const organization = document.getElementById('organization').value;
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(cb => cb.value)
            .join(', ');
        
        // Log the registration (in a real application, this would send data to a server)
        console.log('Registration submitted:', {
            fullName,
            email,
            organization,
            interests: interests || 'Not specified'
        });
        
        // Show success message
        alert(`Thank you for registering, ${fullName}!\n\nWe'll send confirmation details to ${email} shortly.`);
        
        // Reset form and close modal
        form.reset();
        closeRegistrationModal();
    });
}

// Add smooth scroll behavior for navigation links
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

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbarToggle = document.querySelector('.navbar-dark-mode-toggle');
    const header = document.querySelector('.header');
    
    // Show/hide navbar dark mode toggle based on scroll position
    if (header && navbarToggle) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        if (window.pageYOffset > headerBottom) {
            navbarToggle.classList.add('visible');
        } else {
            navbarToggle.classList.remove('visible');
        }
    }
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
