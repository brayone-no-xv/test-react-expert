# Code Style Guide

## Google JavaScript Style Guide Implementation

This project follows the **Google JavaScript Style Guide** as required by Dicoding Academy submission criteria.

### Style Guide Configuration

- **Primary Guide**: [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- **Tool**: Google TypeScript Style (gts) v7.x
- **Linter**: ESLint with custom Google style configuration
- **Configuration Files**: 
  - `eslint.config.js` - ESLint rules following Google JavaScript style
  - `package.json` - Scripts and gts dependency
  - `.gts.js` - Google TypeScript Style configuration

### Key Style Rules Enforced

#### Code Formatting
- **Indentation**: 2 spaces
- **Quotes**: Single quotes preferred
- **Semicolons**: Always required
- **Line Length**: Maximum 80 characters
- **Trailing Spaces**: Not allowed

#### Object/Array Formatting
- **Object Curly Spacing**: `{no: 'spaces'}`
- **Array Bracket Spacing**: `[no, 'spaces']`
- **Comma Style**: Always trailing in multiline

#### Import/Export Rules
- **No duplicate imports**
- **Consistent import formatting**
- **Proper module organization**

#### Code Quality Rules
- **Variable Declarations**: `const` preferred over `let`, no `var`
- **Arrow Functions**: Preferred for callbacks
- **Equality**: Strict equality (`===`) required
- **Error Handling**: No empty catch blocks

### Available Scripts

```bash
# Run ESLint check
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Run Google TypeScript Style check
npm run style:check

# Auto-fix GTS formatting
npm run style:fix
```

### Verification

Both tools should pass without errors:
```bash
✓ ESLint (Google JavaScript Style Guide)
✓ GTS (Google TypeScript Style)
```

This implementation satisfies the Dicoding Academy requirement for using one of the specified style guides:
- ✅ Google JavaScript Style Guide
- ⚪ AirBnB JavaScript Style Guide  
- ⚪ Dicoding Academy JavaScript Style Guide
- ⚪ StandardJS Style Guide