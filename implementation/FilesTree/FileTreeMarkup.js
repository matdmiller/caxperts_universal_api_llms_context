"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeMarkup = void 0;
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
const APIConnector_1 = require("../Internal/APIConnector");
class FileTreeMarkup extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
    /**
     * Only can be excuted if the Markup is open
     * @param mode
     * @param size
     * @param color
     */
    async setMarkupTool(mode, size, color) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetMarkupTool);
        command.additionalParameters = {
            SetMarkupTool: {
                Mode: mode,
                Size: size,
                MarkupColor: color
            }
        };
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Only works for IntelliPid Markups. Markup needs to be closed first for it to work currently
     * @returns Returns all hit elements that are fully drawn over
     */
    async getIntelliPidElementsHitByMarkup() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetIntelliPidElementsHitByMarkup);
        command.commandParameters.push(this.Id.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
}
exports.FileTreeMarkup = FileTreeMarkup;
