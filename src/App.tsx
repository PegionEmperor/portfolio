import { useState } from 'react';
import { PORTFOLIO_DATA, type Category, type Lang } from './data/content';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lang, setLang] = useState<Lang>('ru');

  const currentContent = PORTFOLIO_DATA[lang];

  const filteredProjects = activeCategory === 'all'
    ? currentContent.projects
    : currentContent.projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12">
      <header className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 mb-12 border-b border-slate-800 pb-6">
        <div className="text-xl font-bold tracking-wider text-indigo-400">DANIL YAKOVENKO</div>
        
        {/* Переключатель языка */}
        <div className="bg-slate-800 p-1 rounded-xl flex gap-1 border border-slate-700">
          <button
            onClick={() => setLang('ru')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              lang === 'ru' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            RU
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            EN
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {currentContent.hero.title}
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            {currentContent.hero.subtitle}
          </p>
        </section>

        {/* Блок "Обо мне", образование и навыки */}
        <section className="bg-slate-800/40 border border-slate-800 p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-100">{currentContent.about.title}</h2>
            {currentContent.about.text.map((paragraph, idx) => (
              <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-indigo-400 mb-3">{currentContent.about.educationTitle}</h3>
              <div className="space-y-3">
                {currentContent.about.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-indigo-500/50 pl-3">
                    <p className="text-xs font-bold text-slate-200">{edu.degree}</p>
                    <p className="text-xs text-slate-400">{edu.school} ({edu.years})</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-sm font-semibold text-indigo-400">{currentContent.about.skillsTitle}</h3>
            <ul className="space-y-2">
              {currentContent.about.skills.map((skill, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Раздел проектов и фильтры */}
        <section>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(currentContent.categories) as Category[]).map((catKey) => (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition border ${
                    activeCategory === catKey
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  {currentContent.categories[catKey]}
                </button>
              ))}
            </div>
          </div>

          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div 
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
                        👥 {project.teamSize}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-slate-100">{project.title}</h3>
                  <p className="text-xs text-indigo-400 mb-4 font-medium">{project.role}</p>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                  <ul className="text-xs text-slate-400 space-y-1.5 mb-6 list-disc list-inside">
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
                      className="inline-block text-xs text-indigo-400 hover:text-indigo-300 underline mb-4"
                    >
                      🔗 {project.link}
                    </a>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/40">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-[11px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
