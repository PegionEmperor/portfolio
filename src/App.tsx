import { useEffect, useState } from 'react';

import {

  PORTFOLIO_DATA,

  type Lang,

  type Project,

  type ProjectCategory,

  type ProjectMedia,

} from './data/content';

const assetUrl = (path: string): string => {
  if (
    /^(?:[a-z]+:)?\/\//i.test(path) ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
};

const SECONDARY_CATEGORIES: ProjectCategory[] = ['pm', 'marketing', 'gamedev'];

const VISUAL_COPY: Record<string, { ru: { tag: string; title: string; note: string }; en: { tag: string; title: string; note: string } }> = {

  trendbooks: {

    ru: {

      tag: 'АНАЛИТИКА / ПРЕЗЕНТАЦИЯ',

      title: 'Здесь будет разворот аналитического трендбука',

      note: 'Графики, структура исследования и выводы. NDA-данные предварительно скрыть на исходном изображении.',

    },

    en: {

      tag: 'RESEARCH / PRESENTATION',

      title: 'Analytical trendbook spread goes here',

      note: 'Research charts, structure and insights. Redact confidential details in the source image.',

    },

  },

  'kita-rebranding': {

    ru: {

      tag: 'БРЕНДИНГ / ДИЗАЙН',

      title: 'Здесь будут материалы ребрендинга KITA',

      note: 'Логотип, упаковка и оформление торговой точки. Хорошо подойдёт сравнение концепции и результата.',

    },

    en: {

      tag: 'BRANDING / DESIGN',

      title: 'KITA rebranding materials go here',

      note: 'Logo, packaging and store design. A concept-to-result comparison would work well.',

    },

  },

  'rd-shelf-life': {

    ru: {

      tag: 'R&D / ИССЛЕДОВАНИЕ',

      title: 'Здесь будут фото эксперимента и результаты проверок',

      note: 'Образцы продукта, условия хранения, график контрольных точек и обезличенный фрагмент лабораторного отчёта.',

    },

    en: {

      tag: 'R&D / RESEARCH',

      title: 'Experiment photos and test results go here',

      note: 'Product samples, storage conditions, test timeline and a redacted extract from the lab report.',

    },

  },

  'digital-showcase': {

    ru: {

      tag: 'DIGITAL / WEB',

      title: 'Здесь будут скриншоты цифровой витрины PACK-5',

      note: 'Скриншоты страниц сайта и прототип калькулятора упаковочных решений из Figma.',

    },

    en: {

      tag: 'DIGITAL / WEB',

      title: 'PACK-5 digital showcase screenshots go here',

      note: 'Website page screenshots and the packaging calculator prototype from Figma.',

    },

  },



  'service-app': {

    ru: {

      tag: 'SERVICE PRODUCT / PROTOTYPE',

      title: 'Здесь будут скриншоты сервисного приложения',

      note: 'Покажи ключевые экраны по ролям: клиент, сервисный инженер, менеджер, руководитель и администратор. Перед публикацией скрой реальные данные.',

    },

    en: {

      tag: 'SERVICE PRODUCT / PROTOTYPE',

      title: 'Service application screenshots go here',

      note: 'Show key screens for the customer, service engineer, manager, executive, and administrator. Remove real data before publishing.',

    },

  },

  'operations-bitrix': {
    ru: {
      tag: 'ПРОЦЕССЫ / АВТОМАТИЗАЦИЯ',
      title: 'Здесь будет схема воронок и материалов по операционным процессам',
      note: 'Обезличенная схема Draw.io: этапы сделки от продажи до производства, ответственные и следующие действия.',
    },
    en: {
      tag: 'PROCESSES / AUTOMATION',
      title: 'Funnel diagram and operations materials go here',
      note: 'A redacted Draw.io diagram: deal stages from sales to production, owners and next actions.',
    },
  },
  'youtube-video-growth': {

    ru: {

      tag: 'VIDEO / ANALYTICS',

      title: 'Здесь будут примеры видеоконтента и аналитики',

      note: 'Превью роликов, кадры со съёмок и обезличенные показатели видеоплатформ.',

    },

    en: {

      tag: 'VIDEO / ANALYTICS',

      title: 'Video examples and analytics go here',

      note: 'Video thumbnails, production stills and redacted platform analytics.',

    },

  },

  'email-marketing-growth': {

    ru: {

      tag: 'EMAIL / CONTENT',

      title: 'Здесь будут примеры email-рассылок',

      note: 'Макеты писем, структура сегментов и обезличенные результаты кампаний.',

    },

    en: {

      tag: 'EMAIL / CONTENT',

      title: 'Email campaign examples go here',

      note: 'Newsletter layouts, audience segments and anonymized campaign results.',

    },

  },

  'smm-seo-leadgen': {

    ru: {

      tag: 'SMM / SEO / EVENTS',

      title: 'Здесь будут примеры публикаций и выставочных материалов',

      note: 'Посты, SEO-статьи, фотографии стенда или обезличенные материалы опроса.',

    },

    en: {

      tag: 'SMM / SEO / EVENTS',

      title: 'Social posts and event materials go here',

      note: 'Social posts, SEO articles, booth photos or anonymized survey materials.',

    },

  },

  'gamedev-crystalix-raft': {

    ru: {

      tag: 'GAMEDEV / 3D',

      title: 'Здесь будут примеры 3D-моделей и игровых сцен',

      note: 'Подборка моделей окружения, построек и игровых объектов для пяти эпох.',

    },

    en: {

      tag: 'GAMEDEV / 3D',

      title: '3D assets and game scenes go here',

      note: 'A selection of environment assets, buildings and game objects across five eras.',

    },

  },

  'industrial-3d-lines': {

    ru: {

      tag: 'INDUSTRIAL / 3D VISUALIZATION',

      title: 'Здесь будут 3D-визуализации производственных линий',

      note: 'Рендеры оборудования, варианты компоновки и примеры линий разных масштабов и конфигураций.',

    },

    en: {

      tag: 'INDUSTRIAL / 3D VISUALIZATION',

      title: 'Industrial production line renders go here',

      note: 'Equipment renders, layout variations, and production lines in different scales and configurations.',

    },

  },

};

const FALLBACK_VISUAL = {

  ru: {

    tag: 'PROJECT / VISUAL',

    title: 'Здесь будет визуальный пример проекта',

    note: 'Добавь изображение, макет или фрагмент результата работы.',

  },

  en: {

    tag: 'PROJECT / VISUAL',

    title: 'Project visual goes here',

    note: 'Add an image, mockup or an extract of the final deliverable.',

  },

};

function ArrowUpRight() {

  return (

    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">

      <path d="M5 15 15 5M6 5h9v9" />

    </svg>

  );

}

function ImagePlaceholder({

  project,

  lang,

  index,

  compact = false,

  portrait = false,

}: {

  project?: Project;

  lang: Lang;

  index?: number;

  compact?: boolean;

  portrait?: boolean;

}) {

  const copy = project ? (VISUAL_COPY[project.id] ?? FALLBACK_VISUAL)[lang] : null;

  const title = portrait

    ? lang === 'ru' ? 'Здесь будет твой портрет или рабочее фото' : 'Your portrait or working photo goes here'

    : copy?.title ?? FALLBACK_VISUAL[lang].title;

  const note = portrait

    ? lang === 'ru' ? 'Нейтральный деловой кадр или фотография в рабочей обстановке.' : 'A natural professional portrait or a photograph in a working environment.'

    : copy?.note ?? FALLBACK_VISUAL[lang].note;

  const tag = portrait

    ? lang === 'ru' ? 'ПОРТРЕТ / PROFILE' : 'PORTRAIT / PROFILE'

    : copy?.tag ?? FALLBACK_VISUAL[lang].tag;

  return (

    <div

      className={`relative isolate flex overflow-hidden rounded-xl border border-dashed border-[#505860] bg-[#11171d] ${

        portrait ? 'min-h-[320px] md:min-h-[430px]' : compact ? 'min-h-[150px]' : 'min-h-[205px] md:min-h-[245px]'

      }`}

      role="img"

      aria-label={`${title}. ${note}`}

    >

      <div

        className="absolute inset-0 -z-20"

        style={{

          backgroundImage:

            'radial-gradient(ellipse at 70% 18%, rgba(185,154,105,0.16), transparent 38%), linear-gradient(135deg, #1a2026 0%, #10151a 58%, #171c21 100%)',

        }}

      />

      <div

        className="absolute inset-0 -z-10 opacity-[0.14]"

        style={{

          backgroundImage:

            'linear-gradient(rgba(220,225,229,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(220,225,229,0.18) 1px, transparent 1px)',

          backgroundSize: '30px 30px',

          maskImage: 'linear-gradient(to bottom right, black, transparent 88%)',

        }}

      />

      <div className="absolute right-4 top-4 font-mono text-[11px] tracking-[0.18em] text-[#69737b]">

        {portrait ? 'PROFILE / 01' : `${String(index ?? 1).padStart(2, '0')} / VISUAL`}

      </div>

      <div className={`m-auto flex w-full max-w-md flex-col items-center px-5 text-center ${compact ? 'py-7' : 'py-9'}`}>

        <div className={`mb-4 flex items-center justify-center rounded-full border border-[#786343]/70 bg-[#b99a69]/10 font-mono text-[#c6a975] ${portrait ? 'h-20 w-20 text-xl' : 'h-12 w-12 text-lg'}`}>

          {portrait ? 'DY' : (

            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">

              <rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2" />

              <circle cx="8.5" cy="9" r="1.5" />

              <path d="m4.5 17 5-4.8 3.2 3 2.3-2 4.5 4.1" />

            </svg>

          )}

        </div>

        <span className="mb-2 font-mono text-[11px] font-semibold tracking-[0.2em] text-[#b99a69]">{tag}</span>

        <p className={`max-w-sm font-semibold leading-snug text-[#e6e3dd] ${portrait ? 'text-lg md:text-xl' : compact ? 'text-sm' : 'text-sm md:text-base'}`}>{title}</p>

        {!compact && <p className="mt-2 max-w-sm text-[12px] leading-relaxed text-[#89939a]">{note}</p>}

        <span className="mt-4 rounded-full border border-[#515a61] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#78838b]">

          {lang === 'ru' ? 'Заглушка изображения' : 'Image placeholder'}

        </span>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#b99a69]/50 to-transparent" />

    </div>

  );

}

function ProfilePortrait({ name }: { name: string }) {
  return (
    <img
      src={assetUrl('/assets/profile/portrait.png')}
      alt={name}
      loading="eager"
      className="mx-auto block aspect-[4/5] w-full rounded-xl object-cover object-center"
    />
  );
}


function MediaImage({

  item,

  title,

  lang,

}: {

  item: Extract<NonNullable<Project['media']>[number], { type: 'image' }>;

  title: string;

  lang: Lang;

}) {

  const [failed, setFailed] = useState(false);

  if (failed) {

    return (

      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-[#11171d] px-5 text-center">

        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b99a69]">

          {lang === 'ru' ? 'Файл не найден' : 'File not found'}

        </span>

        <span className="break-all text-[12px] text-[#9aa4aa]">{item.url}</span>

      </div>

    );

  }

  return (

    <img

      src={assetUrl(item.url)}

      alt={item.caption || title}

      loading="lazy"

      onError={() => setFailed(true)}

      className="aspect-[16/10] w-full bg-[#0b1014] object-cover"

    />

  );

}

function MediaVideo({

  item,

  title,

  lang,

}: {

  item: Extract<NonNullable<Project['media']>[number], { type: 'video' }>;

  title: string;

  lang: Lang;

}) {

  const [failed, setFailed] = useState(false);

  if (failed) {

    return (

      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-[#11171d] px-5 text-center">

        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b99a69]">

          {lang === 'ru' ? 'Видео не найдено' : 'Video not found'}

        </span>

        <span className="break-all text-[12px] text-[#9aa4aa]">{item.url}</span>

      </div>

    );

  }

  return (

    <video

      key={item.url}

      controls

      playsInline

      preload="metadata"

      poster={item.poster ? assetUrl(item.poster) : undefined}

      aria-label={item.caption || title}

      onError={() => setFailed(true)}

      className="aspect-[16/10] w-full bg-[#050708] object-contain"

    >

      <source src={assetUrl(item.url)} />

      {lang === 'ru' ? 'Ваш браузер не поддерживает видео.' : 'Your browser does not support video.'}

    </video>

  );

}

function MediaLightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  title,
  lang,
}: {
  item: Extract<NonNullable<Project['media']>[number], { type: 'image' }>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  title: string;
  lang: Lang;
}) {
  const isRu = lang === 'ru';

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Предотвращение прокрутки фона
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        aria-label={isRu ? 'Закрыть' : 'Close'}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          aria-label={isRu ? 'Предыдущее изображение' : 'Previous image'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          aria-label={isRu ? 'Следующее изображение' : 'Next image'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={assetUrl(item.url)}
          alt={item.caption || title}
          className="block max-h-[90vh] max-w-full object-contain"
        />
        {item.caption && (
          <p className="mt-3 text-center text-sm text-white/80">{item.caption}</p>
        )}
      </div>
    </div>
  );
}

function MediaLightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  title,
  lang,
}: {
  item: Extract<NonNullable<Project['media']>[number], { type: 'image' }>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  title: string;
  lang: Lang;
}) {
  const isRu = lang === 'ru';

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Предотвращение прокрутки фона
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        aria-label={isRu ? 'Закрыть' : 'Close'}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          aria-label={isRu ? 'Предыдущее изображение' : 'Previous image'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          aria-label={isRu ? 'Следующее изображение' : 'Next image'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={assetUrl(item.url)}
          alt={item.caption || title}
          className="block max-h-[90vh] max-w-full object-contain"
        />
        {item.caption && (
          <p className="mt-3 text-center text-sm text-white/80">{item.caption}</p>
        )}
      </div>
    </div>
  );
}

function ProjectMediaGallery({

  project,

  lang,

  index,

  compact = false,

}: {

  project: Project;

  lang: Lang;

  index: number;

  compact?: boolean;

}) {

  const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const visualMedia = (project.media ?? []).filter(

    (item): item is Extract<ProjectMedia, { type: 'image' | 'video' }> =>

      item.type === 'image' || item.type === 'video',

  );

  const currentItem = visualMedia[activeIndex];

  const isRu = lang === 'ru';

  if (visualMedia.length === 0 || !currentItem) {

    return <ImagePlaceholder project={project} lang={lang} index={index} compact={compact} />;

  }

  const goToPrevious = () => {

    setActiveIndex((current) => (current - 1 + visualMedia.length) % visualMedia.length);

  };

  const goToNext = () => {

    setActiveIndex((current) => (current + 1) % visualMedia.length);

  };

  return (

    <div className="overflow-hidden rounded-xl border border-[#3a434b] bg-[#080c10]">

      <div className="relative">

{currentItem.type === 'image' && (
  <div
    className="cursor-pointer"
    onClick={() => setLightboxOpen(true)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setLightboxOpen(true);
      }
    }}
    aria-label={lang === 'ru' ? 'Открыть изображение в полном размере' : 'Open image in full size'}
  >
          <div
            className="cursor-pointer"
            onClick={() => setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
            aria-label={isRu ? 'Открыть изображение в полном размере' : 'Open image in full size'}
          >
            <MediaImage key={currentItem.url} item={currentItem} title={project.title} lang={lang} />
          </div>
  </div>
)}

        {visualMedia.length > 1 && (

          <>

            <button

              type="button"

              onClick={goToPrevious}

              aria-label={isRu ? 'Предыдущий материал' : 'Previous media'}

              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-lg text-white shadow-lg backdrop-blur transition hover:bg-black/85"

            >

              ‹

            </button>

            <button

              type="button"

              onClick={goToNext}

              aria-label={isRu ? 'Следующий материал' : 'Next media'}

              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-lg text-white shadow-lg backdrop-blur transition hover:bg-black/85"

            >

              ›

            </button>

            <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/65 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur">

              {activeIndex + 1} / {visualMedia.length}

            </span>

          </>

        )}

      </div>

      {(currentItem.caption || visualMedia.length > 1) && (

        <div className="flex items-center justify-between gap-3 border-t border-[#293139] px-3 py-2.5">

          <p className="min-w-0 text-[11px] leading-relaxed text-[#9ba5ab]">

            {currentItem.caption || (currentItem.type === 'video' ? (isRu ? 'Видеоматериал проекта' : 'Project video') : (isRu ? 'Изображение проекта' : 'Project image'))}

          </p>

          {visualMedia.length > 1 && (

            <div className="flex shrink-0 items-center gap-1.5" aria-label={isRu ? 'Выбор материала' : 'Choose media'}>

              {visualMedia.map((item, itemIndex) => (

                <button

                  key={`${item.url}-${itemIndex}`}

                  type="button"

                  onClick={() => setActiveIndex(itemIndex)}

                  aria-label={`${isRu ? 'Открыть материал' : 'Open media'} ${itemIndex + 1}`}

                  aria-pressed={activeIndex === itemIndex}

                  className={`h-1.5 rounded-full transition-all ${activeIndex === itemIndex ? 'w-5 bg-[#c7a36d]' : 'w-1.5 bg-[#65717a] hover:bg-[#aeb6bb]'}`}

                />

              ))}

            </div>

          )}

        </div>
      )}

      {lightboxOpen && (
        <MediaLightbox
          item={currentItem as Extract<NonNullable<Project['media']>[number], { type: 'image' }>}
          onClose={() => setLightboxOpen(false)}
          onPrev={goToPrevious}
          onNext={goToNext}
          hasPrev={visualMedia.length > 1}
          hasNext={visualMedia.length > 1}
          title={project.title}
          lang={lang}
        />
      )}
    </div>
  );
}

function ProjectPublications({
  project,
  lang,
}: {
  project: Project;
  lang: Lang;
}) {
  const publications = project.publications ?? [];

  if (publications.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">
      <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b99a69]">
        {lang === 'ru' ? 'Выпущенные материалы' : 'Published materials'}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {publications.map((publication, publicationIndex) => {
  const isUpcoming = publicationIndex === 2;

  return (
          <article
            key={publication.title}
            className="overflow-hidden rounded-lg border border-[#303941] bg-[#0c1116]"
          >
<div className="relative overflow-hidden bg-[#080c10]">
  <img
    src={assetUrl(publication.cover)}
    alt={publication.title}
    loading="lazy"
    className={`block h-auto w-full ${
      isUpcoming ? 'scale-[1.03] blur-[4px]' : ''
    }`}
  />

  {isUpcoming && (
    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
      <span className="rounded-full border border-[#b99a69]/70 bg-[#11171d]/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d6b77f]">
        Coming soon
      </span>
    </div>
  )}
</div>

            <div className="p-3">
              <p className="text-xs font-semibold leading-relaxed text-[#ddd8cd]">
                {publication.title}
              </p>
              {isUpcoming && (
  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#b99a69]">
    {lang === 'ru' ? 'Ещё не вышел' : 'Not yet released'}
  </p>
)}

              {publication.url && (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-[#c4a777] transition hover:text-[#e2c99d]"
                >
                  {lang === 'ru'
                    ? 'Открыть материал компании'
                    : 'Open company publication'}

                  <ArrowUpRight />
                </a>
              )}
            </div>
          </article>
          );
})}
      </div>
    </section>
  );
}

function ProjectCard({

  project,

  lang,

  index,

  featured = false,

}: {

  project: Project;

  lang: Lang;

  index: number;

  featured?: boolean;

}) {

  const [expanded, setExpanded] = useState(featured);

  const imageIndex = index + 1;

  const isRu = lang === 'ru';

  const visualMedia = (project.media ?? []).filter(
    (item) => item.type === 'image' || item.type === 'video',
  );
  const showGallery = visualMedia.length > 0;

  const projectLinks = (project.media ?? []).filter(
    (item): item is Extract<ProjectMedia, { type: 'link' }> => item.type === 'link',
  );

  return (

    <article className="group overflow-hidden rounded-xl border border-[#303840] bg-[#11171d] transition duration-300 hover:border-[#7c6848]/80">

      <div className={`grid ${featured && showGallery ? 'md:grid-cols-[0.95fr_1.05fr]' : 'grid-cols-1'}`}>

        <div className="flex min-w-0 flex-col p-5 md:p-6">

          <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#b99a69]">

            <span>{String(imageIndex).padStart(2, '0')}</span>

            <span className="text-[#59636b]">/</span>

            <span>{project.period}</span>

            {project.teamSize && <span className="text-[#737e86]">· {project.teamSize}</span>}

          </div>

          <h3 className={`${featured ? 'text-xl md:text-2xl' : 'text-base'} font-semibold leading-tight tracking-tight text-[#eeece7]`}>{project.title}</h3>

          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#a58a60]">{project.role}</p>

          <p className="mt-4 text-sm leading-relaxed text-[#a5afb5]">{project.description}</p>

{project.result && (
  <div className="mt-4 border-l-2 border-[#b99a69] bg-[#b99a69]/[0.07] px-3 py-2.5">
    <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c3a675]">
      {isRu ? 'Результат' : 'Outcome'}
    </p>
    <p className="text-[13px] leading-relaxed text-[#ddd8cd]">
      {project.result}
    </p>
  </div>
)}

<ProjectPublications project={project} lang={lang} />

          {expanded && (

            <div className="mt-4 space-y-4">

              <div>

                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7e8991]">{project.detailsTitle ?? (isRu ? 'Мой вклад' : 'My contribution')}</p>

                <ul className="space-y-2">

                  {project.achievements.map((item, itemIndex) => (

                    <li key={`${project.id}-achievement-${itemIndex}`} className="flex gap-2 text-[12px] leading-relaxed text-[#aeb6bb]">

                      <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#b99a69]" />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </div>

              {project.team && project.team.length > 0 && (

                <div>

                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7e8991]">{isRu ? 'Команда' : 'Team'}</p>

                  <div className="flex flex-wrap gap-1.5">

                    {project.team.map((member, memberIndex) => (

                      <span key={`${project.id}-member-${memberIndex}`} className="rounded border border-[#333d45] bg-[#171f26] px-2 py-1 text-[11px] text-[#aab3ba]">{member}</span>

                    ))}

                  </div>

                </div>

              )}

            </div>

          )}

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#2a3239] pt-4 mt-5">

            <div className="flex flex-wrap gap-1.5">

              {project.tools.slice(0, featured ? 5 : 4).map((tool) => (

                <span key={tool} className="rounded border border-[#303941] bg-[#0c1116] px-2 py-1 font-mono text-[10px] text-[#7e8991]">{tool}</span>

              ))}

            </div>

            <button

              type="button"

              onClick={() => setExpanded((value) => !value)}

              aria-expanded={expanded}

              className="shrink-0 text-[12px] font-semibold text-[#c4a777] transition hover:text-[#e2c99d]"

            >

              {expanded ? (isRu ? 'Свернуть −' : 'Collapse −') : (isRu ? 'Подробнее +' : 'Details +')}

            </button>

          </div>

          {projectLinks.map((link) => (
            <a
              key={link.url}
              href={assetUrl(link.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#c4a777] hover:text-[#e2c99d]"
            >
              {link.caption || link.url}<ArrowUpRight />
            </a>
          ))}

        </div>

        {showGallery && (

          <div className={`border-t border-[#2c343c] bg-[#0d1217] p-3 ${featured ? 'md:border-l md:border-t-0 md:p-4' : ''}`}>

            <ProjectMediaGallery project={project} lang={lang} index={index + 1} compact={!featured} />

          </div>

        )}

      </div>

    </article>

  );

}

export default function App() {

  const [lang, setLang] = useState<Lang>('ru');

  const [showMore, setShowMore] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = PORTFOLIO_DATA[lang];

  const featuredProjects = content.projects.filter((project) => project.featured);

  const secondaryProjects = content.projects.filter((project) => !project.featured);

  const isRu = lang === 'ru';

  return (

    <div className="min-h-screen overflow-hidden bg-[#090c0f] font-sans text-[#e8e6e1] selection:bg-[#c59b5a] selection:text-[#090c0f]">

      <div

        className="pointer-events-none fixed inset-0 z-0 opacity-60"

        style={{

          backgroundImage:

            'radial-gradient(ellipse at 12% 0%, rgba(190,145,76,0.10), transparent 38%), radial-gradient(ellipse at 88% 18%, rgba(90,105,116,0.08), transparent 34%)',

        }}

      />

      <header className="sticky top-0 z-50 border-b border-[#252b30] bg-[#090c0f]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-9">

          <a href="#top" onClick={() => setMobileMenuOpen(false)} className="flex min-w-0 items-center gap-3">

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#80663f] bg-[#b99a69]/10 font-mono text-sm font-bold text-[#d7b675]">DY</span>

            <span className="min-w-0">

              <span className="block truncate text-[13px] font-semibold uppercase tracking-[0.12em] text-[#e9e6df]">{content.contacts.name}</span>

              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#78838c]">{content.hero.title}</span>

            </span>

          </a>

          <nav className="hidden items-center gap-7 text-[13px] text-[#a2a9ad] md:flex" aria-label={content.ui.mainNavigationLabel}>

            <a href="#cases" className="transition hover:text-[#e2c28e]">{content.nav.cases}</a>

            <a href="#other-key-projects" className="transition hover:text-[#e2c28e]">{content.nav.otherProjects}</a>

            <a href="#about" className="transition hover:text-[#e2c28e]">{content.nav.about}</a>

            <a href="#contact" className="transition hover:text-[#e2c28e]">{content.nav.contact}</a>

          </nav>

          <div className="flex shrink-0 items-center gap-2">

            <div className="flex items-center rounded-md border border-[#303840] bg-[#131920] p-1" aria-label={content.ui.languageLabel}>

              {(['ru', 'en'] as Lang[]).map((language) => (

                <button

                  key={language}

                  type="button"

                  onClick={() => setLang(language)}

                  aria-pressed={lang === language}

                  className={`rounded px-2.5 py-1.5 font-mono text-[11px] font-bold transition ${lang === language ? 'bg-[#d4ad6e] text-[#101317]' : 'text-[#84909a] hover:text-[#e8e6e1]'}`}

                >

                  {language.toUpperCase()}

                </button>

              ))}

            </div>

            <button

              type="button"

              className="rounded-md border border-[#303840] bg-[#131920] px-3 py-2 text-sm text-[#c1c7cb] md:hidden"

              aria-expanded={mobileMenuOpen}

              aria-controls="mobile-navigation"

              aria-label={mobileMenuOpen ? content.ui.closeMenuLabel : content.ui.openMenuLabel}

              onClick={() => setMobileMenuOpen((open) => !open)}

            >

              {mobileMenuOpen ? '×' : '☰'}

            </button>

          </div>

        </div>

        {mobileMenuOpen && (

          <nav id="mobile-navigation" className="border-t border-[#252c33] px-5 py-4 md:hidden" aria-label={content.ui.mainNavigationLabel}>

            <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 text-sm text-[#bbc2c7]">

              <a href="#cases" onClick={() => setMobileMenuOpen(false)}>{content.nav.cases}</a>

              <a href="#other-key-projects" onClick={() => setMobileMenuOpen(false)}>{content.nav.otherProjects}</a>

              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{content.nav.about}</a>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{content.nav.contact}</a>

            </div>

          </nav>

        )}

      </header>

      <main id="top" className="relative z-10 mx-auto max-w-7xl px-5 pb-14 md:px-9">

        {/* Hero */}

        <section className="grid items-center gap-8 border-b border-[#2a3036] py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-14 lg:gap-14">

          <div className="py-2">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#82683f] bg-[#bd985d]/[0.08] px-4 py-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#d3aa68]" />

              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#d2ad70]">{content.hero.title}</span>

            </div>

            <h1 className="max-w-3xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#f1efea] sm:text-6xl lg:text-[4.4rem]">

              {content.contacts.name}

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#b5bcc0] md:text-lg md:leading-8">{content.hero.subtitle}</p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a href={`https://t.me/${content.contacts.telegram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d5ad6c] px-6 py-3 text-sm font-bold text-[#111317] transition hover:bg-[#e6c486]">

                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M21.6 4.4 18.4 19c-.2 1- .8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2L6.9 13.3l-4.5-1.4c-1-.3-1-1 .2-1.5L20 4.1c.8-.3 1.9.2 1.6.3Z" /></svg>

                {content.hero.cta}<ArrowUpRight />

              </a>

              <a href={assetUrl(content.contacts.resumeUrl)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#555e65] bg-[#11161b] px-6 py-3 text-sm font-semibold text-[#e2e0da] transition hover:border-[#b99a69] hover:text-[#e3c28e]">

                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M5 2.8h7l3 3V17H5zM12 2.8v3h3M7.5 10h5M7.5 13h5" /></svg>

                {content.hero.resumeLabel}<span aria-hidden="true">↓</span>

              </a>

            </div>

            <div className="mt-9 grid grid-cols-3 divide-x divide-[#4a4d4d] border-t border-[#30363b] pt-5">

              {content.hero.stats.map((stat, index) => (

                <div key={`${stat.value}-${index}`} className={`${index === 0 ? 'pr-3' : 'px-3'} min-w-0`}>

                  <div className="font-mono text-2xl font-semibold tracking-tight text-[#d9b77e] md:text-3xl">{stat.value}</div>

                  <p className="mt-1 max-w-[155px] text-[12px] leading-relaxed text-[#929da3] md:text-[13px]">{stat.label}</p>

                </div>

              ))}

            </div>

          </div>

          <div className="relative mx-auto w-full max-w-[560px] md:max-w-none">

            <div className="absolute -inset-3 rounded-[1.6rem] border border-[#96784d]/20" />

            <div className="relative rounded-[1.35rem] border border-[#3d454c] bg-[#11171d] p-2.5 shadow-2xl shadow-black/40">
<ProfilePortrait name={content.contacts.name} />
              <div className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#78838b]">

                <span>{content.contacts.location}</span>

                <span>Portfolio / 2026</span>

              </div>

            </div>

          </div>

        </section>

        {/* Cases + workflow overview */}

       {/* Cases + workflow overview */}
<section id="cases" className="scroll-mt-24 pt-12">

  {/* Заголовок ключевых кейсов */}
  <div className="mb-5 flex items-center justify-between gap-3">
    <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-[#efede8] md:text-2xl">
      <span className="h-3 w-3 rounded-full bg-[#d5ad6c] shadow-[0_0_16px_rgba(213,173,108,0.35)]" />
      {content.ui.casesTitle}
    </h2>

    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#77828a]">
      {featuredProjects.length} / SELECTED
    </span>
  </div>

  {/* Первый ключевой кейс на всю ширину */}
  {featuredProjects[0] && (
    <ProjectCard
      project={featuredProjects[0]}
      lang={lang}
      index={0}
      featured
    />
  )}

</section>

        {/* Remaining featured cases */}

        {featuredProjects.length > 1 && (

          <section id="other-key-projects" className="scroll-mt-24 pt-12">

            <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#2b3137] pb-4">

              <div>

                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b99a69]">01 / CONTINUED</p>

                <h2 className="text-xl font-semibold text-[#efede8] md:text-2xl">{isRu ? 'Другие ключевые проекты' : 'More selected projects'}</h2>

              </div>

              <span className="font-mono text-[11px] text-[#77828a]">{featuredProjects.length - 1} CASES</span>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {featuredProjects.slice(1).map((project, index) => (

                <ProjectCard key={project.id} project={project} lang={lang} index={index + 1} />

              ))}

            </div>

          </section>

        )}

        {/* Secondary projects */}

        <section className="pt-14">

          <div className="flex flex-col gap-4 border-b border-[#2b3137] pb-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b99a69]">04 / MORE EXPERIENCE</p>

              <h2 className="text-xl font-semibold text-[#efede8] md:text-2xl">{content.ui.moreTitle}</h2>

              <p className="mt-2 max-w-xl text-[12px] leading-relaxed text-[#7e8991]">

                {isRu ? 'Дополнительный опыт в операционных процессах, контент-маркетинге и GameDev.' : 'Additional experience in operations, content marketing and GameDev.'}

              </p>

            </div>

            <button

              type="button"

              onClick={() => setShowMore((value) => !value)}

              aria-expanded={showMore}

              aria-controls="secondary-projects"

              className="self-start rounded-full border border-[#4a535a] bg-[#12181e] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#d0b17b] transition hover:border-[#a98b5d] hover:bg-[#1a2228] sm:self-auto"

            >

              {showMore ? content.ui.hideProjectsLabel : `${content.ui.showProjectsLabel} (${secondaryProjects.length})`}

              <span className="ml-3" aria-hidden="true">{showMore ? '−' : '+'}</span>

            </button>

          </div>

          {showMore && (

            <div id="secondary-projects" className="space-y-8 pt-7">

              {SECONDARY_CATEGORIES.map((category) => {

                const categoryProjects = secondaryProjects.filter((project) => project.category === category);

                if (!categoryProjects.length) return null;

                return (

                  <div key={category}>

                    <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.19em] text-[#b99a69]">{content.ui.categoryLabels[category]}</h3>

                    <div className="grid gap-4 md:grid-cols-2">

                      {categoryProjects.map((project, index) => (

                        <ProjectCard key={project.id} project={project} lang={lang} index={index} />

                      ))}

                    </div>

                  </div>

                );

              })}

            </div>

          )}

        </section>

        {/* About */}

        <section id="about" className="scroll-mt-24 grid gap-9 border-y border-[#2a3036] py-14 md:grid-cols-[1.1fr_0.9fr] md:py-16">

          <div>

            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b99a69]">05 / PROFILE</p>

            <h2 className="mb-5 text-xl font-semibold text-[#efede8] md:text-2xl">{content.about.title}</h2>

            <div className="space-y-3">

              {content.about.text.map((paragraph, index) => (

                <p key={`about-${index}`} className="text-sm leading-7 text-[#a6afb5]">{paragraph}</p>

              ))}

            </div>

            <div className="mt-8">

              <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.19em] text-[#b99a69]">{content.about.educationTitle}</p>

              <div className="space-y-4">

                {content.about.education.map((education, index) => (

                  <div key={`${education.school}-${index}`} className="flex flex-col gap-1 border-l border-[#8b7450] pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">

                    <div>

                      <p className="text-[13px] font-semibold text-[#ddd9d1]">{education.degree}</p>

                      <p className="mt-1 text-[12px] text-[#808b93]">{education.school}</p>

                    </div>

                    <span className="font-mono text-[11px] text-[#a88d60]">{education.years}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          <aside className="rounded-xl border border-[#303840] bg-[#11171d] p-5 md:p-6">

            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.19em] text-[#b99a69]">{content.about.skillsTitle}</p>

            <ul className="space-y-3">

              {content.about.skills.map((skill, index) => (

                <li key={`${skill}-${index}`} className="flex gap-3 border-b border-[#293139] pb-3 text-[12px] leading-relaxed text-[#b3bbc0] last:border-0">

                  <span className="font-mono text-[11px] text-[#8e7957]">{String(index + 1).padStart(2, '0')}</span>

                  <span>{skill}</span>

                </li>

              ))}

            </ul>

          </aside>

        </section>

        {/* Contact */}

        <footer id="contact" className="scroll-mt-24 overflow-hidden rounded-xl border border-[#55462f] bg-[#14191e]">

          <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9">

            <div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b99a69]">06 / CONTACT</p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#eeeae2] md:text-3xl">{isRu ? 'Обсудим ваш следующий проект?' : 'Let’s discuss your next project.'}</h2>

              <p className="mt-3 text-[12px] text-[#8f9aa1]">{content.contacts.location}</p>

            </div>

            <div className="flex flex-wrap gap-3">

              <a href={`https://t.me/${content.contacts.telegram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d5ad6c] px-5 py-3 text-[12px] font-bold text-[#11151a] transition hover:bg-[#e6c486]">Telegram <ArrowUpRight /></a>

              <a href={`mailto:${content.contacts.email}`} className="inline-flex items-center gap-2 rounded-full border border-[#555e65] px-5 py-3 text-[12px] font-semibold text-[#d9d7d1] transition hover:border-[#b99a69]">{content.contacts.email} <ArrowUpRight /></a>

            </div>

          </div>

          <div className="flex flex-col gap-2 border-t border-[#343b40] px-6 py-4 text-[11px] text-[#6f7b83] sm:flex-row sm:items-center sm:justify-between md:px-9">

            <span>{content.contacts.name} · {isRu ? 'Портфолио' : 'Portfolio'}</span>

            <span className="font-mono uppercase tracking-[0.14em]">{content.contacts.location} · 2026</span>

          </div>

        </footer>

      </main>

    </div>

  );

}
