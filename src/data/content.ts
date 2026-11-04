export type Lang = 'ru' | 'en';

export interface ProjectMedia {
  type: 'image' | 'link';
  url: string; // картинки кладите в public/assets/, url вида '/assets/имя.webp'
  caption?: string;
}

export interface Project {
  id: string;
  category: 'pm' | 'marketing' | 'gamedev';
  featured?: boolean; // true — большой кейс в основном блоке
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

// Пункты с пометкой ПРОВЕРИТЬ подтвердите сами перед публикацией.
export const PORTFOLIO_DATA: Record<Lang, ContentSection> = {
  ru: {
    nav: { cases: 'Кейсы', process: 'Процесс', about: 'Обо мне', contact: 'Контакты' },
    hero: {
      title: 'Проектный менеджер',
      subtitle:
        'Довожу проекты от идеи до сдачи: аналитика, R&D-эксперименты, упаковка и цифровые продукты. Работаю с экспертами, дизайном и руководством, держу сроки и согласования. Дополнительно — контент-маркетинг и внедрение ИИ.',
      cta: 'Написать в Telegram',
      resumeLabel: 'Резюме (PDF)',
      stats: [
        { value: 'до 15', label: 'человек в команде проекта' },
        { value: '4–5', label: 'проектов одновременно' },
        { value: '1,5 года', label: 'R&D-эксперимент, 6 лабораторных проверок' },
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
      title: 'ИИ в работе',
      points: [
        'Опытный пользователь ИИ-инструментов',
        'Проводил внутренние обучения для коллег (LLM, промптинг)',
        'Этот сайт собран мной с помощью ИИ-инструментов',
      ],
    },
    about: {
      title: 'Обо мне',
      text: [
        'Проектный менеджер в B2B-производстве упаковки (ГК «МП-Технологии»). Отвечаю за проект от первой идеи до сдачи: собираю материалы у экспертов, веду сроки, согласую с директором по маркетингу и CEO, передаю в дизайн и показываю результат команде.',
        'Выстроил в Bitrix24 структуру облачных папок, резервное копирование и доступы. Второе направление — контент-маркетинг: видео, email, соцсети.',
      ],
      educationTitle: 'Образование и курсы',
      education: [
        { degree: 'Бакалавр, Прикладная информатика (09.03.03)', school: 'КГТУ, Калининград', years: '2022 — 2026' },
        { degree: 'Курсы по маркетингу', school: 'Во время учёбы', years: '2023 — 2025' },
        { degree: 'Обучение ИИ-инструментам', school: 'Во время работы', years: '2024 — 2026' },
      ],
      skillsTitle: 'Навыки',
      skills: [
        'Управление проектами (Bitrix24, Trello)',
        'Сроки, согласования, работа с CEO',
        'R&D-координация и аналитика',
        'Прототипирование (Figma)',
        'Контент-маркетинг, email, SEO',
        'ИИ-инструменты и обучение команды',
        'Английский (B1–B2)',
      ],
    },
    contacts: {
      name: 'Данил Яковенко',
      location: 'Калининград / Удалённо',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@mail.ru',
      resumeUrl: '/resume-ru.pdf', // положите файл в public/
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
          '2 дизайнера',
          '2 проектанта',
          'Технолог',
          'Продуктолог',
          'Маркетолог',
          'Менеджер по продажам',
        ],
        description: 'Руководил созданием трендбука: от сбора материалов у экспертов до поэтапной сдачи CEO.',
        result: 'Сдан CEO по частям; каждый выход показывал на встречах для 30–50 человек.', // ПРОВЕРИТЬ: сколько трендбуков
        achievements: [
          'Написал аналитическую часть, собрал всю презентацию и передал в дизайн.',
          'Собирал материалы у экспертов, получал обратную связь, согласовывал.',
          'Вёл сроки задач для всей команды.',
          'Показывал ранние версии сторонним людям и учитывал отзывы.',
        ],
        tools: ['Bitrix24', 'Figma', 'Презентации'],
        media: [{ type: 'image', url: '/assets/trendbook-1.webp', caption: 'Страницы трендбука (NDA, размыто)' }],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        featured: true,
        title: 'Проект для клиента KITA',
        period: '3–4 недели',
        role: 'Основной PM от старта до презентации продукта',
        teamSize: '4–5 человек',
        team: ['Дизайнер', 'Директор по маркетингу', 'Менеджер по продажам', 'Помощник PM (эпизодически)'],
        description: 'Вёл проект под ключ от брифа до презентации клиенту.', // ПРОВЕРИТЬ: что именно делали
        result: 'Клиент уже публикует разработанное в Instagram и патентует его.', // ПРОВЕРИТЬ: можно ли называть клиента
        achievements: ['Сдал проект в срок за 3–4 недели.', 'Был единственным PM на всём пути.'],
        tools: ['Bitrix24', 'Figma', 'Онлайн-созвоны'],
        media: [{ type: 'image', url: '/assets/kita-1.webp', caption: 'Материалы проекта (NDA, размыто)' }],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        featured: true,
        title: 'R&D-эксперимент по срокам хранения',
        period: '1,5 года',
        role: 'PM / координатор исследования',
        teamSize: '3–4 человека',
        description: 'Два параллельных эксперимента: ускоренный в термостате и хранение на полках в упаковке компании.',
        result: 'Лаборатория подтвердила: продукт хранился весь срок без следов порчи.', // ПРОВЕРИТЬ: добавьте срок в месяцах
        achievements: [
          'Термостат закончился на полгода раньше, хранение на полках спустя ещё полгода подтвердило те же данные.',
          'Организовал 6 проверок продукта на всём протяжении эксперимента.',
          'Подготовил ТЗ для ассистента в филиале, график проверок и учёт партий.',
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
        role: 'PM / прототипист',
        teamSize: '3–4 человека',
        description: 'Цифровая витрина — часть лендинга pack-5.ru. Вёл проект и работу внешнего веб-разработчика.',
        result: 'Витрина запущена; опрос на выставке дал данные по ~100 посетителям.',
        achievements: [
          'Спроектировал в Figma интерактивный прототип калькулятора упаковочных решений.',
          'Организовал опрос на выставке: опрошено около 100 человек, полный опрос прошли 30–40.',
        ],
        tools: ['Figma', 'Bitrix24'],
        media: [
          { type: 'image', url: '/assets/pack5-1.webp', caption: 'Цифровая витрина Pack-5' },
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Открыть pack-5.ru' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Перевод процессов в Bitrix24',
        period: '2024 — 2026',
        role: 'PM / внутренний администратор',
        description: 'Перенёс рабочие процессы в Bitrix24 и навёл порядок в хранении материалов.', // ПРОВЕРИТЬ: цифру «с 1–2 до ~15 проектов» возвращайте только если можете подтвердить
        result: 'Единая структура хранения, резервные копии и разграничение доступов.',
        achievements: [
          'Создал структуру облачных папок, сделал бэкапы существующих материалов.',
          'Настроил доступы. Одновременно вёл 4–5 проектов.',
          'Вёл корпоративную связь и IT-инфраструктуру офиса.',
        ],
        tools: ['Bitrix24', 'Облачное хранилище'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube и видеомаркетинг',
        period: '08.2024 — 2025', // ПРОВЕРИТЬ период маркетинга
        role: 'Контент-маркетолог / видеомейкер',
        description: 'Контент, съёмка, монтаж и продвижение продукции на видеоплатформах.',
        result: 'Просмотры на YouTube выросли с 84 до 160 тыс. (+99%).',
        achievements: ['Время просмотра +99% (до 410 часов).', '350–400 тыс. просмотров за год на всех площадках.'],
        tools: ['YouTube', 'CapCut', 'Photoshop'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email-маркетинг и сегментация',
        period: '08.2024 — 2025',
        role: 'Email-маркетолог',
        description: 'Регулярные рассылки, сегментация базы, опросы и анализ аудитории.',
        result: 'Open Rate вырос с <10% до 15%, CTR — почти вдвое.',
        achievements: ['Рост прочтений писем на 50%.', 'Собирал шаблоны рассылок в Tilda.'],
        tools: ['Tilda', 'Excel', 'Аналитика'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO и лидогенерация',
        period: '08.2024 — 2025',
        role: 'Контент-маркетолог',
        description: 'Соцсети компании, SEO-статьи и работа на выставках.',
        result: '~40 целевых лидов на выставке на 2-й месяц работы.',
        achievements: ['Вёл Telegram-канал и Instagram компании.', 'Писал SEO-статьи с ключами и мета-описаниями.'],
        tools: ['Telegram', 'Instagram', 'SEO'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Игровой сервер Raft (Crystalix) и 3D-контент',
        period: '01.2022 — 08.2024',
        role: 'PM / ведущий 3D-генералист / комьюнити-менеджер',
        teamSize: '5 человек',
        description: '3D-контент и игровой сервер, работа с крупными ютуберами. Параллельно освоил Unity и C#.',
        result: 'Пиковый онлайн ~300 игроков; видео с моделями набирали 20–31 тыс. просмотров.',
        achievements: [
          'Создал сотни 3D-моделей для 5 историко-технологических эпох.',
          'Координировал команду из 5 человек в Trello.',
          'Сообщества: VK — 715, Telegram — ~200, Discord — сотни.',
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
        'I take projects from idea to delivery: analytics, R&D experiments, packaging and digital products. I work with experts, design and leadership, keeping deadlines and approvals on track. Also: content marketing and AI adoption.',
      cta: 'Message me on Telegram',
      resumeLabel: 'Resume (PDF)',
      stats: [
        { value: 'up to 15', label: 'people on a project team' },
        { value: '4–5', label: 'projects in parallel' },
        { value: '1.5 yrs', label: 'R&D experiment, 6 lab checks' },
      ],
    },
    ui: {
      casesTitle: 'Key cases',
      moreTitle: 'Systems & marketing',
      gamedevTitle: 'Early experience: game projects',
      resultLabel: 'Result',
      teamLabel: 'Team',
      toolsLabel: 'Tools',
      imageMissing: 'Add file:',
    },
    process: {
      title: 'How I run a project',
      steps: [
        { title: 'Goal & timeline', text: 'Fix the goal with the initiator, break it into stages and deadlines in Bitrix24.' },
        { title: 'Collect input', text: 'Gather data and opinions from experts and get feedback.' },
        { title: 'Assemble & design', text: 'Combine everything into one presentation and hand it to designers.' },
        { title: 'Approvals', text: 'Align with the marketing director and leadership while holding deadlines.' },
        { title: 'Present & deliver', text: 'Show it to the team and deliver to the CEO in parts after each release.' },
      ],
    },
    ai: {
      title: 'AI at work',
      points: [
        'Experienced AI tool user',
        'Ran internal training for colleagues (LLMs, prompting)',
        'This site was built by me with AI tools',
      ],
    },
    about: {
      title: 'About me',
      text: [
        'Project manager in B2B packaging manufacturing (MP-Technologies Group). I own a project from first idea to delivery: collecting input from experts, tracking deadlines, getting approvals from the marketing director and CEO, handing work to design and presenting results to the team.',
        'In Bitrix24 I built the cloud folder structure, backups and access control. My second track is content marketing: video, email, social media.',
      ],
      educationTitle: 'Education & courses',
      education: [
        { degree: "Bachelor's, Applied Informatics (09.03.03)", school: 'KSTU, Kaliningrad', years: '2022 — 2026' },
        { degree: 'Marketing courses', school: 'During studies', years: '2023 — 2025' },
        { degree: 'AI tools training', school: 'On the job', years: '2024 — 2026' },
      ],
      skillsTitle: 'Skills',
      skills: [
        'Project management (Bitrix24, Trello)',
        'Deadlines, approvals, CEO reporting',
        'R&D coordination & analytics',
        'Prototyping (Figma)',
        'Content marketing, email, SEO',
        'AI tools & team training',
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
        title: 'Analytical trendbook',
        period: '2025 — 2026',
        role: 'Lead PM & author of the analytical part',
        teamSize: 'Up to 15 people',
        team: [
          'CEO (initiator) and assistant',
          'Marketing director',
          'PM assistant',
          '2 designers',
          '2 project engineers',
          'Technologist',
          'Product manager',
          'Marketer',
          'Sales manager',
        ],
        description: 'Led trendbook creation, from collecting expert input to delivering it to the CEO in stages.',
        result: 'Delivered to the CEO in parts; every release presented to 30–50 people.',
        achievements: [
          'Wrote the analytical part, assembled the presentation and handed it to design.',
          'Collected expert material, gathered feedback and aligned approvals.',
          'Tracked deadlines for the whole team.',
          'Showed early versions to outside people and used their feedback.',
        ],
        tools: ['Bitrix24', 'Figma', 'Presentations'],
        media: [{ type: 'image', url: '/assets/trendbook-1.webp', caption: 'Trendbook pages (NDA, blurred)' }],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        featured: true,
        title: 'KITA client project',
        period: '3–4 weeks',
        role: 'Lead PM from kickoff to product presentation',
        teamSize: '4–5 people',
        team: ['Designer', 'Marketing director', 'Sales manager', 'PM assistant (occasionally)'],
        description: 'Ran the project end to end, from brief to client presentation.',
        result: 'The client is already publishing the result on Instagram and patenting it.',
        achievements: ['Delivered on time in 3–4 weeks.', 'Sole PM throughout.'],
        tools: ['Bitrix24', 'Figma', 'Online calls'],
        media: [{ type: 'image', url: '/assets/kita-1.webp', caption: 'Project materials (NDA, blurred)' }],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        featured: true,
        title: 'R&D shelf-life experiment',
        period: '1.5 years',
        role: 'PM / research coordinator',
        teamSize: '3–4 people',
        description: 'Two parallel experiments: accelerated in a thermostat and real shelf storage in company packaging.',
        result: 'The lab confirmed the product stayed intact for the whole period.',
        achievements: [
          'The thermostat run finished 6 months earlier; shelf storage finished 6 months later and confirmed the same data.',
          'Organized 6 product checks across the experiment.',
          'Prepared the brief for the branch assistant, inspection schedule and batch tracking.',
        ],
        tools: ['Bitrix24', 'Excel / Google Sheets', 'Lab reports'],
        media: [{ type: 'image', url: '/assets/shelf-life-1.webp', caption: 'Check schedule and results' }],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        featured: true,
        title: 'Pack-5 digital showcase & calculator',
        period: '2024 — 2025',
        role: 'PM / prototyper',
        teamSize: '3–4 people',
        description: 'The showcase is part of the pack-5.ru landing page. I managed the project and the external web developer.',
        result: 'Showcase launched; the trade-show survey gave data from ~100 visitors.',
        achievements: [
          'Designed an interactive packaging calculator prototype in Figma.',
          'Ran a trade-show survey: about 100 interviewed, 30–40 completed it fully.',
        ],
        tools: ['Figma', 'Bitrix24'],
        media: [
          { type: 'image', url: '/assets/pack5-1.webp', caption: 'Pack-5 digital showcase' },
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Open pack-5.ru' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Moving processes to Bitrix24',
        period: '2024 — 2026',
        role: 'PM / internal administrator',
        description: 'Moved workflows to Bitrix24 and organized how materials are stored.',
        result: 'One storage structure, backups and role-based access.',
        achievements: [
          'Built the cloud folder structure and backed up existing materials.',
          'Set up access. Ran 4–5 projects at once.',
          'Handled corporate telecom and office IT.',
        ],
        tools: ['Bitrix24', 'Cloud storage'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube & video marketing',
        period: '08.2024 — 2025',
        role: 'Content marketer / video producer',
        description: 'Content, filming, editing and promotion on video platforms.',
        result: 'YouTube views grew from 84k to 160k (+99%).',
        achievements: ['Watch time +99% (to 410 hours).', '350–400k views over the year across platforms.'],
        tools: ['YouTube', 'CapCut', 'Photoshop'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email marketing & segmentation',
        period: '08.2024 — 2025',
        role: 'Email marketer',
        description: 'Regular campaigns, list segmentation, surveys and audience analysis.',
        result: 'Open rate from under 10% to 15%; CTR nearly doubled.',
        achievements: ['Email reads up 50%.', 'Built newsletter templates in Tilda.'],
        tools: ['Tilda', 'Excel', 'Analytics'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO & lead generation',
        period: '08.2024 — 2025',
        role: 'Content marketer',
        description: 'Company social media, SEO articles and trade-show work.',
        result: '~40 qualified leads at a trade show in the 2nd month.',
        achievements: ['Ran the Telegram channel and Instagram.', 'Wrote SEO articles with keywords and meta descriptions.'],
        tools: ['Telegram', 'Instagram', 'SEO'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Raft game server (Crystalix) & 3D content',
        period: '01.2022 — 08.2024',
        role: 'PM / lead 3D generalist / community manager',
        teamSize: '5 people',
        description: '3D content and a game server, working with large YouTubers. Learned Unity and C# along the way.',
        result: 'Peak online ~300 players; videos with the models got 20–31k views.',
        achievements: [
          'Created hundreds of 3D models for 5 historical-tech eras.',
          'Coordinated a 5-person team in Trello.',
          'Communities: VK 715, Telegram ~200, Discord hundreds.',
        ],
        tools: ['Blender', 'Blockbench', 'Unity (C#)', 'Trello'],
        media: [{ type: 'image', url: '/assets/gamedev-raft-1.webp', caption: '3D models for Crystalix' }],
      },
    ],
  },
};