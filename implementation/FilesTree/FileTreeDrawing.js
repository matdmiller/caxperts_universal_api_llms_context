"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeDrawing = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreeDrawing extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
    /**
     * Export a drawing to base64. Specify in which format you want the export to be
     * An export can be multiple exports and this would cause multiple exports
     * @param type Format to use
     * @returns
     */
    async exportDrawing(type) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ExportDrawing);
        command.target = Util_1.TargetEnum.ThreeD;
        command.commandParameters.push(this.Id.toString());
        command.commandParameters.push(type.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
}
exports.FileTreeDrawing = FileTreeDrawing;
