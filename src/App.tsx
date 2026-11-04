import { useState } from 'react';
import {
  PORTFOLIO_DATA,
  type Lang,
  type Project,
  type ProjectCategory,
} from './data/content';

const SECONDARY_CATEGORIES: ProjectCategory[] = ['pm', 'marketing', 'gamedev'];

export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = PORTFOLIO_DATA[lang];
  const featuredProjects = content.projects.filter((project: Project) => project.featured);
  const secondaryProjects = content.projects.filter((project: Project) => !project.featured);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a
            href="#top"
            className="text-sm font-bold uppercase tracking-wider text-amber-400"
            onClick={closeMobileMenu}
          >
            {content.contacts.name}
            <span className="ml-2 hidden font-mono text-xs font-normal text-slate-500 sm:inline">
              / PROJECT MANAGEMENT
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-400 md:flex" aria-label={content.ui.mainNavigationLabel}>
            <a href="#cases" className="transition hover:text-slate-100">{content.nav.cases}</a>
            <a href="#process" className="transition hover:text-slate-100">{content.nav.process}</a>
            <a href="#about" className="transition hover:text-slate-100">{content.nav.about}</a>
            <a href="#contact" className="transition hover:text-slate-100">{content.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-1" aria-label={content.ui.languageLabel}>
              <button
                type="button"
                onClick={() => setLang('ru')}
                aria-pressed={lang === 'ru'}
                className={`rounded px-2.5 py-1 text-xs font-bold transition ${
                  lang === 'ru' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`rounded px-2.5 py-1 text-xs font-bold transition ${
                  lang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-300 md:hidden"
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
          <nav
            id="mobile-navigation"
            className="border-t border-slate-800 px-6 py-3 md:hidden"
            aria-label={content.ui.mainNavigationLabel}
          >
            <div className="mx-auto flex max-w-5xl flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
              <a href="#cases" onClick={closeMobileMenu}>{content.nav.cases}</a>
              <a href="#process" onClick={closeMobileMenu}>{content.nav.process}</a>
              <a href="#about" onClick={closeMobileMenu}>{content.nav.about}</a>
              <a href="#contact" onClick={closeMobileMenu}>{content.nav.contact}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="mx-auto max-w-5xl space-y-20 px-6 py-12 md:py-16">
        {/* Hero */}
        <section className="space-y-8 border-b border-slate-800/80 pb-12">
          <div className="max-w-3xl space-y-4">
            <p className="inline-block rounded-md border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-amber-400">
              {content.hero.title}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl">
              {content.contacts.name}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {content.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {content.hero.stats.map((stat, index) => (
              <div
                key={`${stat.value}-${index}`}
                className="rounded-xl border border-slate-800 border-l-4 border-l-amber-500 bg-slate-900/90 p-5"
              >
                <div className="font-mono text-3xl font-black tracking-tight text-amber-400">{stat.value}</div>
                <div className="mt-1 text-xs font-medium leading-snug text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://t.me/${content.contacts.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-400"
            >
              {content.hero.cta}
            </a>
            <a
              href={content.contacts.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              {content.hero.resumeLabel}
            </a>
          </div>
        </section>

        {/* Featured cases */}
        <section id="cases" className="scroll-mt-24 space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-800 pb-4">
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-100">
              <span className="h-3 w-3 rounded-full bg-amber-500" aria-hidden="true" />
              {content.ui.casesTitle}
            </h2>
            <span className="font-mono text-xs uppercase text-slate-500">
              {featuredProjects.length} {content.ui.casesCountLabel}
            </span>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/60 pb-4">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-xs font-medium text-amber-400">
                      <span>{project.period}</span>
                      <span aria-hidden="true">•</span>
                      <span>{project.role}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50">{project.title}</h3>
                  </div>
                  {project.teamSize && (
                    <span className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 font-mono text-xs text-slate-300">
                      {project.teamSize}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

                {project.media && project.media.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.media.map((item, index) =>
                      item.type === 'link' ? (
                        <a
                          key={`${item.url}-${index}`}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-24 items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-amber-400 transition hover:border-amber-500/50 hover:text-amber-300"
                        >
                          <span>{item.caption || item.url}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <figure key={`${item.url}-${index}`} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                          <img
                            src={item.url}
                            alt={item.caption || project.title}
                            loading="lazy"
                            decoding="async"
                            className="max-h-[420px] w-full object-contain"
                          />
                          {item.caption && (
                            <figcaption className="border-t border-slate-800 px-3 py-2 text-xs text-slate-400">
                              {item.caption}
                            </figcaption>
                          )}
                        </figure>
                      ),
                    )}
                  </div>
                )}

                {project.team && project.team.length > 0 && (
                  <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-950/50 p-4">
                    <span className="block font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                      {content.ui.teamLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.team.map((member, index) => (
                        <span
                          key={`${member}-${index}`}
                          className="rounded-md border border-slate-700/50 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.result && (
                  <div className="rounded-r-xl border-l-4 border-amber-500 bg-amber-500/10 p-4">
                    <span className="mb-1 block font-mono text-xs font-bold uppercase text-amber-400">
                      {content.ui.resultLabel}
                    </span>
                    <p className="text-sm font-semibold leading-relaxed text-slate-100">{project.result}</p>
                  </div>
                )}

                {project.achievements.length > 0 && (
                  <ul className="list-inside list-disc space-y-2 text-xs leading-relaxed text-slate-300 marker:text-amber-500">
                    {project.achievements.map((item, index) => (
                      <li key={`${project.id}-achievement-${index}`}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 border-t border-slate-800/60 pt-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Project process */}
        <section id="process" className="scroll-mt-24 space-y-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-100">
            <span className="h-3 w-3 rounded-full bg-amber-500" aria-hidden="true" />
            {content.process.title}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {content.process.steps.map((step, index) => (
              <div
                key={`${step.title}-${index}`}
                className="flex flex-col justify-between space-y-3 rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="font-mono text-2xl font-black text-amber-500">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-slate-100">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI and secondary cases */}
        <section className="space-y-8">
          <div className="space-y-4 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 p-6">
            <h2 className="text-xl font-bold text-amber-400">{content.ai.title}</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {content.ai.points.map((point, index) => (
                <div
                  key={`${point}-${index}`}
                  className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950/80 p-3 text-xs leading-relaxed text-slate-300"
                >
                  <span className="text-amber-400" aria-hidden="true">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-slate-200">{content.ui.moreTitle}</h2>
              <button
                type="button"
                onClick={() => setShowMore((visible) => !visible)}
                aria-expanded={showMore}
                aria-controls="secondary-projects"
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-xs text-amber-400 transition hover:bg-slate-800"
              >
                {showMore ? content.ui.hideProjectsLabel : `${content.ui.showProjectsLabel} (${secondaryProjects.length})`}
              </button>
            </div>

            {showMore && (
              <div id="secondary-projects" className="space-y-8 pt-2">
                {SECONDARY_CATEGORIES.map((category) => {
                  const categoryProjects = secondaryProjects.filter((project) => project.category === category);
                  if (categoryProjects.length === 0) return null;

                  return (
                    <section key={category} className="space-y-4" aria-label={content.ui.categoryLabels[category]}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                        {content.ui.categoryLabels[category]}
                      </h3>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {categoryProjects.map((project) => (
                          <article
                            key={project.id}
                            className="flex flex-col justify-between space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                          >
                            <div className="space-y-3">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-mono text-xs text-amber-400">{project.period}</span>
                                {project.teamSize && (
                                  <span className="text-[10px] text-slate-500">{project.teamSize}</span>
                                )}
                              </div>
                              <h4 className="text-lg font-bold text-slate-100">{project.title}</h4>
                              <p className="text-xs text-slate-400">{project.role}</p>
                              <p className="text-xs leading-relaxed text-slate-300">{project.description}</p>
                              {project.media?.filter((item) => item.type === 'image').slice(0, 1).map((item) => (
                                <figure key={item.url} className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
                                  <img
                                    src={item.url}
                                    alt={item.caption || project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-h-56 w-full object-contain"
                                  />
                                </figure>
                              ))}
                              {project.result && (
                                <p className="border-l-2 border-amber-500 pl-3 pt-1 text-xs font-semibold leading-relaxed text-amber-300">
                                  {project.result}
                                </p>
                              )}
                              {project.media?.some((item) => item.type === 'link') && (
                                <div className="flex flex-wrap gap-3">
                                  {project.media
                                    .filter((item) => item.type === 'link')
                                    .map((item) => (
                                      <a
                                        key={item.url}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-amber-400 underline transition hover:text-amber-300"
                                      >
                                        {item.caption || item.url}
                                      </a>
                                    ))}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-1.5 border-t border-slate-800 pt-3">
                              {project.tools.map((tool) => (
                                <span key={tool} className="rounded bg-slate-950 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 grid grid-cols-1 gap-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-3 md:p-8">
          <div className="space-y-4 md:col-span-2">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-100">
              <span className="h-3 w-3 rounded-full bg-amber-500" aria-hidden="true" />
              {content.about.title}
            </h2>
            {content.about.text.map((paragraph, index) => (
              <p key={`about-${index}`} className="text-xs leading-relaxed text-slate-300 md:text-sm">
                {paragraph}
              </p>
            ))}

            <div className="space-y-3 pt-4">
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                {content.about.educationTitle}
              </h3>
              {content.about.education.map((education, index) => (
                <div key={`${education.school}-${index}`} className="space-y-0.5 border-l-2 border-amber-500/60 pl-3">
                  <p className="text-xs font-bold text-slate-200">{education.degree}</p>
                  <p className="text-xs text-slate-400">{education.school} ({education.years})</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 border-t border-slate-800 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
              {content.about.skillsTitle}
            </h3>
            <ul className="space-y-2">
              {content.about.skills.map((skill, index) => (
                <li key={`${skill}-${index}`} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacts */}
        <footer id="contact" className="scroll-mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-slate-800 pt-8 text-xs text-slate-400">
          <div>
            <p className="text-sm font-bold text-slate-100">{content.contacts.name}</p>
            <p>{content.contacts.location}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`https://t.me/${content.contacts.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 transition hover:text-amber-300"
            >
              Telegram: @{content.contacts.telegram}
            </a>
            <a href={`mailto:${content.contacts.email}`} className="transition hover:text-slate-200">
              {content.contacts.email}
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
