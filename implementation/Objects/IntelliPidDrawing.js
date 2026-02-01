"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntelliPidDrawing = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
class IntelliPidDrawing {
    constructor(info, model) {
        this.info = info;
        this.model = model;
        this.Identifier = info.Identifier;
        this.IsOpen = info.IsOpen;
        this.IsFocused = info.IsFocused;
    }
    /**
     * Open the IntelliPidDrawing
     * @returns
     */
    async openPid() {
        const command = this.model.createCommand(Util_1.ApiCommands.OpenPid);
        command.commandParameters.push(this.Identifier);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Open the IntelliPidDrawing
     * @returns
     */
    async closePid() {
        const command = this.model.createCommand(Util_1.ApiCommands.ClosePid);
        command.commandParameters.push(this.Identifier);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.IntelliPidDrawing = IntelliPidDrawing;
