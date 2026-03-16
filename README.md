# React Redux Project

This project uses **Google JavaScript Style Guide** enforced through [gts (Google TypeScript Style)](https://github.com/google/gts).

## Code Style Guide

This project explicitly follows the **Google JavaScript Style Guide** as specified in the Dicoding submission requirements. The style guide is enforced through:

- **ESLint configuration** with Google Style Guide rules
- **gts (Google TypeScript Style)** package integration
- **Automated formatting and linting** via npm scripts

### Style Guide Documentation
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [gts GitHub Repository](https://github.com/google/gts)

## Development Scripts

```bash
# Development server
npm run dev

# Code linting (Google Style Guide)
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Check Google style formatting
npm run style:check

# Auto-fix Google style formatting
npm run style:fix

# Build project
npm run build

# Preview build
npm run preview
```

## Code Style Rules

This project enforces Google JavaScript Style Guide rules including:

- **Indentation**: 2 spaces
- **Quotes**: Single quotes preferred
- **Semicolons**: Always required
- **Line length**: Maximum 80 characters
- **Spacing**: Google-standard object/array spacing
- **Variable declarations**: No var, prefer const
- **Function style**: Prefer arrow functions

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Route components
├── states/          # Redux state management
├── utils/           # Utility functions and API
└── assets/          # Static assets
```

## Tech Stack

- React 19
- Redux Toolkit
- React Router
- Vite
- ESLint (Google JavaScript Style Guide)
