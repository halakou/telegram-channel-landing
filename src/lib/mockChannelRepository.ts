import type { Channel } from '../types/channel';
import type { ChannelRepository } from './channelRepository';
import { channels } from '../data/channels';

export class MockChannelRepository implements ChannelRepository {
  async getBySlug(slug: string): Promise<Channel | null> {
    return channels.find(c => c.slug === slug) ?? null;
  }
  async listAll(): Promise<Channel[]> {
    return channels;
  }
}
