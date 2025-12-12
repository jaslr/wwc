# CLAUDE.md - Work With Chip

**Live URL**: https://www.workwithchip.com

Personal portfolio website showcasing software development projects.

## Deploy to Production

```bash
# 1. Commit changes
git add .
git commit -m "Your commit message"

# 2. Push to GitHub (triggers auto-deploy to Cloudflare Pages)
git push origin main

# 3. Monitor GitHub Actions
# https://github.com/jaslr/wwc/actions
# Wait for green checkmark

# 4. Site is live at https://www.workwithchip.com
```

## Deployment Pipeline

1. **Push to main** → triggers GitHub Actions
2. **GitHub Actions** → runs `wrangler pages deploy` to Cloudflare Pages
3. **Cloudflare Pages** → serves at www.workwithchip.com

## Manual Deploy (if needed)

```bash
npx wrangler pages deploy . --project-name=workwithchip
```

## GitHub Secrets Required

- `CLOUDFLARE_ACCOUNT_ID` - Cloudflare account ID
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Pages write permission

## Project Structure

```
wwc/
├── index.html          # Main page with WORK and CONTACT sections
├── work/
│   ├── work01.html     # TradeSync
│   ├── work02.html     # Octopus fence estimator
│   ├── work03.html     # EasyCarrier
│   ├── work04.html     # Junipa
│   └── work06.html     # Brontiq Books
├── images/             # Project screenshots
├── css/styles.css      # Custom styles
└── js/scripts.js       # Theme switcher
```

## Tech Stack

- Static HTML + Tailwind CSS + DaisyUI
- Hosted on Cloudflare Pages

## Portfolio Projects

1. **TradeSync** - Email/ServiceM8/Xero data sync for invoicing
2. **Octopus** - Fence estimator for sales teams
3. **EasyCarrier** - Multi-carrier shipping rate calculator
4. **Junipa** - Teacher collaboration software
5. **Brontiq Books** - Local-first invoicing and bookkeeping system
