import React, { useState } from 'react';
import { Award, Mail, ShieldCheck } from 'lucide-react';
import { aboutTeamMembers, TEAM_CONTACT_EMAIL } from '../../data/aboutContent';

function teamPhotoUrl(path: string | null) {
  if (!path) return '';
  const base = import.meta.env.BASE_URL;
  return path.startsWith('http') ? path : `${base}${path.replace(/^\//, '')}`;
}

function initials(name: string) {
  const parts = name.replace(/\./g, '').split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function TeamMemberCard({
  nameDisplay,
  role,
  photo,
}: {
  nameDisplay: string;
  role: string;
  photo: string | null;
}) {
  const [imgOk, setImgOk] = useState(!!photo);
  const src = photo ? teamPhotoUrl(photo) : '';

  const mailHref = `mailto:${TEAM_CONTACT_EMAIL}?subject=${encodeURIComponent(`Contact ${nameDisplay}`)}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-slate-600/80 dark:bg-slate-800/90">
      <div className="relative aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800">
        {photo && imgOk ? (
          <img
            src={src}
            alt={nameDisplay}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <span className="text-2xl font-bold tracking-tight md:text-3xl">{initials(nameDisplay)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col p-4 md:p-5">
        <p className="font-semibold text-blue-950 dark:text-white">{nameDisplay}</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{role}</p>
        <a
          href={mailHref}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Mail className="h-4 w-4 shrink-0" />
          Email
        </a>
      </div>
    </div>
  );
}

export default function AboutTeamScrum() {
  return (
    <section className="bg-[#F5F7FB] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Team & how we work
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          A hybrid crew — anchored in Ottawa with senior specialists working remotely. We are{' '}
          <strong className="font-semibold text-blue-950 dark:text-white">certified</strong> on major ad and analytics
          platforms (including Google and Meta partner paths), and we bring{' '}
          <strong className="font-semibold text-blue-950 dark:text-white">10+ years of combined experience</strong>{' '}
          across strategy, creative, media, and engineering.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-950/50 dark:text-emerald-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            Certified partners & platform training
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-1.5 text-xs font-semibold text-blue-800 dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-200">
            <Award className="h-3.5 w-3.5" />
            10+ years combined experience
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Team</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            Reach anyone through{' '}
            <span className="font-medium text-slate-800 dark:text-slate-200">{TEAM_CONTACT_EMAIL}</span> — choose a
            name in the subject line so the right person picks it up.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutTeamMembers.map((m) => (
              <TeamMemberCard key={m.nameDisplay} nameDisplay={m.nameDisplay} role={m.role} photo={m.photo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
