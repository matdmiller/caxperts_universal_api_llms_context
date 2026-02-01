"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerSketchPairWrapper = exports.Printer = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class Printer {
    constructor(printerId) {
        this.printerId = printerId;
    }
    /**
     * Creates a new PDF printer instance always call delete once no longer required
     * @returns
     */
    static async create() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterCreate);
        return new Printer((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.PrinterId);
    }
    /**
     * Deletes an PDF printer instance
     * @returns
     */
    async delete() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterDelete);
        command.commandParameters.push(this.printerId.toString());
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Returns the PDF as a base64 string
     * @returns
     */
    async getPdf() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterPrintToBase64);
        command.commandParameters.push(this.printerId.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Pdf;
    }
    /**
     * Add in Intellipid to the PDF
     * @param drawing PID to add
     * @param printMode what mode should be used
     * @param sketchLayers (optional) can be used to assign PID sketches to individual layers
     * @returns
     */
    async addIntellipidPage(drawing, printMode, sketchLayers = []) {
        const sketchlayers = sketchLayers.map(x => ({
            Name: x.Name,
            Visible: x.Visible,
            SketchIds: x.Sketches.map(s => s.Id)
        }));
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterAddIntelliPidPage);
        command.commandParameters.push(this.printerId.toString());
        command.additionalParameters = {
            AddPidToPdfPrinter: {
                DrawingPath: drawing.Identifier,
                PrintMode: printMode,
                LayerSketches: sketchlayers
            }
        };
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
}
exports.Printer = Printer;
class LayerSketchPairWrapper {
}
exports.LayerSketchPairWrapper = LayerSketchPairWrapper;
