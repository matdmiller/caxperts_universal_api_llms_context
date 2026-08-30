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
    /**
     * Registers a callback function to be called when the clash computation progress changes.
     * @param callback The function to be called when the clash computation progress changes.
     */
    async registerContextChangedEvent(callback) {
        const id = await Application_1.Application.getInstance().Events.registerClashComputationProgressChangedEvent((event) => {
            callback(event);
            if (event.Progress == 1) {
                this.ids = this.ids.filter((x) => x != id);
                Application_1.Application.getInstance().Events.removeEvent(id);
            }
        });
        this.ids.push(id);
    }
    /**
     *
     * @returns returns list of all Clash candidates after a clash detection was finished
     */
    async getClashCandidates() {
        const command = this.createCommand(Util_1.ApiCommands.GetClashCandidates);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * returns the list of all clashes. If startIndex and maxResults are provided, it returns a subset of the clashes. This is useful if there are a lot of clashes and you want to implement pagination or lazy loading in your application.
     * @param startIndex (optional) start index for pagination
     * @param maxResults (optional) maximum number of results to return
     * @returns list of clashes
     */
    async getClashResults(startIndex, maxResults) {
        const command = this.createCommand(Util_1.ApiCommands.GetClashResults);
        if (startIndex !== undefined && maxResults !== undefined) {
            command.additionalParameters.StartIndex = startIndex;
            command.additionalParameters.ItemCount = maxResults;
        }
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * cancels the ongoing clash computation.
     */
    async cancelClashComputation() {
        for (const id of this.ids) {
            await Application_1.Application.getInstance().Events.removeEvent(id);
        }
        const command = this.createCommand(Util_1.ApiCommands.CancelClashComputation);
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    /**
     * cleans up the clash results from the last clash computation. This should be called after the clash results are consumed to free up resources.
     */
    async cleanClashResults() {
        const command = this.createCommand(Util_1.ApiCommands.CleanClashResults);
        return await APIConnector_1.Api.get().sendCommand(command);
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
