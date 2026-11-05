export type Lang = 'ru' | 'en';
export type ProjectCategory = 'pm' | 'marketing' | 'gamedev';

export type ProjectMedia =
  | {
      type: 'image';
      url: string;
      caption?: string;
    }
  | {
      type: 'video';
      url: string;
      caption?: string;
      poster?: string;
    }
  | {
      type: 'link';
      url: string;
      caption?: string;
    };
export interface ProjectPublication {
  title: string;
  cover: string;
  url?: string;
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
  detailsTitle?: string;
  description: string;
  result: string;
  achievements: string[];
  tools: string[];
  media?: ProjectMedia[];
    publications?: ProjectPublication[];
}

export interface ContentSection {
  nav: { cases: string; otherProjects: string; about: string; contact: string };
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
    nav: { cases: 'Ключевые кейсы', otherProjects: 'Другие ключевые проекты', about: 'Обо мне', contact: 'Контакты' },
    hero: {
      title: 'Project Manager / Operations Manager',
      subtitle:
        'Организую проектную и операционную работу: от описания процессов и планирования до координации команды, контроля исполнения и сдачи результата. Опыт в B2B-оборудовании, сервисных продуктах и кросс-функциональных проектах.',
      cta: 'Написать в Telegram',
      resumeLabel: 'Резюме (PDF)',
      stats: [
        { value: '4–5', label: 'проектов одновременно в работе' },
        { value: 'до 15', label: 'участников кросс-функциональной команды' },
        { value: '1,5 года', label: 'R&D-исследование за 1,5 года и 6 проверок продукта' },
      ],
    },
    ui: {
      casesTitle: 'Ключевые кейсы',
      casesCountLabel: 'избранных проекта',
      moreTitle: 'Другие проекты и направления',
      showProjectsLabel: 'Показать остальные проекты',
      hideProjectsLabel: 'Свернуть проекты',
      resultLabel: 'Эффект для проекта',
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
        'Внутреннее обучение коллег работе с ИИ-инструментами и составлению эффективных запросов',
        'Применение ИИ-инструментов при проектировании и разработке этого сайта-портфолио',
      ],
    },
    about: {
      title: 'Обо мне',
      text: [
        'Опыт работы в ГК «МП-Технологии»: август 2024 — ноябрь 2026. С начала 2025 года — расширение зоны ответственности на контент-маркетинг, аналитические продукты, R&D и координацию внутренних процессов.',
        'Профессиональный фокус — управление проектами в сфере B2B-оборудования и упаковки: сбор требований, координация экспертов и исполнителей, планирование этапов, контроль сроков и согласований, подготовка итоговых материалов. Одновременная работа с 4–5 проектами; кросс-функциональные команды — до 15 участников.',
        'Операционное направление — административная и техническая поддержка главного офиса в Калининграде. Администрирование Bitrix24, Яндекс Диска и Яндекс Почты; создание учётных записей, настройка прав доступа, резервное копирование данных, сопровождение рабочих мест, офисной техники, локальной сети и корпоративной связи.',
        'Вне работы — художественная литература и коллекционирование книг, стратегические настольные игры, варгеймы и НРИ. Организация турниров на 8–10 участников и игровых выходных в торговом центре от лица HobbyGames: поток посетителей — 60–120 человек за шесть часов. Самостоятельное проведение игровых встреч для групп от 2 до 10 человек и работа в составе команды; ведение регулярной кампании D&D в течение шести месяцев; организация масштабных НРИ-игр.'
      ],
      educationTitle: 'Образование',
      education: [
        { degree: 'Прикладная информатика в экономике (09.03.03)', school: 'Калининградский государственный технический университет (КГТУ)', years: '2022 — 2026' },
        { degree: 'Техник по информационным системам', school: 'Калининградский морской рыбопромышленный колледж (КМРК)', years: '2018 — 2022' },
      ],
      skillsTitle: 'Ключевые навыки',
      skills: [
        'Project Management: постановка задач, планирование, координация и контроль сроков',
        'Operations Management и сопровождение офисной инфраструктуры',
        'Bitrix24: администрирование, сопровождение воронок и обучение сотрудников',
        'Картирование бизнес-процессов и сценариев в Draw.io',
        'Яндекс Диск и Яндекс Почта: учётные записи, доступы и резервное копирование',
        'Сбор требований, подготовка ТЗ и согласование результатов',
        'Координация R&D и продуктовая аналитика',
        'Прототипирование интерфейсов в Figma; 3D-визуализация в Blender',
        'ИИ-инструменты, LLM, Prompting и внутреннее обучение',
        'Английский язык (B1–B2)',
      ],
    },
    contacts: {
      name: 'Данил Яковенко',
      location: 'Калининград / Удалённо',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@gmail.com',
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
          'Управление разработкой трёх аналитических трендбуков: авторство аналитической части, сбор экспертных материалов, координация команды, сборка презентаций и поэтапная передача готовых разделов CEO.',
        result:
          'Три готовых аналитических трендбука; внутренняя презентация каждого выпуска для 30–50 участников и демонстрации ранних версий внешней аудитории.',
        achievements: [
          'Авторство основной аналитической части; сборка единой презентации и передача материалов дизайнерам.',
          'Сбор экспертных материалов и обратной связи от технологов, продуктологов, маркетинга и отдела продаж.',
          'Согласование материалов с директором по маркетингу, контроль сроков и поэтапная сдача результатов CEO.',
        ],
        tools: ['Bitrix24', 'Figma', 'Презентации', 'Экспертные интервью'],
                publications: [
          {
            title: 'TREND BOOK #1 — «Мясные снеки»',
            cover: '/assets/projects/trendbooks/Trendbook1.png',
            url: 'https://mp-tek.ru/media/analiz-rynka-i-prognozirovanie-trendov-pishchevoy-promyshlennosti.html',
          },
          {
            title: 'TREND BOOK #2 — «Новый формат прикассового снека»',
            cover: '/assets/projects/trendbooks/Trendbook2.png',
            url: 'https://pack-5.ru/products/sosiska_na_teploi_polke/',
          },
          {
            title: 'TREND BOOK #3',
            cover: '/assets/projects/trendbooks/Trendbook3.png',
          },
        ],
      },
      {
        id: 'service-app',
        category: 'pm',
        featured: true,
        title: 'Сервисное приложение: рабочий прототип АИС',
        period: 'Дипломный проект · АПМ 2025',
        role: 'Автор и разработчик рабочего прототипа',
        detailsTitle: 'Реализованные функции по ролям',
        description:
          'Разработка рабочего прототипа информационной системы сервисного обслуживания в рамках дипломного проекта; дистанционное участие в демонстрации решения на выставке АПМ 2025.',
        result:
          'Единый рабочий прототип с функциональными сценариями пяти ролей: клиента, сервисного инженера, сервисного менеджера, руководителя и администратора.',
        achievements: [
          'Клиент: регистрация, добавление оборудования, создание и отслеживание заявок, комментарии, история обслуживания, календарь ТО, доступ к документации и заказ запасных частей.',
          'Сервисный инженер: просмотр назначенных заявок, смена статусов, внесение записей о выполненных работах и использованных запчастях, завершение заявки ответственным инженером и просмотр графика работ.',
          'Сервисный менеджер: приём и назначение заявок, ведение оборудования клиентов, подтверждение и выдача заказов запчастей, учёт склада, ведение каталогов моделей, документов и запчастей.',
          'Руководитель: дашборд показателей, настройка нормативов SLA и ставок трудозатрат, отчёты, а также права менеджера по заявкам и заказам запасных частей.',
          'Администратор: создание и блокировка пользователей, оформление увольнения, сброс паролей, назначение ролей и ведение каталога.',
        ],
        tools: ['Сервисные процессы', 'Проектирование ролей', 'Рабочий прототип'],
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
          'Полный цикл управления ребрендингом — от первого брифа до итоговой презентации клиенту: координация разработки логотипа, упаковки и оформления торговой точки, прямая коммуникация с заказчиком.',
        result:
          'Комплекс материалов по логотипу, упаковке и оформлению торговой точки подготовлен за 3–4 недели; клиент использует разработки в публикациях Instagram и занимается их патентованием.',
        achievements: [
          'Полный цикл PM: планирование задач, координация участников и контроль сроков на всех этапах проекта.',
          'Коммуникация с клиентом, согласование промежуточных решений, подготовка и проведение финальной презентации.',
        ],
        tools: ['Bitrix24', 'Figma', 'Клиентские встречи', 'Презентации'],
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
          'Координация двух параллельных экспериментов по оценке сохранности продукта: испытания в термостате и хранение на полках в упаковке компании.',
        result:
          'Шесть контрольных проверок продукта за 1,5 года. В ходе полочного эксперимента лаборатория не выявила признаков порчи; результат подтвердил данные предыдущего этапа.',
        achievements: [
          'Планирование и координация шести проверок продукта на протяжении эксперимента.',
          'Подготовка технического задания для ассистента в филиале, графика проверок и системы учёта партий.',
          'Координация передачи образцов и получения результатов лабораторных проверок.',
        ],
        tools: ['Bitrix24', 'Excel', 'Google Sheets', 'Лабораторные отчёты'],
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
          'Координация создания цифровой витрины PACK-5 на pack-5.ru: взаимодействие с внешним веб-разработчиком, формирование требований и прототипирование интерфейсных решений в Figma.',
        result:
          'Запуск цифровой витрины PACK-5; прототип калькулятора упаковочных решений в Figma; сбор обратной связи на АПМ — 30–40 заполненных подробных анкет.',
        achievements: [
          'Проектирование интерактивного прототипа калькулятора упаковочных решений в Figma.',
          'Координация внешнего веб-разработчика и подготовка материалов для цифровой витрины.',
          'Организация сбора и структурирование обратной связи посетителей выставки.',
        ],
        tools: ['Figma', 'Bitrix24', 'Требования к веб-разработке', 'Опросы'],
        media: [
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Открыть сайт PACK-5' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Корпоративные операции и IT-поддержка',
        period: '2024 — 2026',
        role: 'Project Operations / IT Support',
        description:
          'Административная и техническая поддержка главного офиса в Калининграде: сопровождение корпоративных сервисов, рабочих мест, офисной техники и локальной сети.',
        result:
          'Оперативное устранение технических инцидентов и восстановление работоспособности рабочих мест и корпоративных сервисов.',
        achievements: [
          'Администрирование Яндекс Диска и Яндекс Почты: создание учётных записей, настройка прав доступа, резервное копирование данных, контроль поступления и распределения входящей корреспонденции.',
          'Сопровождение корпоративной мобильной связи: оформление договоров, актов и запросов; заказ и регистрация SIM-карт; взаимодействие с менеджером Билайн и бухгалтерией.',
          'Полное сопровождение компьютеров, ноутбуков, принтеров и офисной сети: настройка рабочих мест, установка программного обеспечения, предоставление доступов, диагностика и устранение неисправностей.',
          'Подбор офисной техники, обоснование закупок и защита бюджета.',
        ],
        tools: ['Bitrix24', 'Яндекс Диск', 'Яндекс Почта', 'Билайн', 'Windows', 'IT Support'],
      },
      {
        id: 'bitrix24-sales-funnels',
        category: 'pm',
        title: 'Проектирование воронок продаж в Bitrix24',
        period: 'Внутренний проект',
        role: 'Участник проектирования процессов / администратор Bitrix24',
        description:
          'Проектирование в Draw.io сценариев сделки от продажи оборудования до производства с учётом разных вариантов заводов и последовательности действий. Согласованная логика служит основой двух автоматизированных воронок Bitrix24; техническая настройка — зона ответственности внешнего специалиста.',
        result:
          'Две автоматизированные воронки «Продажа → Производство»: на каждом этапе обозначены ответственный сотрудник и следующее действие; логика процессов согласована с CEO.',
        achievements: [
          'Моделирование сценариев прохождения сделки и последовательности действий в Draw.io.',
          'Подготовка и передача согласованной логики внешнему специалисту для настройки автоматизаций в Bitrix24.',
          'Совместное с коллегой администрирование готовых воронок и обучение новых сотрудников работе с ними и Bitrix24.',
        ],
        tools: ['Draw.io', 'Bitrix24', 'Обучение сотрудников'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube и видеомаркетинг',
        period: '2025 — 2026',
        role: 'Контент-маркетолог / Видеомейкер',
        description:
          'Подготовка видеоконтента о продукции компании: организация съёмок, монтаж и публикация материалов на видеоплатформах.',
        result:
          '350–400 тыс. просмотров на видеоплатформах за год; рост времени просмотра YouTube на 99% — до 410 часов.',
        achievements: [
          'Рост времени просмотра YouTube на 99% — до 410 часов.',
          'Производство и адаптация видеоконтента для YouTube и других площадок компании.',
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
          'Email-маркетинг: планирование регулярных рассылок, сегментация клиентской базы, проведение опросов и анализ реакции аудитории.',
        result:
          'Рост Open Rate относительно исходного уровня ниже 10%; количество прочтений увеличилось на 50%; число переходов по ссылкам также выросло.',
        achievements: [
          'Сегментация клиентской базы и настройка регулярных email-коммуникаций.',
          'Разработка структуры и шаблонов рассылок в Tilda.',
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
          'Ведение корпоративных социальных сетей, подготовка SEO-материалов для сайта и участие в выставочной лидогенерации.',
        result: 'Целевые обращения с профильной выставки уже во второй месяц работы; развитие корпоративных каналов и SEO-контента.',
        achievements: [
          'Ведение Telegram-канала и Instagram компании.',
          'Подготовка SEO-статей, подбор ключевых запросов и метаописаний.',
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
          'Разработка игрового сервера на платформе Crystalix, создание 3D-контента для авторов YouTube и координация команды.',
        result: 'Видео с созданными 3D-моделями — 20–31 тыс. просмотров; сообщество проекта во VK — 715 участников.',
        achievements: [
          'Создание сотен 3D-моделей в Blockbench и Blender: объекты, окружение и контент для пяти игровых эпох.',
          'Координация команды из пяти человек и развитие сообществ проекта в VK, Discord и Telegram.',
        ],
        tools: ['Blender', 'Blockbench', 'Photoshop', 'Unity (C#)', 'Trello', 'Discord', 'VK / Telegram'],
      },
      {
        id: 'industrial-3d-lines',
        category: 'gamedev',
        title: 'Промышленная 3D-визуализация производственных линий',
        period: 'В период работы в МП-Технологии',
        role: '3D-моделирование и визуализация',
        description:
          '3D-визуализация производственных линий в Blender: самостоятельное моделирование единиц оборудования по чертежам и фотографиям, сверка моделей с реальным оборудованием и сборка линий разных масштабов и конфигураций.',
        result:
          'Компоновки производственных линий разных масштабов и конфигураций на основе самостоятельно смоделированных единиц оборудования.',
        achievements: [
          'Самостоятельное моделирование оборудования на основе чертежей, фотографий и визуального изучения реальных образцов.',
          'Сборка отдельных моделей в компоновки производственных линий.',
          'Подготовка вариантов компоновки с разными масштабами и конфигурациями.',
        ],
        tools: ['Blender', '3D-моделирование', 'Промышленная визуализация'],
      },
    ],
  },
  en: {
    nav: { cases: 'Key Cases', otherProjects: 'Other Key Projects', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Project Manager / Operations Manager',
      subtitle:
        'I organize project and operational work — from process mapping and planning to team coordination, execution control, and delivery. My experience includes B2B equipment, service products, and cross-functional projects.',
      cta: 'Message on Telegram',
      resumeLabel: 'Resume (Russian PDF)',
      stats: [
        { value: '4–5', label: 'projects handled in parallel' },
        { value: 'up to 15', label: 'members in a cross-functional team' },
        { value: '1.5 years', label: '1.5-year R&D study with 6 product checks' },
      ],
    },
    ui: {
      casesTitle: 'Selected Case Studies',
      casesCountLabel: 'featured cases',
      moreTitle: 'Additional Projects & Experience',
      showProjectsLabel: 'Show additional projects',
      hideProjectsLabel: 'Hide projects',
      resultLabel: 'Project impact',
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
        'Internal training for colleagues on AI tools and effective prompt writing',
        'Use of AI tools in designing and building this portfolio website',
      ],
    },
    about: {
      title: 'About Me',
      text: [
        'Professional experience at MP-Technologies Group: August 2024 — November 2026. Since early 2025, the role has also covered content marketing, analytical products, R&D, and internal operations.',
        'Project management in B2B equipment and packaging: requirements gathering, expert and contributor coordination, stage planning, timeline and approval control, and preparation of final deliverables. Parallel workload: 4–5 projects; cross-functional teams: up to 15 people.',
        'Operational scope: administrative and technical support for the Kaliningrad head office. Administration of Bitrix24, Yandex Disk, and Yandex Mail; user account creation, access permissions, data backups, workstation support, office equipment, local network, and corporate telecom.',
        'Outside work: fiction and book collecting, strategy board games, wargames, and tabletop role-playing games. Event organization includes tournaments for 8–10 players and HobbyGames gaming weekends at a shopping centre, with visitor flow of 60–120 people over six hours. Hosting sessions for groups of 2–10, independently and as part of a team; running a regular D&D campaign for six months; organizing large-scale tabletop role-playing events.'
      ],
      educationTitle: 'Education',
      education: [
        { degree: "Bachelor's Degree, Applied Informatics in Economics (09.03.03)", school: 'Kaliningrad State Technical University (KSTU)', years: '2022 — 2026' },
        { degree: 'Information Systems Technician', school: 'Kaliningrad Marine Fisheries College (KMRC)', years: '2018 — 2022' },
      ],
      skillsTitle: 'Core Skills',
      skills: [
        'Project management: task definition, planning, coordination, and timeline control',
        'Operations management and office IT support',
        'Bitrix24 administration, sales funnels, and employee onboarding',
        'Business process mapping in Draw.io',
        'Yandex Disk and Yandex Mail administration',
        'Requirements gathering, technical briefs, and approvals',
        'R&D coordination and product analytics',
        'Figma prototyping and Blender 3D visualization',
        'AI tools, LLMs, prompting, and internal training',
        'English (B1–B2)',
      ],
    },
    contacts: {
      name: 'Danil Yakovenko',
      location: 'Kaliningrad / Remote',
      telegram: 'DanilWorkProfile',
      email: 'vip.danl.yakovenko@gmail.com',
      resumeUrl: '/resume-ru.pdf',
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
          'Management of three analytical trendbooks: authorship of the analytical content, expert input collection, team coordination, presentation assembly, and phased delivery of completed sections to the CEO.',
        result:
          'Three completed analytical trendbooks; internal presentations for 30–50 attendees after each release, plus previews of early versions for external audiences.',
        achievements: [
          'Authorship of the main analytical section, assembly of the master presentation, and handoff of materials to designers.',
          'Collection of expert materials and feedback from technologists, product specialists, marketing, and sales.',
          'Material alignment with the Marketing Director, deadline control, and phased delivery to the CEO.',
        ],
        tools: ['Bitrix24', 'Figma', 'Presentations', 'Expert Interviews'],
                publications: [
          {
            title: 'TREND BOOK #1 — Meat Snacks',
            cover: '/assets/projects/trendbooks/Trendbook1.png',
            url: 'https://mp-tek.ru/media/analiz-rynka-i-prognozirovanie-trendov-pishchevoy-promyshlennosti.html',
          },
          {
            title: 'TREND BOOK #2 — A New Convenience-Store Snack Format',
            cover: '/assets/projects/trendbooks/Trendbook2.png',
            url: 'https://pack-5.ru/products/sosiska_na_teploi_polke/',
          },
          {
            title: 'TREND BOOK #3',
            cover: '/assets/projects/trendbooks/Trendbook3.png',
          },
        ],
      },
      {
        id: 'service-app',
        category: 'pm',
        featured: true,
        title: 'Service Application: Working Prototype',
        period: 'Diploma Project · APM 2025',
        role: 'Working Prototype Developer',
        detailsTitle: 'Implemented features by user role',
        description:
          'Development of a working prototype for a service management information system as a diploma project; remote support for the product demonstration at APM 2025.',
        result:
          'One working prototype with functional workflows for five roles: customer, service engineer, service manager, executive, and administrator.',
        achievements: [
          'Customer: registration, equipment management, service request creation and tracking, comments, service history, maintenance calendar, equipment documentation, and spare-parts orders.',
          'Service engineer: assigned requests, status updates, records of completed work and used parts, request completion by the responsible engineer, and work schedule.',
          'Service manager: request intake and assignment, customer equipment records, spare-parts order approval and issuing, stock accounting, and catalogues of models, documents, and spare parts.',
          'Executive: KPI dashboard, SLA and labour-rate settings, reports, and manager-level permissions for service requests and spare-parts orders.',
          'Administrator: user creation, blocking, offboarding, password resets, role assignment, and catalogue maintenance.',
        ],
        tools: ['Service Workflow Design', 'Role-Based Workflows', 'Working Prototype'],
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
          'End-to-end project management for the rebranding, from the initial brief to the final client presentation: coordination of logo, packaging, and retail display development, with direct client communication.',
        result:
          'A complete set of logo, packaging, and retail display materials delivered within 3–4 weeks; the client uses the work in Instagram publications and is pursuing patent protection.',
        achievements: [
          'End-to-end PM responsibilities: work planning, contributor coordination, and timeline control throughout the project.',
          'Client communication, intermediate approvals, and preparation and delivery of the final presentation.',
        ],
        tools: ['Bitrix24', 'Figma', 'Client Meetings', 'Presentations'],
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
          'Coordination of two parallel product-preservation experiments: thermostat testing and shelf storage in the company’s packaging.',
        result:
          'Six product checks over 1.5 years. Laboratory checks during the shelf-storage stage found no signs of spoilage, confirming the findings of the earlier stage.',
        achievements: [
          'Planning and coordination of six product checks throughout the experiment.',
          'Preparation of technical instructions for the branch assistant, inspection schedule, and batch-tracking process.',
          'Coordination of sample transfers and laboratory result collection.',
        ],
        tools: ['Bitrix24', 'Excel', 'Google Sheets', 'Laboratory Reports'],
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
          'Coordination of the PACK-5 digital showcase on pack-5.ru: collaboration with an external web developer, requirements definition, and interface prototyping in Figma.',
        result:
          'Launch of the PACK-5 digital showcase; Figma prototype of the packaging solutions calculator; APM user feedback collection, including 30–40 completed detailed questionnaires.',
        achievements: [
          'Design of an interactive Figma prototype for a packaging solutions calculator.',
          'Coordination of the external web developer and preparation of materials for the digital showcase.',
          'Organization and structuring of feedback from trade show visitors.',
        ],
        tools: ['Figma', 'Bitrix24', 'Web Requirements', 'Surveys'],
        media: [
          { type: 'link', url: 'https://pack-5.ru/', caption: 'Open PACK-5 website' },
        ],
      },
      {
        id: 'process-b24-infra',
        category: 'pm',
        title: 'Corporate Operations & IT Support',
        period: '2024 — 2026',
        role: 'Project Operations / IT Support',
        description:
          'Administrative and technical support for the Kaliningrad head office: corporate services, workstations, office equipment, and local network support.',
        result:
          'Timely resolution of technical incidents and restoration of workstation and corporate service availability.',
        achievements: [
          'Administration of Yandex Disk and Yandex Mail: account creation, access permissions, data backups, incoming mail monitoring, and correspondence distribution.',
          'Corporate telecom administration: agreements, service documents, and requests; SIM card ordering and registration; coordination with Beeline and accounting.',
          'Full support for office PCs, laptops, printers, and the local network: workstation setup, software installation, access configuration, diagnostics, and troubleshooting.',
          'Office equipment selection, procurement justification, and budget approval.',
                  ],
        tools: ['Bitrix24', 'Yandex Disk', 'Yandex Mail', 'Beeline', 'Windows', 'IT Support'],
      },
      {
        id: 'bitrix24-sales-funnels',
        category: 'pm',
        title: 'Sales Funnel Process Design in Bitrix24',
        period: 'Internal project',
        role: 'Process Design Contributor / Bitrix24 Administrator',
        description:
          'Process design in Draw.io for equipment sales-to-production workflows, including different factory scenarios and action sequences. The agreed process logic forms the basis of two automated Bitrix24 funnels; technical configuration is handled by an external specialist.',
        result:
          'Two automated “Sales → Production” funnels in Bitrix24, with a visible deal stage, responsible employee, and next action at each stage; process logic approved by the CEO.',
        achievements: [
          'Deal scenario mapping and process-step design in Draw.io.',
          'Preparation and handoff of approved process logic to an external specialist for Bitrix24 automation setup.',
          'Joint administration of the completed funnels and training for new employees on Bitrix24 and funnel workflows.',
        ],
        tools: ['Draw.io', 'Bitrix24', 'Employee Training'],
      },
      {
        id: 'youtube-video-growth',
        category: 'marketing',
        title: 'YouTube & Video Marketing',
        period: '2025 — 2026',
        role: 'Content Marketer / Video Producer',
        description:
          'Video content production for company products: content preparation, filming coordination, editing, and publication across video platforms.',
        result:
          '350k–400k video views across platforms in one year; YouTube watch time increased by 99% to 410 hours.',
        achievements: [
          'YouTube watch time growth of 99%, reaching 410 hours.',
          'Video content production and adaptation for YouTube and other company platforms.',
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
          'Email marketing: regular campaign planning, customer database segmentation, surveys, and audience response analysis.',
        result:
          'Open Rate growth from a baseline below 10%; email reads increased by 50%; link clicks also increased.',
        achievements: [
          'Customer database segmentation and management of regular email communications.',
          'Development of newsletter structures and templates in Tilda.',
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
          'Management of company social channels, preparation of website SEO content, and support for lead generation at industry trade shows.',
        result: 'Targeted enquiries from an industry trade show during the second month in the role; ongoing social media and SEO content activity.',
        achievements: [
          'Management of the company Telegram channel and Instagram account.',
          'SEO article preparation, keyword selection, and meta description writing.',
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
          'Game server development on the Crystalix platform, 3D content creation for YouTube creators, and team coordination.',
        result: 'Videos featuring created 3D models: 20k–31k views; the project’s VK community: 715 members.',
        achievements: [
          'Creation of hundreds of 3D models in Blockbench and Blender for assets, environments, and five game eras.',
          'Coordination of a five-person team and management of the project communities across VK, Discord, and Telegram.',
        ],
        tools: ['Blender', 'Blockbench', 'Photoshop', 'Unity (C#)', 'Trello', 'Discord', 'VK / Telegram'],
      },
      {
        id: 'industrial-3d-lines',
        category: 'gamedev',
        title: 'Industrial 3D Visualization of Production Lines',
        period: 'During my time at MP-Technologies',
        role: '3D Modeling & Visualization',
        description:
          'Industrial production line visualization in Blender: independent modeling of equipment units from technical drawings and photographs, comparison with real machinery, and assembly of lines with different scales and configurations.',
        result:
          '3D layouts of production lines in different scales and configurations, assembled from independently modeled equipment units.',
        achievements: [
          'Independent equipment modeling based on technical drawings, photographs, and visual examination of real machinery.',
          'Assembly of individual models into production line layouts.',
          'Preparation of layout variations with different scales and configurations.',
        ],
        tools: ['Blender', '3D Modeling', 'Industrial Visualization'],
      },
    ],
  },
};
