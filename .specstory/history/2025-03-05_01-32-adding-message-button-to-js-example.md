## SpecStory

## Adding Message Button to JS Example (3/5/2025, 1:32:23 AM)

_**User**_

Add a message button similar to @basic_js_example.html 

---

_**Assistant**_

I'll update your `basic_js_example_script_tag.html` file to add a message button similar to the one in `basic_js_example.html`. Here are the changes needed:

```html:basic_js_example_script_tag.html
// ... existing code ...
  <button id="testApi">Test API Availability</button>
  
  <div id="output">
    <p>Output will appear here...</p>
  </div>
// ... existing code ...
  <script>
    document.getElementById('testApi').addEventListener('click', async () => {
      const outputDiv = document.getElementById('output');
      
      try {
        // Get application instance
        const app = UniversalApi.universal_api.Application.getInstance();
        
        // Check if API is available
        const available = app.available();
        outputDiv.innerHTML = `<p>API Available: ${available}</p>`;
        
        if (available) {
          // If available, get more information
          const scenes = await app.Scenes.get();
          outputDiv.innerHTML += `<p>Found ${scenes.length} scenes</p>`;
          
          // Try to get application state
          try {
            const state = await app.State.get();
            outputDiv.innerHTML += `<p>Application State: ${JSON.stringify(state)}</p>`;
          } catch (err) {
            outputDiv.innerHTML += `<p>Could not get application state: ${err.message}</p>`;
          }
        } else {
          outputDiv.innerHTML += '<p>API is not available. This is expected when running outside the Universal Planroom Viewer environment.</p>';
        }
      } catch (err) {
        outputDiv.innerHTML = `<p>Error testing API: ${err.message}</p>`;
        console.error(err);
      }
    });

    // Add a button to the DOM
    const displayMessageButton = document.createElement('button');
    displayMessageButton.id = 'displayMessage';
    displayMessageButton.textContent = 'Display Message';
    document.querySelector('#testApi').insertAdjacentElement('afterend', displayMessageButton);
    
    // Add event listener for the new button
    document.getElementById('displayMessage').addEventListener('click', async () => {
      const outputDiv = document.getElementById('output');
      
      try {
        // Get application instance
        const app = UniversalApi.universal_api.Application.getInstance();
        
        // Check if API is available
        const available = app.available();
        
        if (available) {
          // Display a message using the UPV API
          await app.showMessage("Hello from Universal API!", "Example Message", "info");
          outputDiv.innerHTML = '<p>Message displayed in UPV!</p>';
        } else {
          outputDiv.innerHTML = '<p>API is not available. Cannot display message in UPV.</p>';
        }
      } catch (err) {
        outputDiv.innerHTML = `<p>Error displaying message: ${err.message}</p>`;
        console.error(err);
      }
    });
  </script>
// ... existing code ...
```

I've added the same functionality from the `basic_js_example.html` file to your script tag example. This includes:

1. Creating a new "Display Message" button and inserting it after the existing "Test API Availability" button
2. Adding an event listener for the new button that:
   - Gets the Universal API application instance
   - Checks if the API is available
   - If available, displays a message using `app.showMessage()`
   - Updates the output div with the result

The code uses the UMD bundle's global `UniversalApi` object instead of the ES module import, which is the main difference from the original example.

---



---

