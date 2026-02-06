export const translations = {
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
