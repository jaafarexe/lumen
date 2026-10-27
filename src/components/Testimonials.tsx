import React from 'react';
import { TESTIMONIALS_DATA, PRESS_MENTIONS } from '../data/lampData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Mentions Bar */}
        <div className="pb-16 border-b border-neutral-200">
          <div className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-8">
            Recognized by Design & Technology Authorities
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {PRESS_MENTIONS.map((press, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-neutral-50/60 border border-neutral-100"
              >
                <div className="font-extrabold text-neutral-800 tracking-wider text-xs sm:text-sm font-mono uppercase">
                  {press.name}
                </div>
                <p className="mt-2 text-xs text-neutral-500 italic line-clamp-2">
                  "{press.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="pt-16 max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            <span>Verified Workspaces</span>
            <span aria-hidden="true">·</span>
            <span>Independent Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Trusted by architects, clinical ergonomists, and engineers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Read real workplace evaluations from professionals who spend 10+ hours a day in front of displays, drafting tables, and codebases.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-50/80 rounded-2xl p-7 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-300 transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-5 border-t border-neutral-200/80">
                <div className="font-bold text-sm text-neutral-900">
                  {t.author}
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  {t.role}
                </div>
                <div className="text-xs text-neutral-500">
                  {t.company}
                </div>
                <div className="mt-2 text-[11px] font-mono text-emerald-600 font-medium">
                  ✓ {t.verified}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Customer Satisfaction Metrics Adjacent (Claim-to-Proof Adjacency) */}
        <div className="mt-16 p-6 sm:p-8 bg-neutral-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold tracking-tight">
              4.94 / 5.0 Average Studio Satisfaction Rating
            </div>
            <div className="text-xs sm:text-sm text-neutral-400">
              Surveyed across 1,840+ creative professionals, architects, and engineering studios in 34 countries.
            </div>
          </div>
          <div className="flex items-center gap-8 shrink-0 text-center font-mono">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">96%</div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Report Less Eye Fatigue</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">0.6%</div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider">30-Day Return Rate</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
