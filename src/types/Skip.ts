export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null; // null olabileceği için | null ekledik
  per_tonne_cost: number | null; // null olabileceği için | null ekledik
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string; // Tarih string formatında geldiği için
  updated_at: string; // Tarih string formatında geldiği için
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface ApiSkipResponse {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  Skip: Skip; // Skip bilgilerini içeren bir nesne
}
