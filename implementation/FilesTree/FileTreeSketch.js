"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeSketch = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreeSketch extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
    async selectSymbolForPlacement(symbol) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SelectSymbolForPlacement);
        command.commandParameters.push(symbol.Path);
        command.commandParameters.push(symbol.Variant);
        command.target = Util_1.TargetEnum.ThreeD;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async placeSymbol(symbol, name, position, rotation, attributes = {}) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlaceSymbol);
        command.additionalParameters = {
            PlaceSymbol: {
                Path: symbol.Path,
                Variant: symbol.Variant,
                Name: name,
                Position: position,
                Rotation: rotation,
                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
            }
        };
        command.target = Util_1.TargetEnum.ThreeD;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async placePrimitive(type, name, position, rotation, attributes = {}, parameters = {}) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlacePrimitive);
        command.additionalParameters = {
            PlacePrimitive: {
                Type: type,
                Name: name,
                Position: position,
                Rotation: rotation,
                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
                Parameters: Object.keys(parameters).map(x => { return { Key: x, Value: parameters[x] }; }),
            }
        };
        command.target = Util_1.TargetEnum.ThreeD;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async getCatalogSymbols() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetCatalogSymbols);
        command.target = Util_1.TargetEnum.ThreeD;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async deleteSketchItem(uid) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteSketchItem);
        command.commandParameters.push(uid);
        command.target = Util_1.TargetEnum.ThreeD;
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
    async exportAsUpvcBase64() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ExportSketchAsUpvc);
        command.target = Util_1.TargetEnum.ThreeD;
        command.commandParameters.push(this.Id.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.UpvcBase64;
    }
    async exportAsDgnBase64() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ExportSketchAsDgn);
        command.target = Util_1.TargetEnum.ThreeD;
        command.commandParameters.push(this.Id.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.DgnBase64;
    }
}
exports.FileTreeSketch = FileTreeSketch;
