"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowClosingEvent = exports.FilesTreeObjectRemovedResponse = exports.FilesTreeObjectAddedResponse = exports.FilesTreeObjectHasChangesChangedResponse = exports.FilesTreeObjectNameChangedResponse = exports.FilesTreeObjectMovedResponse = exports.StorageVariableChangedEvent = exports.AuthenticationContextChangedEvent = exports.IntelliPidSelectionChanged = exports.IntelliPidSelectionChangedEvent = exports.AnimationTimestamp = exports.AnimationTimestampChangedObject = exports.LinkClicked = exports.LifeCycleEvent = exports.SelectionChanged = exports.PointerClicked = exports.ClashComputationProgressChangedEvent = exports.CustomAttributeValueChanged = exports.AnimationTimestampChangedEvent = exports.CustomAttributeValueChangedEvent = exports.LinkClickedEvent = exports.SelectionChangedEvent = exports.PointerClickedEvent = exports.ApiEvents = void 0;
/**
 * @internal
 */
var ApiEvents;
(function (ApiEvents) {
    ApiEvents["SelectionChanged"] = "SelectionChanged";
    ApiEvents["PointerClicked"] = "PointerClicked";
    ApiEvents["LinkClicked"] = "LinkClicked";
    ApiEvents["LifeCycle"] = "LifeCycle";
    ApiEvents["CustomAttributeValueChanged"] = "CustomAttributeValueChanged";
    ApiEvents["AnimationTimestampChanged"] = "AnimationTimestampChanged";
    ApiEvents["IntellipidSelectionChanged"] = "IntellipidSelectionChanged";
    ApiEvents["AuthenticationContextChanged"] = "AuthenticationContextChanged";
    ApiEvents["ClashComputationProgressChanged"] = "ClashComputationProgressChanged";
    ApiEvents["StorageVariableChanged"] = "StorageVariableChanged";
    ApiEvents["ApplicationClosing"] = "ApplicationClosing";
    ApiEvents["FilesTreeObjectMoved"] = "FilesTreeObjectMoved";
    ApiEvents["FilesTreeObjectNameChanged"] = "FilesTreeObjectNameChanged";
    ApiEvents["FilesTreeObjectHasChangesChanged"] = "FilesTreeObjectHasChangesChanged";
    ApiEvents["FilesTreeObjectAdded"] = "FilesTreeObjectAdded";
    ApiEvents["FilesTreeObjectRemoved"] = "FilesTreeObjectRemoved";
})(ApiEvents || (exports.ApiEvents = ApiEvents = {}));
/**
 * @internal
 */
class PointerClickedEvent {
}
exports.PointerClickedEvent = PointerClickedEvent;
/**
 * @internal
 */
class SelectionChangedEvent {
}
exports.SelectionChangedEvent = SelectionChangedEvent;
/**
 * @internal
 */
class LinkClickedEvent {
}
exports.LinkClickedEvent = LinkClickedEvent;
/**
 * @internal
 */
class CustomAttributeValueChangedEvent {
}
exports.CustomAttributeValueChangedEvent = CustomAttributeValueChangedEvent;
/**
 * @internal
 */
class AnimationTimestampChangedEvent {
}
exports.AnimationTimestampChangedEvent = AnimationTimestampChangedEvent;
class CustomAttributeValueChanged {
}
exports.CustomAttributeValueChanged = CustomAttributeValueChanged;
class ClashComputationProgressChangedEvent {
}
exports.ClashComputationProgressChangedEvent = ClashComputationProgressChangedEvent;
class PointerClicked {
}
exports.PointerClicked = PointerClicked;
class SelectionChanged {
}
exports.SelectionChanged = SelectionChanged;
class LifeCycleEvent {
}
exports.LifeCycleEvent = LifeCycleEvent;
class LinkClicked {
}
exports.LinkClicked = LinkClicked;
class AnimationTimestampChangedObject {
}
exports.AnimationTimestampChangedObject = AnimationTimestampChangedObject;
class AnimationTimestamp {
}
exports.AnimationTimestamp = AnimationTimestamp;
class IntelliPidSelectionChangedEvent {
}
exports.IntelliPidSelectionChangedEvent = IntelliPidSelectionChangedEvent;
class IntelliPidSelectionChanged {
}
exports.IntelliPidSelectionChanged = IntelliPidSelectionChanged;
class AuthenticationContextChangedEvent {
}
exports.AuthenticationContextChangedEvent = AuthenticationContextChangedEvent;
class StorageVariableChangedEvent {
}
exports.StorageVariableChangedEvent = StorageVariableChangedEvent;
/**
 * @internal
 * Wire payload of the FilesTreeObjectMoved event. The args object is serialized directly, so this is
 * the whole `ResultData` (there is no named envelope around it).
 */
class FilesTreeObjectMovedResponse {
}
exports.FilesTreeObjectMovedResponse = FilesTreeObjectMovedResponse;
/**
 * @internal
 * Wire payload of the FilesTreeObjectNameChanged event.
 */
class FilesTreeObjectNameChangedResponse {
}
exports.FilesTreeObjectNameChangedResponse = FilesTreeObjectNameChangedResponse;
/**
 * @internal
 * Wire payload of the FilesTreeObjectHasChangesChanged event.
 */
class FilesTreeObjectHasChangesChangedResponse {
}
exports.FilesTreeObjectHasChangesChangedResponse = FilesTreeObjectHasChangesChangedResponse;
/**
 * @internal
 * Wire payload of the FilesTreeObjectAdded event.
 */
class FilesTreeObjectAddedResponse {
}
exports.FilesTreeObjectAddedResponse = FilesTreeObjectAddedResponse;
/**
 * @internal
 * Wire payload of the FilesTreeObjectRemoved event.
 */
class FilesTreeObjectRemovedResponse {
}
exports.FilesTreeObjectRemovedResponse = FilesTreeObjectRemovedResponse;
/**
 * @internal
 * Wire payload sent to a registered app when the viewer (or the hosting app window) is about to close.
 * Consumers receive an {@link ApplicationClosingEvent} (which wraps this and exposes `respondToClosing`)
 * via Events.registerApplicationClosingEvent rather than this raw type.
 */
class WindowClosingEvent {
}
exports.WindowClosingEvent = WindowClosingEvent;
