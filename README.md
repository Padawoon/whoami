# whoami

Personal CV/portfolio site (static, GitHub Pages).

## Local preview

Run any static server in project root, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Contact form

The contact form submits directly to Web3Forms from the frontend.

## Accessibility updates

- Timeline interactions use keyboard-focusable buttons with ARIA attributes.
- Mobile menu supports `aria-expanded`, `aria-hidden`, and `Escape` close.
- Form labels are linked to inputs via `for`/`id`.
