import { I18n } from './modules/i18n.js';
import { UI } from './modules/ui.js';
import { ContactForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
    const i18n = new I18n();
    const ui = new UI();
    const contactForm = new ContactForm();

    i18n.init(); // This will trigger initial renderTimeline and lang-changed event
    ui.init();
    contactForm.init();

    // Check hash on load
    if (window.location.hash) {
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }
});
