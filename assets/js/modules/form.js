export class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.successMsg = document.getElementById('successMsg');
        this.currentTranslations = null;

        // Listen for language changes to update validation messages
        document.addEventListener('lang-changed', (e) => {
            this.currentTranslations = e.detail.translations;
            this.updateValidationMessages();
        });
    }

    init() {
        if (!this.form) return;
        this.attachValidationListeners();
        this.form.addEventListener('submit', (e) => this.submit(e));
    }

    attachValidationListeners() {
        document.querySelectorAll('input[required], textarea[required]').forEach((el) => {
            el.addEventListener('invalid', () => {
                if (this.currentTranslations) {
                    el.setCustomValidity(this.currentTranslations.form_validation_required);
                }
            });
            el.addEventListener('input', () => {
                el.setCustomValidity('');
            });
        });
    }

    updateValidationMessages() {
        if (!this.currentTranslations) return;
        document.querySelectorAll('input[required], textarea[required]').forEach((el) => {
            if (el.value === '') {
                el.setCustomValidity(this.currentTranslations.form_validation_required);
            } else {
                el.setCustomValidity('');
            }
        });
    }

    async submit(event) {
        event.preventDefault();
        if (!this.form || !this.submitBtn || !this.successMsg || !this.currentTranslations) return;

        const originalBtnText = this.submitBtn.textContent;
        this.submitBtn.textContent = this.currentTranslations.form_sending;
        this.submitBtn.disabled = true;

        const formData = new FormData(this.form);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            });

            let responseData = {};
            try {
                responseData = await response.json();
            } catch (_error) {
                responseData = {};
            }

            if (response.ok) {
                this.successMsg.textContent = this.currentTranslations.form_success;
                this.successMsg.style.display = 'block';
                this.successMsg.style.color = '#4ade80';
                this.form.reset();
                setTimeout(() => {
                    this.successMsg.style.display = 'none';
                }, 5000);
            } else {
                this.successMsg.textContent = responseData.message || this.currentTranslations.form_error;
                this.successMsg.style.display = 'block';
                this.successMsg.style.color = '#ef4444';
            }
        } catch (_error) {
            this.successMsg.textContent = this.currentTranslations.server_error;
            this.successMsg.style.display = 'block';
            this.successMsg.style.color = '#ef4444';
        } finally {
            this.submitBtn.textContent = originalBtnText;
            this.submitBtn.disabled = false;
        }
    }
}
