"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationContext = exports.AuthenticationManager = void 0;
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const Application_1 = require("../Application");
class AuthenticationManager {
    async openAuthenticationContext(oidcConfig, OidcConfigBrowserBasedViewing) {
        const command = this.createCommand(Util_1.ApiCommands.OpenAuthenticationContext);
        command.additionalParameters = {
            OpenAuthenticationContext: {
                OidcConfig: oidcConfig,
                OidcConfigBrowserBasedViewing: OidcConfigBrowserBasedViewing
            }
        };
        return new AuthenticationContext((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.AuthenticationContextId);
    }
    /**
     * @internal
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        return command;
    }
}
exports.AuthenticationManager = AuthenticationManager;
class AuthenticationContext {
    /**
     * @internal
     * @param _id
     */
    constructor(_id) {
        this._id = _id;
        this.ids = [];
    }
    /**
     * Retrieve new access and identity tokens before the old ones expire via a callback
     * @param callback
     */
    async registerContextChangedEvent(callback) {
        const id = await Application_1.Application.getInstance().Events.registerAuthenticationContextChangedEvent((event) => {
            if (event.AuthenticationContextId == this._id) {
                callback(event);
            }
        });
        this.ids.push(id);
    }
    /**
     * Will try to perform a logout against the IDP. Needs to be called before closeAuthenticationContext
     * @returns
     */
    async startLogoutProcess() {
        const command = this.createCommand(Util_1.ApiCommands.StartLogoutAuthenticationContext);
        command.commandParameters.push(this._id.toString());
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    /**
     * Closes the authentication loop on UPV side for this Context
     * @returns
     */
    async closeAuthenticationContext() {
        for (const id of this.ids) {
            await Application_1.Application.getInstance().Events.removeEvent(id);
        }
        const command = this.createCommand(Util_1.ApiCommands.CloseAuthenticationContext);
        command.commandParameters.push(this._id.toString());
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        return command;
    }
}
exports.AuthenticationContext = AuthenticationContext;
