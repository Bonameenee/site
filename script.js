document.addEventListener('DOMContentLoaded', function() {
    // Gestione delle schede
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Rimuovi active da tutti i pulsanti e pannelli
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
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
            
            // Simulazione invio form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Form inviato:', { name, email, message });
            alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
            
            // Resetta il form
            contactForm.reset();
        });
    }
  });