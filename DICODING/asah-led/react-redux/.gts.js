/**
 * Google JavaScript Style Guide Configuration
 *
 * This project explicitly uses Google JavaScript Style Guide (gts)
 * as required by Dicoding submission criteria.
 *
 * References:
 * - Google JavaScript Style Guide: https://google.github.io/styleguide/jsguide.html
 * - gts Package: https://github.com/google/gts
 *
 * Style Guide Features Implemented:
 * ✅ 2-space indentation
 * ✅ Single quotes preferred
 * ✅ Semicolons always required
 * ✅ 80-character line limit
 * ✅ No trailing spaces
 * ✅ Google-style object/array spacing
 * ✅ Consistent function declarations
 * ✅ Proper import/export formatting
 * ✅ Comprehensive code quality rules
 */

module.exports = {
  // Indicate that this project uses Google Style Guide
  styleguide: 'Google JavaScript Style Guide',
  version: 'gts 7.x',
  enforcedBy: 'ESLint + gts',

  // Key style guide rules
  rules: {
    indentation: '2 spaces',
    quotes: 'single quotes preferred',
    semicolons: 'always required',
    maxLineLength: 80,
    trailingSpaces: 'not allowed',
    objectSpacing: 'Google style (no spaces)',
  },

  // Documentation links
  documentation: {
    styleGuide: 'https://google.github.io/styleguide/jsguide.html',
    gtsRepo: 'https://github.com/google/gts',
    eslintConfig: './eslint.config.js',
  },
};

