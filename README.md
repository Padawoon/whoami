# whoami

Personal portfolio of Dmitrii Khitryi, QA engineer. Static site on GitHub Pages at [khitryi.com](https://khitryi.com).

## Structure

- `index.html` — the page; Russian text is in the markup, so it reads without JavaScript.
- `assets/js/i18n.js` — all Russian and English strings. Keys match the `data-i18n*` attributes in `index.html`.
- `assets/js/main.js` — language and theme switch, navigation highlight, contact form, the Allure report demo and the bugs.
- `assets/css/styles.css` — styles; colours for both themes are tokens at the top.
- `assets/img/` — product screenshots, favicons and the Open Graph image.
- `assets/docs/` — CV in Russian and English.

To change a text, edit it in `i18n.js` and in `index.html` (the Russian version) with the same key.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Contact form

The form posts to Web3Forms from the browser; submissions arrive by email.

## Bug counter

Squashed bugs are counted in the `bug_reports` cookie (`SameSite=Strict`, `Secure` on https, one year), with `localStorage` as a fallback.
