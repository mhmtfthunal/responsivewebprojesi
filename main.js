// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    disable: 'mobile' // Disable animations on mobile devices to prevent overflow issues
});

// Initialize Swiper for Gallery
var gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(0, 0, 0, 0.95)';
        document.querySelector('.navbar').style.padding = '8px 0';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(0, 0, 0, 0.8)';
        document.querySelector('.navbar').style.padding = '12px 0';
    }
});

// Storage selection interaction
const storageBtns = document.querySelectorAll('.storage-btn');
storageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        storageBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Color selection interaction
const colorBtns = document.querySelectorAll('.color-btn');
const heroSection = document.querySelector('.hero-section');

colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active styling/transform from all (optional, current CSS handles hover only)
        
        // Here you could add logic to change the hero image based on color selection
        // if you had corresponding images. For now, just a UI interaction.
        colorBtns.forEach(b => b.style.transform = 'scale(1)');
        btn.style.transform = 'scale(1.2)';
    });
});

// Design Details Swiper
var designSwiper = new Swiper(".designSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
