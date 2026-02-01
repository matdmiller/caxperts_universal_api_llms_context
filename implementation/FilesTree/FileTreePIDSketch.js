"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreePIDSketch = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreePIDSketch extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
        this.SketchColor = new Util_1.Set(async (newColor) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetPidSketchTool);
            command.additionalParameters = {
                SetPidSketchTool: {
                    Mode: Util_1.PidSketchToolMode.None,
                    SketchColor: newColor
                }
            };
            await APIConnector_1.Api.get().sendCommand(command);
        });
    }
    /**
     * Select a symbol from the catalog for placment
     * @param symbol
     * @returns
     */
    async selectSymbolForPlacement(symbol) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SelectSymbolForPlacement);
        command.commandParameters.push(symbol.Path);
        command.target = Util_1.TargetEnum.Intelli;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * Select a primitive for placment
     * @param symbol
     */
    async selectPrimitiveForPlacement(symbol) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetPidSketchTool);
        command.additionalParameters = {
            SetPidSketchTool: {
                Mode: symbol,
                SketchColor: null
            }
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Objects;
    }
    async placeSymbol(symbol, name, position, rotation, attributes = {}) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlaceSymbol);
        command.additionalParameters = {
            PlaceSymbol: {
                Path: symbol.Path,
                Variant: symbol.Variant,
                Name: name,
                Position: new Util_1.Vector3D(position.X, position.Y, 0),
                Rotation: new Util_1.Vector3D(rotation, 0, 0),
                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
            }
        };
        command.target = Util_1.TargetEnum.Intelli;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * Retrieve the Symbols in the catalog
     * @returns
     */
    async getCatalogSymbols() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetCatalogSymbols);
        command.target = Util_1.TargetEnum.Intelli;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    async deleteSketchItem(uid) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteSketchItem);
        command.commandParameters.push(uid);
        command.target = Util_1.TargetEnum.Intelli;
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
}
exports.FileTreePIDSketch = FileTreePIDSketch;
