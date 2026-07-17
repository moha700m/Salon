export const CONTACT_STATUSES = [
  'NEW',
  'NEEDS_REVIEW',
  'NO_WEBSITE',
  'PREVIEW_GENERATING',
  'PREVIEW_READY',
  'READY_TO_CONTACT',
  'CONTACTED',
  'REPLIED',
  'INTERESTED',
  'NOT_INTERESTED',
  'DO_NOT_CONTACT',
  'PHONE_MISSING',
  'ERROR',
] as const;

export type ContactStatus = (typeof CONTACT_STATUSES)[number];
export type WebsiteStatus = 'HAS_WEBSITE' | 'NO_WEBSITE' | 'NEEDS_REVIEW';

export interface PhotoAttribution {
  displayName?: string;
  uri?: string;
  photoUri?: string;
}

export interface PlacePhoto {
  name?: string;
  placeId?: string;
  index?: number;
  widthPx?: number;
  heightPx?: number;
  authorAttributions?: PhotoAttribution[];
}

export interface LeadRecord {
  id: string;
  google_place_id: string;
  name: string;
  phone_local: string | null;
  phone_international: string | null;
  address: string | null;
  city: string;
  district: string | null;
  latitude: number | null;
  longitude: number | null;
  rating: number | null;
  reviews_count: number;
  business_status: string | null;
  maps_url: string | null;
  website_url: string | null;
  website_status: WebsiteStatus;
  opening_hours_json: string[];
  photos_json: PlacePhoto[];
  place_data_json: Record<string, unknown>;
  primary_type: string | null;
  types_json: string[];
  contact_status: ContactStatus;
  contact_block_reason: string | null;
  notes: string | null;
  last_contacted_at: string | null;
  last_google_fetch_at: string;
  created_at: string;
  updated_at: string;
}

export interface PreviewService {
  name: string;
  description: string;
  editable: boolean;
}

export interface PreviewRecord {
  id: string;
  lead_id: string;
  slug: string;
  access_token_hash: string | null;
  title: string;
  subtitle: string | null;
  about_text: string | null;
  services_json: PreviewService[];
  gallery_json: PlacePhoto[];
  theme_json: Record<string, unknown>;
  is_active: boolean;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface OutreachMessageRecord {
  id: string;
  lead_id: string | null;
  preview_id: string | null;
  message_text: string | null;
  ai_model: string | null;
  version: number;
  created_at: string;
  updated_at: string;
}
