# Browser Bundles for @caxperts/universal.api

This repository includes automatically generated bundles of the @caxperts/universal.api package that can be used directly in browser environments without TypeScript compilation.

## Available Bundles

Two bundle formats are provided:

1. **ES Module Bundle** (`universal-api.es.js`) - For modern applications using ES modules
2. **UMD Bundle** (`universal-api.umd.js`) - For traditional script tags and older applications

Both bundles are automatically updated when the main package is updated.

## Usage with ES Modules

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

## Usage with Traditional Script Tags

```html
<!-- Include the UMD bundle with a regular script tag -->
<script src="./universal-api.umd.js"></script>

<script>
  // Access the API through the global UniversalApi object
  const app = UniversalApi.universal_api.Application.getInstance();
  
  // Check if API is available
  const available = app.available();
  console.log('API Available:', available);
  
  // Use other API features...
</script>
```

## Including in existing projects

### ES Module projects:

```javascript
import { universal_api } from './path/to/universal-api.es.js';

// Use the API
const app = universal_api.Application.getInstance();
```

### CommonJS or AMD projects:

```javascript
const UniversalApi = require('./path/to/universal-api.umd.js');
const app = UniversalApi.universal_api.Application.getInstance();
```

## Examples

Check out the example files:
- `basic_js_example.html` - Using the ES module bundle
- `basic_js_example_script_tag.html` - Using the UMD bundle with a traditional script tag

## Bundle Information

- ES Module Format (`.es.js`):
  - For modern browsers and ES module environments
  - Used with `import` statements or `<script type="module">`

- UMD Format (`.umd.js`):
  - Works in browsers (global variable), CommonJS (Node.js), and AMD (RequireJS)
  - Used with traditional `<script>` tags or `require()`

- Both bundles:
  - Target: Modern browsers (ES2020+)
  - Dependencies: None (fully self-contained)
  - Minification: None (human-readable code)

## Automatic Updates

The bundles are automatically updated by a GitHub Action whenever the main npm package is updated. This ensures the browser bundles stay in sync with the latest TypeScript definitions.

## Troubleshooting

- For ES modules, ensure your browser supports ES modules (all modern browsers do)
- For older browsers, the UMD bundle is recommended
- These bundles work best in environments where the Universal Planroom Viewer is available