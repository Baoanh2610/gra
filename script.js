// Particles.js cho nền (hạt bay như sao)
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Đếm ngược (như cũ, nhưng thêm animation)
const eventDate = new Date('2025-12-15T08:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Animation số nhảy (thêm class cho CSS animation)
    const spans = document.querySelectorAll('.countdown-timer span');
    spans.forEach(span => span.style.animation = 'none');
    setTimeout(() => spans.forEach(span => span.style.animation = 'pulse 0.5s ease-in-out'), 10);

    if (distance < 0) {
        document.querySelector('.countdown-timer').innerHTML = 'Lễ tốt nghiệp đã diễn ra! 🎓';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP với confetti
function sendRSVP() {
    // Bắn pháo giấy
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb']
    });
    
    const subject = 'Xác nhận tham dự lễ tốt nghiệp của [Tên Của Bạn]';
    const body = 'Kính gửi [Tên Của Bạn],\n\nTôi xác nhận tham dự lễ tốt nghiệp.\n\nTrân trọng,\n[Tên người gửi]';
    window.location.href = `mailto:[email@cuaban.com]?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}