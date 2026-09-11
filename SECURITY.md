# Security

## V1 — No Secrets

This version uses mock data only. No secrets, tokens, or credentials are required.

## Future: Telegram Bot Token

When implementing `TelegramChannelRepository` in V2+:

- Store `TELEGRAM_BOT_TOKEN` as a **Cloudflare Secret** (not an environment variable in source).
- Access via Cloudflare Worker secrets at runtime.
- Never commit tokens to version control.

## CSP Policy

The middleware enforces:

```
default-src 'self'
script-src 'self' 'unsafe-inline'   # needed for Astro islands
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: https:
connect-src 'self'
frame-src https://t.me
```

The `unsafe-inline` for scripts is acceptable for V1 static site. Hardening to nonce-based CSP is planned for V2 if dynamic routes are introduced.

## GitHub Secrets

- `CLOUDFLARE_API_TOKEN` — used only in CI/CD deploy workflow
- `CLOUDFLARE_ACCOUNT_ID` — used only in CI/CD deploy workflow

Both are managed via GitHub repository secrets, never in source code.

To generate API tokens:
1. Cloudflare Dashboard → My Profile → API Tokens
2. Create Token using the "Edit Cloudflare Workers" template
3. Copy the token and add as a GitHub secret
