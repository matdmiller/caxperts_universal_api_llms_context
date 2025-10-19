import { ApiSerializationContainer, AttributeTreeNodeType, BoundsInfo, CameraView, ClippingDescriptor, Definition, ExportCustomAttributes, FilesTreeObject, CatalogSymbol, IntelliPidDrawingInfo, ModelInfo, ObjectColors, ProjectInfo, ProjectionSphere, SnapInfo, TakeScreenshot, ExportableOptions, Bounds, Vector3D, FileDialogApiReturnType, GenericLoadFromFileResponseResultType, ElementLinks, Intellipid, PdfInfo, TextureRenderMode, ViewerVersion, ViewerFileVersion, QualityLevel, ModelLoadMessageType, DrawingTemplate, AnimationMessageTypes } from "../Util";
export declare class GetObjects {
    Objects: string[];
}
export declare class GetSelectedObjects {
    Intellipid: Intellipid;
    SelectedObjects: string[];
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
export declare class GetModelInfo {
    ModelInfo: ModelInfo[];
}
export declare class GetClippingInfoResult {
    Clipping: ClippingDescriptor;
}
export declare class GetObjectsSnapInfo {
    ObjectsSnapInfo: {
        [id: string]: SnapInfo;
    };
}
export declare class GetCameraView {
    CameraView: CameraView;
}
export declare class GetProjectInfo {
    ProjectInfo: ProjectInfo;
}
export declare class TakeScreenshotResult {
    TakeScreenshot: TakeScreenshot;
}
export declare class GetFilesTreeObject {
    FilesTreeObject: FilesTreeObject;
}
export declare class GetFilesTreeObjects {
    FilesTreeObjects: FilesTreeObject[];
}
export declare class GetTreeConfiguration {
    TreeConfiguration: string[];
}
export declare class GetVisibleAspects {
    VisibleAspects: string[];
}
export declare class GetLifeCycleState {
    LifeCycleState: LifeCycleState;
}
export declare class LifeCycleState {
    WaitingForModelSelection: number;
    ModelFinishedLoading: number;
    CustomAttributesFinishedLoading: number;
}
export declare class GetCustomAttributesConfiguration {
    GetCustomAttributeConfiguration: Definition[];
}
export declare class GetRawSvgPidObjects {
    RawSvgPidObjects: {
        [id: string]: string[];
    };
}
export declare class ExportCustomAttributesResult {
    ExportCustomAttributes: ExportCustomAttributes;
}
export declare class GetIntellipidDrawings {
    GetIntelliPidDrawings: {
        [id: string]: IntelliPidDrawingInfo;
    };
}
export declare class GetPdfInfo {
    GetPdfInfos: PdfInfo[];
}
export declare class GetTreeRootNode {
    GetTreeRootNode: AttributeTreeNodeType;
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
export declare class GetTreeStructure {
    GetTreeStructure: {
        [id: string]: AttributeTreeNodeType[];
    };
}
export declare class GetProjectionSpheres {
    ProjectionSpheres: ProjectionSphere[];
}
export declare class GetLanguage {
    Language: string;
}
export declare class GetFilesTreeContainerObject {
    FilesTreeContainerObject: FilesTreeContainerObject;
}
export declare class FilesTreeContainerObject {
    Container: ApiSerializationContainer;
}
export declare class GetWfsRemoteContent {
    /**
     * Base64
     */
    WfsRemoteContent: string;
}
export declare class OpenAuthenticationContextResult {
    AuthenticationContextId: number;
}
export declare class GetCatalogSymbols {
    Symbols: CatalogSymbol[];
}
export declare class GetFilesTreeContent {
    FilesTreeContent: string;
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
export declare class GetChangeableAttributesResponse {
    ChangeableAttributes: {
        [id: string]: {
            [key: string]: string;
        };
    };
}
export declare class GetClashes {
    Pairs: Clash[];
}
export declare class GetClashCandidates {
    Pairs: Clash[];
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
export declare class GetPdfPrinter {
    PrinterId: number;
}
export declare class GetPdfPrinterResult {
    Pdf: string;
}
export declare class GetStorageVariable {
    Value: string;
}
export declare class GetStorageVariablesList {
    Variables: string[];
}
export declare class GetUiColors {
    UiColors: {
        [id: string]: string;
    };
}
export declare class GetUiVariables {
    UiVariables: {
        [id: string]: string;
    };
}
export declare class GetUiThemes {
    CurrentId: string;
    UiThemes: {
        [id: string]: string;
    };
}
export declare class LoadFileApiReturnType {
    DataBase64: string;
    FileName: string;
    ResultType: FileDialogApiReturnType;
    ErrorMessage: string;
}
export declare class SaveFileApiReturnType {
    FileName: string;
    ResultType: FileDialogApiReturnType;
    ErrorMessage: string;
}
export declare class GenericLoadFromFileResponse {
    Status: GenericLoadFromFileResponseResultType;
    FileContentAsBase64: string;
    ErrorMessage: string;
}
export declare class GetModelAttributeValues {
    ModelAttributeValues: {
        [key: string]: string[];
    };
}
export declare class GetLinkedElements {
    Links: {
        [key: string]: ElementLinks;
    };
}
export declare class GetPipeMeasurementResponse {
    PipeFound: boolean;
    PipeDiameter: number;
}
export declare class GetExportUpvObjectAsDgnResponse {
    DgnBase64: string;
}
export declare class GetExportUpvObjectAsUpvcResponse {
    UpvcBase64: string;
}
export declare class GetRenderMode {
    Mode: TextureRenderMode;
}
export declare class GetViewerVersion {
    Version: ViewerVersion;
    VersionString: string;
    FileVersion: ViewerFileVersion;
    FileVersionString: string;
}
export declare class GetRenderQuality {
    Level: QualityLevel;
}
export declare class GetPanoramaCentresVisibility {
    Value: boolean;
}
export declare class GetWaitForModelLoading {
    LoadStatus: ModelLoadMessageType;
}
export declare class GetExportedDrawing {
    /**
     * If the template has more than one view and the export type is multi paged (e.g. png) more than one content is return -\> collection
     */
    ContentBase64: string[];
    Name: string;
}
export declare class GetDrawingTemplates {
    Templates: DrawingTemplate[];
}
export declare class GetAnimationStart {
    AnimationStartDayTime: string;
}
export declare class GetGenerateAnimationKeyframe {
    AnimationStatus: AnimationMessageTypes;
}
export declare class GetWindowLayoutResponse {
    LayoutContent: string;
}
//# sourceMappingURL=GetObjects.d.ts.map