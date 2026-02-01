"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaxApiCommand = void 0;
const Enums_1 = require("../Util/Enums");
/** @internal */
class CaxApiCommand {
    constructor(command) {
        this.requestId = 0;
        this.additionalParameters = {};
        this.commandParameters = [];
        this.condition = "";
        this.conditionCombineMode = Enums_1.CombineModes.And;
        this.model = "";
        this.target = Enums_1.TargetEnum.ThreeD;
        this.command = command;
    }
}
exports.CaxApiCommand = CaxApiCommand;
