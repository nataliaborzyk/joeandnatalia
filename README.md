# Natalia & Joe — Wedding Website

**September 18th, 2027 · Zaczarowana Furmanka**

## Structure

```
wedding-site/
├── index.html          ← Home (hero + countdown)
├── venue.html          ← The Venue (barn, dress code, directions)
├── travel.html         ← Stay & Travel (hotels + shuttle)
├── faq.html            ← FAQ (accordion)
├── rsvp.html           ← RSVP (dynamic multi-person form)
└── assets/
    ├── style.css        ← Shared styles
    ├── main.js          ← Shared JS (nav, lang toggle, animations)
    ├── flower.svg       ← Botanical illustration (your file)
    └── nataliaandjoe.svg ← Names in outline paths (your file)
```

## Deploy to GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `natalia-and-joe`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Your site will be live at `https://yourusername.github.io/natalia-and-joe/`

## Formspree setup (RSVP)

1. Log in to your Formspree account at [formspree.io](https://formspree.io)
2. Click **+ New Form**, name it "Wedding RSVP"
3. Copy the form ID (looks like `xpzgkwba`)
4. Open `rsvp.html` and find this line:
   ```
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID

## Language

The site supports **PL / EN** via a toggle in the nav. All translations live in `assets/main.js` inside the `TRANSLATIONS` object — update any copy there.

## Updating content

All placeholder content is in `assets/main.js` in the `TRANSLATIONS` object (one block for `pl`, one for `en`). Update the values there — no need to touch the HTML files.

## Custom domain (optional)

To use a custom domain (e.g. `nataliajoe2027.pl`):
1. Add a `CNAME` file to the repo root with your domain
2. Configure DNS at your registrar to point to GitHub Pages
