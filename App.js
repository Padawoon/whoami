document.addEventListener('DOMContentLoaded', () => {
    // Localization Data
    const translations = {
        ru: {
            name: "Дмитрий Хитрый",
            title: "Senior QA Engineer (Backend & Mobile)",
            location: "Суботица, Сербия",
            contact_btn: "Связаться со мной",
            download_cv: "Скачать CV",
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
            title: "Senior QA Engineer (Backend & Mobile)",
            location: "Subotica, Serbia",
            contact_btn: "Contact Me",
            download_cv: "Download CV",
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

    let currentLang = localStorage.getItem('lang') || 'ru';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        const data = translations[lang];

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.innerHTML = data[key];
        });

        // Update Attributes
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attrData = el.getAttribute('data-i18n-attr').split(':');
            const attr = attrData[0];
            const key = attrData[1];
            if (data[key]) el.setAttribute(attr, data[key]);
        });

        // Update Button Label
        document.getElementById('langToggle').textContent = lang.toUpperCase();

        // Update Validation Messages
        updateValidationMessages();

        // Re-init Timeline
        initTimeline();
    }

    function updateValidationMessages() {
        const data = translations[currentLang];
        document.querySelectorAll('input[required], textarea[required]').forEach(el => {
            if (el.value === "") {
                el.setCustomValidity(data.form_validation_required);
            } else {
                el.setCustomValidity("");
            }
        });
    }

    // Attach validation listeners to all required fields
    document.querySelectorAll('input[required], textarea[required]').forEach(el => {
        el.addEventListener('invalid', () => {
            el.setCustomValidity(translations[currentLang].form_validation_required);
        });
        el.addEventListener('input', () => {
            el.setCustomValidity("");
        });
    });

    function initTimeline() {
        const timeline = document.getElementById('experienceTimeline');
        if (!timeline) return;

        const data = translations[currentLang].experience;
        timeline.innerHTML = data.map((exp, index) => `
            <div class="timeline-item ${index === 0 ? 'active' : ''}">
                <div class="timeline-header">
                    <div class="timeline-header-info">
                        <h3>${exp.role} — ${exp.company}</h3>
                        <p class="date">${exp.date}</p>
                    </div>
                    <i class="fas fa-chevron-down timeline-icon"></i>
                </div>
                <div class="timeline-content">
                    <ul>
                        ${exp.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        // Re-attach listeners after re-render
        const timelineHeaders = timeline.querySelectorAll('.timeline-header');
        timelineHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                timeline.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });
    }

    // Initialize Localization
    setLanguage(currentLang);

    // Lang Toggle listener
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'ru' ? 'en' : 'ru');
    });

    // Theme Toggle logic
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        if (isLight) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Intersection Observer for animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Custom Ultra-Smooth Scroll for Contact Button
    const scrollBtn = document.getElementById('scrollToContact');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById('contact');
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500;
                let start = null;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    const easing = percentage < 0.5 ? 4 * percentage * percentage * percentage : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                    window.scrollTo(0, startPosition + distance * easing);
                    if (progress < duration) window.requestAnimationFrame(step);
                }
                window.requestAnimationFrame(step);
            }
        });
    }

    // Fix for refresh jump
    if (window.location.hash) {
        window.history.replaceState("", document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }


});
