# Vue 3 Project

This is a Vue 3 application boilerplate. Follow the instructions below to set up and run the project.

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Development](#development)
- [Build for Production](#build-for-production)
- [Linting and Formatting](#linting-and-formatting)
- [Scripts in package.json](#scripts-in-packagejson)
- [License](#license)
- [Contributing](#contributing)
- [Additional Notes](#additional-notes)

## About

This project is built using [Vue 3](https://vuejs.org/) as the core framework. It provides a starting point for developing Vue applications, including modern JavaScript features, component-based architecture, and build tools.

## Technologies Used

- **Vue 3**: Front-end JavaScript framework
- **Vite**: Lightning-fast build tool
- **TypeScript** _(optional)_: Strongly typed JavaScript
- **Vue Router**: Manage routing in the application
- **Pinia** _(optional)_: State management library
- **Axios**: HTTP client for API requests
- **ESLint + Prettier**: Linting and formatting tools
- **Node.js**: JavaScript runtime for development and package management

## Project Setup

### Prerequisites

Before setting up the project, ensure you have the following installed:

1. **Node.js** (v16.x or higher) - [Download here](https://nodejs.org/)
2. **npm** (comes with Node.js) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or use yarn
   yarn install
   ```

## Development

To start a local development server with hot reloading:

```bash
npm run dev
# or use yarn
yarn dev
```

The application will be available at: [http://localhost:5173](http://localhost:5173) (default port for Vite).

## Build for Production

To build the project for production:

```bash
npm run build
# or use yarn
yarn build
```

The build output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
# or use yarn
yarn preview
```

## Linting and Formatting

This project uses **ESLint** and **Prettier** for linting and code formatting. To lint your code:

```bash
npm run lint
# or use yarn
yarn lint
```

To format your code:

```bash
npm run format
# or use yarn
yarn format
```

## Scripts in package.json

| Script    | Description                                              |
| --------- | -------------------------------------------------------- |
| `dev`     | Starts the development server with hot reloading.        |
| `build`   | Builds the project for production in the `dist/` folder. |
| `preview` | Previews the production build locally.                   |
| `lint`    | Runs the linter (ESLint) to check for code errors.       |
| `format`  | Formats the codebase using Prettier.                     |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests. All contributions are welcome!

## Additional Notes

If you encounter any issues during setup or development, please open an issue in the repository or refer to the [Vue.js documentation](https://vuejs.org/).
