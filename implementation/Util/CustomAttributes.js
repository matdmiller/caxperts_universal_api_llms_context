"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributes = exports.CustomAttributeLegacy = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Enums_1 = require("../Util/Enums");
/**
 * Contains the file variants. These might be made unavailable in future versions and replaced by new commands
 * */
class CustomAttributeLegacy {
    constructor(customAttributes) {
        this.customAttributes = customAttributes;
    }
    async loadCustomAttributeConfigurationFile(file) {
        const command = this.customAttributes.createCommand(Enums_1.ApiCommands.LoadCustomAttributeConfigurationFile);
        command.commandParameters.push(file);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async loadCustomAttributeDataFile(file) {
        const command = this.customAttributes.createCommand(Enums_1.ApiCommands.LoadCustomAttributeDataFile);
        command.commandParameters.push(file);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.CustomAttributeLegacy = CustomAttributeLegacy;
class CustomAttributes {
    constructor(model) {
        this.model = model;
    }
    get Legacy() {
        return new CustomAttributeLegacy(this);
    }
    async clearCustomAttributes() {
        const command = this.createCommand(Enums_1.ApiCommands.ClearCustomAttributes);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async loadCustomAttributeConfigurationBase64(contentBase64) {
        const command = this.createCommand(Enums_1.ApiCommands.LoadCustomAttributeConfigurationFile);
        command.additionalParameters = {
            LoadCustomAttributeConfiguration: {
                ContentBase64: contentBase64
            }
        };
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async loadCustomAttributeDataBase64(contentBase64) {
        const command = this.createCommand(Enums_1.ApiCommands.LoadCustomAttributeDataFile);
        command.additionalParameters = {
            LoadCustomAttributeDataFile: {
                ContentBase64: contentBase64
            }
        };
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async importCustomAttributeChangeSet(changeSets, showLoadScreen) {
        const command = this.createCommand(Enums_1.ApiCommands.ImportCustomAttributeChangeSet);
        command.additionalParameters = {
            ImportCustomAttributeChangeSet: {
                ShowLoadScreen: showLoadScreen,
                ChangeSet: {
                    Changes: changeSets
                }
            }
        };
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async setCustomAttributeConfiguration(definitions, updateMode) {
        const command = this.createCommand(Enums_1.ApiCommands.SetCustomAttributeConfiguration);
        command.additionalParameters = {
            SetCustomAttributeConfiguration: {
                GeneralDefinitions: definitions,
                UpdateMode: updateMode
            }
        };
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async getCustomAttributeConfiguration() {
        const command = this.createCommand(Enums_1.ApiCommands.GetCustomAttributeConfiguration);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .GetCustomAttributeConfiguration;
    }
    async exportCustomAttributes(exportAll) {
        const command = this.createCommand(Enums_1.ApiCommands.ExportCustomAttributes);
        command.additionalParameters = {
            ExportCustomAttributes: {
                ExportAllAttributes: exportAll
            }
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .ExportCustomAttributes;
    }
    /**
     * @internal
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        return command;
    }
}
exports.CustomAttributes = CustomAttributes;
