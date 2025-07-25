// Mailto Generator Script - Italian Version
// Versione italiana per Subdirectory /it/

// Configurazione fissa per l'italiano
const FIXED_LANGUAGE = 'it';

// Traduzioni specifiche per l'italiano
const itTranslations = {
    "validation": {
        "to_required": "Per favore inserisci almeno un indirizzo email nel campo \"A\"",
        "invalid_email": "Per favore inserisci un indirizzo email valido"
    },
    "results": {
        "copy_success": "Copiato!",
        "copy_error": "Errore durante la copia negli appunti"
    }
};

// Funzione di validazione email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funzione di validazione email multiple
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // Campo vuoto è valido
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// Funzione di visualizzazione errori di validazione
function showValidationError(message) {
    // Rimuovi errori precedenti
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Crea nuovo messaggio di errore
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.style.cssText = `
        background-color: #f8d7da;
        color: #721c24;
        padding: 0.75rem 1rem;
        margin: 1rem 0;
        border: 1px solid #f5c6cb;
        border-radius: 0.375rem;
        font-size: 0.875rem;
    `;
    errorDiv.textContent = message;
    
    // Inserisci prima del pulsante di generazione
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // Rimuovi automaticamente dopo 5 secondi
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Funzione principale di generazione mailto
function generateMailto() {
    // Ottieni valori del form
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'Invia email';
    
    // Validazioni
    if (!to) {
        showValidationError(itTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(itTranslations.validation.invalid_email + ' (A)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(itTranslations.validation.invalid_email + ' (Cc)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(itTranslations.validation.invalid_email + ' (Ccn)');
        return;
    }
    
    // Rimuovi errori di validazione se presenti
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Crea link mailto
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // Genera codice HTML
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // Visualizza risultati
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // Visualizza sezione risultati
    document.getElementById('resultsSection').style.display = 'block';
    
    // Scorrimento fluido ai risultati
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Funzione di copia negli appunti
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Feedback visivo
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = itTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Errore durante la copia:', err);
        
        // Soluzione di fallback per browser più vecchi
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = itTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('Errore nella soluzione di fallback:', fallbackErr);
            alert(itTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// Funzione per donazioni
function donate(amount) {
    // Qui sarebbe l'integrazione con il sistema di pagamento
    console.log(`Donazione di $${amount} iniziata`);
    
    // Messaggio temporaneo
    alert('Grazie per il tuo interesse nel sostenere il progetto! La funzione di donazione sarà implementata presto.');
}

// Configurazione selettore lingua per subdirectory
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // Mappatura lingue a subdirectory
            const languageUrls = {
                'en': 'https://mailtogenpro.com/',
                'es': 'https://mailtogenpro.com/es/',
                'de': 'https://mailtogenpro.com/de/',
                'fr': 'https://mailtogenpro.com/fr/',
                'zh': 'https://mailtogenpro.com/zh/',
                'pt': 'https://mailtogenpro.com/pt/',
                'ja': 'https://mailtogenpro.com/ja/',
                'it': 'https://mailtogenpro.com/it/'
            };
            
            // Reindirizza alla subdirectory corrispondente
            if (languageUrls[selectedLang]) {
                window.location.href = languageUrls[selectedLang];
            }
        });
    });
    
    // Chiudi menu cliccando fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // Toggle del menu
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// Inizializzazione quando DOM è pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (IT) inizializzato con successo!');
    
    // Configura selettore lingua
    setupLanguageSelector();
    
    // Configura eventi del form
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // Permetti generazione con Enter nei campi di testo
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                generateMailto();
            }
        });
    });
});
