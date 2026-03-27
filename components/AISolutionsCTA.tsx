import React from 'react';
import { Bot, PhoneCall, MessageSquareText, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISolutionsCTA() {
  return (
    <section className="py-10 bg-[#FAFAF9] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200/70 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-6 py-7 sm:px-8 sm:py-8 shadow-xl shadow-blue-900/20">
          <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/95">
                <Bot className="h-3.5 w-3.5" />
                <span>Enterprise AI Solutions</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                We also build enterprise-grade AI and automation systems for clinics.
              </h3>
              <p className="mt-2 text-white/90 text-sm md:text-base leading-relaxed">
                From AI receptionist workflows and automated review generation to smart chatbots integrated with your clinic management tools, we deliver practical business automation that scales.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">
                  <PhoneCall className="h-3.5 w-3.5" />
                  AI Receptionist
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">
                  <Star className="h-3.5 w-3.5" />
                  Review Generator
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">
                  <MessageSquareText className="h-3.5 w-3.5" />
                  Management-Tool Chatbots
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors shadow-md"
              >
                <span>Book an AI Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
