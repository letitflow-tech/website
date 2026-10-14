# letitflow.tech

Source of the public site [letitflow.tech](https://letitflow.tech): a static site (HTML, CSS, one JS file, images), deployed on Netlify. Imported on 14 October 2026 from the product owner's PC (`Documents/Startup/Website` and `Website_tools`, last edited 4 October 2026) for third-party-integration#313; before that the source had no history.

| Folder | Content |
|---|---|
| [Website/](Website/) | The published site: `index.html` (EN), `fr/`, `de/`, `es/`, `it/` (generated), legal pages, `css/`, `js/main.js`, `assets/`, `robots.txt`, `sitemap.xml` |
| [tools/](tools/) | Build step: `build_site.py` writes the texts of `i18n_strings.py` and `i18n_more.py` into `js/main.js`, the language pages, hreflang, FAQ JSON-LD and `sitemap.xml` |

## Edit and build

Edit the texts in `tools/i18n_*.py` (never the generated `Website/xx/index.html`), then:

```
python tools/build_site.py
```

## Netlify

Until the site is linked, deploys stay manual. To deploy from this repository (Netlify → the site → Site configuration → Build & deploy → Link repository): choose GitHub, authorize Netlify on `letitflow-tech` for this repository only, pick `website`, branch `main`, **build command empty, publish directory `Website`**. Check that a deploy preview shows the same pages as the live site before switching.

Contact on the site: contact@letitflow.tech only (never a personal phone number).
