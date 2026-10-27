import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onPreorderClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onPreorderClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubscribed(true);
  };

  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-neutral-800/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
          <span>Transform Your Workspace</span>
          <span aria-hidden="true">·</span>
          <span>Batch 04 Dispatches Next Week</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Deep work starts with the light that guides it.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Join thousands of architects, software engineers, and writers who have traded harsh blue overheads and screen glare for pure, circadian focus.
        </p>

        {/* Primary Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onPreorderClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] whitespace-nowrap"
          >
            <span>Preorder Your Lumen Lamp</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Guarantees */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-Day Risk-Free In-Desk Trial</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <span>Free Worldwide Shipping</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <span>3-Year Hardware Guarantee</span>
          </div>
        </div>

        {/* Newsletter / Firmware & Research Dispatch */}
        <div className="mt-16 pt-12 border-t border-neutral-800 max-w-md mx-auto">
          <p className="text-xs text-neutral-400 mb-3 font-medium">
            Receive our quarterly whitepapers on circadian biophilia and hardware firmware updates:
          </p>
          {subscribed ? (
            <div className="p-3 bg-neutral-800/90 border border-neutral-700 rounded-xl text-xs text-emerald-400 flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>You're on the list. We respect your inbox with zero spam.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  placeholder="architect@studio.com"
                  className="w-full px-4 py-2.5 text-xs bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-semibold bg-neutral-200 text-neutral-900 hover:bg-white rounded-xl shrink-0 transition-colors"
                >
                  Join
                </button>
              </div>
              {emailError && (
                <div className="text-[11px] text-rose-400 text-left pl-1">{emailError}</div>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
