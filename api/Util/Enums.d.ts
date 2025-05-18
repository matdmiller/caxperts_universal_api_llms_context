/**
 * @deprecated
 * Old UPV Target codes
 */
export declare enum TargetEnum {
    Undefined = "0",
    ThreeD = "1",
    Intelli = "10",
    Browser = "11"
}
/**
 * how Queries will be combined
 */
export declare enum CombineModes {
    And = "AND",
    Or = "OR"
}
/**
 * The sceneType defines what this scene contains
 */
export declare enum SceneType {
    Undefined = "0",
    ThreeD = "1",
    IntelliPid = "10",
    Browser = "11"
}
export declare enum UpdateModes {
    Append = 0,
    Full = 1
}
export declare enum CustomAttributeDataType {
    CodeList = 1,
    FreeText = 2,
    Numeric = 3,
    NumericWithUnit = 4,
    Color = 6
}
export declare enum FeatureTypes {
    Unknown = "Unknown",
    Model = "Model",
    Sketch = "Sketch",
    Markup = "Markup",
    IntellipidSketch = "IntellipidSketch",
    AnimationConfiguration = "AnimationConfiguration",
    AnimationDefinition = "AnimationDefinition",
    Catalogue = "Catalogue",
    Symbol = "Symbol",
    MarkupContainer = "MarkupContainer",
    Orm = "Orm",
    Spraying = "Spraying",
    Comment = "Comment",
    View = "View",
    Package = "Package",
    Folder = "Folder",
    CommentSvg = "CommentSvg",
    Screenshot = "Screenshot",
    Photo = "Photo",
    TwoDToThreeD = "TwoDToThreeD",
    PointOfInterest = "PointOfInterest",
    Drawing = "Drawing",
    Files = "Files",
    MeasurementSnapshot = "MeasurementSnapshot",
    IntelliPidLegendPositions = "IntelliPidLegendPositions",
    IsolationPlan = "IsolationPlan",
    CataloguePlacement = "CataloguePlacement",
    DrawingComment = "DrawingComment",
    AppControl = "AppControl",
    Animation = "Animation",
    PIDSketch = "PIDSketch",
    Report = "Report"
}
export declare enum ProjectionSphereType {
    Picture = 0,
    Panorama = 1
}
/**
 * @internal
 */
export declare enum ApiCommands {
    SetCameraView = "SetCameraView",
    GetCameraView = "GetCameraView",
    SetClippingPlane = "SetClippingPlane",
    SetCameraViewLookAtTarget = "SetCameraViewLookAtTarget",
    ResetView = "ResetView",
    GetObjects = "GetObjects",
    GetSelectedObjects = "GetSelectedObjects",
    GetObjectsAttributes = "GetObjectsAttributes",
    GetObjectsBoundingBox = "GetObjectsBoundingBox",
    GetObjectsColors = "GetObjectsColors",
    GetObjectsSnapInfo = "GetObjectsSnapInfo",
    GetObjectsChangeableAttributes = "GetObjectsChangeableAttributes",
    SetAttribute = "SetAttribute",
    AddChangeableAttribute = "AddChangeableAttribute",
    DeleteChangeableAttribute = "DeleteChangeableAttribute",
    Select = "Select",
    ClearSelection = "ClearSelection",
    Fit = "Fit",
    Color = "Color",
    ClearColor = "ClearColor",
    Highlight = "Highlight",
    ClearHighlight = "ClearHighlight",
    ShowOnly = "ShowOnly",
    SetVisibility = "SetVisibility",
    GetClippingInfo = "GetClippingInfo",
    VolumeClip = "VolumeClip",
    VolumeClipByCoordinates = "VolumeClipByCoordinates",
    IntelliClip = "IntelliClip",
    ClearClipping = "ClearClipping",
    SearchFallback = "SearchFallback",
    GetIntelliPidRawSvgData = "GetIntelliPidRawSvgData",
    GetLinkedElements = "GetLinkedElements",
    PlaceObj = "PlaceObj",
    DrawLine = "DrawLine",
    PlaceText = "PlaceText",
    PlaceArc = "PlaceArc",
    PlacePly = "PlacePly",
    DestroyDrawing = "DestroyDrawing",
    GetModelInfo = "GetModelInfo",
    GetProjectInfo = "GetProjectInfo",
    LoadConfigFile = "LoadConfigFile",
    ClearCustomAttributes = "ClearCustomAttributes",
    ImportCustomAttributeChangeSet = "ImportCustomAttributeChangeset",
    LoadCustomAttributeConfigurationFile = "LoadCustomAttributeConfigurationFile",
    LoadCustomAttributeDataFile = "LoadCustomAttributeDataFile",
    SetCustomAttributeConfiguration = "SetCustomAttributeConfiguration",
    GetCustomAttributeConfiguration = "GetCustomAttributeConfiguration",
    ExportCustomAttributes = "ExportCustomAttributes",
    GetIntelliPidDrawings = "GetIntelliPidDrawings",
    OpenIntelliPidDrawings = "OpenIntelliPidDrawings",
    GetProjectionSpheres = "GetProjectionSpheres",
    GetCurrentProjectionSphere = "GetCurrentProjectionSphere",
    EnterProjectionSphere = "EnterProjectionSphere",
    LeaveProjectionSphere = "LeaveProjectionSphere",
    GetAllPids = "GetAllPids",
    GetOpenPids = "GetOpenPids",
    GetActivePid = "GetActivePid",
    OpenPid = "OpenPid",
    ClosePid = "ClosePid",
    GetModelAttributeValues = "GetModelAttributeValues",
    GetAllPdfs = "GetAllPdfs",
    GetOpenPdfsTabs = "GetOpenPdfsTabs",
    GetActivePdfTab = "GetActivePdfTab",
    OpenPdf = "OpenPdf",
    ClosePdf = "ClosePdf",
    CreateDiameterMeasurement = "CreateDiameterMeasurement",
    TakeScreenshot = "TakeScreenshot",
    TakeAndSaveScreenShot = "TakeAndSaveScreenshot",
    GetTreeConfiguration = "GetTreeConfiguration",
    SetTreeConfiguration = "SetTreeConfiguration",
    GetVisibleAspects = "GetVisibleAspects",
    SetVisibleAspects = "SetVisibleAspects",
    LoadColorFile = "LoadColorFile",
    LoadLinkFile = "LoadLinkFile",
    ClearLinks = "ClearLinks",
    FilesTreeDeleteObject = "FilesTreeDeleteObject",
    GetFilesTreeChildren = "GetFilesTreeChildren",
    GetFilesTreeSiblings = "GetFilesTreeSiblings",
    FilesTreeMoveObject = "FilesTreeMoveObject",
    FilesTreeImportContainer = "FilesTreeImportContainer",
    GetFilesTreeContent = "GetFilesTreeContent",
    FilesTreeGetContainer = "FilesTreeGetContainer",
    SetMarkupTool = "SetMarkupTool",
    GetIntelliPidElementsHitByMarkup = "GetIntelliPidElementsHitByMarkup",
    FilesTreeClose = "FilesTreeClose",
    FilesTreeCreateMarkup = "FilesTreeCreateMarkup",
    FilesTreeEdit = "FilesTreeEdit",
    FilesTreeShow = "FilesTreeShow",
    FilesTreeView = "FilesTreeView",
    FilesTreeCreateSketch = "FilesTreeCreateSketch",
    FilesTreeSetState = "FilesTreeSetState",
    FilesTreeGetState = "FilesTreeGetState",
    FilesTreeCreateComment = "FilesTreeCreateComment",
    ExportSketchAsUpvc = "ExportSketchAsUpvc",
    ExportSketchAsDgn = "ExportSketchAsDgn",
    ExportSprayingAsUpvc = "ExportSprayingAsUpvc",
    GetFilesTreeRoot = "GetFilesTreeRoot",
    FilesTreeCreateFolder = "FilesTreeCreateFolder",
    PlacePoi = "PlacePoi",
    PlacePoiWithComment = "PlacePoiWithComment",
    SetPidSketchTool = "SetPidSketchTool",
    AddEventCallback = "AddEventCallback",
    RemoveEventCallback = "RemoveEventCallback",
    GetLifeCycleState = "GetLifeCycleState",
    ShowMessage = "ShowMessage",
    FocusViewer = "FocusViewer",
    QuitApplication = "QuitApplication",
    CacheModel = "CacheModel",
    LoadModel = "LoadModel",
    DeleteModel = "DeleteModel",
    ActivateLicense = "ActivateLicense",
    DeactivateLicense = "DeactivateLicense",
    LoadFile = "LoadFile",
    ProcessFile = "ProcessFile",
    LoadSketch = "LoadSketch",
    LoadPackageFile = "LoadPackageFile",
    ExportPackageFile = "ExportPackageFile",
    ClearAuthConfig = "ClearAuthConfig",
    SetAuthConfig = "SetAuthConfig",
    OpenPath = "OpenPath",
    SetLanguage = "SetLanguage",
    GetLanguage = "GetLanguage",
    GetTreeRootNode = "GetTreeRootNode",
    GetTreeFolderChildren = "GetTreeFolderChildren",
    GetTreeFolderSiblings = "GetTreeFolderSiblings",
    GetTreeNodesOfFolder = "GetTreeNodesOfFolder",
    GetTreeStructure = "GetTreeStructure",
    WfsLoadRemote = "WfsLoadRemote",
    GetWfsRemoteContent = "GetWfsRemoteContent",
    GetRenderStreamingInfo = "GetRenderStreamingInfo",
    WfsClearAttached = "WfsClearAttached",
    OpenAuthenticationContext = "OpenAuthenticationContext",
    CloseAuthenticationContext = "CloseAuthenticationContext",
    StartLogoutAuthenticationContext = "StartLogoutAuthenticationContext",
    SelectSymbolForPlacement = "SelectSymbolForPlacement",
    GetCatalogSymbols = "GetCatalogSymbols",
    PlacePrimitive = "PlacePrimitive",
    PlaceSymbol = "PlaceSymbol",
    DeleteSketchItem = "DeleteSketchItem",
    StartClashComputation = "StartClashComputation",
    GetClashCandidates = "GetClashCandidates",
    GetClashResults = "GetClashResults",
    CancelClashComputation = "CancelClashComputation",
    PdfPrinterCreate = "PdfPrinterCreate",
    PdfPrinterDelete = "PdfPrinterDelete",
    PdfPrinterPrintToBase64 = "PdfPrinterPrintToBase64",
    PdfPrinterAddIntelliPidPage = "PdfPrinterAddIntelliPidPage",
    SetStorageVariable = "SetStorageVariable",
    GetStorageVariable = "GetStorageVariable",
    DeleteStorageVariable = "DeleteStorageVariable",
    GetStorageVariablesList = "GetStorageVariablesList",
    GetUiColors = "GetUiColors",
    GetUiThemes = "GetUiThemes",
    SetActiveUiTheme = "SetActiveUiTheme",
    GetUiVariables = "GetUiVariables",
    SaveFileDialog = "SaveFileDialog",
    LoadFileDialog = "LoadFileDialog",
    GenericLoadFromFile = "GenericLoadFromFile"
}
export declare enum PackageConditionTypes {
    None = "None",
    IntelliVolume = "IntelliVolume",
    Group = "Group",
    Attribute = "Attribute",
    Volume = "Volume"
}
export declare enum ConsolidationMode {
    Base = "Base",
    AndNot = "AndNot",
    Or = "Or",
    And = "And"
}
export declare enum AttributeConditionComparison {
    Equals = "==",
    NotEquals = "!=",
    Like = "Like",
    NotLike = "Not Like"
}
export declare enum VolumeConditionMode {
    Includes = "Includes",
    Overlaps = "Overlaps",
    NotIncludes = "Not Includes",
    NotOverlaps = "Not Overlaps"
}
export declare enum PointOfInterestType {
    Sphere = 0,
    CustomMesh = 1
}
export declare enum ClippingMode {
    None = 0,
    Volume = 1,
    GridMeasure = 2,
    Intelli = 3
}
export declare enum MarkupMode {
    None = 0,
    Line = 1,
    FreeHand = 2,
    Rectangle = 3,
    Oval = 4,
    Text = 5,
    Erase = 6,
    OrthogonalLine = 7,
    Move = 8
}
export declare enum PidSketchToolMode {
    None = 0,
    Routing = 4,
    Rectangle = 5,
    Circle = 6,
    Valve = 7,
    Text = 10,
    Cloud = 13,
    BreakLine = 99,
    UnBreakLine = 100,
    Copy = 101,
    Rotate = 102,
    Undo = 103,
    Redo = 104,
    HideObjects = 105,
    ShowHiddenObjects = 106,
    UnhideObjects = 107
}
export declare enum ExportableOptions {
    Inherit = 0,
    Export = 1,
    Ignore = 2
}
export declare enum ColorMode {
    Default = 0,
    AsModified = 1,
    Original = 2
}
export declare enum PrimitiveType {
    GroundPlate = 300,
    Column = 310,
    Beam = 320,
    Slab = 340,
    Cube = 100,
    EquipmentVertical = 102,
    EquipmentHorizontal = 101,
    Sphere = 1050,
    Platform = 200,
    CustomObj = 9999
}
export declare enum FileDialogApiReturnType {
    Cancelled = 0,
    Ok = 1,
    Error = 2
}
export declare enum ClashMode {
    /**
     *
     */
    WithinQueryOnly = 0,
    /**
     *
     */
    QueryWithFullModel = 1,
    /**
     *
     */
    PackageAAgainstPackageBWithinQuery = 2
}
export declare enum GenericLoadFromFileResponseResultType {
    Ok = 0,
    FileNotFound = 1,
    FileNotAllowed = 2,
    OtherError = 3,
    Undefined = 4
}
export declare enum PdfTypes {
    All = 0,
    Document = 1,
    Drawing = 2
}
export declare enum ChangeableAttributeUnitType {
    None = 0,
    Length = 1,
    Angle = 2
}
//# sourceMappingURL=Enums.d.ts.map