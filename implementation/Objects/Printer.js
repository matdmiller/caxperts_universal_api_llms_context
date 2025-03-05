"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class Printer {
    constructor(printerId) {
        this.printerId = printerId;
    }
    static async create() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterCreate);
        return new Printer((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.PrinterId);
    }
    async delete() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterDelete);
        command.commandParameters.push(this.printerId.toString());
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async getPdf() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterPrintToBase64);
        command.commandParameters.push(this.printerId.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Pdf;
    }
    async addIntellipidPage(drawing, printMode) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterAddIntelliPidPage);
        command.commandParameters.push(this.printerId.toString());
        command.additionalParameters = {
            AddPidToPdfPrinter: {
                DrawingPath: drawing.Identifier,
                PrintMode: printMode
            }
        };
        return (await APIConnector_1.Api.get().sendCommand(command));
    }
}
exports.Printer = Printer;
