"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesTreeImportBehaviour = exports.WindowLayoutFormat = exports.AnimationMessageTypes = exports.DrawingExportType = exports.ModelLoadMessageType = exports.QualityLevel = exports.TextureRenderMode = exports.ChangeableAttributeUnitType = exports.PdfTypes = exports.GenericLoadFromFileResponseResultType = exports.ClashMode = exports.FileDialogApiReturnType = exports.PrimitiveType = exports.ColorMode = exports.ExportableOptions = exports.PidSketchToolMode = exports.MarkupMode = exports.ClippingMode = exports.PointOfInterestType = exports.VolumeConditionMode = exports.AttributeConditionComparison = exports.ConsolidationMode = exports.PackageConditionTypes = exports.ApiCommands = exports.ProjectionSphereType = exports.FeatureTypes = exports.CustomAttributeDataType = exports.UpdateModes = exports.SceneType = exports.CombineModes = exports.TargetEnum = void 0;
/**
 * @deprecated
 * Old UPV Target codes
 */
var TargetEnum;
(function (TargetEnum) {
    TargetEnum["Undefined"] = "0";
    TargetEnum["ThreeD"] = "1";
    TargetEnum["Intelli"] = "10";
})(TargetEnum || (exports.TargetEnum = TargetEnum = {}));
/**
 * how Queries will be combined
 */
var CombineModes;
(function (CombineModes) {
    CombineModes["And"] = "AND";
    CombineModes["Or"] = "OR";
})(CombineModes || (exports.CombineModes = CombineModes = {}));
/**
 * The sceneType defines what this scene contains
 */
var SceneType;
(function (SceneType) {
    SceneType["Undefined"] = "0";
    SceneType["ThreeD"] = "1";
    SceneType["IntelliPid"] = "10";
    SceneType["Browser"] = "11";
})(SceneType || (exports.SceneType = SceneType = {}));
var UpdateModes;
(function (UpdateModes) {
    UpdateModes[UpdateModes["Append"] = 0] = "Append";
    UpdateModes[UpdateModes["Full"] = 1] = "Full";
})(UpdateModes || (exports.UpdateModes = UpdateModes = {}));
var CustomAttributeDataType;
(function (CustomAttributeDataType) {
    //Calculation = 0,
    CustomAttributeDataType[CustomAttributeDataType["CodeList"] = 1] = "CodeList";
    CustomAttributeDataType[CustomAttributeDataType["FreeText"] = 2] = "FreeText";
    CustomAttributeDataType[CustomAttributeDataType["Numeric"] = 3] = "Numeric";
    CustomAttributeDataType[CustomAttributeDataType["NumericWithUnit"] = 4] = "NumericWithUnit";
    //Unknown = 5,
    CustomAttributeDataType[CustomAttributeDataType["Color"] = 6] = "Color";
})(CustomAttributeDataType || (exports.CustomAttributeDataType = CustomAttributeDataType = {}));
var FeatureTypes;
(function (FeatureTypes) {
    FeatureTypes["Unknown"] = "Unknown";
    FeatureTypes["Model"] = "Model";
    FeatureTypes["Sketch"] = "Sketch";
    FeatureTypes["Markup"] = "Markup";
    FeatureTypes["IntellipidSketch"] = "IntellipidSketch";
    FeatureTypes["AnimationConfiguration"] = "AnimationConfiguration";
    FeatureTypes["AnimationDefinition"] = "AnimationDefinition";
    FeatureTypes["Catalogue"] = "Catalogue";
    FeatureTypes["Symbol"] = "Symbol";
    FeatureTypes["MarkupContainer"] = "MarkupContainer";
    FeatureTypes["Orm"] = "Orm";
    FeatureTypes["Spraying"] = "Spraying";
    FeatureTypes["Comment"] = "Comment";
    FeatureTypes["View"] = "View";
    FeatureTypes["Package"] = "Package";
    FeatureTypes["Folder"] = "Folder";
    FeatureTypes["CommentSvg"] = "CommentSvg";
    FeatureTypes["Screenshot"] = "Screenshot";
    FeatureTypes["Photo"] = "Photo";
    FeatureTypes["TwoDToThreeD"] = "TwoDToThreeD";
    FeatureTypes["PointOfInterest"] = "PointOfInterest";
    FeatureTypes["Drawing"] = "Drawing";
    FeatureTypes["Files"] = "Files";
    FeatureTypes["MeasurementSnapshot"] = "MeasurementSnapshot";
    FeatureTypes["IntelliPidLegendPositions"] = "IntelliPidLegendPositions";
    FeatureTypes["IsolationPlan"] = "IsolationPlan";
    FeatureTypes["CataloguePlacement"] = "CataloguePlacement";
    FeatureTypes["DrawingComment"] = "DrawingComment";
    FeatureTypes["AppControl"] = "AppControl";
    FeatureTypes["Animation"] = "Animation";
    FeatureTypes["PIDSketch"] = "PIDSketch";
    FeatureTypes["Report"] = "Report";
    FeatureTypes["WindowLayout"] = "WindowLayout";
    FeatureTypes["IntelliPIDLegendPosition"] = "IntelliPIDLegendPosition";
})(FeatureTypes || (exports.FeatureTypes = FeatureTypes = {}));
var ProjectionSphereType;
(function (ProjectionSphereType) {
    ProjectionSphereType[ProjectionSphereType["Picture"] = 0] = "Picture";
    ProjectionSphereType[ProjectionSphereType["Panorama"] = 1] = "Panorama";
})(ProjectionSphereType || (exports.ProjectionSphereType = ProjectionSphereType = {}));
/**
 * @internal
 */
var ApiCommands;
(function (ApiCommands) {
    //Camera
    ApiCommands["SetCameraView"] = "SetCameraView";
    ApiCommands["GetCameraView"] = "GetCameraView";
    ApiCommands["SetClippingPlane"] = "SetClippingPlane";
    ApiCommands["SetCameraViewLookAtTarget"] = "SetCameraViewLookAtTarget";
    ApiCommands["ResetView"] = "ResetView";
    //Filteroperation
    ApiCommands["GetObjects"] = "GetObjects";
    ApiCommands["GetSelectedObjects"] = "GetSelectedObjects";
    ApiCommands["GetObjectsAttributes"] = "GetObjectsAttributes";
    ApiCommands["GetObjectsBoundingBox"] = "GetObjectsBoundingBox";
    ApiCommands["GetObjectsColors"] = "GetObjectsColors";
    ApiCommands["GetObjectsSnapInfo"] = "GetObjectsSnapInfo";
    ApiCommands["GetObjectsChangeableAttributes"] = "GetObjectsChangeableAttributes";
    ApiCommands["SetAttribute"] = "SetAttribute";
    ApiCommands["AddChangeableAttribute"] = "AddChangeableAttribute";
    ApiCommands["DeleteChangeableAttribute"] = "DeleteChangeableAttribute";
    ApiCommands["Select"] = "Select";
    ApiCommands["ClearSelection"] = "ClearSelection";
    ApiCommands["Fit"] = "Fit";
    ApiCommands["Color"] = "Color";
    ApiCommands["ClearColor"] = "ClearColor";
    ApiCommands["Highlight"] = "Highlight";
    ApiCommands["ClearHighlight"] = "ClearHighlight";
    ApiCommands["ShowOnly"] = "ShowOnly";
    ApiCommands["SetVisibility"] = "SetVisibility";
    ApiCommands["GetClippingInfo"] = "GetClippingInfo";
    ApiCommands["VolumeClip"] = "VolumeClip";
    ApiCommands["VolumeClipByCoordinates"] = "VolumeClipByCoordinates";
    ApiCommands["IntelliClip"] = "IntelliClip";
    ApiCommands["ClearClipping"] = "ClearClipping";
    ApiCommands["SearchFallback"] = "SearchFallback";
    ApiCommands["GetIntelliPidRawSvgData"] = "GetIntelliPidRawSvgData";
    ApiCommands["GetLinkedElements"] = "GetLinkedElements";
    //Scene3d
    //Drawing
    ApiCommands["PlaceObj"] = "PlaceObj";
    ApiCommands["DrawLine"] = "DrawLine";
    ApiCommands["PlaceText"] = "PlaceText";
    ApiCommands["PlaceArc"] = "PlaceArc";
    ApiCommands["PlacePly"] = "PlacePly";
    ApiCommands["DestroyDrawing"] = "DestroyDrawing";
    //Model
    ApiCommands["GetModelInfo"] = "GetModelInfo";
    ApiCommands["GetProjectInfo"] = "GetProjectInfo";
    ApiCommands["LoadConfigFile"] = "LoadConfigFile";
    ApiCommands["ClearCustomAttributes"] = "ClearCustomAttributes";
    ApiCommands["ImportCustomAttributeChangeSet"] = "ImportCustomAttributeChangeset";
    ApiCommands["LoadCustomAttributeConfigurationFile"] = "LoadCustomAttributeConfigurationFile";
    ApiCommands["LoadCustomAttributeDataFile"] = "LoadCustomAttributeDataFile";
    ApiCommands["SetCustomAttributeConfiguration"] = "SetCustomAttributeConfiguration";
    ApiCommands["GetCustomAttributeConfiguration"] = "GetCustomAttributeConfiguration";
    ApiCommands["ExportCustomAttributes"] = "ExportCustomAttributes";
    ApiCommands["GetIntelliPidDrawings"] = "GetIntelliPidDrawings";
    ApiCommands["OpenIntelliPidDrawings"] = "OpenIntelliPidDrawings";
    ApiCommands["GetProjectionSpheres"] = "GetProjectionSpheres";
    ApiCommands["GetCurrentProjectionSphere"] = "GetCurrentProjectionSphere";
    ApiCommands["EnterProjectionSphere"] = "EnterProjectionSphere";
    ApiCommands["LeaveProjectionSphere"] = "LeaveProjectionSphere";
    ApiCommands["GetAllPids"] = "GetAllPids";
    ApiCommands["GetOpenPids"] = "GetOpenPids";
    ApiCommands["GetActivePid"] = "GetActivePid";
    ApiCommands["OpenPid"] = "OpenPid";
    ApiCommands["ClosePid"] = "ClosePid";
    ApiCommands["GetModelAttributeValues"] = "GetModelAttributeValues";
    ApiCommands["GetAllPdfs"] = "GetAllPdfs";
    ApiCommands["GetOpenPdfsTabs"] = "GetOpenPdfsTabs";
    ApiCommands["GetActivePdfTab"] = "GetActivePdfTab";
    ApiCommands["OpenPdf"] = "OpenPdf";
    ApiCommands["ClosePdf"] = "ClosePdf";
    ApiCommands["CreateDiameterMeasurement"] = "CreateDiameterMeasurement";
    //Scene
    ApiCommands["TakeScreenshot"] = "TakeScreenshot";
    ApiCommands["TakeAndSaveScreenShot"] = "TakeAndSaveScreenshot";
    ApiCommands["GetTreeConfiguration"] = "GetTreeConfiguration";
    ApiCommands["SetTreeConfiguration"] = "SetTreeConfiguration";
    ApiCommands["GetVisibleAspects"] = "GetVisibleAspects";
    ApiCommands["SetVisibleAspects"] = "SetVisibleAspects";
    ApiCommands["LoadColorFile"] = "LoadColorFile";
    ApiCommands["LoadLinkFile"] = "LoadLinkFile";
    ApiCommands["ClearLinks"] = "ClearLinks";
    //FilesTree
    ApiCommands["FilesTreeDeleteObject"] = "FilesTreeDeleteObject";
    ApiCommands["GetFilesTreeChildren"] = "GetFilesTreeChildren";
    ApiCommands["GetFilesTreeSiblings"] = "GetFilesTreeSiblings";
    ApiCommands["FilesTreeMoveObject"] = "FilesTreeMoveObject";
    ApiCommands["FilesTreeImportContainer"] = "FilesTreeImportContainer";
    ApiCommands["GetFilesTreeContent"] = "GetFilesTreeContent";
    ApiCommands["FilesTreeGetContainer"] = "FilesTreeGetContainer";
    ApiCommands["SetMarkupTool"] = "SetMarkupTool";
    ApiCommands["GetIntelliPidElementsHitByMarkup"] = "GetIntelliPidElementsHitByMarkup";
    ApiCommands["FilesTreeClose"] = "FilesTreeClose";
    ApiCommands["FilesTreeCreateMarkup"] = "FilesTreeCreateMarkup";
    ApiCommands["FilesTreeEdit"] = "FilesTreeEdit";
    ApiCommands["FilesTreeShow"] = "FilesTreeShow";
    ApiCommands["FilesTreeView"] = "FilesTreeView";
    ApiCommands["FilesTreeCreateSketch"] = "FilesTreeCreateSketch";
    ApiCommands["FilesTreeSetState"] = "FilesTreeSetState";
    ApiCommands["FilesTreeGetState"] = "FilesTreeGetState";
    ApiCommands["FilesTreeCreateComment"] = "FilesTreeCreateComment";
    ApiCommands["ExportSketchAsUpvc"] = "ExportSketchAsUpvc";
    ApiCommands["ExportSketchAsDgn"] = "ExportSketchAsDgn";
    ApiCommands["ExportSprayingAsUpvc"] = "ExportSprayingAsUpvc";
    ApiCommands["FilesTreeCreateDrawing"] = "FilesTreeCreateDrawing";
    ApiCommands["GetDrawingTemplates"] = "GetDrawingTemplates";
    ApiCommands["ExportDrawing"] = "ExportDrawing";
    //Folder
    ApiCommands["GetFilesTreeRoot"] = "GetFilesTreeRoot";
    ApiCommands["FilesTreeCreateFolder"] = "FilesTreeCreateFolder";
    //Poi
    ApiCommands["PlacePoi"] = "PlacePoi";
    ApiCommands["PlacePoiWithComment"] = "PlacePoiWithComment";
    // PidSketch
    ApiCommands["SetPidSketchTool"] = "SetPidSketchTool";
    //Events
    ApiCommands["AddEventCallback"] = "AddEventCallback";
    ApiCommands["RemoveEventCallback"] = "RemoveEventCallback";
    //Application
    ApiCommands["GetLifeCycleState"] = "GetLifeCycleState";
    ApiCommands["ShowMessage"] = "ShowMessage";
    ApiCommands["FocusViewer"] = "FocusViewer";
    ApiCommands["QuitApplication"] = "QuitApplication";
    ApiCommands["CacheModel"] = "CacheModel";
    ApiCommands["LoadModel"] = "LoadModel";
    ApiCommands["DeleteModel"] = "DeleteModel";
    ApiCommands["ActivateLicense"] = "ActivateLicense";
    ApiCommands["DeactivateLicense"] = "DeactivateLicense";
    ApiCommands["LoadFile"] = "LoadFile";
    ApiCommands["ProcessFile"] = "ProcessFile";
    ApiCommands["LoadSketch"] = "LoadSketch";
    ApiCommands["LoadPackageFile"] = "LoadPackageFile";
    ApiCommands["ExportPackageFile"] = "ExportPackageFile";
    ApiCommands["ClearAuthConfig"] = "ClearAuthConfig";
    ApiCommands["SetAuthConfig"] = "SetAuthConfig";
    ApiCommands["OpenPath"] = "OpenPath";
    ApiCommands["WaitForModelLoading"] = "WaitForModelLoading";
    ApiCommands["SetLanguage"] = "SetLanguage";
    ApiCommands["GetLanguage"] = "GetLanguage";
    ApiCommands["GetRenderMode"] = "GetRenderMode";
    ApiCommands["SetRenderMode"] = "SetRenderMode";
    ApiCommands["GetQualityLevel"] = "GetQualityLevel";
    ApiCommands["SetQualityLevel"] = "SetQualityLevel";
    ApiCommands["GetPanoramaCentresVisibility"] = "GetPanoramaCentresVisibility";
    ApiCommands["SetPanoramaCentresVisibility"] = "SetPanoramaCentresVisibility";
    ApiCommands["GetViewerVersion"] = "GetViewerVersion";
    //Attribute Tree
    ApiCommands["GetTreeRootNode"] = "GetTreeRootNode";
    ApiCommands["GetTreeFolderChildren"] = "GetTreeFolderChildren";
    ApiCommands["GetTreeFolderSiblings"] = "GetTreeFolderSiblings";
    ApiCommands["GetTreeNodesOfFolder"] = "GetTreeNodesOfFolder";
    ApiCommands["GetTreeStructure"] = "GetTreeStructure";
    //Remote
    ApiCommands["WfsLoadRemote"] = "WfsLoadRemote";
    ApiCommands["GetWfsRemoteContent"] = "GetWfsRemoteContent";
    ApiCommands["GetRenderStreamingInfo"] = "GetRenderStreamingInfo";
    ApiCommands["WfsClearAttached"] = "WfsClearAttached";
    //Authentication
    ApiCommands["OpenAuthenticationContext"] = "OpenAuthenticationContext";
    ApiCommands["CloseAuthenticationContext"] = "CloseAuthenticationContext";
    ApiCommands["StartLogoutAuthenticationContext"] = "StartLogoutAuthenticationContext";
    //(Pid)Sketch
    ApiCommands["SelectSymbolForPlacement"] = "SelectSymbolForPlacement";
    ApiCommands["GetCatalogSymbols"] = "GetCatalogSymbols";
    ApiCommands["PlacePrimitive"] = "PlacePrimitive";
    ApiCommands["PlaceSymbol"] = "PlaceSymbol";
    ApiCommands["DeleteSketchItem"] = "DeleteSketchItem";
    //Clash
    ApiCommands["StartClashComputation"] = "StartClashComputation";
    ApiCommands["GetClashCandidates"] = "GetClashCandidates";
    ApiCommands["GetClashResults"] = "GetClashResults";
    ApiCommands["CancelClashComputation"] = "CancelClashComputation";
    //PDF Printer
    ApiCommands["PdfPrinterCreate"] = "PdfPrinterCreate";
    ApiCommands["PdfPrinterDelete"] = "PdfPrinterDelete";
    ApiCommands["PdfPrinterPrintToBase64"] = "PdfPrinterPrintToBase64";
    ApiCommands["PdfPrinterAddIntelliPidPage"] = "PdfPrinterAddIntelliPidPage";
    //Localstorage
    ApiCommands["SetStorageVariable"] = "SetStorageVariable";
    ApiCommands["GetStorageVariable"] = "GetStorageVariable";
    ApiCommands["DeleteStorageVariable"] = "DeleteStorageVariable";
    ApiCommands["GetStorageVariablesList"] = "GetStorageVariablesList";
    // Settings
    ApiCommands["GetUiColors"] = "GetUiColors";
    ApiCommands["GetUiThemes"] = "GetUiThemes";
    ApiCommands["SetActiveUiTheme"] = "SetActiveUiTheme";
    ApiCommands["GetUiVariables"] = "GetUiVariables";
    // Fileoperations
    ApiCommands["SaveFileDialog"] = "SaveFileDialog";
    ApiCommands["LoadFileDialog"] = "LoadFileDialog";
    ApiCommands["GenericLoadFromFile"] = "GenericLoadFromFile";
    // Animation
    ApiCommands["GenerateAnimationKeyframe"] = "GenerateAnimationKeyframe";
    ApiCommands["SetAnimationCurrentTime"] = "SetAnimationCurrentTime";
    //    SetAnimationStart = "SetAnimationStart",
    //    GetAnimationStart = "GetAnimationStart",
    // Layout
    ApiCommands["GetWindowLayout"] = "GetWindowLayout";
    ApiCommands["SetWindowLayout"] = "SetWindowLayout";
})(ApiCommands || (exports.ApiCommands = ApiCommands = {}));
var PackageConditionTypes;
(function (PackageConditionTypes) {
    PackageConditionTypes["None"] = "None";
    PackageConditionTypes["IntelliVolume"] = "IntelliVolume";
    PackageConditionTypes["Group"] = "Group";
    PackageConditionTypes["Attribute"] = "Attribute";
    PackageConditionTypes["Volume"] = "Volume";
})(PackageConditionTypes || (exports.PackageConditionTypes = PackageConditionTypes = {}));
var ConsolidationMode;
(function (ConsolidationMode) {
    ConsolidationMode["Base"] = "Base";
    ConsolidationMode["AndNot"] = "AndNot";
    ConsolidationMode["Or"] = "Or";
    ConsolidationMode["And"] = "And";
})(ConsolidationMode || (exports.ConsolidationMode = ConsolidationMode = {}));
var AttributeConditionComparison;
(function (AttributeConditionComparison) {
    AttributeConditionComparison["Equals"] = "==";
    AttributeConditionComparison["NotEquals"] = "!=";
    AttributeConditionComparison["Like"] = "Like";
    AttributeConditionComparison["NotLike"] = "Not Like";
})(AttributeConditionComparison || (exports.AttributeConditionComparison = AttributeConditionComparison = {}));
var VolumeConditionMode;
(function (VolumeConditionMode) {
    /// <summary>
    /// Inside
    /// </summary>
    VolumeConditionMode["Includes"] = "Includes";
    /// <summary>
    /// Overlap
    /// </summary>
    VolumeConditionMode["Overlaps"] = "Overlaps";
    /// <summary>
    /// Outside overlap
    /// </summary>
    VolumeConditionMode["NotIncludes"] = "Not Includes";
    /// <summary>
    /// Outside
    /// </summary>
    VolumeConditionMode["NotOverlaps"] = "Not Overlaps";
})(VolumeConditionMode || (exports.VolumeConditionMode = VolumeConditionMode = {}));
var PointOfInterestType;
(function (PointOfInterestType) {
    PointOfInterestType[PointOfInterestType["Sphere"] = 0] = "Sphere";
    PointOfInterestType[PointOfInterestType["CustomMesh"] = 1] = "CustomMesh";
})(PointOfInterestType || (exports.PointOfInterestType = PointOfInterestType = {}));
var ClippingMode;
(function (ClippingMode) {
    ClippingMode[ClippingMode["None"] = 0] = "None";
    ClippingMode[ClippingMode["Volume"] = 1] = "Volume";
    ClippingMode[ClippingMode["GridMeasure"] = 2] = "GridMeasure";
    ClippingMode[ClippingMode["Intelli"] = 3] = "Intelli";
})(ClippingMode || (exports.ClippingMode = ClippingMode = {}));
var MarkupMode;
(function (MarkupMode) {
    MarkupMode[MarkupMode["None"] = 0] = "None";
    MarkupMode[MarkupMode["Line"] = 1] = "Line";
    MarkupMode[MarkupMode["FreeHand"] = 2] = "FreeHand";
    MarkupMode[MarkupMode["Rectangle"] = 3] = "Rectangle";
    MarkupMode[MarkupMode["Oval"] = 4] = "Oval";
    MarkupMode[MarkupMode["Text"] = 5] = "Text";
    MarkupMode[MarkupMode["Erase"] = 6] = "Erase";
    MarkupMode[MarkupMode["OrthogonalLine"] = 7] = "OrthogonalLine";
    MarkupMode[MarkupMode["Move"] = 8] = "Move";
})(MarkupMode || (exports.MarkupMode = MarkupMode = {}));
var PidSketchToolMode;
(function (PidSketchToolMode) {
    // This reflects UPV
    PidSketchToolMode[PidSketchToolMode["None"] = 0] = "None";
    //Comment = 1,
    //BreakLine = 2,
    //TextMarker = 3,
    PidSketchToolMode[PidSketchToolMode["Routing"] = 4] = "Routing";
    PidSketchToolMode[PidSketchToolMode["Rectangle"] = 5] = "Rectangle";
    PidSketchToolMode[PidSketchToolMode["Circle"] = 6] = "Circle";
    PidSketchToolMode[PidSketchToolMode["Valve"] = 7] = "Valve";
    //CustomSymbol = 8,
    //IntelliPidLayer = 9,
    PidSketchToolMode[PidSketchToolMode["Text"] = 10] = "Text";
    //Copied = 11,
    //Legend = 12,
    PidSketchToolMode[PidSketchToolMode["Cloud"] = 13] = "Cloud";
    PidSketchToolMode[PidSketchToolMode["FreeHand"] = 15] = "FreeHand";
    PidSketchToolMode[PidSketchToolMode["PolyLine"] = 16] = "PolyLine";
    //
    // These are added extra 
    PidSketchToolMode[PidSketchToolMode["BreakLine"] = 99] = "BreakLine";
    PidSketchToolMode[PidSketchToolMode["UnBreakLine"] = 100] = "UnBreakLine";
    PidSketchToolMode[PidSketchToolMode["Copy"] = 101] = "Copy";
    PidSketchToolMode[PidSketchToolMode["Rotate"] = 102] = "Rotate";
    PidSketchToolMode[PidSketchToolMode["Undo"] = 103] = "Undo";
    PidSketchToolMode[PidSketchToolMode["Redo"] = 104] = "Redo";
    PidSketchToolMode[PidSketchToolMode["HideObjects"] = 105] = "HideObjects";
    PidSketchToolMode[PidSketchToolMode["ShowHiddenObjects"] = 106] = "ShowHiddenObjects";
    PidSketchToolMode[PidSketchToolMode["UnhideObjects"] = 107] = "UnhideObjects";
})(PidSketchToolMode || (exports.PidSketchToolMode = PidSketchToolMode = {}));
var ExportableOptions;
(function (ExportableOptions) {
    ExportableOptions[ExportableOptions["Inherit"] = 0] = "Inherit";
    ExportableOptions[ExportableOptions["Export"] = 1] = "Export";
    ExportableOptions[ExportableOptions["Ignore"] = 2] = "Ignore";
})(ExportableOptions || (exports.ExportableOptions = ExportableOptions = {}));
var ColorMode;
(function (ColorMode) {
    ColorMode[ColorMode["Default"] = 0] = "Default";
    ColorMode[ColorMode["AsModified"] = 1] = "AsModified";
    ColorMode[ColorMode["Original"] = 2] = "Original";
})(ColorMode || (exports.ColorMode = ColorMode = {}));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["GroundPlate"] = 300] = "GroundPlate";
    PrimitiveType[PrimitiveType["Column"] = 310] = "Column";
    PrimitiveType[PrimitiveType["Beam"] = 320] = "Beam";
    PrimitiveType[PrimitiveType["Slab"] = 340] = "Slab";
    PrimitiveType[PrimitiveType["Cube"] = 100] = "Cube";
    PrimitiveType[PrimitiveType["EquipmentVertical"] = 102] = "EquipmentVertical";
    PrimitiveType[PrimitiveType["EquipmentHorizontal"] = 101] = "EquipmentHorizontal";
    PrimitiveType[PrimitiveType["Sphere"] = 1050] = "Sphere";
    PrimitiveType[PrimitiveType["Platform"] = 200] = "Platform";
    PrimitiveType[PrimitiveType["CustomObj"] = 9999] = "CustomObj";
})(PrimitiveType || (exports.PrimitiveType = PrimitiveType = {}));
var FileDialogApiReturnType;
(function (FileDialogApiReturnType) {
    FileDialogApiReturnType[FileDialogApiReturnType["Cancelled"] = 0] = "Cancelled";
    FileDialogApiReturnType[FileDialogApiReturnType["Ok"] = 1] = "Ok";
    FileDialogApiReturnType[FileDialogApiReturnType["Error"] = 2] = "Error";
})(FileDialogApiReturnType || (exports.FileDialogApiReturnType = FileDialogApiReturnType = {}));
var ClashMode;
(function (ClashMode) {
    /**
     *
     */
    ClashMode[ClashMode["WithinQueryOnly"] = 0] = "WithinQueryOnly";
    /**
     *
     */
    ClashMode[ClashMode["QueryWithFullModel"] = 1] = "QueryWithFullModel";
    /**
     *
     */
    ClashMode[ClashMode["PackageAAgainstPackageBWithinQuery"] = 2] = "PackageAAgainstPackageBWithinQuery";
})(ClashMode || (exports.ClashMode = ClashMode = {}));
var GenericLoadFromFileResponseResultType;
(function (GenericLoadFromFileResponseResultType) {
    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["Ok"] = 0] = "Ok";
    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["FileNotFound"] = 1] = "FileNotFound";
    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["FileNotAllowed"] = 2] = "FileNotAllowed";
    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["OtherError"] = 3] = "OtherError";
    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["Undefined"] = 4] = "Undefined";
})(GenericLoadFromFileResponseResultType || (exports.GenericLoadFromFileResponseResultType = GenericLoadFromFileResponseResultType = {}));
var PdfTypes;
(function (PdfTypes) {
    PdfTypes[PdfTypes["All"] = 0] = "All";
    PdfTypes[PdfTypes["Document"] = 1] = "Document";
    PdfTypes[PdfTypes["Drawing"] = 2] = "Drawing";
})(PdfTypes || (exports.PdfTypes = PdfTypes = {}));
var ChangeableAttributeUnitType;
(function (ChangeableAttributeUnitType) {
    ChangeableAttributeUnitType[ChangeableAttributeUnitType["None"] = 0] = "None";
    ChangeableAttributeUnitType[ChangeableAttributeUnitType["Length"] = 1] = "Length";
    ChangeableAttributeUnitType[ChangeableAttributeUnitType["Angle"] = 2] = "Angle";
})(ChangeableAttributeUnitType || (exports.ChangeableAttributeUnitType = ChangeableAttributeUnitType = {}));
var TextureRenderMode;
(function (TextureRenderMode) {
    TextureRenderMode[TextureRenderMode["Normal"] = 0] = "Normal";
    TextureRenderMode[TextureRenderMode["HeightMap"] = 1] = "HeightMap";
    TextureRenderMode[TextureRenderMode["NoTexture"] = 2] = "NoTexture";
})(TextureRenderMode || (exports.TextureRenderMode = TextureRenderMode = {}));
var QualityLevel;
(function (QualityLevel) {
    QualityLevel[QualityLevel["Low"] = 0] = "Low";
    QualityLevel[QualityLevel["Medium"] = 1] = "Medium";
    QualityLevel[QualityLevel["High"] = 2] = "High";
})(QualityLevel || (exports.QualityLevel = QualityLevel = {}));
var ModelLoadMessageType;
(function (ModelLoadMessageType) {
    ModelLoadMessageType[ModelLoadMessageType["AlreadyLoaded"] = 0] = "AlreadyLoaded";
    ModelLoadMessageType[ModelLoadMessageType["FinishedLoading"] = 1] = "FinishedLoading";
})(ModelLoadMessageType || (exports.ModelLoadMessageType = ModelLoadMessageType = {}));
var DrawingExportType;
(function (DrawingExportType) {
    DrawingExportType[DrawingExportType["Svg"] = 0] = "Svg";
    DrawingExportType[DrawingExportType["Acadpdf"] = 1] = "Acadpdf";
    DrawingExportType[DrawingExportType["Pdf"] = 2] = "Pdf";
    DrawingExportType[DrawingExportType["Png"] = 3] = "Png";
    DrawingExportType[DrawingExportType["Dxf"] = 4] = "Dxf";
})(DrawingExportType || (exports.DrawingExportType = DrawingExportType = {}));
var AnimationMessageTypes;
(function (AnimationMessageTypes) {
    AnimationMessageTypes[AnimationMessageTypes["MissingParameters"] = 0] = "MissingParameters";
    AnimationMessageTypes[AnimationMessageTypes["AnimationNotFound"] = 1] = "AnimationNotFound";
    AnimationMessageTypes[AnimationMessageTypes["Success"] = 2] = "Success";
})(AnimationMessageTypes || (exports.AnimationMessageTypes = AnimationMessageTypes = {}));
var WindowLayoutFormat;
(function (WindowLayoutFormat) {
    WindowLayoutFormat[WindowLayoutFormat["Xml"] = 1] = "Xml";
    WindowLayoutFormat[WindowLayoutFormat["Json"] = 2] = "Json";
})(WindowLayoutFormat || (exports.WindowLayoutFormat = WindowLayoutFormat = {}));
var FilesTreeImportBehaviour;
(function (FilesTreeImportBehaviour) {
    FilesTreeImportBehaviour[FilesTreeImportBehaviour["KeepBoth"] = 0] = "KeepBoth";
    FilesTreeImportBehaviour[FilesTreeImportBehaviour["Replace"] = 1] = "Replace";
    FilesTreeImportBehaviour[FilesTreeImportBehaviour["Skip"] = 2] = "Skip";
})(FilesTreeImportBehaviour || (exports.FilesTreeImportBehaviour = FilesTreeImportBehaviour = {}));
