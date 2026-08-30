import { CustomAttributeDataType, ExportableOptions, FeatureTypes, PdfTypes, ProjectionSphereType, AnimationTransitionType } from "./Enums";
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
export declare class CameraView {
    Position: Vector3D;
    Rotation: Vector3D;
    constructor(Position: Vector3D, Rotation: Vector3D);
}
/**
 * Start and end control points used to describe an animation transition curve
 */
export declare class AnimationTransitionOptions {
    Start: Vector2D;
    End: Vector2D;
}
/**
 * Describes how the animation interpolates from one state to the next
 */
export declare class AnimationTransition {
    /**
     * The interpolation type of the transition
     */
    Type: AnimationTransitionType;
    /**
     * The control points of the transition
     */
    Options: AnimationTransitionOptions;
}
/**
 * Raw data of a single animation state as returned by the viewer
 */
export declare class AnimationStateData {
    /**
     * The position of the state on the timeline in milliseconds since the start
     */
    MillisecondsSinceStart: number;
    /**
     * The element uid the state belongs to
     */
    Uid: string;
    /**
     * The attribute key the state animates
     */
    Attribute: string;
    /**
     * The value of the state. Can be a string, a stringified number or a hex color code
     */
    Value: string;
}
/**
 * Playback information about an animation timeline
 */
export declare class AnimationInfo {
    /**
     * The start of the timeline in milliseconds
     */
    StartMilliseconds: number;
    /**
     * The end of the timeline in milliseconds
     */
    EndMilliseconds: number;
    /**
     * The current playback position in milliseconds
     */
    CurrentTimeMilliseconds: number;
    /**
     * Whether the animation is currently playing
     */
    IsPlaying: boolean;
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
export declare class ObjectColors {
    Current: {
        [id: string]: string;
    };
    Default: {
        [id: string]: string;
    };
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
export declare class ClippingPlane {
    Near: number;
    Far: number;
}
export declare class Instance {
    Position: Vector3D;
    Scale: Vector3D;
    Rotation: Vector3D;
}
export declare class ModelInfo {
    URI: string;
    AvailableAttributes: string[];
    AvailablePidAttributes: string[];
    AvailableAspects: string[];
}
export declare class ProjectInfo {
    ConversionDateUtc: string;
    ExpirationDateUtc: string;
    MinimumSupportedMajorVersion: number;
    MaximumSupportedMajorVersion: number;
}
export declare class SnapInfo {
    Points: Vector3D[];
    Edges: Vector3D[][];
    Circles: SnapCircle[];
}
export declare class SnapCircle {
    Center: Vector3D;
    Radius: number;
    Normal: Vector3D;
}
export declare class TakeScreenshot {
    /** base64 encoded string */
    ImageData: string;
}
export declare class FilesTreeObject {
    Name: string;
    Id: number;
    Type: FeatureTypes;
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
export declare class ExportCustomAttributes {
    Changes: Change[];
}
export declare class Change extends ChangeSetLine {
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
export declare class CustomAttributeSourceDefinition {
    Id: number;
    SourceAttribute: string;
    Filter: string;
    DefaultValue: string;
}
export declare class IntelliPidDrawingInfo {
    Identifier: string;
    IsOpen: boolean;
    IsFocused: boolean;
}
export declare class PdfInfo {
    Document: PdfDocument;
    IsOpen: boolean;
    IsFocused: boolean;
}
export declare class AttributeTreeNodeType {
    Id: string;
    Name: string;
    Type: string;
}
export declare class Quaternion {
    X: number;
    Y: number;
    Z: number;
    W: number;
    constructor(X: number, Y: number, Z: number, W: number);
    static fromEuler(value: Vector3D): Quaternion;
}
export declare class ProjectionSphere {
    Guid: string;
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Type: ProjectionSphereType;
}
export declare class CatalogSymbol {
    Path: string;
    Icon: string;
    /** 3D only */
    Variant: string;
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
    /**
     * Ignored when calling .set
     */
    HasChangesIncludingChildren?: boolean;
    /**
     * Index of the element within its parent; 0 when there is no parent.
     * Ignored when calling .set
     */
    Index?: number;
}
export declare class ElementLinks {
    ThreeDUids: string[];
    DocumentLinks: PdfDocument[];
    DrawingLinks: PdfDocument[];
    UrlLinks: UrlLink[];
    PidLinks: PidLink[];
}
export declare class UrlLink {
    Name: string;
    Url: string;
    ColorHex: string;
}
export declare class PidLink {
    IntelliPid: IntelliPidDrawingInfo;
    PidUids: string[];
}
export declare class Intellipid {
    DisplayName: string;
    Path: string;
}
export declare class PdfDocument {
    DisplayName: string;
    Path: string;
    PhysicalFileName: string;
    PdfType: PdfTypes;
}
export declare class ViewerVersion {
    Major: number;
    Minor: number;
    Hotfix: number;
}
export declare class ViewerFileVersion {
    Major: number;
    Minor: number;
    Build: number;
    Private: number;
}
export declare class DrawingTemplate {
    Name: string;
}
export declare class LayerSketchIdsPair {
    /**
     * Name of the layer to create
     */
    Name: string;
    /**
     * Should it be enabled in the PFD by default
     */
    Visible: boolean;
    SketchIds: number[];
}
export declare class LayerDisplayStyle {
    /**
     * Base64 String of the color file
     */
    ColorFileBase64: string;
    /**
     * Name of the layer to create
     */
    LayerName: string;
    /**
     * if disabled it will not use the Layername but create layers based on the layer information in the colorfile
     */
    GroupNameAsLayerName: boolean;
    /**
     * Should it be enabled in the PFD by default
     */
    Visible: boolean;
}
//# sourceMappingURL=BaseDataTypes.d.ts.map