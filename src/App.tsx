import { useState } from 'react';
import { PORTFOLIO_DATA, type Lang, type Project } from './data/content';

export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [showMore, setShowMore] = useState(false);

  const content = PORTFOLIO_DATA[lang];

  const featuredProjects = content.projects.filter((p: Project) => p.featured);
  const secondaryProjects = content.projects.filter((p: Project) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Шапка / Навигация */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-mono font-bold tracking-wider text-amber-400 text-sm uppercase">
            {content.contacts.name} <span className="text-slate-500 text-xs hidden sm:inline">| PM</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#cases" className="hover:text-slate-200 transition">{content.nav.cases}</a>
            <a href="#process" className="hover:text-slate-200 transition">{content.nav.process}</a>
            <a href="#about" className="hover:text-slate-200 transition">{content.nav.about}</a>
            <a href="#contact" className="hover:text-slate-200 transition">{content.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setLang('ru')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition ${
                lang === 'ru' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition ${
                lang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-20">
        {/* Блок Hero */}
        <section className="space-y-8 border-b border-slate-800/80 pb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md text-amber-400 text-xs font-mono tracking-wide uppercase">
              {content.hero.title}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-50 leading-tight">
              {content.hero.subtitle}
            </h1>
          </div>

          {/* 3 Ключевые цифры */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {content.hero.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl border-l-4 border-l-amber-500">
                <div className="text-3xl font-black text-amber-400 font-mono tracking-tight">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Кнопки CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`https://t.me/${content.contacts.telegram}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition shadow-lg shadow-amber-500/10 flex items-center gap-2"
            >
              💬 {content.hero.cta}
            </a>
            <a
              href={content.contacts.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm rounded-xl transition flex items-center gap-2"
            >
              📄 {content.hero.resumeLabel}
            </a>
          </div>
        </section>

        {/* Главные кейсы (Featured) */}
        <section id="cases" className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              {content.ui.casesTitle}
            </h2>
            <span className="text-xs font-mono text-slate-500 uppercase">{featuredProjects.length} Cases</span>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition rounded-2xl p-6 md:p-8 space-y-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/60 pb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-mono font-medium mb-1">
                      <span>{project.period}</span>
                      <span>•</span>
                      <span>{project.role}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50">{project.title}</h3>
                  </div>
                  {project.teamSize && (
                    <span className="text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-lg">
                      👥 {project.teamSize}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

                {/* Состав команды */}
                {project.team && project.team.length > 0 && (
                  <div className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                      {content.ui.teamLabel}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.team.map((member, idx) => (
                        <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Выделенный блок результата */}
                {project.result && (
                  <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold block mb-1">
                      {content.ui.resultLabel}:
                    </span>
                    <p className="text-sm font-semibold text-slate-100">{project.result}</p>
                  </div>
                )}

                {/* Ключевые достижения */}
                {project.achievements && project.achievements.length > 0 && (
                  <div className="space-y-2">
                    <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                      {project.achievements.map((item, idx) => (
                        <li key={idx} className="marker:text-amber-500">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Медиа / Ссылки */}
                {project.media && project.media.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-4">
                    {project.media.map((item, idx) => (
                      item.type === 'link' ? (
                        <a
                          key={idx}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 underline"
                        >
                          🔗 {item.caption || item.url}
                        </a>
                      ) : (
                        <div key={idx} className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                          <span className="text-amber-400">🖼️</span>
                          <span>{item.caption || `${content.ui.imageMissing} ${item.url}`}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Инструменты */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[11px] font-mono bg-slate-950 text-slate-400 px-2.5 py-1 rounded border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Блок "Как я веду проект" (Процесс) */}
        <section id="process" className="space-y-8 bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            {content.process.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {content.process.steps.map((step, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
                <div className="text-2xl font-black font-mono text-amber-500">0{idx + 1}</div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Блок ИИ и Раскрывающийся список остальных проектов */}
        <section className="space-y-8">
          {/* Баннер ИИ */}
          <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 p-6 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-amber-400 flex items-center gap-2">
              ⚡ {content.ai.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.ai.points.map((pt, idx) => (
                <div key={idx} className="text-xs text-slate-300 bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Раскрывающийся блок остальных проектов */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-slate-200">{content.ui.moreTitle}</h3>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-xs font-mono bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-400 px-4 py-2 rounded-xl transition"
              >
                {showMore ? 'Свернуть ▲' : `Показать еще проекты (${secondaryProjects.length}) ▼`}
              </button>
            </div>

            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {secondaryProjects.map((project) => (
                  <div key={project.id} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-xs font-mono text-amber-400">{project.period}</span>
                        <span className="text-[10px] uppercase font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-100">{project.title}</h4>
                      <p className="text-xs text-slate-400">{project.role}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>
                      {project.result && (
                        <p className="text-xs text-amber-300 font-semibold pt-1">🎯 {project.result}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Блок Обо мне и Образование */}
        <section id="about" className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              {content.about.title}
            </h2>
            {content.about.text.map((paragraph, idx) => (
              <p key={idx} className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                {content.about.educationTitle}
              </h3>
              <div className="space-y-3">
                {content.about.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-amber-500/60 pl-3 space-y-0.5">
                    <p className="text-xs font-bold text-slate-200">{edu.degree}</p>
                    <p className="text-xs text-slate-400">{edu.school} ({edu.years})</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
              {content.about.skillsTitle}
            </h3>
            <ul className="space-y-2">
              {content.about.skills.map((skill, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Футер / Контакты */}
        <footer id="contact" className="pt-8 border-t border-slate-800 flex flex-wrap justify-between items-center gap-6 text-xs text-slate-400">
          <div>
            <p className="font-bold text-slate-100 text-sm">{content.contacts.name}</p>
            <p className="text-slate-400">{content.contacts.location}</p>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href={`https://t.me/${content.contacts.telegram}`}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold transition flex items-center gap-1.5"
            >
              <span>💬</span> Telegram: @{content.contacts.telegram}
            </a>
            <a href={`mailto:${content.contacts.email}`} className="hover:text-slate-200 transition flex items-center gap-1.5">
              <span>✉️</span> {content.contacts.email}
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
