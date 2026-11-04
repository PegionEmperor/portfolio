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
  categories: Record<Category, string>;
  projects: Project[];
}

export const PORTFOLIO_DATA: Record<Lang, ContentSection> = {
  ru: {
    hero: {
      title: "Данил Яковенко — Project Manager & Content Lead",
      subtitle: "Управление комплексными B2B/B2C цифровыми продуктами, GameDev-проектами и контент-маркетингом. Опыт руководства кросс-функциональными командами до 15 человек.",
    },
    categories: {
      all: "Все проекты",
      pm: "Project Management & R&D",
      gamedev: "GameDev & 3D",
      marketing: "Marketing & Growth"
    },
    projects: [
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
        id: "process-b24-infra",
        category: "pm",
        title: "Систематизация процессов в Bitrix24 и IT-Инфраструктура",
        period: "2024 — 2026",
        role: "Project Manager / IT Integrator",
        description: "Устранение хаоса в ведении задач, переход на Bitrix24, организация файлового хранилища и внедрение ИИ.",
        achievements: [
          "Выстроил прозрачную систему контроля задач в Bitrix24, что позволило команде вести до ~15 проектов в месяц.",
          "Разработал структуру облачных папок с правами доступа и системой резервного копирования.",
          "Проводил внутреннее обучение сотрудников компании работе с ИИ-инструментами (LLM / промптинг).",
          "Администрировал договор корпоративной связи с «Билайн», решал технические вопросы по настройке рабочих мест."
        ],
        tools: ["Bitrix24", "Cloud Storage", "AI / LLM", "IT Ops"]
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
      subtitle: "Managing complex B2B/B2C digital products, GameDev projects, and content marketing. Leading cross-functional teams up to 15 people.",
    },
    categories: {
      all: "All Projects",
      pm: "Project Management & R&D",
      gamedev: "GameDev & 3D",
      marketing: "Marketing & Growth"
    },
    projects: []
  }
};
