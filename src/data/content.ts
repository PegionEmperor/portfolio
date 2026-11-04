export type Role = 'pm' | 'marketer';
export type Lang = 'ru' | 'en';

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
  isNda?: boolean;
}

export const PORTFOLIO_DATA = {
  ru: {
    pm: {
      hero: {
        title: "Данил Яковенко — Project Manager (GameDev & Tech)",
        subtitle: "Управление комплексными продуктами, командами до 15 человек и B2B/B2C цифровыми решениями.",
      },
      projects: [
        {
          id: "trendbooks",
          title: "Разработка трендбуков и аналитических решений",
          period: "2025 — 2026",
          role: "Основной PM и автор аналитики",
          teamSize: "До 15 человек",
          description: "Сборка аналитики, координация межфункциональной команды (дизайн, разработка, продуктологи, продажи), контроль сроков и сдача CEO.",
          achievements: [
            "Успешно выпущены 3 трендбука в жестких временных рамках.",
            "Настроена сквозная коммуникация и процесс приёмки материалов экспертов."
          ],
          tools: ["Bitrix24", "Figma", "Trello"]
        },
        {
          id: "kita-rebranding",
          title: "Ребрендинг бренда KITA",
          period: "3–4 недели",
          role: "Ведущий Project Manager",
          teamSize: "4–5 человек",
          description: "Управление проектом ребрендинга «под ключ»: от первички и созвонов до упаковки, логотипа и витрины.",
          achievements: [
            "Полный запуск за 4 недели.",
            "Клиент патентует результаты и активно публикует материалы."
          ],
          tools: ["Bitrix24", "Figma", "Презентации"]
        },
        {
          id: "gamedev-minecraft",
          title: "GameDev & Modding (Minecraft / Unity)",
          period: "2022 — 2024",
          role: "PM / 3D Generalist / Community Manager",
          teamSize: "5 человек",
          description: "Партнёрство с Crystalix, разработка моделей, механик, ТЗ на серверах и в играх на Unity.",
          achievements: [
            "Управление сообществом до нескольких сотен человек.",
            "Создание моделей и 3D-окружения для проектов с просмотрами до 31 тыс."
          ],
          tools: ["Unity", "Blender", "Blockbench", "Trello", "Photoshop"]
        },
        {
          id: "digital-showcase",
          title: "Цифровая витрина Pack-5 & Калькулятор",
          period: "2024 — 2025",
          role: "PM / Прототипист",
          description: "Ведение веб-разработчика, проектирование прототипов в Figma для сервисного приложения и калькулятора.",
          achievements: [
            "Запуск цифровой витрины pack-5.ru.",
            "Проведение опроса ~100 респондентов на выставке АПМ."
          ],
          tools: ["Figma", "Bitrix24", "WebDev"],
          link: "https://pack-5.ru/"
        }
      ]
    },
    marketer: {
      hero: {
        title: "Данил Яковенко — Контент-маркетолог & Growth",
        subtitle: "Контент-стратегии, SEO, e-mail маркетинг и ИИ-инструменты для бизнеса.",
      },
      projects: [
        {
          id: "mp-marketing",
          title: "Контент-маркетинг ГК «МП-Технологии»",
          period: "2024 — 2026",
          role: "Маркетолог / Спец. по ИИ",
          description: "Развитие медиа-ресурсов компании, написание SEO-статей, сборка email-рассылок и внедрение ИИ.",
          achievements: [
            "Привёл ~40 лидов на 2-й месяц работы на выставке.",
            "Проводил обучение сотрудников ИИ-инструментам."
          ],
          tools: ["Telegram", "SEO", "Tilda", "AI Tools"]
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