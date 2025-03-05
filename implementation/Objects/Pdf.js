"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
class Pdf {
    constructor(Info, model) {
        this.Info = Info;
        this.model = model;
        this.IsOpen = Info.IsOpen;
        this.IsFocused = Info.IsFocused;
    }
    /**
     * Open the PdfDrawing
     * @returns
     */
    async openPdf() {
        const command = this.createCommand(Util_1.ApiCommands.OpenPdf);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Open the PdfDrawing
     * @returns
     */
    async closePdf() {
        const command = this.createCommand(Util_1.ApiCommands.ClosePdf);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands) {
        const command = this.model.createCommand(apiCommands);
        command.additionalParameters.PdfDocument = {
            DisplayName: this.Info.Document.DisplayName,
            Path: this.Info.Document.Path,
            PdfType: this.Info.Document.PdfType,
            PhysicalFileName: this.Info.Document.PhysicalFileName
        };
        return command;
    }
}
exports.Pdf = Pdf;
