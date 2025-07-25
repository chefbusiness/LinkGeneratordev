// Sistema de traducciones para MailtoGen Pro
// Translation system for MailtoGen Pro

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇺🇸' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'fr': { name: 'Français', flag: '🇫🇷' },
            'de': { name: 'Deutsch', flag: '🇩🇪' },
            'it': { name: 'Italiano', flag: '🇮🇹' },
            'pt': { name: 'Português', flag: '🇵🇹' },
            'ru': { name: 'Русский', flag: '🇷🇺' },
            'zh': { name: '中文', flag: '🇨🇳' },
            'ja': { name: '日本語', flag: '🇯🇵' },
            'ko': { name: '한국어', flag: '🇰🇷' }
        };
        this.init();
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
            // Actualizar la bandera (mantenemos las banderas SVG del HTML)
            if (this.currentLanguage === 'es') {
                currentFlag.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23AA151B'/%3E%3Crect width='60' height='10' y='10' fill='%23F1BF00'/%3E%3C/svg%3E";
                currentFlag.alt = "Español";
            } else {
                currentFlag.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30M60 0L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E";
                currentFlag.alt = "English";
            }
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

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    translationManager = new TranslationManager();
});

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationManager;
}