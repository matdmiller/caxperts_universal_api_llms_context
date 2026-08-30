"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const ApplicationClosingEvent_1 = require("./ApplicationClosingEvent");
const ResponseTypes_1 = require("../ResponseTypes");
const FileTreeManager_1 = require("../FilesTree/FileTreeManager");
class Events {
    constructor() {
        this.unloaded = false;
        //store all currently registered event so we can unload them on window close or reload
        this.registeredEvents = [];
        //register both eventhandlers. IN some cases unload might not get triggert. Better save then sorry
        window.addEventListener("beforeunload", this.onUnload.bind(this));
        window.addEventListener("unload", this.onUnload.bind(this));
    }
    onUnload() {
        //Only call this function once
        if (this.unloaded)
            return;
        this.unloaded = true;
        //create a copy of the object to not have issues when RemoveEvent removes the element
        const copy = [...this.registeredEvents];
        copy.forEach((element) => {
            this.removeEvent(element);
        });
    }
    /**
     * Register Selection Changed Event
     */
    async registerSelectionChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData.SelectionChanged); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.SelectionChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register Pointer Clicked Event
     */
    async registerPointerClickedEventEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData.PointerClicked); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.PointerClicked, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register Lifecycle Event
     */
    async registerLifeCycleEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        //let callbackWrapper = (event: PointerClickedEvent ) => {callback(event.pointerClicked);}
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.LifeCycle, eventId, callback);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register Link Clicked Event
     */
    async registerLinkClickedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData.LinkClicked); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.LinkClicked, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register CUstom Attribute Changed Event
     */
    async registerCustomAttributeValueChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData.CustomAttributeValueChanged); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.CustomAttributeValueChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register Animation Timestamp Changed Event
     */
    async registerAnimationTimestampChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData.AnimationTimestampChanged); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.AnimationTimestampChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register Selection Changed Event for IntelliPid
     */
    async registerIntellipidSelectionChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData.IntellipidSelectionChanged); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.IntellipidSelectionChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * @experimental
     * Register Authentication context changed event. Please use Application.auth... instead
     */
    async registerAuthenticationContextChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.AuthenticationContextChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * @experimental
     * Register clash computation changed event  Filter3D.startClashCompution instead
     */
    async registerClashComputationProgressChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.ClashComputationProgressChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * @experimental
     * Register clash computation changed event  Filter3D.startClashCompution instead
     */
    async registerStorageVariableChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => { callback(event.ResultData); };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.StorageVariableChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
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
    async registerApplicationClosingEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => {
            callback(new ApplicationClosingEvent_1.ApplicationClosingEvent(event.ResultData.NegotiationId, event.ResultData.Reason));
        };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.ApplicationClosing, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register an event that is raised whenever a filetree element is moved to another parent
     * or to another position within its parent
     */
    async registerFilesTreeObjectMovedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => {
            const data = event.ResultData;
            callback({
                Object: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Object),
                OldParent: (0, FileTreeManager_1.resolveFilesTreeElement)(data.OldParent),
                NewParent: (0, FileTreeManager_1.resolveFilesTreeElement)(data.NewParent),
                NewIndex: data.NewIndex,
            });
        };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.FilesTreeObjectMoved, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register an event that is raised whenever a filetree element is renamed.
     * `Object.Name` is a snapshot taken when the event was raised, so prefer `NewName`
     */
    async registerFilesTreeObjectNameChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => {
            const data = event.ResultData;
            callback({
                Object: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Object),
                NewName: data.NewName,
            });
        };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.FilesTreeObjectNameChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register an event that is raised whenever the pending changes state of a filetree element changes.
     * This only fires on an actual state transition, not on every refresh.
     * `NewHasChanges` refers to that single element and does not include its children
     */
    async registerFilesTreeObjectHasChangesChangedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => {
            const data = event.ResultData;
            callback({
                Object: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Object),
                NewHasChanges: data.NewHasChanges,
            });
        };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.FilesTreeObjectHasChangesChanged, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register an event that is raised whenever a filetree element is added to the tree
     */
    async registerFilesTreeObjectAddedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => {
            const data = event.ResultData;
            callback({
                Object: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Object),
                Parent: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Parent),
                Source: data.Source,
            });
        };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.FilesTreeObjectAdded, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Register an event that is raised whenever a filetree element is removed from the tree.
     * `Parent` is the parent the element was removed from
     */
    async registerFilesTreeObjectRemovedEvent(callback) {
        const eventId = Math.floor(Math.random() * 2147483647);
        const callbackWrapper = (event) => {
            const data = event.ResultData;
            callback({
                Object: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Object),
                Parent: (0, FileTreeManager_1.resolveFilesTreeElement)(data.Parent),
            });
        };
        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.FilesTreeObjectRemoved, eventId, callbackWrapper);
        this.registeredEvents.push(eventId);
        return eventId;
    }
    /**
     * Use this function in react useEffect functions to automatically provide the unregister function
     * @param fun the event function that should be called
     * @param callback the callback function that this event should excute
     * @returns the unregister event function
     */
    useEffectWrapper(fun, callback) {
        const response = fun.bind(this)(callback);
        return () => { response.then((e) => this.removeEvent(e)); };
    }
    /**
     * remove any event with that ID
     */
    async removeEvent(id) {
        //remove event when unregistered
        this.registeredEvents = this.registeredEvents.filter((x) => x != id);
        await APIConnector_1.Api.get().removeEventCallback(id);
    }
}
exports.Events = Events;
