import React from 'react';
import { ArrowRight, ShieldCheck, Sun, Eye, Sliders } from 'lucide-react';
import { LampFinish } from '../types';

interface HeroProps {
  selectedFinish: LampFinish;
  onFinishChange: (finish: LampFinish) => void;
  onPreorderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedFinish, onFinishChange, onPreorderClick }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline / Domain Kicker - Clean unboxed metadata with typographic separators */}
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 tracking-wider uppercase mb-6">
          <span>Architectural Hardware</span>
          <span aria-hidden="true">·</span>
          <span>Circadian Engineering</span>
          <span aria-hidden="true">·</span>
          <span>Zero Screen Glare</span>
        </div>

        {/* Hero Headline & Subheadline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.08] max-w-2xl" style={{ textWrap: 'balance' }}>
              Precision circadian lighting for deep, uninterrupted focus.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              Engineered with 98+ CRI museum-grade LEDs, touchless micro-gesture sensing, and an asymmetrical polarized lens that illuminates your entire desk without a single photon of monitor reflection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onPreorderClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap"
              >
                <span>Configure & Preorder</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-800 bg-white hover:bg-neutral-100/80 border border-neutral-300 rounded-xl transition-all whitespace-nowrap"
              >
                <Sliders className="w-4 h-4 text-neutral-600" />
                <span>Test Live Simulator</span>
              </a>
            </div>

            {/* Trust and Risk-Free Guarantee Notice */}
            <div className="flex items-center gap-6 pt-4 text-xs text-neutral-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neutral-700" />
                <span>30-Day In-Desk Trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>Free Carbon-Neutral Shipping</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>3-Year Hardware Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#121417] rounded-3xl p-7 border border-neutral-800 shadow-2xl relative overflow-hidden group">
              
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-6">
                <span className="tracking-widest uppercase font-mono text-[11px] text-neutral-400">
                  LUMEN — MODEL ONE
                </span>
                <span className="font-mono text-emerald-400 text-xs">
                  98.4 CRI · CALIBRATED
                </span>
              </div>

              {/* Graphic Vector Representation */}
              <div className="relative h-72 flex items-center justify-center">
                
                {/* Soft ambient floor glow */}
                <div
                  className="absolute bottom-6 w-48 h-16 rounded-full blur-2xl opacity-60 pointer-events-none transition-all duration-500"
                  style={{
                    backgroundColor: selectedFinish === 'brass' ? '#F59E0B' : '#E0E7FF',
                  }}
                />

                <svg className="w-full h-full" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Angled Light Beam Projection */}
                  <polygon
                    points="210,50 260,52 240,210 70,210"
                    fill="url(#heroLightBeam)"
                    opacity="0.8"
                  />
                  
                  {/* Desk Surface line */}
                  <line x1="30" y1="210" x2="310" y2="210" stroke="#2C3038" strokeWidth="2.5" />
                  <ellipse cx="150" cy="210" rx="90" ry="18" fill="url(#heroDeskGlow)" opacity="0.9" />

                  {/* Drafting Notebook & Stylus */}
                  <rect x="90" y="206" width="90" height="4" fill="#3D424D" rx="1" />
                  <line x1="190" y1="207" x2="215" y2="207" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />

                  {/* Modern Ultra-Minimal Lamp Silhouette */}
                  <g>
                    {/* Base */}
                    <rect
                      x="200"
                      y="204"
                      width="70"
                      height="8"
                      rx="3"
                      fill={selectedFinish === 'brass' ? '#9E7A3E' : selectedFinish === 'snow' ? '#D6DBE1' : '#2A2D33'}
                      stroke={selectedFinish === 'brass' ? '#D4AF67' : selectedFinish === 'snow' ? '#F1F3F5' : '#474C56'}
                      strokeWidth="1"
                    />
                    {/* Wireless charging coil symbol */}
                    <ellipse cx="235" cy="207" rx="10" ry="2" fill="#111" opacity="0.4" />

                    {/* Vertical Lower Arm */}
                    <line
                      x1="225"
                      y1="204"
                      x2="225"
                      y2="130"
                      stroke={selectedFinish === 'brass' ? '#B89250' : selectedFinish === 'snow' ? '#E9ECEF' : '#26292E'}
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    
                    {/* Friction Hinge */}
                    <circle
                      cx="225"
                      cy="130"
                      r="6"
                      fill={selectedFinish === 'brass' ? '#D4AF67' : selectedFinish === 'snow' ? '#FFFFFF' : '#3E424B'}
                    />

                    {/* Upper Arm */}
                    <line
                      x1="225"
                      y1="130"
                      x2="210"
                      y2="52"
                      stroke={selectedFinish === 'brass' ? '#B89250' : selectedFinish === 'snow' ? '#E9ECEF' : '#26292E'}
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* Lamp Head Pivot */}
                    <circle
                      cx="210"
                      cy="52"
                      r="5"
                      fill={selectedFinish === 'brass' ? '#D4AF67' : selectedFinish === 'snow' ? '#FFFFFF' : '#3E424B'}
                    />

                    {/* Optical Lamp Head */}
                    <rect
                      x="150"
                      y="46"
                      width="90"
                      height="9"
                      rx="3"
                      fill={selectedFinish === 'brass' ? '#C29B56' : selectedFinish === 'snow' ? '#F8F9FA' : '#1F2227'}
                      stroke={selectedFinish === 'brass' ? '#E5C487' : selectedFinish === 'snow' ? '#FFFFFF' : '#454A54'}
                      strokeWidth="1"
                    />

                    {/* Emitter Lens glow */}
                    <rect x="155" y="55" width="80" height="2.5" rx="1" fill="#FFECC7" />
                  </g>

                  <defs>
                    <linearGradient id="heroLightBeam" x1="210" y1="52" x2="160" y2="210" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#FFE0A3" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FFE0A3" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="heroDeskGlow" cx="150" cy="210" rx="90" ry="18" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFE8B8" stopOpacity="0.75" />
                      <stop offset="60%" stopColor="#FFE8B8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FFE8B8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Quick Finish Toggle inside hero card */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Select Finish:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onFinishChange('graphite')}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                      selectedFinish === 'graphite'
                        ? 'bg-neutral-800 text-white border border-neutral-600'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Graphite
                  </button>
                  <button
                    onClick={() => onFinishChange('snow')}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                      selectedFinish === 'snow'
                        ? 'bg-neutral-800 text-white border border-neutral-600'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Snow
                  </button>
                  <button
                    onClick={() => onFinishChange('brass')}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                      selectedFinish === 'brass'
                        ? 'bg-neutral-800 text-white border border-neutral-600'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Raw Brass
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-Column Proof & KPI Strip Below Hero Split (as required by frontend design skill) */}
        <div className="mt-16 pt-10 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 font-mono tabular-nums tracking-tight">
              98.4 Ra
            </div>
            <div className="text-sm font-semibold text-neutral-800 mt-1">Museum Color Rendering</div>
            <div className="text-xs text-neutral-500 mt-0.5">True-to-life color accuracy for paper & displays</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-900 font-mono tabular-nums tracking-tight">
              0.0% Glare
            </div>
            <div className="text-sm font-semibold text-neutral-800 mt-1">Asymmetrical Prism Cutoff</div>
            <div className="text-xs text-neutral-500 mt-0.5">Illuminates the desk, terminates before screen</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-900 font-mono tabular-nums tracking-tight">
              2,200K – 6.5K
            </div>
            <div className="text-sm font-semibold text-neutral-800 mt-1">Autonomous Circadian Sync</div>
            <div className="text-xs text-neutral-500 mt-0.5">Tracks natural solar coordinates without Wi-Fi</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-900 font-mono tabular-nums tracking-tight">
              15W Fast Qi
            </div>
            <div className="text-sm font-semibold text-neutral-800 mt-1">Weighted Solid Billet Base</div>
            <div className="text-xs text-neutral-500 mt-0.5">2.4kg unibody stand with phone charging coil</div>
          </div>
        </div>

      </div>
    </section>
  );
};
