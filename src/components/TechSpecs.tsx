import React, { useState } from 'react';
import { TECHNICAL_SPECS } from '../data/lampData';
import { ShieldCheck, Zap, Download } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');

  // Convert unit labels if imperial
  const displaySpecs = TECHNICAL_SPECS.map((spec) => {
    if (unitSystem === 'imperial') {
      if (spec.label === 'Peak Illuminance') {
        return { ...spec, value: '140 Foot-Candles at 18" desk height' };
      }
      if (spec.label === 'Base Dimensions') {
        return { ...spec, value: '6.3" diameter × 0.55" height' };
      }
      if (spec.label === 'Arm Reach & Height') {
        return { ...spec, value: '18.9" vertical span, 15.0" forward reach' };
      }
      if (spec.label === 'Weight') {
        return { ...spec, value: '5.33 lbs (solid counterbalanced stand)' };
      }
    }
    return spec;
  });

  return (
    <section id="specs" className="py-24 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              <span>Laboratory Verification</span>
              <span aria-hidden="true">·</span>
              <span>Hardware Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Technical Specifications
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl text-base">
              Independently tested under strict laboratory conditions adhering to IEEE 1789-2015 flicker standards and CIE 13.3-1995 colorimetry protocols.
            </p>
          </div>

          {/* Unit Toggle */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl self-start sm:self-auto shrink-0">
            <button
              onClick={() => setUnitSystem('metric')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                unitSystem === 'metric'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Metric (mm / kg)
            </button>
            <button
              onClick={() => setUnitSystem('imperial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                unitSystem === 'imperial'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Imperial (in / lbs)
            </button>
          </div>
        </div>

        {/* Tabular Specifications Grid */}
        <div className="bg-neutral-50/70 rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-neutral-200/80">
            {displaySpecs.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-12 py-3.5 px-6 hover:bg-white transition-colors items-center text-sm"
              >
                <div className="sm:col-span-5 font-medium text-neutral-700">
                  {spec.label}
                </div>
                <div className="sm:col-span-7 font-mono text-neutral-900 tabular-nums text-sm font-medium mt-0.5 sm:mt-0">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental & Quality Certification Footnote */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 px-2">
          <div className="flex items-center gap-3">
            <span>Certifications: CE, FCC, RoHS, Qi v1.3.2, IEEE 1789</span>
            <span>·</span>
            <span>Origin: Designed in California, Assembled with CNC Recycled Aluminum</span>
          </div>
          <div className="text-neutral-400 font-mono">
            Revision 2.4 — Production Grade
          </div>
        </div>

      </div>
    </section>
  );
};
