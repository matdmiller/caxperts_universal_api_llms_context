"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
const Application_1 = require("../Application");
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class LocalStorage {
    /**
     * Store a key in the local storage, only A-z and 0-9 and _ are supported key names
     * @param key
     * @param value
     * @param persist persist accross restart of UPV. Will be forced false on BBV
     * @returns
     */
    async setStorageVariable(key, value, persist = false) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetStorageVariable);
        command.commandParameters.push(key);
        command.commandParameters.push(value);
        command.commandParameters.push(persist.toString());
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    /**
     * Retrieve a storage variable
     * @param key
     * @returns
     */
    async getStorageVariable(key) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetStorageVariable);
        command.commandParameters.push(key);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Value;
    }
    /**
     *
     * @param key Delete a storage variable
     * @returns
     */
    async deleteStorageVariable(key) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteStorageVariable);
        command.commandParameters.push(key);
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    /**
     * List all the storage variables known to UPV
     * @returns
     */
    async listStorageVariables() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetStorageVariablesList);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * Register a callback whenever a variable has changed
     * @param callback
     * @returns
     */
    async registerStorageVariableChangedEvent(callback) {
        const id = await Application_1.Application.getInstance().Events.registerStorageVariableChangedEvent((event) => {
            callback(event);
        });
        return id;
    }
}
exports.LocalStorage = LocalStorage;
