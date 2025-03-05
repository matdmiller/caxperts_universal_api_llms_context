"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOperations = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class FileOperations {
    /**
     * Opens a open file dialog and returns the data if the user selected a file
     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
     * @param defaultName the default name in the dialog
     * @returns
     */
    async loadFileDialog(extensions = "", defaultName = "") {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadFileDialog);
        command.additionalParameters = {
            LoadFileDialog: {
                DefaultName: defaultName,
                Extensions: extensions
            }
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * Opens a file save dialog and saves the file to disk
     * @param dataAsBase64 data to save
     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
     * @param defaultName the default name in the dialog
     * @returns
     */
    async saveFileDialog(dataAsBase64, extensions, defaultName = "") {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SaveFileDialog);
        command.additionalParameters = {
            SaveFileDialog: {
                DataBase64: dataAsBase64,
                DefaultName: defaultName,
                Extensions: extensions
            }
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * Load a file from the model folder. Some files are not allowed to be retrieved
     * @param file file to load
     * @returns
     */
    async loadFileFromModelFolder(file) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GenericLoadFromFile);
        command.commandParameters.push(file);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
}
exports.FileOperations = FileOperations;
