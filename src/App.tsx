import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA, type Category, type Lang } from './data/content';

const LANG_KEY = 'portfolio-lang';

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'ru' || saved === 'en') return saved;
  } catch {
    // localStorage может быть недоступен
  }
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const content = PORTFOLIO_DATA[lang];
  const { contacts } = content;
  const telegramUrl = `https://t.me/${contacts.telegram}`;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.hero.title;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // игнорируем
    }
  }, [lang, content.hero.title]);

  const filteredProjects =
    activeCategory === 'all'
      ? content.projects
      : content.projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12">
      <header className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 mb-12 border-b border-slate-800 pb-6">
        <div className="text-xl font-bold tracking-wide text-indigo-400">{contacts.name}</div>

        <div className="flex items-center gap-3">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 transition"
          >
            Telegram
          </a>

          <div className="bg-slate-800 p-1 rounded-xl flex gap-1 border border-slate-700">
            {(['ru', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition ${
                  lang === l ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-16">
        {/* Hero */}
        <section>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            {content.hero.subtitle}
          </p>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition"
          >
            {content.hero.cta}
          </a>
        </section>

        {/* Обо мне */}
        <section className="bg-slate-800/40 border border-slate-800 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-100">{content.about.title}</h2>
            {content.about.text.map((paragraph, idx) => (
              <p key={idx} className="text-sm md:text-base text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-indigo-400 mb-3">
                {content.about.educationTitle}
              </h3>
              <div className="space-y-3">
                {content.about.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-indigo-500/50 pl-3">
                    <p className="text-sm font-bold text-slate-200">{edu.degree}</p>
                    <p className="text-sm text-slate-400">
                      {edu.school} ({edu.years})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-sm font-semibold text-indigo-400">{content.about.skillsTitle}</h3>
            <ul className="space-y-2">
              {content.about.skills.map((skill, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Проекты */}
        <section>
          <div className="mb-8 flex flex-wrap gap-2">
            {(Object.keys(content.categories) as Category[]).map((catKey) => (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                aria-pressed={activeCategory === catKey}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition border ${
                  activeCategory === catKey
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                {content.categories[catKey]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const images = project.media?.filter((m) => m.type === 'image') ?? [];
              const linkCaption = project.media?.find((m) => m.type === 'link')?.caption;

              return (
                <article
                  key={project.id}
                  className="bg-slate-800/60 border border-slate-700/60 hover:border-indigo-500/50 transition p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-950 text-indigo-300 rounded-md border border-indigo-800/50">
                        {project.period}
                      </span>
                      {project.teamSize && (
                        <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                          {project.teamSize}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-slate-100">{project.title}</h3>
                    <p className="text-sm text-indigo-400 mb-4 font-medium">{project.role}</p>

                    {/* Главный результат */}
                    <div className="mb-4 rounded-lg bg-indigo-950/60 border border-indigo-800/50 p-3">
                      <p className="text-xs text-indigo-300 mb-1">{content.resultLabel}</p>
                      <p className="text-sm font-semibold text-slate-100 leading-snug">
                        {project.result}
                      </p>
                    </div>

                    {/* Превью. Для NDA-картинок лучше заранее размытый файл:
                        CSS-blur не защищает оригинал, его можно скачать. */}
                    {images.map((m) => (
                      <figure key={m.url} className="mb-4">
                        <img
                          src={m.url}
                          alt={m.caption ?? project.title}
                          loading="lazy"
                          className={`rounded-lg w-full ${m.isNdaBlurred ? 'blur-sm' : ''}`}
                        />
                        {m.caption && (
                          <figcaption className="text-xs text-slate-500 mt-1">{m.caption}</figcaption>
                        )}
                      </figure>
                    ))}

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="text-sm text-slate-400 space-y-1.5 mb-6 list-disc list-inside">
                      {project.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-sm text-indigo-400 hover:text-indigo-300 underline mb-4"
                      >
                        {linkCaption ?? project.link}
                      </a>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/40">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs bg-slate-900 text-slate-400 px-2 py-0.5 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Контакты */}
        <footer className="pt-8 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4 text-sm text-slate-400">
          <div>
            <p className="font-semibold text-slate-200">{contacts.name}</p>
            <p>{contacts.location}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              Telegram: @{contacts.telegram}
            </a>
            <a href={`mailto:${contacts.email}`} className="hover:text-indigo-400 transition">
              {contacts.email}
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
