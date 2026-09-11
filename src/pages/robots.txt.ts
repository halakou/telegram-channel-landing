export async function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://telegram-channel-landing.workers.dev/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
