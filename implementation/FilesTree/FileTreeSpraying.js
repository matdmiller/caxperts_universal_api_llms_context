"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeSpraying = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreeSpraying extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
    async exportAsUpvcBase64() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ExportSprayingAsUpvc);
        command.target = Util_1.TargetEnum.ThreeD;
        command.commandParameters.push(this.Id.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.UpvcBase64;
    }
}
exports.FileTreeSpraying = FileTreeSpraying;
