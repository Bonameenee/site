document.addEventListener('DOMContentLoaded', function() {
    // Animazione barre delle competenze
    const skills = document.querySelectorAll('.skill');
    
    function animateSkills() {
        skills.forEach(skill => {
            const level = skill.getAttribute('data-level');
            const bar = skill.querySelector('.skill-bar');
            bar.style.width = level + '%';
        });
    }
    
    // Animazione al caricamento della pagina
    animateSkills();
    
    // Smooth scrolling per i link del menu
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Cambia stile navbar durante lo scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Gestione del form di contatto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Qui potresti aggiungere la logica per inviare il form
            // Ad esempio con fetch() a un backend o un servizio di email
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Form inviato:', { name, email, message });
            
            // Mostra un messaggio di successo
            alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
            
            // Resetta il form
            contactForm.reset();
        });
    }
    
    // Simulazione download CV
    const downloadCv = document.getElementById('download-cv');
    
    if (downloadCv) {
        downloadCv.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Scarica il CV in formato PDF (simulazione)');
            // In una implementazione reale, qui ci sarebbe un link al file PDF
        });
    }
    
    // Animazione elementi quando diventano visibili
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section, .project-card').forEach(section => {
        observer.observe(section);
    });
});
