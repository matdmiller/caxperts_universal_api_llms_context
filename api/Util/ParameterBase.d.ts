import { AttributeConditionComparison, Bounds, ChangeSet, ClashMode, ClippingMode, Color, ColorMode, ConsolidationMode, Definition, FeatureTypes, FileTreeState, Instance, MarkupMode, PackageConditionTypes, PdfTypes, PidSketchToolMode, PointOfInterestType, PrimitiveType, UpdateModes, Vector3D, VolumeConditionMode } from ".";
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
}
export declare class ClippingDescriptor {
    Mode: ClippingMode;
    VolumeClipping?: VolumeClippingDescriptor;
    IntelliClipping?: IntelliClippingDescriptor;
}
export declare class VolumeClippingDescriptor {
    Bounds: Bounds;
}
export declare class IntelliClippingDescriptor {
    Elements: string[];
    Offset?: number;
}
export declare class DrawLineParameter {
    DrawingId: string;
    Vertices: Vector3D[];
    Width: number;
    Color: Color;
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
export declare class PlaceArcParameter {
    DrawingId: string;
    Position: Vector3D;
    EulerRotation: Vector3D;
    Color: Color;
    Angle: number;
    Radius: number;
}
export declare class PlacePlyParameter {
    DrawingId: string;
    Vertices: Vector3D[];
    Color: Color;
}
export declare class PlaceObjParameter {
    DrawingId: string;
    Instances: Instance[];
    ObjLocalPath: string;
    SuppressLoadingScreen: boolean;
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
export declare class PoIWithCommentParameter extends PlacePoiParameter {
    Text: string;
    Offset: number;
}
export declare class Link {
    Name: string;
    Url: string;
}
export declare class AttributePoi {
    Key: string;
    Value: string;
}
export declare class LoadCustomAttributeConfigurationFileParameter {
    ContentBase64: string;
}
export declare class LoadCustomAttributeDataFileParameter {
    ContentBase64: string;
}
export declare class ImportCustomAttributeChangeSetParameter {
    ChangeSet: ChangeSet;
    ShowLoadScreen: boolean;
}
export declare class SetCustomAttributeConfigParameter {
    GeneralDefinitions: Definition[];
    UpdateMode: UpdateModes;
}
export declare class ExportCustomAttributesParameter {
    ExportAllAttributes: boolean;
}
export declare class ProcessFileParameter {
    ContentBase64: string;
    SuppressDefaultAction: boolean;
}
export declare class FilesTreeImportContainerParameter {
    Container: ApiSerializationContainer;
    ParentId: number;
    TargetId?: number;
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
export declare class PackageFilterParameter {
    Package: Package;
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
export declare class SetMarkupToolParameter {
    Mode: MarkupMode;
    Size: number;
    MarkupColor: Color;
}
export declare class OpenAuthenticationContextParameter {
    OidcConfig: string;
    OidcConfigBrowserBasedViewing: string;
}
export declare class SetPidSketchToolParameter {
    Mode: PidSketchToolMode;
    SketchColor?: Color;
}
export declare class FilesTreeSetStateParameter extends FileTreeState {
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
export declare class FilesTreeCreateCommentParameter {
    /**
     * Specify Uid to create comment for
     */
    Uid?: string;
    /**
     * how far away from the element should the comment be placed
     */
    Offset?: number;
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
export declare class AddPidToPdfPrinterParameter {
    DrawingPath: string;
    PrintMode: ColorMode;
}
export declare class PlaceSymbolParameter {
    Path: string;
    Variant: string;
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Attributes: AttributeKeyValue[];
}
export declare class PlacePrimitiveParameter {
    Type: PrimitiveType;
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Attributes: AttributeKeyValue[];
    Parameters: AttributeKeyValue[];
}
export declare class AttributeKeyValue {
    Key: string;
    Value: string;
}
export declare class SaveFileDialogParameters {
    Extensions: string;
    DefaultName: string;
    DataBase64: string;
}
export declare class LoadFileDialogParameters {
    DefaultName: string;
    Extensions: string;
}
export declare class PdfDocumentParameter {
    Path: string;
    PhysicalFileName: string;
    DisplayName: string;
    PdfType: PdfTypes;
}
//# sourceMappingURL=ParameterBase.d.ts.map