"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeTreeNode = void 0;
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
//where does this belong to? Model or Scene or Application
class AttributeTreeNode {
    constructor(Id, Name, Type) {
        this.Id = Id;
        this.Name = Name;
        this.Type = Type;
    }
    //TODO move to model, scene or application
    /**
     * Get The Root node of the Attribute Tree
     * @returns
     */
    static async getRoot() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeRootNode);
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetTreeRootNode;
        return new AttributeTreeNode(result.Id, result.Name, result.Type);
    }
    /**
     * Get the current Sub Folders for this attribute tree element
     * @returns
     */
    async getSubFolders() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeFolderChildren);
        command.commandParameters.push(this.Id);
        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        const returnValue = [];
        result.ResultData.GetTreeFolderChildren.forEach(element => {
            returnValue.push(new AttributeTreeNode(element.Id, element.Name, element.Type));
        });
        return returnValue;
    }
    /**
     * Get the Siblings for this Attribute Tree element
     * @returns
     */
    async getSiblings() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeFolderSiblings);
        command.commandParameters.push(this.Id);
        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        const returnValue = [];
        result.ResultData.GetTreeFolderSiblings.forEach(element => {
            returnValue.push(new AttributeTreeNode(element.Id, element.Name, element.Type));
        });
        return returnValue;
    }
    async getTreeNodesOfFolder() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeNodesOfFolder);
        command.commandParameters.push(this.Id);
        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        const returnValue = [];
        result.ResultData.GetTreeNodesOfFolder.forEach(element => {
            returnValue.push(new AttributeTreeNode(element.Id, element.Name, element.Type));
        });
        return returnValue;
    }
}
exports.AttributeTreeNode = AttributeTreeNode;
