# Browser Bundle for @caxperts/universal.api

This repository includes an automatically generated ES module bundle of the @caxperts/universal.api package that can be used directly in browser environments without TypeScript compilation.

## Usage

The bundle is available as `universal-api.es.js` in the root of the repository. This file is automatically updated when the main package is updated.

### How to use in HTML

```html
<script type="module">
  import { universal_api } from './universal-api.es.js';
  
  // Get application instance
  const app = universal_api.Application.getInstance();
  
  // Check if API is available
  const available = app.available();
  console.log('API Available:', available);
  
  // Use other API features...
</script>
```

### Including in existing ES module projects

```javascript
import { universal_api } from './path/to/universal-api.es.js';

// Use the API
const app = universal_api.Application.getInstance();
```

## Example

Check out the `sample-usage.html` file for a complete example of using the bundled API in a browser.

## Bundle Information

- Format: ES Module (`.es.js`)
- Target: Modern browsers (ES2020+)
- Dependencies: None (fully self-contained)
- Minification: None (human-readable code)

## Automatic Updates

The bundle is automatically updated by a GitHub Action whenever the main npm package is updated. This ensures the browser bundle stays in sync with the latest TypeScript definitions.

## Troubleshooting

- If you get errors loading the bundle, ensure your browser supports ES modules
- For older browsers, you may need to use a transpiler like Babel to convert the ES module to a compatible format
- This bundle works best in environments where the Universal Planroom Viewer is available