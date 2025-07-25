// Sistema de traducciones inline para MailtoGen Pro
// Translation system with inline translations for MailtoGen Pro

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇺🇸' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'zh': { name: '中文', flag: '🇨🇳' },
            'hi': { name: 'हिन्दी', flag: '🇮🇳' },
            'fr': { name: 'Français', flag: '🇫🇷' },
            'de': { name: 'Deutsch', flag: '🇩🇪' },
            'ja': { name: '日本語', flag: '🇯🇵' },
            'ko': { name: '한국어', flag: '🇰🇷' },
            'pt': { name: 'Português', flag: '🇵🇹' },
            'ru': { name: 'Русский', flag: '🇷🇺' },
            'it': { name: 'Italiano', flag: '🇮🇹' },
            'nl': { name: 'Nederlands', flag: '🇳🇱' },
            'sv': { name: 'Svenska', flag: '🇸🇪' },
            'tr': { name: 'Türkçe', flag: '🇹🇷' },
            'pl': { name: 'Polski', flag: '🇵🇱' },
            'ar': { name: 'العربية', flag: '🇦🇪' },
            'th': { name: 'ไทย', flag: '🇹🇭' },
            'vi': { name: 'Tiếng Việt', flag: '🇻🇳' },
            'id': { name: 'Bahasa Indonesia', flag: '🇮🇩' },
            'uk': { name: 'Українська', flag: '🇺🇦' }
        };
        
        // Traducciones inline
        this.translations = {
            'en': {
                "meta": {
                    "title": "Mailto Link Generator - Create Professional Email Links Instantly",
                    "description": "Generate professional mailto links with pre-filled subject, body, CC, BCC, and more. Perfect for developers, marketers, and businesses. Free online tool.",
                    "keywords": "mailto link generator, email link creator, mailto URL, email marketing, web development, contact forms"
                },
                "header": {
                    "title": "Mailto Link Generator",
                    "subtitle": "Create professional email links with pre-filled content"
                },
                "form": {
                    "email_label": "To",
                    "email_placeholder": "recipient@email.com",
                    "subject_label": "Subject",
                    "subject_placeholder": "Email subject",
                    "body_label": "Body",
                    "body_placeholder": "Email content...",
                    "cc_label": "Cc",
                    "cc_placeholder": "copy@email.com",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "blind@email.com",
                    "link_text": "Link text",
                    "generate_button": "Generate my mailto link",
                    "copy_button": "Copy",
                    "test_button": "Test the link",
                    "validation": {
                        "to_required": "Please enter at least one email address in the \"To\" field",
                        "invalid_email": "Please enter a valid email address"
                    }
                },
                "results": {
                    "title": "Mailto link",
                    "html_code_title": "HTML code",
                    "test_title": "Test the link",
                    "copy_button": "Copy",
                    "copy_success": "Copied!",
                    "copy_error": "Error copying to clipboard"
                },
                "donation": {
                    "title": "Support This Project",
                    "description": "If this tool has been helpful, consider supporting its development with a small donation.",
                    "button_text": "Buy me a coffee ☕",
                    "button": "Buy me a coffee"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. All rights reserved.",
                    "privacy": "Privacy Policy",
                    "terms": "Terms of Service",
                    "contact": "Contact"
                }
            },
            'es': {
                "meta": {
                    "title": "Generador de Enlaces Mailto - Crea Enlaces de Email Profesionales al Instante",
                    "description": "Genera enlaces mailto profesionales con asunto, cuerpo, CC, BCC y más prellenados. Perfecto para desarrolladores, marketers y empresas. Herramienta gratuita online.",
                    "keywords": "generador enlaces mailto, creador enlaces email, URL mailto, marketing por email, desarrollo web, formularios de contacto"
                },
                "header": {
                    "title": "Generador de Enlaces Mailto",
                    "subtitle": "Crea enlaces de email profesionales al instante"
                },
                "form": {
                    "email_label": "Para",
                    "email_placeholder": "destinatario@ejemplo.com",
                    "subject_label": "Asunto",
                    "subject_placeholder": "Asunto del email",
                    "body_label": "Cuerpo",
                    "body_placeholder": "Contenido del email...",
                    "cc_label": "Cc",
                    "cc_placeholder": "copia@ejemplo.com",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "copia_oculta@ejemplo.com",
                    "link_text": "Texto del enlace",
                    "generate_button": "Generar mi enlace mailto",
                    "copy_button": "Copiar",
                    "test_button": "Probar el enlace",
                    "validation": {
                        "to_required": "Por favor ingresa al menos una dirección de email en el campo \"Para\"",
                        "invalid_email": "Por favor ingresa una dirección de email válida"
                    }
                },
                "results": {
                    "title": "Enlace mailto",
                    "html_code_title": "Código HTML",
                    "test_title": "Probar el enlace",
                    "copy_button": "Copiar",
                    "copy_success": "¡Copiado!",
                    "copy_error": "Error al copiar al portapapeles"
                },
                "donation": {
                    "title": "Apoya Este Proyecto",
                    "description": "Si esta herramienta te ha sido útil, considera apoyar su desarrollo con una pequeña donación.",
                    "button_text": "Cómprame un café ☕",
                    "button": "Cómprame un café"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. Todos los derechos reservados.",
                    "privacy": "Política de Privacidad",
                    "terms": "Términos de Servicio",
                    "contact": "Contacto"
                }
            },
            'zh': {
                "meta": {
                    "title": "Mailto链接生成器 - 即时创建专业邮件链接",
                    "description": "生成专业的mailto链接，预填主题、正文、抄送、密送等。完美适用于开发者、营销人员和企业。免费在线工具。",
                    "keywords": "mailto链接生成器, 邮件链接创建器, mailto URL, 邮件营销, 网页开发, 联系表单"
                },
                "header": {
                    "title": "Mailto链接生成器",
                    "subtitle": "即时创建专业邮件链接"
                },
                "form": {
                    "email_label": "收件人",
                    "email_placeholder": "recipient@example.com",
                    "subject_label": "主题",
                    "subject_placeholder": "邮件主题",
                    "body_label": "正文",
                    "body_placeholder": "邮件内容...",
                    "cc_label": "抄送",
                    "cc_placeholder": "cc@example.com",
                    "bcc_label": "密送",
                    "bcc_placeholder": "bcc@example.com",
                    "link_text": "链接文本",
                    "generate_button": "生成我的mailto链接",
                    "copy_button": "复制",
                    "test_button": "测试链接",
                    "validation": {
                        "to_required": "请在收件人字段中至少输入一个邮箱地址",
                        "invalid_email": "请输入有效的邮箱地址"
                    }
                },
                "results": {
                    "title": "Mailto链接",
                    "html_code_title": "HTML代码",
                    "test_title": "测试链接",
                    "copy_button": "复制",
                    "copy_success": "已复制！",
                    "copy_error": "复制到剪贴板时出错"
                },
                "donation": {
                    "title": "支持这个项目",
                    "description": "如果这个工具对您有帮助，请考虑通过小额捐赠来支持其开发。",
                    "button_text": "请我喝咖啡 ☕",
                    "button": "请我喝咖啡"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. 保留所有权利。",
                    "privacy": "隐私政策",
                    "terms": "服务条款",
                    "contact": "联系我们"
                }
            },
            'fr': {
                "meta": {
                    "title": "Générateur de Liens Mailto - Créez des Liens Email Professionnels Instantanément",
                    "description": "Générez des liens mailto professionnels avec sujet, corps, CC, BCC pré-remplis. Parfait pour les développeurs, marketeurs et entreprises. Outil gratuit en ligne.",
                    "keywords": "générateur liens mailto, créateur liens email, URL mailto, marketing email, développement web, formulaires de contact"
                },
                "header": {
                    "title": "Générateur de Liens Mailto",
                    "subtitle": "Créez des liens email professionnels instantanément"
                },
                "form": {
                    "email_label": "Destinataire",
                    "email_placeholder": "destinataire@exemple.com",
                    "subject_label": "Sujet",
                    "subject_placeholder": "Sujet de l'email",
                    "body_label": "Corps",
                    "body_placeholder": "Contenu de l'email...",
                    "cc_label": "Cc",
                    "cc_placeholder": "copie@exemple.com",
                    "bcc_label": "Bcc",
                    "bcc_placeholder": "copie_cachee@exemple.com",
                    "link_text": "Texte du lien",
                    "generate_button": "Générer mon lien mailto",
                    "copy_button": "Copier",
                    "test_button": "Tester le lien",
                    "validation": {
                        "to_required": "Veuillez saisir au moins une adresse email dans le champ \"Destinataire\"",
                        "invalid_email": "Veuillez saisir une adresse email valide"
                    }
                },
                "results": {
                    "title": "Lien mailto",
                    "html_code_title": "Code HTML",
                    "test_title": "Tester le lien",
                    "copy_button": "Copier",
                    "copy_success": "Copié !",
                    "copy_error": "Erreur lors de la copie dans le presse-papiers"
                },
                "donation": {
                    "title": "Soutenez ce Projet",
                    "description": "Si cet outil vous a été utile, considérez soutenir son développement avec un petit don.",
                    "button_text": "Offrez-moi un café ☕",
                    "button": "Offrez-moi un café"
                },
                "footer": {
                    "copyright": "© 2024 MailtoGen Pro. Tous droits réservés.",
                    "privacy": "Politique de Confidentialité",
                    "terms": "Conditions de Service",
                    "contact": "Contact"
                }
            }
        };
    }

    async init() {
        // Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        const savedLang = localStorage.getItem('mailtoGenLang');
        
        this.currentLanguage = savedLang || (this.supportedLanguages[browserLang] ? browserLang : 'en');
        
        this.createLanguageSelector();
        this.applyTranslations();
    }

    createLanguageSelector() {
        this.updateLanguageButton();
        this.setupLanguageSelectorEvents();
    }

    setupLanguageSelectorEvents() {
        const langButton = document.getElementById('languageBtn');
        const langMenu = document.getElementById('languageMenu');
        const langOptions = document.querySelectorAll('.language-option');

        if (!langButton || !langMenu) return;

        langButton.addEventListener('click', () => {
            langMenu.classList.toggle('show');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                langMenu.classList.remove('show');
            }
        });

        // Manejar selección de idioma
        langOptions.forEach(option => {
            option.addEventListener('click', async () => {
                const newLang = option.dataset.lang;
                if (newLang !== this.currentLanguage && this.translations[newLang]) {
                    await this.changeLanguage(newLang);
                }
                langMenu.classList.remove('show');
            });
        });
    }

    async changeLanguage(newLang) {
        this.currentLanguage = newLang;
        localStorage.setItem('mailtoGenLang', newLang);
        
        this.updateLanguageButton();
        this.applyTranslations();
        
        // Actualizar meta tags
        document.documentElement.lang = newLang;
        this.updateMetaTags();
    }

    updateLanguageButton() {
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        
        if (currentFlag && currentLang) {
            const lang = this.supportedLanguages[this.currentLanguage];
            
            // Mapeo de banderas SVG para cada idioma
            const flagSvgs = {
                'en': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E",
                'es': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23AA151B'/%3E%3Crect width='60' height='10' y='10' fill='%23F1BF00'/%3E%3C/svg%3E",
                'zh': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23DE2910'/%3E%3Cpolygon fill='%23FFDE00' points='12,6 14.5,12.5 21,12.5 16,16.5 18.5,23 12,19 5.5,23 8,16.5 3,12.5 9.5,12.5'/%3E%3C/svg%3E",
                'fr': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='20' height='30' fill='%23002395'/%3E%3Crect x='20' width='20' height='30' fill='%23FFFFFF'/%3E%3Crect x='40' width='20' height='30' fill='%23ED2939'/%3E%3C/svg%3E",
                'de': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='10' fill='%23000000'/%3E%3Crect y='10' width='60' height='10' fill='%23DD0000'/%3E%3Crect y='20' width='60' height='10' fill='%23FFCE00'/%3E%3C/svg%3E",
                'ja': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23FFFFFF'/%3E%3Ccircle cx='30' cy='15' r='9' fill='%23BC002D'/%3E%3C/svg%3E",
                'ko': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23FFFFFF'/%3E%3Ccircle cx='30' cy='15' r='8' fill='%23CD2E3A'/%3E%3C/svg%3E",
                'pt': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='24' height='30' fill='%23046A38'/%3E%3Crect x='24' width='36' height='30' fill='%23DA020E'/%3E%3C/svg%3E"
            };
            
            // Usar la bandera específica o la de inglés por defecto
            const flagSrc = flagSvgs[this.currentLanguage] || flagSvgs['en'];
            currentFlag.src = flagSrc;
            currentFlag.alt = lang ? lang.name : 'Language';
            currentLang.textContent = this.currentLanguage.toUpperCase();
        }
    }

    applyTranslations() {
        const currentTranslations = this.translations[this.currentLanguage] || this.translations['en'];
        
        // Traducir elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getTranslation(key, currentTranslations);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Traducir placeholders específicos
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.dataset.translatePlaceholder;
            const translation = this.getTranslation(key, currentTranslations);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Traducir títulos y meta descriptions
        this.updateMetaTags();
    }

    updateMetaTags() {
        const currentTranslations = this.translations[this.currentLanguage] || this.translations['en'];
        const titleElement = document.querySelector('title');
        const descriptionElement = document.querySelector('meta[name="description"]');
        const keywordsElement = document.querySelector('meta[name="keywords"]');

        if (titleElement && currentTranslations.meta?.title) {
            titleElement.textContent = currentTranslations.meta.title;
        }

        if (descriptionElement && currentTranslations.meta?.description) {
            descriptionElement.content = currentTranslations.meta.description;
        }

        if (keywordsElement && currentTranslations.meta?.keywords) {
            keywordsElement.content = currentTranslations.meta.keywords;
        }
    }

    getTranslation(key, translations = null) {
        const trans = translations || this.translations[this.currentLanguage] || this.translations['en'];
        const keys = key.split('.');
        let translation = trans;
        
        for (const k of keys) {
            if (translation && typeof translation === 'object' && k in translation) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }

    // Método para obtener traducciones desde JavaScript
    t(key) {
        return this.getTranslation(key) || key;
    }
}

// Instancia global del gestor de traducciones
let translationManager;

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationManager;
}
