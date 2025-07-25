// Mailto Generator Script - French Version
// Version française pour Subdirectory /fr/

// Configuration fixe pour le français
const FIXED_LANGUAGE = 'fr';

// Traductions spécifiques pour le français
const frTranslations = {
    "validation": {
        "to_required": "Veuillez saisir au moins une adresse email dans le champ \"Destinataire\"",
        "invalid_email": "Veuillez saisir une adresse email valide"
    },
    "results": {
        "copy_success": "Copié !",
        "copy_error": "Erreur lors de la copie dans le presse-papiers"
    }
};

// Fonction de validation des emails
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction de validation de plusieurs emails
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // Champ vide est valide
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// Fonction d'affichage des erreurs de validation
function showValidationError(message) {
    // Supprimer les erreurs précédentes
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Créer un nouveau message d'erreur
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
    
    // Insérer avant le bouton de génération
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // Supprimer automatiquement après 5 secondes
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Fonction principale de génération mailto
function generateMailto() {
    // Récupérer les valeurs du formulaire
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'Envoyer un email';
    
    // Validations
    if (!to) {
        showValidationError(frTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(frTranslations.validation.invalid_email + ' (Destinataire)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(frTranslations.validation.invalid_email + ' (Cc)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(frTranslations.validation.invalid_email + ' (Cci)');
        return;
    }
    
    // Supprimer les erreurs de validation si présentes
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Créer le lien mailto
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // Générer le code HTML
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // Afficher les résultats
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // Afficher la section des résultats
    document.getElementById('resultsSection').style.display = 'block';
    
    // Défilement fluide vers les résultats
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Fonction de copie dans le presse-papiers
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Retour visuel
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = frTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Erreur lors de la copie:', err);
        
        // Solution de repli pour les navigateurs plus anciens
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = frTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('Erreur dans la solution de repli:', fallbackErr);
            alert(frTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// Fonction pour les dons
function donate(amount) {
    // Ici serait l'intégration avec le système de paiement
    console.log(`Don de $${amount} initié`);
    
    // Message temporaire
    alert('Merci de votre intérêt pour soutenir le projet ! La fonction de don sera bientôt implémentée.');
}

// Configuration du sélecteur de langue pour les subdirectories
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // Mappage des langues vers les subdirectories
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
            
            // Rediriger vers le subdirectory correspondant
            if (languageUrls[selectedLang]) {
                const baseUrl = window.location.origin;
                window.location.href = baseUrl + languageUrls[selectedLang];
            }
        });
    });
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // Toggle du menu
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (FR) initialisé avec succès !');
    
    // Configurer le sélecteur de langue
    setupLanguageSelector();
    
    // Configurer les événements du formulaire
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // Permettre la génération avec Entrée dans les champs de texte
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
