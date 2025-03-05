# Changelog

### Added Features
- **FileTreePIDSketch**
  - Added placeSymbol function po place a symbol with specific settings at a specified location.
  - Added deleteSketchItem to delete an sybol via its uid

- **Application.AuthenticationManager**
  - Added startLogoutProcess to perform a logout against the IDP

- **Application.FileOperations**
  - Added FileOperations under Application
  - Added loadFileDialog let the user load a file via a file dialog
  - Added saveFileDialog let the user save a file via a file dialog
  - Added loadFileFromModelFolder to load arbitrary files from inside the model folder

- **FilterOperation**
  - Added IncludeLinkedElements this will make linked 3D,PID,Document,Link Elements available on the model object

- **FilterOperation3D**
  - Added startClashComputation this function will likely change in future

- **Application.LocalStorage**
  - Added LocalStorage under Application. This can be used to store data and also to communicate between multiple Apps and from the outside into an AppControl via Deeplinks
  - Added setStorageVariable stores a key value pair. Optionally can persist the value (Persisting not available in BBV)
  - Added getStorageVariable retrieves a key value pair
  - Added deleteStorageVariable delete a key value pair
  - Added listStorageVariables get all keys
  - Added registerStorageVariableChangedEvent activate a callback if a value has changed

- **Application.Model**
  - Added Pdfs list all PDFs in the model
  - Added OpenPdfs list all open PDFs in the model
  - Added ActivePdf list the active PDF in the model
  - Added getUniqueAttributeValues3D to retieve all the unique attribute values for an attribute from 3D
  - Added getUniqueAttributeValuesPid to retieve all the unique attribute values for an attribute from PID

- **PDF**
  - Added openPdf to open a PDF
  - Added closePdf to close a PDF

- **ModelObject**
  - Added ElementLinks that contains linked element information 

- **Printer**
  - Added a PDF Printer
  - Added create to create a new Printer
  - Added delete to delete the Printer after use
  - Added getPdf get the printed PDF
  - Added addIntellipidPage add a PID page to the PDF

- **Application.Settings**
  - Added Settings
  - Added UiColors the current UI colors in use by the Theme
  - Added CurrentUiTheme get the current UI theme or set it
  - Added AvailableUiThemes list all available themes
  - In future Application.Language might be mmoved here as well

### Improvements
- **AttributeTreeNode**
  - Removed unused parameter in getTreeNodesOfFolder

- **FilterOperation**
  - Improved performance of getObjects in some cases

- **FilterOperation3D**
  - Removed unused parameter in getTreeStructure

- **ScreenShot**
  - Removed the Screenshot class. Instead Scene.takeScreenshot directly returns the Base64 result

- **GetModelInfo**
  - Changed type to array as expected by the API

- **API**
  - An execption is now thrown if an invalid command is send to UPV. Before the async request would never complete

### Removed Features
- **ModelObject**
  - Removed key and value please use Key and Value instead. See casing