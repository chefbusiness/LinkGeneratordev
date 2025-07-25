// Mailto Generator Script - Japanese Version
// 日本語版 Subdirectory /ja/

// 固定言語設定（日本語）
const FIXED_LANGUAGE = 'ja';

// 日本語専用翻訳
const jaTranslations = {
    "validation": {
        "to_required": "宛先フィールドに少なくとも1つのメールアドレスを入力してください",
        "invalid_email": "有効なメールアドレスを入力してください"
    },
    "results": {
        "copy_success": "コピーしました！",
        "copy_error": "クリップボードへのコピーでエラーが発生しました"
    }
};

// メール検証関数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 複数メール検証関数
function validateEmails(emailString) {
    if (!emailString.trim()) return true; // 空のフィールドは有効
    
    const emails = emailString.split(/[,;]/).map(email => email.trim());
    return emails.every(email => email === '' || isValidEmail(email));
}

// 検証エラー表示関数
function showValidationError(message) {
    // 既存のエラーを削除
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // 新しいエラーメッセージを作成
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
    
    // 生成ボタンの前に挿入
    const generateBtn = document.querySelector('.generate-btn');
    generateBtn.parentNode.insertBefore(errorDiv, generateBtn);
    
    // 5秒後に自動削除
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// メインのmailto生成関数
function generateMailto() {
    // フォーム値を取得
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'メールを送信';
    
    // 検証
    if (!to) {
        showValidationError(jaTranslations.validation.to_required);
        return;
    }
    
    if (!validateEmails(to)) {
        showValidationError(jaTranslations.validation.invalid_email + ' (宛先)');
        return;
    }
    
    if (cc && !validateEmails(cc)) {
        showValidationError(jaTranslations.validation.invalid_email + ' (CC)');
        return;
    }
    
    if (bcc && !validateEmails(bcc)) {
        showValidationError(jaTranslations.validation.invalid_email + ' (BCC)');
        return;
    }
    
    // 検証エラーがある場合は削除
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // mailtoリンクを作成
    let mailtoLink = 'mailto:' + encodeURIComponent(to);
    const params = [];
    
    if (cc) params.push('cc=' + encodeURIComponent(cc));
    if (bcc) params.push('bcc=' + encodeURIComponent(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    // HTMLコードを生成
    const htmlCode = `<a href="${mailtoLink}">${linkText}</a>`;
    
    // 結果を表示
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewLink').href = mailtoLink;
    document.getElementById('previewText').textContent = linkText;
    
    // 結果セクションを表示
    document.getElementById('resultsSection').style.display = 'block';
    
    // 結果へのスムーズスクロール
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// クリップボードコピー関数
async function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // 視覚的フィードバック
        const button = element.nextElementSibling;
        const originalText = button.textContent;
        button.textContent = jaTranslations.results.copy_success;
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
        
    } catch (err) {
        console.error('コピーエラー:', err);
        
        // 古いブラウザ用のフォールバック
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = jaTranslations.results.copy_success;
            button.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        } catch (fallbackErr) {
            console.error('フォールバックエラー:', fallbackErr);
            alert(jaTranslations.results.copy_error);
        }
        
        document.body.removeChild(textArea);
    }
}

// 寄付関数
function donate(amount) {
    // ここで決済システムとの統合を行います
    console.log(`$${amount}の寄付が開始されました`);
    
    // 一時的なメッセージ
    alert('プロジェクトをサポートしていただき、ありがとうございます！寄付機能は近日中に実装予定です。');
}

// サブディレクトリ用言語セレクター設定
function setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            
            // 言語からサブディレクトリへのマッピング
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
            
            // 対応するサブディレクトリにリダイレクト
            if (languageUrls[selectedLang]) {
                window.location.href = languageUrls[selectedLang];
            }
        });
    });
    
    // 外部クリックでメニューを閉じる
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('languageMenu').classList.remove('show');
        }
    });
    
    // メニューのトグル
    document.getElementById('languageBtn').addEventListener('click', () => {
        document.getElementById('languageMenu').classList.toggle('show');
    });
}

// DOM準備完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mailto Generator (JA) が正常に初期化されました！');
    
    // 言語セレクターを設定
    setupLanguageSelector();
    
    // フォームイベントを設定
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailto();
        });
    }
    
    // テキストフィールドでEnterキーによる生成を許可
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
