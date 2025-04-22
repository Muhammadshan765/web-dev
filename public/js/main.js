// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Enhanced animations for the hero section
gsap.from(".animate-fade-in", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power3.out",
    stagger: 0.2,
    onComplete: () => {
        gsap.to(".animate-fade-in", {
            animation: "rcbPulse 2s infinite"
        });
    }
});

gsap.from(".animate-slide-up", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    stagger: 0.2
});

// Enhanced cricket ball bounce animation for stats cards
gsap.utils.toArray(".stat-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "bounce.out",
        onComplete: () => {
            gsap.to(card, {
                animation: "ballBounce 2s infinite"
            });
        }
    });
});

// Enhanced bat swing animation for record cards
gsap.utils.toArray(".record-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        rotation: -15,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: "power2.out",
        onComplete: () => {
            gsap.to(card, {
                animation: "batSwing 2s infinite"
            });
        }
    });
});

// Enhanced hover effects for cards
document.querySelectorAll(".stat-card, .record-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 0 10px rgba(255, 0, 0, 0.2)"
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70
            },
            ease: "power2.inOut"
        });
    });
});

// RCB-themed background animation
const createCricketBall = () => {
    const ball = document.createElement('div');
    ball.className = 'cricket-ball';
    document.body.appendChild(ball);
    
    gsap.to(ball, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: 2,
        ease: "power1.inOut",
        onComplete: () => {
            ball.remove();
        }
    });
};

// Add cricket balls animation periodically
setInterval(createCricketBall, 3000);

// Enhanced form submission with RCB-themed feedback
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg';
        successMessage.textContent = 'Message sent successfully! 🏏';
        document.body.appendChild(successMessage);
        
        gsap.from(successMessage, {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
        
        setTimeout(() => {
            gsap.to(successMessage, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => successMessage.remove()
            });
        }, 3000);
        
        contactForm.reset();
    });
} 