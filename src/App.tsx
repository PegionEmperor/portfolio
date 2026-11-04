import { useState } from 'react';
import {
  PORTFOLIO_DATA,
  type Lang,
  type Project,
  type ProjectCategory,
} from './data/content';

const SECONDARY_CATEGORIES: ProjectCategory[] = ['pm', 'marketing', 'gamedev'];

type PlaceholderSpec = {
  title: { ru: string; en: string };
  note: { ru: string; en: string };
  tag: { ru: string; en: string };
};

const PROJECT_VISUALS: Record<string, PlaceholderSpec> = {
  trendbooks: {
    title: {
      ru: 'Здесь будет разворот аналитического трендбука',
      en: 'Analytical trendbook spread goes here',
    },
    note: {
      ru: 'Разворот с аналитикой, графиками и выводами. Конфиденциальные данные скрыть на исходном изображении.',
      en: 'A spread with research, charts and insights. Redact confidential data in the source image.',
    },
    tag: { ru: 'АНАЛИТИКА / ПРЕЗЕНТАЦИЯ', en: 'RESEARCH / PRESENTATION' },
  },
  'kita-rebranding': {
    title: {
      ru: 'Здесь будут материалы ребрендинга KITA',
      en: 'KITA rebranding materials go here',
    },
    note: {
      ru: 'Лучше показать логотип, упаковку и оформление торговой точки в формате «концепция / результат».',
      en: 'Show the logo, packaging and store design as a concept-to-result comparison.',
    },
    tag: { ru: 'БРЕНДИНГ / ДИЗАЙН', en: 'BRANDING / DESIGN' },
  },
  'rd-shelf-life': {
    title: {
      ru: 'Здесь будут фото эксперимента и график проверок',
      en: 'Experiment photos and test timeline go here',
    },
    note: {
      ru: 'Фото образцов, условий хранения и обезличенный фрагмент лабораторного отчёта.',
      en: 'Product samples, storage conditions and a redacted extract from the lab report.',
    },
    tag: { ru: 'R&D / ИССЛЕДОВАНИЕ', en: 'R&D / RESEARCH' },
  },
  'digital-showcase': {
    title: {
      ru: 'Здесь будут скриншоты цифровой витрины PACK-5',
      en: 'PACK-5 digital showcase screenshots go here',
    },
    note: {
      ru: 'Скриншоты страниц сайта и прототип калькулятора из Figma.',
      en: 'Website page screenshots and the calculator prototype from Figma.',
    },
    tag: { ru: 'DIGITAL / WEB', en: 'DIGITAL / WEB' },
  },
  'gamedev-crystalix-raft': {
    title: {
      ru: 'Здесь будут примеры 3D-моделей и игровых сцен',
      en: '3D assets and game scene examples go here',
    },
    note: {
      ru: 'Подборка моделей окружения, построек и игровых объектов для пяти эпох.',
      en: 'A selection of environment assets, buildings and game objects across five eras.',
    },
    tag: { ru: 'GAMEDEV / 3D', en: 'GAMEDEV / 3D' },
  },
};

const FALLBACK_VISUAL: PlaceholderSpec = {
  title: {
    ru: 'Здесь будет визуальный пример проекта',
    en: 'Project visual goes here',
  },
  note: {
    ru: 'Добавь изображение, макет или фрагмент результата работы.',
    en: 'Add an image, mockup or an extract of the final deliverable.',
  },
  tag: { ru: 'PROJECT / VISUAL', en: 'PROJECT / VISUAL' },
};

function VisualPlaceholder({
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
  const spec = PROJECT_VISUALS[project.id] ?? FALLBACK_VISUAL;
  const isRu = lang === 'ru';

  return (
    <div
      className={`group relative isolate flex overflow-hidden rounded-2xl border border-[#343b43] bg-[#11161c] ${
        compact ? 'min-h-[190px]' : 'min-h-[280px] md:min-h-[350px]'
      }`}
      role="img"
      aria-label={`${spec.title[lang]}. ${spec.note[lang]}`}
    >
      <div
        className="absolute inset-0 -z-20 opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(circle at 78% 18%, rgba(190,151,91,0.16), transparent 34%), linear-gradient(135deg, #171e25 0%, #0e1319 55%, #171b20 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(210,218,224,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(210,218,224,0.16) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          maskImage: 'linear-gradient(to bottom right, black, transparent 85%)',
        }}
      />

      <div className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.22em] text-[#737d86]">
        {String(index).padStart(2, '0')} / VISUAL
      </div>

      <div className="m-auto flex w-full max-w-lg flex-col items-center px-6 py-10 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#725d3c]/60 bg-[#b99763]/10 text-[#c4a36f]">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden="true">
            <rect x="3.2" y="4.2" width="17.6" height="15.6" rx="2" />
            <circle cx="8.5" cy="9" r="1.5" />
            <path d="m4.5 17 5-4.8 3.2 3 2.3-2 4.5 4.1" />
          </svg>
        </div>
        <span className="mb-3 font-mono text-[10px] font-semibold tracking-[0.2em] text-[#b99a69]">
          {spec.tag[lang]}
        </span>
        <h4 className={`max-w-md font-semibold leading-snug text-[#e7e4de] ${compact ? 'text-sm' : 'text-base md:text-lg'}`}>
          {spec.title[lang]}
        </h4>
        {!compact && (
          <p className="mt-3 max-w-md text-xs leading-relaxed text-[#89939b]">
            {spec.note[lang]}
          </p>
        )}
        <span className="mt-6 rounded-full border border-dashed border-[#626b72] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#7f8991]">
          {isRu ? 'Место для изображения' : 'Image placeholder'}
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#9b8057]/60 to-transparent" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 border-b border-[#2b3239] pb-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b99a69]">{eyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#eeece7] md:text-3xl">{title}</h2>
      </div>
      {note && <p className="max-w-md text-xs leading-relaxed text-[#818b94] md:text-right">{note}</p>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = PORTFOLIO_DATA[lang];
  const featuredProjects = content.projects.filter((project: Project) => project.featured);
  const secondaryProjects = content.projects.filter((project: Project) => !project.featured);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const isRu = lang === 'ru';

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0e12] font-sans text-[#e8e6e1] selection:bg-[#b99a69] selection:text-[#0b0e12]">
      <div
        className="pointer-events-none fixed inset-0 -z-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 12% 0%, rgba(185,154,105,0.08), transparent 36%), radial-gradient(ellipse at 90% 24%, rgba(105,122,137,0.08), transparent 32%)',
        }}
      />

      <header className="sticky top-0 z-50 border-b border-[#252c33] bg-[#0b0e12]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#top" onClick={closeMobileMenu} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#6d5b3f] bg-[#b99a69]/10 font-mono text-xs font-bold text-[#c8aa78]">DY</span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#e9e6df]">{content.contacts.name}</span>
              <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.2em] text-[#78838c]">Project Management</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-xs text-[#9aa3aa] md:flex" aria-label={content.ui.mainNavigationLabel}>
            <a href="#cases" className="transition hover:text-[#d7c19a]">{content.nav.cases}</a>
            <a href="#process" className="transition hover:text-[#d7c19a]">{content.nav.process}</a>
            <a href="#about" className="transition hover:text-[#d7c19a]">{content.nav.about}</a>
            <a href="#contact" className="transition hover:text-[#d7c19a]">{content.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-[#303840] bg-[#131920] p-1" aria-label={content.ui.languageLabel}>
              {(['ru', 'en'] as Lang[]).map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => setLang(language)}
                  aria-pressed={lang === language}
                  className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] font-bold transition ${
                    lang === language ? 'bg-[#b99a69] text-[#101317]' : 'text-[#84909a] hover:text-[#e8e6e1]'
                  }`}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="rounded-lg border border-[#303840] bg-[#131920] px-3 py-2 text-xs text-[#c1c7cb] md:hidden"
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
            <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 text-sm text-[#bbc2c7]">
              <a href="#cases" onClick={closeMobileMenu}>{content.nav.cases}</a>
              <a href="#process" onClick={closeMobileMenu}>{content.nav.process}</a>
              <a href="#about" onClick={closeMobileMenu}>{content.nav.about}</a>
              <a href="#contact" onClick={closeMobileMenu}>{content.nav.contact}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pt-20">
        {/* Hero */}
        <section className="grid items-center gap-10 border-b border-[#2b3239] pb-14 md:grid-cols-[1.2fr_0.8fr] md:gap-14 md:pb-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#65553d] bg-[#b99a69]/[0.08] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c1a16d]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c5a979]">{content.hero.title}</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#f0eee9] sm:text-5xl md:text-6xl">
              {content.contacts.name}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7b0b6] md:text-base md:leading-8">
              {content.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`https://t.me/${content.contacts.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#b99a69] px-5 py-3 text-xs font-bold text-[#11151a] transition hover:bg-[#d0b486]"
              >
                {content.hero.cta}<span aria-hidden="true">↗</span>
              </a>
              <a
                href={content.contacts.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#424b53] bg-[#151b21] px-5 py-3 text-xs font-semibold text-[#d8d8d4] transition hover:border-[#8a7655] hover:text-[#e9d7b5]"
              >
                {content.hero.resumeLabel}<span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-3 border-t border-[#2b3239] pt-6 sm:grid-cols-3">
              {content.hero.stats.map((stat, index) => (
                <div key={`${stat.value}-${index}`} className="min-w-0">
                  <div className="font-mono text-2xl font-semibold tracking-tight text-[#d3b889] md:text-3xl">{stat.value}</div>
                  <div className="mt-1 max-w-[170px] text-[11px] leading-relaxed text-[#818c95]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#9b8057]/15" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-[#39424a] bg-[#121920] p-3 shadow-2xl shadow-black/30">
              <div className="relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[1.2rem] border border-dashed border-[#59636b] bg-[#0f141a] px-7 py-10 text-center md:min-h-[430px]">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(185,154,105,0.2), transparent 45%)' }} />
                <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#8c744e]/60 bg-[#b99a69]/10 font-mono text-2xl tracking-widest text-[#c7aa78]">DY</div>
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-[#c0a172]">{isRu ? 'Портрет / рабочее фото' : 'Portrait / working photo'}</p>
                <h2 className="relative mt-3 max-w-xs text-lg font-medium leading-snug text-[#e2dfd8]">
                  {isRu ? 'Здесь будет портрет или фотография в рабочей обстановке' : 'Portrait or a photograph in a working environment goes here'}
                </h2>
                <p className="relative mt-3 max-w-xs text-xs leading-relaxed text-[#77838c]">
                  {isRu ? 'Нейтральный деловой кадр без формального фотостока.' : 'A natural professional portrait, not a generic stock photo.'}
                </p>
                <span className="relative mt-7 rounded-full border border-[#4a535b] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#77838c]">
                  {isRu ? 'Заглушка изображения' : 'Image placeholder'}
                </span>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6f7a83]">
                <span>Kaliningrad / Remote</span>
                <span>Portfolio — 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured cases */}
        <section id="cases" className="scroll-mt-28 pt-16 md:pt-20">
          <SectionHeading
            eyebrow="01 / Selected work"
            title={content.ui.casesTitle}
            note={isRu ? 'Четыре проекта, которые лучше всего показывают мой подход к управлению, аналитике и работе с командами.' : 'Four projects that best demonstrate my approach to management, research and cross-functional collaboration.'}
          />

          <div className="space-y-7">
            {featuredProjects.map((project, index) => (
              <article key={project.id} className="overflow-hidden rounded-2xl border border-[#303840] bg-[#11171d] shadow-xl shadow-black/10 transition duration-300 hover:border-[#62563f]">
                <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                  <div className="flex flex-col p-6 md:p-8 lg:p-9">
                    <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b99a69]">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-[#58636c]">/</span>
                      <span>{project.period}</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#eeece7] md:text-[1.7rem]">{project.title}</h3>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#9a835e]">{project.role}</p>
                    <p className="mt-5 text-sm leading-7 text-[#a8b0b6]">{project.description}</p>

                    <div className="mt-6 rounded-xl border border-[#6c593d]/50 bg-[#b99a69]/[0.07] p-4">
                      <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c2a575]">{content.ui.resultLabel}</p>
                      <p className="text-xs leading-relaxed text-[#dedbd4]">{project.result}</p>
                    </div>

                    <div className="mt-6 space-y-2">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#78848d]">{isRu ? 'Мой вклад' : 'My contribution'}</p>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={`${project.id}-achievement-${achievementIndex}`} className="flex gap-3 text-xs leading-relaxed text-[#aeb6bb]">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#b99a69]" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.team && project.team.length > 0 && (
                      <div className="mt-6 border-t border-[#2a3239] pt-5">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#78848d]">{content.ui.teamLabel}</p>
                          {project.teamSize && <span className="text-[10px] text-[#b99a69]">{project.teamSize}</span>}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.team.map((member, memberIndex) => (
                            <span key={`${member}-${memberIndex}`} className="rounded-md border border-[#333d45] bg-[#171f26] px-2.5 py-1.5 text-[10px] text-[#aab3ba]">{member}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[#2a3239] pt-5">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded border border-[#303941] bg-[#0c1116] px-2 py-1 font-mono text-[9px] text-[#7e8991]">{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[#2c343c] bg-[#0d1217] p-4 md:border-l md:border-t-0 md:p-5">
                    {project.media?.filter((item) => item.type === 'image').slice(0, 1).map((item, mediaIndex) => (
                      <VisualPlaceholder key={item.url} project={project} lang={lang} index={index + 1 + mediaIndex} />
                    ))}
                    {(!project.media || !project.media.some((item) => item.type === 'image')) && (
                      <VisualPlaceholder project={project} lang={lang} index={index + 1} />
                    )}
                    {project.media?.filter((item) => item.type === 'link').map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-[#343e46] bg-[#141b21] px-4 py-3 text-xs text-[#c8ac7d] transition hover:border-[#9c8158]"
                      >
                        <span>{item.caption || item.url}</span><span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-28 pt-16 md:pt-20">
          <SectionHeading
            eyebrow="02 / Workflow"
            title={content.process.title}
            note={isRu ? 'От постановки задачи до передачи согласованного результата.' : 'From initial brief to approved delivery.'}
          />
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#303840] bg-[#303840] sm:grid-cols-2 lg:grid-cols-5">
            {content.process.steps.map((step, index) => (
              <div key={`${step.title}-${index}`} className="flex min-h-[190px] flex-col bg-[#11171d] p-5 md:p-6">
                <span className="font-mono text-3xl font-light text-[#927a55]">{String(index + 1).padStart(2, '0')}</span>
                <div className="mt-auto pt-8">
                  <h3 className="text-sm font-semibold text-[#e5e2dc]">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#89949c]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI */}
        <section className="pt-16 md:pt-20">
          <div className="overflow-hidden rounded-2xl border border-[#5a4b35] bg-[#151a1f]">
            <div className="grid md:grid-cols-[0.7fr_1.3fr]">
              <div className="border-b border-[#393b38] p-6 md:border-b-0 md:border-r md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#b99a69]">03 / AI tools</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#eeeae1]">{content.ai.title}</h2>
                <p className="mt-3 text-xs leading-relaxed text-[#8f999f]">
                  {isRu ? 'Практическое применение в аналитике, контенте и повседневных рабочих процессах.' : 'Practical application in research, content production and everyday workflows.'}
                </p>
              </div>
              <div className="grid grid-cols-1 divide-y divide-[#353b40] md:grid-cols-3 md:divide-x md:divide-y-0">
                {content.ai.points.map((point, index) => (
                  <div key={`${point}-${index}`} className="flex gap-3 p-5 md:flex-col md:p-6">
                    <span className="font-mono text-xs text-[#b99a69]">0{index + 1}</span>
                    <p className="text-xs leading-relaxed text-[#bdc2c2]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Secondary projects */}
        <section className="pt-16 md:pt-20">
          <SectionHeading
            eyebrow="04 / More experience"
            title={content.ui.moreTitle}
            note={isRu ? 'Дополнительный опыт в операционных процессах, контент-маркетинге и GameDev.' : 'Additional experience in operations, content marketing and GameDev.'}
          />
          <div className="mb-5 flex justify-end">
            <button
              type="button"
              onClick={() => setShowMore((visible) => !visible)}
              aria-expanded={showMore}
              aria-controls="secondary-projects"
              className="rounded-lg border border-[#424b52] bg-[#141a20] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#c4a777] transition hover:border-[#8a7655] hover:bg-[#1a2229]"
            >
              {showMore ? content.ui.hideProjectsLabel : `${content.ui.showProjectsLabel} (${secondaryProjects.length})`}
              <span className="ml-3" aria-hidden="true">{showMore ? '−' : '+'}</span>
            </button>
          </div>

          {showMore && (
            <div id="secondary-projects" className="space-y-9">
              {SECONDARY_CATEGORIES.map((category) => {
                const categoryProjects = secondaryProjects.filter((project) => project.category === category);
                if (categoryProjects.length === 0) return null;
                return (
                  <div key={category} className="space-y-4">
                    <h3 className="border-b border-[#2b3239] pb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b99a69]">
                      {content.ui.categoryLabels[category]}
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {categoryProjects.map((project) => {
                        const hasVisual = project.media?.some((item) => item.type === 'image') ?? false;
                        return (
                        <article key={project.id} className="overflow-hidden rounded-xl border border-[#303840] bg-[#11171d] transition hover:border-[#62563f]">
                          <div className={hasVisual ? 'grid sm:grid-cols-[0.85fr_1.15fr]' : 'grid grid-cols-1'}>
                            <div className="p-5">
                              <p className="font-mono text-[10px] text-[#b99a69]">{project.period}</p>
                              <h4 className="mt-2 text-base font-semibold leading-snug text-[#e8e5df]">{project.title}</h4>
                              <p className="mt-2 text-[10px] uppercase tracking-wide text-[#8f7956]">{project.role}</p>
                              <p className="mt-3 text-xs leading-relaxed text-[#929da4]">{project.description}</p>
                              {project.result && <p className="mt-4 border-l-2 border-[#8f7956] pl-3 text-[11px] leading-relaxed text-[#c8b38e]">{project.result}</p>}
                              <div className="mt-4 flex flex-wrap gap-1">
                                {project.tools.slice(0, 5).map((tool) => <span key={tool} className="rounded border border-[#303941] px-2 py-1 font-mono text-[9px] text-[#7e8991]">{tool}</span>)}
                              </div>
                            </div>
                            {hasVisual && (
                              <div className="border-t border-[#2c343c] bg-[#0d1217] p-3 sm:border-l sm:border-t-0">
                                <VisualPlaceholder project={project} lang={lang} index={categoryProjects.indexOf(project) + 1} compact />
                              </div>
                            )}
                          </div>
                        </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 grid gap-10 border-y border-[#2b3239] py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <div>
            <SectionHeading eyebrow="05 / Profile" title={content.about.title} />
            <div className="space-y-4">
              {content.about.text.map((paragraph, index) => (
                <p key={`about-${index}`} className="text-sm leading-7 text-[#a8b0b6]">{paragraph}</p>
              ))}
            </div>
            <div className="mt-9">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b99a69]">{content.about.educationTitle}</p>
              <div className="space-y-4">
                {content.about.education.map((education, index) => (
                  <div key={`${education.school}-${index}`} className="flex flex-col gap-1 border-l border-[#8b7450] pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#dcd9d2]">{education.degree}</p>
                      <p className="mt-1 text-xs text-[#808b93]">{education.school}</p>
                    </div>
                    <span className="font-mono text-[10px] text-[#a88d60]">{education.years}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-[#303840] bg-[#11171d] p-6 md:p-7">
            <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b99a69]">{content.about.skillsTitle}</p>
            <ul className="space-y-3">
              {content.about.skills.map((skill, index) => (
                <li key={`${skill}-${index}`} className="flex gap-3 border-b border-[#293139] pb-3 text-xs leading-relaxed text-[#b3bbc0] last:border-0">
                  <span className="font-mono text-[10px] text-[#8e7957]">{String(index + 1).padStart(2, '0')}</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Contact */}
        <footer id="contact" className="scroll-mt-28 overflow-hidden rounded-2xl border border-[#4b4234] bg-[#151a1f]">
          <div className="grid gap-7 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#b99a69]">06 / Contact</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#eeeae2] md:text-3xl">
                {isRu ? 'Обсудим ваш следующий проект?' : 'Let’s discuss your next project.'}
              </h2>
              <p className="mt-3 text-xs text-[#8f9aa1]">{content.contacts.location}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`https://t.me/${content.contacts.telegram}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#b99a69] px-5 py-3 text-xs font-bold text-[#11151a] transition hover:bg-[#d0b486]">
                Telegram ↗
              </a>
              <a href={`mailto:${content.contacts.email}`} className="rounded-lg border border-[#454e55] px-5 py-3 text-xs font-semibold text-[#d9d7d1] transition hover:border-[#a38a62]">
                Email ↗
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-[#363b3d] px-7 py-4 text-[10px] text-[#6f7b83] sm:flex-row sm:items-center sm:justify-between md:px-10">
            <span>{content.contacts.name} · {isRu ? 'Портфолио' : 'Portfolio'}</span>
            <span className="font-mono uppercase tracking-[0.14em]">Kaliningrad / Remote · 2026</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
