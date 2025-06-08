"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = exports.ModelObject = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class ModelObject {
    constructor(uid) {
        this.Uid = uid;
    }
    /**
     * @internal
     */
    initBase(attributes, elementLinks) {
        this.Attributes = attributes;
        this.ElementLinks = elementLinks;
    }
    /**
     * @internal
     */
    init3D(bounds, objectColors, snapInfo) {
        this.Bounds = bounds;
        this.ObjectColors = objectColors;
        this.SnapInfo = snapInfo;
    }
    /**
     * @internal
     */
    initPid(rawSvg) {
        this.RawSvg = rawSvg;
    }
    /**
     * Get the Attribute value. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @returns value or null if not found
     */
    getAttribute(name) {
        if (!this.Attributes)
            return null;
        for (let index = 0; index < this.Attributes.length; index++) {
            const element = this.Attributes[index];
            if (element.Key == name) {
                return element.Value;
            }
        }
        return null;
    }
    /**
     * Set a Custom Attribute. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    async setCustomAttribute(name, value, user) {
        if (!this.Attributes)
            return null;
        for (let index = 0; index < this.Attributes.length; index++) {
            const element = this.Attributes[index];
            if (element.Key == name) {
                await element.SetCustomAttribute.set({ user: user, value: value });
            }
        }
    }
    /**
     * Update a Changable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    async setAttribute(name, value) {
        if (!this.Attributes)
            return null;
        for (let index = 0; index < this.Attributes.length; index++) {
            const element = this.Attributes[index];
            if (element.Key == name) {
                await element.SetAttribute.set(value);
            }
        }
    }
}
exports.ModelObject = ModelObject;
class Attribute {
    constructor(uid, key, value, isCustomAttribute, customAttributeDefinition, customAttributeSourceValue, target, isChangableAttribute) {
        this.uid = uid;
        this.Value = value;
        this.Key = key;
        this.IsCustomAttribute = isCustomAttribute;
        this.IsChangableAttribute = isChangableAttribute;
        this.SetCustomAttribute = new Util_1.Set(async (value) => {
            if (customAttributeDefinition == null) {
                throw new Error('no CustomAttribute information loaded. Specify in Filter or Attribute is no Custom Attribute');
            }
            if (customAttributeDefinition.ReadOnly) {
                throw new Error('CustomAttribute is readonly');
            }
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ImportCustomAttributeChangeSet);
            command.target = target.Id;
            command.additionalParameters = {
                ImportCustomAttributeChangeSet: {
                    ShowLoadScreen: false,
                    ChangeSet: {
                        Changes: [{
                                CustomValue: value.value,
                                Id: customAttributeDefinition.SourceDefinitions[0].Id,
                                IsSessionChange: true,
                                SourceValue: customAttributeSourceValue,
                                Timestamp: new Date().toISOString().replace("T", " ").split(".")[0],
                                User: value.user
                            }]
                    }
                }
            };
            await APIConnector_1.Api.get().sendCommand(command);
            this.Value = value.value;
        });
        this.SetAttribute = new Util_1.Set(async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAttribute);
            command.target = target.Id;
            command.commandParameters.push(this.uid);
            command.commandParameters.push(this.Key);
            command.commandParameters.push(value);
            await APIConnector_1.Api.get().sendCommand(command);
            this.Value = value;
        });
    }
}
exports.Attribute = Attribute;
