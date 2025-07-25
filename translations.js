// Sistema de traducciones para MailtoGen Pro
// Translation system for MailtoGen Pro

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
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
        // No llamar init() aquí, se llamará desde DOMContentLoaded
    }

    async init() {
        // Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        const savedLang = localStorage.getItem('mailtoGenLang');
        
        this.currentLanguage = savedLang || (this.supportedLanguages[browserLang] ? browserLang : 'en');
        
        await this.loadTranslations();
        this.createLanguageSelector();
        this.applyTranslations();
    }

    async loadTranslations() {
        try {
            const response = await fetch(`./translations/${this.currentLanguage}.json`);
            if (response.ok) {
                this.translations = await response.json();
            } else {
                console.warn(`Translations for ${this.currentLanguage} not found, using English`);
                this.currentLanguage = 'en';
                const fallbackResponse = await fetch('./translations/en.json');
                this.translations = await fallbackResponse.json();
            }
        } catch (error) {
            console.error('Error loading translations:', error);
            this.translations = {};
        }
    }

    createLanguageSelector() {
        // Usar el selector existente en el HTML
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
                if (newLang !== this.currentLanguage) {
                    await this.changeLanguage(newLang);
                }
                langMenu.classList.remove('show');
            });
        });
    }

    async changeLanguage(newLang) {
        this.currentLanguage = newLang;
        localStorage.setItem('mailtoGenLang', newLang);
        
        await this.loadTranslations();
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
        // Traducir elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getTranslation(key);
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
            const translation = this.getTranslation(key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Traducir títulos y meta descriptions
        this.updateMetaTags();
    }

    updateMetaTags() {
        const titleElement = document.querySelector('title');
        const descriptionElement = document.querySelector('meta[name="description"]');
        const keywordsElement = document.querySelector('meta[name="keywords"]');

        if (titleElement && this.translations.meta?.title) {
            titleElement.textContent = this.translations.meta.title;
        }

        if (descriptionElement && this.translations.meta?.description) {
            descriptionElement.content = this.translations.meta.description;
        }

        if (keywordsElement && this.translations.meta?.keywords) {
            keywordsElement.content = this.translations.meta.keywords;
        }
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations;
        
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
