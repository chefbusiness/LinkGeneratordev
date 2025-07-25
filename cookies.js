// Cookie Management System for GDPR Compliance
// MailtoGen Pro - Cookie Consent Manager

class CookieManager {
    constructor() {
        this.cookieNames = {
            consent: 'cookie_consent',
            preferences: 'cookie_preferences',
            language: 'language_preference'
        };
        
        this.cookieTypes = {
            necessary: 'necessary',
            analytics: 'analytics',
            marketing: 'marketing'
        };
        
        this.defaultPreferences = {
            necessary: true,
            analytics: false,
            marketing: false
        };
        
        this.init();
    }
    
    init() {
        // Check if user has already made a choice
        const consent = this.getCookie(this.cookieNames.consent);
        
        if (!consent) {
            // Show cookie banner for first-time visitors
            this.showCookieBanner();
        } else {
            // Load saved preferences
            this.loadPreferences();
        }
        
        // Setup event listeners
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Cookie banner buttons
        const acceptAllBtn = document.getElementById('acceptAllCookies');
        const configureBtn = document.getElementById('configureCookies');
        const rejectBtn = document.getElementById('rejectCookies');
        
        if (acceptAllBtn) {
            acceptAllBtn.addEventListener('click', () => this.acceptAllCookies());
        }
        
        if (configureBtn) {
            configureBtn.addEventListener('click', () => this.showCookieModal());
        }
        
        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => this.rejectAllCookies());
        }
        
        // Cookie modal buttons
        const savePreferencesBtn = document.getElementById('saveCookiePreferences');
        const closeCookieModalBtn = document.getElementById('closeCookieModal');
        const openCookieSettingsBtn = document.getElementById('openCookieSettings');
        
        if (savePreferencesBtn) {
            savePreferencesBtn.addEventListener('click', () => this.savePreferences());
        }
        
        if (closeCookieModalBtn) {
            closeCookieModalBtn.addEventListener('click', () => this.hideCookieModal());
        }
        
        if (openCookieSettingsBtn) {
            openCookieSettingsBtn.addEventListener('click', () => this.showCookieModal());
        }
        
        // Close modal when clicking outside
        const cookieModal = document.getElementById('cookieModal');
        if (cookieModal) {
            cookieModal.addEventListener('click', (e) => {
                if (e.target === cookieModal) {
                    this.hideCookieModal();
                }
            });
        }
    }
    
    showCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.style.display = 'block';
            // Add animation
            setTimeout(() => {
                banner.style.opacity = '1';
                banner.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    hideCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.style.opacity = '0';
            banner.style.transform = 'translateY(100%)';
            setTimeout(() => {
                banner.style.display = 'none';
            }, 300);
        }
    }
    
    showCookieModal() {
        const modal = document.getElementById('cookieModal');
        if (modal) {
            // Load current preferences into modal
            this.loadPreferencesIntoModal();
            
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
                const modalContent = modal.querySelector('.cookie-modal-content');
                if (modalContent) {
                    modalContent.style.transform = 'scale(1)';
                }
            }, 10);
        }
        
        // Hide banner if showing
        this.hideCookieBanner();
    }
    
    hideCookieModal() {
        const modal = document.getElementById('cookieModal');
        if (modal) {
            modal.style.opacity = '0';
            const modalContent = modal.querySelector('.cookie-modal-content');
            if (modalContent) {
                modalContent.style.transform = 'scale(0.95)';
            }
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }
    
    acceptAllCookies() {
        const preferences = {
            necessary: true,
            analytics: true,
            marketing: true
        };
        
        this.saveConsentAndPreferences(preferences);
        this.hideCookieBanner();
        this.enableCookies(preferences);
    }
    
    rejectAllCookies() {
        const preferences = {
            necessary: true,
            analytics: false,
            marketing: false
        };
        
        this.saveConsentAndPreferences(preferences);
        this.hideCookieBanner();
        this.enableCookies(preferences);
    }
    
    savePreferences() {
        const preferences = {
            necessary: true, // Always true
            analytics: document.getElementById('analyticsCookies')?.checked || false,
            marketing: document.getElementById('marketingCookies')?.checked || false
        };
        
        this.saveConsentAndPreferences(preferences);
        this.hideCookieModal();
        this.enableCookies(preferences);
    }
    
    saveConsentAndPreferences(preferences) {
        // Save consent timestamp
        this.setCookie(this.cookieNames.consent, new Date().toISOString(), 365);
        
        // Save preferences
        this.setCookie(this.cookieNames.preferences, JSON.stringify(preferences), 365);
        
        console.log('Cookie preferences saved:', preferences);
    }
    
    loadPreferences() {
        const preferencesStr = this.getCookie(this.cookieNames.preferences);
        if (preferencesStr) {
            try {
                const preferences = JSON.parse(preferencesStr);
                this.enableCookies(preferences);
                return preferences;
            } catch (e) {
                console.error('Error parsing cookie preferences:', e);
                return this.defaultPreferences;
            }
        }
        return this.defaultPreferences;
    }
    
    loadPreferencesIntoModal() {
        const preferences = this.loadPreferences();
        
        // Update checkboxes in modal
        const analyticsCheckbox = document.getElementById('analyticsCookies');
        const marketingCheckbox = document.getElementById('marketingCookies');
        
        if (analyticsCheckbox) {
            analyticsCheckbox.checked = preferences.analytics;
        }
        
        if (marketingCheckbox) {
            marketingCheckbox.checked = preferences.marketing;
        }
    }
    
    enableCookies(preferences) {
        // Enable/disable different types of cookies based on preferences
        
        if (preferences.analytics) {
            this.enableAnalyticsCookies();
        } else {
            this.disableAnalyticsCookies();
        }
        
        if (preferences.marketing) {
            this.enableMarketingCookies();
        } else {
            this.disableMarketingCookies();
        }
        
        // Necessary cookies are always enabled
        this.enableNecessaryCookies();
    }
    
    enableNecessaryCookies() {
        // These are always enabled for basic functionality
        console.log('Necessary cookies enabled');
    }
    
    enableAnalyticsCookies() {
        // Enable Google Analytics or other analytics
        console.log('Analytics cookies enabled');
        
        // Example: Load Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }
    
    disableAnalyticsCookies() {
        console.log('Analytics cookies disabled');
        
        // Example: Disable Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    }
    
    enableMarketingCookies() {
        console.log('Marketing cookies enabled');
        
        // Example: Enable marketing/advertising cookies
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'ad_storage': 'granted'
            });
        }
    }
    
    disableMarketingCookies() {
        console.log('Marketing cookies disabled');
        
        // Example: Disable marketing/advertising cookies
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'ad_storage': 'denied'
            });
        }
    }
    
    // Utility methods for cookie management
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }
    
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
    
    // Public methods for external use
    hasConsent(type = null) {
        const consent = this.getCookie(this.cookieNames.consent);
        if (!consent) return false;
        
        if (type) {
            const preferences = this.loadPreferences();
            return preferences[type] || false;
        }
        
        return true;
    }
    
    updatePreferences(newPreferences) {
        const currentPreferences = this.loadPreferences();
        const updatedPreferences = { ...currentPreferences, ...newPreferences };
        this.saveConsentAndPreferences(updatedPreferences);
        this.enableCookies(updatedPreferences);
    }
    
    resetConsent() {
        this.deleteCookie(this.cookieNames.consent);
        this.deleteCookie(this.cookieNames.preferences);
        this.showCookieBanner();
    }
}

// CSS Styles for Cookie Components
const cookieStyles = `
/* Cookie Banner Styles */
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #dee2e6;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 10000;
    padding: 1rem;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
}

.cookie-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.cookie-text h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #333;
}

.cookie-text p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
}

.cookie-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.cookie-buttons .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background-color: #545b62;
}

.btn-outline {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid #6c757d;
}

.btn-outline:hover {
    background-color: #6c757d;
    color: white;
}

.btn-link {
    background-color: transparent;
    color: #007bff;
    text-decoration: underline;
}

.btn-link:hover {
    color: #0056b3;
}

/* Cookie Modal Styles */
.cookie-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10001;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.cookie-modal-content {
    background: white;
    border-radius: 0.5rem;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    transform: scale(0.95);
    transition: transform 0.3s ease;
}

.cookie-modal-header {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cookie-modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #6c757d;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-btn:hover {
    color: #333;
}

.cookie-modal-body {
    padding: 1.5rem;
}

.cookie-category {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f8f9fa;
}

.cookie-category:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.cookie-category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.cookie-category h3 {
    margin: 0;
    font-size: 1rem;
    color: #333;
}

.cookie-category p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
}

/* Toggle Switch Styles */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.3s;
    border-radius: 24px;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
}

input:checked + .toggle-slider {
    background-color: #007bff;
}

input:checked + .toggle-slider:before {
    transform: translateX(26px);
}

input:disabled + .toggle-slider {
    background-color: #28a745;
    cursor: not-allowed;
}

.cookie-modal-footer {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-top: 1px solid #dee2e6;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

/* Responsive Design */
@media (max-width: 768px) {
    .cookie-content {
        flex-direction: column;
        text-align: center;
    }
    
    .cookie-buttons {
        justify-content: center;
        width: 100%;
    }
    
    .cookie-modal-content {
        width: 95%;
        margin: 1rem;
    }
    
    .cookie-modal-footer {
        flex-direction: column;
    }
    
    .cookie-category-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}

/* Legal Content Styles */
.legal-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

.legal-content h2 {
    color: #333;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.legal-content h3 {
    color: #555;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
}

.legal-content ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.legal-content li {
    margin-bottom: 0.5rem;
}

.legal-content a {
    color: #007bff;
    text-decoration: none;
}

.legal-content a:hover {
    text-decoration: underline;
}

/* Contact Page Styles */
.contact-content {
    max-width: 800px;
    margin: 0 auto;
}

.contact-intro {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 1.1rem;
    color: #666;
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.contact-method {
    padding: 1.5rem;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
    background: #f8f9fa;
}

.contact-method h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.25rem;
}

.contact-info {
    margin-bottom: 3rem;
}

.response-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.response-item h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1.1rem;
}

.faq-section {
    margin-bottom: 3rem;
}

.faq-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f0f0f0;
}

.faq-item:last-child {
    border-bottom: none;
}

.faq-item h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: #333;
    font-size: 1.1rem;
}

.faq-item p {
    margin: 0;
    color: #666;
    line-height: 1.6;
}
`;

// Inject styles into the page
function injectCookieStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = cookieStyles;
    document.head.appendChild(styleSheet);
}

// Initialize cookie manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Inject CSS styles
    injectCookieStyles();
    
    // Initialize cookie manager
    window.cookieManager = new CookieManager();
    
    console.log('Cookie management system initialized');
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CookieManager;
}
