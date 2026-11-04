export type Category = 'all' | 'pm' | 'gamedev' | 'marketing';
export type Lang = 'ru' | 'en';

export interface ProjectMedia {
  type: 'image' | 'video' | 'link';
  url: string;
  caption?: string;
  isNdaBlurred?: boolean;
}

export interface Project {
  id: string;
  category: 'pm' | 'gamedev' | 'marketing';
  title: string;
  period: string;
  role: string;
  teamSize?: string;
  description: string;
  achievements: string[];
  tools: string[];
  link?: string;
  media?: ProjectMedia[];
}

export interface ContentSection {
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    text: string[];
    educationTitle: string;
    education: { degree: string; school: string; years: string }[];
    skillsTitle: string;
    skills: string[];
  };
  categories: Record<Category, string>;
  projects: Project[];
}

export const PORTFOLIO_DATA: Record<Lang, ContentSection> = {
  ru: {
    hero: {
      title: "Данил Яковенко — Project Manager & Content Lead",
      subtitle: "Управление комплексными B2B/B2C цифровыми продуктами, GameDev-проектами и контент-маркетингом. Опыт выстраивания процессов с нуля и руководства кросс-функциональными командами до 15 человек.",
    },
    about: {
       text: [
        "Контент-маркетолог и Project Manager с опытом работы в B2B и продвижении промышленного пищевого оборудования. Специализируюсь на систематизации хаотичных процессов, управлении R&D-исследованиями, ведении соцсетей, создании видео и статей, email-маркетинге и маркетинговых исследованиях.",
        "Выстроил систему управления задачами и облачного хранения в ГК «МП-Технологии», что позволило увеличить пропускную способность команды с 1–2 до ~15 проектов в месяц. Владею на хорошем уровне CapCut, Figma, Photoshop и Blender, активно работаю с Bitrix24 и проводил внутреннее обучение сотрудников ИИ-инструментам.",
        "Увлекаюсь книгами, настольными играми, варгеймом Warhammer и НРИ. Имею опыт организации игровых мероприятий с 0, умею подбирать активности под интересы участников и создавать комфортную атмосферу для общения. Готов участвовать в организации корпоративных мероприятий и досуга для сотрудников."
      ],
      educationTitle: "Образование и курсы",
      education: [
        {
          degree: "Бакалавр, Прикладная информатика (09.03.03)",
          school: "Калининградский государственный технический университет (КГТУ)",
          years: "2022 — 2026"
        },
        {
          degree: "Курсы по маркетингу и ИИ-инструментам",
          school: "Профильное обучение во время учебы и работы",
          years: "2023 — 2025"
        }
      ],
      skillsTitle: "Ключевые навыки",
      skills: [
        "Project Management (Bitrix24, Trello, Agile/Scrum)",
        "R&D & Продуктовая аналитика",
        "Прототипирование (Figma, UX/UI)",
        "GameDev & 3D (Unity, C#, Blender, Blockbench)",
        "Контент-маркетинг & SEO",
        "E-mail маркетинг (Tilda, Analytics)",
        "Внедрение ИИ-инструментов (LLM, Prompting)",
        "Английский язык (B1-B2)"
      ]
    },
    categories: {
      all: "Все проекты",
      pm: "Project Management & R&D",
      gamedev: "GameDev & 3D",
      marketing: "Marketing & Growth"
    },
    projects: [
      {
        id: "process-b24-infra",
        category: "pm",
        title: "Систематизация процессов в Bitrix24 и IT-Инфраструктура",
        period: "2024 — 2026",
        role: "Project Manager / IT Integrator",
        description: "Выстраивание системы управления проектами с нуля: ликвидация хаоса, регламентация хранения данных и внедрение ИИ.",
        achievements: [
          "Ситуация до: задачи велись несистемно, отсутствовала прозрачность и единая база, что ограничивало количество проектов.",
          "Результат: выстроил прозрачную систему контроля задач в Bitrix24 и регламенты облачного хранения, что увеличило количество одновременно ведомых проектов с 1–2 до ~15 в месяц.",
          "Разработал структуру облачных папок с разграничением прав и регулярным резервным копированием.",
          "Проводил регулярные внутренние обучения сотрудников компании по ИИ-инструментам (LLM/промптинг).",
          "Администрировал договор корпоративной связи «Билайн» и поддерживал IT-инфраструктуру."
        ],
        tools: ["Bitrix24", "Cloud Storage", "AI / LLM", "IT Ops"]
      },
      {
        id: "trendbooks",
        category: "pm",
        title: "Разработка аналитических трендбуков",
        period: "2025 — 2026",
        role: "Основной PM и автор аналитики",
        teamSize: "До 15 человек",
        description: "Руководство созданием 3 аналитических трендбуков: сбор информации от экспертов, организация процессов разработки и сдача CEO.",
        achievements: [
          "Сконструировал процесс сборки аналитического материала с участием продуктологов, технологов, дизайнеров и маркетологов.",
          "Настроил контроль сроков выполнения задач и поэтапную сдачу результатов инициатору проекта (CEO).",
          "Регулярно проводил внутренние и внешние онлайн-демонстрации продукта на аудиторию 30–50 человек."
        ],
        tools: ["Bitrix24", "Figma", "Trello", "Презентации"],
        media: [
          { type: 'image', url: '/assets/trendbook-preview.webp', caption: 'Макет трендбука (NDA)', isNdaBlurred: true }
        ]
      },
      {
        id: "kita-rebranding",
        category: "pm",
        title: "Ребрендинг бренда KITA «под ключ»",
        period: "3–4 недели",
        role: "Ведущий Project Manager",
        teamSize: "4–5 человек",
        description: "Полный цикл управления проектом ребрендинга упаковки, логотипа и витрины магазина с прямыми созвонами и защитой перед клиентом.",
        achievements: [
          "Успешно сдал проект за 4 недели в команде с дизайнером, маркетологом и менеджером по продажам.",
          "Клиент патентует разработанные решения и публикует их в официальных медиа."
        ],
        tools: ["Bitrix24", "Figma", "Онлайн-созвоны"],
        media: [
          { type: 'image', url: '/assets/kita-preview.webp', caption: 'Концепт упаковки KITA', isNdaBlurred: true }
        ]
      },
      {
        id: "digital-showcase",
        category: "pm",
        title: "Цифровая витрина Pack-5 & Калькулятор АПМ",
        period: "2024 — 2025",
        role: "PM / Прототипист",
        teamSize: "3–4 человека",
        description: "Управление веб-разработкой цифровой витрины pack-5.ru и прототипирование интерфейсов в Figma.",
        achievements: [
          "Спроектировал интерактивный прототип калькулятора упаковочных решений в Figma.",
          "Курировал работу внешнего веб-разработчика при запуске цифровой витрины pack-5.ru.",
          "Организовал опрос на выставке АПМ: опрошено ~100 человек, 30–40 прошли подробный опрос."
        ],
        tools: ["Figma", "Bitrix24", "WebDev"],
        link: "https://pack-5.ru/",
        media: [
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Перейти на сайт Pack-5' }
        ]
      },
      {
        id: "rd-shelf-life",
        category: "pm",
        title: "R&D Эксперимент по срокам годности (1.5 года)",
        period: "2024 — 2026",
        role: "PM / Координатор исследований",
        teamSize: "3–4 человека",
        description: "Длительное исследование сохранности продукта в инновационной упаковке с лабораторным контролем в другом регионе.",
        achievements: [
          "Разработал ТЗ для ассистента в филиале, графики проверок и систему учета партий.",
          "Организовал 6 лабораторных исследований на протяжении 1.5 лет.",
          "Подтвердил полную сохранность продукта, успешно доказав эффективность упаковочного решения."
        ],
        tools: ["Bitrix24", "Excel/GSheets", "Лабораторные отчеты"]
      },
      {
        id: "gamedev-crystalix-raft",
        category: "gamedev",
        title: "GameDev & Modding: Server Raft (Crystalix) & Content for Creators",
        period: "01.2022 — 08.2024",
        role: "PM / Lead 3D Generalist / Community Manager",
        teamSize: "5 человек",
        description: "Разработка игрового сервера в стиле Raft на платформе Crystalix, создание 3D-контента для топ-ютуберов (Fixeye, Uni, EdisonPts, Demaster) и управление сообществом.",
        achievements: [
          "Создал сотни 3D-моделей (Blockbench, Blender, Photoshop): объекты окружения, сущности и здания для 5 историческо-технологических эпох.",
          "Координировал задачи команды из 5 человек через Trello, участвовал в обсуждениях ТЗ, съёмке процесс-видео и монтаже.",
          "Аудиторные показатели: пиковый онлайн сервера ~300 игроков; видео с созданными моделями набирали по 20 000–31 000 просмотров.",
          "Развивал и модерировал сообщества проекта (VK — 715 участников, Discord — сотни пользователей, Telegram — ~200)."
        ],
        tools: ["Blockbench", "Blender", "Photoshop", "Trello", "Unity (C#)", "Discord", "VK/TG"],
        media: [
          { type: 'image', url: '/assets/gamedev-raft-models.webp', caption: '3D-модели окружения и 5 эпох для Crystalix' }
        ]
      },
      {
        id: "gamedev-unity-projects",
        category: "gamedev",
        title: "R&D Проекты на Unity (RP-Server & Arctic Survival)",
        period: "2023 — 2024",
        role: "Game Designer / 3D Generalist",
        teamSize: "5 человек",
        description: "Разработка собственного RP-сервера и двух самостоятельных игр на Unity (выживание в арктической пустоши и средневековая база).",
        achievements: [
          "Самостоятельно освоил Unity: импорт 3D-моделей, настройка анимаций и логика поведения существ на C#.",
          "Составил подробные ТЗ для механик взаимодействия и логики игрового мира.",
          "Проводил плейтесты, отладку и генерацию идей для выхода за рамки ограничений Minecraft."
        ],
        tools: ["Unity", "C#", "Blender", "Blockbench", "Trello"],
        media: [
          { type: 'image', url: '/assets/unity-arctic-preview.webp', caption: 'Скриншот локации и моделей Arctic Survival' }
        ]
      },
      {
        id: "youtube-video-growth",
        category: "marketing",
        title: "YouTube & Видеомаркетинг (ГК «МП-Технологии»)",
        period: "2024 — 2026",
        role: "Контент-маркетолог / Видеомейкер",
        description: "Подготовка контента, съёмка, монтаж видео и продвижение продукции на видеоплатформах.",
        achievements: [
          "Обеспечил рост просмотров на YouTube с 84 тыс. до 160 тыс. (+99%).",
          "Увеличил время просмотра на 99% (до 410 часов).",
          "Сгенерировал 350–400 тыс. просмотров суммарно за последний год на всех видеоплощадках."
        ],
        tools: ["YouTube", "CapCut", "Photoshop", "Video Production"]
      },
      {
        id: "email-marketing-growth",
        category: "marketing",
        title: "Email-маркетинг & Сегментация баз",
        period: "2024 — 2026",
        role: "Email Marketer",
        description: "Организация регулярных e-mail рассылок, сегментация клиентской базы, проведение опросов и анализ аудитории.",
        achievements: [
          "Увеличил открываемость писем (Open Rate) с менее чем 10% до 15%.",
          "Рост прочтений писем на 50%.",
          "Увеличил число переходов по ссылкам из писем (CTR) почти в 2 раза.",
          "Собирал шаблоны рассылок и структуры в Tilda."
        ],
        tools: ["Email Marketing", "Tilda", "Excel", "Analytics"]
      },
      {
        id: "smm-seo-leadgen",
        category: "marketing",
        title: "SMM, SEO & Выставочная лидогенерация",
        period: "2024 — 2026",
        role: "Контент-маркетолог",
        description: "Развитие официальных соцсетей компании, SEO-копирайтинг и лидогенерация на профильных выставках.",
        achievements: [
          "Сгенерировал ~40 целевых лидов уже на 2-й месяц работы во время выставки.",
          "Вёл официальный Telegram-канал и Instagram компании.",
          "Писал SEO-статьи для медиа-раздела сайта с подбором ключевых слов и мета-описаний."
        ],
        tools: ["Telegram", "Instagram", "SEO", "Copywriting", "Events"]
      }
    ]
  },
  en: {
    hero: {
      title: "Danil Yakovenko — Project Manager & Content Lead",
      subtitle: "Managing complex B2B/B2C digital products, GameDev projects, and content marketing. Building processes from scratch and leading cross-functional teams up to 15 people.",
    },
    about: {
           text: [
        "Content Marketer & Project Manager experienced in B2B and industrial food processing equipment promotion. Specialized in systematizing chaotic workflows, managing R&D research, social media growth, video/article production, email marketing, and market research.",
        "Built task management and cloud storage systems at MP-Technologies, increasing team capacity from 1–2 to ~15 projects per month. Proficient in CapCut, Figma, Photoshop, Blender, Bitrix24, and conducting internal AI tool training for staff.",
        "Passionate about books, board games, Warhammer wargaming, and TTRPGs. Experienced in organizing gaming events from scratch, selecting activities for participant interests, and maintaining a welcoming environment. Ready to help organize corporate events and team leisure activities."
      ],

      educationTitle: "Education & Courses",
      education: [
        {
          degree: "Bachelor's, Applied Informatics (09.03.03)",
          school: "Kaliningrad State Technical University (KSTU)",
          years: "2022 — 2026"
        },
        {
          degree: "Marketing & AI Tools Professional Courses",
          school: "Specialized training during studies & employment",
          years: "2023 — 2025"
        }
      ],
      skillsTitle: "Core Skills",
      skills: [
        "Project Management (Bitrix24, Trello, Agile/Scrum)",
        "R&D & Product Analytics",
        "Prototyping (Figma, UX/UI)",
        "GameDev & 3D (Unity, C#, Blender, Blockbench)",
        "Content Marketing & SEO",
        "E-mail Marketing (Tilda, Analytics)",
        "AI Integration (LLMs, Prompting)",
        "English (B1-B2)"
      ]
    },
    categories: {
      all: "All Projects",
      pm: "Project Management & R&D",
      gamedev: "GameDev & 3D",
      marketing: "Marketing & Growth"
    },
    projects: [
      {
        id: "process-b24-infra",
        category: "pm",
        title: "Bitrix24 Workflows & IT Infrastructure Systematization",
        period: "2024 — 2026",
        role: "Project Manager / IT Integrator",
        description: "Building project management systems from scratch: eliminating chaos, standardizing data storage, and integrating AI.",
        achievements: [
          "Before: Tasks were unorganized, lacking transparency and a single database, limiting throughput.",
          "Impact: Built a transparent task control system in Bitrix24 and cloud storage guidelines, increasing capacity from 1–2 to ~15 projects/month.",
          "Designed cloud folder structures with role-based access control and automated backups.",
          "Conducted regular internal AI training sessions (LLM/prompting) for company staff.",
          "Managed Beeline corporate telecom agreements and maintained office IT infrastructure."
        ],
        tools: ["Bitrix24", "Cloud Storage", "AI / LLM", "IT Ops"]
      },
      {
        id: "trendbooks",
        category: "pm",
        title: "Analytical Trendbooks Development",
        period: "2025 — 2026",
        role: "Lead PM & Analytics Author",
        teamSize: "Up to 15 people",
        description: "Managed the creation of 3 analytical trendbooks: collecting expert data, managing cross-functional workflows, and CEO reporting.",
        achievements: [
          "Structured data collection from product managers, engineers, designers, and sales teams.",
          "Established timeline controls and milestone handoffs to the project initiator (CEO).",
          "Conducted internal and external online product demonstrations for 30–50 attendees."
        ],
        tools: ["Bitrix24", "Figma", "Trello", "Presentations"],
        media: [
          { type: 'image', url: '/assets/trendbook-preview.webp', caption: 'Trendbook layout (NDA)', isNdaBlurred: true }
        ]
      },
      {
        id: "kita-rebranding",
        category: "pm",
        title: "Turnkey KITA Brand Rebranding",
        period: "3–4 weeks",
        role: "Lead Project Manager",
        teamSize: "4–5 people",
        description: "End-to-end management of packaging, logo, and store showcase rebranding with direct client syncs and presentations.",
        achievements: [
          "Delivered the project on time in 4 weeks leading a team with a designer, marketer, and sales manager.",
          "Client is currently patenting the developed assets and actively publishing them."
        ],
        tools: ["Bitrix24", "Figma", "Client Calls"],
        media: [
          { type: 'image', url: '/assets/kita-preview.webp', caption: 'KITA Packaging Concept', isNdaBlurred: true }
        ]
      },
      {
        id: "digital-showcase",
        category: "pm",
        title: "Pack-5 Digital Showcase & Calculator",
        period: "2024 — 2025",
        role: "PM / Prototyper",
        teamSize: "3–4 people",
        description: "Managed web development for pack-5.ru showcase and UI prototyping in Figma.",
        achievements: [
          "Designed an interactive packaging solution calculator prototype in Figma.",
          "Supervised external web developer during pack-5.ru showcase launch.",
          "Organized trade show survey at APM: interviewed ~100 people, 30–40 completed full surveys."
        ],
        tools: ["Figma", "Bitrix24", "WebDev"],
        link: "https://pack-5.ru/",
        media: [
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Visit Pack-5' }
        ]
      },
      {
        id: "rd-shelf-life",
        category: "pm",
        title: "R&D Shelf Life Experiment (1.5 Years)",
        period: "2024 — 2026",
        role: "PM / Research Coordinator",
        teamSize: "3–4 people",
        description: "Long-term product preservation research in innovative packaging with regional lab controls.",
        achievements: [
          "Created technical requirements for regional assistant, inspection schedules, and batch tracking.",
          "Organized 6 laboratory tests over 1.5 years.",
          "Confirmed zero product spoilage, successfully proving packaging efficiency."
        ],
        tools: ["Bitrix24", "Excel/GSheets", "Lab Reports"]
      },
      {
        id: "gamedev-crystalix-raft",
        category: "gamedev",
        title: "GameDev & Modding: Server Raft (Crystalix) & Content for Creators",
        period: "01.2022 — 08.2024",
        role: "PM / Lead 3D Generalist / Community Manager",
        teamSize: "5 people",
        description: "Developed a Raft-style game server on Crystalix, 3D content creation for top YouTubers (Fixeye, Uni, EdisonPts, Demaster), and community management.",
        achievements: [
          "Created hundreds of 3D models (Blockbench, Blender, Photoshop): environment objects, entities, and buildings across 5 historical/tech eras.",
          "Coordinated a 5-person team via Trello, participated in spec discussions, video recording, and editing.",
          "Metrics: ~300 peak server online players; videos featuring created models reached 20,000–31,000 views.",
          "Managed and moderated project communities (VK — 715 members, Discord — hundreds, Telegram — ~200)."
        ],
        tools: ["Blockbench", "Blender", "Photoshop", "Trello", "Unity (C#)", "Discord", "VK/TG"],
        media: [
          { type: 'image', url: '/assets/gamedev-raft-models.webp', caption: '3D environment models and 5 eras for Crystalix' }
        ]
      },
      {
        id: "gamedev-unity-projects",
        category: "gamedev",
        title: "Unity R&D Projects (RP-Server & Arctic Survival)",
        period: "2023 — 2024",
        role: "Game Designer / 3D Generalist",
        teamSize: "5 people",
        description: "Developed a custom RP server and two standalone Unity games (arctic wasteland survival and medieval base).",
        achievements: [
          "Learned Unity independently: 3D model import, animation setup, and C# creature AI logic.",
          "Authored detailed technical specs for interaction mechanics and game world logic.",
          "Conducted playtests, debugging, and ideation to transcend Minecraft engine limitations."
        ],
        tools: ["Unity", "C#", "Blender", "Blockbench", "Trello"],
        media: [
          { type: 'image', url: '/assets/unity-arctic-preview.webp', caption: 'Arctic Survival location & models screenshot' }
        ]
      },
      {
        id: "youtube-video-growth",
        category: "marketing",
        title: "YouTube & Video Marketing (MP-Technologies)",
        period: "2024 — 2026",
        role: "Content Marketer / Video Producer",
        description: "Content preparation, filming, video editing, and product promotion across video platforms.",
        achievements: [
          "Grew YouTube views from 84k to 160k (+99%).",
          "Increased watch time by 99% (up to 410 hours).",
          "Generated 350k–400k total views over the past year across video platforms."
        ],
        tools: ["YouTube", "CapCut", "Photoshop", "Video Production"]
      },
      {
        id: "email-marketing-growth",
        category: "marketing",
        title: "Email Marketing & List Segmentation",
        period: "2024 — 2026",
        role: "Email Marketer",
        description: "Managed regular email campaigns, client list segmentation, surveys, and audience analysis.",
        achievements: [
          "Increased email Open Rate from under 10% to 15%.",
          "Boosted email reads by 50%.",
          "Nearly doubled click-through rate (CTR).",
          "Built newsletter templates and structures in Tilda."
        ],
        tools: ["Email Marketing", "Tilda", "Excel", "Analytics"]
      },
      {
        id: "smm-seo-leadgen",
        category: "marketing",
        title: "SMM, SEO & Trade Show Lead Generation",
        period: "2024 — 2026",
        role: "Content Marketer",
        description: "Managed official social channels, SEO copywriting, and lead generation at trade shows.",
        achievements: [
          "Generated ~40 qualified leads in the 2nd month of work at a major trade show.",
          "Managed official company Telegram channel and Instagram.",
          "Wrote SEO articles for website media section with keyword selection and meta descriptions."
        ],
        tools: ["Telegram", "Instagram", "SEO", "Copywriting", "Events"]
      }
    ]
  }
};
