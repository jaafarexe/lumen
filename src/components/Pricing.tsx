import React from 'react';
import { PRICING_PLANS, FINISH_OPTIONS } from '../data/lampData';
import { LampFinish, PricingPlan } from '../types';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingProps {
  selectedFinish: LampFinish;
  onFinishChange: (finish: LampFinish) => void;
  onAddToCart: (plan: PricingPlan, finish: LampFinish) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  selectedFinish,
  onFinishChange,
  onAddToCart,
}) => {
  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            <span>Direct From Studio</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Carbon-Neutral Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            Invest in your daily focus sanctuary.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Backed by a 30-day in-desk risk-free evaluation. If Lumen doesn't visibly soothe your eyes and deepen your work sessions, return it for a complete refund.
          </p>

          {/* Global Finish Selector Strip */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-neutral-200/90 shadow-sm">
            <span className="text-xs font-medium text-neutral-500 pl-3 pr-2">Select Finish:</span>
            {FINISH_OPTIONS.map((f) => {
              const isSelected = selectedFinish === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => onFinishChange(f.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/10"
                    style={{ backgroundColor: f.hex }}
                  />
                  <span>{f.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  isPopular
                    ? 'border-2 border-neutral-900 shadow-xl lg:-translate-y-2'
                    : 'border border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                {/* Popular Flag Header */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-8 px-3 py-0.5 bg-neutral-900 text-white text-[11px] font-semibold tracking-wide uppercase rounded-full">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pt-2 pb-6 border-b border-neutral-100">
                    <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-mono tabular-nums tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
                      USD
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through font-mono tabular-nums ml-1">
                        ${plan.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Hardware Highlights */}
                  <div className="py-4 text-xs font-medium text-neutral-700 bg-neutral-50 rounded-xl px-3 my-4">
                    {plan.specsSummary}
                  </div>

                  {/* Included Features List */}
                  <ul className="space-y-3 pt-2 text-sm text-neutral-600">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm leading-tight text-neutral-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA & Shipping Note */}
                <div className="pt-8 mt-6 border-t border-neutral-100 space-y-3">
                  <button
                    onClick={() => onAddToCart(plan, selectedFinish)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-[0.99] whitespace-nowrap ${
                      isPopular
                        ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    Select {plan.name}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{plan.shippingEstimate}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs text-neutral-600 pt-8 border-t border-neutral-200">
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80">
            <span className="font-semibold text-neutral-900 block mb-0.5">30-Day In-Desk Trial</span>
            <span>Test Lumen in your actual workspace. Free returns if not 100% satisfied.</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80">
            <span className="font-semibold text-neutral-900 block mb-0.5">Up to 5-Year Hardware Guarantee</span>
            <span>Comprehensive replacement coverage on LED arrays, hinges, and power electronics.</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200/80">
            <span className="font-semibold text-neutral-900 block mb-0.5">Carbon-Neutral Global Shipping</span>
            <span>Shipped in 100% plastic-free molded pulp packaging worldwide.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
