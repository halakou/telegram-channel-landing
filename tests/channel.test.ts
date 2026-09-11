import { describe, it, expect } from 'vitest';
import { channels } from '../src/data/channels/index';
import type { Channel } from '../src/types/channel';

describe('Channel data integrity', () => {
  it('at least one channel exists', () => {
    expect(channels.length).toBeGreaterThan(0);
  });

  channels.forEach((ch: Channel) => {
    describe(`channel: ${ch.slug}`, () => {
      it('has a valid slug', () => expect(ch.slug).toMatch(/^[a-z0-9-]+$/));
      it('has a non-empty name', () => expect(ch.name.length).toBeGreaterThan(0));
      it('has a valid telegramUrl', () => expect(ch.telegramUrl).toMatch(/^https:\/\/t\.me\//));
      it('has highlights', () => expect(ch.highlights.length).toBeGreaterThanOrEqual(3));
      it('has recentCards', () => expect(ch.recentCards.length).toBeGreaterThanOrEqual(1));
      it('has seo title and description', () => {
        expect(ch.seo.title.length).toBeGreaterThan(0);
        expect(ch.seo.description.length).toBeGreaterThan(0);
      });
    });
  });
});
