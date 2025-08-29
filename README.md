# Portfolio Freelance – Stack & Qualité de code

[![CI](https://github.com/elise/portfolio-freelance/actions/workflows/ci.yml/badge.svg)](https://github.com/elise/portfolio-freelance/actions/workflows/ci.yml)

Application front-end basée sur Next.js 15 (App Router), React 19, TypeScript et Tailwind CSS 4. La qualité de code est assurée par ESLint (Flat config), Prettier (avec tri Tailwind), Commitlint et des hooks Git via Husky + lint-staged.

## Prérequis

- Node.js >= 18.18 (20+ recommandé)
- npm (lockfile présent)

## Installation & Démarrage

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de production et exécution:

```bash
npm run build
npm start
```

## Scripts utiles

- `dev`: lance le serveur Next en développement
- `build`: build de production Next
- `start`: exécute le build
- `lint`: analyse ESLint sur `src/**/*.{js,jsx,ts,tsx}`
- `lint:fix`: ESLint avec corrections automatiques
- `lint:next`: règles Next.js spécifiques
- `format`: applique Prettier sur le repo
- `format:check`: vérifie le formatage Prettier
- `typecheck`: vérification TypeScript sans émettre
- `prepare`: installe Husky (exécuté automatiquement après `npm install`)

## Qualité de code & Git hooks

### Prettier

- Config: `.prettierrc` (plugin `prettier-plugin-tailwindcss` pour trier les classes Tailwind)
- Ignore: `.prettierignore`
- Usage manuel: `npm run format` / `npm run format:check`

### ESLint (Flat config)

- Config: `eslint.config.mjs` (Next + TypeScript + Prettier)
- VS Code: corrections automatiques à l’enregistrement via `.vscode/settings.json`
- Usage: `npm run lint` / `npm run lint:fix` / `npm run lint:next`

### Commitlint (Conventional Commits)

- Config: `commitlint.config.mjs` (extends `@commitlint/config-conventional`)
- Hook: `.husky/commit-msg` valide le message de commit
- Template de message (optionnel): `.gitmessage`
  - Pour l’activer: `git config commit.template .gitmessage`

### Husky + lint-staged

- Installé via `npm install` (script `prepare`)
- Hooks configurés:
  - `pre-commit`: exécute `lint-staged` uniquement sur les fichiers indexés
  - `commit-msg`: exécute `commitlint` sur le message de commit
  - `pre-push`: exécute `npm run lint && npm run typecheck`
- `lint-staged` (dans `package.json`):
  - `**/*.{js,jsx,ts,tsx}` → `eslint --fix` puis `prettier --write`
  - `**/*.{json,md,css,scss,mdx}` → `prettier --write`

## Stack technique

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4 (+ plugin de tri des classes via Prettier)
- Framer Motion (animations)
- ESLint Flat config + Prettier
- Husky + lint-staged + Commitlint (Conventional Commits)

## Structure du projet (extrait)

- `src/app`: App Router, pages et layout
- `src/components`: composants UI (ex: `Hero`, `CTASection`, `Navbar`…)
- `src/hooks`: hooks personnalisés
- `src/lib`: utilitaires
- `public`: assets statiques

## Flux de contribution

1. Créer une branche feature: `git checkout -b feat/ma-feature`
2. Développer, sauvegarder (VS Code formate et ESLint corrige si possible)
3. `git add -p` puis `git commit` (respecter Conventional Commits)
4. Le hook `pre-commit` formate/linte les fichiers indexés
5. `git push` → le hook `pre-push` vérifie lint + types

Format de commit recommandé (Conventional Commits):

```
feat(scope): courte description à l’infinitif

Corps optionnel: quoi/pourquoi/comment

Footer optionnel: Closes #123
```

Types possibles: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

## Déploiement

- Build: `npm run build`
- L’app peut être déployée sur Vercel/Netlify/Node (SSR Next 15). Assurez-vous d’utiliser une version de Node compatible (>= 18.18, 20+ conseillé).

## Astuces VS Code

- `.vscode/settings.json` force Prettier comme formateur et applique `source.fixAll.eslint` à l’enregistrement.
- Si le formatage ne s’applique pas: vérifier que l’extension Prettier est activée et que le Workspace utilise la config du dépôt.

## Intégration Continue (CI)

- Workflow: `.github/workflows/ci.yml`
- Déclencheurs: `pull_request` (toutes branches) et `push` sur `main` + `workflow_dispatch` (manuel)
- Paths ignorés: changements Markdown (`**/*.md`) n’exécutent pas la CI
- Concurrency: annule les exécutions en double par branche
- Job `quality`: `format:check` → `lint` → `typecheck` → `commitlint`
- Job `build` (après quality): `npm run build`
- Environnement: Node 20, cache npm
- Tests: bloc commenté prêt à activer si besoin
