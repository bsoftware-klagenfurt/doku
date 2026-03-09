# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.5 create --template minimal --types ts --add eslint vitest="usages:unit,component" playwright sveltekit-adapter="adapter:static" devtools-json mcp="ide:vscode,other+setup:remote" --install npm doku
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

In the repository settings, configure GitHub Pages to use:

- **Source: GitHub Actions**

## TinaCloud secrets

Set the following repository secrets:

- `TINA_PUBLIC_CLIENT_ID`
- `TINA_TOKEN`

## Important note

GitHub Pages is public. Do not store private content in this repository if it must not be publicly accessible.
