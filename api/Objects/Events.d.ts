import { AnimationTimestampChangedObject, CustomAttributeValueChanged, LifeCycleEvent, LinkClicked, PointerClicked, SelectionChanged, IntelliPidSelectionChanged, AuthenticationContextChangedEvent, ClashComputationProgressChangedEvent, StorageVariableChangedEvent } from "../ResponseTypes";
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
//# sourceMappingURL=Events.d.ts.map