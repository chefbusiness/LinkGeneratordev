// Mailto Generator Script - Portuguese Version
// Versão portuguesa para Subdirectory /pt/

// Configuração fixa para o português
const FIXED_LANGUAGE = 'pt';

// Traduções específicas para o português
const ptTranslations = {
    "validation": {
        "to_required": "Por favor insira pelo menos um endereço de email no campo \"Para\"",
        "invalid_email": "Por favor insira um endereço de email válido"
    },
    "results": {
        "copy_success": "Copiado!",
        "copy_error": "Erro ao copiar para a área de transferência"
    }
};

// Função de validação de emails
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função de validação de múltiplos emails
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // Campo vazio é válido
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// Função de exibição de erros de validação
function showValidationError(message) {
    // Remover erros anteriores
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Criar nova mensagem de erro
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
    
    // Inserir antes do botão de geração
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Função principal de geração mailto
function generateMailto() {
    // Obter valores do formulário
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'Enviar email';
    
    // Validações
    if (!to) {
        showValidationError(ptTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(ptTranslations.validation.invalid_email + ' (Para)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(ptTranslations.validation.invalid_email + ' (Cc)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(ptTranslations.validation.invalid_email + ' (Cco)');
        return;
    }
    
    // Remover erros de validação se presentes
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Criar link mailto
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // Gerar código HTML
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // Exibir resultados
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // Exibir seção de resultados
    document.getElementById('resultsSection').style.display = 'block';
    
    // Rolagem suave para os resultados
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Função de cópia para área de transferência
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Feedback visual
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = ptTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Erro ao copiar:', err);
        
        // Solução de fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = ptTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('Erro na solução de fallback:', fallbackErr);
            alert(ptTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// Função para doações
function donate(amount) {
    // Aqui seria a integração com o sistema de pagamento
    console.log(`Doação de $${amount} iniciada`);
    
    // Mensagem temporária
    alert('Obrigado pelo seu interesse em apoiar o projeto! A função de doação será implementada em breve.');
}

// Configuração do seletor de idiomas para subdirectórios
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // Mapeamento de idiomas para subdirectórios
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
            
            // Redirecionar para o subdirectório correspondente
            if (languageUrls[selectedLang]) {
                window.location.href = languageUrls[selectedLang];
            }
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // Toggle do menu
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (PT) inicializado com sucesso!');
    
    // Configurar seletor de idiomas
    setupLanguageSelector();
    
    // Configurar eventos do formulário
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // Permitir geração com Enter nos campos de texto
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
