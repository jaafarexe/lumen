import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-16 text-xs text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-neutral-100">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <a href="/" className="text-base font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
              <span>Lumen</span>
            </a>
            <p className="text-neutral-500 max-w-sm text-xs leading-relaxed">
              Precision task lighting engineered for deep human focus, circadian balance, and calm desk environments. Designed and assembled for longevity.
            </p>
            <div className="pt-2 text-neutral-400 font-mono text-[11px]">
              Studio: San Francisco · Munich · Tokyo
            </div>
          </div>

          {/* Nav links mirror */}
          <div className="space-y-2.5">
            <div className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px]">
              Hardware
            </div>
            <ul className="space-y-2">
              <li><a href="#experience" className="hover:text-neutral-900 transition-colors">Lighting Studio</a></li>
              <li><a href="#features" className="hover:text-neutral-900 transition-colors">Optical Features</a></li>
              <li><a href="#specs" className="hover:text-neutral-900 transition-colors">Laboratory Specs</a></li>
              <li><a href="#pricing" className="hover:text-neutral-900 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Science & Docs */}
          <div className="space-y-2.5">
            <div className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px]">
              Science
            </div>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-neutral-900 transition-colors">Circadian Biology</a></li>
              <li><a href="#features" className="hover:text-neutral-900 transition-colors">Asymmetrical Prism</a></li>
              <li><a href="#specs" className="hover:text-neutral-900 transition-colors">IEEE 1789 Flicker-Free</a></li>
              <li><a href="#reviews" className="hover:text-neutral-900 transition-colors">Clinical Studies</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-2.5">
            <div className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px]">
              Support
            </div>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-neutral-900 transition-colors">FAQ & Setup Guide</a></li>
              <li><a href="#pricing" className="hover:text-neutral-900 transition-colors">30-Day Trial Policy</a></li>
              <li><a href="#pricing" className="hover:text-neutral-900 transition-colors">Warranty & Service</a></li>
              <li><a href="mailto:support@lumenlight.com" className="hover:text-neutral-900 transition-colors">Studio Helpdesk</a></li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <div>
            © {new Date().getFullYear()} Lumen Hardware Laboratories Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#privacy" className="hover:text-neutral-700">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-700">Terms of Sale</a>
            <a href="#compliance" className="hover:text-neutral-700">FCC / CE Declarations</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
