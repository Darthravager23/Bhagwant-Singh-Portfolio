# Bhagwant Singh — Research Portfolio

A single-page research portfolio website built with **React 18**, **TypeScript**, **Vite 6**, and **Tailwind CSS 4**. The original design comes from the Figma file [Formal Research Portfolio SPA](https://www.figma.com/design/ZDoYCfETHAikPUuguf1FVv/Formal-Research-Portfolio-SPA).

This guide walks you through getting the project running on your own computer, step by step. You don't need prior experience with React or Vite. If you just want the short version, see [Quick start](#quick-start).

---

## Table of contents

1. [Quick start](#quick-start)
2. [What you need before you start](#1-what-you-need-before-you-start)
3. [Get the code](#2-get-the-code)
4. [Install the dependencies](#3-install-the-dependencies)
5. [Run the development server](#4-run-the-development-server)
6. [Build for production](#5-build-for-production)
7. [Preview the production build](#6-preview-the-production-build)
8. [Project structure](#project-structure)
9. [Editing the content](#editing-the-content)
10. [Deploying](#deploying)
11. [Troubleshooting](#troubleshooting)

---

## Quick start

For people who already have Node.js and Git installed:

```bash
git clone https://github.com/Darthravager23/Bhagwant-Singh-Portfolio.git
cd Bhagwant-Singh-Portfolio
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 1. What you need before you start

Install these two tools first. You only have to do this once per computer.

### 1.1 Git

Git downloads ("clones") the project from GitHub.

| OS | How to install |
| --- | --- |
| **Windows** | Download from [git-scm.com/download/win](https://git-scm.com/download/win) and run the installer. The default options are fine. This also gives you **Git Bash**, a terminal you can use for every command in this guide. |
| **macOS** | Open Terminal and run `git --version`. If Git isn't installed, macOS offers to install it for you. You can also use Homebrew: `brew install git`. |
| **Linux** | Debian/Ubuntu: `sudo apt install git`. Fedora: `sudo dnf install git`. |

Check that it worked:

```bash
git --version
```

You should see something like `git version 2.45.0`.

### 1.2 Node.js (version 20 or newer)

Node.js runs the development server and build tools. It also installs **npm**, the package manager this guide uses.

1. Go to [nodejs.org](https://nodejs.org/).
2. Download the **LTS** version (20.x, 22.x, or newer) and run the installer.
3. Close and reopen your terminal so it picks up the new install.

Check that it worked:

```bash
node -v
npm -v
```

You should see `v20.x.x` or higher for Node (the project is developed on `v22.16.0`) and any recent version for npm.

> **Already have an older Node?** Vite 6 and Tailwind CSS 4 need a modern Node. If `node -v` shows something below `v20`, upgrade it. A version manager makes it easy to switch:
> - Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows), then `nvm install 22` and `nvm use 22`
> - macOS/Linux: [nvm](https://github.com/nvm-sh/nvm), then `nvm install 22` and `nvm use 22`

### 1.3 A code editor (optional, recommended)

You'll want an editor to change the site's content. [Visual Studio Code](https://code.visualstudio.com/) is free and works well with this project.

### 1.4 pnpm (optional)

The repository includes a `pnpm-lock.yaml`, which means the author uses [pnpm](https://pnpm.io/). **You don't need it**; npm works fine. If you want installs that match the lockfile exactly, install pnpm:

```bash
npm install -g pnpm
```

Everywhere this guide says `npm install` / `npm run …`, you can use `pnpm install` / `pnpm run …` instead.

---

## 2. Get the code

### 2.1 Open a terminal

- **Windows:** open **Git Bash**, **PowerShell**, or **Command Prompt** from the Start menu.
- **macOS:** open **Terminal** (Applications → Utilities → Terminal).
- **Linux:** open your terminal app.

### 2.2 Move to the folder where you want the project

For example, to put it in your Documents folder:

```bash
cd ~/Documents
```

(On Windows Command Prompt, use `cd %USERPROFILE%\Documents`.)

### 2.3 Clone the repository

```bash
git clone https://github.com/Darthravager23/Bhagwant-Singh-Portfolio.git
```

This creates a new folder called `Bhagwant-Singh-Portfolio` containing all the code.

> **No Git?** On the [GitHub page](https://github.com/Darthravager23/Bhagwant-Singh-Portfolio), click the green **Code** button → **Download ZIP**, then unzip it. Use the unzipped folder in the next step.

### 2.4 Go into the project folder

```bash
cd Bhagwant-Singh-Portfolio
```

Every command from here on must be run **inside this folder**. To check you're in the right place, list the files:

```bash
ls        # macOS / Linux / Git Bash / PowerShell
dir       # Windows Command Prompt
```

You should see `package.json`, `index.html`, `vite.config.ts`, and a `src` folder.

---

## 3. Install the dependencies

The project relies on third-party packages (React, Vite, Tailwind, and others). Download them with:

```bash
npm install
```

or, if you installed pnpm:

```bash
pnpm install
```

What to expect:

- This takes **1–3 minutes** the first time, depending on your internet connection.
- It creates a `node_modules` folder. That folder is large and is ignored by Git. Never edit or commit it.
- You may see some `WARN` or `deprecated` messages. Those are normal and don't stop the project from working. Only lines that say `ERR!` mean something went wrong (see [Troubleshooting](#troubleshooting)).

You only need to run this again if `package.json` changes, for example after pulling new changes from GitHub.

---

## 4. Run the development server

Start the site locally:

```bash
npm run dev
```

After a few seconds you'll see something like:

```
  VITE v6.3.5  ready in 600 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open **http://localhost:5173** in your browser. You should see the portfolio.

Things to know while it's running:

- **Live reload.** When you save a file in `src/`, the browser updates automatically. No need to restart.
- **Keep the terminal open.** Closing it stops the site.
- **To stop the server,** click in the terminal and press **Ctrl + C**.
- **View it on your phone** (same Wi-Fi network): run `npm run dev -- --host` and open the `Network:` address it prints on your phone.

---

## 5. Build for production

To create the optimized files you'd upload to a web host:

```bash
npm run build
```

This compiles and minifies everything into a `dist/` folder:

```
dist/
├── index.html
├── assets/        # bundled JavaScript and CSS
└── ...            # files copied from public/ (images, CV PDF)
```

The `dist/` folder is generated output and is ignored by Git. Running the build again overwrites it.

---

## 6. Preview the production build

To check the built version locally before deploying:

```bash
npx vite preview
```

Then open the URL it prints (usually **http://localhost:4173**). Press **Ctrl + C** to stop it.

---

## Project structure

```
Bhagwant-Singh-Portfolio/
├── index.html                 # HTML entry point (page title, meta/SEO tags)
├── package.json               # dependencies and npm scripts
├── pnpm-lock.yaml             # exact dependency versions (pnpm)
├── vite.config.ts             # Vite config: React + Tailwind plugins, "@" alias
├── tsconfig.json              # TypeScript settings
├── postcss.config.mjs         # PostCSS config
├── vercel.json                # Vercel deployment settings (SPA rewrites)
├── public/                    # static files served as-is from the site root
│   ├── Bhagwant_Singh_CV.pdf  # downloadable CV (linked as /Bhagwant_Singh_CV.pdf)
│   ├── profileimage.jpeg      # profile photo used in the Hero section
│   └── ...
└── src/
    ├── main.tsx               # mounts the React app into index.html
    ├── styles/                # global CSS, Tailwind setup, theme, fonts
    └── app/
        ├── App.tsx            # page layout: puts all the sections in order
        └── components/
            ├── Navigation.tsx           # top navigation bar
            ├── Hero.tsx                 # intro, photo, CV download button
            ├── About.tsx
            ├── ResearchVision.tsx
            ├── ResearchImpact.tsx
            ├── FeaturedProjects.tsx
            ├── Publications.tsx
            ├── Awards.tsx
            ├── Collaborations.tsx
            ├── ProfessionalActivities.tsx
            ├── FutureResearch.tsx
            ├── Contact.tsx
            ├── figma/                   # helpers exported from Figma
            └── ui/                      # reusable UI building blocks (shadcn/ui)
```

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server with live reload at http://localhost:5173 |
| `npm run build` | Builds the production site into `dist/` |
| `npx vite preview` | Serves the `dist/` build locally so you can check it |

---

## Editing the content

Most changes are text edits in `src/app/components/`:

| To change… | Edit this file |
| --- | --- |
| Name, headline, intro, CV button | `src/app/components/Hero.tsx` |
| About section | `src/app/components/About.tsx` |
| Publications list | `src/app/components/Publications.tsx` |
| Projects | `src/app/components/FeaturedProjects.tsx` |
| Awards | `src/app/components/Awards.tsx` |
| Contact details | `src/app/components/Contact.tsx` |
| Section order, or adding/removing a section | `src/app/App.tsx` |
| Browser tab title and page description | `index.html` |
| Colors and theme | `src/styles/theme.css` |

### Replacing the profile photo or CV

1. Put the new file in the `public/` folder.
2. Either give it the **same name** as the old file (`profileimage.jpeg`, `Bhagwant_Singh_CV.pdf`), or keep your new name and update the path in `src/app/components/Hero.tsx`.
3. Files in `public/` are referenced with a leading slash, e.g. `src="/profileimage.jpeg"`.

Save the file and the browser refreshes automatically if `npm run dev` is running.

---

## Deploying

The project includes a `vercel.json`, so [Vercel](https://vercel.com/) is the easiest host:

1. Push your changes to GitHub.
2. Sign in to Vercel with GitHub and click **Add New → Project**.
3. Import the `Bhagwant-Singh-Portfolio` repository.
4. Vercel detects Vite automatically. Confirm these settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**. Later pushes to `main` redeploy automatically.

Any static host works (Netlify, GitHub Pages, Cloudflare Pages): run `npm run build` and upload the contents of `dist/`.

---

## Troubleshooting

**`'npm' is not recognized` / `command not found: npm` / `command not found: node`**
Node.js isn't installed, or the terminal was opened before installing it. Install Node.js (step 1.2), then **close and reopen** the terminal.

**`npm ERR! enoent ... package.json`**
You're not inside the project folder. Run `cd Bhagwant-Singh-Portfolio` (step 2.4) and try again.

**Errors mentioning `Unsupported engine`, `SyntaxError: Unexpected token`, or Node version**
Your Node.js is too old. Run `node -v`; if it's below `v20`, upgrade (see step 1.2).

**`npm install` fails with `ERESOLVE` / peer dependency errors**
Try:

```bash
npm install --legacy-peer-deps
```

Or install pnpm (`npm install -g pnpm`) and run `pnpm install`, which uses the project's lockfile.

**`npm install` fails partway, or the app shows strange "module not found" errors**
Delete the installed packages and reinstall from scratch:

```bash
# macOS / Linux / Git Bash
rm -rf node_modules package-lock.json
npm install
```

```powershell
# Windows PowerShell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

**`Port 5173 is in use`**
Another dev server is already running. Vite usually picks the next free port automatically (e.g. 5174), so check the URL in the terminal. Or stop the other server with **Ctrl + C**, or run on a specific port:

```bash
npm run dev -- --port 3000
```

**The page is blank**
Open the browser's developer tools (**F12** → **Console** tab) and look for red errors. Also check the terminal running `npm run dev` for error messages. Most often a recent edit has a typo, such as an unclosed tag or a missing bracket.

**Images or the CV don't load**
Make sure the file exists in `public/` and that the path in the code starts with `/` and matches the filename exactly, **including capitalization**. `ProfileImage.jpeg` and `profileimage.jpeg` are different files on most web hosts.

**Windows: `running scripts is disabled on this system` (PowerShell)**
PowerShell is blocking the npm script. Either use **Git Bash** or **Command Prompt** instead, or run this once in PowerShell:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

---

## Credits

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for third-party components and assets used in this project.
