import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const response = await next();
  const headers = response.headers;
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",   // needed for Astro islands
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-src https://t.me",              // allow future Telegram post embeds
    ].join('; ')
  );
  return response;
});
