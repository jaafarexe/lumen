import React, { useState, useEffect } from 'react';
import { Sun, Moon, Zap, Clock, Eye, Sparkles, RefreshCw, Power, Hand } from 'lucide-react';
import { FINISH_OPTIONS, PRESET_MODES } from '../data/lampData';
import { LampFinish } from '../types';

interface InteractiveVisualizerProps {
  selectedFinish: LampFinish;
  onFinishChange: (finish: LampFinish) => void;
  onSelectTierClick?: () => void;
}

// Convert Kelvin to approx RGB hex for glow simulation
function kelvinToColor(kelvin: number): { hex: string; rgb: string; label: string } {
  if (kelvin < 2600) {
    return { hex: '#FF9E42', rgb: '255, 158, 66', label: 'Melatonin Preserving / Amber Warmth' };
  } else if (kelvin < 3200) {
    return { hex: '#FFB870', rgb: '255, 184, 112', label: 'Soft Sunset Glow / Evening Reading' };
  } else if (kelvin < 4200) {
    return { hex: '#FFE0B2', rgb: '255, 224, 178', label: 'Neutral Studio Daylight' };
  } else if (kelvin < 5400) {
    return { hex: '#F0F6FF', rgb: '240, 246, 255', label: 'Peak Cognitive Focus' };
  } else {
    return { hex: '#D6E8FF', rgb: '214, 232, 255', label: 'Cool Alertness / Crisp Daylight' };
  }
}

export const InteractiveVisualizer: React.FC<InteractiveVisualizerProps> = ({
  selectedFinish,
  onFinishChange,
  onSelectTierClick,
}) => {
  const [isOn, setIsOn] = useState(true);
  const [kelvin, setKelvin] = useState(4800);
  const [brightness, setBrightness] = useState(85);
  const [activePreset, setActivePreset] = useState<string>('deep-focus');
  const [isWaving, setIsWaving] = useState(false);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(25 * 60);

  const activeFinishObj = FINISH_OPTIONS.find((f) => f.id === selectedFinish) || FINISH_OPTIONS[0];
  const colorData = kelvinToColor(kelvin);

  // Pomodoro countdown simulation
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (pomodoroActive) {
      timer = setInterval(() => {
        setPomodoroSeconds((prev) => (prev > 0 ? prev - 1 : 25 * 60));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [pomodoroActive]);

  const handleApplyPreset = (presetId: string) => {
    const preset = PRESET_MODES.find((p) => p.id === presetId);
    if (!preset) return;
    setActivePreset(presetId);
    setKelvin(preset.kelvin);
    setBrightness(preset.brightness);
    setIsOn(true);
    if (presetId === 'pomodoro') {
      setPomodoroActive(true);
    } else {
      setPomodoroActive(false);
    }
  };

  const handleSimulateGesture = () => {
    setIsWaving(true);
    setTimeout(() => {
      setIsOn((prev) => !prev);
      setIsWaving(false);
    }, 600);
  };

  const effectiveBrightness = isOn ? brightness : 0;
  const beamOpacity = (effectiveBrightness / 100) * 0.75;
  const deskLightOpacity = (effectiveBrightness / 100) * 0.9;
  const currentLux = Math.round((effectiveBrightness / 100) * 1450);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="experience" className="py-24 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3">
            <span>Interactive Lighting Studio</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Glare Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            Experience the optical beam before it arrives on your desk.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Test real-time spectrum shifting from melatonin-friendly 2,200K amber to 6,500K sharp daylight. Toggle finishes, trigger touchless sensor gestures, and see the asymmetrical cutoff line in action.
          </p>
        </div>

        {/* Visualizer Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas: Interactive SVG Lamp Stage */}
          <div className="lg:col-span-7 bg-[#141618] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-neutral-800 min-h-[520px] flex flex-col justify-between select-none">
            
            {/* Top Stage Indicators */}
            <div className="flex items-center justify-between text-xs text-neutral-400 z-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-white text-sm font-semibold tabular-nums">
                  {isOn ? `${kelvin}K` : 'STANDBY'}
                </span>
                <span className="text-neutral-500">/</span>
                <span className="text-neutral-300 font-mono tabular-nums">{isOn ? `${brightness}%` : '0%'}</span>
                <span className="text-neutral-500">/</span>
                <span className="text-neutral-400 font-mono tabular-nums">{isOn ? `${currentLux} Lux` : '0 Lux'}</span>
              </div>
              <div className="flex items-center gap-3">
                {pomodoroActive && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-300 font-mono text-xs">
                    <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>FLOW {formatTimer(pomodoroSeconds)}</span>
                  </div>
                )}
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isOn
                      ? 'bg-neutral-800 text-white hover:bg-neutral-700'
                      : 'bg-neutral-800/60 text-neutral-400 hover:text-white'
                  }`}
                  aria-label="Toggle Lamp Power"
                >
                  <Power className={`w-3.5 h-3.5 ${isOn ? 'text-emerald-400' : 'text-neutral-500'}`} />
                  <span>{isOn ? 'Power On' : 'Power Off'}</span>
                </button>
              </div>
            </div>

            {/* Main Stage Graphic: Vector Architectural Lamp & Desk */}
            <div className="relative w-full h-[360px] my-4 flex items-center justify-center">
              
              {/* Dynamic Wall Ambient Light Falloff */}
              <div
                className="absolute inset-0 transition-opacity duration-700 pointer-events-none rounded-xl"
                style={{
                  background: `radial-gradient(circle at 62% 35%, rgba(${colorData.rgb}, ${beamOpacity * 0.35}) 0%, rgba(${colorData.rgb}, 0.05) 50%, transparent 80%)`,
                }}
              />

              {/* Dynamic Optical Beam Cone (Asymmetrical Angle terminating before screen) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 700 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Light Cone Gradient */}
                  <linearGradient id="lampBeamGradient" x1="430" y1="95" x2="260" y2="340" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={colorData.hex} stopOpacity={beamOpacity * 0.9} />
                    <stop offset="50%" stopColor={colorData.hex} stopOpacity={beamOpacity * 0.4} />
                    <stop offset="100%" stopColor={colorData.hex} stopOpacity="0" />
                  </linearGradient>

                  {/* Desk pool illumination radial */}
                  <radialGradient id="deskPool" cx="300" cy="335" rx="200" ry="45" fx="300" fy="335" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={colorData.hex} stopOpacity={deskLightOpacity * 0.85} />
                    <stop offset="60%" stopColor={colorData.hex} stopOpacity={deskLightOpacity * 0.3} />
                    <stop offset="100%" stopColor={colorData.hex} stopOpacity="0" />
                  </radialGradient>

                  {/* Halo backlight */}
                  <radialGradient id="haloGlow" cx="430" cy="85" r="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={colorData.hex} stopOpacity={beamOpacity * 0.8} />
                    <stop offset="100%" stopColor={colorData.hex} stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Light Cone projecting downward to left onto desk pad */}
                {isOn && (
                  <>
                    {/* Upper Head Halo */}
                    <circle cx="430" cy="85" r="40" fill="url(#haloGlow)" />
                    
                    {/* Asymmetrical Light Projection Polygon */}
                    <polygon
                      points="435,88 475,90 420,335 150,335"
                      fill="url(#lampBeamGradient)"
                      className="transition-all duration-300"
                    />

                    {/* Desk Light Pool Glow */}
                    <ellipse cx="300" cy="335" rx="190" ry="42" fill="url(#deskPool)" />

                    {/* Zero Glare Cutoff Guide Line */}
                    <line
                      x1="475"
                      y1="90"
                      x2="520"
                      y2="335"
                      stroke={colorData.hex}
                      strokeOpacity={beamOpacity * 0.4}
                      strokeDasharray="4 4"
                    />
                  </>
                )}

                {/* Desk Surface Baseline */}
                <line x1="80" y1="335" x2="630" y2="335" stroke="#33373E" strokeWidth="3" />
                <rect x="75" y="336" width="560" height="24" fill="#1C1E22" rx="2" />

                {/* Desk Pad / Laptop & Notebook */}
                <rect x="170" y="330" width="230" height="6" fill="#2E3239" rx="2" />
                <rect x="200" y="325" width="90" height="5" fill="#3D424C" rx="1" />
                <rect x="310" y="326" width="60" height="4" fill="#3D424C" rx="1" />

                {/* Adjacent OLED Display (Notice: Zero light reaches this screen!) */}
                <g opacity="0.9">
                  <rect x="520" y="160" width="110" height="150" fill="#0A0B0D" stroke="#25282F" strokeWidth="2" rx="4" />
                  <rect x="526" y="166" width="98" height="138" fill="#111317" rx="2" />
                  <rect x="570" y="310" width="12" height="25" fill="#25282F" />
                  <rect x="555" y="333" width="42" height="3" fill="#3A3E48" rx="1" />
                  <text x="575" y="240" fill="#4B5563" fontSize="9" textAnchor="middle" fontFamily="sans-serif">
                    Zero Glare Zone
                  </text>
                  <text x="575" y="254" fill="#374151" fontSize="8" textAnchor="middle" fontFamily="sans-serif">
                    OLED Display
                  </text>
                </g>

                {/* THE LUMEN LAMP CHASSIS (Dynamic Finish Color) */}
                <g id="lumen-chassis" className="transition-all duration-300">
                  {/* Heavy Solid Base (with Wireless Qi Pad) */}
                  <rect
                    x="420"
                    y="325"
                    width="95"
                    height="10"
                    rx="4"
                    fill={activeFinishObj.baseColor}
                    stroke={activeFinishObj.accentHex}
                    strokeWidth="1.5"
                  />
                  {/* Wireless Charging Coil Indicator on Base */}
                  <ellipse cx="468" cy="328" rx="14" ry="3" fill="#000000" fillOpacity="0.3" />
                  <circle cx="468" cy="328" r="1.5" fill={activeFinishObj.accentHex} />

                  {/* Knurled Brass/Aluminum Rotary Dial on Base */}
                  <rect
                    x="495"
                    y="322"
                    width="12"
                    height="5"
                    rx="1.5"
                    fill={selectedFinish === 'brass' ? '#E2C898' : '#717680'}
                  />

                  {/* Vertical Lower Stem Arm */}
                  <line
                    x1="455"
                    y1="325"
                    x2="455"
                    y2="210"
                    stroke={activeFinishObj.bodyColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="455"
                    y1="325"
                    x2="455"
                    y2="210"
                    stroke={activeFinishObj.accentHex}
                    strokeWidth="1"
                    strokeDasharray="1 1"
                  />

                  {/* Precision Friction Elbow Joint */}
                  <circle
                    cx="455"
                    cy="208"
                    r="8"
                    fill={activeFinishObj.baseColor}
                    stroke={activeFinishObj.accentHex}
                    strokeWidth="2"
                  />
                  <circle cx="455" cy="208" r="2.5" fill={activeFinishObj.accentHex} />

                  {/* Upper Articulated Cantilever Arm */}
                  <line
                    x1="455"
                    y1="208"
                    x2="430"
                    y2="92"
                    stroke={activeFinishObj.bodyColor}
                    strokeWidth="7"
                    strokeLinecap="round"
                  />

                  {/* Head Pivot Joint */}
                  <circle
                    cx="430"
                    cy="92"
                    r="6"
                    fill={activeFinishObj.baseColor}
                    stroke={activeFinishObj.accentHex}
                    strokeWidth="1.5"
                  />

                  {/* Horizontal Optical Lamp Head */}
                  <rect
                    x="360"
                    y="84"
                    width="115"
                    height="12"
                    rx="4"
                    fill={activeFinishObj.bodyColor}
                    stroke={activeFinishObj.accentHex}
                    strokeWidth="1.5"
                  />

                  {/* Touchless Gesture Sensor Window on top of head */}
                  <rect
                    x="410"
                    y="82"
                    width="22"
                    height="3"
                    rx="1"
                    fill={isWaving ? '#10B981' : '#0B0D0E'}
                    stroke={isWaving ? '#34D399' : '#2A2E35'}
                    strokeWidth="0.8"
                  />

                  {/* Micro-Prism Optical Emitter Window on bottom of head */}
                  <rect
                    x="365"
                    y="95"
                    width="105"
                    height="3"
                    rx="1"
                    fill={isOn ? colorData.hex : '#33373E'}
                    className="transition-colors duration-200"
                  />

                  {/* Ambient Backlight Halo Notch on Top Rear */}
                  <circle
                    cx="460"
                    cy="87"
                    r="2"
                    fill={isOn ? colorData.hex : '#22252B'}
                    opacity="0.8"
                  />
                </g>

                {/* Gesture Sensor Wave Animation */}
                {isWaving && (
                  <g className="animate-pulse">
                    <path
                      d="M 395 72 Q 421 62 447 72"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 403 65 Q 421 57 439 65"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Graphic Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400 border-t border-neutral-800/80 pt-4 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colorData.hex }} />
                <span className="text-neutral-300 font-medium">{colorData.label}</span>
              </div>
              <button
                onClick={handleSimulateGesture}
                disabled={isWaving}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-neutral-300 bg-neutral-800/80 hover:bg-neutral-700 rounded transition-colors disabled:opacity-50"
              >
                <Hand className={`w-3.5 h-3.5 ${isWaving ? 'text-emerald-400' : 'text-neutral-400'}`} />
                <span>Simulate Sensor Wave</span>
              </button>
            </div>
          </div>

          {/* Right Controls: Tactile Sliders & Configuration */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200/90 flex flex-col justify-between space-y-8">
            
            {/* 1. Quick Lighting Modes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Preset Atmosphere
                </span>
                <span className="text-xs text-neutral-400">One-touch calibrated</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRESET_MODES.map((preset) => {
                  const isActive = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleApplyPreset(preset.id)}
                      className={`text-left p-2.5 rounded-xl border text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold truncate">{preset.name}</span>
                      </div>
                      <span className={`block font-mono text-[11px] tabular-nums ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {preset.kelvin}K · {preset.brightness}%
                      </span>
                    </button>
                  );
                })}
              </div>
              {/* Preset Description */}
              <p className="mt-3 text-xs text-neutral-600 leading-relaxed min-h-[36px]">
                {PRESET_MODES.find((p) => p.id === activePreset)?.description}
              </p>
            </div>

            {/* 2. Stepless Color Temperature Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="kelvin-slider" className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Color Temperature (CCT)
                </label>
                <span className="font-mono text-sm font-semibold text-neutral-900 tabular-nums">
                  {kelvin}K
                </span>
              </div>
              <input
                id="kelvin-slider"
                type="range"
                min="2200"
                max="6500"
                step="50"
                value={kelvin}
                onChange={(e) => {
                  setKelvin(Number(e.target.value));
                  setActivePreset('custom');
                  setIsOn(true);
                }}
                className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                style={{
                  background: 'linear-gradient(to right, #FF9E42 0%, #FFB870 25%, #FFE0B2 50%, #F0F6FF 75%, #CAE3FF 100%)',
                }}
              />
              <div className="flex justify-between items-center text-[11px] text-neutral-500 font-mono mt-1.5">
                <span>2,200K (Candlelight)</span>
                <span>4,000K (Neutral)</span>
                <span>6,500K (Noon Sun)</span>
              </div>
            </div>

            {/* 3. Brightness & Lux Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="brightness-slider" className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Luminous Intensity
                </label>
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-600 tabular-nums">
                  <span className="font-semibold text-neutral-900 text-sm">{brightness}%</span>
                  <span>·</span>
                  <span>{currentLux} Lux</span>
                </div>
              </div>
              <input
                id="brightness-slider"
                type="range"
                min="5"
                max="100"
                step="1"
                value={brightness}
                onChange={(e) => {
                  setBrightness(Number(e.target.value));
                  setIsOn(true);
                }}
                className="w-full h-2 rounded-lg bg-neutral-200 appearance-none cursor-pointer accent-neutral-900"
              />
              <div className="flex justify-between items-center text-[11px] text-neutral-500 font-mono mt-1.5">
                <span>100 Lux (Subtle Bedside)</span>
                <span>750 Lux (Standard Office)</span>
                <span>1,500 Lux (Precision Drafting)</span>
              </div>
            </div>

            {/* 4. Material Finish Selector */}
            <div className="pt-2 border-t border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Hardware Finish
                </span>
                <span className="text-xs font-medium text-neutral-900">{activeFinishObj.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {FINISH_OPTIONS.map((finish) => {
                  const isSelected = selectedFinish === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => onFinishChange(finish.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-white border-neutral-900 shadow-sm ring-1 ring-neutral-900'
                          : 'bg-white/60 border-neutral-200 hover:border-neutral-300 hover:bg-white'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: finish.hex }}
                      />
                      <span className="text-xs font-medium text-neutral-800 leading-none">
                        {finish.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA anchor to pricing */}
            {onSelectTierClick && (
              <div className="pt-1">
                <button
                  onClick={onSelectTierClick}
                  className="w-full py-3 px-4 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl font-medium text-sm transition-colors text-center whitespace-nowrap"
                >
                  Order in {activeFinishObj.name} →
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
