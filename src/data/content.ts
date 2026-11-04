export type Lang = 'ru' | 'en';
export type ProjectCategory = 'pm' | 'marketing' | 'gamedev';

export interface ProjectMedia {
  type: 'image' | 'link';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  featured?: boolean;
  title: string;
  period: string;
  role: string;
  teamSize?: string;
  team?: string[];
  description: string;
  result: string;
  achievements: string[];
  tools: string[];
  media?: ProjectMedia[];
}

export interface ContentSection {
  nav: { cases: string; process: string; about: string; contact: string };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    resumeLabel: string;
    stats: { value: string; label: string }[];
  };
  ui: {
    casesTitle: string;
    casesCountLabel: string;
    moreTitle: string;
    showProjectsLabel: string;
    hideProjectsLabel: string;
    resultLabel: string;
    teamLabel: string;
    toolsLabel: string;
    mainNavigationLabel: string;
    languageLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    categoryLabels: Record<ProjectCategory, string>;
  };
  process: { title: string; steps: { title: string; text: string }[] };
  ai: { title: string; points: string[] };
  about: {
    title: string;
    text: string[];
    educationTitle: string;
    education: { degree: string; school: string; years: string }[];
    skillsTitle: string;
    skills: string[];
  };
  contacts: { name: string; location: string; telegram: string; email: string; resumeUrl: string };
  projects: Project[];
}

export const PORTFOLIO_DATA: Record<Lang, ContentSection> = {
  ru: {
    nav: { cases: 'Кейсы', process: 'Подход', about: 'Обо мне', contact: 'Контакты' },
    hero: {
      title: 'Project Manager',
      subtitle:
        'Управляю B2B-проектами от постановки задачи до сдачи результата: аналитика, R&D-исследования, упаковочные решения и цифровые продукты. Координирую кросс-функциональные команды, сроки и согласования.',
      cta: 'Написать в Telegram',
      resumeLabel: 'Резюме (PDF)',
      stats: [
        { value: '4–5', label: 'проектов одновременно в работе' },
        { value: 'до 15', label: 'участников кросс-функциональной команды' },
        { value: '1,5 года', label: 'R&D-исследование и 6 лабораторных проверок' },
      ],
    },
    ui: {
      casesTitle: 'Ключевые кейсы',
      casesCountLabel: 'избранных проекта',
      moreTitle: 'Другие проекты и направления',
      showProjectsLabel: 'Показать остальные проекты',
      hideProjectsLabel: 'Свернуть проекты',
      resultLabel: 'Результат',
      teamLabel: 'Основные участники команды',
      toolsLabel: 'Инструменты',
      mainNavigationLabel: 'Основная навигация',
      languageLabel: 'Выбор языка',
      openMenuLabel: 'Открыть меню',
      closeMenuLabel: 'Закрыть меню',
      categoryLabels: {
        pm: 'Проектное управление и операции',
        marketing: 'Контент-маркетинг',
        gamedev: 'GameDev и 3D',
      },
    },
    process: {
      title: 'Мой подход к проектной работе',
      steps: [
        { title: 'Цель и требования', text: 'Согласую ожидаемый результат, исходные требования и ограничения с инициатором или заказчиком.' },
        { title: 'План и команда', text: 'Разбиваю работу на этапы, фиксирую задачи и сроки, координирую участников в Bitrix24.' },
        { title: 'Сбор информации', text: 'Получаю данные и обратную связь от экспертов, технологов, продуктологов и других участников.' },
        { title: 'Подготовка результата', text: 'Структурирую материалы, собираю презентацию или прототип, передаю визуальные материалы в дизайн.' },
        { title: 'Согласование и сдача', text: 'Организую демонстрации, собираю замечания, контролирую правки и передаю результат заказчику или руководству.' },
      ],
    },
    ai: {
      title: 'ИИ-инструменты в работе',
      points: [
        'Уверенно использую LLM и генеративные инструменты для аналитики, работы с информацией и подготовки контента',
        'Проводил внутренние обучения коллег по работе с ИИ-инструментами и формированию запросов',
        'Использовал ИИ-инструменты при проектировании и разработке этого сайта-портфолио',
      ],
    },
    about: {
      title: 'Обо мне',
      text: [
        'Работал в ГК «МП-Технологии» с августа 2024 по ноябрь 2026 года. Начинал с проектных задач; примерно с начала 2025 года моя зона ответственности расширилась на контент-маркетинг, аналитические продукты, R&D и координацию внутренних процессов.',
        'Вёл проекты в сфере B2B-оборудования и упаковки: собирал требования, координировал экспертов и исполнителей, контролировал сроки, согласования и подготовку итоговых материалов. Обычно одновременно в работе находилось 4–5 проектов; в отдельных командах участвовало до 15 человек.',
        'Дополнительно систематизировал работу с задачами в Bitrix24, создал структуру облачного хранения с настройкой доступов и резервным копированием существующих материалов. Использую Figma, инструменты контент-маркетинга и ИИ.',
      ],
      educationTitle: 'Образование',
      education: [
        { degree: 'Прикладная информатика в экономике (09.03.03)', school: 'Калининградский государственный технический университет (КГТУ)', years: '2022 — 2026' },
        { degree: 'Техник по информационным системам', school: 'Калининградский морской рыбопромышленный колледж (КМРК)', years: '2018 — 2022' },
      ],
      skillsTitle: 'Ключевые навыки',
      skills: [
        'Project Management: постановка задач, планирование, координация, контроль сроков',
        'Bitrix24, Trello; основы Agile',
        'Сбор требований, подготовка ТЗ и согласование результатов',
        'Координация R&D и продуктовая аналитика',
        'Прототипирование интерфейсов в Figma',
        'Контент-маркетинг: видео, email, SMM и SEO',
        'ИИ-инструменты, LLM, Prompting и внутреннее обучение',
        'Английский язык (B1–B2)',
      ],
    },
    contacts: {
      name: 'Данил Яковенко',
      location: 'Калининград / Удалённо',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@mail.ru',
      resumeUrl: '/resume-ru.pdf',
    },
    projects: [
      {
        id: 'trendbooks',
        category: 'pm',
        featured: true,
        title: 'Разработка аналитических трендбуков',
        period: '2025 — 2026',
        role: 'Основной PM и автор аналитической части',
        teamSize: 'До 15 человек на пике',
        team: [
          'CEO — инициатор и основной проверяющий',
          'Ассистент CEO',
          'Директор по маркетингу',
          'Помощник PM',
          '2 дизайнера',
          '2 проектанта',
          'Технолог',
          'Продуктолог',
          'Маркетолог',
          'Менеджер по продажам',
        ],
        description:
          'Вёл разработку трёх аналитических трендбуков: отвечал за аналитическую часть, сбор экспертных материалов, организацию работы команды и поэтапную передачу готовых разделов CEO.',
        result:
          'Подготовлены и представлены три аналитических продукта. После каждого выпуска проводил внутренние презентации для 30–50 участников; также организовывал показы ранних версий внешней аудитории.',
        achievements: [
          'Был основным автором аналитической части, собирал материалы в единую презентацию и передавал её дизайнерам.',
          'Собирал экспертные материалы и обратную связь от технологов, продуктологов, маркетинга и продаж.',
          'Согласовывал материалы с директором по маркетингу, контролировал сроки и организовывал поэтапную сдачу CEO.',
        ],
        tools: ['Bitrix24', 'Figma', 'Презентации', 'Экспертные интервью'],
        media: [{ type: 'image', url: '/assets/trendbook-1.webp', caption: 'Фрагмент аналитического трендбука. Публиковать только после проверки и необратимого скрытия NDA-данных.' }],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        featured: true,
        title: 'Ребрендинг KITA: управление проектом под ключ',
        period: '3–4 недели',
        role: 'Ведущий Project Manager',
        teamSize: '4–5 человек',
        team: [
          'Дизайнер',
          'Директор по маркетингу',
          'Менеджер по продажам',
          'Помощь проектного менеджера — по необходимости',
        ],
        description:
          'Вёл проект ребрендинга от первого брифа до итоговой презентации клиенту. Координировал разработку логотипа, упаковки и оформления торговой точки, поддерживал прямую коммуникацию с заказчиком.',
        result:
          'Проект завершён за 3–4 недели. Клиент начал публиковать разработанные материалы в Instagram и занимается их патентованием.',
        achievements: [
          'Был основным PM на всём протяжении проекта: планировал работу, координировал участников и контролировал сроки.',
          'Организовывал коммуникацию с клиентом, согласование промежуточных решений и финальную презентацию.',
        ],
        tools: ['Bitrix24', 'Figma', 'Клиентские встречи', 'Презентации'],
        media: [{ type: 'image', url: '/assets/kita-1.webp', caption: 'Материалы проекта. Перед публикацией проверь разрешение клиента и условия использования.' }],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        featured: true,
        title: 'R&D-эксперимент по срокам хранения',
        period: '1,5 года',
        role: 'Project Manager / Координатор исследования',
        teamSize: '3–4 человека',
        description:
          'Координировал два параллельных эксперимента по оценке сохранности продукта: испытания в термостате и хранение продукта на полках в упаковке компании.',
        result:
          'В ходе полочного эксперимента лабораторные проверки не выявили признаков порчи продукта за весь период наблюдения. Результат подтвердил данные предыдущего этапа.',
        achievements: [
          'Организовал шесть проверок продукта на протяжении всего эксперимента.',
          'Подготовил техническое задание для ассистента в филиале, график проверок и систему учёта партий.',
          'Координировал передачу образцов и получение результатов лабораторных проверок.',
        ],
        tools: ['Bitrix24', 'Excel', 'Google Sheets', 'Лабораторные отчёты'],
        media: [{ type: 'image', url: '/assets/shelf-life-1.webp', caption: 'График эксперимента или обезличенный фрагмент лабораторных результатов' }],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        featured: true,
        title: 'Цифровая витрина PACK-5 и прототип калькулятора',
        period: '2024 — 2025',
        role: 'Project Manager / Прототипист',
        teamSize: '3–4 человека',
        description:
          'Участвовал в создании цифровой витрины PACK-5 как части сайта pack-5.ru. Координировал работу внешнего веб-разработчика, участвовал в формировании требований и прототипировании интерфейсных решений в Figma.',
        result:
          'Цифровая витрина запущена. На выставке АПМ около 100 посетителей приняли участие в опросе; 30–40 человек прошли подробную анкету.',
        achievements: [
          'Спроектировал интерактивный прототип калькулятора упаковочных решений в Figma.',
          'Координировал взаимодействие с внешним веб-разработчиком и подготовку материалов для цифровой витрины.',
          'Организовал сбор обратной связи от посетителей выставки.',
        ],
        tools: ['Figma', 'Bitrix24', 'Требования к веб-разработке', 'Опросы'],
        media: [
          { type: 'image', url: '/assets/pack5-1.webp', caption: 'Фрагмент цифровой витрины PACK-5' },
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Открыть сайт PACK-5' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Систематизация процессов и корпоративная IT-поддержка',
        period: '2024 — 2026',
        role: 'Project Operations / IT Support',
        description:
          'Переводил рабочие процессы в Bitrix24 и организовывал единый подход к хранению корпоративных материалов. Дополнительно решал административные и технические вопросы сотрудников.',
        result:
          'Настроена рабочая система задач и хранения материалов, поддерживавшая параллельную работу над 4–5 проектами.',
        achievements: [
          'Создал структуру облачных папок, настроил права доступа и подготовил резервные копии существующих материалов.',
          'Зарегистрировал новый договор корпоративной связи, администрировал SIM-карты, взаимодействовал с менеджерами и вёл документацию.',
          'Настраивал ноутбуки и учётные записи, помогал сотрудникам решать возникавшие технические вопросы.',
        ],
        tools: ['Bitrix24', 'Cloud Storage', 'Корпоративная связь', 'IT Support'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube и видеомаркетинг',
        period: '2025 — 2026',
        role: 'Контент-маркетолог / Видеомейкер',
        description:
          'Готовил контент, участвовал в съёмке и монтаже видеоматериалов, занимался продвижением продукции компании на видеоплатформах.',
        result:
          'Просмотры YouTube увеличились примерно с 84 до 160 тыс. Совокупно на видеоплатформах за год получено около 350–400 тыс. просмотров.',
        achievements: [
          'Увеличил время просмотра YouTube на 99% — до 410 часов.',
          'Работал с видеоконтентом для YouTube и других площадок компании.',
        ],
        tools: ['YouTube', 'CapCut', 'Photoshop', 'Видеопроизводство'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email-маркетинг и сегментация базы',
        period: '2025 — 2026',
        role: 'Email-маркетолог',
        description:
          'Организовывал регулярные email-рассылки, работал с сегментацией клиентской базы, проводил опросы и анализировал реакцию аудитории.',
        result:
          'Open Rate вырос с уровня ниже 10% примерно до 15%; количество прочтений увеличилось на 50%, переходы по ссылкам — почти вдвое.',
        achievements: [
          'Работал с сегментированной базой примерно на 16 000 контактов.',
          'Создавал структуру и шаблоны рассылок в Tilda.',
        ],
        tools: ['Email Marketing', 'Tilda', 'Excel', 'Analytics'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO и выставочная лидогенерация',
        period: '2025 — 2026',
        role: 'Контент-маркетолог',
        description:
          'Работал с корпоративными социальными сетями, готовил SEO-материалы для сайта и участвовал в привлечении потенциальных клиентов на профильных выставках.',
        result: 'Около 40 целевых лидов получено на выставке во второй месяц работы.',
        achievements: [
          'Вёл Telegram-канал и Instagram компании.',
          'Готовил SEO-статьи, подбирал ключевые запросы и метаописания.',
        ],
        tools: ['Telegram', 'Instagram', 'SEO', 'Копирайтинг', 'Выставки'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Игровой сервер Raft (Crystalix) и 3D-контент',
        period: '2022 — 2024',
        role: 'PM / Lead 3D Generalist / Community Manager',
        teamSize: '5 человек',
        description:
          'Участвовал в разработке игрового сервера на платформе Crystalix, создавал 3D-контент для авторов YouTube и координировал работу небольшой команды.',
        result: 'Пиковый онлайн сервера — около 300 игроков; видео с созданными моделями набирали 20–31 тыс. просмотров.',
        achievements: [
          'Создал сотни 3D-моделей в Blockbench и Blender для объектов, окружения и пяти игровых эпох.',
          'Координировал задачи команды из пяти человек и развивал сообщества проекта: VK — 715 участников, Discord и Telegram.',
        ],
        tools: ['Blender', 'Blockbench', 'Photoshop', 'Unity (C#)', 'Trello', 'Discord', 'VK / Telegram'],
        media: [{ type: 'image', url: '/assets/gamedev-raft-1.webp', caption: '3D-модели и игровые объекты для Crystalix' }],
      },
    ],
  },
  en: {
    nav: { cases: 'Cases', process: 'Approach', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Project Manager',
      subtitle:
        'I manage B2B projects from initial requirements to delivery: analytics, R&D research, packaging solutions, and digital products. I coordinate cross-functional teams, timelines, and approvals.',
      cta: 'Message on Telegram',
      resumeLabel: 'Resume (PDF)',
      stats: [
        { value: '4–5', label: 'projects handled in parallel' },
        { value: 'up to 15', label: 'members in a cross-functional team' },
        { value: '1.5 years', label: 'R&D experiment with 6 lab checks' },
      ],
    },
    ui: {
      casesTitle: 'Selected Case Studies',
      casesCountLabel: 'featured cases',
      moreTitle: 'Additional Projects & Experience',
      showProjectsLabel: 'Show additional projects',
      hideProjectsLabel: 'Hide projects',
      resultLabel: 'Result',
      teamLabel: 'Key team members',
      toolsLabel: 'Tools',
      mainNavigationLabel: 'Main navigation',
      languageLabel: 'Language selection',
      openMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      categoryLabels: {
        pm: 'Project Management & Operations',
        marketing: 'Content Marketing',
        gamedev: 'GameDev & 3D',
      },
    },
    process: {
      title: 'My Approach to Project Delivery',
      steps: [
        { title: 'Goals & Requirements', text: 'Align the expected outcome, initial requirements, and constraints with the project initiator or client.' },
        { title: 'Plan & Team', text: 'Break work into stages, define tasks and timelines, and coordinate contributors in Bitrix24.' },
        { title: 'Information Gathering', text: 'Collect input and feedback from subject-matter experts, technologists, product specialists, and other stakeholders.' },
        { title: 'Deliverable Preparation', text: 'Structure the materials, assemble a presentation or prototype, and hand visual assets over to design.' },
        { title: 'Approval & Delivery', text: 'Organize demos, gather feedback, track revisions, and deliver the result to the client or leadership.' },
      ],
    },
    ai: {
      title: 'AI Tools in My Workflow',
      points: [
        'Confident user of LLMs and generative tools for research, information processing, and content preparation',
        'Conducted internal training sessions to help colleagues use AI tools and write effective prompts',
        'Used AI tools while designing and building this portfolio website',
      ],
    },
    about: {
      title: 'About Me',
      text: [
        'Worked at MP-Technologies Group from August 2024 to November 2026. I started with project coordination tasks; around early 2025, my responsibilities expanded to content marketing, analytical products, R&D, and internal operations.',
        'Managed projects in B2B equipment and packaging: gathered requirements, coordinated experts and contributors, tracked timelines and approvals, and prepared final deliverables. Typically, 4–5 projects were in progress in parallel; selected cross-functional teams included up to 15 people.',
        'I also systematized task management in Bitrix24 and created a cloud storage structure with access permissions and backups of existing materials. I use Figma, content marketing tools, and AI applications.',
      ],
      educationTitle: 'Education',
      education: [
        { degree: "Bachelor's Degree, Applied Informatics in Economics (09.03.03)", school: 'Kaliningrad State Technical University (KSTU)', years: '2022 — 2026' },
        { degree: 'Information Systems Technician', school: 'Kaliningrad Marine Fisheries College (KMRC)', years: '2018 — 2022' },
      ],
      skillsTitle: 'Core Skills',
      skills: [
        'Project management: task definition, planning, coordination, and timeline control',
        'Bitrix24, Trello; Agile fundamentals',
        'Requirements gathering, technical briefs, and approvals',
        'R&D coordination and product analytics',
        'UI prototyping in Figma',
        'Content marketing: video, email, SMM, and SEO',
        'AI tools, LLMs, prompting, and internal training',
        'English (B1–B2)',
      ],
    },
    contacts: {
      name: 'Danil Yakovenko',
      location: 'Kaliningrad / Remote',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@mail.ru',
      resumeUrl: '/resume-en.pdf',
    },
    projects: [
      {
        id: 'trendbooks',
        category: 'pm',
        featured: true,
        title: 'Analytical Trendbooks Development',
        period: '2025 — 2026',
        role: 'Lead PM & Main Analytics Author',
        teamSize: 'Up to 15 people at peak',
        team: [
          'CEO — initiator and primary reviewer',
          'CEO assistant',
          'Marketing Director',
          'PM support',
          '2 Designers',
          '2 Project Engineers',
          'Technologist',
          'Product Specialist',
          'Marketer',
          'Sales Manager',
        ],
        description:
          'Led the development of three analytical trendbooks: owned the analytical content, collected expert input, coordinated the team, and delivered completed sections to the CEO in stages.',
        result:
          'Delivered three analytical products. Presented each release to internal audiences of 30–50 people and organized previews of early versions for external audiences.',
        achievements: [
          'Authored the main analytical section, assembled the master presentation, and handed it over to designers.',
          'Collected expert materials and feedback from technologists, product specialists, marketing, and sales.',
          'Aligned materials with the Marketing Director, tracked deadlines, and coordinated phased delivery to the CEO.',
        ],
        tools: ['Bitrix24', 'Figma', 'Presentations', 'Expert Interviews'],
        media: [{ type: 'image', url: '/assets/trendbook-1.webp', caption: 'Trendbook excerpt. Publish only after checking permissions and irreversibly removing confidential information.' }],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        featured: true,
        title: 'KITA Brand Rebranding: End-to-End Project Management',
        period: '3–4 weeks',
        role: 'Lead Project Manager',
        teamSize: '4–5 people',
        team: ['Designer', 'Marketing Director', 'Sales Manager', 'PM support as needed'],
        description:
          'Managed the rebranding project from the initial brief to the final client presentation. Coordinated the logo, packaging, and retail display work, while maintaining direct communication with the client.',
        result:
          'Delivered in 3–4 weeks. The client has started publishing the developed materials on Instagram and is pursuing patent protection for the work.',
        achievements: [
          'Acted as the lead PM throughout the project: planned the work, coordinated contributors, and tracked deadlines.',
          'Managed client communication, intermediate approvals, and the final presentation.',
        ],
        tools: ['Bitrix24', 'Figma', 'Client Meetings', 'Presentations'],
        media: [{ type: 'image', url: '/assets/kita-1.webp', caption: 'Project materials. Check client permission and usage terms before publication.' }],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        featured: true,
        title: 'R&D Shelf-Life Experiment',
        period: '1.5 years',
        role: 'Project Manager / Research Coordinator',
        teamSize: '3–4 people',
        description:
          'Coordinated two parallel product-preservation experiments: testing in a thermostat and shelf storage in the company’s packaging.',
        result:
          'During the shelf-storage experiment, laboratory checks found no signs of spoilage throughout the observation period. The result confirmed findings from the earlier stage.',
        achievements: [
          'Organized six product checks throughout the experiment.',
          'Prepared technical instructions for a branch assistant, the inspection schedule, and batch-tracking process.',
          'Coordinated sample transfers and receipt of laboratory results.',
        ],
        tools: ['Bitrix24', 'Excel', 'Google Sheets', 'Laboratory Reports'],
        media: [{ type: 'image', url: '/assets/shelf-life-1.webp', caption: 'Experiment timeline or an anonymized excerpt from the laboratory results' }],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        featured: true,
        title: 'PACK-5 Digital Showcase & Calculator Prototype',
        period: '2024 — 2025',
        role: 'Project Manager / Prototyper',
        teamSize: '3–4 people',
        description:
          'Contributed to the PACK-5 digital showcase as part of pack-5.ru. Coordinated an external web developer, helped define requirements, and prototyped interface concepts in Figma.',
        result:
          'The digital showcase was launched. At the APM trade show, around 100 visitors took part in the survey; 30–40 completed the detailed questionnaire.',
        achievements: [
          'Designed an interactive Figma prototype of a packaging solutions calculator.',
          'Coordinated the external web developer and prepared materials for the digital showcase.',
          'Organized feedback collection from trade show visitors.',
        ],
        tools: ['Figma', 'Bitrix24', 'Web Requirements', 'Surveys'],
        media: [
          { type: 'image', url: '/assets/pack5-1.webp', caption: 'PACK-5 digital showcase excerpt' },
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Open PACK-5 website' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Workflow Systematization & Corporate IT Support',
        period: '2024 — 2026',
        role: 'Project Operations / IT Support',
        description:
          'Moved work processes into Bitrix24 and established a consistent approach to corporate file storage. Also handled administrative and technical requests from employees.',
        result:
          'Set up a task-management and file-storage workflow supporting 4–5 projects running in parallel.',
        achievements: [
          'Created the cloud folder structure, configured access permissions, and prepared backups of existing materials.',
          'Registered a new corporate telecom agreement, administered SIM cards, liaised with provider managers, and maintained related documentation.',
          'Set up laptops and user accounts and helped employees resolve day-to-day technical issues.',
        ],
        tools: ['Bitrix24', 'Cloud Storage', 'Corporate Telecom', 'IT Support'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube & Video Marketing',
        period: '2025 — 2026',
        role: 'Content Marketer / Video Producer',
        description:
          'Prepared content, participated in filming and editing, and promoted company products across video platforms.',
        result:
          'YouTube views increased from approximately 84k to 160k. Total video views across platforms reached around 350k–400k over a year.',
        achievements: [
          'Increased YouTube watch time by 99%, reaching 410 hours.',
          'Produced and managed video content for YouTube and other company platforms.',
        ],
        tools: ['YouTube', 'CapCut', 'Photoshop', 'Video Production'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email Marketing & List Segmentation',
        period: '2025 — 2026',
        role: 'Email Marketer',
        description:
          'Managed regular email campaigns, segmented the customer database, conducted surveys, and analyzed audience responses.',
        result:
          'Open Rate increased from below 10% to approximately 15%; email reads rose by 50%, while link clicks nearly doubled.',
        achievements: [
          'Worked with a segmented database of approximately 16,000 contacts.',
          'Created newsletter structures and templates in Tilda.',
        ],
        tools: ['Email Marketing', 'Tilda', 'Excel', 'Analytics'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO & Trade Show Lead Generation',
        period: '2025 — 2026',
        role: 'Content Marketer',
        description:
          'Managed company social channels, prepared SEO materials for the website, and supported lead generation at industry trade shows.',
        result: 'Generated approximately 40 targeted leads at a trade show during the second month of the role.',
        achievements: [
          'Managed the company Telegram channel and Instagram account.',
          'Wrote SEO articles and selected keywords and meta descriptions.',
        ],
        tools: ['Telegram', 'Instagram', 'SEO', 'Copywriting', 'Trade Shows'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Raft Game Server (Crystalix) & 3D Content',
        period: '2022 — 2024',
        role: 'PM / Lead 3D Generalist / Community Manager',
        teamSize: '5 people',
        description:
          'Contributed to a game server on the Crystalix platform, created 3D content for YouTube creators, and coordinated a small team.',
        result: 'Peak server concurrency reached around 300 players; videos featuring created models received 20k–31k views.',
        achievements: [
          'Created hundreds of 3D models in Blockbench and Blender for assets, environments, and five game eras.',
          'Coordinated a five-person team and managed project communities: VK — 715 members, plus Discord and Telegram.',
        ],
        tools: ['Blender', 'Blockbench', 'Photoshop', 'Unity (C#)', 'Trello', 'Discord', 'VK / Telegram'],
        media: [{ type: 'image', url: '/assets/gamedev-raft-1.webp', caption: '3D models and game assets created for Crystalix' }],
      },
    ],
  },
};
