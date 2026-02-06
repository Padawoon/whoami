import { translations } from '../data/translations.js';
import { renderTimeline } from './timeline.js';

export class I18n {
    constructor() {
        this.currentLang = 'en';
        this.translations = translations;
    }

    init() {
        this.currentLang = this.getInitialLanguage();
        this.setLanguage(this.currentLang);

        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.setLanguage(this.currentLang === 'ru' ? 'en' : 'ru');
            });
        }
    }

    getInitialLanguage() {
        const savedLang = localStorage.getItem('lang');
        if (savedLang && this.translations[savedLang]) return savedLang;
        const userLang = navigator.language || navigator.userLanguage || 'en';
        return userLang.toLowerCase().startsWith('ru') ? 'ru' : 'en';
    }

    normalizeRichText(value) {
        if (typeof value !== 'string') return '';
        return value
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/?strong>/gi, '');
    }

    setLanguage(lang) {
        this.currentLang = this.translations[lang] ? lang : 'en';
        localStorage.setItem('lang', this.currentLang);
        document.documentElement.lang = this.currentLang;

        this.applyTextTranslations();
        this.applyAttributeTranslations();
        this.updateDownloadLink();
        this.updateToggleText();

        // Trigger updates in dependent modules
        renderTimeline(this.translations[this.currentLang].experience, this);

        // Dispatch event for other components (like form)
        document.dispatchEvent(new CustomEvent('lang-changed', { detail: { lang: this.currentLang, translations: this.translations[this.currentLang] } }));
    }

    applyTextTranslations() {
        const data = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = data[key];
            if (typeof value === 'string') {
                el.textContent = this.normalizeRichText(value);
            }
        });
    }

    applyAttributeTranslations() {
        const data = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
            if (attr && key && data[key]) {
                el.setAttribute(attr, this.normalizeRichText(data[key]));
            }
        });
    }

    updateDownloadLink() {
        const downloadCvBtn = document.getElementById('downloadCvBtn');
        if (downloadCvBtn) {
            const filename = this.currentLang === 'ru' ? 'd.khitryi_qa_cv_ru.pdf' : 'd.khitryi_qa_cv_en.pdf';
            downloadCvBtn.href = `assets/docs/${filename}`;
        }
    }

    updateToggleText() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.textContent = this.currentLang.toUpperCase();
        }
    }

    getCurrentTranslations() {
        return this.translations[this.currentLang];
    }
}
