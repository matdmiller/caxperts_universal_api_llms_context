"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterOperation = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const ModelObject_1 = require("./ModelObject");
/**
 * Defines a default filteroperation
 */
class FilterOperation {
    constructor(scene) {
        this.scene = scene;
        /**
         * The Condition used in the filter. By default this contains a match all condition (Uid=*)
         * Note: To create an OR condition where only some sub conditions need to match set the CombineMode to CombineModes.And. The connection between the two should always be '&'
         * Example: Uid=123...&Uid=456...   With CombineModes.Or this is evaluated as only one needs to match when it is CombineModes.And its evaluated as all need to match. The & in this case is only the separator for the conditions
         * Any Attribute can be used inside the Condition
         */
        this.Condition = "Uid=*";
        /**
         * How the {@link Condition} is evaluated
         */
        this.CombineMode = Util_1.CombineModes.And;
        /**
         * Should objects returned by GetObjects include Attributes
         */
        this.IncludeAttributes = false;
        /**
         * Should objects returned by GetObjects include CustomAttribute Information
         */
        this.IncludeCustomAttributes = false;
        /**
         * Should objects returned by GetObjects include ChangeableAttribute Information
         */
        this.IncludeChangeableAttributes = false;
        /**
         * Should objects returned by GetObjects include linked elements Information
         */
        this.IncludeLinkedElements = false;
    }
    async getBaseObjects() {
        const command = this.createCommand(Util_1.ApiCommands.GetObjects);
        const models = [];
        let getObjectsAttributes;
        let getCustomAttributes;
        let getChangeableAttributes;
        let getLinkedElements;
        const getObjects = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        if (this.IncludeAttributes) {
            command.command = Util_1.ApiCommands.GetObjectsAttributes;
            command.commandParameters = this.Attributes;
            getObjectsAttributes = APIConnector_1.Api.get().sendCommandWithReturnType(command);
            command.commandParameters = [];
        }
        if (this.IncludeCustomAttributes) {
            command.command = Util_1.ApiCommands.GetCustomAttributeConfiguration;
            getCustomAttributes = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        if (this.IncludeChangeableAttributes) {
            command.command = Util_1.ApiCommands.GetObjectsChangeableAttributes;
            getChangeableAttributes = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        if (this.IncludeLinkedElements) {
            command.command = Util_1.ApiCommands.GetLinkedElements;
            getLinkedElements = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        for (const uid of (await getObjects).ResultData.Objects) {
            const model = new ModelObject_1.ModelObject(uid, this.scene);
            let attributes;
            let links;
            if (this.IncludeAttributes) {
                attributes = [];
                const customAttributeInfo = {};
                if (this.IncludeCustomAttributes) {
                    for (const configuration of (await getCustomAttributes).ResultData.GetCustomAttributeConfiguration) {
                        customAttributeInfo[configuration.Name] = configuration;
                    }
                }
                const changeableAttributes = {};
                if (this.IncludeChangeableAttributes) {
                    try {
                        const tempChangeable = (await getChangeableAttributes).ResultData.ChangeableAttributes[uid];
                        for (const key of Object.keys(tempChangeable)) {
                            changeableAttributes[key] = tempChangeable[key];
                        }
                    }
                    catch (_a) {
                        //If no Changeable elements exist this causes an exeption
                    }
                }
                const objectsAttribute = (await getObjectsAttributes).ResultData.ObjectsAttributes[uid];
                for (const key of Object.keys(objectsAttribute)) {
                    if (key in customAttributeInfo) {
                        const definition = customAttributeInfo[key].SourceDefinitions[0];
                        attributes.push(new ModelObject_1.Attribute(uid, key, objectsAttribute[key], true, customAttributeInfo[key], objectsAttribute[definition.SourceAttribute], this.scene, key in changeableAttributes));
                    }
                    else {
                        attributes.push(new ModelObject_1.Attribute(uid, key, objectsAttribute[key], false, null, null, this.scene, key in changeableAttributes));
                    }
                }
            }
            if (this.IncludeLinkedElements) {
                links = (await getLinkedElements).ResultData.Links[model.Uid];
            }
            model.initBase(attributes, links);
            models.push(model);
        }
        return models;
    }
    /**
     * Get all Attributes that are currently selected
     * @returns
     */
    async getSelectedObjects() {
        const command = this.createCommand(Util_1.ApiCommands.GetSelectedObjects);
        const getSelectedObjects = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        if (getSelectedObjects.ResultData.SelectedObjects.length == 0)
            return [];
        const oldCondition = this.Condition;
        this.Condition = new String(getSelectedObjects.ResultData.SelectedObjects.map((x) => "Uid=" + x).join('&'))
            .toString();
        this.CombineMode = Util_1.CombineModes.Or;
        const models = await this.getObjects();
        this.Condition = oldCondition;
        return models;
    }
    /**
     * Select all objects hit by this FilterOperation
     * @returns
     */
    async select() {
        const command = this.createCommand(Util_1.ApiCommands.Select);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Clear the current selection
     * @returns
     */
    async clearSelection() {
        const command = this.createCommand(Util_1.ApiCommands.ClearSelection);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Fit all objects hit by this FilterOperation
     * @returns
     */
    async fit() {
        const command = this.createCommand(Util_1.ApiCommands.Fit);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * color all objects hit by this Fileroperation with the specified color
     * @param color hex color
     * @returns
     */
    async color(color) {
        const command = this.createCommand(Util_1.ApiCommands.Color);
        command.commandParameters = [color];
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Reset the color of all objects hit by this FilterOperation
     * @returns
     */
    async clearColor() {
        const command = this.createCommand(Util_1.ApiCommands.ClearColor);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * input the {@link Condition} into the search field inside UPV
     * @returns
     */
    async searchFallback() {
        const command = this.createCommand(Util_1.ApiCommands.SearchFallback);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.FilterOperation = FilterOperation;
