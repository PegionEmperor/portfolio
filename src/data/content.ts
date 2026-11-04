export type Category = 'all' | 'pm' | 'marketing' | 'gamedev';
export type Lang = 'ru' | 'en';

export interface ProjectMedia {
  type: 'image' | 'video' | 'link';
  url: string;
  caption?: string;
  isNdaBlurred?: boolean;
}

export interface Project {
  id: string;
  category: 'pm' | 'marketing' | 'gamedev';
  title: string;
  period: string;
  role: string;
  teamSize?: string;
  description: string;
  result: string; // главный итог, в карточке показывается крупно
  achievements: string[];
  tools: string[];
  link?: string;
  media?: ProjectMedia[];
}

export interface ContentSection {
  hero: { title: string; subtitle: string; cta: string };
  about: {
    title: string;
    text: string[];
    educationTitle: string;
    education: { degree: string; school: string; years: string }[];
    skillsTitle: string;
    skills: string[];
  };
  categories: Record<Category, string>;
  resultLabel: string;
  contacts: { name: string; location: string; telegram: string; email: string };
  projects: Project[];
}

// ВАЖНО: пункты с пометкой «ПРОВЕРИТЬ» подтвердите сами перед публикацией.
export const PORTFOLIO_DATA: Record<Lang, ContentSection> = {
  ru: {
    hero: {
      title: 'Данил Яковенко — проектный менеджер',
      subtitle:
        'Веду 4–5 проектов параллельно: аналитические трендбуки, R&D-эксперименты, запуск упаковки и цифровых продуктов. Команды до 15 человек, сроки, согласования, сдача CEO. Дополнительно — контент-маркетинг и внедрение ИИ-инструментов.',
      cta: 'Написать в Telegram',
    },
    about: {
      title: 'Обо мне',
      text: [
        'Проектный менеджер в B2B-производстве упаковки (ГК «МП-Технологии»). Отвечаю за проект от первой идеи до сдачи: собираю материалы у экспертов, веду сроки, согласую с директором по маркетингу и CEO, передаю в дизайн и показываю результат команде.',
        'Выстроил в Bitrix24 структуру облачных папок, резервное копирование и доступы. Второе направление — контент-маркетинг: видео, email, соцсети. Опытный пользователь ИИ-инструментов, проводил обучение для коллег.',
      ],
      educationTitle: 'Образование и курсы',
      education: [
        {
          degree: 'Бакалавр, Прикладная информатика (09.03.03)',
          school: 'Калининградский государственный технический университет (КГТУ)',
          years: '2022 — 2026',
        },
        {
          degree: 'Курсы по маркетингу',
          school: 'Во время учёбы',
          years: '2023 — 2025',
        },
        {
          degree: 'Обучение ИИ-инструментам',
          school: 'Во время работы',
          years: '2024 — 2026',
        },
      ],
      skillsTitle: 'Ключевые навыки',
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
    categories: {
      all: 'Все проекты',
      pm: 'Управление проектами',
      marketing: 'Маркетинг',
      gamedev: 'Игровые проекты',
    },
    resultLabel: 'Результат',
    contacts: {
      name: 'Данил Яковенко',
      location: 'Калининград / Удалённо',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@mail.ru',
    },
    projects: [
      {
        id: 'trendbooks',
        category: 'pm',
        title: 'Аналитический трендбук',
        period: '2025 — 2026',
        role: 'Основной PM и автор аналитической части',
        teamSize: 'До 15 человек',
        description:
          'Руководил созданием трендбука: от сбора материалов у экспертов до поэтапной сдачи CEO.',
        result:
          'Трендбук сдан CEO по частям, каждую версию показывал на встречах для 30–50 человек.',
        achievements: [
          'Написал аналитическую часть, собрал всю презентацию и передал её в дизайн.',
          'Собирал материалы у экспертов, получал обратную связь и согласовывал с директором по маркетингу.',
          'Вёл сроки задач для команды: CEO с ассистентом, директор по маркетингу, 2 дизайнера, 2 проектанта, технолог, продуктолог, маркетолог, менеджер по продажам.',
          'Показывал ранние версии сторонним людям и учитывал их отзывы.',
        ],
        tools: ['Bitrix24', 'Figma', 'Презентации'],
        media: [
          {
            type: 'image',
            url: '/assets/trendbook-preview.webp',
            caption: 'Макет трендбука (NDA)',
            isNdaBlurred: true,
          },
        ],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        title: 'Проект для клиента KITA',
        period: '3–4 недели',
        role: 'Основной PM от старта до презентации продукта',
        teamSize: '4–5 человек',
        description:
          'Вёл проект под ключ: дизайнер, директор по маркетингу, менеджер по продажам, иногда помогала Полина.', // ПРОВЕРИТЬ: что именно делали (упаковка, логотип, витрина?)
        result:
          'Клиент уже публикует разработанное в Instagram и патентует его.', // ПРОВЕРИТЬ: можно ли называть клиента
        achievements: [
          'Сдал проект в срок за 3–4 недели.',
          'Был единственным PM на всём пути: от брифа до презентации клиенту.',
        ],
        tools: ['Bitrix24', 'Figma', 'Онлайн-созвоны'],
        media: [
          {
            type: 'image',
            url: '/assets/kita-preview.webp',
            caption: 'Материалы проекта (NDA)',
            isNdaBlurred: true,
          },
        ],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        title: 'R&D-эксперимент по срокам хранения',
        period: '1,5 года',
        role: 'PM / координатор исследования',
        teamSize: '3–4 человека',
        description:
          'Два параллельных эксперимента: ускоренный в термостате и хранение на полках в упаковке компании.',
        result:
          'Лаборатория подтвердила: продукт в нашей упаковке хранился весь срок без следов порчи.', // ПРОВЕРИТЬ: добавьте срок хранения в месяцах
        achievements: [
          'Эксперимент в термостате закончился на полгода раньше, а хранение на полках спустя ещё полгода подтвердило те же данные.',
          'Организовал 6 проверок продукта на протяжении всего эксперимента.',
          'Подготовил ТЗ для ассистента в филиале, график проверок и учёт партий.',
        ],
        tools: ['Bitrix24', 'Excel / Google Sheets', 'Лабораторные отчёты'],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        title: 'Цифровая витрина Pack-5 и калькулятор',
        period: '2024 — 2025',
        role: 'PM / прототипист',
        teamSize: '3–4 человека',
        description:
          'Цифровая витрина — часть лендинга pack-5.ru. Вёл проект и работу внешнего веб-разработчика.',
        result:
          'Витрина запущена, опрос на выставке дал данные по ~100 посетителям.',
        achievements: [
          'Спроектировал в Figma интерактивный прототип калькулятора упаковочных решений.',
          'Организовал опрос на выставке: опрошено около 100 человек, полный опрос прошли 30–40.',
        ],
        tools: ['Figma', 'Bitrix24'],
        link: 'https://pack-5.ru/',
        media: [{ type: 'link', url: 'https://pack-5.ru/', caption: 'Открыть pack-5.ru' }],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Перевод процессов в Bitrix24 и порядок в данных',
        period: '2024 — 2026',
        role: 'PM / внутренний администратор',
        description:
          'Перенёс рабочие процессы в Bitrix24 и навёл порядок в хранении материалов.', // ПРОВЕРИТЬ: раньше было «с 1–2 до ~15 проектов в месяц», но вы называете 4–5 одновременных. Вернуть цифру только если можете подтвердить.
        result:
          'Единая структура хранения, резервные копии и разграничение доступов для всех материалов.',
        achievements: [
          'Создал структуру облачных папок и сделал резервные копии существующих материалов.',
          'Настроил доступы для сотрудников.',
          'Одновременно вёл 4–5 проектов.',
          'Проводил внутренние обучения коллег по ИИ-инструментам.',
          'Обслуживал корпоративную связь: договор, общение с менеджерами, документация. Отвечал за IT-инфраструктуру офиса.',
        ],
        tools: ['Bitrix24', 'Облачное хранилище', 'ИИ / LLM'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube и видеомаркетинг',
        period: '08.2024 — 2025', // ПРОВЕРИТЬ: период маркетинга до перехода на PM
        role: 'Контент-маркетолог / видеомейкер',
        description: 'Подготовка контента, съёмка, монтаж и продвижение продукции на видеоплатформах.',
        result: 'Просмотры на YouTube выросли с 84 до 160 тыс. (+99%).',
        achievements: [
          'Время просмотра выросло на 99% (до 410 часов).',
          'За последний год набрал 350–400 тыс. просмотров на всех площадках.',
        ],
        tools: ['YouTube', 'CapCut', 'Photoshop'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email-маркетинг и сегментация базы',
        period: '08.2024 — 2025', // ПРОВЕРИТЬ
        role: 'Email-маркетолог',
        description: 'Регулярные рассылки, сегментация клиентской базы, опросы и анализ аудитории.',
        result: 'Open Rate вырос с <10% до 15%, CTR — почти вдвое.',
        achievements: ['Рост прочтений писем на 50%.', 'Собирал шаблоны рассылок в Tilda.'],
        tools: ['Tilda', 'Excel', 'Аналитика'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO и лидогенерация на выставке',
        period: '08.2024 — 2025', // ПРОВЕРИТЬ
        role: 'Контент-маркетолог',
        description: 'Соцсети компании, SEO-статьи и работа на профильных выставках.',
        result: '~40 целевых лидов на выставке уже на 2-й месяц работы.',
        achievements: [
          'Вёл официальные Telegram-канал и Instagram компании.',
          'Писал SEO-статьи с подбором ключевых слов и мета-описаниями.',
        ],
        tools: ['Telegram', 'Instagram', 'SEO'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Игровой сервер Raft (Crystalix) и 3D-контент',
        period: '01.2022 — 08.2024',
        role: 'PM / ведущий 3D-генералист / комьюнити-менеджер',
        teamSize: '5 человек',
        description:
          'Разработка игрового сервера и 3D-контента для крупных ютуберов. Параллельно освоил Unity и C#.',
        result: 'Пиковый онлайн сервера ~300 игроков, видео с моделями набирали 20–31 тыс. просмотров.',
        achievements: [
          'Создал сотни 3D-моделей для 5 историко-технологических эпох.',
          'Координировал команду из 5 человек в Trello.',
          'Развивал сообщества: VK — 715 участников, Telegram — ~200, Discord — сотни.',
        ],
        tools: ['Blender', 'Blockbench', 'Unity (C#)', 'Trello'],
        media: [
          {
            type: 'image',
            url: '/assets/gamedev-raft-models.webp',
            caption: '3D-модели окружения для Crystalix',
          },
        ],
      },
    ],
  },
  en: {
    hero: {
      title: 'Danil Yakovenko — Project Manager',
      subtitle:
        'I run 4–5 projects in parallel: analytical trendbooks, R&D experiments, packaging and digital product launches. Teams up to 15 people, deadlines, approvals, CEO delivery. Also: content marketing and AI tool adoption.',
      cta: 'Message me on Telegram',
    },
    about: {
      title: 'About me',
      text: [
        'Project manager in B2B packaging manufacturing (MP-Technologies Group). I own a project from first idea to delivery: collecting input from experts, tracking deadlines, getting approvals from the marketing director and CEO, handing work to design and presenting results to the team.',
        'In Bitrix24 I built the cloud folder structure, backups and access control. My second track is content marketing: video, email, social media. Experienced AI tool user who trained colleagues.',
      ],
      educationTitle: 'Education & courses',
      education: [
        {
          degree: "Bachelor's, Applied Informatics (09.03.03)",
          school: 'Kaliningrad State Technical University (KSTU)',
          years: '2022 — 2026',
        },
        { degree: 'Marketing courses', school: 'During studies', years: '2023 — 2025' },
        { degree: 'AI tools training', school: 'On the job', years: '2024 — 2026' },
      ],
      skillsTitle: 'Core skills',
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
    categories: {
      all: 'All projects',
      pm: 'Project management',
      marketing: 'Marketing',
      gamedev: 'Game projects',
    },
    resultLabel: 'Result',
    contacts: {
      name: 'Danil Yakovenko',
      location: 'Kaliningrad / Remote',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@mail.ru',
    },
    projects: [
      {
        id: 'trendbooks',
        category: 'pm',
        title: 'Analytical trendbook',
        period: '2025 — 2026',
        role: 'Lead PM & author of the analytical part',
        teamSize: 'Up to 15 people',
        description:
          'Led trendbook creation, from collecting expert input to delivering it to the CEO in stages.',
        result:
          'Delivered to the CEO in parts; every version presented in meetings for 30–50 people.',
        achievements: [
          'Wrote the analytical part, assembled the whole presentation and handed it to design.',
          'Collected expert material, gathered feedback and aligned with the marketing director.',
          'Tracked deadlines for the team: CEO with assistant, marketing director, 2 designers, 2 project engineers, technologist, product manager, marketer, sales manager.',
          'Showed early versions to outside people and used their feedback.',
        ],
        tools: ['Bitrix24', 'Figma', 'Presentations'],
        media: [
          {
            type: 'image',
            url: '/assets/trendbook-preview.webp',
            caption: 'Trendbook layout (NDA)',
            isNdaBlurred: true,
          },
        ],
      },
      {
        id: 'kita-rebranding',
        category: 'pm',
        title: 'KITA client project',
        period: '3–4 weeks',
        role: 'Lead PM from kickoff to product presentation',
        teamSize: '4–5 people',
        description:
          'Ran the project end to end with a designer, marketing director and sales manager; Polina helped at times.',
        result: 'The client is already publishing the result on Instagram and patenting it.',
        achievements: [
          'Delivered on time in 3–4 weeks.',
          'Sole PM from brief to client presentation.',
        ],
        tools: ['Bitrix24', 'Figma', 'Online calls'],
        media: [
          {
            type: 'image',
            url: '/assets/kita-preview.webp',
            caption: 'Project materials (NDA)',
            isNdaBlurred: true,
          },
        ],
      },
      {
        id: 'rd-shelf-life',
        category: 'pm',
        title: 'R&D shelf-life experiment',
        period: '1.5 years',
        role: 'PM / research coordinator',
        teamSize: '3–4 people',
        description:
          'Two parallel experiments: accelerated in a thermostat and real storage on shelves in the company packaging.',
        result:
          'The lab confirmed the product stayed intact in our packaging for the whole period, with no signs of spoilage.',
        achievements: [
          'The thermostat experiment finished 6 months earlier; shelf storage finished 6 months later and confirmed the same data.',
          'Organized 6 product checks across the experiment.',
          'Prepared the brief for the branch assistant, the inspection schedule and batch tracking.',
        ],
        tools: ['Bitrix24', 'Excel / Google Sheets', 'Lab reports'],
      },
      {
        id: 'digital-showcase',
        category: 'pm',
        title: 'Pack-5 digital showcase & calculator',
        period: '2024 — 2025',
        role: 'PM / prototyper',
        teamSize: '3–4 people',
        description:
          'The digital showcase is part of the pack-5.ru landing page. I managed the project and the external web developer.',
        result: 'Showcase launched; the trade-show survey gave data from ~100 visitors.',
        achievements: [
          'Designed an interactive packaging calculator prototype in Figma.',
          'Ran a trade-show survey: about 100 people interviewed, 30–40 completed it fully.',
        ],
        tools: ['Figma', 'Bitrix24'],
        link: 'https://pack-5.ru/',
        media: [{ type: 'link', url: 'https://pack-5.ru/', caption: 'Open pack-5.ru' }],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Moving processes to Bitrix24 & data order',
        period: '2024 — 2026',
        role: 'PM / internal administrator',
        description: 'Moved workflows to Bitrix24 and organized how materials are stored.',
        result: 'One storage structure, backups and role-based access for all materials.',
        achievements: [
          'Built the cloud folder structure and backed up existing materials.',
          'Set up access for employees.',
          'Ran 4–5 projects at the same time.',
          'Trained colleagues on AI tools.',
          'Handled corporate telecom (contract, manager communication, documentation) and office IT.',
        ],
        tools: ['Bitrix24', 'Cloud storage', 'AI / LLM'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube & video marketing',
        period: '08.2024 — 2025',
        role: 'Content marketer / video producer',
        description: 'Content, filming, editing and product promotion on video platforms.',
        result: 'YouTube views grew from 84k to 160k (+99%).',
        achievements: [
          'Watch time grew 99% (to 410 hours).',
          '350–400k views over the last year across all platforms.',
        ],
        tools: ['YouTube', 'CapCut', 'Photoshop'],
      },
      {
        id: 'email-marketing-growth',
        category: 'marketing',
        title: 'Email marketing & list segmentation',
        period: '08.2024 — 2025',
        role: 'Email marketer',
        description: 'Regular campaigns, customer list segmentation, surveys and audience analysis.',
        result: 'Open rate grew from under 10% to 15%; CTR nearly doubled.',
        achievements: ['Email reads up 50%.', 'Built newsletter templates in Tilda.'],
        tools: ['Tilda', 'Excel', 'Analytics'],
      },
      {
        id: 'smm-seo-leadgen',
        category: 'marketing',
        title: 'SMM, SEO & trade-show lead generation',
        period: '08.2024 — 2025',
        role: 'Content marketer',
        description: 'Company social media, SEO articles and trade-show work.',
        result: '~40 qualified leads at a trade show in the 2nd month on the job.',
        achievements: [
          'Ran the official Telegram channel and Instagram.',
          'Wrote SEO articles with keyword research and meta descriptions.',
        ],
        tools: ['Telegram', 'Instagram', 'SEO'],
      },
      {
        id: 'gamedev-crystalix-raft',
        category: 'gamedev',
        title: 'Raft game server (Crystalix) & 3D content',
        period: '01.2022 — 08.2024',
        role: 'PM / lead 3D generalist / community manager',
        teamSize: '5 people',
        description:
          'Game server and 3D content for large YouTubers. Learned Unity and C# along the way.',
        result: 'Peak server online ~300 players; videos with the models got 20–31k views.',
        achievements: [
          'Created hundreds of 3D models for 5 historical-tech eras.',
          'Coordinated a 5-person team in Trello.',
          'Grew communities: VK 715 members, Telegram ~200, Discord hundreds.',
        ],
        tools: ['Blender', 'Blockbench', 'Unity (C#)', 'Trello'],
        media: [
          {
            type: 'image',
            url: '/assets/gamedev-raft-models.webp',
            caption: '3D environment models for Crystalix',
          },
        ],
      },
    ],
  },
};