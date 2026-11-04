export type Lang = 'ru' | 'en';

export interface ProjectMedia {
  type: 'image' | 'link';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  category: 'pm' | 'marketing' | 'gamedev';
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
    moreTitle: string;
    gamedevTitle: string;
    resultLabel: string;
    teamLabel: string;
    toolsLabel: string;
    imageMissing: string;
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
    nav: { cases: 'Кейсы', process: 'Процесс', about: 'Обо мне', contact: 'Контакты' },
    hero: {
      title: 'Проектный менеджер',
      subtitle:
        'Довожу B2B/B2C продукты от концепции до сдачи: аналитика, R&D-эксперименты, упаковка и веб-сервисы. Управляю кросс-функциональными командами, держу сроки и согласования с CEO.',
      cta: 'Написать в Telegram',
      resumeLabel: 'Резюме (PDF)',
      stats: [
        { value: 'до 15', label: 'человек в кросс-функциональной команде' },
        { value: 'до ~15', label: 'проектов в месяц (рост с 1–2)' },
        { value: '1,5 года', label: 'R&D-эксперимент с 6 лабораторными тестами' },
      ],
    },
    ui: {
      casesTitle: 'Ключевые кейсы',
      moreTitle: 'Системная работа и маркетинг',
      gamedevTitle: 'Ранний опыт: игровые проекты',
      resultLabel: 'Результат',
      teamLabel: 'Команда',
      toolsLabel: 'Инструменты',
      imageMissing: 'Добавьте файл:',
    },
    process: {
      title: 'Как я веду проект',
      steps: [
        { title: 'Задача и сроки', text: 'Фиксирую цель с инициатором, раскладываю на этапы и сроки в Bitrix24.' },
        { title: 'Сбор материалов', text: 'Собираю данные и мнения у экспертов, получаю обратную связь.' },
        { title: 'Сборка и дизайн', text: 'Собираю материал в единую презентацию и передаю в работу дизайнерам.' },
        { title: 'Согласование', text: 'Согласую с директором по маркетингу и руководством, держу сроки.' },
        { title: 'Показ и сдача', text: 'Показываю команде и сдаю CEO по частям после каждого выхода.' },
      ],
    },
    ai: {
      title: 'ИИ в проектном управлении',
      points: [
        'Системный пользователь LLM и генеративных инструментов',
        'Проводил внутреннее обучение ИИ-инструментам для сотрудников',
        'Сайт-портфолио спроектирован и собран с использованием ИИ',
      ],
    },
    about: {
      title: 'Обо мне',
      text: [
        'Project Manager в ГК «МП-Технологии» (B2B-оборудование и упаковка). Отвечаю за полный цикл проекта: от брифа и сбора требований у экспертов до согласования с CEO и проведения демонстраций.',
        'Систематизировал управление задачами в Bitrix24 и регламентировал облачное хранение данных. Владею инструментами продуктового дизайна (Figma) и контент-маркетинга.',
      ],
      educationTitle: 'Образование',
      education: [
        { degree: 'Прикладная информатика в экономике (09.03.03)', school: 'КГТУ, Калининград', years: '2022 — 2026' },
        { degree: 'Техник по информационным системам', school: 'КМРК, Калининград', years: '2018 — 2022' },
      ],
      skillsTitle: 'Ключевые навыки',
      skills: [
        'Project Management (Bitrix24, Trello, Agile)',
        'Сбор ТЗ, согласования, защита перед CEO',
        'R&D-координация и продуктовая аналитика',
        'Прототипирование интерфейсов (Figma)',
        'Внедрение ИИ-инструментов (Prompting, LLM)',
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
        title: 'Аналитический трендбук',
        period: '2025 — 2026',
        role: 'Основной PM и автор аналитической части',
        teamSize: 'До 15 человек',
        team: [
          'CEO (инициатор) и ассистент',
          'Директор по маркетингу',
          'Помощник PM',
          '2 дизайнеры',
          '2 проектанта',
          'Технолог',
          'Продуктолог',
          'Маркетолог',
          'Менеджер по продажам',
        ],
        description: 'Руководил созданием 3 аналитических трендбуков: от сбора данных у экспертов до поэтапной сдачи CEO.',
        result: 'Сдан CEO по частям; каждый выход презентовал на онлайн-встречах аудитории 30–50 человек.',
        achievements: [
          'Написал аналитическую часть, собрал финальную презентацию и передал в дизайн.',
          'Организовал сбор экспертных материалов от технологов, продуктологов и отдела продаж.',
          'Выстроил сквозной контроль сроков выполнения задач для всей команды.',
        ],
        tools: ['Bitrix24', 'Figma', 'Презентации'],
        media: [{ type: 'image', url: '/assets/trendbook-1.webp', caption: 'Страницы трендбука (NDA, заблюрено)' }],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        featured: true,
        title: 'Ребрендинг бренда KITA «под ключ»',
        period: '3–4 недели',
        role: 'Основной PM от старта до сдачи',
        teamSize: '4–5 человек',
        team: ['Дизайнер', 'Директор по маркетингу', 'Менеджер по продажам', 'Помощник PM'],
        description: 'Управление проектом ребрендинга упаковки, витрины и логотипа с прямым взаимодействием с клиентом.',
        result: 'Проект сдан за 4 недели. Клиент патентует результаты и публикует их в соцсетях.',
        achievements: [
          'Единственный PM на проекте от первого брифа до итоговой презентации.',
          'Организовал коммуникацию с клиентом и сдал работу строго в срок.',
        ],
        tools: ['Bitrix24', 'Figma', 'Онлайн-созвоны'],
        media: [{ type: 'image', url: '/assets/kita-1.webp', caption: 'Материалы проекта (NDA, заблюрено)' }],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        featured: true,
        title: 'R&D-эксперимент по срокам хранения (1,5 года)',
        period: '1,5 года',
        role: 'PM / Координатор исследования',
        teamSize: '3–4 человека',
        description: 'Два параллельных теста сохранности продукта: в ускоренном режимe (термостат) и на полках в упаковке компании.',
        result: 'Лаборатория подтвердила: продукт сохранился весь заявленный срок без следов порчи.',
        achievements: [
          'Организовал 6 лабораторных проверок на протяжении всего исследования.',
          'Разработал ТЗ для ассистента в филиале, график проверок и учет партий.',
        ],
        tools: ['Bitrix24', 'Excel / Google Sheets', 'Лабораторные отчёты'],
        media: [{ type: 'image', url: '/assets/shelf-life-1.webp', caption: 'График и результаты проверок' }],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        featured: true,
        title: 'Цифровая витрина Pack-5 и калькулятор',
        period: '2024 — 2025',
        role: 'PM / Прототипист',
        teamSize: '3–4 человека',
        description: 'Управление созданием цифровой витрины pack-5.ru и координирование стороннего веб-разработчика.',
        result: 'Витрина запущена; проведён опрос ~100 посетителей на выставке АПМ.',
        achievements: [
          'Спроектировал интерактивный прототип калькулятора упаковочных решений в Figma.',
          'Организовал очное интервьюирование на выставке (30–40 полных анкет).',
        ],
        tools: ['Figma', 'Bitrix24', 'WebDev'],
        media: [
          { type: 'image', url: '/assets/pack5-1.webp', caption: 'Цифровая витрина Pack-5' },
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Открыть pack-5.ru' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Внедрение Bitrix24 и оптимизация процессов',
        period: '2024 — 2026',
        role: 'PM / Системный администратор',
        description: 'Перенос рабочих процессов в Bitrix24 и организация единой структуры хранения материалов.',
        result: 'Пропускная способность команды выросла до ~15 проектов в месяц.',
        achievements: [
          'Создал структуру облачных папок, настроил права доступа и резервное копирование.',
          'Администрировал корпоративную связь и техническое оснащение рабочих мест.',
        ],
        tools: ['Bitrix24', 'Cloud Storage', 'IT Ops'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube и видеомаркетинг',
        period: '2024 — 2026',
        role: 'Контент-маркетолог / Видеомейкер',
        description: 'Съёмка, монтаж и продвижение видеоконтента продукции на видеоплатформах.',
        result: 'Просмотры на YouTube выросли с 84 до 160 тыс. (+99%), суммарно 350–400 тыс. просмотров.',
        achievements: ['Увеличил время просмотра на 99% (до 410 часов).'],
        tools: ['YouTube', 'CapCut', 'Photoshop'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email-маркетинг и сегментация баз',
        period: '2024 — 2026',
        role: 'Email Marketer',
        description: 'Регулярные рассылки, сегментация базы, проведение опросов и анализ аудитории.',
        result: 'Open Rate вырос с <10% до 15%, кликабельность (CTR) выросла почти вдвое.',
        achievements: ['Рост прочтений писем на 50%. Верстка шаблонов в Tilda.'],
        tools: ['Tilda', 'Excel', 'Analytics'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO и лидогенерация',
        period: '2024 — 2026',
        role: 'Контент-маркетолог',
        description: 'Ведение социальных сетей компании, SEO-статьи и работа на профильных выставках.',
        result: 'Сгенерировал ~40 целевых лидов на выставке на 2-й месяц работы.',
        achievements: ['Ведение Telegram-канала и Instagram. Написание SEO-статей.'],
        tools: ['Telegram', 'Instagram', 'SEO'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Игровой сервер Raft (Crystalix) & 3D Content',
        period: '2022 — 2024',
        role: 'PM / Lead 3D Generalist / Community Manager',
        teamSize: '5 человек',
        description: 'Создание 3D-контента для ютуберов и разработка игрового сервера на платформе Crystalix.',
        result: 'Пиковый онлайн ~300 игроков; видео с моделями набирали 20–31 тыс. просмотров.',
        achievements: [
          'Создал сотни 3D-моделей (Blockbench, Blender) для 5 эпох.',
          'Управление сообществами: VK (715 участников), Discord, Telegram.',
        ],
        tools: ['Blender', 'Blockbench', 'Unity (C#)', 'Trello'],
        media: [{ type: 'image', url: '/assets/gamedev-raft-1.webp', caption: '3D-модели для Crystalix' }],
      },
    ],
  },
  en: {
    nav: { cases: 'Cases', process: 'Process', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Project Manager',
      subtitle:
        'I drive B2B/B2C products from concept to delivery: analytics, R&D experiments, packaging, and digital services. Leading cross-functional teams, managing timelines and CEO approvals.',
      cta: 'Message on Telegram',
      resumeLabel: 'Resume (PDF)',
      stats: [
        { value: 'up to 15', label: 'cross-functional team size' },
        { value: 'up to ~15', label: 'projects/month capacity' },
        { value: '1.5 yrs', label: 'R&D experiment, 6 lab tests' },
      ],
    },
    ui: {
      casesTitle: 'Key Cases',
      moreTitle: 'Operations & Marketing',
      gamedevTitle: 'Early Experience: GameDev',
      resultLabel: 'Result',
      teamLabel: 'Team',
      toolsLabel: 'Tools',
      imageMissing: 'Add file:',
    },
    process: {
      title: 'How I Run Projects',
      steps: [
        { title: 'Goal & Scope', text: 'Align targets with initiator, break into milestones and timelines in Bitrix24.' },
        { title: 'Expert Input', text: 'Gather data and technical requirements from subject matter experts.' },
        { title: 'Assembly & Design', text: 'Compile input into a structured presentation and hand off to designers.' },
        { title: 'Approvals', text: 'Coordinate with marketing director and leadership while keeping deadlines.' },
        { title: 'Delivery', text: 'Present to team and deliver to CEO in phases after each release.' },
      ],
    },
    ai: {
      title: 'AI in Project Management',
      points: [
        'Advanced user of LLMs and generative AI tools',
        'Conducted internal AI training sessions for colleagues',
        'This portfolio site was designed and built with AI tools',
      ],
    },
    about: {
      title: 'About Me',
      text: [
        'Project Manager in B2B industrial equipment & packaging (MP-Technologies Group). I own projects end-to-end: gathering requirements from experts, managing timelines, securing approvals, and presenting final deliverables.',
        'Systematized task workflows in Bitrix24 and standardized cloud storage. Skilled in UI prototyping (Figma) and content marketing.',
      ],
      educationTitle: 'Education',
      education: [
        { degree: "Bachelor's, Applied Informatics (09.03.03)", school: 'KSTU, Kaliningrad', years: '2022 — 2026' },
        { degree: 'Information Systems Technician', school: 'KMRC, Kaliningrad', years: '2018 — 2022' },
      ],
      skillsTitle: 'Core Skills',
      skills: [
        'Project Management (Bitrix24, Trello, Agile)',
        'Scope management, CEO approvals & reporting',
        'R&D coordination & product analytics',
        'UI Prototyping (Figma)',
        'AI Integration (Prompting, LLMs)',
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
        title: 'Analytical Trendbook',
        period: '2025 — 2026',
        role: 'Lead PM & Analytics Author',
        teamSize: 'Up to 15 people',
        team: [
          'CEO (initiator) & assistant',
          'Marketing Director',
          'PM Assistant',
          '2 Designers',
          '2 Project Engineers',
          'Technologist',
          'Product Manager',
          'Marketer',
          'Sales Manager',
        ],
        description: 'Led creation of 3 analytical trendbooks: from collecting expert input to phased delivery to CEO.',
        result: 'Delivered to CEO in phases; presented releases to 30–50 attendees on live sessions.',
        achievements: [
          'Authored analytical section, compiled master presentation, and handed off to design.',
          'Structured data collection from engineers, product managers, and sales teams.',
          'Controlled delivery timelines across all team members.',
        ],
        tools: ['Bitrix24', 'Figma', 'Presentations'],
        media: [{ type: 'image', url: '/assets/trendbook-1.webp', caption: 'Trendbook pages (NDA, blurred)' }],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        featured: true,
        title: 'Turnkey KITA Brand Rebranding',
        period: '3–4 weeks',
        role: 'Lead PM (Kickoff to Delivery)',
        teamSize: '4–5 people',
        team: ['Designer', 'Marketing Director', 'Sales Manager', 'PM Assistant'],
        description: 'Managed packaging, showcase, and logo rebranding with direct client communication and defense.',
        result: 'Delivered in 4 weeks. Client is patenting deliverables and publishing in official media.',
        achievements: [
          'Sole PM throughout the project lifespan.',
          'Managed client expectations and delivered on tight schedule.',
        ],
        tools: ['Bitrix24', 'Figma', 'Client Calls'],
        media: [{ type: 'image', url: '/assets/kita-1.webp', caption: 'Project assets (NDA, blurred)' }],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        featured: true,
        title: 'R&D Shelf-Life Experiment (1.5 Years)',
        period: '1.5 years',
        role: 'PM / Research Coordinator',
        teamSize: '3–4 people',
        description: 'Two parallel product preservation tests: accelerated thermostat testing and shelf storage in company packaging.',
        result: 'Laboratory confirmed product stayed fully intact with zero spoilage.',
        achievements: [
          'Organized 6 lab tests across 1.5 years of research.',
          'Created technical specs for branch assistant, inspection schedules, and batch tracking.',
        ],
        tools: ['Bitrix24', 'Excel / Google Sheets', 'Lab Reports'],
        media: [{ type: 'image', url: '/assets/shelf-life-1.webp', caption: 'Schedule & Test Results' }],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        featured: true,
        title: 'Pack-5 Digital Showcase & Calculator',
        period: '2024 — 2025',
        role: 'PM / Prototyper',
        teamSize: '3–4 people',
        description: 'Managed development of pack-5.ru showcase and supervised external web developer.',
        result: 'Showcase launched; trade show survey collected data from ~100 visitors.',
        achievements: [
          'Designed interactive packaging solution calculator prototype in Figma.',
          'Organized trade show survey (30–40 fully completed surveys).',
        ],
        tools: ['Figma', 'Bitrix24', 'WebDev'],
        media: [
          { type: 'image', url: '/assets/pack5-1.webp', caption: 'Pack-5 Digital Showcase' },
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Open pack-5.ru' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Bitrix24 Workflows & Process Optimization',
        period: '2024 — 2026',
        role: 'PM / Internal Systems Admin',
        description: 'Migrated workflows to Bitrix24 and standardized file storage structure.',
        result: 'Team capacity increased to ~15 projects per month.',
        achievements: [
          'Designed cloud storage structure, permissions, and automated backups.',
          'Managed corporate telecom accounts and office IT infrastructure.',
        ],
        tools: ['Bitrix24', 'Cloud Storage', 'IT Ops'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube & Video Marketing',
        period: '2024 — 2026',
        role: 'Content Marketer / Video Producer',
        description: 'Filming, editing, and promoting industrial product videos across platforms.',
        result: 'YouTube views grew from 84k to 160k (+99%), total 350k–400k views/year.',
        achievements: ['Increased watch time by +99% (up to 410 hours).'],
        tools: ['YouTube', 'CapCut', 'Photoshop'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email Marketing & List Segmentation',
        period: '2024 — 2026',
        role: 'Email Marketer',
        description: 'Regular email campaigns, list segmentation, surveys, and audience analysis.',
        result: 'Open rate grew from <10% to 15%, CTR nearly doubled.',
        achievements: ['Email reads up by +50%. Built templates in Tilda.'],
        tools: ['Tilda', 'Excel', 'Analytics'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO & Trade Show Lead Gen',
        period: '2024 — 2026',
        role: 'Content Marketer',
        description: 'Managed social channels, SEO copywriting, and trade show lead generation.',
        result: 'Generated ~40 qualified leads in the 2nd month of work.',
        achievements: ['Managed Telegram channel and Instagram. Authored SEO articles.'],
        tools: ['Telegram', 'Instagram', 'SEO'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Raft Game Server (Crystalix) & 3D Content',
        period: '2022 — 2024',
        role: 'PM / Lead 3D Generalist / Community Manager',
        teamSize: '5 people',
        description: 'Created 3D assets for YouTubers and built a game server on Crystalix.',
        result: 'Peak online ~300 players; videos got 20k–31k views.',
        achievements: [
          'Created hundreds of 3D models for 5 historical/tech eras.',
          'Community management: VK (715 members), Discord, Telegram.',
        ],
        tools: ['Blender', 'Blockbench', 'Unity (C#)', 'Trello'],
        media: [{ type: 'image', url: '/assets/gamedev-raft-1.webp', caption: '3D models for Crystalix' }],
      },
    ],
  },
};
