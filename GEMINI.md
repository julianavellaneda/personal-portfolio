# GEMINI.md - AI Agent Project Guide

## 1. Project Overview

**Project Name:** Personal Portfolio Website

**Purpose:** This project is a personal portfolio website designed to showcase my skills, projects, and professional experience as a software engineer. A key secondary function is to serve as a centralized host for legal documents (Privacy Policy, Terms of Service, etc.) for my various mobile applications.

**Technology Stack:**
- **Runtime/Package Manager:** Bun
- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite (with SWC for fast refresh)
- **Styling:** CSS Modules (component-specific `.css` files) and global variables in `src/index.css`.
- **Font:** Space Grotesk (loaded from Google Fonts in `index.html`).
- **Routing:** `react-router-dom` v7
- **Key Libraries:**
  - `react-vertical-timeline-component`: For the professional experience timeline.
  - `@emailjs/browser`: To power the "Send Message" functionality in the contact form.
  - `react-icons`: For icons used throughout the site.
  - `react-starfield`: For the animated star background effect on the main page.

---

## 2. Directory Structure

The project's `src` directory contains 6 directories and 34 files, structured as follows:

src/
├── App.css
├── App.tsx
├── assets/
│   └── react.svg
├── components/
│   ├── layout/
│   │   ├── Footer.css
│   │   ├── Footer.tsx
│   │   ├── Header.css
│   │   └── Header.tsx
│   └── sections/
│       ├── About.css
│       ├── About.tsx
│       ├── Contact.css
│       ├── Contact.tsx
│       ├── Education.css
│       ├── Education.tsx
│       ├── Experience.css
│       ├── Experience.tsx
│       ├── Hero.css
│       ├── Hero.tsx
│       ├── ProjectCard.css
│       ├── ProjectCard.tsx
│       ├── ProjectDetailModal.css
│       ├── ProjectDetailModal.tsx
│       ├── Projects.css
│       ├── Projects.tsx
│       ├── Skills.css
│       └── Skills.tsx
├── index.css
├── main.tsx
├── pages/
│   ├── ChildSafetyPolicy.tsx
│   ├── LegalPages.css
│   ├── PrivacyPolicy.tsx
│   ├── RequestAccountDeletion.tsx
│   └── TermsAndConditions.tsx
├── Router.tsx
└── vite-env.d.ts

- **`src/components/layout`**: Contains the main structural components of the site, `Header` and `Footer`.
- **`src/components/sections`**: Holds all the content sections for the main portfolio page (e.g., `About`, `Projects`, `Skills`). Each component has its own dedicated CSS file.
- **`src/pages`**: Contains components for full-page views, primarily the legal documents for external mobile apps. `LegalPages.css` provides shared styling for all these pages.
- **`src/App.tsx`**: The main portfolio component. It assembles all the `sections` into a single-page layout.
- **`src/Router.tsx`**: Manages all URL-based routing. It directs the root `/` to the portfolio and handles dynamic routes like `/app/:appName/...` for the legal pages.
- **`src/index.css`**: Defines global styles, including the site's color palette via CSS variables. This is the primary file for theme adjustments.
- **`index.html`**: The main HTML entry point. It links the `Space Grotesk` font and sets the page title and favicon.

---

## 3. Key Components and Functionality

### 3.1. Main Portfolio (`App.tsx`)

- This is the single-page application that users see at the root URL.
- It sequentially arranges all section components: `Hero`, `About`, `Education`, `Projects`, `Skills`, `Experience`, and `Contact`.
- It uses an `IntersectionObserver` to detect which section is currently visible on the screen and passes this state to the `Header` to highlight the active navigation link.

### 3.2. Data Management

- All portfolio content (project details, experience history, skills list) is **hardcoded** as arrays or objects directly within their respective components.
- **Projects Data:** Located in the `projects` array in `src/components/sections/Projects.tsx`.
- **Experience Data:** Located in the `experiences` array in `src/components/sections/Experience.tsx`.
- **Skills Data:** Located in the `skills` object in `src/components/sections/Skills.tsx`.

### 3.3. Dynamic Legal Pages (`src/pages/`)

- This is a critical feature of the site. The components `PrivacyPolicy.tsx`, `TermsAndConditions.tsx`, etc., are designed to be reusable for any application.
- They use the `useParams` hook from `react-router-dom` to extract the `:appName` from the URL (e.g., `/app/gather/privacy-policy`).
- This allows the same component to render a "Privacy Policy for Gather" or a "Privacy Policy for [New App Name]" by simply changing the URL.

### 3.4. Contact Form (`Contact.tsx`)

- The contact form is fully client-side.
- It uses the `emailjs` library to send form data directly to a pre-configured email address without needing a backend server.
- The `service_id`, `template_id`, and `publicKey` for EmailJS are hardcoded in the `sendEmail` function.

---

## 4. Development Workflow

The `package.json` file defines the following scripts for managing the project:

-   **`bun run dev`**: Starts the Vite development server with Hot Module Replacement (HMR). Use this for local development.
-   **`bun run build`**: Compiles the TypeScript code and bundles the application for production using Vite. The output is placed in the `dist/` directory.
-   **`bun run lint`**: Runs ESLint to check the codebase for syntax errors and style issues.
-   **`bun run preview`**: Starts a local server to preview the production build from the `dist/` directory.

---

## 5. How to Perform Common Tasks

**Task: Add a new project to the portfolio.**
1.  Navigate to `src/components/sections/Projects.tsx`.
2.  Locate the `const projects` array.
3.  Add a new JavaScript object to the array, following the existing structure. Fill in all properties: `title`, `description`, `imageUrl`, `demoUrl`, `repoUrl`, `technologies`, `fullDescription`, `challenges`, and `solutions`.

**Task: Update your work experience.**
1.  Open `src/components/sections/Experience.tsx`.
2.  Find the `const experiences` array.
3.  Modify the existing objects or add a new object to the top of the array for your most recent job. Ensure the `type` is set to `'work'`.

**Task: Add a new skill.**
1.  Go to `src/components/sections/Skills.tsx`.
2.  In the `const skills` object, find the appropriate category array (e.g., `languages`, `frameworks`, `tools`).
3.  Add a new skill object with `name`, `icon`, and `percentage` properties.

**Task: Change the site's color scheme.**
1.  Open `src/index.css`.
2.  Locate the `:root` selector at the top of the file.
3.  Modify the values of the CSS variables, such as `--primary-background`, `--accent-color-1`, and `--text-color-light`, to change the theme globally.

**Task: Add legal pages for a new application (e.g., "Clubkit").**
1.  **No new components are needed.** The routing in `Router.tsx` is already set up dynamically.
2.  Simply link to the new URLs from your "Clubkit" app, for example:
    - `/app/clubkit/privacy-policy`
    - `/app/clubkit/terms-and-conditions`
3.  (Optional) If "Clubkit" requires different text than the default "Gather" app, open the relevant component (e.g., `src/pages/PrivacyPolicy.tsx`) and add conditional logic based on the `appName` variable to display the specific text.