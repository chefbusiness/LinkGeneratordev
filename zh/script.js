// Mailto Generator Script - Chinese Version
// 中文版本用于子目录 /zh/

// 中文固定配置
const FIXED_LANGUAGE = 'zh';

// 中文特定翻译
const zhTranslations = {
    "validation": {
        "to_required": "请在\"收件人\"字段中输入至少一个电子邮件地址",
        "invalid_email": "请输入有效的电子邮件地址"
    },
    "results": {
        "copy_success": "已复制！",
        "copy_error": "复制到剪贴板时出错"
    }
};

// 电子邮件验证函数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 多个电子邮件验证函数
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // 空字段有效
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// 显示验证错误函数
function showValidationError(message) {
    // 移除之前的错误
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // 创建新的错误消息
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
    
    // 在生成按钮前插入
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // 5秒后自动移除
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// 主要的mailto生成函数
function generateMailto() {
    // 获取表单值
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || '发送邮件';
    
    // 验证
    if (!to) {
        showValidationError(zhTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(zhTranslations.validation.invalid_email + ' (收件人)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(zhTranslations.validation.invalid_email + ' (抄送)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(zhTranslations.validation.invalid_email + ' (密送)');
        return;
    }
    
    // 移除验证错误（如果存在）
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // 创建mailto链接
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // 生成HTML代码
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // 显示结果
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // 显示结果部分
    document.getElementById('resultsSection').style.display = 'block';
    
    // 平滑滚动到结果
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// 复制到剪贴板函数
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // 视觉反馈
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = zhTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('复制时出错:', err);
        
        // 旧浏览器的后备方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = zhTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('后备方案出错:', fallbackErr);
            alert(zhTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// 捐赠函数
function donate(amount) {
    // 这里将集成支付系统
    console.log(`发起 $${amount} 捐赠`);
    
    // 临时消息
    alert('感谢您有兴趣支持该项目！捐赠功能即将实现。');
}

// 为子目录配置语言选择器
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // 语言到子目录的映射
            const languageUrls = {
                'en': '/',
                'es': '/es/',
                'de': '/de/',
                'fr': '/fr/',
                'zh': '/zh/'
            };
            
            // 重定向到相应的子目录
            if (languageUrls[selectedLang]) {
                const baseUrl = window.location.origin;
                window.location.href = baseUrl + languageUrls[selectedLang];
            }
        });
    });
    
    // 点击外部时关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // 菜单切换
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// DOM准备就绪时初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (ZH) 初始化成功！');
    
    // 配置语言选择器
    setupLanguageSelector();
    
    // 配置表单事件
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // 允许在文本字段中使用回车键生成
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
