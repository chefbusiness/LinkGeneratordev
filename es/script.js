// Mailto Generator Script - Spanish Version
// Versión específica para subdirectorio /es/

// Configuración fija para español
const FIXED_LANGUAGE = 'es';

// Traducciones específicas para español
const esTranslations = {
    "validation": {
        "to_required": "Por favor ingresa al menos una dirección de email en el campo \"Para\"",
        "invalid_email": "Por favor ingresa una dirección de email válida"
    },
    "results": {
        "copy_success": "¡Copiado!",
        "copy_error": "Error al copiar al portapapeles"
    }
};

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar múltiples emails
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // Campo vacío es válido
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// Función para mostrar errores de validación
function showValidationError(message) {
    // Remover errores previos
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Crear nuevo mensaje de error
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
    
    // Insertar antes del botón de generar
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Función principal para generar mailto
function generateMailto() {
    // Obtener valores del formulario
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'Enviar email';
    
    // Validaciones
    if (!to) {
        showValidationError(esTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(esTranslations.validation.invalid_email + ' (Para)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(esTranslations.validation.invalid_email + ' (Cc)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(esTranslations.validation.invalid_email + ' (Bcc)');
        return;
    }
    
    // Remover errores de validación si existen
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Construir el enlace mailto
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // Generar código HTML
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // Mostrar resultados
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // Mostrar sección de resultados
    document.getElementById('resultsSection').style.display = 'block';
    
    // Scroll suave a los resultados
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Función para copiar al portapapeles
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Feedback visual
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = esTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Error al copiar:', err);
        
        // Fallback para navegadores más antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = esTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('Error en fallback:', fallbackErr);
            alert(esTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// Función para donaciones
function donate(amount) {
    // Aquí iría la integración con el sistema de pagos
    console.log(`Donación de $${amount} iniciada`);
    
    // Por ahora, mostrar mensaje
    alert('¡Gracias por tu interés en apoyar el proyecto! La funcionalidad de donaciones se implementará pronto.');
}

// Configuración del selector de idiomas para subdirectorios
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // Mapeo de idiomas a subdirectorios
            const languageUrls = {
                'en': 'https://mailtogenpro.com/',
                'es': 'https://mailtogenpro.com/es/',
                'de': 'https://mailtogenpro.com/de/',
                'fr': 'https://mailtogenpro.com/fr/',
                'zh': 'https://mailtogenpro.com/zh/',
                'pt': 'https://mailtogenpro.com/pt/',
                'ja': 'https://mailtogenpro.com/ja/',
                'it': 'https://mailtogenpro.com/it/',
                'ru': 'https://mailtogenpro.com/ru/',
                'ar': 'https://mailtogenpro.com/ar/',
                'hi': 'https://mailtogenpro.com/hi/'
            };
            
            // Redirigir al subdirectorio correspondiente
            if (languageUrls[selectedLang]) {
                window.location.href = languageUrls[selectedLang];
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // Toggle del menú
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (ES) initialized successfully!');
    
    // Configurar selector de idiomas
    setupLanguageSelector();
    
    // Configurar eventos del formulario
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // Permitir generar con Enter en los campos de texto
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
