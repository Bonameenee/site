document.addEventListener('DOMContentLoaded', function() {
    // Gestione delle schede
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Rimuovi active da tutti i pulsanti e contenuti
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Aggiungi active al pulsante cliccato
            this.classList.add('active');
            
            // Mostra il contenuto corrispondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Gestione del form di contatto
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Qui puoi aggiungere la logica per inviare il form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Form inviato:', { name, email, message });
            alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
            
            // Resetta il form
            contactForm.reset();
        });
    }
    
    // Animazione per il caricamento della pagina
    const elements = document.querySelectorAll('.info-card, .about-me, .tab-content');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});