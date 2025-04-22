// Virat Kohli themed blog data
const blogData = [
    {
        id: 1,
        title: "The Making of a Legend",
        category: "achievements",
        date: "2024-03-15",
        excerpt: "From a young Delhi boy to one of the greatest cricketers of all time. Explore Virat's journey to greatness.",
        image: "https://source.unsplash.com/random/800x600?cricket",
        readTime: "5 min read",
        author: "Cricket Analyst"
    },
    {
        id: 2,
        title: "Record-Breaking Centuries",
        category: "records",
        date: "2024-03-10",
        excerpt: "A deep dive into Virat's incredible century-making ability and his place in cricket history.",
        image: "https://source.unsplash.com/random/800x600?stadium",
        readTime: "7 min read",
        author: "Sports Historian"
    },
    {
        id: 3,
        title: "Leadership Legacy",
        category: "captaincy",
        date: "2024-03-05",
        excerpt: "How Virat transformed Indian cricket with his aggressive and passionate leadership style.",
        image: "https://source.unsplash.com/random/800x600?leadership",
        readTime: "8 min read",
        author: "Cricket Expert"
    },
    {
        id: 4,
        title: "Fitness Revolution",
        category: "fitness",
        date: "2024-03-01",
        excerpt: "Virat's impact on modern cricket fitness standards and his rigorous training regime.",
        image: "https://source.unsplash.com/random/800x600?fitness",
        readTime: "6 min read",
        author: "Fitness Coach"
    }
];

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Enhanced animation function with cricket-themed effects
function animateElements() {
    // Animate category buttons with bounce effect
    gsap.from('.category-btn', {
        scrollTrigger: {
            trigger: '.category-btn',
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "bounce.out"
    });

    // Animate blog posts with cricket-themed entrance
    gsap.from('.blog-post', {
        scrollTrigger: {
            trigger: '.blog-post',
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        onComplete: () => {
            // Add cricket bat swing effect to images
            gsap.to('.blog-post img', {
                rotation: 5,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "power1.inOut"
            });
        }
    });

    // Animate load more button with cricket ball bounce
    gsap.from('#load-more', {
        scrollTrigger: {
            trigger: '#load-more',
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "bounce.out"
    });
}

// Enhanced blog post card creation
function createBlogPost(post) {
    return `
        <div class="blog-post bg-secondary rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div class="relative overflow-hidden">
                <img src="${post.image}" alt="${post.title}" 
                    class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-accent rounded-full text-sm font-medium transform transition-transform duration-300 hover:scale-110">
                        ${post.category}
                    </span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span class="text-sm text-white">${post.date}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors">${post.title}</h3>
                <p class="text-gray-300 mb-4 line-clamp-2">${post.excerpt}</p>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">By ${post.author}</span>
                    <a href="#" class="text-accent hover:text-blue-400 transition-colors flex items-center group">
                        Read More
                        <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Enhanced category filter functionality
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Animate active state change with cricket-themed effect
        gsap.to('.category-btn', {
            backgroundColor: '#1e293b',
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(button, {
            backgroundColor: '#3b82f6',
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)"
        });
        
        const category = button.dataset.category;
        displayBlogPosts(category);
    });
});

// Enhanced load more functionality
document.getElementById('load-more').addEventListener('click', () => {
    // Cricket ball bounce animation
    gsap.to('#load-more', {
        y: -20,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
    });
    
    currentPage++;
    const newPosts = [...blogData];
    blogData.push(...newPosts);
    displayBlogPosts();
});

// Initial display with enhanced animations
displayBlogPosts();

// Enhanced smooth scroll for navigation
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