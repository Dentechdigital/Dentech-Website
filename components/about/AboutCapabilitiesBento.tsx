import React from 'react';
import { Layers, MonitorSmartphone, UsersRound, Target } from 'lucide-react';
import { capabilityCards, type CapabilityVisualKey } from '../../data/aboutContent';

const capabilityIcons: Record<CapabilityVisualKey, typeof Layers> = {
  brand: Layers,
  web: MonitorSmartphone,
  social: UsersRound,
  paid: Target,
};

export default function AboutCapabilitiesBento() {
  return (
    <section className="relative overflow-hidden bg-[#F4F5F7] py-20 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_40%_at_50%_-10%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="about-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            One partner for{' '}
            <span className="text-blue-600 dark:text-blue-400">every stage</span> of your funnel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            From what patients see on the street to the ad they click — brand, digital, community, and media work
            together. We stay aligned with dental operators and platform best practices.
          </p>
        </header>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {capabilityCards.map((c) => {
            const Icon = capabilityIcons[c.visual.key];
            const wide = c.bentoSpan === 'wide';

            return (
              <article
                key={c.title}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.15)] dark:border-slate-700/80 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ${
                  wide ? 'md:col-span-2' : 'md:col-span-1'
                } ${wide ? 'min-h-[280px] md:min-h-[300px] lg:min-h-[320px]' : 'min-h-[240px] md:min-h-[300px]'}`}
              >
                {/* Hard clip to card radius so decorative layers never show rectangular edges */}
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]"
                  aria-hidden
                >
                  <div
                    className={`absolute -bottom-8 -right-8 rounded-full bg-gradient-to-br from-blue-100/90 to-cyan-100/40 blur-2xl dark:from-blue-600/20 dark:to-cyan-600/10 ${wide ? 'h-56 w-56 lg:h-72 lg:w-72' : 'h-40 w-40 opacity-70'}`}
                  />

                  {wide ? (
                    <div
                      className="absolute bottom-0 right-0 h-[min(55%,280px)] w-[min(65%,320px)] max-w-[320px] opacity-[0.88] transition-transform duration-700 ease-out group-hover:scale-[1.03] dark:opacity-[0.75]"
                      style={{
                        maskImage:
                          'radial-gradient(ellipse 95% 90% at 100% 100%, black 18%, rgba(0,0,0,0.45) 52%, transparent 78%)',
                        WebkitMaskImage:
                          'radial-gradient(ellipse 95% 90% at 100% 100%, black 18%, rgba(0,0,0,0.45) 52%, transparent 78%)',
                      }}
                    >
                      <img
                        src={c.visual.bgImage}
                        alt=""
                        className="h-full w-full object-cover object-right-bottom"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div
                      className="absolute -bottom-4 -right-4 h-[11rem] w-[11rem] opacity-[0.22] transition-opacity group-hover:opacity-[0.32] dark:opacity-[0.18] dark:group-hover:opacity-[0.28] md:h-[13rem] md:w-[13rem]"
                      style={{
                        maskImage:
                          'radial-gradient(ellipse 75% 72% at 92% 94%, black 0%, rgba(0,0,0,0.5) 42%, transparent 72%)',
                        WebkitMaskImage:
                          'radial-gradient(ellipse 75% 72% at 92% 94%, black 0%, rgba(0,0,0,0.5) 42%, transparent 72%)',
                      }}
                    >
                      <img
                        src={c.visual.bgImage}
                        alt=""
                        className="h-full w-full object-cover object-right-bottom"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex h-full flex-col p-7 md:p-8 lg:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[75%] text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">
                      {c.title}
                    </h3>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/25 dark:bg-blue-500 dark:shadow-blue-900/40">
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-[0.95rem] ${wide ? 'max-w-lg' : 'max-w-none'}`}
                  >
                    {c.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
