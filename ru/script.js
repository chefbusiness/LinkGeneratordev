// Mailto Generator Script - Russian Version
// Русская версия для Subdirectory /ru/

// Фиксированная настройка языка (русский)
const FIXED_LANGUAGE = 'ru';

// Переводы специфичные для русского языка
const ruTranslations = {
    "validation": {
        "to_required": "Пожалуйста, введите хотя бы один email адрес в поле \"Кому\"",
        "invalid_email": "Пожалуйста, введите действительный email адрес"
    },
    "results": {
        "copy_success": "Скопировано!",
        "copy_error": "Ошибка при копировании в буфер обмена"
    }
};

// Функция валидации email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Функция валидации множественных email
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // Пустое поле действительно
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// Функция отображения ошибок валидации
function showValidationError(message) {
    // Удалить предыдущие ошибки
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Создать новое сообщение об ошибке
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
    
    // Вставить перед кнопкой генерации
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // Автоматически удалить через 5 секунд
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Основная функция генерации mailto
function generateMailto() {
    // Получить значения формы
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'Отправить email';
    
    // Валидация
    if (!to) {
        showValidationError(ruTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(ruTranslations.validation.invalid_email + ' (Кому)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(ruTranslations.validation.invalid_email + ' (Копия)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(ruTranslations.validation.invalid_email + ' (Скрытая копия)');
        return;
    }
    
    // Удалить ошибки валидации если есть
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Создать mailto ссылку
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // Сгенерировать HTML код
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // Отобразить результаты
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // Показать секцию результатов
    document.getElementById('resultsSection').style.display = 'block';
    
    // Плавная прокрутка к результатам
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Функция копирования в буфер обмена
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Визуальная обратная связь
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = ruTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('Ошибка копирования:', err);
        
        // Резервное решение для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = ruTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('Ошибка резервного решения:', fallbackErr);
            alert(ruTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// Функция для пожертвований
function donate(amount) {
    // Здесь была бы интеграция с платежной системой
    console.log(`Пожертвование $${amount} инициировано`);
    
    // Временное сообщение
    alert('Спасибо за ваш интерес к поддержке проекта! Функция пожертвований будет реализована в ближайшее время.');
}

// Настройка селектора языка для поддиректорий
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // Сопоставление языков с поддиректориями
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
            
            // Перенаправить на соответствующую поддиректорию
            if (languageUrls[selectedLang]) {
                window.location.href = languageUrls[selectedLang];
            }
        });
    });
    
    // Закрыть меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // Переключение меню
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// Инициализация при готовности DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (RU) успешно инициализирован!');
    
    // Настроить селектор языка
    setupLanguageSelector();
    
    // Настроить события формы
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // Разрешить генерацию по Enter в текстовых полях
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
