"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = exports.ModelObject = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
class ModelObject {
    constructor(uid, target) {
        this.target = target;
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
     * Update a Changeable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
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
    /**
     * Add a changeable Attribute to a sketch element
     * Samples:
     * await element.createChangeableAttribute("Test-Freetest", "Test-Freetest", "Hello World");
     * await element.createChangeableAttribute("Test-Color", "Test-Color", "ff1122", CustomAttributeDataType.Color);
     * await element.createChangeableAttribute("Test-Meter", "Test-Meter", "1", CustomAttributeDataType.NumericWithUnit, ChangeableAttributeUnitType.Length);
     * await element.createChangeableAttribute("Test-Angle", "Test-Angle", "2", CustomAttributeDataType.NumericWithUnit, ChangeableAttributeUnitType.Angle);
     * await element.createChangeableAttribute("Test-Numeric", "Test-Numeric", "2", CustomAttributeDataType.Numeric);
     * await element.createChangeableAttribute("Test-Codelist", "Test-Codelist", "test1", CustomAttributeDataType.CodeList, ChangeableAttributeUnitType.None, false, false, true, ["test1", "test2", "test3", "test4"]);
     * await element.createChangeableAttribute("Test-CodelistColor", "Test-CodelistColor", "blue", CustomAttributeDataType.CodeList, ChangeableAttributeUnitType.None, false, false, true, ["red", "green", "blue", "none"], [red, green, blue]);
     * await element.createChangeableAttribute("Test-Readonly", "Test-Readonly", "readonly", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, true, false, true);
     * await element.createChangeableAttribute("Test-Hidden", "Test-Hidden", "hidden", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, false, true, true);
     * await element.createChangeableAttribute("Test-nondeletable", "Test-nondeletable", "nondeletable", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, false, false, false);
     * @param name Internal Name
     * @param displayName  Visible name
     * @param initialValue The intial value this is set to
     * @param mode What type of Attribute to create. See Samples
     * @param unitType Leave this at none except for NumericWithUnit
     * @param readOnly User cannot edit this field
     * @param hidden User cannot see this field
     * @param deletable User cannot delete this value
     * @param codelist A codelist to use for the mode codelist
     * @param codelistColors optional colors to use for the codelist
     */
    async createChangeableAttribute(name, displayName, initialValue, mode = Util_1.CustomAttributeDataType.FreeText, unitType = Util_1.ChangeableAttributeUnitType.None, readOnly = false, hidden = false, deletable = true, codelist = [], codelistColors = []) {
        let drawingPath = "";
        if (this.target.SceneType == Util_1.SceneType.IntelliPid) {
            drawingPath = this.getAttribute("Drawing_NAME");
        }
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.AddChangeableAttribute);
        command.target = this.target.Id;
        command.additionalParameters = {
            AddChangeableAttribute: {
                Uid: this.Uid,
                DisplayName: displayName,
                InitialValue: initialValue,
                Deletable: deletable,
                DrawingPathForPid: drawingPath,
                Hidden: hidden,
                Readonly: readOnly,
                Name: name,
                Mode: mode,
                UnitType: unitType,
                CodeListEntriesNames: codelist,
                CodeListEntriesColors: codelistColors
            }
        };
        await APIConnector_1.Api.get().sendCommand(command);
        if (this.Attributes) {
            this.Attributes.push(new Attribute(this.Uid, name, initialValue, false, null, null, this.target, true));
        }
    }
    /**
     * Remove a changeable attribute on a Sketch element
     * @param name
     */
    async deleteChangeableAttribute(name) {
        let drawingPath = "";
        if (this.target.SceneType == Util_1.SceneType.IntelliPid) {
            drawingPath = this.getAttribute("Drawing_PATH");
            if (drawingPath == null)
                drawingPath = this.getAttribute("Drawing_NAME");
        }
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteChangeableAttribute);
        command.target = this.target.Id;
        command.additionalParameters = {
            DeleteChangeableAttribute: {
                Uid: this.Uid,
                DrawingPathForPid: drawingPath,
                Name: name
            }
        };
        await APIConnector_1.Api.get().sendCommand(command);
        if (this.Attributes) {
            this.Attributes = this.Attributes.filter(x => x.Key != name);
        }
    }
}
exports.ModelObject = ModelObject;
class Attribute {
    constructor(uid, key, value, isCustomAttribute, customAttributeDefinition, customAttributeSourceValue, target, isChangeableAttribute) {
        this.uid = uid;
        this.Value = value;
        this.Key = key;
        this.IsCustomAttribute = isCustomAttribute;
        this.IsChangeableAttribute = isChangeableAttribute;
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
