document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ru: {
            name: "Дмитрий Хитрый",
            title: "QA Engineer (Backend & Mobile)",
            location: "Суботица, Сербия",
            contact_btn: "Связаться со мной",
            download_cv: "Скачать CV",
            nav_about: "О себе",
            nav_experience: "Опыт",
            nav_skills: "Навыки",
            nav_contact: "Контакты",
            about_title: "О себе",
            about_text: `Более трёх лет опыта в качестве QA инженера, работал в командах, использующих методологии Scrum, Lean и в хаотичной разработке.<br>
Уверенно работаю с таск-трекерами и ТМС (YouTrack, Jira, ClickUp, QAcoverage, Qase, Doqa).<br>
Разрабатываю и поддерживаю тестовую документацию: тест-кейсы, чек-листы и прочие артефакты.<br>
Тестирую RESTful API с помощью инструментов Postman, Swagger и др.<br>
Работаю с БД: пишу сложные запросы с джойнами и агрегациями, проверяю миграции и результаты сидеров, смотрю наличие индексов, погружаюсь в ERD.<br>
Имею опыт работы в Linux: анализ логов, проверка портов сервисов, работа с конфигами и энвами.<br>
Понимаю git: ставлю ветки для тестов, запускаю пайплайны в Gitlab.<br>
Это же касается и работы с Android Studio.<br>
Знаю в чём ключевая разница микросервисной архитектуры от монолита и как это влияет на тестирование.`,
            experience_title: "Опыт работы",
            experience: [
                {
                    role: "QA Engineer [Backend & Mobile]",
                    company: "Web-studio Regul",
                    date: "01/2025 – Настоящее время",
                    items: [
                        "Тестирование микросервисов на всех этапах (dev/staging/production), верификация взаимодействия через REST API и RabbitMQ.",
                        "Работа с СУБД (PostgreSQL/MySQL): написание сложных запросов (джойны, вложенные, агрегации), проверка миграций, сидов и наличия индексов.",
                        "Работа с Git и GitLab: запуск пайплайнов для бэкенда и фронтенда, ручное переключение веток для тестирования мобильных (iOS/Android/MacOS) приложений.",
                        "Анализ RabbitMQ-событий (биллинг и платежи), создание и проверка тестовых сценариев на генерацию инвойсов.",
                        "Локализация инцидентов (L3 поддержка): анализ логов, БД, сопоставление бизнес-процессов с запросами, подготовка отчётов RCA.",
                        "<strong>Достижение:</strong> В одиночку обеспечил полный цикл тестирования релиза из 8 полноценных стори (реворки роутов, миграции, биллинг) без дефектов в продакшене.",
                        "<strong>Достижение:</strong> По результатам успешного года работы повышен до Senior (Старший специалист по тестированию серверной логики и БД)."
                    ]
                },
                {
                    role: "QA Engineer",
                    company: "101 Интернет",
                    date: "10/2023 – 08/2024",
                    items: [
                        "Ручное тестирование веб-приложения с микросервисной архитектурой (Smoke, Regression, E2E).",
                        "Разработка и поддержка тестовой документации, работа в Яндекс.Трекере.",
                        "Самостоятельно внедрил TMS Qase: перевёл отдел с Google Docs на структурированное хранение и курировал поддержку.",
                        "Использование инструментов: JAM, Chrome DevTools, GraphQL Network, Postman, DBeaver, MongoDB Compass."
                    ]
                },
                {
                    role: "QA Engineer",
                    company: "base86",
                    date: "04/2023 – 10/2023",
                    items: [
                        "Ручное тестирование B2B маркетплейса для стоматологических клиник (США).",
                        "Разработка и поддержка тестовой документации в Qase.",
                        "Успешно выявил и отследил причину более 20 критических багов, предотвратив срыв релизов.",
                        "Обеспечил качественный онбординг и менторство для 5 QA стажёров."
                    ]
                },
                {
                    role: "Тестировщик ПО",
                    company: "Hansa",
                    date: "10/2021 – 07/2022",
                    items: [
                        "Активное участие в разработке и тестировании интернет-магазина shop.hansa.ru.",
                        "Проведение исследовательского и Ad hoc тестирования пользовательского интерфейса (UI).",
                        "Тестирование интеграции систем CMS и ERP.",
                        "Разработка концепции rich-контента для Hansa, используемой во всех каналах продаж."
                    ]
                }
            ],
            skills_title: "Навыки",
            skills_tools: "Инструменты",
            skills_tools_list: "Postman, Swagger, OpenAPI, Mockoon, DBeaver, GitLab (Pipelines), Android Studio, Chrome DevTools, RabbitMQ (AMQP), Selenium, Grafana, Kibana, Opensearch, JAM",
            skills_db: "БД и Linux",
            skills_db_list: "PostgreSQL, MySQL, SQLite, MongoDB, Redis, Linux (Bash), Log Analysis, ERD (ER Diagrams), Relational Databases",
            skills_testing: "Тестирование",
            skills_testing_list: "REST API, GraphQL, Microservices, Mobile (iOS, Android), MacOS, Functional, Regression, Integration, E2E, Smoke, UX/UI, SQL Testing, L3 Support, Troubleshooting",
            skills_tms: "TMS и Процессы",
            skills_tms_list: "Jira, YouTrack, ClickUp, Qase, Doqa, Agile (Scrum, Kanban), SDLC, Test Design (Test Cases, Checklists, Scenarios), Bug Tracking, User Stories",
            contact_title: "Контакты",
            form_name: "Имя",
            form_name_placeholder: "Ваше имя",
            form_email: "Email",
            form_email_placeholder: "example@mail.com",
            form_message: "Сообщение",
            form_message_placeholder: "Ваше сообщение...",
            form_submit: "Отправить сообщение",
            form_sending: "Отправка...",
            form_success: "Сообщение успешно отправлено!",
            form_error: "Произошла ошибка при отправке сообщения.",
            form_validation_required: "Пожалуйста, заполните это поле.",
            server_error: "Не удалось связаться с сервером."
        },
        en: {
            name: "Dmitrii Khitryi",
            title: "QA Engineer (Backend & Mobile)",
            location: "Subotica, Serbia",
            contact_btn: "Contact Me",
            download_cv: "Download CV",
            nav_about: "Profile",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_contact: "Contact",
            about_title: "Profile",
            about_text: `Having more than three years of experience as a QA engineer, worked in teams using Scrum, Lean, and fully chaotic development.<br>
Confident working with task trackers and test management systems (YouTrack, Jira, ClickUp, QAcoverage, Qase, Doqa).<br>
Creating and maintaining test documentation: test cases, checklists, and other QA artifacts.<br>
Testing RESTful APIs using Postman, Swagger etc.<br>
Working with databases: write complex queries with joins and aggregations, validate migrations and seed results, check indexes, and analyze ERDs.<br>
Experienced with Linux: log analysis, service port checks, working with configs and env files.<br>
Understand Git: switching between branches for testing, run pipelines in Gitlab for frontend and backend. Same for Android Studio for mobile testing.<br>
Understand the key differences between microservice architecture and a monolith and how this affects testing.`,
            experience_title: "Experience",
            experience: [
                {
                    role: "QA Engineer [Backend & Mobile]",
                    company: "Web-studio Regul, LLC",
                    date: "01/2025 – Present",
                    items: [
                        "Design and execution of functional, integration, and regression testing of microservices across dev, staging, and production environments.",
                        "Testing services interactions via REST API and RabbitMQ.",
                        "Analysis of database schemas, complex relations, and business logic at the data level.",
                        "Writing SQL queries (PostgreSQL/MySQL): aggregations, joins, nested queries.",
                        "Validation of migrations, seed data, and data integrity.",
                        "Work with Git: Launching pipelines for deployment and switching branches in Android Studio to test MacOS, iOS, and Android native apps.",
                        "Billing & calculation verification: Validation of pricing models, token-based cost calculations, USD conversions, and invoice generation scenarios.",
                        "L3 support: Incident localization, log analysis, root cause description (RCA), and working within a three-line support model.",
                        "<strong>Achievement:</strong> Single-handedly completed the full testing cycle of a large release containing 8 full-scale stories without a single defect making it to production.",
                        "<strong>Achievement:</strong> Based on a highly successful year, my grade was raised to Senior (Senior Specialist in Server Logic and Database Testing)."
                    ]
                },
                {
                    role: "QA Engineer",
                    company: "101 internet",
                    date: "10/2023 – 08/2024",
                    items: [
                        "Manual microservice-based web app testing (Smoke, Regression, E2E, UAT).",
                        "Writing and maintaining test documentation in Yandex.Tracker.",
                        "Solely introduced and operationalized the Qase test management system.",
                        "Utilized tools: JAM, Chrome DevTools, GraphQL Network, Postman, DBeaver, MongoDB Compass."
                    ]
                },
                {
                    role: "QA Engineer",
                    company: "base86",
                    date: "04/2023 – 10/2023",
                    items: [
                        "Conducted comprehensive testing on a B2B marketplace web application (USA).",
                        "Developed and managed test cases for smoke and regression testing in Qase.",
                        "Successfully resolved 20+ critical issues and blockers, preserving release schedules.",
                        "Mentored and onboarded five QA interns, enhancing team productivity."
                    ]
                },
                {
                    role: "Software Tester",
                    company: "Hansa",
                    date: "10/2021 – 07/2022",
                    items: [
                        "Actively contributed to the development and testing of the shop.hansa.ru online store.",
                        "Conducted comprehensive exploratory and ad hoc testing of the UI.",
                        "Assessed and evaluated content and layout quality assurance.",
                        "Pioneered the creation of a basic rich content concept for Hansa, still used across all channels."
                    ]
                }
            ],
            skills_title: "Skills",
            skills_tools: "Tools",
            skills_tools_list: "Postman, Swagger, OpenAPI, Mockoon, DBeaver, GitLab (Pipelines), Android Studio, Chrome DevTools, RabbitMQ (AMQP), Selenium, Grafana, Kibana, Opensearch, JAM",
            skills_db: "DB & Linux",
            skills_db_list: "PostgreSQL, MySQL, SQLite, MongoDB, Redis, Linux (Bash), Log Analysis, ERD (ER Diagrams), Relational Databases",
            skills_testing: "Testing",
            skills_testing_list: "REST API, GraphQL, Microservices, Mobile (iOS, Android), MacOS, Functional, Regression, Integration, E2E, Smoke, UX/UI, SQL Testing, L3 Support, Troubleshooting",
            skills_tms: "TMS & Processes",
            skills_tms_list: "Jira, YouTrack, ClickUp, Qase, Doqa, Agile (Scrum, Kanban), SDLC, Test Design (Test Cases, Checklists, Scenarios), Bug Tracking, User Stories",
            contact_title: "Contacts",
            form_name: "Name",
            form_name_placeholder: "Your Name",
            form_email: "Email",
            form_email_placeholder: "example@mail.com",
            form_message: "Message",
            form_message_placeholder: "Your message...",
            form_submit: "Send Message",
            form_sending: "Sending...",
            form_success: "Message sent successfully!",
            form_error: "An error occurred while sending the message.",
            form_validation_required: "Please fill out this field.",
            server_error: "Could not connect to the server."
        }
    };

    const state = {
        currentLang: 'en'
    };

    const elements = {
        langToggle: document.getElementById('langToggle'),
        downloadCvBtn: document.getElementById('downloadCvBtn'),
        themeToggle: document.getElementById('themeToggle'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        closeMenuBtn: document.getElementById('closeMenuBtn'),
        mobileMenu: document.getElementById('mobileMenu'),
        desktopNav: document.querySelector('.desktop-nav'),
        contactForm: document.getElementById('contactForm'),
        submitBtn: document.getElementById('submitBtn'),
        successMsg: document.getElementById('successMsg')
    };

    function normalizeRichText(value) {
        if (typeof value !== 'string') return '';
        return value
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/?strong>/gi, '');
    }

    function getInitialLanguage() {
        const savedLang = localStorage.getItem('lang');
        if (savedLang && translations[savedLang]) return savedLang;
        const userLang = navigator.language || navigator.userLanguage || 'en';
        return userLang.toLowerCase().startsWith('ru') ? 'ru' : 'en';
    }

    function updateValidationMessages() {
        const data = translations[state.currentLang];
        document.querySelectorAll('input[required], textarea[required]').forEach((el) => {
            if (el.value === '') {
                el.setCustomValidity(data.form_validation_required);
            } else {
                el.setCustomValidity('');
            }
        });
    }

    function applyTextTranslations() {
        const data = translations[state.currentLang];
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = data[key];
            if (typeof value === 'string') {
                el.textContent = normalizeRichText(value);
            }
        });
    }

    function applyAttributeTranslations() {
        const data = translations[state.currentLang];
        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
            if (attr && key && data[key]) {
                el.setAttribute(attr, normalizeRichText(data[key]));
            }
        });
    }

    function attachValidationListeners() {
        document.querySelectorAll('input[required], textarea[required]').forEach((el) => {
            el.addEventListener('invalid', () => {
                el.setCustomValidity(translations[state.currentLang].form_validation_required);
            });
            el.addEventListener('input', () => {
                el.setCustomValidity('');
            });
        });
    }

    function setLanguage(lang) {
        state.currentLang = translations[lang] ? lang : 'en';
        localStorage.setItem('lang', state.currentLang);
        document.documentElement.lang = state.currentLang;

        applyTextTranslations();
        applyAttributeTranslations();
        updateValidationMessages();
        renderTimeline();

        if (elements.langToggle) {
            elements.langToggle.textContent = state.currentLang.toUpperCase();
        }

        if (elements.downloadCvBtn) {
            elements.downloadCvBtn.href = state.currentLang === 'ru' ? 'd.khitryi_qa_cv_ru.pdf' : 'd.khitryi_qa_cv_en.pdf';
        }
    }

    function renderTimeline() {
        const timeline = document.getElementById('experienceTimeline');
        if (!timeline) return;

        timeline.replaceChildren();
        const data = translations[state.currentLang].experience;

        data.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            if (index === 0) item.classList.add('active');

            const headerId = `timeline-header-${index}`;
            const contentId = `timeline-content-${index}`;

            const header = document.createElement('button');
            header.className = 'timeline-header';
            header.type = 'button';
            header.id = headerId;
            header.setAttribute('aria-controls', contentId);
            header.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');

            const headerInfo = document.createElement('div');
            headerInfo.className = 'timeline-header-info';

            const title = document.createElement('h3');
            title.textContent = `${normalizeRichText(exp.role)} — ${normalizeRichText(exp.company)}`;

            const date = document.createElement('p');
            date.className = 'date';
            date.textContent = normalizeRichText(exp.date);

            const icon = document.createElement('i');
            icon.className = 'fas fa-chevron-down timeline-icon';
            icon.setAttribute('aria-hidden', 'true');

            const content = document.createElement('div');
            content.className = 'timeline-content';
            content.id = contentId;
            content.setAttribute('role', 'region');
            content.setAttribute('aria-labelledby', headerId);
            content.hidden = index !== 0;

            const list = document.createElement('ul');
            exp.items.forEach((entry) => {
                const listItem = document.createElement('li');
                listItem.textContent = normalizeRichText(entry);
                list.appendChild(listItem);
            });

            content.appendChild(list);
            headerInfo.append(title, date);
            header.append(headerInfo, icon);
            item.append(header, content);
            timeline.appendChild(item);

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                timeline.querySelectorAll('.timeline-item').forEach((node) => {
                    node.classList.remove('active');
                    const nodeHeader = node.querySelector('.timeline-header');
                    const nodeContent = node.querySelector('.timeline-content');
                    if (nodeHeader) nodeHeader.setAttribute('aria-expanded', 'false');
                    if (nodeContent) nodeContent.hidden = true;
                });

                if (!isActive) {
                    item.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                    content.hidden = false;
                }
            });
        });
    }

    function initThemeToggle() {
        if (!elements.themeToggle) return;

        const body = document.body;
        const themeIcon = elements.themeToggle.querySelector('i');

        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-mode');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        elements.themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            if (themeIcon) {
                themeIcon.classList.toggle('fa-sun', isLight);
                themeIcon.classList.toggle('fa-moon', !isLight);
            }
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    function initSectionAnimations() {
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

    function initMenu() {
        if (!elements.mobileMenu || !elements.mobileMenuBtn || !elements.closeMenuBtn) return;

        const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
        let isOpen = false;

        function setMenuState(open) {
            isOpen = open;
            elements.mobileMenu.classList.toggle('active', open);
            elements.mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
            elements.mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.style.overflow = open ? 'hidden' : '';

            if (open) {
                elements.closeMenuBtn.focus();
            } else {
                elements.mobileMenuBtn.focus();
            }
        }

        elements.mobileMenuBtn.addEventListener('click', () => setMenuState(true));
        elements.closeMenuBtn.addEventListener('click', () => setMenuState(false));

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

    function initAnchorScroll() {
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

    async function submitContactForm(event) {
        event.preventDefault();
        if (!elements.contactForm || !elements.submitBtn || !elements.successMsg) return;

        const langData = translations[state.currentLang];

        const originalBtnText = elements.submitBtn.textContent;
        elements.submitBtn.textContent = langData.form_sending;
        elements.submitBtn.disabled = true;

        const formData = new FormData(elements.contactForm);
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
                elements.successMsg.textContent = langData.form_success;
                elements.successMsg.style.display = 'block';
                elements.successMsg.style.color = '#4ade80';
                elements.contactForm.reset();
                setTimeout(() => {
                    elements.successMsg.style.display = 'none';
                }, 5000);
            } else {
                elements.successMsg.textContent = responseData.message || langData.form_error;
                elements.successMsg.style.display = 'block';
                elements.successMsg.style.color = '#ef4444';
            }
        } catch (_error) {
            elements.successMsg.textContent = langData.server_error;
            elements.successMsg.style.display = 'block';
            elements.successMsg.style.color = '#ef4444';
        } finally {
            elements.submitBtn.textContent = originalBtnText;
            elements.submitBtn.disabled = false;
        }
    }

    function initContactForm() {
        if (!elements.contactForm) return;
        elements.contactForm.addEventListener('submit', submitContactForm);
    }

    function initDesktopNavScroll() {
        if (!elements.desktopNav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                elements.desktopNav.classList.add('scrolled');
            } else {
                elements.desktopNav.classList.remove('scrolled');
            }
        });
    }

    function init() {
        state.currentLang = getInitialLanguage();
        attachValidationListeners();
        setLanguage(state.currentLang);
        initThemeToggle();
        initSectionAnimations();
        initMenu();
        initAnchorScroll();
        initContactForm();
        initDesktopNavScroll();

        if (elements.langToggle) {
            elements.langToggle.addEventListener('click', () => {
                setLanguage(state.currentLang === 'ru' ? 'en' : 'ru');
            });
        }

        if (window.location.hash) {
            window.history.replaceState('', document.title, window.location.pathname + window.location.search);
            window.scrollTo(0, 0);
        }
    }

    init();
});
