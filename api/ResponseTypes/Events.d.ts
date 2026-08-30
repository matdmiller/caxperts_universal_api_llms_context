import { FilesTreeObject, Intellipid, Quaternion, Vector2D, Vector3D } from "../Util/BaseDataTypes";
import { FilesTreeObjectAddedSource, TargetEnum } from "../Util/Enums";
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
    StorageVariableChanged = "StorageVariableChanged",
    ApplicationClosing = "ApplicationClosing",
    FilesTreeObjectMoved = "FilesTreeObjectMoved",
    FilesTreeObjectNameChanged = "FilesTreeObjectNameChanged",
    FilesTreeObjectHasChangesChanged = "FilesTreeObjectHasChangesChanged",
    FilesTreeObjectAdded = "FilesTreeObjectAdded",
    FilesTreeObjectRemoved = "FilesTreeObjectRemoved"
}
/**
 * @internal
 */
export declare class PointerClickedEvent {
    PointerClicked: PointerClicked;
}
/**
 * @internal
 */
export declare class SelectionChangedEvent {
    SelectionChanged: SelectionChanged;
}
/**
 * @internal
 */
export declare class LinkClickedEvent {
    LinkClicked: LinkClicked;
}
/**
 * @internal
 */
export declare class CustomAttributeValueChangedEvent {
    CustomAttributeValueChanged: CustomAttributeValueChanged;
}
/**
 * @internal
 */
export declare class AnimationTimestampChangedEvent {
    AnimationTimestampChanged: AnimationTimestampChangedObject;
}
export declare class CustomAttributeValueChanged {
}
export declare class ClashComputationProgressChangedEvent {
    /**
     * Between 0 and 1
     */
    Progress: number;
    CurrentClashesFound: number;
    CurrentClashesToCandidatesRatio: number;
}
export declare class PointerClicked {
    Button: string;
    X: number;
    Y: number;
    ModelPosition?: Vector3D;
    IntelliPidPosition?: Vector2D;
    IntelliPid?: Intellipid;
    /**
     * UID of the hit object; undefined on miss.
     */
    ObjectId?: string;
    /**
     * Surface normal orientation as a unit quaternion in engineering/model space
     * whose forward (+Z) axis points along the surface normal; recover the direction
     * with `quaternion * (0,0,1)`. Undefined on miss or edge/point hits.
     */
    SurfaceNormal?: Quaternion;
    /**
     * Distance from camera to hit point; undefined on miss.
     */
    Distance?: number;
}
export declare class SelectionChanged {
    Objects: string[];
}
export declare class LifeCycleEvent {
    LifeCycle: string;
    Source: TargetEnum;
}
export declare class LinkClicked {
    Url: string;
    Template: string;
    AssociatedObject: string;
}
export declare class AnimationTimestampChangedObject {
    Timestamp: AnimationTimestamp;
}
export declare class AnimationTimestamp {
    Start: string;
    End: string;
    Current: string;
    IsPlaying: boolean;
}
export declare class IntelliPidSelectionChangedEvent {
    IntellipidSelectionChanged: IntelliPidSelectionChanged;
}
export declare class IntelliPidSelectionChanged {
    Intellipid: Intellipid;
    Objects: string[];
}
export declare class AuthenticationContextChangedEvent {
    AuthenticationContextId: number;
    AccessToken: string;
    IdentityToken: string;
    ExpiresIn: number;
    ErrorMessage: string;
}
export declare class StorageVariableChangedEvent {
    Key: string;
}
/**
 * @internal
 * Wire payload of the FilesTreeObjectMoved event. The args object is serialized directly, so this is
 * the whole `ResultData` (there is no named envelope around it).
 */
export declare class FilesTreeObjectMovedResponse {
    Object: FilesTreeObject;
    /**
     * null when the object had no parent before the move
     */
    OldParent: FilesTreeObject;
    /**
     * null when the object has no parent after the move
     */
    NewParent: FilesTreeObject;
    NewIndex: number;
}
/**
 * @internal
 * Wire payload of the FilesTreeObjectNameChanged event.
 */
export declare class FilesTreeObjectNameChangedResponse {
    Object: FilesTreeObject;
    NewName: string;
}
/**
 * @internal
 * Wire payload of the FilesTreeObjectHasChangesChanged event.
 */
export declare class FilesTreeObjectHasChangesChangedResponse {
    Object: FilesTreeObject;
    NewHasChanges: boolean;
}
/**
 * @internal
 * Wire payload of the FilesTreeObjectAdded event.
 */
export declare class FilesTreeObjectAddedResponse {
    Object: FilesTreeObject;
    /**
     * null when the object was added at root level
     */
    Parent: FilesTreeObject;
    Source: FilesTreeObjectAddedSource;
}
/**
 * @internal
 * Wire payload of the FilesTreeObjectRemoved event.
 */
export declare class FilesTreeObjectRemovedResponse {
    Object: FilesTreeObject;
    /**
     * null when the object had no parent
     */
    Parent: FilesTreeObject;
}
/**
 * @internal
 * Wire payload sent to a registered app when the viewer (or the hosting app window) is about to close.
 * Consumers receive an {@link ApplicationClosingEvent} (which wraps this and exposes `respondToClosing`)
 * via Events.registerApplicationClosingEvent rather than this raw type.
 */
export declare class WindowClosingEvent {
    /**
     * Correlation token that must be echoed back when answering the close negotiation.
     */
    NegotiationId: string;
    /**
     * Optional human readable reason describing why the close was triggered.
     */
    Reason: string;
}
//# sourceMappingURL=Events.d.ts.map