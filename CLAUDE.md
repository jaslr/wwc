# CLAUDE.md - Work With Chip

**Live URL**: https://www.workwithchip.com

Personal portfolio website showcasing software development projects.

---

## "Get It Live" Workflow

When the user says **"get it live"**, follow these steps:

### 1. Bump Version (optional but recommended)
```bash
npm run version:patch   # For small changes (1.0.0 → 1.0.1)
npm run version:minor   # For new features (1.0.0 → 1.1.0)
npm run version:major   # For breaking changes (1.0.0 → 2.0.0)
```
This updates package.json version and adds a version marker to index.html.

### 2. Stage and Commit Changes
```bash
git add .
git status  # Review what's being committed
git commit -m "descriptive message about changes"
```

### 3. Push to GitHub
```bash
git push origin main
```

### 4. Monitor GitHub Actions
- Go to: https://github.com/jaslr/wwc/actions
- Wait for the workflow to complete (green checkmark)
- If it fails:
  - Check the error logs
  - Fix the issue
  - Commit and push again

### 5. Verify on Production
- Visit https://www.workwithchip.com
- Verify the changes are visible
- Check page source for version marker: `<!-- v1.0.x | timestamp -->`
- Hard refresh if needed: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

---

## Quick Reference

| Command | Action |
|---------|--------|
| `npm run version:patch` | Bump patch version (bug fixes) |
| `npm run version:minor` | Bump minor version (new features) |
| `npm run version:major` | Bump major version (breaking changes) |
| `npm run deploy` | Manual deploy to Cloudflare |
| `git push origin main` | Triggers auto-deploy via GitHub Actions |

---

## Deployment Pipeline

```
Push to main → GitHub Actions → Cloudflare Pages → www.workwithchip.com
```

1. **Push to main** triggers GitHub Actions workflow
2. **GitHub Actions** runs `wrangler pages deploy`
3. **Cloudflare Pages** serves the site at www.workwithchip.com

---

## Manual Deploy (bypass GitHub Actions)

```bash
npx wrangler pages deploy . --project-name=workwithchip
```

---

## Troubleshooting

### GitHub Actions Failed
1. Check logs at https://github.com/jaslr/wwc/actions
2. Common issues:
   - Missing secrets (CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN)
   - Syntax errors in workflow file
   - Wrangler authentication issues

### Changes Not Showing on Site
1. Hard refresh the browser (Ctrl+Shift+R)
2. Check GitHub Actions completed successfully
3. Verify version marker in page source matches latest
4. Wait 1-2 minutes for Cloudflare edge propagation

### Manual Verification
```bash
# Check version in source
curl -s https://www.workwithchip.com | grep -o '<!-- v[^>]*-->'
```

---

## GitHub Secrets Required

These are already configured in the repository:
- `CLOUDFLARE_ACCOUNT_ID` - Cloudflare account ID
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Pages write permission

---

## Project Structure

```
wwc/
├── index.html          # Main page with WORK and CONTACT sections
├── package.json        # Version and npm scripts
├── cache-bust.txt      # Cache busting timestamp
├── work/
│   ├── work01.html     # TradeSync
│   ├── work02.html     # Octopus fence estimator
│   ├── work03.html     # EasyCarrier
│   ├── work04.html     # Junipa
│   └── work06.html     # Brontiq Books
├── images/             # Project screenshots
├── css/styles.css      # Custom styles
├── js/scripts.js       # Theme switcher
├── scripts/
│   └── update-version.js  # Version marker script
└── .github/workflows/
    └── pages.yml       # Cloudflare Pages deployment
```

---

## Tech Stack

- Static HTML + Tailwind CSS + DaisyUI
- Hosted on Cloudflare Pages
- CI/CD via GitHub Actions

---

## Portfolio Projects

1. **TradeSync** - Email/ServiceM8/Xero data sync for invoicing
2. **Octopus** - Fence estimator for sales teams
3. **EasyCarrier** - Multi-carrier shipping rate calculator
4. **Junipa** - Teacher collaboration software
5. **Brontiq Books** - Local-first invoicing and bookkeeping system
