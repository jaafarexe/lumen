import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/lampData';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleExpandAll = () => {
    if (openIndices.length === FAQ_ITEMS.length) {
      setOpenIndices([]);
    } else {
      setOpenIndices(FAQ_ITEMS.map((_, i) => i));
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              <span>Customer Inquiries</span>
              <span aria-hidden="true">·</span>
              <span>Hardware & Policy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Frequently Asked Questions
            </h2>
          </div>

          <button
            onClick={handleExpandAll}
            className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 underline self-start sm:self-auto"
          >
            {openIndices.length === FAQ_ITEMS.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-neutral-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Have an architectural inquiry or custom commercial quote?{' '}
          <a
            href="mailto:support@lumenlight.com"
            className="text-neutral-900 font-semibold underline hover:text-neutral-700"
          >
            Contact our engineering desk
          </a>
          . We respond within 12 hours.
        </div>

      </div>
    </section>
  );
};
