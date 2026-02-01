"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const ResponseTypes_1 = require("../ResponseTypes");
class Events {
    constructor() {
        this.unloaded = false;
        //store all currently registered event so we can unload them on window close or reload
        this.registeredEvents = [];
        //register both eventhandlers. IN some cases unload might not get triggert. Better save then sorry
        window.addEventListener('beforeunload', this.onUnload.bind(this));
        window.addEventListener('unload', this.onUnload.bind(this));
    }
    onUnload() {
        //Only call this function once
        if (this.unloaded)
            return;
        this.unloaded = true;
        //create a copy of the object to not have issues when RemoveEvent removes the element
        const copy = [...this.registeredEvents];
        copy.forEach(element => {
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
        this.registeredEvents = this.registeredEvents.filter(x => x != id);
        await APIConnector_1.Api.get().removeEventCallback(id);
    }
}
exports.Events = Events;
