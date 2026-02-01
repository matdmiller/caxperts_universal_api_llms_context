# Changelog 2026.2.1
Added
- Added flag to disable Websockets via Api.disableWebsocketApi = true

Fixes
- Application.getInstance().available() would return true even if not connected in a browser


# Changelog 2026.2.0
Added
- Added Websocket support for UDiTH Websocket API
- Added FileTreeFolder.loadUPVF to load a UPVF under a folder

Changes
- FileTreeManager.loadUPVF 
    - added overwriteFoldersBehavior (default: KeepBoth matches old logic)
    - added overwriteNodesBehavior (default: KeepBoth matches old logic)
    - added keepFolderExpandStates (default: false matches old logic)
    - added overwriteEnableUi (default: false matches old logic)
- Printer.addIntellipidPage Added sketchLayers to add sketches to seperate PDF layers

Fixes
- GetStorageVariablesList.Variables -> GetStorageVariablesList.Keys This was incorretly mapped
- ModelInfo.Uri -> ModelInfo.URI This was incorretly mapped

# Changelog 2026.1.0 compared to 7.3.1

Added
- FileTreeAnimation.AnimationCurrentTime
- FileTreeAnimation.generateAnimationKeyframe
- FileTreeDrawing.exportDrawing
- FileTreeManager.createDrawing
- FileTreeSketch.exportAsUpvcBase64
- FileTreeSketch.exportAsDgnBase64
- FileTreeSpraying.exportAsUpvcBase64
- Model.DrawingTemplates
- Model.createDiameterMeasurement
- ModelObject.createChangeableAttribute
- Settings.UiVariables
- Settings.Language
- Settings.TextureMode
- Settings.RenderQuality
- Settings.PanoramaCentresVisibility
- Settings.WindowLayoutXML
- Settings.WindowLayoutJson
- Application.ViewerVersion
- Application.waitForModelLoading


Changes
- FileTreeManager.createComment - added commentPosition and leaderLineEndPosition
- FileTreeManager.createPointOfInterest fixed naming from createPointOfIntrest
- FileTreePIDSketch.selectPrimitiveForPlacement now returns the placed object uids
- FilterOperation.IncludeChangeableAttributes fixed naming from IncludeChangableAttributes
- Model.getUniqueAttributeValuesPid fixed naming from gGetUniqueAttributeValuesPid
- Application.Language marked as legacy. Please use Settings.Language
- General documentation updates

Fixes
- FileTreeManager.getChildren and getSiblings could return null now a FileTreeElement is returned for unknown elements