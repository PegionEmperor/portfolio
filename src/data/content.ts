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
        subtitle: "Управление продуктами, R&D исследованиями и B2B цифровыми решениями. Опыт руководства кросс-функциональными командами до 15 человек.",
      },
      projects: [
        {
          id: "trendbooks",
          title: "Разработка аналитических трендбуков",
          period: "2025 — 2026",
          role: "Основной PM и автор аналитики",
          teamSize: "До 15 человек (в пике)",
          description: "Руководство созданием 3 аналитических трендбуков: сбор информации от экспертов, организация процессов разработки и сдача CEO.",
          achievements: [
            "Сконструировал процесс сборки аналитического материала с участием продуктологов, технологов, дизайнеров и маркетологов.",
            "Настроил контроль сроков выполнения задач и поэтапную сдачу результатов инициатору проекта (CEO).",
            "Регулярно проводил внутренние и внешние онлайн-демонстрации продукта на аудиторию 30–50 человек."
          ],
          tools: ["Bitrix24", "Figma", "Trello", "Презентации"],
          media: [
            { type: 'image', url: '/assets/trendbook-preview.webp', caption: 'Макет трендбука (чувствительные данные заблюрены)', isNdaBlurred: true }
          ]
        },
        {
          id: "kita-rebranding",
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
            { type: 'image', url: '/assets/kita-preview.webp', caption: 'Концепт упаковки и логотипа KITA', isNdaBlurred: true }
          ]
        },
        {
          id: "digital-showcase",
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
          title: "GameDev & Modding: Server Raft (Crystalix) & Content for Creators",
          period: "01.2022 — 08.2024 (2г 8м)",
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
          id: "process-b24-infra",
          title: "Систематизация процессов в Bitrix24 и IT-Инфраструктура",
          period: "2024 — 2026",
          role: "Project Manager / IT Integrator",
          description: "Устранение хаоса в ведении задач, переход на Bitrix24, организация файлового хранилища и внедрение ИИ.",
          achievements: [
            "Выстроил прозрачную систему контроля задач в Bitrix24, что позволило команде вести до ~15 проектов в месяц.",
            "Разработал структуру облачных папок с правами доступа и системой резервного копирования.",
            "Проводил внутреннее обучение сотрудников компании работе с ИИ-инструментами (LLM / промптинг).",
            "Администрировал договор корпоративной связи с «Билайн», решал технические вопросы по настройке рабочех мест."
          ],
          tools: ["Bitrix24", "Cloud Storage", "AI / LLM", "IT Ops"]
        }
      ]
    },
    marketer: {
      hero: {
        title: "Данил Яковенко — Контент-маркетолог & Growth",
        subtitle: "Контент-стратегии, SEO, e-mail маркетинг, лидогенерация и ИИ-инструменты для B2B бизнеса.",
      },
      projects: [
        {
          id: "mp-marketing-leadgen",
          title: "Контент-маркетинг & Лидогенерация (ГК «МП-Технологии»)",
          period: "2024 — 2026",
          role: "Контент-маркетолог / Спец. по ИИ",
          description: "Комплексное ведение корпоративных медиа-каналов, SEO-оптимизация статей, e-mail рассылки и работа на выставках.",
          achievements: [
            "Сгенерировал ~40 целевых лидов на профильной выставке на 2-й месяц работы.",
            "Вёл официальный Telegram-канал и Instagram компании.",
            "Готовил SEO-статьи с подбором ключевых слов, сборку email-рассылок в Tilda и проводил обучение ИИ-инструментам для коллег."
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
        subtitle: "Managing products, R&D research, and B2B digital solutions. Experience leading cross-functional teams up to 15 people.",
      },
      projects: []
    },
    marketer: {
      hero: {
        title: "Danil Yakovenko — Content Marketer & Product Growth",
        subtitle: "Content strategies, SEO, email marketing, lead generation, and AI tools for business.",
      },
      projects: []
    }
  }
};