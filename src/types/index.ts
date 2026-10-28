export type LampFinish = 'graphite' | 'snow' | 'brass';

export interface FinishOption {
  id: LampFinish;
  name: string;
  hex: string;
  accentHex: string;
  bodyColor: string;
  baseColor: string;
}

export interface PresetMode {
  id: string;
  name: string;
  kelvin: number;
  brightness: number; // 0 - 100
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  features: string[];
  specsSummary: string;
  inStock: boolean;
  shippingEstimate: string;
}

export interface CartItem {
  id: string;
  planId: string;
  name: string;
  finish: LampFinish;
  price: number;
  quantity: number;
  includeDeskMount?: boolean;
}
