"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeElement = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
class FileTreeElement {
    /**
     * get the id of the File Tree Element
     */
    get Id() {
        return this._id;
    }
    /**
     * get the name of the File Tree Element
     */
    get Name() {
        return this._name;
    }
    /**
     * get the type of the File Tree Element
     */
    get Type() {
        return this._type;
    }
    /**
     * @internal
     * @param _id
     * @param _name
     * @param _type
     */
    constructor(_id, _name, _type) {
        this._id = _id;
        this._name = _name;
        this._type = _type;
        this.State = new Util_1.GetSet(async () => {
            const command = this.createCommand(Util_1.ApiCommands.FilesTreeGetState);
            const response = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
            const result = new Util_1.FileTreeState();
            result.Name = response.Name;
            result.Expanded = response.Expanded;
            result.Exportable = response.Exportable;
            result.HasChanges = response.HasChanges;
            result.Loading = response.Loading;
            result.Locked = response.Locked;
            result.Selected = response.Selected;
            return result;
        }, async (value) => {
            const command = this.createCommand(Util_1.ApiCommands.FilesTreeSetState);
            command.additionalParameters = {
                FilesTreeSetState: value
            };
            await APIConnector_1.Api.get().sendCommand(command);
        });
    }
    /**
     * Delete File tree element
     */
    async delete() {
        const command = this.createCommand(Util_1.ApiCommands.FilesTreeDeleteObject);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @experimental
     * This functions exposes the internal datastructure. THis is only intended for special usecases
     * No documentation is available/will be made available for these internal structures
     * Data structure changes can occour within new versions that will break old behavior
     * @returns
     */
    async getContent() {
        const command = this.createCommand(Util_1.ApiCommands.FilesTreeGetContainer);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * This functions returns a base64 UPVF file of the element and its sub elements.
     * Can be loaded again using FileTreeManager.loadUPVF
     * @returns
     */
    async getUPVF(forceExport, featureTypeFilters, fileTreeElement = []) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeContent);
        command.additionalParameters = {
            GetFilesTreeContent: {
                RootNode: this.Id,
                FeatureTypeFilter: featureTypeFilters,
                ForceExport: forceExport,
                IncludedNodes: fileTreeElement.map(x => x.Id)
            }
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.FilesTreeContent;
    }
    /**
     * Closes the Filetree item if it is open (Both edit and show if applicable). If element doesnt support closing an exception is thrown
     */
    async closeItem() {
        const command = this.createCommand(Util_1.ApiCommands.FilesTreeClose);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Starts editing the Filetree item. If element doesnt support closing an exception is thrown
     * @param noUi should the ui be hide. Not all elements might listen to this option
     */
    async editItem(noUi = false) {
        const command = this.createCommand(Util_1.ApiCommands.FilesTreeEdit);
        command.commandParameters.push(noUi + "");
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Shows the Filetree item. If element doesnt support showing an exception is thrown
     */
    async showItem() {
        const command = this.createCommand(Util_1.ApiCommands.FilesTreeShow);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Views the Filetree item. If element doesnt support viewing an exception is thrown
     */
    async viewItem() {
        const command = this.createCommand(Util_1.ApiCommands.FilesTreeView);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @internal
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        command.commandParameters.push(this.Id.toString());
        return command;
    }
}
exports.FileTreeElement = FileTreeElement;
