"""Build step for letitflow.tech (static site in ../Website).

Run:  python build_site.py
- writes all texts (i18n_strings.py + i18n_more.py) into js/main.js
- refreshes the EN texts, language switcher, hreflang and FAQ JSON-LD in index.html
- generates one indexable page per other language: fr/, de/, es/, it/
- writes sitemap.xml
Edit texts in the i18n_*.py files, never directly in the generated xx/index.html pages.
"""
import json
import re
from datetime import date
from pathlib import Path

from i18n_strings import EN, FR, META
from i18n_more import DE, ES, IT, META_MORE

SITE = Path(__file__).resolve().parent.parent / "Website"
BASE = "https://letitflow.tech/"

LANGS = ["en", "fr", "de", "es", "it"]
TEXTS = {"en": EN, "fr": FR, "de": DE, "es": ES, "it": IT}
NAMES = {"en": "English", "fr": "Français", "de": "Deutsch", "es": "Español", "it": "Italiano"}
LOCALES = {"en": "en_GB", "fr": "fr_FR", "de": "de_DE", "es": "es_ES", "it": "it_IT"}
PAGE_META = {"en": META["en"], "fr": {**META["fr"], "home": "accueil", "on-linkedin": ' sur LinkedIn"'}, **META_MORE}


def url(lang):
    return BASE if lang == "en" else f"{BASE}{lang}/"


def escape(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def update_main_js():
    p = SITE / "js" / "main.js"
    s = p.read_text(encoding="utf8")
    start = s.index("const i18n = {")
    end = s.index("\n};", start) + 3
    body = json.dumps({l: TEXTS[l] for l in LANGS}, ensure_ascii=False, indent=2)
    p.write_text(s[:start] + "const i18n = " + body + ";" + s[end:], encoding="utf8")


def apply_strings(html, d):
    pat = re.compile(r'(<(?P<tag>\w+)\b[^>]*\s(data-i18n(?:-html)?)="([\w-]+)"[^>]*>)(.*?)(</(?P=tag)>)', re.S)

    def rep(m):
        attr, key = m.group(3), m.group(4)
        if key not in d:
            return m.group(0)
        val = d[key] if attr == "data-i18n-html" else escape(d[key])
        return m.group(1) + val + m.group(6)
    return pat.sub(rep, html)


def faq_jsonld(d):
    items, i = [], 1
    while f"faq-q{i}" in d:
        items.append({"@type": "Question", "name": d[f"faq-q{i}"],
                      "acceptedAnswer": {"@type": "Answer", "text": d[f"faq-a{i}"]}})
        i += 1
    data = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": items}
    return ('<!--FAQ-JSONLD-START--><script type="application/ld+json">'
            + json.dumps(data, ensure_ascii=False) + "</script><!--FAQ-JSONLD-END-->")


def hreflang_block():
    lines = [f'  <link rel="alternate" hreflang="{l}" href="{url(l)}"/>' for l in LANGS]
    lines.append(f'  <link rel="alternate" hreflang="x-default" href="{BASE}"/>')
    return "\n".join(lines)


def switcher(cur):
    """Language menu for a page in language `cur` (root page for en, /xx/ for others)."""
    prefix = "" if cur == "en" else "../"
    items = []
    for l in LANGS:
        href = (prefix or "./") if l == "en" else ("./" if l == cur else f"{prefix}{l}/")
        active = l == cur
        items.append(
            f'          <li><a class="lang-btn{" active" if active else ""}" href="{href}" hreflang="{l}" lang="{l}" '
            f'data-lang="{l}" role="option" aria-selected="{str(active).lower()}">'
            f'<img src="{prefix}assets/flag-{"gb" if l == "en" else l}.svg" alt="" class="lang-flag-img" width="30" height="20"/>'
            f'<span class="lang-code" aria-label="{NAMES[l]}">{l.upper()}</span></a></li>')
    return "\n".join(items)


def set_common(html, lang):
    d, m = TEXTS[lang], PAGE_META[lang]
    h = apply_strings(html, d)
    h = re.sub(r"<!--FAQ-JSONLD-START-->.*?<!--FAQ-JSONLD-END-->", lambda _: faq_jsonld(d), h, flags=re.S)
    h = re.sub(r'<html lang="\w+">', f'<html lang="{lang}">', h, count=1)
    h = re.sub(r"<title>.*?</title>", f"<title>{escape(m['title'])}</title>", h, count=1, flags=re.S)
    for prop, key in (('name="description"', "description"), ('property="og:title"', "title"),
                      ('property="og:description"', "og-description")):
        h = re.sub(r'(<meta ' + prop + r' content=")[^"]*(")', lambda x: x.group(1) + escape(m[key]) + x.group(2), h, count=1)
    h = re.sub(r'<link rel="canonical" href="[^"]*"/>', f'<link rel="canonical" href="{url(lang)}"/>', h, count=1)
    h = re.sub(r'<meta property="og:url" content="[^"]*"/>', f'<meta property="og:url" content="{url(lang)}"/>', h, count=1)
    # hreflang set (all languages)
    h = re.sub(r'(?:  <link rel="alternate" hreflang="[^"]+" href="[^"]+"/>\n)+', hreflang_block() + "\n", h, count=1)
    # og:locale + alternates
    h = re.sub(r'  <meta property="og:locale:alternate" content="[^"]+"/>\n', "", h)
    alts = "".join(f'  <meta property="og:locale:alternate" content="{LOCALES[l]}"/>\n' for l in LANGS if l != lang)
    h = re.sub(r'  <meta property="og:locale" content="[^"]+"/>\n', f'  <meta property="og:locale" content="{LOCALES[lang]}"/>\n' + alts, h, count=1)
    # language switcher: list + selected flag
    h = re.sub(r'(<ul class="lang-list" id="lang-list"[^>]*>\n).*?(\n        </ul>)', lambda x: x.group(1) + switcher(lang) + x.group(2), h, count=1, flags=re.S)
    prefix = "" if lang == "en" else "../"
    flag = "gb" if lang == "en" else lang
    h = re.sub(r'(<button class="lang-selected"[^>]*>\s*)<img [^>]*/>',
               lambda x: x.group(1) + f'<img src="{prefix}assets/flag-{flag}.svg" alt="{NAMES[lang]}" class="lang-flag-img" width="30" height="20"/>', h, count=1)
    return h


def localize_paths(h, lang):
    m = PAGE_META[lang]
    for a in ('href="css/', 'src="js/', 'href="assets/', 'src="assets/', 'srcset="assets/',
              'href="favicon.ico"', 'href="confidentialite.html"', 'href="mentions-legales.html"'):
        h = h.replace(a, a.replace('"', '"../', 1))
    h = h.replace('aria-label="Let It Flow Dental Tech — homepage"', f'aria-label="Let It Flow Dental Tech — {m["home"]}"')
    h = h.replace(' on LinkedIn"', m["on-linkedin"])
    return h


def build():
    en_path = SITE / "index.html"
    en = set_common(en_path.read_text(encoding="utf8"), "en")
    en_path.write_text(en, encoding="utf8")
    for lang in LANGS[1:]:
        page = localize_paths(set_common(en, lang), lang)
        (SITE / lang).mkdir(exist_ok=True)
        (SITE / lang / "index.html").write_text(page, encoding="utf8")


def write_sitemap():
    today = date.today().isoformat()
    alt = "".join(f'    <xhtml:link rel="alternate" hreflang="{l}" href="{url(l)}"/>\n' for l in LANGS)
    alt += f'    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE}"/>\n'
    urls = [(url(l), alt, "1.0") for l in LANGS]
    urls += [(BASE + "mentions-legales.html", "", "0.2"), (BASE + "confidentialite.html", "", "0.2")]
    body = "".join(f"  <url>\n    <loc>{u}</loc>\n{a}    <lastmod>{today}</lastmod>\n    <priority>{p}</priority>\n  </url>\n" for u, a, p in urls)
    (SITE / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + body + "</urlset>\n", encoding="utf8")


if __name__ == "__main__":
    update_main_js()
    build()
    write_sitemap()
    print("built:", ", ".join(["index.html"] + [f"{l}/index.html" for l in LANGS[1:]] + ["js/main.js", "sitemap.xml"]))
