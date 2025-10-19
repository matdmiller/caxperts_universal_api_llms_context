"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Enums_1 = require("../Util/Enums");
const GetSet_1 = require("../Util/GetSet");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
class Settings {
    constructor() {
        this.UiColors = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetUiColors);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.UiColors;
        });
        this.UiVariables = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetUiVariables);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.UiVariables;
        });
        this.CurrentUiTheme = new GetSet_1.GetSet(async () => {
            return (await this.getAvailableUiThemes()).CurrentId;
        }, async (theme) => {
            const command = this.createCommand(Enums_1.ApiCommands.SetActiveUiTheme);
            command.commandParameters.push(theme);
            await APIConnector_1.Api.get().sendCommand(command);
        });
        this.AvailableUiThemes = new GetSet_1.Get(async () => {
            const themes = (await this.getAvailableUiThemes()).UiThemes;
            return Object.keys(themes).map(x => { return { id: x, description: themes[x] }; });
        });
        this.Language = new GetSet_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetLanguage);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Language;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.SetLanguage);
            command.commandParameters.push(value);
            (await APIConnector_1.Api.get().sendCommand(command));
        });
        this.TextureMode = new GetSet_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetLanguage);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Mode;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.SetRenderMode);
            command.commandParameters.push(value + "");
            (await APIConnector_1.Api.get().sendCommand(command));
        });
        this.RenderQuality = new GetSet_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetQualityLevel);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Level;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.SetQualityLevel);
            command.commandParameters.push(value + "");
            (await APIConnector_1.Api.get().sendCommand(command));
        });
        this.PanoramaCentresVisibility = new GetSet_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetPanoramaCentresVisibility);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Value;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.SetPanoramaCentresVisibility);
            command.commandParameters.push(value + "");
            (await APIConnector_1.Api.get().sendCommand(command));
        });
        this.WindowLayoutXML = new GetSet_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetWindowLayout);
            command.additionalParameters.GetWindowLayout = {
                LayoutFormat: Enums_1.WindowLayoutFormat.Xml
            };
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.LayoutContent;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.SetWindowLayout);
            command.additionalParameters.SetWindowLayout = {
                LayoutContent: value,
                LayoutFormat: Enums_1.WindowLayoutFormat.Xml
            };
            (await APIConnector_1.Api.get().sendCommand(command));
        });
        this.WindowLayoutJson = new GetSet_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetWindowLayout);
            command.additionalParameters.GetWindowLayout = {
                LayoutFormat: Enums_1.WindowLayoutFormat.Json
            };
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.LayoutContent;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.SetWindowLayout);
            command.additionalParameters.SetWindowLayout = {
                LayoutContent: value,
                LayoutFormat: Enums_1.WindowLayoutFormat.Json
            };
            (await APIConnector_1.Api.get().sendCommand(command));
        });
    }
    async getAvailableUiThemes() {
        const command = this.createCommand(Enums_1.ApiCommands.GetUiThemes);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        return command;
    }
}
exports.Settings = Settings;
