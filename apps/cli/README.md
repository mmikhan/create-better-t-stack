# Create Better-T-Stack CLI

An interactive CLI tool to quickly scaffold full-stack TypeScript applications with React, Hono, and tRPC. The Better-T-Stack provides a modern, type-safe development experience with the best tools from the TypeScript ecosystem.

## Quick Start

Run without installing globally:

```bash
npx create-better-t-stack@latest
# OR
bunx create-better-t-stack
```

Follow the prompts to configure your project.

## Features

- **Monorepo**: Turborepo for optimized build system and workspace management
- **Frontend**: React, TanStack Router, TanStack Query, Tailwind CSS with shadcn/ui components
- **Backend**: Hono, tRPC
- **Database Options**: SQLite (via Turso), PostgreSQL, or no database
- **ORM Selection**: Choose between Drizzle ORM or Prisma
- **Authentication**: Optional auth setup with Better-Auth
- **Progressive Web App**: Add PWA support with service workers and installable apps
- **Desktop Apps**: Build native desktop apps with Tauri integration
- **Code Quality**: Biome for linting and formatting
- **Git Hooks**: Husky with lint-staged for pre-commit checks
- **Examples**: Todo app with full CRUD functionality
- **Developer Experience**: Git initialization, various package manager support (npm, pnpm, bun)

## Usage

```bash
Usage: create-better-t-stack [project-directory] [options]

Options:
  -V, --version         Output the version number
  -y, --yes             Use default configuration
  --no-database         Skip database setup
  --sqlite              Use SQLite database
  --postgres            Use PostgreSQL database
  --auth                Include authentication
  --no-auth             Disable authentication
  --pwa                 Include Progressive Web App support
  --tauri               Include Tauri desktop app support
  --biome               Include Biome for linting and formatting
  --husky               Include Husky, lint-staged for Git hooks
  --no-addons           Skip all additional addons
  --examples <examples> Include specified examples
  --no-examples         Skip all examples
  --git                 Initialize a new git repo (default)
  --no-git              Skip git initialization
  --npm                 Use npm as package manager
  --pnpm                Use pnpm as package manager
  --bun                 Use bun as package manager
  --drizzle             Use Drizzle ORM
  --prisma              Use Prisma ORM
  --install             Install dependencies (default)
  --no-install          Skip installing dependencies
  --turso               Set up Turso for SQLite database (default with sqlite)
  --no-turso            Skip Turso setup for SQLite database
  -h, --help            Display help
```

## Examples

Create a project with default configuration:
```bash
npx create-better-t-stack my-app -y
```

Create a project with specific options:
```bash
npx create-better-t-stack my-app --postgres --prisma --auth --pwa --biome
```

## License

MIT

Created by [Aman Varshney](https://github.com/AmanVarshney01) & [Nitish Singh](https://github.com/FgrReloaded)
