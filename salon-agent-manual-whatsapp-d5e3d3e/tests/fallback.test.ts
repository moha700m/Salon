import test from 'node:test';
import assert from 'node:assert/strict';
import { fallbackCopy } from '@/lib/openai-service';

test('OpenAI fallback stays factual and contains no invented prices', () => {
  const copy = fallbackCopy({ name: 'حلاق الاختبار', city: 'الدمام', district: null, rating: 4.5, reviews_count: 20 }, 'https://example.test/preview/x?token=y');
  assert.equal(copy.services.length, 4);
  assert.equal(copy.messageVariants.length, 3);
  assert.ok(copy.messageVariants.every(message => message.includes('حلاق الاختبار') && message.includes('https://example.test')));
  assert.ok(copy.services.every(service => !/ر\.س|ريال|\d{2,}/.test(service.description)));
});
