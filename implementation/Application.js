"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const APIConnector_1 = require("./Internal/APIConnector");
const Objects_1 = require("./Objects");
const Scenes_1 = require("./Scenes");
const Util_1 = require("./Util");
const CaxApiCommand_1 = require("./Internal/CaxApiCommand");
const FilesTree_1 = require("./FilesTree");
const AuthenticationManager_1 = require("./Objects/AuthenticationManager");
/**
 * Main Entrypoint for interacting with the UPV API
 */
class Application {
    /**
     *
     * @internal
     *
     */
    constructor() {
        this.State = new Util_1.Get(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetLifeCycleState);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
                .LifeCycleState;
        });
        this.Scenes = new Util_1.Get(async () => {
            const scenes = [];
            scenes.push(new Scenes_1.Scene3d(Util_1.TargetEnum.ThreeD));
            scenes.push(new Scenes_1.ScenePid(Util_1.TargetEnum.Intelli));
            scenes.push(new Scenes_1.AppControlScene(Util_1.TargetEnum.Browser));
            return scenes;
        });
        this.ScenesAppControls = new Util_1.Get(async () => {
            const scenes = [];
            scenes.push(new Scenes_1.AppControlScene(Util_1.TargetEnum.Browser));
            return scenes;
        });
        this.Scenes3d = new Util_1.Get(async () => {
            const scenes = [];
            scenes.push(new Scenes_1.Scene3d(Util_1.TargetEnum.ThreeD));
            return scenes;
        });
        this.ScenesPid = new Util_1.Get(async () => {
            const scenes = [];
            scenes.push(new Scenes_1.ScenePid(Util_1.TargetEnum.Intelli));
            return scenes;
        });
        this.Models = new Util_1.Get(async () => {
            const models = [];
            models.push(new Objects_1.Model(Util_1.TargetEnum.ThreeD));
            models.push(new Objects_1.Model(Util_1.TargetEnum.Intelli));
            models.push(new Objects_1.Model(Util_1.TargetEnum.Browser));
            return models;
        });
        this.Language = new Util_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetLanguage);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Language;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetLanguage);
            command.commandParameters.push(value);
            (await APIConnector_1.Api.get().sendCommand(command));
        });
        this.ViewerVersion = new Util_1.Get(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetViewerVersion);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
        });
        this.Events = new Objects_1.Events();
        this.FileTree = new FilesTree_1.FileTreeManager();
        this.Authentication = new AuthenticationManager_1.AuthenticationManager();
        this.LocalStorage = new Objects_1.LocalStorage();
        this.Settings = new Objects_1.Settings();
        this.FileOperations = new Objects_1.FileOperations();
    }
    /**
     * Create an instance of this class
     * @returns {@link Application}
     */
    static getInstance() {
        return new Application();
    }
    /**
     * Opens a popup with a message inside UPV
     * @param message Message to display
     * @returns ApiResponse can be ignored and will likely change
     */
    async showMessage(message) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ShowMessage);
        command.commandParameters.push(message);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Focus the viewer into the foreground
     * @returns ApiResponse can be ignored and will likely change
     */
    async focusViewer() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FocusViewer);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Closes UPV
     * @returns ApiResponse can be ignored and will likely change
     */
    async quitApplication() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.QuitApplication);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Load the model into UPV. Currently its not possible to load a model this way as AppControl are only availble inside the model for now
     * @param modelUri path to model
     * @returns ApiResponse can be ignored and will likely change
     */
    async loadModel(modelUri) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadModel);
        command.commandParameters.push(modelUri);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Caches a UPV Model
     * @param modelUri path to model
     * @returns ApiResponse can be ignored and will likely change
     */
    async cacheModel(modelUri) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.CacheModel);
        command.commandParameters.push(modelUri);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Activate a license key
     * @param license licensekey to activate
     * @returns ApiResponse can be ignored and will likely change
     */
    async activateLicense(license) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ActivateLicense);
        command.commandParameters.push(license);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     *
     * @returns Deactivate an active license
     * @returns ApiResponse can be ignored and will likely change
     */
    async deactivateLicense() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeactivateLicense);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    //end move
    /**
     * Set an Authentication config used when opening models
     * @param domainUri for which URI is the config valid
     * @param configUri the configuration to use
     * @returns ApiResponse can be ignored and will likely change
     */
    async setAuthConfig(domainUri, configUri) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAuthConfig);
        command.commandParameters.push(domainUri);
        command.commandParameters.push(configUri);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Clear an authentication config for a URI
     * @param domainUri the URI to delete an authentication config for
     * @returns ApiResponse can be ignored and will likely change
     */
    async clearAuthConfig(domainUri) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ClearAuthConfig);
        command.commandParameters.push(domainUri);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Open a path on the local system
     * @param path path to open using the system default example https://google.com
     * @returns
     */
    async openPath(path) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.OpenPath);
        command.commandParameters.push(path);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
    * This command will only returns once the viewer has finished loading the model.
    * THis includes for example Meshloading, TextureLoading etc.
    * If the user is actively moving this function might never return as new Load Jobs are started.
    * This function could be used in automation steps for example in using to capture screenshots.
    * Depending on the state it will signal that either the model was already loaded or that it now finished loading.
    */
    async waitForModelLoading() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.WaitForModelLoading);
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.LoadStatus;
    }
    /**
     * Checks if a connection to UPV is available and commands can be send to UPV
     * @returns
     */
    available() {
        return APIConnector_1.Api.get().Available;
    }
}
exports.Application = Application;
