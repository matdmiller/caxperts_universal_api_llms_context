# Changelog compared to 7.3.1

Added:
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


Changes:
- FileTreeManager.createComment -> added commentPosition and leaderLineEndPosition
- FileTreeManager.createPointOfInterest fixed naming from createPointOfIntrest
- FileTreePIDSketch.selectPrimitiveForPlacement now returns the placed object uids
- FilterOperation.IncludeChangeableAttributes fixed naming from IncludeChangableAttributes
- Model.getUniqueAttributeValuesPid fixed naming from gGetUniqueAttributeValuesPid
- Application.Language marked as legacy. Please use Settings.Language
- General documentation updates

Fixes:
- FileTreeManager.getChildren and getSiblings could return null now a FileTreeElement is returned for unknown elements