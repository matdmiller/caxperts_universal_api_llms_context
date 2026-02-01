import { Intellipid, Vector2D, Vector3D } from "../Util/BaseDataTypes";
import { TargetEnum } from "../Util/Enums";
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
//# sourceMappingURL=Events.d.ts.map