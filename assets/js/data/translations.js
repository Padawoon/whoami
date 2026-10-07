export const translations = {
    ru: {
        name: "Дмитрий Хитрый",
        title: "Fullstack QA Инженер (UI, API & Mobile)",
        location: "Суботица, Сербия",
        contact_btn: "Связаться со мной",
        download_cv: "Скачать CV",
        nav_about: "О себе",
        nav_experience: "Опыт",
        nav_skills: "Навыки",
        nav_contact: "Контакты",
        about_title: "О себе",
        about_text: `QA Инженер с опытом более 4-х лет в тестировании микросервисных веб-приложений и сложных бэкенд-систем.
                    Специализируюсь на API, базах данных (SQL) и интеграционном тестировании.
                    На одном из проектов самостоятельно внедрил TMS Qase, переведя весь отдел с Google Docs и централизовав тестовую документацию.
                    В одиночку обеспечил качество крупного релиза (8 user stories), не пропустив в продакшен ни одного дефекта.
                    Автоматизирую тесты UI, API и БД на Python + Playwright, включая полные E2E тесты.`,
        experience_title: "Опыт работы",
        experience: [
            {
                role: "QA Engineer [Backend & Mobile]",
                company: "Web-studio Regul",
                date: "01/2025 – Настоящее время",
                items: [
                    "Обеспечил качество релиза AI-платформы (8+ user stories), включавшего изменения в микросервисах, миграции БД и новую логику биллинга; в результате в продакшен не попало ни одного критического дефекта.",
                    "Взял на себя тестирование сложной логики биллинга для AI-сервисов, включая проверку тарификации по токенам и обработку событий через RabbitMQ, что предотвратило потенциальные финансовые ошибки.",
                    "Выступал в роли L3-поддержки: самостоятельно локализовывал инциденты, анализируя логи, БД и бизнес-процессы, и готовил отчеты по первопричинам (RCA).",
                    "Менторил и проводил онбординг новых QA-инженеров, помогая им быстрее войти в проект и начать приносить пользу команде."
                ]
            },
            {
                role: "Перерыв в карьере",
                company: "Переезд",
                date: "09/2024 – 12/2024",
                items: [
                    "Переезд в Сербию, обустройство и профессиональное развитие"
                ]
            },
            {
                role: "QA Engineer",
                company: "101 Интернет",
                date: "10/2023 – 08/2024",
                items: [
                    "Инициировал и самостоятельно внедрил TMS Qase, переведя всю тестовую документацию отдела из Google Docs. Это централизовало тест-кейсы и ускорило подготовку к регрессионному тестированию.",
                    "Проводил ручное тестирование (регрессионное, e2e, смоук) для веб-приложения с микросервисной архитектурой, работая в связке с командой разработки для обеспечения качества релизов.",
                    "Тестировал API с использованием Postman и GraphQL Network, проверяя интеграцию между сервисами и корректность обработки данных."
                ]
            },
            {
                role: "QA Engineer",
                company: "base86",
                date: "04/2023 – 10/2023",
                items: [
                    "Выявил и задокументировал более 20 критических дефектов, что позволило предотвратить срыв релиза и обеспечить стабильность платформы для B2B-клиентов.",
                    "Проводил онбординг и менторил 5 QA-стажеров, помогая им освоить процессы тестирования и инструменты (Qase, Jira), что ускорило рост команды."
                ]
            },
            {
                role: "Тестировщик ПО",
                company: "Hansa",
                date: "10/2021 – 07/2022",
                items: [
                    "Протестировал ключевую интеграцию нового онлайн-магазина со складской системой (CMS <> ERP), выявив и устранив 5+ блокеров, связанных с некорректной синхронизацией остатков и цен.",
                    "Проводил исследовательское тестирование UI/UX, по результатам которого было составлено 60+ баг-репортов и предложений по улучшению, принятых командой в работу для повышения юзабилити сайта."
                ]
            }
        ],
        skills_title: "Навыки",
        skills_tools: "Инструменты",
        skills_tools_list: "Postman/Bruno, Swagger, Chrome DevTools, Git, GitLab CI, Android Studio, Xcode, Grafana, Headlamp, Minio, Kibana/Opensearch, Python, Playwright, Requests, Psycopg",
        skills_db: "БД и Linux",
        skills_db_list: "PostgreSQL, MySQL, SQLite, MongoDB, Redis, Linux (Bash), Log Analysis, ERD (ER Diagrams), Relational Databases",
        skills_testing: "Тестирование",
        skills_testing_list: "Manual/Auto, REST API, GraphQL, Microservices, Mobile (iOS, Android), MacOS, Functional, Regression, Integration, E2E, Smoke, UX/UI, SQL Testing, L3 Support, Troubleshooting",
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
        server_error: "Не удалось связаться с сервером. Пожалуйста попробуйте позже."
    },
    en: {
        name: "Dmitrii Khitryi",
        title: "Fullstack QA Engineer (UI, API & Mobile)",
        location: "Subotica, Serbia",
        contact_btn: "Contact Me",
        download_cv: "Download CV",
        nav_about: "Profile",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_contact: "Contact",
        about_title: "Profile",
        about_text: `QA Engineer with over 4 years of experience in testing microservice web applications and complex backend systems.
                    Specializing in API, databases (SQL), and integration testing.
                    Independently implemented TMS Qase, migrating the entire department from Google Docs and centralizing test documentation.
                    Single-handedly ensured the quality of a major release (8 user stories), allowing zero defects into production.`,
        experience_title: "Experience",
        experience: [
            {
                role: "QA Engineer [Backend & Mobile]",
                company: "Web-studio Regul, LLC",
                date: "01/2025 – Present",
                items: [
                    "Ensured the quality of an AI platform release (8+ user stories), which included changes in microservices, DB migrations, and new billing logic; as a result, zero critical defects reached production.",
                    "Took ownership of testing complex billing logic for AI services, including token-based pricing verification and event processing via RabbitMQ, preventing potential financial errors.",
                    "Acted as L3 Support: independently localized incidents by analyzing logs, databases, and business processes, and prepared root cause analysis (RCA) reports.",
                    "Mentored and onboarded new QA engineers, helping them integrate into the project faster and start delivering value tothe team."
                ]
            },
                        {
                role: "Career Break",
                company: "Relocation",
                date: "09/2024 – 12/2024",
                items: [
                    "Relocation to Serbia, settling in, and professional development"
                ]
            },
            {
                role: "QA Engineer",
                company: "101 internet",
                date: "10/2023 – 08/2024",
                items: [
                    "Initiated and independently implemented TMS Qase, migrating all of the department's test documentation from Google Docs. This centralized test cases and accelerated regression testing preparation.",
                    "Conducted manual testing (regression, e2e, smoke) for a web application with microservice architecture, working in tandem with the development team to ensure release quality.",
                    "Tested API using Postman and GraphQL Network, verifying integration between services and data processing correctness."
                ]
            },
            {
                role: "QA Engineer",
                company: "base86",
                date: "04/2023 – 10/2023",
                items: [
                    "Identified and documented over 20 critical defects, which prevented a release failure and ensured platform stability for B2B clients.",
                    "Conducted onboarding and mentored 5 QA interns, helping them master testing processes and tools (Qase, Jira), which accelerated team growth."
                ]
            },
            {
                role: "Software Tester",
                company: "Hansa",
                date: "10/2021 – 07/2022",
                items: [
                    "Tested the key integration between the new online store and the warehouse system (CMS <> ERP), identifying and resolving 5+ blockers related to incorrect stock and price synchronization.",
                    "Participated in the launch of a new rich-content format: verified display correctness across various devices and platforms, ensuring a unified user experience across all sales channels.",
                    "Conducted exploratory UI/UX testing, resulting in 60+ bug reports and improvement suggestions, which were accepted by the team to enhance website usability."
                ]
            }
        ],
        skills_title: "Skills",
        skills_tools: "Tools",
        skills_tools_list: "Postman/Bruno, Swagger, Chrome DevTools, Git, GitLab CI, Android Studio, Xcode, Grafana, Headlamp, Minio, Kibana/Opensearch, Python, Playwright, Requests, Psycopg",
        skills_db: "DB & Linux",
        skills_db_list: "PostgreSQL, MySQL, SQLite, MongoDB, Redis, Linux (Bash), Log Analysis, ERD (ER Diagrams), Relational Databases",
        skills_testing: "Testing",
        skills_testing_list: "Manual/Auto, REST API, GraphQL, Microservices, Mobile (iOS, Android), MacOS, Functional, Regression, Integration, E2E, Smoke, UX/UI, SQL Testing, L3 Support, Troubleshooting",
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
        server_error: "Could not connect to the server. Please try again later."
    }
};
