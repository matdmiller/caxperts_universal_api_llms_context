export declare class AddChangeableAttributeParameter {
    Uid: string;
    Name: string;
    Mode: CustomAttributeDataType;
    CodeListEntriesNames: string[];
    CodeListEntriesColors: Color[];
    DisplayName: string;
    Deletable: boolean;
    Readonly: boolean;
    Hidden: boolean;
    InitialValue: string;
    UnitType: ChangeableAttributeUnitType;
    DrawingPathForPid: string;
}

export declare class AddPidToPdfPrinterParameter {
    DrawingPath: string;
    PrintMode: ColorMode;
}

export declare class AnimationKeyframeParameters {
    MillisecondsSinceStart: number;
    ElementGuids: string[];
}

export declare enum AnimationMessageTypes {
    MissingParameters = 0,
    AnimationNotFound = 1,
    Success = 2
}

export declare class AnimationTimestamp {
    Start: string;
    End: string;
    Current: string;
    IsPlaying: boolean;
}

/**
 * @internal
 */
export declare class AnimationTimestampChangedEvent {
    AnimationTimestampChanged: AnimationTimestampChangedObject;
}

export declare class AnimationTimestampChangedObject {
    Timestamp: AnimationTimestamp;
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
    FilesTreeCreateDrawing = "FilesTreeCreateDrawing",
    GetDrawingTemplates = "GetDrawingTemplates",
    ExportDrawing = "ExportDrawing",
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
    WaitForModelLoading = "WaitForModelLoading",
    SetLanguage = "SetLanguage",
    GetLanguage = "GetLanguage",
    GetRenderMode = "GetRenderMode",
    SetRenderMode = "SetRenderMode",
    GetQualityLevel = "GetQualityLevel",
    SetQualityLevel = "SetQualityLevel",
    GetPanoramaCentresVisibility = "GetPanoramaCentresVisibility",
    SetPanoramaCentresVisibility = "SetPanoramaCentresVisibility",
    GetViewerVersion = "GetViewerVersion",
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
    GenericLoadFromFile = "GenericLoadFromFile",
    GenerateAnimationKeyframe = "GenerateAnimationKeyframe",
    SetAnimationCurrentTime = "SetAnimationCurrentTime",
    GetWindowLayout = "GetWindowLayout",
    SetWindowLayout = "SetWindowLayout"
}

/**
 * @internal
 */
export declare enum ApiEvents {
    SelectionChanged = "SelectionChanged",
    PointerClicked = "PointerClicked",
    LinkClicked = "LinkClicked",
    LifeCycle = "LifeCycle",
    CustomAttributeValueChanged = "CustomAttributeValueChanged",
    AnimationTimestampChanged = "AnimationTimestampChanged",
    IntellipidSelectionChanged = "IntellipidSelectionChanged",
    AuthenticationContextChanged = "AuthenticationContextChanged",
    ClashComputationProgressChanged = "ClashComputationProgressChanged",
    StorageVariableChanged = "StorageVariableChanged"
}

export declare class ApiMetadata {
    Identifier: string;
    VersionIdentifier: string;
    Name: string;
    FeatureType: FeatureTypes;
    MajorVersion: number;
    MinorVersion: number;
    ViewerVersion: string;
    CreatedDate: Date;
}

export declare class ApiResponse {
    ErrorCode: number;
    ErrorMessage: string;
    RequestId: number;
}

export declare class ApiResponseWithType<T> extends ApiResponse {
    ResultData: T;
    constructor();
}

export declare class ApiSerializationContainer {
    Info: ApiMetadata;
    Content: string;
    FileDependenciesBase64: {
        [key: string]: string;
    };
    PreviewPicturesBase64: {
        [key: string]: string;
    };
}

/**
 * Provides control over a AppControl Scene
 * @alpha
 */
export declare class AppControlScene extends Scene {
    /**
     * @internal
     * @param id
     */
    constructor(id: string);
}

/**
 * Main Entrypoint for interacting with the UPV API
 */
export declare class Application {
    /**
     * Contains all Scenes in the running UPV Instance. To Filter for specific scenes individual properties exist. Example @link ScenePid
     */
    Scenes: Get<Scene[]>;
    /**
     * Contains all IntelliPid scenes
     */
    ScenesPid: Get<ScenePid[]>;
    /**
     * Contains all 3D scenes
     */
    Scenes3d: Get<Scene3d[]>;
    /**
     * Contains all app control scenes
     */
    ScenesAppControls: Get<AppControlScene[]>;
    /**
     * Contains all model loaded inside UPV
     */
    Models: Get<Model[]>;
    /**
     * The current Live Cycle State of UPV
     */
    State: Get<LifeCycleState>;
    /**
     * @deprecated Please use Language inside Settings instead. THis will be removed in a future version
     * The current language of UPV
     */
    Language: GetSet<string>;
    /**
     * Handles all type of events for UPV
     */
    Events: Events;
    /**
     * Handles all type of events for UPV
     */
    FileTree: FileTreeManager;
    /**
     * Handles all type of events for UPV
     */
    Authentication: AuthenticationManager;
    /**
     * Provides storage space for variables. Note that this is shared between all AppControls. If values are persisted they are also stored unencrypted on the disk.
     */
    LocalStorage: LocalStorage;
    /**
     * Provides methods for interacting with the file system
     */
    FileOperations: FileOperations;
    Settings: Settings;
    /**
     * Return the Version and FIleVersion of the Viewer
     */
    ViewerVersion: Get<GetViewerVersion>;
    /**
     *
     * @internal
     *
     */
    private constructor();
    /**
     * Create an instance of this class
     * @returns {@link Application}
         */
     static getInstance(): Application;
     /**
      * Opens a popup with a message inside UPV
      * @param message Message to display
      * @returns ApiResponse can be ignored and will likely change
      */
     showMessage(message: string): Promise<ApiResponse>;
     /**
      * Focus the viewer into the foreground
      * @returns ApiResponse can be ignored and will likely change
      */
     focusViewer(): Promise<ApiResponse>;
     /**
      * Closes UPV
      * @returns ApiResponse can be ignored and will likely change
      */
     quitApplication(): Promise<ApiResponse>;
     /**
      * Load the model into UPV. Currently its not possible to load a model this way as AppControl are only availble inside the model for now
      * @param modelUri path to model
      * @returns ApiResponse can be ignored and will likely change
      */
     loadModel(modelUri: string): Promise<ApiResponse>;
     /**
      * Caches a UPV Model
      * @param modelUri path to model
      * @returns ApiResponse can be ignored and will likely change
      */
     cacheModel(modelUri: string): Promise<ApiResponse>;
     /**
      * Activate a license key
      * @param license licensekey to activate
      * @returns ApiResponse can be ignored and will likely change
      */
     activateLicense(license: string): Promise<ApiResponse>;
     /**
      *
      * @returns Deactivate an active license
      * @returns ApiResponse can be ignored and will likely change
      */
     deactivateLicense(): Promise<ApiResponse>;
     /**
      * Set an Authentication config used when opening models
      * @param domainUri for which URI is the config valid
      * @param configUri the configuration to use
      * @returns ApiResponse can be ignored and will likely change
      */
     setAuthConfig(domainUri: string, configUri: string): Promise<ApiResponse>;
     /**
      * Clear an authentication config for a URI
      * @param domainUri the URI to delete an authentication config for
      * @returns ApiResponse can be ignored and will likely change
      */
     clearAuthConfig(domainUri: string): Promise<ApiResponse>;
     /**
      * Open a path on the local system
      * @param path path to open using the system default example https://google.com
      * @returns
      */
     openPath(path: string): Promise<ApiResponse>;
     /**
      * This command will only returns once the viewer has finished loading the model.
      * THis includes for example Meshloading, TextureLoading etc.
      * If the user is actively moving this function might never return as new Load Jobs are started.
      * This function could be used in automation steps for example in using to capture screenshots.
      * Depending on the state it will signal that either the model was already loaded or that it now finished loading.
      */
     waitForModelLoading(): Promise<ModelLoadMessageType>;
     /**
      * Checks if a connection to UPV is available and commands can be send to UPV
      * @returns
      */
     available(): boolean;
    }

    export declare class Attribute {
        private readonly uid;
        /**
         * The value of the attribute
         */
        Value: string;
        /**
         * The key of the attribute
         */
        Key: string;
        /**
         * Is this a custom Attribute
         */
        IsCustomAttribute: boolean;
        /**
         * Is this a chanable Attribute
         */
        IsChangeableAttribute: boolean;
        /**
         * Update the Custom Attribute. First parameter is the new value. second is the username of the person updating
         */
        SetCustomAttribute: Set_2<{
            value: string;
            user: string;
        }>;
        /**
         * Update a Changeable Attribute. This does not work with custom Attributes
         */
        SetAttribute: Set_2<string>;
        constructor(uid: string, key: string, value: string, isCustomAttribute: boolean, customAttributeDefinition: Definition, customAttributeSourceValue: string, target: Scene, isChangeableAttribute: boolean);
    }

    export declare enum AttributeConditionComparison {
        Equals = "==",
        NotEquals = "!=",
        Like = "Like",
        NotLike = "Not Like"
    }

    export declare class AttributeKeyValue {
        Key: string;
        Value: string;
    }

    export declare class AttributePoi {
        Key: string;
        Value: string;
    }

    export declare class AttributeTreeNode {
        Id: string;
        Name: string;
        Type: string;
        constructor(Id: string, Name: string, Type: string);
        /**
         * Get The Root node of the Attribute Tree
         * @returns
         */
        static getRoot(): Promise<AttributeTreeNode>;
        /**
         * Get the current Sub Folders for this attribute tree element
         * @returns
         */
        getSubFolders(): Promise<AttributeTreeNode[]>;
        /**
         * Get the Siblings for this Attribute Tree element
         * @returns
         */
        getSiblings(): Promise<AttributeTreeNode[]>;
        getTreeNodesOfFolder(): Promise<AttributeTreeNode[]>;
    }

    export declare class AttributeTreeNodeType {
        Id: string;
        Name: string;
        Type: string;
    }

    export declare class AuthenticationContext {
        private readonly _id;
        /**
         * @internal
         * @param _id
         */
        constructor(_id: number);
        private ids;
        /**
         * Retrieve new access and identity tokens before the old ones expire via a callback
         * @param callback
         */
        registerContextChangedEvent(callback: (data: AuthenticationContextChangedEvent) => void): Promise<void>;
        /**
         * Will try to perform a logout against the IDP. Needs to be called before closeAuthenticationContext
         * @returns
         */
        startLogoutProcess(): Promise<ApiResponse>;
        /**
         * Closes the authentication loop on UPV side for this Context
         * @returns
         */
        closeAuthenticationContext(): Promise<ApiResponse>;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        private createCommand;
    }

    export declare class AuthenticationContextChangedEvent {
        AuthenticationContextId: number;
        AccessToken: string;
        IdentityToken: string;
        ExpiresIn: number;
        ErrorMessage: string;
    }

    export declare class AuthenticationManager {
        openAuthenticationContext(oidcConfig: string, OidcConfigBrowserBasedViewing: string): Promise<AuthenticationContext>;
        /**
         * @internal
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class Bounds {
        Min: Vector3D;
        Max: Vector3D;
        Center?: Vector3D;
    }

    export declare class BoundsInfo {
        LowX: number;
        LowY: number;
        LowZ: number;
        HighX: number;
        HighY: number;
        HighZ: number;
    }

    export declare class Camera {
        private scene;
        /**
         * Access to the cameras position
         */
        Position: GetSet<Vector3D>;
        /**
         * Access to the cameras rotation
         */
        Rotation: GetSet<Vector3D>;
        /**
         * Access to the cameras position and rotation combined (faster)
         */
        CameraView: GetSet<CameraView>;
        /**
         * Access to the cameras position and rotation combined (faster)
         */
        ClippingPlane: GetSet<ClippingPlane>;
        /**
         * @internal
         * @param scene
         */
        constructor(scene: Scene3d);
        private setCameraView;
        private getCameraView;
        private getClippingPlane;
        private setClippingPlane;
        /**
         * Make the camera look at a target from the current view
         * @param target Vector of the target
         * @returns
         */
        lookAt(target: Vector3D): Promise<ApiResponse>;
        /**
         * Reset the view to the default position
         * @returns
         */
        resetView(): Promise<ApiResponse>;
    }

    export declare class CameraView {
        Position: Vector3D;
        Rotation: Vector3D;
        constructor(Position: Vector3D, Rotation: Vector3D);
    }

    export declare class CatalogSymbol {
        Path: string;
        Icon: string;
        /** 3D only */
        Variant: string;
    }

    /** @internal */
    declare class CaxApiCommand {
        requestId: number;
        additionalParameters: ParameterBase;
        command: ApiCommands;
        commandParameters: string[];
        condition: string;
        conditionCombineMode: CombineModes;
        model: string;
        target: string;
        constructor(command: ApiCommands);
    }

    export declare class Change extends ChangeSetLine {
    }

    export declare enum ChangeableAttributeUnitType {
        None = 0,
        Length = 1,
        Angle = 2
    }

    export declare class ChangeSet {
        Changes: ChangeSetLine[];
    }

    export declare class ChangeSetLine {
        Id: number;
        SourceValue: string;
        CustomValue: string;
        User: string;
        Timestamp: string;
        IsSessionChange: boolean;
    }

    export declare class Clash {
        ElementA: string;
        ElementB: string;
        BoundsA: Bounds;
        BoundsB: Bounds;
        AspectA: string;
        AspectB: string;
        CollisionPointSample: Vector3D;
    }

    export declare class ClashCandidate {
        ElementA: string;
        ElementB: string;
    }

    export declare class ClashComputationProgressChangedEvent {
        /**
         * Between 0 and 1
         */
        Progress: number;
        CurrentClashesFound: number;
        CurrentClashesToCandidatesRatio: number;
    }

    export declare class ClashContext {
        private ids;
        registerContextChangedEvent(callback: (data: ClashComputationProgressChangedEvent) => void): Promise<void>;
        getClashCandidates(): Promise<GetClashCandidates>;
        getClashResults(): Promise<GetClashes>;
        cancelClashComputation(): Promise<ApiResponse>;
        /**
         * @internal
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
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

    export declare class ClippingDescriptor {
        Mode: ClippingMode;
        VolumeClipping?: VolumeClippingDescriptor;
        IntelliClipping?: IntelliClippingDescriptor;
    }

    export declare enum ClippingMode {
        None = 0,
        Volume = 1,
        GridMeasure = 2,
        Intelli = 3
    }

    export declare class ClippingPlane {
        Near: number;
        Far: number;
    }

    export declare class Color {
        /** Red between 0-1 */
        R: number;
        /** Green between 0-1 */
        G: number;
        /** Blue between 0-1 */
        B: number;
        /** Alpha between 0-1 */
        Alpha: number;
    }

    export declare enum ColorMode {
        Default = 0,
        AsModified = 1,
        Original = 2
    }

    /**
     * how Queries will be combined
     */
    export declare enum CombineModes {
        And = "AND",
        Or = "OR"
    }

    export declare enum ConsolidationMode {
        Base = "Base",
        AndNot = "AndNot",
        Or = "Or",
        And = "And"
    }

    export declare enum CustomAttributeDataType {
        CodeList = 1,
        FreeText = 2,
        Numeric = 3,
        NumericWithUnit = 4,
        Color = 6
    }

    /**
     * Contains the file variants. These might be made unavailable in future versions and replaced by new commands
     * */
    export declare class CustomAttributeLegacy {
        private customAttributes;
        constructor(customAttributes: CustomAttributes);
        loadCustomAttributeConfigurationFile(file: string): Promise<ApiResponse>;
        loadCustomAttributeDataFile(file: string): Promise<ApiResponse>;
    }

    export declare class CustomAttributes {
        private model;
        constructor(model: Model);
        get Legacy(): CustomAttributeLegacy;
        clearCustomAttributes(): Promise<ApiResponse>;
        loadCustomAttributeConfigurationBase64(contentBase64: string): Promise<ApiResponse>;
        loadCustomAttributeDataBase64(contentBase64: string): Promise<ApiResponse>;
        importCustomAttributeChangeSet(changeSets: ChangeSetLine[], showLoadScreen: boolean): Promise<ApiResponse>;
        setCustomAttributeConfiguration(definitions: Definition[], updateMode: UpdateModes): Promise<ApiResponse>;
        getCustomAttributeConfiguration(): Promise<Definition[]>;
        exportCustomAttributes(exportAll: boolean): Promise<ExportCustomAttributes>;
        /**
         * @internal
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class CustomAttributeSourceDefinition {
        Id: number;
        SourceAttribute: string;
        Filter: string;
        DefaultValue: string;
    }

    export declare class CustomAttributeValueChanged {
    }

    /**
     * @internal
     */
    export declare class CustomAttributeValueChangedEvent {
        CustomAttributeValueChanged: CustomAttributeValueChanged;
    }

    export declare class Definition {
        Name: string;
        Mode: CustomAttributeDataType;
        Parameter1: string;
        Parameter2: string;
        Parameter3: string;
        ReadOnly: boolean;
        SourceDefinitions: CustomAttributeSourceDefinition[];
    }

    export declare class DeleteChangeableAttributeParameter {
        Uid: string;
        Name: string;
        DrawingPathForPid: string;
    }

    export declare enum DrawingExportType {
        Svg = 0,
        Acadpdf = 1,
        Pdf = 2,
        Png = 3,
        Dxf = 4
    }

    export declare class DrawingTemplate {
        Name: string;
    }

    export declare class DrawLineParameter {
        DrawingId: string;
        Vertices: Vector3D[];
        Width: number;
        Color: Color;
    }

    export declare class ElementLinks {
        ThreeDUids: string[];
        DocumentLinks: PdfDocument[];
        DrawingLinks: PdfDocument[];
        UrlLinks: UrlLink[];
        PidLinks: PidLink[];
    }

    export declare class Events {
        private unloaded;
        private registeredEvents;
        constructor();
        private onUnload;
        /**
         * Register Selection Changed Event
         */
        registerSelectionChangedEvent(callback: (data: SelectionChanged) => void): Promise<number>;
        /**
         * Register Pointer Clicked Event
         */
        registerPointerClickedEventEvent(callback: (data: PointerClicked) => void): Promise<number>;
        /**
         * Register Lifecycle Event
         */
        registerLifeCycleEvent(callback: (data: LifeCycleEvent) => void): Promise<number>;
        /**
         * Register Link Clicked Event
         */
        registerLinkClickedEvent(callback: (data: LinkClicked) => void): Promise<number>;
        /**
         * Register CUstom Attribute Changed Event
         */
        registerCustomAttributeValueChangedEvent(callback: (data: CustomAttributeValueChanged) => void): Promise<number>;
        /**
         * Register Animation Timestamp Changed Event
         */
        registerAnimationTimestampChangedEvent(callback: (data: AnimationTimestampChangedObject) => void): Promise<number>;
        /**
         * Register Selection Changed Event for IntelliPid
         */
        registerIntellipidSelectionChangedEvent(callback: (data: IntelliPidSelectionChanged) => void): Promise<number>;
        /**
         * @experimental
         * Register Authentication context changed event. Please use Application.auth... instead
         */
        registerAuthenticationContextChangedEvent(callback: (data: AuthenticationContextChangedEvent) => void): Promise<number>;
        /**
         * @experimental
         * Register clash computation changed event  Filter3D.startClashCompution instead
         */
        registerClashComputationProgressChangedEvent(callback: (data: ClashComputationProgressChangedEvent) => void): Promise<number>;
        /**
         * @experimental
         * Register clash computation changed event  Filter3D.startClashCompution instead
         */
        registerStorageVariableChangedEvent(callback: (data: StorageVariableChangedEvent) => void): Promise<number>;
        /**
         * Use this function in react useEffect functions to automatically provide the unregister function
         * @param fun the event function that should be called
         * @param callback the callback function that this event should excute
         * @returns the unregister event function
         */
        useEffectWrapper<T>(fun: (callback: (data: T) => void) => Promise<number>, callback: (data: T) => void): () => void;
        /**
         * remove any event with that ID
         */
        removeEvent(id: number): Promise<void>;
    }

    export declare enum ExportableOptions {
        Inherit = 0,
        Export = 1,
        Ignore = 2
    }

    export declare class ExportCustomAttributes {
        Changes: Change[];
    }

    export declare class ExportCustomAttributesParameter {
        ExportAllAttributes: boolean;
    }

    export declare class ExportCustomAttributesResult {
        ExportCustomAttributes: ExportCustomAttributes;
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
        Report = "Report",
        WindowLayout = "WindowLayout",
        IntelliPIDLegendPosition = "IntelliPIDLegendPosition"
    }

    export declare enum FileDialogApiReturnType {
        Cancelled = 0,
        Ok = 1,
        Error = 2
    }

    export declare class FileOperations {
        /**
         * Opens a open file dialog and returns the data if the user selected a file
         * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
         * @param defaultName the default name in the dialog
         * @returns
         */
        loadFileDialog(extensions?: string, defaultName?: string): Promise<LoadFileApiReturnType>;
        /**
         * Opens a file save dialog and saves the file to disk
         * @param dataAsBase64 data to save
         * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
         * @param defaultName the default name in the dialog
         * @returns
         */
        saveFileDialog(dataAsBase64: string, extensions: string, defaultName?: string): Promise<SaveFileApiReturnType>;
        /**
         * Load a file from the model folder. Some files are not allowed to be retrieved
         * For example Data/test.txt, otherFolder/file.xlsx, fileinRoot.json
         * Dont prepend a /on the file
         * @param file file to load
         * @returns
         */
        loadFileFromModelFolder(file: string): Promise<GenericLoadFromFileResponse>;
    }

    export declare class FilesTreeContainerObject {
        Container: ApiSerializationContainer;
    }

    export declare class FilesTreeCreateCommentParameter {
        /**
         * Specify Uid to create comment for
         */
        Uid?: string;
        /**
         * how far away from the element should the comment be placed
         */
        Offset?: number;
        /**
         * Overwrite the position of the comment
         */
        CommentPosition?: Vector3D;
        /**
         * Overwrite the position of the comment leader line end position. Normally center of object
         */
        LeaderLineEndPosition?: Vector3D;
    }

    export declare class FilesTreeCreateDrawingParameter {
        ParentTreeItemId: number;
        DrawingTemplateName: string;
        Name: string;
        UseSelectedObjectsOnly: boolean;
        UseColours: boolean;
    }

    export declare class FilesTreeGetStateResponse {
        Name: string;
        Loading: boolean;
        Selected: boolean;
        Locked: boolean;
        Expanded: boolean;
        HasChanges: boolean;
        Exportable: ExportableOptions;
    }

    export declare class FilesTreeImportContainerParameter {
        Container: ApiSerializationContainer;
        ParentId: number;
        TargetId?: number;
    }

    export declare class FilesTreeObject {
        Name: string;
        Id: number;
        Type: FeatureTypes;
    }

    export declare class FilesTreeSetStateParameter extends FileTreeState {
    }

    export declare class FileTreeAnimation extends FileTreeElement {
        /**
         * Set the time of the animation in milliseconds
         */
        AnimationCurrentTime: Set_2<number>;
        constructor(id: number, name: string, type: FeatureTypes);
        /**
         * Generate a new keyframe for the animation using the specified sketching uids
         * @param millisecondsSinceStart at what time in the timeline the keyframe should be inserted
         * @param elementUids sketching uids to use
         * @returns
         */
        generateAnimationKeyframe(millisecondsSinceStart: number, elementUids: string[]): Promise<GetGenerateAnimationKeyframe>;
    }

    export declare class FileTreeAppControl extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeComment extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeCommentSVG extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeDrawing extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
        /**
         * Export a drawing to base64. Specify in which format you want the export to be
         * An export can be multiple exports and this would cause multiple exports
         * @param type Format to use
         * @returns
         */
        exportDrawing(type: DrawingExportType): Promise<GetExportedDrawing>;
    }

    export declare class FileTreeElement {
        private readonly _id;
        private _name;
        private _type;
        /**
         * get the id of the File Tree Element
         */
        get Id(): number;
        /**
         * get the name of the File Tree Element
         */
        get Name(): string;
        /**
         * get the type of the File Tree Element
         */
        get Type(): FeatureTypes;
        /**
         * Get or set the current state of the file tree element
         */
        State: GetSet<FileTreeState>;
        /**
         * @internal
         * @param _id
         * @param _name
         * @param _type
         */
        constructor(_id: number, _name: string, _type: FeatureTypes);
        /**
         * Delete File tree element
         */
        delete(): Promise<void>;
        /**
         * @experimental
         * This functions exposes the internal datastructure. THis is only intended for special usecases
         * No documentation is available/will be made available for these internal structures
         * Data structure changes can occour within new versions that will break old behavior
         * @returns
         */
        getContent(): Promise<GetFilesTreeContainerObject>;
        /**
         * This functions returns a base64 UPVF file of the element and its sub elements.
         * Can be loaded again using FileTreeManager.loadUPVF
         * @returns
         */
        getUPVF(forceExport?: boolean, featureTypeFilters?: FeatureTypes[], fileTreeElement?: FileTreeElement[]): Promise<string>;
        /**
         * Closes the Filetree item if it is open (Both edit and show if applicable). If element doesnt support closing an exception is thrown
         */
        closeItem(): Promise<void>;
        /**
         * Starts editing the Filetree item. If element doesnt support closing an exception is thrown
         * @param noUi should the ui be hide. Not all elements might listen to this option
         */
        editItem(noUi?: boolean): Promise<void>;
        /**
         * Shows the Filetree item. If element doesnt support showing an exception is thrown
         */
        showItem(): Promise<void>;
        /**
         * Views the Filetree item. If element doesnt support viewing an exception is thrown
         */
        viewItem(): Promise<void>;
        /**
         * @internal
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class FileTreeFolder extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FIleTreeIntelliPIDLegendPosition extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeManager {
        get Legacy(): FileTreeManagerLegacy;
        /**
         * Returns the root folder in the UPV filetree
         * @returns
         */
        getRootFolder(): Promise<FileTreeModel>;
        /**
         * Get the children Elements of this File Tree Elements
         */
        getChildren(folder: FileTreeElement): Promise<FileTreeElement[]>;
        /**
         * Get the sibelings Elements of this File Tree Elements
         */
        getSiblings(element: FileTreeElement): Promise<FileTreeElement[]>;
        /**
         * Move a file Tree Element into a diffrent folder
         */
        moveTo(source: FileTreeElement, target: FileTreeFolder): Promise<void>;
        /**
         * This function allows you to import any filetree element.
         * This is not designed for normal usage and requires extensive knowledge.
         * FileTreeElement.getContent can be used to retrieve the data
         * Since the content of filetree element are internal datastructures no support is/will be made available
         * Data structure changes can occour within new versions that will break old behavior
         * @param parameter
         */
        importContainer(parameter: FilesTreeImportContainerParameter): Promise<FileTreeElement>;
        /**
         * Create a new Folder in the Filetree
         * @param parent
         * @param name
         * @returns
         */
        createFolder(parent: FileTreeFolder, name: string): Promise<FileTreeFolder>;
        /**
         * Create a point of interest in the filestree
         * @param parent parent folder
         * @param name
         * @param position
         * @param rotation
         * @param color the color range in this case for RGBA is between 0-255 despite normal colors being between 0-1
         * @param diameter size of the poi in meters
         * @param attributes define attributes on the poi
         * @param links define links on the poi
         * @param type Use Custommesh and customMeshPath to provide a custom mesh other then the sphere
         * @param customMeshPath path to the custom mesh in obj format. Can be a filepath or website path
         * @returns
         */
        createPointOfInterest(parent: FileTreeFolder, name: string, position: Vector3D, rotation: Vector3D, color: Color, diameter: number, attributes?: {
            [key: string]: string;
        }, links?: {
            [key: string]: string;
        }, type?: PointOfInterestType, customMeshPath?: string): Promise<FileTreePointOfInterest>;
        /**
         * Create a Pid or 3D Sketch
         * @param parent parent folder
         * @param name name of the sketch
         * @returns Either PidSketch or Sketch depending on current UPV Context
         */
        createSketch(parent: FileTreeFolder, name: string): Promise<FileTreePIDSketch | FileTreeSketch>;
        /**
         * Create a Markup. Depending on if 3d,Pid,or Document/Drawing is open it will be bound to that file
         * @param name
         * @param parent
         * @returns
         */
        createMarkup(parent: FileTreeFolder, name: string): Promise<FileTreeElement>;
        /**
         * Create a Comment. Depending on if 3d or Pid is open it will be bound to that type. It is also based on the currently selected element
         * @param parent
         * @param name
         * @param uid if nothing provided, the selected element is used
         * @param offset the offset of the comment from the object
         * @param commentPosition Position if the comment. If not provided it will use the offset
         * @param leaderLineEndPosition Position of the leader line end position. If not provided this is the center of the object
         * @returns
         */
        createComment(parent: FileTreeFolder | FileTreeSketch | FileTreePIDSketch | FileTreePointOfInterest, name: string, uid?: string, offset?: number, commentPosition?: Vector3D, leaderLineEndPosition?: Vector3D): Promise<FileTreeComment | FileTreeCommentSVG>;
        /**
         * Can be used to create a drawing in the filestree
         * @param parent
         * @param name
         * @param templateName available templates can be retrieved via the DrawingTemplates on the Model
         * @param useColors
         * @param useSelectedObjectsOnly
         * @returns
         */
        createDrawing(parent: FileTreeFolder, name: string, templateName: string, useColors: boolean, useSelectedObjectsOnly: boolean): Promise<FileTreeDrawing>;
        private resolveElement;
        /**
         * Load UPVF file from a base64 string into UPV
         * @param upfvBase64 base64 upvf content to load
         * @param suppressDefaultAction if only one element is in the UPVF open it by default if this is set to false (default is true)
         * @returns
         */
        loadUPVF(upfvBase64: string, suppressDefaultAction?: boolean): Promise<ApiResponse>;
        /**
         * This functions returns a base64 UPVF file of the tree.
         * Can be loaded again using loadUPVF
         * It is possible to use a diffrent root by using the FileTreeElement.getUPVF funtion of the root you want to export from
         * @returns
         */
        getUPVF(forceExport?: boolean, featureTypeFilters?: FeatureTypes[], fileTreeElement?: FileTreeElement[]): Promise<string>;
    }

    /**
     * @deprecated
     * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
     * */
    export declare class FileTreeManagerLegacy {
        private manager;
        constructor(manager: FileTreeManager);
        /**
         *
         * @deprecated might be removed in future from wrapper
         * @param path
         * @returns
         */
        loadSketch(path: string, viewName?: string): Promise<ApiResponse>;
        /**
         * @deprecated might be removed in future from wrapper
         * @param path
         * @returns
         */
        loadPackageFile(path: string, replace?: boolean): Promise<ApiResponse>;
        /**
         * @deprecated might be removed in future from wrapper
         * @param path
         * @returns
         */
        exportPackageFile(path: string): Promise<ApiResponse>;
        /**
         * @deprecated might be removed in future from wrapper and replaced with a new function
         */
        loadFile(path: string): Promise<ApiResponse>;
    }

    export declare class FileTreeMarkup extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
        /**
         * Only can be excuted if the Markup is open
         * @param mode
         * @param size
         * @param color
         */
        setMarkupTool(mode: MarkupMode, size: number, color: Color): Promise<void>;
        /**
         * Only works for IntelliPid Markups. Markup needs to be closed first for it to work currently
         * @returns Returns all hit elements that are fully drawn over
         */
        getIntelliPidElementsHitByMarkup(): Promise<GetSelectedObjects>;
    }

    export declare class FileTreeModel extends FileTreeFolder {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreePackage extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreePhoto extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreePIDSketch extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
        /**
         * Set the layer color of a PID sketch
         */
        SketchColor: Set_2<Color>;
        /**
         * Select a symbol from the catalog for placment
         * @param symbol
         * @returns
         */
        selectSymbolForPlacement(symbol: CatalogSymbol): Promise<GetObjects>;
        /**
         * Select a primitive for placment
         * @param symbol
         */
        selectPrimitiveForPlacement(symbol: PidSketchToolMode): Promise<string[]>;
        placeSymbol(symbol: CatalogSymbol, name: string, position: Vector2D, rotation: number, attributes?: {
            [key: string]: string;
        }): Promise<GetObjects>;
        /**
         * Retrieve the Symbols in the catalog
         * @returns
         */
        getCatalogSymbols(): Promise<GetCatalogSymbols>;
        deleteSketchItem(uid: string): Promise<ApiResponse>;
    }

    export declare class FileTreePointOfInterest extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeReport extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeScreenshot extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeSketch extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
        /**
         * Places the symbol in the users hand for the user to place
         * @param symbol
         * @returns
         */
        selectSymbolForPlacement(symbol: CatalogSymbol): Promise<GetObjects>;
        /**
         * Places the symbol at a specific position
         * @param symbol
         * @param name
         * @param position
         * @param rotation
         * @param attributes
         * @returns
         */
        placeSymbol(symbol: CatalogSymbol, name: string, position: Vector3D, rotation: Vector3D, attributes?: {
            [key: string]: string;
        }): Promise<GetObjects>;
        /**
         * Places a primitive at a specific position
         * Each primitive has specific parameters it requires
         * @param type
         * @param name
         * @param position
         * @param rotation
         * @param attributes
         * @param parameters
         * @returns
         */
        placePrimitive(type: PrimitiveType, name: string, position: Vector3D, rotation: Vector3D, attributes?: {
            [key: string]: string;
        }, parameters?: {
            [key: string]: string;
        }): Promise<GetObjects>;
        /**
         * Retrieve the Catalog symbols available
         * @returns
         */
        getCatalogSymbols(): Promise<GetCatalogSymbols>;
        /**
         * Delete a sketch item by its uid
         * @param uid
         * @returns
         */
        deleteSketchItem(uid: string): Promise<ApiResponse>;
        /**
         * Exports a Sketch as a Base64 UPVC file
         * @returns
         */
        exportAsUpvcBase64(): Promise<string>;
        /**
         * Exports a Sketch as a Base64 DGN file
         * @returns
         */
        exportAsDgnBase64(): Promise<string>;
    }

    export declare class FileTreeSpraying extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
        /**
         * Exports a Sketch as a Base64 UPVC file
         * @returns
         */
        exportAsUpvcBase64(): Promise<string>;
    }

    export declare class FileTreeState {
        /**
         * When null - keep current value
         */
        Name?: string;
        /**
         * When null - keep current value
         */
        Loading?: boolean;
        /**
         * When null - keep current value
         */
        Selected?: boolean;
        /**
         * When null - keep current value
         */
        Locked?: boolean;
        /**
         * When null - keep current value
         */
        Expanded?: boolean;
        /**
         * When null - keep current value
         */
        HasChanges?: boolean;
        /**
         * When null - keep current value
         */
        Exportable?: ExportableOptions;
    }

    export declare class FileTreeTwoDToThreeD extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FileTreeView extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    export declare class FIleTreeWindowLayout extends FileTreeElement {
        constructor(id: number, name: string, type: FeatureTypes);
    }

    /**
     * Defines a default filteroperation
     */
    declare abstract class FilterOperation {
        protected readonly scene: Scene;
        constructor(scene: Scene);
        /**
         * The Condition used in the filter. By default this contains a match all condition (Uid=*)
         * Note: To create an OR condition where only some sub conditions need to match set the CombineMode to CombineModes.And. The connection between the two should always be '&'
         * Example: Uid=123...&Uid=456...   With CombineModes.Or this is evaluated as only one needs to match when it is CombineModes.And its evaluated as all need to match. The & in this case is only the separator for the conditions
         * Any Attribute can be used inside the Condition
         */
        Condition?: string;
        /**
         * How the {@link Condition} is evaluated
         */
        CombineMode: CombineModes;
        /**
         * Should objects returned by GetObjects include Attributes
         */
        IncludeAttributes: boolean;
        /**
         * if empty all attributes will be retrieved else only the specified. Requires {@link IncludeAttributes}
         */
        Attributes: string[];
        /**
         * Should objects returned by GetObjects include CustomAttribute Information
         */
        IncludeCustomAttributes: boolean;
        /**
         * Should objects returned by GetObjects include ChangeableAttribute Information
         */
        IncludeChangeableAttributes: boolean;
        /**
         * Should objects returned by GetObjects include linked elements Information
         */
        IncludeLinkedElements: boolean;
        abstract getObjects(): Promise<ModelObject[]>;
        protected getBaseObjects(): Promise<ModelObject[]>;
        /**
         * Get all Attributes that are currently selected
         * @returns
         */
        getSelectedObjects(): Promise<ModelObject[]>;
        /**
         * Select all objects hit by this FilterOperation
         * @returns
         */
        select(): Promise<ApiResponse>;
        /**
         * Clear the current selection
         * @returns
         */
        clearSelection(): Promise<ApiResponse>;
        /**
         * Fit all objects hit by this FilterOperation
         * @returns
         */
        fit(): Promise<ApiResponse>;
        /**
         * color all objects hit by this Fileroperation with the specified color
         * @param color hex color
         * @returns
         */
        color(color: string): Promise<ApiResponse>;
        /**
         * Reset the color of all objects hit by this FilterOperation
         * @returns
         */
        clearColor(): Promise<ApiResponse>;
        /**
         * input the {@link Condition} into the search field inside UPV
         * @returns
         */
        searchFallback(): Promise<ApiResponse>;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        abstract createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class FilterOperation3d extends FilterOperation {
        constructor(scene: Scene);
        /**
         * Should objects returned by GetObjects include the boundingbox
         */
        IncludeBoundingBox: boolean;
        /**
         * Should objects returned by GetObjects include Colors
         */
        IncludeColors: boolean;
        /**
         * Should objects returned by GetObjects include SnapInfo
         */
        IncludeSnapInfo: boolean;
        /**
         * Advanced API Clipping
         */
        ApiClippingDescriptor?: ClippingDescriptor;
        /**
         * Advanced API Filtering using the Package Logic
         * used to create more advanced posibilities then {@link Condition} and {@link CombineMode}
         * The Condition property is still evaluated. So its best to use a match all query like Uid=*
         */
        APIPackageFilter?: Package;
        /**
         * All objects based on the attributes specified in the FilterOperation
         */
        getObjects(): Promise<ModelObject[]>;
        /**
         * Highlights all Elements hit by FilterOperation
         * @returns
         */
        highlight(): Promise<ApiResponse>;
        /**
         * Clears any active hightlighting
         * @returns
         */
        clearHighlight(): Promise<ApiResponse>;
        /**
         * Show only objects hit by the FilterOpration
         * @returns
         */
        showOnly(): Promise<ApiResponse>;
        /**
         * Set the Visibility of all objects hit by this Filteropration
         * @param state new state (show/true, hide/false)
         * @returns
         */
        setVisibility(state: boolean): Promise<ApiResponse>;
        /**
         * activate a volumeClip Operation around objects hit by this Filteroperation
         * @param radius
         * @returns
         */
        volumeClip(radius: number): Promise<ApiResponse>;
        getTreeStructure(): Promise<{
            [id: string]: AttributeTreeNode[];
        }>;
        startClashComputation(tolerance?: number, aspectsToIgnore?: string[], aspectsToInclude?: string[], mode?: ClashMode, includeSketches?: boolean, computeCandidatesOnly?: boolean, packageA?: Package, PackageB?: Package): Promise<ClashContext>;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    /**
     * Fileropration Special for IntelliPID
     */
    export declare class FilterOperationPid extends FilterOperation {
        constructor(scene: Scene);
        /**
         * DrawingFilter to use. Can be an array of the Pids or/and UPVCurrent (Currently active PID) or UPVAllOpen (All open Pids. Also in Background).
         * Default value is UPVCurrent
         */
        DrawingFilter?: string[] | "UPVCurrent"[] | "UPVAllOpen"[];
        /**
         * Should objects returned by GetObjects include the RawSVG of the element
         */
        IncludeRawSvg: boolean;
        getObjects(): Promise<ModelObject[]>;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class GenericLoadFromFileResponse {
        Status: GenericLoadFromFileResponseResultType;
        FileContentAsBase64: string;
        ErrorMessage: string;
    }

    export declare enum GenericLoadFromFileResponseResultType {
        Ok = 0,
        FileNotFound = 1,
        FileNotAllowed = 2,
        OtherError = 3,
        Undefined = 4
    }

    export declare class Get<T> {
        private readonly getFunction;
        constructor(getFunction: () => Promise<T>);
        /**
         * Retrieves the value asynchronous
         * @returns
         */
        get(): Promise<T>;
    }

    export declare class GetAnimationStart {
        AnimationStartDayTime: string;
    }

    export declare class GetCameraView {
        CameraView: CameraView;
    }

    export declare class GetCatalogSymbols {
        Symbols: CatalogSymbol[];
    }

    export declare class GetChangeableAttributesResponse {
        ChangeableAttributes: {
            [id: string]: {
                [key: string]: string;
            };
        };
    }

    export declare class GetClashCandidates {
        Pairs: Clash[];
    }

    export declare class GetClashes {
        Pairs: Clash[];
    }

    export declare class GetClashesParameter {
        /**
         * The tolerance. The default value is 0.001
         */
        Tolerance?: number;
        /**
         * Which Aspects should be used to only search through. If Empty all will be used
         */
        AspectsToInclude?: string[];
        /**
         * Which Aspects should be ignored. If Empty none will be ignored
         */
        AspectsToIgnore?: string[];
        /**
         * Should Sketches be included. Default = false
         */
        IncludeSketches?: boolean;
        /**
         * The Mode of the clash Operation
         */
        Mode: ClashMode;
        /**
         * Only compute Canidates but skip Clash detection. Default = false
         */
        ComputeCandidatesOnly?: boolean;
        PackageA?: PackageFilterParameter;
        PackageB?: PackageFilterParameter;
    }

    export declare class GetClippingInfoResult {
        Clipping: ClippingDescriptor;
    }

    export declare class GetCustomAttributesConfiguration {
        GetCustomAttributeConfiguration: Definition[];
    }

    export declare class GetDrawingTemplates {
        Templates: DrawingTemplate[];
    }

    export declare class GetExportedDrawing {
        /**
         * If the template has more than one view and the export type is multi paged (e.g. png) more than one content is return -\> collection
         */
        ContentBase64: string[];
        Name: string;
    }

    export declare class GetExportUpvObjectAsDgnResponse {
        DgnBase64: string;
    }

    export declare class GetExportUpvObjectAsUpvcResponse {
        UpvcBase64: string;
    }

    export declare class GetFilesTreeContainerObject {
        FilesTreeContainerObject: FilesTreeContainerObject;
    }

    export declare class GetFilesTreeContent {
        FilesTreeContent: string;
    }

    export declare class GetFilesTreeContentParameter {
        /**
         * When set will only export included feature types
         */
        FeatureTypeFilter?: FeatureTypes[];
        /**
         * Set the exported root node
         */
        RootNode?: number;
        /**
         *  When set only nodes explicitly contained in the list will be exported <br/>
         *  Make sure to include the predecessor folder of an included node as well
         */
        IncludedNodes?: number[];
        /**
         * When set to true will export all nodes regardless of Exportable property
         */
        ForceExport?: boolean;
    }

    export declare class GetFilesTreeObject {
        FilesTreeObject: FilesTreeObject;
    }

    export declare class GetFilesTreeObjects {
        FilesTreeObjects: FilesTreeObject[];
    }

    export declare class GetGenerateAnimationKeyframe {
        AnimationStatus: AnimationMessageTypes;
    }

    export declare class GetIntellipidDrawings {
        GetIntelliPidDrawings: {
            [id: string]: IntelliPidDrawingInfo;
        };
    }

    export declare class GetLanguage {
        Language: string;
    }

    export declare class GetLifeCycleState {
        LifeCycleState: LifeCycleState;
    }

    export declare class GetLinkedElements {
        Links: {
            [key: string]: ElementLinks;
        };
    }

    export declare class GetModelAttributeValues {
        ModelAttributeValues: {
            [key: string]: string[];
        };
    }

    export declare class GetModelInfo {
        ModelInfo: ModelInfo[];
    }

    export declare class GetObjects {
        Objects: string[];
    }

    export declare class GetObjectsAttributes {
        ObjectsAttributes: {
            [id: string]: {
                [key: string]: string;
            };
        };
    }

    export declare class GetObjectsBoundingBox {
        ObjectsBoundingBox: {
            [id: string]: BoundsInfo;
        };
    }

    export declare class GetObjectsColors {
        ObjectsColors: {
            [id: string]: ObjectColors;
        };
    }

    export declare class GetObjectsSnapInfo {
        ObjectsSnapInfo: {
            [id: string]: SnapInfo;
        };
    }

    export declare class GetPanoramaCentresVisibility {
        Value: boolean;
    }

    export declare class GetPdfInfo {
        GetPdfInfos: PdfInfo[];
    }

    export declare class GetPdfPrinter {
        PrinterId: number;
    }

    export declare class GetPdfPrinterResult {
        Pdf: string;
    }

    export declare class GetPipeMeasurementResponse {
        PipeFound: boolean;
        PipeDiameter: number;
    }

    export declare class GetProjectInfo {
        ProjectInfo: ProjectInfo;
    }

    export declare class GetProjectionSpheres {
        ProjectionSpheres: ProjectionSphere[];
    }

    export declare class GetRawSvgPidObjects {
        RawSvgPidObjects: {
            [id: string]: string[];
        };
    }

    export declare class GetRenderMode {
        Mode: TextureRenderMode;
    }

    export declare class GetRenderQuality {
        Level: QualityLevel;
    }

    export declare class GetSelectedObjects {
        Intellipid: Intellipid;
        SelectedObjects: string[];
    }

    export declare class GetSet<T> {
        private readonly getFunction;
        private readonly setFunction;
        constructor(getFunction: () => Promise<T>, setFunction: (value: T) => Promise<void>);
        /**
         * Retrieves the value asynchronous
         * @returns
         */
        get(): Promise<T>;
        /**
         * Sets the Value asynchronous
         * @param value - The value to set
         * @returns
         */
        set(value: T): Promise<void>;
    }

    export declare class GetStorageVariable {
        Value: string;
    }

    export declare class GetStorageVariablesList {
        Variables: string[];
    }

    export declare class GetTreeConfiguration {
        TreeConfiguration: string[];
    }

    export declare class GetTreeFolderChildren {
        GetTreeFolderChildren: AttributeTreeNodeType[];
    }

    export declare class GetTreeFolderSiblings {
        GetTreeFolderSiblings: AttributeTreeNodeType[];
    }

    export declare class GetTreeNodesOfFolder {
        GetTreeNodesOfFolder: AttributeTreeNodeType[];
    }

    export declare class GetTreeRootNode {
        GetTreeRootNode: AttributeTreeNodeType;
    }

    export declare class GetTreeStructure {
        GetTreeStructure: {
            [id: string]: AttributeTreeNodeType[];
        };
    }

    export declare class GetUiColors {
        UiColors: {
            [id: string]: string;
        };
    }

    export declare class GetUiThemes {
        CurrentId: string;
        UiThemes: {
            [id: string]: string;
        };
    }

    export declare class GetUiVariables {
        UiVariables: {
            [id: string]: string;
        };
    }

    export declare class GetViewerVersion {
        Version: ViewerVersion;
        VersionString: string;
        FileVersion: ViewerFileVersion;
        FileVersionString: string;
    }

    export declare class GetVisibleAspects {
        VisibleAspects: string[];
    }

    export declare class GetWaitForModelLoading {
        LoadStatus: ModelLoadMessageType;
    }

    export declare class GetWfsRemoteContent {
        /**
         * Base64
         */
        WfsRemoteContent: string;
    }

    export declare class GetWindowLayoutParameter {
        LayoutFormat: WindowLayoutFormat;
    }

    export declare class GetWindowLayoutResponse {
        LayoutContent: string;
    }

    export declare class ImportCustomAttributeChangeSetParameter {
        ChangeSet: ChangeSet;
        ShowLoadScreen: boolean;
    }

    export declare class Instance {
        Position: Vector3D;
        Scale: Vector3D;
        Rotation: Vector3D;
    }

    export declare class IntelliClippingDescriptor {
        Elements: string[];
        Offset?: number;
    }

    export declare class Intellipid {
        DisplayName: string;
        Path: string;
    }

    export declare class IntelliPidDrawing {
        private readonly info;
        private readonly model;
        Identifier: string;
        IsOpen: boolean;
        IsFocused: boolean;
        constructor(info: IntelliPidDrawingInfo, model: Model);
        /**
         * Open the IntelliPidDrawing
         * @returns
         */
        openPid(): Promise<ApiResponse>;
        /**
         * Open the IntelliPidDrawing
         * @returns
         */
        closePid(): Promise<ApiResponse>;
    }

    export declare class IntelliPidDrawingInfo {
        Identifier: string;
        IsOpen: boolean;
        IsFocused: boolean;
    }

    export declare class IntelliPidSelectionChanged {
        Intellipid: Intellipid;
        Objects: string[];
    }

    export declare class IntelliPidSelectionChangedEvent {
        IntellipidSelectionChanged: IntelliPidSelectionChanged;
    }

    export declare class Layer2D {
        GroupId: string;
        constructor(GroupId: string);
        /**
         * Draw a Line in PID
         * @param vertices Points of the line
         * @param color The color of the line
         * @param width THe Width of the line
         */
        drawLine(vertices: Vector2D[], color: Color, width: number): Promise<void>;
        /**
         * Place a text inside a pid scene
         * @param text The text to draw
         * @param position The position of the text
         * @param rotation The rotation of the text
         * @param size The size of the text
         * @param color The color of the tex
         */
        placeText(text: string, position: Vector2D, rotation: number, size: number, color: Color): Promise<void>;
        /**
         * Place an arc
         * @param position Position of the arc
         * @param rotation Rotation of the arc
         * @param color Color of the arc
         * @param angle Angle of the arc
         * @param radius Radius of the arc
         */
        placeArc(position: Vector2D, rotation: number, color: Color, angle: number, radius: number): Promise<void>;
        /**
         * Destroy the active drawing
         */
        destroy(): Promise<void>;
        /**
         * @internal
         */
        private createCommand;
    }

    export declare class Layer3D {
        GroupId: string;
        constructor(GroupId: string);
        /**
         * Place an OBJ in the scene
         * @param obj Path to the obj file
         * @param instances The Instances of this object
         * @param suppressLoadingScreen
         */
        placeObj(obj: string, instances: Instance[], suppressLoadingScreen?: boolean): Promise<void>;
        /**
         * Draw a Line in 3D
         * @param vertices Points of the line
         * @param color The color of the line
         * @param width THe Width of the line
         */
        drawLine(vertices: Vector3D[], color: Color, width: number): Promise<void>;
        /**
         * Place a text inside a 3d scene
         * @param text The text to draw
         * @param position The position of the text
         * @param rotation The rotation of the text
         * @param size The size of the text
         * @param color The color of the text
         */
        placeText(text: string, position: Vector3D, rotation: Vector3D, size: number, color: Color): Promise<void>;
        /**
         * Place an arc
         * @param position Position of the arc
         * @param rotation Rotation of the arc
         * @param color Color of the arc
         * @param angle Angle of the arc
         * @param radius Radius of the arc
         */
        placeArc(position: Vector3D, rotation: Vector3D, color: Color, angle: number, radius: number): Promise<void>;
        /**
         * Place a PLY mesh
         * @param color Color of the Mesh
         * @param vertices Every 3 vertecies build a face
         */
        placePly(color: Color, vertices: Vector3D[]): Promise<void>;
        /**
         * Destroy the active drawing
         */
        destroy(): Promise<void>;
        /**
         * @internal
         */
        private createCommand;
    }

    export declare class LifeCycleEvent {
        LifeCycle: string;
        Source: TargetEnum;
    }

    export declare class LifeCycleState {
        WaitingForModelSelection: number;
        ModelFinishedLoading: number;
        CustomAttributesFinishedLoading: number;
    }

    export declare class Link {
        Name: string;
        Url: string;
    }

    export declare class LinkClicked {
        Url: string;
        Template: string;
        AssociatedObject: string;
    }

    /**
     * @internal
     */
    export declare class LinkClickedEvent {
        LinkClicked: LinkClicked;
    }

    export declare class LoadCustomAttributeConfigurationFileParameter {
        ContentBase64: string;
    }

    export declare class LoadCustomAttributeDataFileParameter {
        ContentBase64: string;
    }

    export declare class LoadFileApiReturnType {
        DataBase64: string;
        FileName: string;
        ResultType: FileDialogApiReturnType;
        ErrorMessage: string;
    }

    export declare class LoadFileDialogParameters {
        DefaultName: string;
        Extensions: string;
    }

    export declare class LocalStorage {
        /**
         * Store a key in the local storage, only A-z and 0-9 and _ are supported key names
         * @param key
         * @param value
         * @param persist persist accross restart of UPV. Will be forced false on BBV
         * @returns
         */
        setStorageVariable(key: string, value: string, persist?: boolean): Promise<ApiResponse>;
        /**
         * Retrieve a storage variable
         * @param key
         * @returns
         */
        getStorageVariable(key: string): Promise<string>;
        /**
         *
         * @param key Delete a storage variable
         * @returns
         */
        deleteStorageVariable(key: string): Promise<ApiResponse>;
        /**
         * List all the storage variables known to UPV
         * @returns
         */
        listStorageVariables(): Promise<GetStorageVariablesList>;
        /**
         * Register a callback whenever a variable has changed
         * @param callback
         * @returns
         */
        registerStorageVariableChangedEvent(callback: (data: StorageVariableChangedEvent) => void): Promise<number>;
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

    export declare class Model {
        Id: string;
        get Legacy(): ModelLegacy;
        Scenes: Scene[];
        ModelInfo: Get<ModelInfo[]>;
        ProjectInfo: Get<ProjectInfo>;
        /**
         * Current Porjections inside the model. 360 Panoramas and mapped imanges
         */
        Projections: Get<ProjectionSphereElement[]>;
        /**
         * Currently open projection. the Get result is null if currently not inside a projection.
         */
        CurrentProjection: Get<ProjectionSphereElement>;
        /**
         * Pids inside the model
         */
        Pids: Get<IntelliPidDrawing[]>;
        /**
         * Currently open Pids
         */
        OpenPids: Get<IntelliPidDrawing[]>;
        /**
         * Currently active Pid. Either a element or null if not one is active
         */
        ActivePid: Get<IntelliPidDrawing>;
        /**
         * Pdfs inside the model
         */
        Pdfs: Get<Pdf[]>;
        /**
         * Currently open Pdfs
         */
        OpenPdfs: Get<Pdf[]>;
        /**
         * Currently active Pid. Either a element or null if not one is active
         */
        ActivePdf: Get<Pdf>;
        /**
         * Returns the List of active Drawing templates available for use in the createDrawing function in the Filestree
         */
        DrawingTemplates: Get<DrawingTemplate[]>;
        /**
         * Access Custom Attributes
         */
        get CustomAttributes(): CustomAttributes;
        constructor(Id: string);
        /**
         * Retrieve the unique attribute values in 3D. Pass the attribute keys for which you are intrested in recieving attributes
         * @param attributes at least one is required
         * @returns
         */
        getUniqueAttributeValues3D(attribute: string): Promise<string[]>;
        /**
         * Retrieve the unique attribute values in Pid. Pass the attribute keys for which you are intrested in recieving attributes
         * @param attributes at least one is required
         * @returns
         */
        getUniqueAttributeValuesPid(attribute: string): Promise<string[]>;
        createDiameterMeasurement(position: Vector3D): Promise<GetPipeMeasurementResponse>;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class ModelInfo {
        Uri: string;
        AvailableAttributes: string[];
        AvailableAspects: string[];
    }

    /**
     * @deprecated
     * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
     * */
    export declare class ModelLegacy {
        private model;
        constructor(model: Model);
        /**
         * @deprecated might be removed in future from wrapper
         * @param path
         * @returns
         */
        loadConfigFile(file: string): Promise<ApiResponse>;
    }

    export declare enum ModelLoadMessageType {
        AlreadyLoaded = 0,
        FinishedLoading = 1
    }

    export declare class ModelObject {
        private target;
        constructor(uid: string, target: Scene);
        /**
         * @internal
         */
        initBase(attributes?: Attribute[], elementLinks?: ElementLinks): void;
        /**
         * @internal
         */
        init3D(bounds?: BoundsInfo, objectColors?: ObjectColors, snapInfo?: SnapInfo): void;
        /**
         * @internal
         */
        initPid(rawSvg?: string[]): void;
        /**
         * Get the Attribute value. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
         * @param name attribute name
         * @returns value or null if not found
         */
        getAttribute(name: string): string;
        /**
         * Set a Custom Attribute. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
         * @param name attribute name
         * @param value new attribute value
         * @param user username of the person changing the attribute
         * @returns
         */
        setCustomAttribute(name: string, value: string, user: string): Promise<void>;
        /**
         * Update a Changeable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
         * @param name attribute name
         * @param value new attribute value
         * @param user username of the person changing the attribute
         * @returns
         */
        setAttribute(name: string, value: string): Promise<void>;
        /**
         * Add a changeable Attribute to a sketch element
         * Samples:
         * await element.createChangeableAttribute("Test-Freetest", "Test-Freetest", "Hello World");
         * await element.createChangeableAttribute("Test-Color", "Test-Color", "ff1122", CustomAttributeDataType.Color);
         * await element.createChangeableAttribute("Test-Meter", "Test-Meter", "1", CustomAttributeDataType.NumericWithUnit, ChangeableAttributeUnitType.Length);
         * await element.createChangeableAttribute("Test-Angle", "Test-Angle", "2", CustomAttributeDataType.NumericWithUnit, ChangeableAttributeUnitType.Angle);
         * await element.createChangeableAttribute("Test-Numeric", "Test-Numeric", "2", CustomAttributeDataType.Numeric);
         * await element.createChangeableAttribute("Test-Codelist", "Test-Codelist", "test1", CustomAttributeDataType.CodeList, ChangeableAttributeUnitType.None, false, false, true, ["test1", "test2", "test3", "test4"]);
         * await element.createChangeableAttribute("Test-CodelistColor", "Test-CodelistColor", "blue", CustomAttributeDataType.CodeList, ChangeableAttributeUnitType.None, false, false, true, ["red", "green", "blue", "none"], [red, green, blue]);
         * await element.createChangeableAttribute("Test-Readonly", "Test-Readonly", "readonly", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, true, false, true);
         * await element.createChangeableAttribute("Test-Hidden", "Test-Hidden", "hidden", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, false, true, true);
         * await element.createChangeableAttribute("Test-nondeletable", "Test-nondeletable", "nondeletable", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, false, false, false);
         * @param name Internal Name
         * @param displayName  Visible name
         * @param initialValue The intial value this is set to
         * @param mode What type of Attribute to create. See Samples
         * @param unitType Leave this at none except for NumericWithUnit
         * @param readOnly User cannot edit this field
         * @param hidden User cannot see this field
         * @param deletable User cannot delete this value
         * @param codelist A codelist to use for the mode codelist
         * @param codelistColors optional colors to use for the codelist
         */
        createChangeableAttribute(name: string, displayName: string, initialValue: string, mode?: CustomAttributeDataType, unitType?: ChangeableAttributeUnitType, readOnly?: boolean, hidden?: boolean, deletable?: boolean, codelist?: string[], codelistColors?: Color[]): Promise<void>;
        /**
         * Remove a changeable attribute on a Sketch element
         * @param name
         */
        deleteChangeableAttribute(name: string): Promise<void>;
        /**
         * Uid of the object
         */
        Uid: string;
        /**
         * Attributes of the object
         */
        Attributes?: Attribute[];
        /**
         * Bounds of the object
         */
        Bounds?: BoundsInfo;
        /**
         * Snapinfo of the object
         */
        SnapInfo?: SnapInfo;
        /**
         * the current colors of the object
         */
        ObjectColors?: ObjectColors;
        /**
         * the IntelliPid Raw SVG string
         */
        RawSvg?: string[];
        /**
         * All Linked Elements to this Object. Includes 3D, Pid, Drawing, Documents and Links
         */
        ElementLinks?: ElementLinks;
    }

    export declare class ObjectColors {
        Current: {
            [id: string]: string;
        };
        Default: {
            [id: string]: string;
        };
    }

    export declare class OpenAuthenticationContextParameter {
        OidcConfig: string;
        OidcConfigBrowserBasedViewing: string;
    }

    export declare class OpenAuthenticationContextResult {
        AuthenticationContextId: number;
    }

    export declare class Package {
        /** Only for fit internal Data structure */
        Name: string;
        /** Conditions. Use The Helper functions to create these */
        Conditions: PackageCondition[];
    }

    /** Please use the static Helper functions to create the Conditions */
    export declare class PackageCondition {
        Type: PackageConditionTypes;
        Parameters: (string | number)[];
        SubConditions: PackageCondition[];
        Consolidation: ConsolidationMode;
        /**
         * Create a Attribute Condition
         */
        static createAttributeCondition(mode: ConsolidationMode, key: string, conditionComparision: AttributeConditionComparison, value: string): PackageCondition;
        /**
         * Create a Volume condition that contains a min and max folder
         */
        static createVolumeCondition(mode: ConsolidationMode, volumeMode: VolumeConditionMode, min: Vector3D, max: Vector3D): PackageCondition;
        /**
         * Create a group Conditions that contains multiple Conditions
         */
        static createGroupCondition(mode: ConsolidationMode, packageConditions: PackageCondition[]): PackageCondition;
        /**
         * Create a Intelli Group Condition that supports usage of a radius
         */
        static createIntelliGroupCondition(mode: ConsolidationMode, packageConditions: PackageCondition[], radius: number): PackageCondition;
    }

    export declare enum PackageConditionTypes {
        None = "None",
        IntelliVolume = "IntelliVolume",
        Group = "Group",
        Attribute = "Attribute",
        Volume = "Volume"
    }

    export declare class PackageFilterParameter {
        Package: Package;
    }

    export declare class ParameterBase {
        ClippingFilter?: ClippingDescriptor;
        DrawLine?: DrawLineParameter;
        PlaceText?: PlaceTextParameter;
        PlaceArc?: PlaceArcParameter;
        PlacePly?: PlacePlyParameter;
        PlaceObj?: PlaceObjParameter;
        PlacePoi?: PlacePoiParameter;
        PlacePoIWithComment?: PoIWithCommentParameter;
        ImportCustomAttributeChangeSet?: ImportCustomAttributeChangeSetParameter;
        SetCustomAttributeConfiguration?: SetCustomAttributeConfigParameter;
        ExportCustomAttributes?: ExportCustomAttributesParameter;
        LoadCustomAttributeConfiguration?: LoadCustomAttributeConfigurationFileParameter;
        LoadCustomAttributeDataFile?: LoadCustomAttributeDataFileParameter;
        IntelliPidDrawingFilter?: string[];
        ProcessFile?: ProcessFileParameter;
        FilesTreeImportContainer?: FilesTreeImportContainerParameter;
        PackageFilter?: PackageFilterParameter;
        SetMarkupTool?: SetMarkupToolParameter;
        OpenAuthenticationContext?: OpenAuthenticationContextParameter;
        SetPidSketchTool?: SetPidSketchToolParameter;
        FilesTreeSetState?: FilesTreeSetStateParameter;
        GetFilesTreeContent?: GetFilesTreeContentParameter;
        FilesTreeCreateComment?: FilesTreeCreateCommentParameter;
        StartClashComputation?: GetClashesParameter;
        AddPidToPdfPrinter?: AddPidToPdfPrinterParameter;
        PlacePrimitive?: PlacePrimitiveParameter;
        PlaceSymbol?: PlaceSymbolParameter;
        LoadFileDialog?: LoadFileDialogParameters;
        SaveFileDialog?: SaveFileDialogParameters;
        PdfDocument?: PdfDocumentParameter;
        AddChangeableAttribute?: AddChangeableAttributeParameter;
        DeleteChangeableAttribute?: DeleteChangeableAttributeParameter;
        FilesTreeCreateDrawing?: FilesTreeCreateDrawingParameter;
        GenerateAnimationKeyframe?: AnimationKeyframeParameters;
        SetAnimationStart?: SetAnimationStartParameters;
        GetWindowLayout?: GetWindowLayoutParameter;
        SetWindowLayout?: SetWindowLayoutParameter;
        SetAnimationCurrentTime?: SetAnimationCurrentTimeParameters;
    }

    export declare class Pdf {
        readonly Info: PdfInfo;
        private readonly model;
        IsOpen: boolean;
        IsFocused: boolean;
        constructor(Info: PdfInfo, model: Model);
        /**
         * Open the PdfDrawing
         * @returns
         */
        openPdf(): Promise<ApiResponse>;
        /**
         * Open the PdfDrawing
         * @returns
         */
        closePdf(): Promise<ApiResponse>;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class PdfDocument {
        DisplayName: string;
        Path: string;
        PhysicalFileName: string;
        PdfType: PdfTypes;
    }

    export declare class PdfDocumentParameter {
        Path: string;
        PhysicalFileName: string;
        DisplayName: string;
        PdfType: PdfTypes;
    }

    export declare class PdfInfo {
        Document: PdfDocument;
        IsOpen: boolean;
        IsFocused: boolean;
    }

    export declare enum PdfTypes {
        All = 0,
        Document = 1,
        Drawing = 2
    }

    export declare class PidLink {
        IntelliPid: IntelliPidDrawingInfo;
        PidUids: string[];
    }

    export declare enum PidSketchToolMode {
        None = 0,
        Routing = 4,
        Rectangle = 5,
        Circle = 6,
        Valve = 7,
        Text = 10,
        Cloud = 13,
        FreeHand = 15,
        PolyLine = 16,
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

    export declare class PlaceArcParameter {
        DrawingId: string;
        Position: Vector3D;
        EulerRotation: Vector3D;
        Color: Color;
        Angle: number;
        Radius: number;
    }

    export declare class PlaceObjParameter {
        DrawingId: string;
        Instances: Instance[];
        ObjLocalPath: string;
        SuppressLoadingScreen: boolean;
    }

    export declare class PlacePlyParameter {
        DrawingId: string;
        Vertices: Vector3D[];
        Color: Color;
    }

    export declare class PlacePoiParameter {
        Name: string;
        Position: Vector3D;
        Rotation: Vector3D;
        Links: Link[];
        Attributes: AttributePoi[];
        FilePath: string;
        Color: Color;
        Diameter: number;
        Type: PointOfInterestType;
        ParentId: number;
    }

    export declare class PlacePrimitiveParameter {
        Type: PrimitiveType;
        Name: string;
        Position: Vector3D;
        Rotation: Vector3D;
        Attributes: AttributeKeyValue[];
        Parameters: AttributeKeyValue[];
    }

    export declare class PlaceSymbolParameter {
        Path: string;
        Variant: string;
        Name: string;
        Position: Vector3D;
        Rotation: Vector3D;
        Attributes: AttributeKeyValue[];
    }

    export declare class PlaceTextParameter {
        DrawingId: string;
        Position: Vector3D;
        EulerRotation: Vector3D;
        Text: string;
        Color: Color;
        Size: number;
        TestMode: boolean;
    }

    export declare class PointerClicked {
        Button: string;
        X: number;
        Y: number;
        ModelPosition?: Vector3D;
        IntelliPidPosition?: Vector2D;
        IntelliPid?: Intellipid;
    }

    /**
     * @internal
     */
    export declare class PointerClickedEvent {
        PointerClicked: PointerClicked;
    }

    export declare enum PointOfInterestType {
        Sphere = 0,
        CustomMesh = 1
    }

    export declare class PoIWithCommentParameter extends PlacePoiParameter {
        Text: string;
        Offset: number;
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

    export declare class Printer {
        private printerId;
        private constructor();
        static create(): Promise<Printer>;
        delete(): Promise<ApiResponse>;
        getPdf(): Promise<string>;
        addIntellipidPage(drawing: IntelliPidDrawing, printMode: ColorMode): Promise<ApiResponse>;
    }

    export declare class ProcessFileParameter {
        ContentBase64: string;
        SuppressDefaultAction: boolean;
    }

    export declare class ProjectInfo {
        ConversionDateUtc: string;
        ExpirationDateUtc: string;
        MinimumSupportedMajorVersion: number;
        MaximumSupportedMajorVersion: number;
    }

    export declare class ProjectionSphere {
        Guid: string;
        Name: string;
        Position: Vector3D;
        Rotation: Vector3D;
        Type: ProjectionSphereType;
    }

    export declare class ProjectionSphereElement {
        readonly projectionSphere: ProjectionSphere;
        private readonly model;
        constructor(projectionSphere: ProjectionSphere, model: Model);
        /**
         * Enter the Projection
         * @param opacity optional (default=-1), is set overwrite the opacity value with the new value. If -1 is provided the last value will be used. Value between 0 (transparent) to 100 (opaque)
         * @param rotation optional(default=-1), enter a rotation to view the projection from. If -1 is used for all axis UPV decides
         * @param noUi optional (default=false), if true no UI will be visible
         * @returns
         */
        enterProjectionSphere(opacity?: number, rotation?: Vector3D, noUi?: boolean): Promise<ApiResponse>;
        /**
         * Leave the current Projection
         * @returns
         */
        leaveProjectionSphere(): Promise<ApiResponse>;
    }

    export declare enum ProjectionSphereType {
        Picture = 0,
        Panorama = 1
    }

    export declare enum QualityLevel {
        Low = 0,
        Medium = 1,
        High = 2
    }

    export declare class Quaternion {
        X: number;
        Y: number;
        Z: number;
        W: number;
        constructor(X: number, Y: number, Z: number, W: number);
        static fromEuler(value: Vector3D): Quaternion;
    }

    export declare class SaveFileApiReturnType {
        FileName: string;
        ResultType: FileDialogApiReturnType;
        ErrorMessage: string;
    }

    export declare class SaveFileDialogParameters {
        Extensions: string;
        DefaultName: string;
        DataBase64: string;
    }

    /**
     * Basesclass of all Scenes
     */
    export declare abstract class Scene {
        Id: string;
        constructor(Id: string);
        /**
         * Describes what type a scene is
         */
        SceneType: SceneType;
        /**
         * Load a colorfile via a file
         * @param file path to excel colorfile
         * @returns ApiResponse can be ignored and will likely change
         */
        loadColorFile(file: string): Promise<ApiResponse>;
        /**
         * Load a linkfile via a file
         * @param file path to excel linkfile
         * @returns ApiResponse can be ignored and will likely change
         */
        loadLinkFile(file: string): Promise<ApiResponse>;
        /**
         * Clears all Links
         * @returns ApiResponse can be ignored and will likely change
         */
        clearLinks(): Promise<ApiResponse>;
        /**
         * Takes a screenshot and returns the base64. By default saves as png
         * @param width Width of the output picture
         * @param height Height of the output picture
         * @param fieldOfView Field of View (default 90)
         * @param hideUi Draw UI in picture (default false)
         * @param enableAntiAliasing Use AntiAliasing (default true)
         * @param enableTransparentBackground Draws the brackground transparent (only Shows the model, only works in png) (default false)
         * @param modelInBestQuality Take the screenshot of the model in the best quality (default false)
         * @param format jpg or png (default png)
         * @returns
         */
        takeScreenshot(width: number, height: number, fieldOfView?: number, hideUi?: boolean, enableAntiAliasing?: boolean, enableTransparentBackground?: boolean, modelInBestQuality?: boolean, format?: string): Promise<TakeScreenshot>;
        /**
         * @internal
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    /**
     * 3D Scene
     */
    export declare class Scene3d extends Scene {
        constructor(id: string);
        /**
         * The UI Cliping descriptor currently active
         */
        UiClippingDescriptor: GetSet<ClippingDescriptor>;
        /**
         * The default filter available
         * More filters can be created using {@link getNewFilter}
         */
        DefaultFilter: FilterOperation3d;
        /**
         * The Camera object for this scene
         */
        Camera: Camera;
        /**
         * The current Tree Configuration of this scene
         * This might move
         */
        TreeConfiguration: GetSet<string[]>;
        /**
         * Defines what aspects are currently visible
         */
        VisibleAspects: GetSet<string[]>;
        /**
         * Create a new Filteropration
         * @returns FilterOperation3d
         */
        getNewFilter(): FilterOperation3d;
        private intelliClip;
        private volumeClipByCoordinates;
    }

    /**
     * 2D Scene
     */
    export declare class ScenePid extends Scene {
        constructor(id: string);
        /**
         * the default filter that can be used. New Filters can be created using {@link getNewFilter}
         */
        DefaultFilter: FilterOperationPid;
        /**
         * Create a new Filteropration
         * @returns FilterOperationPid
         */
        getNewFilter(): FilterOperationPid;
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

    export declare class SelectionChanged {
        Objects: string[];
    }

    /**
     * @internal
     */
    export declare class SelectionChangedEvent {
        SelectionChanged: SelectionChanged;
    }

    declare class Set_2<T> {
        private readonly setFunction;
        constructor(setFunction: (value: T) => Promise<void>);
        /**
         * Sets the Value asynchronous
         * @param value - The value to set
         * @returns
         */
        set(value: T): Promise<void>;
    }
    export { Set_2 as Set }

    export declare class SetAnimationCurrentTimeParameters {
        CurrentTimeMilliseconds: number;
    }

    export declare class SetAnimationStartParameters {
        /**
         * Example usages: "2025-08-05T14:30:00", "2025-08-05 14:30:00"
         * see  DateTime.TryParse examples for more.
         */
        Date: string;
    }

    export declare class SetCustomAttributeConfigParameter {
        GeneralDefinitions: Definition[];
        UpdateMode: UpdateModes;
    }

    export declare class SetMarkupToolParameter {
        Mode: MarkupMode;
        Size: number;
        MarkupColor: Color;
    }

    export declare class SetPidSketchToolParameter {
        Mode: PidSketchToolMode;
        SketchColor?: Color;
    }

    export declare class Settings {
        /**
         * Return the current Ui Colors
         */
        UiColors: Get<{
            [key: string]: string;
        }>;
        /**
         * Return the current Ui Variables
         * This includes colors as well as non color attributes(roundness etc)
         */
        UiVariables: Get<{
            [key: string]: string;
        }>;
        /**
         * Set or get the Ui theme via the uid of the theme
         */
        CurrentUiTheme: GetSet<string>;
        /**
         * Returns the key and description for the available themes
         */
        AvailableUiThemes: Get<{
            id: string;
            description: string;
        }[]>;
        /**
         * The current language of UPV
         */
        Language: GetSet<string>;
        /**
         * Set or get the current Rendermode. Normal/Hightmap or no textures
         */
        TextureMode: GetSet<TextureRenderMode>;
        /**
         * Set or get the current quality level used for rendering in UPV
         */
        RenderQuality: GetSet<QualityLevel>;
        /**
         * Set or get the current panorama centres visibility
         */
        PanoramaCentresVisibility: GetSet<boolean>;
        WindowLayoutXML: GetSet<string>;
        WindowLayoutJson: GetSet<string>;
        constructor();
        private getAvailableUiThemes;
        /**
         * @internal
         * @param apiCommands
         * @returns
         */
        createCommand(apiCommands: ApiCommands): CaxApiCommand;
    }

    export declare class SetWindowLayoutParameter {
        LayoutFormat: WindowLayoutFormat;
        LayoutContent: string;
    }

    export declare class SnapCircle {
        Center: Vector3D;
        Radius: number;
        Normal: Vector3D;
    }

    export declare class SnapInfo {
        Points: Vector3D[];
        Edges: Vector3D[][];
        Circles: SnapCircle[];
    }

    export declare class StorageVariableChangedEvent {
        Key: string;
    }

    export declare class TakeScreenshot {
        /** base64 encoded string */
        ImageData: string;
    }

    export declare class TakeScreenshotResult {
        TakeScreenshot: TakeScreenshot;
    }

    /**
     * @deprecated
     * Old UPV Target codes
     */
    export declare enum TargetEnum {
        Undefined = "0",
        ThreeD = "1",
        Intelli = "10"
    }

    export declare enum TextureRenderMode {
        Normal = 0,
        HeightMap = 1,
        NoTexture = 2
    }

    /**
     * Defines the Material UI Theme
     */
    export declare class Theme {
        /**
         * Provides \@mui/material/styles/ThemeOptions for use in AppControls. To not add Material UI as a requirement any type is returned here
         * It is safe to cast this to ThemeOptions in your code or directly provide it to createTheme function
         */
        static getTheme(): Promise<any>;
    }

    export declare enum UpdateModes {
        Append = 0,
        Full = 1
    }

    export declare class UrlLink {
        Name: string;
        Url: string;
        ColorHex: string;
    }

    export declare class Vector2D {
        X: number;
        Y: number;
        constructor(X: number, Y: number);
    }

    export declare class Vector3D {
        X: number;
        Y: number;
        Z: number;
        constructor(X: number, Y: number, Z: number);
    }

    export declare class Vector4D {
        X: number;
        Y: number;
        Z: number;
        W: number;
        constructor(X: number, Y: number, Z: number, W: number);
    }

    export declare class ViewerFileVersion {
        Major: number;
        Minor: number;
        Build: number;
        Private: number;
    }

    export declare class ViewerVersion {
        Major: number;
        Minor: number;
        Hotfix: number;
    }

    export declare class VolumeClippingDescriptor {
        Bounds: Bounds;
    }

    export declare enum VolumeConditionMode {
        Includes = "Includes",
        Overlaps = "Overlaps",
        NotIncludes = "Not Includes",
        NotOverlaps = "Not Overlaps"
    }

    export declare enum WindowLayoutFormat {
        Xml = 1,
        Json = 2
    }

    export { }
