import React, { useState } from 'react';
import { FEATURES_DATA } from '../data/lampData';
import { Sun, ShieldCheck, Eye, Hand, Clock, Zap, Check } from 'lucide-react';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'optics' | 'hardware' | 'wellness'>('all');

  const filteredFeatures = FEATURES_DATA.filter((feat) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'optics') return feat.id === '02' || feat.id === '03';
    if (activeTab === 'hardware') return feat.id === '04' || feat.id === '06';
    if (activeTab === 'wellness') return feat.id === '01' || feat.id === '05';
    return true;
  });

  return (
    <section id="features" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              <span>Engineering & Craft</span>
              <span aria-hidden="true">·</span>
              <span>6 Core Innovations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Designed for optical purity. Built without compromises.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Every curve, circuit, and optical micro-prism was created to eliminate visual friction, soothe strained eyes, and anchor your desk in calm concentration.
            </p>
          </div>

          {/* Interactive Category Filter - Allowed functional segmented control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-200/80 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Features
            </button>
            <button
              onClick={() => setActiveTab('optics')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'optics'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Optics
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'hardware'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Hardware
            </button>
            <button
              onClick={() => setActiveTab('wellness')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'wellness'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Cognitive Rhythm
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Circadian Auto-Tune (Large marquee card if all or wellness) */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-mono text-neutral-900 font-semibold text-sm">01</span>
                <span className="text-neutral-500 font-medium">Biophilic Science</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">
                Circadian Auto-Tune
              </h3>
              <p className="text-xs font-medium text-neutral-500 mb-3">
                Solar Zenith Synchronization
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Shifts your workspace light from crisp 5,500K morning blue-spectrum energy down to restorative 2,200K sunset amber as evening deepens, protecting natural melatonin production.
              </p>
            </div>

            {/* Custom Interactive Mini-Diagram: Day Spectrum Timeline */}
            <div className="mt-6 pt-5 border-t border-neutral-100">
              <div className="h-4 rounded-full w-full overflow-hidden flex" style={{
                background: 'linear-gradient(to right, #FF9E42 0%, #FFD699 25%, #EBF4FF 50%, #CDE2FF 75%, #FFB066 100%)'
              }} />
              <div className="flex justify-between items-center text-[11px] text-neutral-500 font-mono mt-2">
                <span>08:00 (Amber)</span>
                <span>13:00 (Daylight)</span>
                <span>21:00 (Sunset)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Asymmetrical Polarized Lens */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-mono text-neutral-900 font-semibold text-sm">02</span>
                <span className="text-neutral-500 font-medium">Optical Architecture</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">
                Asymmetrical Polarized Lens
              </h3>
              <p className="text-xs font-medium text-neutral-500 mb-3">
                Zero Reflection on Displays
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                A custom multi-tier micro-prism array guides luminous rays strictly downward and forward at a 42° boundary. Light terminates cleanly before your monitor bezel, preventing annoying hotspots.
              </p>
            </div>

            {/* Ray-Tracing Diagram */}
            <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-neutral-900 font-mono tabular-nums">0.0%</div>
                <div className="text-xs text-neutral-500">Screen Reflection</div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-2xl font-bold text-neutral-900 font-mono tabular-nums">42°</div>
                <div className="text-xs text-neutral-500">Prism Cutoff Angle</div>
              </div>
            </div>
          </div>

          {/* Card 3: Museum-Grade 98+ CRI */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-mono text-neutral-900 font-semibold text-sm">03</span>
                <span className="text-neutral-500 font-medium">Color Science</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">
                Museum-Grade 98+ CRI
              </h3>
              <p className="text-xs font-medium text-neutral-500 mb-3">
                Full-Spectrum SunSim Emitters
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Standard office LEDs score CRI 80 and lack critical R9 saturated reds. Lumen scores Ra 98.4 and R9 96, revealing exact fabric textures, ink pigments, and skin tones with pristine fidelity.
              </p>
            </div>

            {/* CRI Comparison Bar */}
            <div className="mt-6 pt-5 border-t border-neutral-100 space-y-2">
              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-600 mb-1">
                  <span className="font-semibold text-neutral-900">Lumen SunSim LED</span>
                  <span className="font-bold text-neutral-900">98.4 Ra</span>
                </div>
                <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-neutral-900 h-full rounded-full" style={{ width: '98.4%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>Standard Office Lamp</span>
                  <span>80.0 Ra</span>
                </div>
                <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-neutral-300 h-full rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Touchless Gesture & Knurled Brass Dial */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-mono text-neutral-900 font-semibold text-sm">04</span>
                <span className="text-neutral-500 font-medium">Spatial Ergonomics</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">
                Touchless Gesture Control
              </h3>
              <p className="text-xs font-medium text-neutral-500 mb-3">
                Sub-15ms Spatial Infrared Sensing
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Wave your hand 3 inches over the sensor to power on/off without touching or smudging the finish. Hold still for continuous smooth dimming, or turn the knurled haptic rotary dial on the base.
              </p>
            </div>

            {/* Gesture feedback tag */}
            <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500">Response Speed</span>
              <span className="font-mono font-semibold text-neutral-900">Instant (&lt; 15ms)</span>
            </div>
          </div>

          {/* Card 5: Integrated Flow Pomodoro Rhythm */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-mono text-neutral-900 font-semibold text-sm">05</span>
                <span className="text-neutral-500 font-medium">Cognitive Productivity</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">
                Flow Pomodoro Light Cues
              </h3>
              <p className="text-xs font-medium text-neutral-500 mb-3">
                Silent Non-Jarring Attention Cycles
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Replace abrupt screen chimes with calming light cues. After 25 minutes of deep focus, Lumen pulses into a warm amber breath for 5 minutes, prompting gentle physical and ocular relief.
              </p>
            </div>

            {/* Pomodoro diagram */}
            <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                <span className="text-neutral-700 font-medium">25m Sprint</span>
              </div>
              <span className="text-neutral-300">→</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-neutral-700 font-medium">5m Calm Rest</span>
              </div>
            </div>
          </div>

          {/* Card 6: CNC Milled Aerospace Aluminum & 15W Qi Base */}
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-mono text-neutral-900 font-semibold text-sm">06</span>
                <span className="text-neutral-500 font-medium">Materials & Power</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-1">
                Billet Aluminum & 15W Qi Base
              </h3>
              <p className="text-xs font-medium text-neutral-500 mb-3">
                Integrated Wireless Fast Charging
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Precision-machined from solid 6063 aerospace alloy. A 2.4kg weighted anti-slip base houses an invisible 15W Qi wireless induction coil, decluttering phone and earbud cables from your workspace.
              </p>
            </div>

            {/* Base Spec Detail */}
            <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500">Chassis Material</span>
              <span className="font-medium text-neutral-900">Anodized 6063-T6 Alloy</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
