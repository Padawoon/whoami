export class UI {
    constructor() {
        this.elements = {
            themeToggle: document.getElementById('themeToggle'),
            mobileMenuBtn: document.getElementById('mobileMenuBtn'),
            closeMenuBtn: document.getElementById('closeMenuBtn'),
            mobileMenu: document.getElementById('mobileMenu'),
            desktopNav: document.querySelector('.desktop-nav')
        };
    }

    init() {
        this.initThemeToggle();
        this.initSectionAnimations();
        this.initMenu();
        this.initAnchorScroll();
        this.initDesktopNavScroll();
    }

    initThemeToggle() {
        if (!this.elements.themeToggle) return;

        const body = document.body;
        const themeIcon = this.elements.themeToggle.querySelector('i');

        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-mode');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        this.elements.themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            if (themeIcon) {
                themeIcon.classList.toggle('fa-sun', isLight);
                themeIcon.classList.toggle('fa-moon', !isLight);
            }
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    initSectionAnimations() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const sections = document.querySelectorAll('section');

        if (prefersReducedMotion) {
            sections.forEach((section) => section.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach((section) => observer.observe(section));
    }

    initMenu() {
        if (!this.elements.mobileMenu || !this.elements.mobileMenuBtn || !this.elements.closeMenuBtn) return;

        const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
        let isOpen = false;

        const setMenuState = (open) => {
            isOpen = open;
            this.elements.mobileMenu.classList.toggle('active', open);
            this.elements.mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
            this.elements.mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.style.overflow = open ? 'hidden' : '';

            if (open) {
                this.elements.closeMenuBtn.focus();
            } else {
                this.elements.mobileMenuBtn.focus();
            }
        };

        this.elements.mobileMenuBtn.addEventListener('click', () => setMenuState(true));
        this.elements.closeMenuBtn.addEventListener('click', () => setMenuState(false));

        mobileNavLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (isOpen) setMenuState(false);
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && isOpen) {
                setMenuState(false);
            }
        });
    }

    initAnchorScroll() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let activeAnimationFrame = null;

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (event) => {
                const targetId = anchor.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (!target) return;

                event.preventDefault();
                if (prefersReducedMotion) {
                    target.scrollIntoView({ behavior: 'auto', block: 'start' });
                    window.history.pushState({}, '', `#${targetId}`);
                    return;
                }

                if (activeAnimationFrame) {
                    window.cancelAnimationFrame(activeAnimationFrame);
                    activeAnimationFrame = null;
                }

                const startY = window.pageYOffset;
                const targetY = target.getBoundingClientRect().top + window.pageYOffset;
                const distance = targetY - startY;
                const duration = 1900;
                let startTime = null;

                function easeInOutCubic(t) {
                    if (t < 0.5) return 4 * t * t * t;
                    return 1 - Math.pow(-2 * t + 2, 3) / 2;
                }

                function animateScroll(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = easeInOutCubic(progress);

                    window.scrollTo(0, startY + distance * eased);

                    if (progress < 1) {
                        activeAnimationFrame = window.requestAnimationFrame(animateScroll);
                    } else {
                        activeAnimationFrame = null;
                        window.history.pushState({}, '', `#${targetId}`);
                    }
                }

                activeAnimationFrame = window.requestAnimationFrame(animateScroll);
            });
        });
    }

    initDesktopNavScroll() {
        if (!this.elements.desktopNav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.elements.desktopNav.classList.add('scrolled');
            } else {
                this.elements.desktopNav.classList.remove('scrolled');
            }
        });
    }
}
