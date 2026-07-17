import { getAppUrl } from '@/lib/app-url';
import { createPreviewToken } from '@/lib/preview-access';

export function buildPreviewUrl(preview: { id: string; slug: string }): string {
  const token = createPreviewToken(preview.id, preview.slug);
  return `${getAppUrl()}/preview/${encodeURIComponent(preview.slug)}?token=${encodeURIComponent(token)}`;
}
