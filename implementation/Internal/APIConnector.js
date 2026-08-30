"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.ApiResponseContainer = exports.CoverageTracker = void 0;
const Util_1 = require("../Util");
const APIConnectorVuplex_1 = require("./APIConnectorVuplex");
const APIConnectorBrowser_1 = require("./APIConnectorBrowser");
const CaxApiCommand_1 = require("./CaxApiCommand");
const Logger_1 = require("./Logger");
exports.CoverageTracker = {};
class ApiResponseContainer {
}
exports.ApiResponseContainer = ApiResponseContainer;
/**
 * @internal
 * Dont use the API class unless you know what you are doing. Changes to this class could be undocumented
 */
class Api {
    static get() {
        if (this.instance != null) {
            return this.instance;
        }
        this.instance = new Api();
        this.instance.initialize();
        return this.instance;
    }
    get AppControlsAvailable() {
        var _a;
        return ((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) && this.apiConnector instanceof APIConnectorVuplex_1.ApiConnectorVuplex;
    }
    get BBVAvailable() {
        var _a;
        return ((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) && !(this.apiConnector instanceof APIConnectorVuplex_1.ApiConnectorVuplex);
    }
    get Available() {
        var _a, _b;
        return (_b = (_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) !== null && _b !== void 0 ? _b : false;
    }
    get debug() {
        return this._debug;
    }
    set debug(value) {
        this._debug = value;
        Logger_1.logger.setDebug(value);
    }
    /**
     * Sets / replaces the current connector as some connectors like BBV are not yet available at start because peer
     * connection needs to be established.
     * @param connector to use from now on.
     */
    registerConnector(connector) {
        this.apiConnector = connector;
    }
    handleEvent(json) {
        // todo: remove old property name fallback
        const asResponse = json;
        const requestId = asResponse.RequestId;
        const errorCode = asResponse.ErrorCode;
        if (requestId in this.sendingTimes) {
            const elapsedMs = performance.now() - this.sendingTimes[requestId];
            Logger_1.logger.debug("receiving response", json, {
                requestId,
                elapsedMs,
            });
            delete this.sendingTimes[requestId];
        }
        if (requestId in Api.instance.waiting) {
            if (errorCode != 0) {
                const errorMessage = asResponse.ErrorMessage;
                Api.instance.waitingFailure[requestId](errorMessage);
                delete Api.instance.waiting[requestId];
                delete Api.instance.waitingFailure[requestId];
                delete this.sendingTimes[requestId];
            }
            else {
                Api.instance.waiting[requestId](json);
                delete Api.instance.waiting[requestId];
                delete Api.instance.waitingFailure[requestId];
                delete this.sendingTimes[requestId];
            }
        }
        if (requestId in Api.instance.registeredEvents) {
            Api.instance.registeredEvents[requestId](json);
        }
    }
    initialize() {
        var _a;
        // Check if running in Vuplex environment
        if (typeof window !== "undefined" && window.vuplex) {
            this.apiConnector = new APIConnectorVuplex_1.ApiConnectorVuplex();
        }
        else if (!Api.disableWebsocketApi) {
            // Otherwise use WebSocket connector
            this.apiConnector = new APIConnectorBrowser_1.ApiConnectorBrowser();
        }
        (_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.initialize();
    }
    constructor() {
        this._debug = false;
        this.waiting = {};
        this.waitingFailure = {};
        this.registeredEvents = {};
        this.sendingTimes = {};
    }
    async sendCommandInternal(command) {
        const requestId = Math.floor(Math.random() * 2147483647);
        command.requestId = requestId;
        const promise = new Promise((resolve, error) => {
            var _a;
            this.waiting[requestId] = resolve;
            this.waitingFailure[requestId] = error;
            if ((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) {
                Logger_1.logger.debug("sending command", command, { requestId });
                this.sendingTimes[requestId] = performance.now();
                this.apiConnector.sendCommand(command);
            }
            else {
                Logger_1.logger.error("No backend available");
                error("No backend available");
            }
        });
        const result = await promise;
        return result;
    }
    async sendCommand(command) {
        const result = await this.sendCommandInternal(command);
        return result;
    }
    async sendCommandWithReturnType(command) {
        const result = await this.sendCommandInternal(command);
        return result;
    }
    async addEventCallback(event, eventId, callback) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.AddEventCallback);
        command.commandParameters.push(event.toString());
        command.commandParameters.push(eventId.toString());
        this.registeredEvents[eventId] = callback;
        return this.sendCommand(command);
    }
    async removeEventCallback(eventId) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.RemoveEventCallback);
        command.commandParameters.push(eventId.toString());
        delete this.registeredEvents[eventId];
        return this.sendCommand(command);
    }
}
exports.Api = Api;
Api.instance = undefined;
Api.disableWebsocketApi = false;
