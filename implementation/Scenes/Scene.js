"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
/**
 * Basesclass of all Scenes
 */
class Scene {
    constructor(Id) {
        this.Id = Id;
        /**
         * Describes what type a scene is
         */
        this.SceneType = Util_1.SceneType.Undefined;
    }
    /**
     * Load a colorfile via a file
     * @param file path to excel colorfile
     * @returns ApiResponse can be ignored and will likely change
     */
    async loadColorFile(file) {
        const command = this.createCommand(Util_1.ApiCommands.LoadColorFile);
        command.commandParameters.push(file);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Load a linkfile via a file
     * @param file path to excel linkfile
     * @returns ApiResponse can be ignored and will likely change
     */
    async loadLinkFile(file) {
        const command = this.createCommand(Util_1.ApiCommands.LoadLinkFile);
        command.commandParameters.push(file);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Clears all Links
     * @returns ApiResponse can be ignored and will likely change
     */
    async clearLinks() {
        const command = this.createCommand(Util_1.ApiCommands.ClearLinks);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Takes a screenshot and returns the base64. By default saves as png
     * @param width Width of the output picture
     * @param height Height of the output picture
     * @param fieldOfView Field of View (default 90)
     * @param hideUi Draw UI in picture (default false)
     * @param enableAntiAliasing Use AntiAliasing (default true)
     * @param enableTransparentBackground Draws the brackground transparent (only Shows the model, only works in png) (default false)
     * @param modelInBestQuality Take the screenshot of the model in the best quality (default false)
     * @param format jpg or png (default png)
     * @returns
     */
    async takeScreenshot(width, height, fieldOfView = 90, hideUi = true, enableAntiAliasing = true, enableTransparentBackground = false, modelInBestQuality = false, format = "png") {
        const command = this.createCommand(Util_1.ApiCommands.TakeScreenshot);
        command.commandParameters.push(width.toString());
        command.commandParameters.push(height.toString());
        command.commandParameters.push(fieldOfView.toString());
        command.commandParameters.push(format.toString());
        command.commandParameters.push(hideUi.toString());
        command.commandParameters.push(enableAntiAliasing.toString());
        command.commandParameters.push(enableTransparentBackground.toString());
        command.commandParameters.push(modelInBestQuality.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.TakeScreenshot;
    }
    /**
     * @internal
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        command.target = this.Id;
        return command;
    }
}
exports.Scene = Scene;
