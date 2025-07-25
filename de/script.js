// Mailto Generator Script - German Version
// Deutsche Version für Subdirectory /de/

// Feste Konfiguration für Deutsch
const FIXED_LANGUAGE = 'de';

// Spezifische Übersetzungen für Deutsch
const deTranslations = {
    "validation": {
        "to_required": "Bitte geben Sie mindestens eine E-Mail-Adresse im \"An\"-Feld ein",
        "invalid_email": "Bitte geben Sie eine gültige E-Mail-Adresse ein"
    },
    "results": {
        "copy_success": "Kopiert!",
        "copy_error": "Fehler beim Kopieren in die Zwischenablage"
    }
};

// Funktion zur E-Mail-Validierung
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funktion zur Validierung mehrerer E-Mails
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // Leeres Feld ist gültig
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// Funktion zur Anzeige von Validierungsfehlern
function showValidationError(message) {
    // Vorherige Fehler entfernen
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Neue Fehlermeldung erstellen
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
    
    // Vor dem Generieren-Button einfügen
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // Nach 5 Sekunden automatisch entfernen
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Hauptfunktion zur Mailto-Generierung
function generateMailto() {
    // Formularwerte abrufen
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'E-Mail senden';
    
    // Validierungen
    if (!to) {
        showValidationError(deTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(deTranslations.validation.invalid_email + ' (An)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(deTranslations.validation.invalid_email + ' (Cc)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(deTranslations.validation.invalid_email + ' (Bcc)');
        return;
    }
    
    // Validierungsfehler entfernen, falls vorhanden
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Mailto-Link erstellen
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // HTML-Code generieren
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // Ergebnisse anzeigen
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // Ergebnisbereich anzeigen
    document.getElementById('resultsSection').style.display = 'block';
    
    // Sanftes Scrollen zu den Ergebnissen
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Funktion zum Kopieren in die Zwischenablage
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Visuelles Feedback
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = deTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Fehler beim Kopieren:', err);
        
        // Fallback für ältere Browser
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = deTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('Fehler im Fallback:', fallbackErr);
            alert(deTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// Funktion für Spenden
function donate(amount) {
    // Hier würde die Integration mit dem Zahlungssystem erfolgen
    console.log(`Spende von $${amount} initiiert`);
    
    // Vorerst Nachricht anzeigen
    alert('Vielen Dank für Ihr Interesse, das Projekt zu unterstützen! Die Spendenfunktion wird bald implementiert.');
}

// Konfiguration des Sprachselektors für Subdirectorys
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // Zuordnung von Sprachen zu Subdirectorys
            const languageUrls = {
                'en': 'https://mailtogenpro.com/',
                'es': 'https://mailtogenpro.com/es/',
                'de': 'https://mailtogenpro.com/de/',
                'fr': 'https://mailtogenpro.com/fr/',
                'zh': 'https://mailtogenpro.com/zh/',
                'pt': 'https://mailtogenpro.com/pt/',
                'ja': 'https://mailtogenpro.com/ja/',
                'it': 'https://mailtogenpro.com/it/',
                'ru': 'https://mailtogenpro.com/ru/'
            };
            
            // Zum entsprechenden Subdirectory weiterleiten
            if (languageUrls[selectedLang]) {
                const baseUrl = window.location.origin;
                window.location.href = baseUrl + languageUrls[selectedLang];
            }
        });
    });
    
    // Menü schließen bei Klick außerhalb
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // Menü-Toggle
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// Initialisierung wenn DOM bereit ist
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (DE) erfolgreich initialisiert!');
    
    // Sprachselektor konfigurieren
    setupLanguageSelector();
    
    // Formular-Events konfigurieren
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // Generierung mit Enter in Textfeldern ermöglichen
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
