# Changelog 2026.4.0
Added
- Camera.raycastScreenPoint to raycast any screen coordinate on demand, returning hit point, object uid, distance and surface normal
    - added ScreenCoordinateMode (Pixels / Percent, default Percent)
- PointerClicked now also contains ObjectId, SurfaceNormal and Distance
- Model.createDistanceMeasurement to measure the distance between two objects without opening the measurement UI
- Events.registerApplicationClosingEvent - the callback receives an ApplicationClosingEvent with respondToClosing to allow or defer the viewer/window close
- New FileTree events
    - Events.registerFilesTreeObjectMovedEvent
    - Events.registerFilesTreeObjectNameChangedEvent
    - Events.registerFilesTreeObjectHasChangesChangedEvent
    - Events.registerFilesTreeObjectAddedEvent
    - Events.registerFilesTreeObjectRemovedEvent
- New animation APIs
    - FileTreeManager.createAnimation
    - FileTreeAnimation.start, stop and pause
    - FileTreeAnimation.getValue
    - FileTreeAnimation.createState, createStates and deleteState
    - FileTreeAnimation.AnimationStates and FileTreeAnimation.Info
    - AnimationState with a settable Transition
- FileTreeSketch.IsEmpty and FileTreePIDSketch.IsEmpty
- FileTreeElement.State.HasChangesIncludingChildren
- ModelInfo.AvailablePidAttributes
- ClashContext.cleanClashResults to free resources after the clash results were consumed
- AttributeConditionComparison extended with GreaterThan, GreaterThanOrEqual, LessThan and LessThanOrEqual
- PackageCondition.createUnaryAttributeCondition to build attribute conditions that take no comparison value
    - added AttributeConditionComparisonUnary (IsEmpty / IsNotEmpty / Exists / DoesNotExist)

Fixes
- CommentSVG filetree elements now resolve to FileTreeCommentSVG. FeatureTypes.CommentSvg is renamed to FeatureTypes.CommentSVG

Changes
- ClashContext.getClashResults added startIndex and maxResults for paging
- FileTreeAnimation.AnimationCurrentTime changed from Set to GetSet, the current timeline position can now also be read
- Theme.getTheme now uses the UDiTH UI variables
- Theme.getTheme the theme or a placeholder if it is not yet available. And calls the passed function when it becomes available
- The API connection is preloaded on startup
- Some Websocket errors were lowered to warnings and request timings are logged through a structured logger

# Changelog 2026.3.0
Added
- In Printer.addIntellipidPage added displayStyles used to create PDF layers

# Changelog 2026.2.2
Fixes
- Fixed a race condition in Filteroperations when using the new Websocket API


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
