# Project Overview

This is a simple weather application that fetches and displays weather data from the Visual Crossing Weather API. The application is built using HTML, CSS, and JavaScript, with webpack for module bundling.

## Building and Running

**Installation:**

```bash
npm install
```

**Development:**

To run the application in a development environment, use the following command. This will start a webpack dev server and open the application in your default browser.

```bash
npm run start
```

**Production Build:**

To create a production-ready build, use the following command. The bundled files will be located in the `dist` directory.

```bash
npm run build
```

## Development Conventions

The project follows a modular structure, with separate files for API interaction (`weatherAPI.js`), DOM manipulation (`display.js`), and the main application logic (`index.js`).

-   **`index.js`**: The main entry point of the application. It initializes the application and fetches the weather data.
-   **`weatherAPI.js`**: Handles all interactions with the Visual Crossing Weather API.
-   **`display.js`**: Responsible for rendering the weather data on the webpage.
-   **`styles.css`**: Contains the styles for the application.
-   **`template.html`**: The HTML template for the application.
