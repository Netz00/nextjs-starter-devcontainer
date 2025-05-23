# NextJS starter with Dev Container

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-blue?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Node.js](https://img.shields.io/badge/Node-22-blue?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![ESLint](https://img.shields.io/badge/ESLint-9-brightgreen?style=for-the-badge&logo=eslint)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-3.5.3-orange?style=for-the-badge&logo=prettier)](https://prettier.io)

## Overview

This repository is a **Next.js** template bootstrapped using `create-next-app` with the following configuration:

- **TypeScript:** enabled
- **ESLint:** enabled
- **Tailwind CSS:** enabled
- **Source Directory:** code is housed inside a `src/` directory
- **App Router:** enabled (recommended)
- **Turbopack:** disabled
- **Import alias:** default (`@/*`)

It also incorporates advanced code protection using [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator) for client-side bundles. The development environment is set up in a dev container running on **Debian GNU/Linux 12 (bookworm)**.

## Features

- **Next.js & React** – for building scalable, modern web applications.
- **TypeScript** – to add strong typing and improve code quality.
- **Tailwind CSS** – for a utility-first approach to styling.
- **ESLint & Prettier** – to enforce consistent code style and catch common issues.
- **Webpack Obfuscator** – to protect your client-side code via smart obfuscation.
- **Dev Container** – preconfigured environment using the official Node.js & TypeScript dev container image with preinstalled VS Code extensions.

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) with the Remote - Containers extension installed.
- Docker installed on your local machine.

### Setup

1. **Open the repository in a dev container:**  
   VS Code will detect the dev container configuration automatically. If not, manually reopen the folder in a container.

2. **Install dependencies:**  
   The container runs `pnpm install` as a post-create command. Alternatively, run:
   ```bash
   pnpm install
   ```

### Running the Development Server

To start the development server, run from the container's terminal:

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser using:

```bash
$BROWSER http://localhost:3000
```

## Project Structure & Configuration

- **Source Code:**  
  Your application code is located inside the `src/` directory. When using the App Router, the route definitions are found in `src/app`.

- **Webpack & Obfuscation:**  
  The `next.config.ts` integrates `webpack-obfuscator` to obfuscate non-server (client) bundles using the settings specified in `obfuscator.config.ts`.

- **Development Tools:**  
  The repository includes ESLint and Prettier configurations to maintain consistent code quality and style.

## Available Scripts

- `dev` – Run the development server.
- `build` – Bundle the application for production.
- `start` – Start the production server.
- `lint` – Run ESLint on the codebase.
- `format` – Format the code with Prettier.
- `format:check` – Check for unformatted files.

---

Happy coding!
