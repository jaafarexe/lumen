import { FinishOption, PresetMode, PricingPlan } from '../types';

export const FINISH_OPTIONS: FinishOption[] = [
  {
    id: 'graphite',
    name: 'Space Graphite',
    hex: '#26282B',
    accentHex: '#4A4E54',
    bodyColor: '#1E2024',
    baseColor: '#2B2E33',
  },
  {
    id: 'snow',
    name: 'Matte Snow',
    hex: '#E9ECEF',
    accentHex: '#CED4DA',
    bodyColor: '#F8F9FA',
    baseColor: '#DEE2E6',
  },
  {
    id: 'brass',
    name: 'Brushed Raw Brass',
    hex: '#C8A870',
    accentHex: '#E2C898',
    bodyColor: '#B29156',
    baseColor: '#8C6F3A',
  },
];

export const PRESET_MODES: PresetMode[] = [
  {
    id: 'deep-focus',
    name: 'Deep Focus',
    kelvin: 5200,
    brightness: 90,
    description: 'Crisp daylight spectrum suppresses melatonin for rigorous problem-solving and technical work.',
    iconName: 'Zap',
  },
  {
    id: 'circadian',
    name: 'Circadian Auto',
    kelvin: 4000,
    brightness: 80,
    description: 'Dynamically shifts throughout the day according to natural outdoor solar coordinates.',
    iconName: 'Sun',
  },
  {
    id: 'editorial',
    name: 'Editorial Reading',
    kelvin: 3400,
    brightness: 72,
    description: 'Balanced warm-neutral high contrast optimized for paper, books, and matte tablet screens.',
    iconName: 'Eye',
  },
  {
    id: 'late-night',
    name: 'Late Night Drafting',
    kelvin: 2400,
    brightness: 45,
    description: 'Zero blue wavelengths; warm amber glow protects your natural circadian sleep onset.',
    iconName: 'Moon',
  },
  {
    id: 'pomodoro',
    name: 'Pomodoro Pulse',
    kelvin: 4800,
    brightness: 85,
    description: '25-minute focus intervals with a gentle 30-second amber breathing transition for breaks.',
    iconName: 'Clock',
  },
];

export const FEATURES_DATA = [
  {
    id: '01',
    title: 'Circadian Auto-Tune',
    subtitle: 'Biological Solar Synchronization',
    description: 'Monitors real-time solar zenith angles and gradually shifts your desk lighting from an invigorating 5,500K morning surge down to a soothing 2,200K melatonin-preserving ember as evening settles.',
    metric: '2,200K – 6,500K',
    metricLabel: 'Stepless CCT Transition',
    category: 'Biophilic Engineering',
  },
  {
    id: '02',
    title: 'Asymmetrical Polarized Lens',
    subtitle: 'Absolute Zero Screen Reflection',
    description: 'Our proprietary micro-etched optical prism angles 100% of the luminous flux downward across your desk pad. Light terminates with a sharp optical cutoff 2 inches before your display, leaving zero glare on glass or matte monitors.',
    metric: '0.0% Glare',
    metricLabel: 'Direct Screen Reflection',
    category: 'Optical Architecture',
  },
  {
    id: '03',
    title: 'Museum-Grade 98+ CRI',
    subtitle: 'Full-Spectrum SunSim Emitters',
    description: 'Utilizing custom dual-die gallium-nitride emitters with an R9 saturated red score exceeding 95. Paper sketches, Pantone swatches, fabric textures, and skin tones render with absolute chromatic fidelity.',
    metric: 'Ra 98.4 / R9 96',
    metricLabel: 'Color Rendering Index',
    category: 'Color Science',
  },
  {
    id: '04',
    title: 'Touchless Infrared Gesture & Knurled Dial',
    subtitle: 'Frictionless Spatial Interaction',
    description: 'Hover a hand 3 inches above the sensor bar to switch on or off without leaving greasy fingerprints. Hold your hand stationary to dim continuously, or dial the solid milled brass haptic rotary knob for tactile micro-adjustments.',
    metric: '< 15ms',
    metricLabel: 'Infrared Sensor Latency',
    category: 'Spatial Controls',
  },
  {
    id: '05',
    title: 'Integrated Flow Pomodoro Light Cues',
    subtitle: 'Cognitive Rhythm Without Alarms',
    description: 'Replace jarring phone alarms with quiet ambient breathing pulses. Lumen stays at peak focus clarity for 25 minutes, then breathes into a calm amber hue for 5 minutes of restorative cognitive rest.',
    metric: '25m / 5m',
    metricLabel: 'Cognitive Flow Cycle',
    category: 'Productivity',
  },
  {
    id: '06',
    title: 'Aerospace Billet & 15W Qi Base',
    subtitle: 'Weighted Unibody Solid Stand',
    description: 'Machined from a single block of recycled 6063 aerospace aluminum with concealed spring counterbalance dampening. The weighted base integrates a 15W fast wireless charging pad that keeps your phone topped up without extra cables.',
    metric: '2.4 kg',
    metricLabel: 'Anti-Tip Center of Gravity',
    category: 'Industrial Craft',
  },
];

export const TECHNICAL_SPECS = [
  { label: 'Max Luminous Flux', value: '1,200 Lumens (Peak)' },
  { label: 'Peak Illuminance', value: '1,500 Lux at 45cm desk height' },
  { label: 'Color Temperature', value: '2,200K – 6,500K stepless tuning' },
  { label: 'Color Accuracy', value: 'CRI Ra ≥ 98.4, R9 ≥ 96, R12 ≥ 95' },
  { label: 'Stroboscopic Flicker', value: '0.00% IEEE 1789-2015 Compliant (Flicker-Free)' },
  { label: 'Optical Architecture', value: 'Asymmetrical polarized micro-prism array' },
  { label: 'Chassis Materials', value: 'Anodized 6063 Aluminum, Solid Milled Brass, Silicone' },
  { label: 'Base Dimensions', value: '160mm diameter × 14mm height' },
  { label: 'Arm Reach & Height', value: '480mm vertical span, 380mm forward reach' },
  { label: 'Weight', value: '2.42 kg (solid counterbalanced stand)' },
  { label: 'Wireless Charging', value: 'Qi Certified 15W Fast Charge with FOD detection' },
  { label: 'Power Input', value: 'USB-C PD 3.0 (65W adapter included)' },
  { label: 'Standby Power', value: '< 0.3W Eco-sleep state' },
  { label: 'Warranty', value: '3-Year Comprehensive Hardware Guarantee' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Lumen Essential',
    tagline: 'Pure circadian focus lighting for focused individual workspaces.',
    price: 249,
    originalPrice: 289,
    specsSummary: 'Weighted Desk Stand · 1,200 Lumens · 98+ CRI · Touchless Gesture Sensor',
    shippingEstimate: 'Ships within 48 hours',
    inStock: true,
    features: [
      'Precision 1,200 Lumen Asymmetrical Head',
      'Full 2,200K – 6,500K Circadian Spectrum',
      'Touchless Infrared Gesture Control',
      'Solid Billet Aluminum Weighted Base',
      '2-Year Hardware Warranty',
      'Free Carbon-Neutral Global Shipping',
    ],
  },
  {
    id: 'studio-pro',
    name: 'Lumen Studio Pro',
    tagline: 'Our flagship configuration engineered for architects, designers, and developers.',
    price: 349,
    originalPrice: 399,
    isPopular: true,
    specsSummary: '15W Wireless Qi Base · Desk Edge Clamp Included · Pomodoro Dial · 3-Yr Warranty',
    shippingEstimate: 'In stock — dispatching next business day',
    inStock: true,
    features: [
      'Everything in Lumen Essential',
      'Integrated 15W Qi Fast Wireless Charging Base',
      'Interchangeable Heavy-Duty Desk Edge Clamp',
      'Haptic Knurled Brass Pomodoro Flow Dial',
      'Ambient Backlight Halo for wall fill lighting',
      '3-Year Extended Replacement Warranty',
      'Complimentary Custom Nameplate Engraving',
    ],
  },
  {
    id: 'atelier-duo',
    name: 'Lumen Atelier Duo',
    tagline: 'Synchronized dual-lamp suite for sprawling L-desks and creative studios.',
    price: 599,
    originalPrice: 698,
    specsSummary: '2× Studio Pro Lamps · Synchronized Mesh Controller · Merino Felt Desk Mat',
    shippingEstimate: 'In stock — dispatching next business day',
    inStock: true,
    features: [
      '2× Lumen Studio Pro Lamps (Any Finish Pair)',
      'Sub-GHz Master-Follower Wireless Sync',
      '2× 15W Wireless Charging Bases + 2× Clamps',
      'Exclusive Handcrafted Merino Wool Desk Mat',
      'Priority White-Glove Support Concierge',
      '5-Year Commercial Studio Warranty',
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    quote: 'The asymmetrical beam is an engineering marvel. It completely washes my desk in daylight-grade light while my 32-inch OLED display remains pitch black and glare-free. My end-of-day eye strain dropped to zero.',
    author: 'Elena Rostova',
    role: 'Partner & Principal Architect',
    company: 'Studio Form & Void, Stockholm',
    verified: 'Verified Studio Pro Owner',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Most desk lamps feel like flimsy plastic toys. Lumen feels like an audio amplifier built in Munich in 1974. Heavy, solid, tactile, and the warm circadian transition at 7 PM gently keeps me grounded without harsh blue light.',
    author: 'Marcus Vance',
    role: 'Senior Staff Infrastructure Engineer',
    company: 'Distributed Systems Labs',
    verified: 'Verified Essential Owner',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'As an ophthalmic researcher, I measure spectral flicker and color rendering daily. Lumen exceeds museum conservation standards with 98.4 Ra and undetectable stroboscopic flicker. It is the only light I recommend to my clinic patients.',
    author: 'Dr. Aris Thorne, MD',
    role: 'Clinical Ophthalmic Ergonomist',
    company: 'Vision Health Research Institute',
    verified: 'Verified Medical Specialist',
    rating: 5,
  },
];

export const PRESS_MENTIONS = [
  { name: 'WALLPAPER*', quote: 'The quietest, most refined piece of task lighting built for modern desks.' },
  { name: 'FAST COMPANY', quote: 'A masterpiece of calm technology and biological lighting rhythm.' },
  { name: 'TECHCRUNCH', quote: 'Lumen solves the universal screen glare problem with optical genius.' },
  { name: 'WIRED', quote: 'Rated 9.5/10 — The gold standard for deep work illumination.' },
];

export const FAQ_ITEMS = [
  {
    question: 'How does the asymmetrical optical lens eliminate screen glare?',
    answer: 'Traditional desk lamps cast light radially in all directions, which bounces directly off glass computer monitors into your pupils. Lumen uses custom micro-prismatic refraction channels that bend the luminous beam forward and strictly downward at a 42-degree cutoff angle. Light illuminates your keyboard, notebook, and desk pad, but terminates 2 inches in front of your display.',
  },
  {
    question: 'How does the Circadian Auto-Tune operate without an app or Wi-Fi?',
    answer: 'Lumen includes an onboard real-time clock with solar latitude presets calibrated via simple timezone toggle on the base, or optional Bluetooth sync with the optional companion web app. It operates 100% autonomously without requiring an active internet connection, external cloud servers, or annoying mobile app logins.',
  },
  {
    question: 'Can Lumen be mounted to standing desks or thin desktop edges?',
    answer: 'Yes. The Lumen Studio Pro configuration includes both the weighted freestanding base (with silicone anti-slip pad) and a heavy-duty CNC aluminum edge clamp that supports desk thicknesses from 10mm up to 65mm. The internal counterbalanced damping ensures zero wobble even when raising or lowering motorized standing desks.',
  },
  {
    question: 'What devices are compatible with the 15W wireless charging base?',
    answer: 'The wireless charging pad is Qi-certified and compatible with all MagSafe and Qi-enabled iPhones (iPhone 8 through latest), Samsung Galaxy series, Google Pixel, and Qi-compatible wireless earbud cases (AirPods Pro, etc.). It features foreign object detection and thermal shutoff for complete safety.',
  },
  {
    question: 'What is your 30-day in-desk trial and warranty policy?',
    answer: 'We want you to experience Lumen in your actual workspace across multiple late-night and daytime sessions. You have 30 days from delivery to test it risk-free. If it does not transform your focus and comfort, return it in original packaging for a full refund with free return shipping. All units include a 2 or 3-year full hardware replacement warranty.',
  },
  {
    question: 'What is included in the box?',
    answer: 'Every Lumen package includes the articulated lamp chassis in your chosen finish, weighted base or clamp mount (depending on tier), a braided 2.0-meter USB-C power cable, a 65W universal USB-C PD power supply with international plugs (US/EU/UK/AU), calibration guide, and cleaning microfiber cloth.',
  },
];
