import { ApplicationClosingEvent } from "./ApplicationClosingEvent";
import { AnimationTimestampChangedObject, CustomAttributeValueChanged, LifeCycleEvent, LinkClicked, PointerClicked, SelectionChanged, IntelliPidSelectionChanged, AuthenticationContextChangedEvent, ClashComputationProgressChangedEvent, StorageVariableChangedEvent } from "../ResponseTypes";
import { FilesTreeObjectAddedEventArgs, FilesTreeObjectHasChangesChangedEventArgs, FilesTreeObjectMovedEventArgs, FilesTreeObjectNameChangedEventArgs, FilesTreeObjectRemovedEventArgs } from "./FilesTreeEventArgs";
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
     * Register a callback that is invoked when the viewer (or the hosting app window) is about to close.
     * The app should perform any required cleanup (e.g. release locks, autosave) and then answer with
     * `event.respondToClosing(true)` once done. The negotiation token is handled by the
     * {@link ApplicationClosingEvent}, so it does not need to be passed manually.
     *
     * The viewer waits a limited time for the answer; an app that stays silent past that timeout is treated as
     * blocking the close. If your cleanup may exceed that timeout, first call `event.respondToClosing(false)`
     * to signal you are still busy (this suspends the timeout so the window is kept open) and then call
     * `event.respondToClosing(true)` when finished.
     */
    registerApplicationClosingEvent(callback: (event: ApplicationClosingEvent) => void): Promise<number>;
    /**
     * Register an event that is raised whenever a filetree element is moved to another parent
     * or to another position within its parent
     */
    registerFilesTreeObjectMovedEvent(callback: (data: FilesTreeObjectMovedEventArgs) => void): Promise<number>;
    /**
     * Register an event that is raised whenever a filetree element is renamed.
     * `Object.Name` is a snapshot taken when the event was raised, so prefer `NewName`
     */
    registerFilesTreeObjectNameChangedEvent(callback: (data: FilesTreeObjectNameChangedEventArgs) => void): Promise<number>;
    /**
     * Register an event that is raised whenever the pending changes state of a filetree element changes.
     * This only fires on an actual state transition, not on every refresh.
     * `NewHasChanges` refers to that single element and does not include its children
     */
    registerFilesTreeObjectHasChangesChangedEvent(callback: (data: FilesTreeObjectHasChangesChangedEventArgs) => void): Promise<number>;
    /**
     * Register an event that is raised whenever a filetree element is added to the tree
     */
    registerFilesTreeObjectAddedEvent(callback: (data: FilesTreeObjectAddedEventArgs) => void): Promise<number>;
    /**
     * Register an event that is raised whenever a filetree element is removed from the tree.
     * `Parent` is the parent the element was removed from
     */
    registerFilesTreeObjectRemovedEvent(callback: (data: FilesTreeObjectRemovedEventArgs) => void): Promise<number>;
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
//# sourceMappingURL=Events.d.ts.map