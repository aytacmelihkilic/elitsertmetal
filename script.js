// Contact Functions
function callPhone() {
    // Telefon numarasını buraya ekleyin
    const phoneNumber = "+905448005806";
    window.location.href = `tel:${phoneNumber}`;
}

function sendEmail() {
    const email = "info@elitsertmetal.com";
    const subject = "Elit Sert Metal - İletişim";
    const body = `Merhaba,

Elit Sert Metal hizmetleriniz hakkında bilgi almak istiyorum.

Aşağıdaki konularda detaylı bilgi alabilir miyim:
- Ürün yelpazeniz
- Fiyat listesi
- Teslimat süreleri
- Kalite standartları

İletişim bilgilerim:
Telefon: 
E-posta: 

Teşekkürler.

Saygılarımla,`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Smooth animations on load
document.addEventListener('DOMContentLoaded', function() {
    // Fade in animation for main content
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        content.style.transition = 'all 1s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.contact-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const particles = document.querySelectorAll('.particle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = x * speed * 20;
        const yPos = y * speed * 20;
        
        particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('contact-btn')) {
            focusedElement.click();
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.animation = 'progressMove 3s ease-in-out infinite';
    }
});
