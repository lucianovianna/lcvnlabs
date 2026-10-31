# lcvnlabs

Personal portfolio site for [Luciano Vianna](https://github.com/lucianovianna), built with Astro.

## Stack

- [Astro](https://astro.build/) — static site generator (output: static)
- [astro-icon](https://github.com/natemoo-re/astro-icon) — interface icons from Lucide
- Native CSS, Inter typography, petroleum palette and the B2 SVG brand mark
- Hosted at [lcvnlabs.com.br](https://lcvnlabs.com.br), deployed via GitHub Actions

## Development

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the build locally
```

## Interface

- Responsive single-page portfolio with keyboard-accessible mobile navigation
- Portuguese/English content and light/dark themes, with saved preferences
- Content and native navigation remain usable without JavaScript
- Preferences still work for the current visit when browser storage is blocked
- Reduced-motion support and visible keyboard focus

Visual decisions: [DESIGN.md](DESIGN.md).
Validation and captures: [docs/design/verification.md](docs/design/verification.md).

## License & Copyright

The source code is licensed under the [MIT License](LICENSE).

All written content, design, and project descriptions are copyright © Luciano Vianna — all rights reserved.
