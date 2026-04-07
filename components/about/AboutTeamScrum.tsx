import React from 'react';
import { Kanban, MapPin, Users } from 'lucide-react';
import { scrumSteps, teamRoles } from '../../data/aboutContent';

export default function AboutTeamScrum() {
  return (
    <section className="bg-[#F5F7FB] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Team & how we work
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          A hybrid crew — anchored in Ottawa with senior specialists working remotely. Everyone brings years of
          business-grade experience; many hold certifications and have completed Google and Meta partner training.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 rounded-2xl border border-blue-100 bg-white/90 p-5 dark:border-blue-900/40 dark:bg-slate-800/60">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Office: 499 Preston St, Ottawa, ON
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Hybrid: Ottawa + remote specialists
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Kanban className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Scrum methodology for delivery
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Roles</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {teamRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Scrum in practice
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {scrumSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-white/80 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/70"
              >
                <span className="text-3xl font-bold text-blue-200 dark:text-blue-900">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="mt-2 text-lg font-semibold text-blue-950 dark:text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
