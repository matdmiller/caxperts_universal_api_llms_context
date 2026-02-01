"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeFolder = void 0;
const FileTreeElement_1 = require("./FileTreeElement");
const Util_1 = require("../Util");
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
class FileTreeFolder extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
    /***
     * Load UPVF file from a base64 string into UPV under the curent folder
     * @param upfvBase64 base64 upvf content to load
     * @param suppressDefaultAction if only one element is in the UPVF open it by default if this is set to false (default is true).
     * @param overwriteFoldersBehavior by default if the same folder already exists we will keepBoth but this behavior can be changed with this parameter. Replace for Folders behaves like a merge not a delete/create
     * @param overwriteNodesBehavior by default if the same folder already exists we will keepBoth but this behavior can be changed with this parameter
     * @param keepFolderExpandStates By default if an element is changed the containing folder will be expanded. With this option this can be supressed
     * @param overwriteEnableUi if enabled the user will be asked as if they started a manuell import
     * @returns
     */
    async loadUPVF(upfvBase64, suppressDefaultAction = true, overwriteFoldersBehavior = Util_1.FilesTreeImportBehaviour.KeepBoth, overwriteNodesBehavior = Util_1.FilesTreeImportBehaviour.KeepBoth, keepFolderExpandStates = false, overwriteEnableUi = false) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ProcessFile);
        command.additionalParameters = {
            ProcessFile: {
                ContentBase64: upfvBase64,
                SuppressDefaultAction: suppressDefaultAction,
                OverwriteFoldersBehavior: overwriteFoldersBehavior,
                OverwriteNodesBehavior: overwriteNodesBehavior,
                KeepFolderExpandStates: keepFolderExpandStates,
                OverwriteEnableUi: overwriteEnableUi,
                InsertNodeId: this.Id
            }
        };
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.FileTreeFolder = FileTreeFolder;
