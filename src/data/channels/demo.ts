import type { Channel } from '../../types/channel';

export const demoChannel: Channel = {
  slug: 'demo-channel',
  name: 'Nova Digest',
  username: 'nova_digest_demo',
  description:
    'A curated stream of useful ideas, tools, technology and discoveries — delivered daily.',
  category: 'Technology & Ideas',
  telegramUrl: 'https://t.me/nova_digest_demo',
  avatarEmoji: '✦',
  isDemo: true,

  theme: {
    accent: '#6C63FF',
    accentRgb: '108, 99, 255',
  },

  stats: {
    members: 24800,
    membersLabel: '24.8K Members',
    postsPerDay: '3–5 posts/day',
    isPublic: true,
    isVerified: false,
  },

  highlights: [
    {
      icon: '⚡',
      title: 'Curated Daily',
      description: 'Every post is hand-picked for signal-to-noise ratio.',
    },
    {
      icon: '🔭',
      title: 'Wide Lens',
      description: 'Technology, ideas, tools — the full picture.',
    },
    {
      icon: '🗂',
      title: 'Structured Format',
      description: 'Clean, scannable posts you can read in under two minutes.',
    },
    {
      icon: '🌐',
      title: 'Open Channel',
      description: 'No paywall. No login. Just join and read.',
    },
  ],

  featuredPost: {
    id: 'post-001',
    title: 'The Quiet Productivity Stack',
    body:
      'The best tools are the ones you stop thinking about. A short list of software that earns its place every week — from terminal utilities to async communication.',
    date: '2025-06-15',
    views: 6200,
  },

  recentCards: [
    {
      id: 'card-001',
      emoji: '🧠',
      title: 'Why Most Dashboards Fail',
      excerpt: 'Metrics without context are just noise. Here is how to design for decisions.',
      date: '2025-06-20',
      views: 4100,
    },
    {
      id: 'card-002',
      emoji: '📡',
      title: 'Open Models Are Catching Up Fast',
      excerpt: 'A practical comparison of what is now possible without an API key.',
      date: '2025-06-18',
      views: 5900,
    },
    {
      id: 'card-003',
      emoji: '🗺',
      title: 'Designing Systems That Last',
      excerpt: 'Short-term thinking kills long-term products. Notes from three years of rewrites.',
      date: '2025-06-16',
      views: 3300,
    },
  ],

  seo: {
    title: 'Nova Digest — Technology & Ideas on Telegram',
    description:
      'Join Nova Digest on Telegram for daily curated ideas, tools and discoveries. 24.8K members and growing.',
  },
};
