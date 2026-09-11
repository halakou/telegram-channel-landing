import type { Channel } from '../types/channel';

export interface ChannelRepository {
  getBySlug(slug: string): Promise<Channel | null>;
  listAll(): Promise<Channel[]>;
}
