document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal');
    const skillCards = document.querySelectorAll('.skill-card');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        // Reveal Elements
        reveals.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });

        // Skill Bars Animation
        skillCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 100) {
                card.classList.add('in-view');
            }
        });
    };

    // Initial check on load
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);


    // --- Smooth Scrolling for Navbar Links ---
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = document.querySelector(link.getAttribute('href'));
            const headerOffset = 80;
            const elementPosition = targetId.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        // Simple toggle for mobile view (enhancement allowed)
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'var(--bg-color)';
            navMenu.style.padding = '2rem';
            navMenu.style.borderBottom = '1px solid var(--glass-border)';
            navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        }
    });
});
