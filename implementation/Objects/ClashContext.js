"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClashContext = void 0;
const Application_1 = require("../Application");
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class ClashContext {
    constructor() {
        this.ids = [];
    }
    async registerContextChangedEvent(callback) {
        const id = await Application_1.Application.getInstance().Events.registerClashComputationProgressChangedEvent((event) => {
            callback(event);
            if (event.Progress == 1) {
                this.ids = this.ids.filter(x => x != id);
                Application_1.Application.getInstance().Events.removeEvent(id);
            }
        });
        this.ids.push(id);
    }
    async getClashCandidates() {
        const command = this.createCommand(Util_1.ApiCommands.GetClashCandidates);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async getClashResults() {
        const command = this.createCommand(Util_1.ApiCommands.GetClashResults);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async cancelClashComputation() {
        for (const id of this.ids) {
            await Application_1.Application.getInstance().Events.removeEvent(id);
        }
        const command = this.createCommand(Util_1.ApiCommands.CancelClashComputation);
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    /**
     * @internal
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        return command;
    }
}
exports.ClashContext = ClashContext;
