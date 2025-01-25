```md
# HorizonWeb Test

A simple Vue 3 application built with Vite, demonstrating a clean project setup, folder structure, and usage of essential tools (ESLint, Tailwind, etc.).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Scripts](#project-scripts)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [License](#license)

---

## Prerequisites
- [Node.js 16+](https://nodejs.org/)  
- [npm 8+](https://www.npmjs.com/)

---

## Installation

1. **Clone this repository:**
   &#96;&#96;&#96;bash
   git clone https://github.com/YOUR_USERNAME/horizonweb-test.git
   &#96;&#96;&#96;
2. **Change into the project directory:**
   ```bash
   cd horizonweb-test
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Project Scripts

In the `package.json`, you have the following scripts:

| Script   | Description                                                                                  |
|----------|----------------------------------------------------------------------------------------------|
| `dev`    | Runs the development server on a local port (default: 5173). Uses the `vite.config.js`.      |
| `build`  | Builds the production bundle using Vite.                                                     |
| `preview`| Serves your built application locally for preview purposes.                                  |
| `lint`   | Runs ESLint on your codebase and automatically fixes fixable issues.                         |

### Example Usage
```bash
# Start dev server
npm run dev

# Build production bundle
npm run build

# Preview the build output
npm run preview

# Run ESLint
npm run lint
```

---

## Configuration

- **Vite Configs**  
  The project uses a custom config located in `./config/vite.config.js`. It’s referenced by each npm script:
  ```json
  {
    "scripts": {
      "dev": "vite --config ./config/vite.config.js",
      "build": "vite build --config ./config/vite.config.js",
      "preview": "vite preview --config ./config/vite.config.js"
    }
  }
  ```

- **ESLint**  
  ESLint configuration is found in `eslint.config.mjs`. You can adjust rules there to fit your style preferences.

- **Tailwind**  
  A `tailwind.css` file is placed in `src/assets/styles` or wherever you have decided to store it. Vite processes this file along with your Vue components for styling.

- **Environment Variables**  
  If you need environment variables, you can place them in an `.env` file at the project root. Make sure to keep any sensitive info out of version control or manage it appropriately.

---

## Project Structure

Below is a simplified version of the folder layout:

```
project-root/
│
├── config/
│   ├── vite.config.js
│   ├── vite.config.base.js
│   └── vite.config.extended.js
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/         # Global/common Vue components
│   ├── features/
│   │   └── news/
│   │       ├── components/ # News-specific Vue components
│   │       ├── helpers/
│   │       └── services/
│   ├── services/           # Global or app-wide services
│   ├── App.vue
│   └── main.js
│
├── .env                    # Environment variables (not committed by default)
├── eslint.config.mjs
├── index.html
├── package.json
└── README.md
```

---

## License
Feel free to include your chosen license here (e.g., MIT, Apache, etc.), or remove this section if it’s not needed.

```
