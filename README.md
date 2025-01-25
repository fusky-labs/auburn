# Auburn

A "framework" for writing web OSes into your HTML powered by Lit, including React support

## Folder structure

This is a monorepo containing docs written in Astro and its source components handled
by Vite, written in both Lit and React.

- [`docs`](/docs/) - Documentation site
- `packages`
  - [`@auburn-core`](/packages/@auburn-core/): The core package
  - [`@auburn-react`](/packages/@auburn-react/): React version based from `@auburn-core`

## Setup

Prerequisites:

- Node.js version 21 or higher
- PNPM package manager

Install dependencies with `pnpm install`:

```console
pnpm install
```

### Editing the documentation

Run the `dev:docs` command that is aliased from [`docs`](/docs/)

```console
pnpm run dev:docs
```

## License

Apache-2.0
