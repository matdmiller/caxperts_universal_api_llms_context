import { Events, FileOperations, LocalStorage, Model, Settings } from "./Objects";
import { LifeCycleState } from "./ResponseTypes";
import { AppControlScene, Scene, ScenePid, Scene3d } from "./Scenes";
import { Get, GetSet } from "./Util";
import { FileTreeManager } from "./FilesTree";
import { AuthenticationManager } from "./Objects/AuthenticationManager";
/**
 * @class Application
 * Main Entrypoint for interacting with the UPV API
 */
export declare class Application {
    /**
     * Contains all Scenes in the running UPV Instance. To Filter for specific scenes individual properties exist. Example @see{@link ScenePid}
     */
    Scenes: Get<Scene[]>;
    /**
     * Contains all IntelliPid scenes
     */
    ScenesPid: Get<ScenePid[]>;
    /**
     * Contains all 3D scenes
     */
    Scenes3d: Get<Scene3d[]>;
    /**
     * Contains all app control scenes
     */
    ScenesAppControls: Get<AppControlScene[]>;
    /**
     * Contains all model loaded inside UPV
     */
    Models: Get<Model[]>;
    /**
     * The current Live Cycle State of UPV
     */
    State: Get<LifeCycleState>;
    /**
     * The current language of UPV
     */
    Language: GetSet<string>;
    /**
     * Handles all type of events for UPV
     */
    Events: Events;
    /**
     * Handles all type of events for UPV
     */
    FileTree: FileTreeManager;
    /**
     * Handles all type of events for UPV
     */
    Authentication: AuthenticationManager;
    /**
     * Provides storage space for variables. Note that this is shared between all AppControls. If values are persisted they are also stored unencrypted on the disk.
     */
    LocalStorage: LocalStorage;
    /**
    * Provides methods for interacting with the file system
    */
    FileOperations: FileOperations;
    Settings: Settings;
    /**
     *
     * @private
     *
     */
    private constructor();
    /**
     * Create an instance of this class
     * @returns {@link Application}
     */
    static getInstance(): Application;
    /**
     * Opens a popup with a message inside UPV
     * @param message Message to display
     * @returns ApiResponse can be ignored and will likely change
     */
    showMessage(message: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Focus the viewer into the foreground
     * @returns ApiResponse can be ignored and will likely change
     */
    focusViewer(): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Closes UPV
     * @returns ApiResponse can be ignored and will likely change
     */
    quitApplication(): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Load the model into UPV. Currently its not possible to load a model this way as AppControl are only availble inside the model for now
     * @param modelUri path to model
     * @returns ApiResponse can be ignored and will likely change
     */
    loadModel(modelUri: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Caches a UPV Model
     * @param modelUri path to model
     * @returns ApiResponse can be ignored and will likely change
     */
    cacheModel(modelUri: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Activate a license key
     * @param license licensekey to activate
     * @returns ApiResponse can be ignored and will likely change
     */
    activateLicense(license: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     *
     * @returns Deactivate an active license
     * @returns ApiResponse can be ignored and will likely change
     */
    deactivateLicense(): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Set an Authentication config used when opening models
     * @param domainUri for which URI is the config valid
     * @param configUri the configuration to use
     * @returns ApiResponse can be ignored and will likely change
     */
    setAuthConfig(domainUri: string, configUri: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Clear an authentication config for a URI
     * @param domainUri the URI to delete an authentication config for
     * @returns ApiResponse can be ignored and will likely change
     */
    clearAuthConfig(domainUri: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Open a path on the local system
     * @param path path to open using the system default example https://google.com
     * @returns
     */
    openPath(path: string): Promise<import("./ResponseTypes").ApiResponse>;
    /**
     * Checks if a connection to UPV is available and commands can be send to UPV
     * @returns
     */
    available(): boolean;
}
//# sourceMappingURL=Application.d.ts.map