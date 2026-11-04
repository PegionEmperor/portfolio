import { useState } from 'react';
import { PORTFOLIO_DATA, type Role, type Lang } from './data/content';

export default function App() {
  const [role, setRole] = useState<Role>('pm');
  const [lang, setLang] = useState<Lang>('ru');

  const currentContent = PORTFOLIO_DATA[lang][role];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12">
      <header className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 mb-12 border-b border-slate-800 pb-6">
        <div className="text-xl font-bold tracking-wider text-indigo-400">DANIL YAKOVENKO</div>
        
        {/* Переключатели роли и языка */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-slate-800 p-1 rounded-xl flex gap-1 border border-slate-700">
            <button
              onClick={() => setRole('pm')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                role === 'pm' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Project Manager
            </button>
            <button
              onClick={() => setRole('marketer')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                role === 'marketer' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Marketer
            </button>
          </div>

          <div className="bg-slate-800 p-1 rounded-xl flex gap-1 border border-slate-700">
            <button
              onClick={() => setLang('ru')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                lang === 'ru' ? 'bg-slate-700 text-amber-400' : 'text-slate-400'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                lang === 'en' ? 'bg-slate-700 text-amber-400' : 'text-slate-400'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {currentContent.hero.title}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            {currentContent.hero.subtitle}
          </p>
        </section>

        {/* Сетка проектов */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-indigo-400 border-l-4 border-indigo-500 pl-3">
            {lang === 'ru' ? 'Ключевые проекты' : 'Key Projects'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentContent.projects.map((project) => (
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

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/40">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[11px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
