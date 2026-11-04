export type Role = 'pm' | 'marketer';
export type Lang = 'ru' | 'en';

export interface ProjectMedia {
  type: 'image' | 'video' | 'link';
  url: string;
  caption?: string;
  isNdaBlurred?: boolean;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  teamSize?: string;
  description: string;
  achievements: string[];
  tools: string[];
  link?: string;
  media?: ProjectMedia[];
  fullCase?: {
    problem: string;
    solution: string;
    impact: string;
  };
}

export interface ContentSection {
  hero: {
    title: string;
    subtitle: string;
  };
  projects: Project[];
}

export const PORTFOLIO_DATA: Record<Lang, Record<Role, ContentSection>> = {
  ru: {
    pm: {
      hero: {
        title: "Данил Яковенко — Project Manager (GameDev & Tech)",
        subtitle: "Управление комплексными продуктами, командами до 15 человек и B2B/B2C цифровыми решениями. Опыт в GameDev, IT-инфраструктуре и R&D.",
      },
      projects: [
        {
          id: "trendbooks",
          title: "Разработка аналитических трендбуков",
          period: "2025 — 2026",
          role: "Основной PM и автор аналитики",
          teamSize: "До 15 человек (в пике)",
          description: "Руководство циклом создания 3 трендбуков: сбор аналитики, координация межфункциональной команды и сдача CEO.",
          achievements: [
            "Организовал сбор экспертных материалов от технологов, продуктологов, маркетологов и отдела продаж.",
            "Настроил сквозной контроль сроков, передачу материалов в дизайн и поэтапную сдачу CEO и директору по маркетингу.",
            "Проводил онлайн-демонстрации первых версий для аудитории 30–50 человек."
          ],
          tools: ["Bitrix24", "Figma", "Trello", "Презентации"],
          media: [
            { type: 'image', url: '/assets/trendbook-preview.webp', caption: 'Превью страницы трендбука', isNdaBlurred: true }
          ]
        },
        {
          id: "kita-rebranding",
          title: "Ребрендинг бренда KITA «под ключ»",
          period: "3–4 недели",
          role: "Ведущий Project Manager",
          teamSize: "4–5 человек",
          description: "Полный цикл управления проектом ребрендинга: от созвонов и ТЗ до упаковки, логотипа и витрины.",
          achievements: [
            "Реализовал проект точно в срок за 4 недели в команде с дизайнером, маркетологом и менеджером по продажам.",
            "Клиент успешно патентует результаты разработки и публикует их в соцсетях."
          ],
          tools: ["Bitrix24", "Figma", "Онлайн-созвоны"],
          media: [
            { type: 'image', url: '/assets/kita-preview.webp', caption: 'Концепт логотипа и упаковки KITA', isNdaBlurred: true }
          ]
        },
        {
          id: "digital-showcase",
          title: "Цифровая витрина Pack-5 & Калькулятор АПМ",
          period: "2024 — 2025",
          role: "PM / Прототипист",
          teamSize: "3–4 человека",
          description: "Управление веб-разработкой цифровой витрины pack-5.ru и прототипирование сервисного приложения.",
          achievements: [
            "Спроектировал в Figma прототип калькулятора упаковочных решений.",
            "Организовал опрос на выставке АПМ: очно проинтервьюировано ~100 человек, 30–40 прошли анкетирование.",
            "Обеспечил релиз витрины совместно со сторонним веб-разработчиком."
          ],
          tools: ["Figma", "Bitrix24", "WebDev"],
          link: "https://pack-5.ru/",
          media: [
            { type: 'link', url: 'https://pack-5.ru/', caption: 'Перейти на сайт Pack-5' }
          ]
        },
        {
          id: "rd-shelf-life",
          title: "R&D Эксперимент по срокам годности",
          period: "1.5 года",
          role: "PM / Координатор исследований",
          teamSize: "3–4 человека",
          description: "Длительное исследование сохранности продукта в инновационной упаковке с лабораторным контролем.",
          achievements: [
            "Параллельно координировал 2 эксперимента (в термостате и на полках).",
            "Организовал 6 лабораторных проверок на протяжении всего цикла.",
            "Подтвердил нулевые следы порчи продукта, доказав эффективность упаковки."
          ],
          tools: ["Bitrix24", "Excel/GSheets", "Лабораторные отчеты"]
        },
        {
          id: "gamedev-minecraft",
          title: "GameDev & Modding (Minecraft / Unity)",
          period: "2022 — 2024",
          role: "PM / 3D Generalist / Community Manager",
          teamSize: "5 человек",
          description: "Разработка игровых серверов (в партнерстве с Crystalix), 3D-моделей, механик и ТЗ для Unity-проектов.",
          achievements: [
            "Руководил командой из 5 человек (3D, текстуры, анимации) с таск-трекингом в Trello.",
            "Спроектировал сервер в духе Raft с моделями окружения для 5 эпох.",
            "Управлял Discord/VK/TG сообществом до нескольких сотен игроков."
          ],
          tools: ["Unity", "Blender", "Blockbench", "Trello", "Photoshop", "Discord"],
          media: [
            { type: 'image', url: '/assets/gamedev-preview.webp', caption: '3D-модели и локации' }
          ]
        },
        {
          id: "it-infrastructure",
          title: "Оптимизация B24, IT-инфраструктуры и ИИ",
          period: "2024 — 2026",
          role: "Project Manager / IT Integrator",
          description: "Систематизация рабочих процессов компании, настройка хранения данных и проведение ИИ-обучений.",
          achievements: [
            "Перевёл рабочие процессы команды в Bitrix24, спроектировал структуру облачных папок с бэкапами и разграничением прав.",
            "Проводил внутренние обучающие сессии по работе с ИИ-инструментами (LLM/промптинг) для коллег.",
            "Администрировал корпоративную связь, сим-карты и настройку техники."
          ],
          tools: ["Bitrix24", "Cloud Storage", "AI / LLM", "IT Ops"]
        }
      ]
    },
    marketer: {
      hero: {
        title: "Данил Яковенко — Контент-маркетолог & Growth",
        subtitle: "Контент-стратегии, SEO, e-mail маркетинг, лидогенерация и ИИ-инструменты для бизнеса.",
      },
      projects: [
        {
          id: "mp-marketing",
          title: "Контент-маркетинг & Лидогенерация ГК «МП-Технологии»",
          period: "2024 — 2026",
          role: "Маркетолог / Спец. по ИИ",
          description: "Развитие корпоративных медиа-каналов, SEO-продвижение, верстка e-mail рассылок и лидогенерация.",
          achievements: [
            "Сгенерировал ~40 лидов на 2-й месяц работы во время профильной выставки.",
            "Вёл корпоративный Telegram-канал и Instagram.",
            "Писал SEO-статьи с подбором ключевых слов и мета-тегов, верстал рассылки в Tilda."
          ],
          tools: ["Telegram", "Instagram", "SEO", "Tilda", "AI Tools"]
        }
      ]
    }
  },
  en: {
    pm: {
      hero: {
        title: "Danil Yakovenko — Project Manager (GameDev & Tech)",
        subtitle: "Managing complex products, cross-functional teams up to 15 people, and B2B/B2C digital solutions.",
      },
      projects: []
    },
    marketer: {
      hero: {
        title: "Danil Yakovenko — Content Marketer & Product Growth",
        subtitle: "Content strategies, SEO, email marketing, and AI integration for business growth.",
      },
      projects: []
    }
  }
};