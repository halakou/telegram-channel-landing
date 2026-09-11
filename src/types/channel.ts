export interface ChannelTheme {
  accent: string;        // CSS hex e.g. "#6C63FF"
  accentRgb: string;     // e.g. "108, 99, 255"  for rgba()
}

export interface ChannelStats {
  members: number;
  membersLabel: string;  // e.g. "24.8K Members"
  postsPerDay: string;   // e.g. "3–5 posts/day"
  isPublic: boolean;
  isVerified: boolean;
}

export interface ContentCard {
  id: string;
  emoji: string;
  title: string;
  excerpt: string;
  date: string;          // ISO-8601
  views?: number;
}

export interface FeaturedPost {
  id: string;
  title: string;
  body: string;
  date: string;
  views: number;
  imageAlt?: string;
}

export interface Highlight {
  icon: string;          // single emoji or SVG identifier
  title: string;
  description: string;
}

export interface Channel {
  // identity
  slug: string;
  name: string;
  username: string;        // without @
  description: string;
  category: string;
  telegramUrl: string;     // https://t.me/<username>

  // assets
  avatarEmoji: string;     // fallback when no image file

  // theme
  theme: ChannelTheme;

  // data
  stats: ChannelStats;
  highlights: Highlight[];
  featuredPost: FeaturedPost;
  recentCards: ContentCard[];

  // meta
  isDemo: boolean;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
}
