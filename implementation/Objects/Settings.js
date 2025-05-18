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
