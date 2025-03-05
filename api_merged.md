# @caxperts/universal.api Reference

This file contains all TypeScript declaration files from the package, merged for easy reference.

## Application.d.ts

<Application.d.ts>
```typescript
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
```
</Application.d.ts>

---

## FilesTree/FileTreeAnimation.d.ts

<FilesTree/FileTreeAnimation.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeAnimation extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeAnimation.d.ts.map
```
</FilesTree/FileTreeAnimation.d.ts>

---

## FilesTree/FileTreeAppControl.d.ts

<FilesTree/FileTreeAppControl.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeAppControl extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeAppControl.d.ts.map
```
</FilesTree/FileTreeAppControl.d.ts>

---

## FilesTree/FileTreeComment.d.ts

<FilesTree/FileTreeComment.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeComment extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeComment.d.ts.map
```
</FilesTree/FileTreeComment.d.ts>

---

## FilesTree/FileTreeCommentSVG.d.ts

<FilesTree/FileTreeCommentSVG.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeCommentSVG extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeCommentSVG.d.ts.map
```
</FilesTree/FileTreeCommentSVG.d.ts>

---

## FilesTree/FileTreeElement.d.ts

<FilesTree/FileTreeElement.d.ts>
```typescript
import { ApiCommands, FeatureTypes, FileTreeState, GetSet } from "../Util";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { GetFilesTreeContainerObject } from "../ResponseTypes";
export declare class FileTreeElement {
    private readonly _id;
    private _name;
    private _type;
    /**
     * get the id of the File Tree Element
     */
    get Id(): number;
    /**
     * get the name of the File Tree Element
     */
    get Name(): string;
    /**
     * get the type of the File Tree Element
     */
    get Type(): FeatureTypes;
    /**
     * Get or set the current state of the file tree element
     */
    State: GetSet<FileTreeState>;
    /**
     * @internal
     * @param _id
     * @param _name
     * @param _type
     */
    protected constructor(_id: number, _name: string, _type: FeatureTypes);
    /**
     * Delete File tree element
     */
    delete(): Promise<void>;
    /**
     * @experimental
     * This functions exposes the internal datastructure. THis is only intended for special usecases
     * No documentation is available/will be made available for these internal structures
     * Data structure changes can occour within new versions that will break old behavior
     * @returns
     */
    getContent(): Promise<GetFilesTreeContainerObject>;
    /**
     * This functions returns a base64 UPVF file of the element and its sub elements.
     * Can be loaded again using FileTreeManager.loadUPVF
     * @returns
     */
    getUPVF(forceExport?: boolean, featureTypeFilters?: FeatureTypes[], fileTreeElement?: FileTreeElement[]): Promise<string>;
    /**
     * Closes the Filetree item if it is open (Both edit and show if applicable). If element doesnt support closing an exception is thrown
     */
    closeItem(): Promise<void>;
    /**
     * Starts editing the Filetree item. If element doesnt support closing an exception is thrown
     * @param noUi should the ui be hide. Not all elements might listen to this option
     */
    editItem(noUi?: boolean): Promise<void>;
    /**
     * Shows the Filetree item. If element doesnt support showing an exception is thrown
     */
    showItem(): Promise<void>;
    /**
     * Views the Filetree item. If element doesnt support viewing an exception is thrown
     */
    viewItem(): Promise<void>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=FileTreeElement.d.ts.map
```
</FilesTree/FileTreeElement.d.ts>

---

## FilesTree/FileTreeFolder.d.ts

<FilesTree/FileTreeFolder.d.ts>
```typescript
import { FileTreeElement } from "./FileTreeElement";
import { FeatureTypes } from "../Util";
export declare class FileTreeFolder extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeFolder.d.ts.map
```
</FilesTree/FileTreeFolder.d.ts>

---

## FilesTree/FileTreeManager.d.ts

<FilesTree/FileTreeManager.d.ts>
```typescript
import { FileTreeElement } from "./FileTreeElement";
import { Color, FeatureTypes, FilesTreeImportContainerParameter, PointOfInterestType, Vector3D } from "../Util";
import { FileTreePointOfInterest } from "./FileTreePointOfInterest";
import { FileTreeSketch } from "./FileTreeSketch";
import { FileTreeModel } from "./FileTreeModel";
import { FileTreeFolder } from "./FileTreeFolder";
import { FileTreeComment } from "./FileTreeComment";
import { FileTreePIDSketch } from "./FileTreePIDSketch";
import { FileTreeCommentSVG } from "./FileTreeCommentSVG";
/**
 * @legacy
 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
 * */
export declare class FileTreeManagerLegacy {
    private manager;
    constructor(manager: FileTreeManager);
    /**
         * might be removed in future from wrapper
         * @legacy
         * @param path
         * @returns
         */
    loadSketch(path: string, viewName?: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * might be removed in future from wrapper
     * @legacy
     * @param path
     * @returns
     */
    loadPackageFile(path: string, replace?: boolean): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * might be removed in future from wrapper
     * @legacy
     * @param path
     * @returns
     */
    exportPackageFile(path: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @legacy might be removed in future from wrapper and replaced with a new function
     */
    loadFile(path: string): Promise<import("../ResponseTypes").ApiResponse>;
}
export declare class FileTreeManager {
    get Legacy(): FileTreeManagerLegacy;
    /**
     * Returns the root folder in the UPV filetree
     * @returns
     */
    getRootFolder(): Promise<FileTreeModel>;
    /**
     * Get the children Elements of this File Tree Elements
     */
    getChildren(folder: FileTreeElement): Promise<FileTreeElement[]>;
    /**
     * Get the sibelings Elements of this File Tree Elements
     */
    getSiblings(element: FileTreeElement): Promise<FileTreeElement[]>;
    /**
     * Move a file Tree Element into a diffrent folder
     */
    moveTo(source: FileTreeElement, target: FileTreeFolder): Promise<void>;
    /**
     * This function allows you to import any filetree element.
     * This is not designed for normal usage and requires extensive knowledge.
     * FileTreeElement.getContent can be used to retrieve the data
     * Since the content of filetree element are internal datastructures no support is/will be made available
     * Data structure changes can occour within new versions that will break old behavior
     * @param parameter
     */
    importContainer(parameter: FilesTreeImportContainerParameter): Promise<FileTreeElement>;
    /**
     * Create a new Folder in the Filetree
     * @param parent
     * @param name
     * @returns
     */
    createFolder(parent: FileTreeFolder, name: string): Promise<FileTreeFolder>;
    /**
     * Create a point of interest in the filestree
     * @param parent parent folder
     * @param name
     * @param position
     * @param rotation
     * @param color
     * @param diameter size of the poi in meters
     * @param attributes define attributes on the poi
     * @param links define links on the poi
     * @param type Use Custommesh and customMeshPath to provide a custom mesh other then the sphere
     * @param customMeshPath path to the custom mesh in obj format. Can be a filepath or website path
     * @returns
     */
    createPointOfIntrest(parent: FileTreeFolder, name: string, position: Vector3D, rotation: Vector3D, color: Color, diameter: number, attributes?: {
        [key: string]: string;
    }, links?: {
        [key: string]: string;
    }, type?: PointOfInterestType, customMeshPath?: string): Promise<FileTreePointOfInterest>;
    /**
     * Create a Pid or 3D Sketch
     * @param parent parent folder
     * @param name name of the sketch
     * @returns Either PidSketch or Sketch depending on current UPV Context
     */
    createSketch(parent: FileTreeFolder, name: string): Promise<FileTreePIDSketch | FileTreeSketch>;
    /**
     * Create a Markup. Depending on if 3d,Pid,or Document/Drawing is open it will be bound to that file
     * @param name
     * @param parent
     * @returns
     */
    createMarkup(parent: FileTreeFolder, name: string): Promise<FileTreeElement>;
    /**
    * Create a Comment. Depending on if 3d or Pid is open it will be bound to that type. It is also based on the currently selected element
    * @param name
    * @param parent
    * @returns
    */
    createComment(parent: FileTreeFolder | FileTreeSketch | FileTreePIDSketch | FileTreePointOfInterest, name: string, uid?: string, offset?: number): Promise<FileTreeComment | FileTreeCommentSVG>;
    private resolveElement;
    /**
     * Load UPVF file from a base64 string into UPV
     * @param upfvBase64 base64 upvf content to load
     * @param suppressDefaultAction if only one element is in the UPVF open it by default if this is set to false (default is true)
     * @returns
     */
    loadUPVF(upfvBase64: string, suppressDefaultAction?: boolean): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * This functions returns a base64 UPVF file of the tree.
     * Can be loaded again using loadUPVF
     * It is possible to use a diffrent root by using the FileTreeElement.getUPVF funtion of the root you want to export from
     * @returns
     */
    getUPVF(forceExport?: boolean, featureTypeFilters?: FeatureTypes[], fileTreeElement?: FileTreeElement[]): Promise<string>;
}
//# sourceMappingURL=FileTreeManager.d.ts.map
```
</FilesTree/FileTreeManager.d.ts>

---

## FilesTree/FileTreeMarkup.d.ts

<FilesTree/FileTreeMarkup.d.ts>
```typescript
import { Color, FeatureTypes, MarkupMode } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
import { GetSelectedObjects } from "../ResponseTypes";
export declare class FileTreeMarkup extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Only can be excuted if the Markup is open
     * @param mode
     * @param size
     * @param color
     */
    setMarkupTool(mode: MarkupMode, size: number, color: Color): Promise<void>;
    /**
     * Only works for IntelliPid Markups. Markup needs to be closed first for it to work currently
     * @returns Returns all hit elements that are fully drawn over
     */
    getIntelliPidElementsHitByMarkup(): Promise<GetSelectedObjects>;
}
//# sourceMappingURL=FileTreeMarkup.d.ts.map
```
</FilesTree/FileTreeMarkup.d.ts>

---

## FilesTree/FileTreeModel.d.ts

<FilesTree/FileTreeModel.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeFolder } from "./FileTreeFolder";
export declare class FileTreeModel extends FileTreeFolder {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeModel.d.ts.map
```
</FilesTree/FileTreeModel.d.ts>

---

## FilesTree/FileTreePIDSketch.d.ts

<FilesTree/FileTreePIDSketch.d.ts>
```typescript
import { GetCatalogSymbols, GetObjects } from "../ResponseTypes";
import { FeatureTypes, CatalogSymbol, PidSketchToolMode, Color, Set, Vector2D } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreePIDSketch extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Set the layer color of a PID sketch
     */
    SketchColor: Set<Color>;
    /**
     * Select a symbol from the catalog for placment
     * @param symbol
     * @returns
     */
    selectSymbolForPlacement(symbol: CatalogSymbol): Promise<GetObjects>;
    /**
     * Select a primitive for placment
     * @param symbol
     */
    selectPrimitiveForPlacement(symbol: PidSketchToolMode): Promise<void>;
    placeSymbol(symbol: CatalogSymbol, name: string, position: Vector2D, rotation: number, attributes?: {
        [key: string]: string;
    }): Promise<GetObjects>;
    /**
     * Retrieve the Symbols in the catalog
     * @returns
     */
    getCatalogSymbols(): Promise<GetCatalogSymbols>;
    deleteSketchItem(uid: string): Promise<import("../ResponseTypes").ApiResponse>;
}
//# sourceMappingURL=FileTreePIDSketch.d.ts.map
```
</FilesTree/FileTreePIDSketch.d.ts>

---

## FilesTree/FileTreePackage.d.ts

<FilesTree/FileTreePackage.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreePackage extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreePackage.d.ts.map
```
</FilesTree/FileTreePackage.d.ts>

---

## FilesTree/FileTreePhoto.d.ts

<FilesTree/FileTreePhoto.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreePhoto extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreePhoto.d.ts.map
```
</FilesTree/FileTreePhoto.d.ts>

---

## FilesTree/FileTreePointOfInterest.d.ts

<FilesTree/FileTreePointOfInterest.d.ts>
```typescript
import { FileTreeElement } from "./FileTreeElement";
import { FeatureTypes } from "../Util";
export declare class FileTreePointOfInterest extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreePointOfInterest.d.ts.map
```
</FilesTree/FileTreePointOfInterest.d.ts>

---

## FilesTree/FileTreeReport.d.ts

<FilesTree/FileTreeReport.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeReport extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeReport.d.ts.map
```
</FilesTree/FileTreeReport.d.ts>

---

## FilesTree/FileTreeScreenshot.d.ts

<FilesTree/FileTreeScreenshot.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeScreenshot extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeScreenshot.d.ts.map
```
</FilesTree/FileTreeScreenshot.d.ts>

---

## FilesTree/FileTreeSketch.d.ts

<FilesTree/FileTreeSketch.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeSketch extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeSketch.d.ts.map
```
</FilesTree/FileTreeSketch.d.ts>

---

## FilesTree/FileTreeTwoDToThreeD.d.ts

<FilesTree/FileTreeTwoDToThreeD.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeTwoDToThreeD extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeTwoDToThreeD.d.ts.map
```
</FilesTree/FileTreeTwoDToThreeD.d.ts>

---

## FilesTree/FileTreeView.d.ts

<FilesTree/FileTreeView.d.ts>
```typescript
import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeView extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
}
//# sourceMappingURL=FileTreeView.d.ts.map
```
</FilesTree/FileTreeView.d.ts>

---

## FilesTree/index.d.ts

<FilesTree/index.d.ts>
```typescript
export * from "./FileTreeElement";
export * from "./FileTreeAnimation";
export * from "./FileTreeAppControl";
export * from "./FileTreeComment";
export * from "./FileTreeCommentSVG";
export * from "./FileTreeFolder";
export * from "./FileTreeMarkup";
export * from "./FileTreeModel";
export * from "./FileTreePackage";
export * from "./FileTreePhoto";
export * from "./FileTreePIDSketch";
export * from "./FileTreePointOfInterest";
export * from "./FileTreeReport";
export * from "./FileTreeScreenshot";
export * from "./FileTreeSketch";
export * from "./FileTreeTwoDToThreeD";
export * from "./FileTreeView";
export * from "./FileTreeManager";
//# sourceMappingURL=index.d.ts.map
```
</FilesTree/index.d.ts>

---

## Internal/APIConnector.d.ts

<Internal/APIConnector.d.ts>
```typescript
import { ApiEvents, ApiResponse, ApiResponseWithType } from '../ResponseTypes';
import { CaxApiCommand } from "./CaxApiCommand";
/**
 * @internal
 * Defines capabilities of a connector.
 */
export interface ApiConnector {
    /**
     * true means calls to sendCommand will execute.
     */
    readonly available: boolean;
    /**
     * Called immediately after construction. Note: This does not ensure that the connector is ready to use, check
     * property available afterwards.
     */
    initialize(): void;
    /**
     * Send command asynchronously and wait until the response is completed.
     * @param command to execute.
     * @return Promise to wait for completion.
     */
    sendCommand(command: CaxApiCommand): Promise<void>;
}
export declare class ApiResponseContainer {
    message: any;
}
/**
 * @internal
 * Dont use the API class unless you know what you are doing. Changes to this class could be undocumented
 */
export declare class Api {
    private static instance;
    debug: boolean;
    private apiConnector;
    private waiting;
    private waitingFailure;
    private registeredEvents;
    static get(): Api;
    get AppControlsAvailable(): boolean;
    get BBVAvailable(): boolean;
    get Available(): boolean;
    /**
     * Sets / replaces the current connector as some connectors like BBV are not yet available at start because peer
     * connection needs to be established.
     * @param connector to use from now on.
     */
    registerConnector(connector: ApiConnector): void;
    handleEvent(json: any): void;
    private initialize;
    private constructor();
    private sendCommandInternal;
    sendCommand(command: CaxApiCommand): Promise<ApiResponse>;
    sendCommandWithReturnType<T>(command: CaxApiCommand): Promise<ApiResponseWithType<T>>;
    addEventCallback(event: ApiEvents, eventId: number, callback: (data: any) => void): Promise<ApiResponse>;
    removeEventCallback(eventId: number): Promise<ApiResponse>;
}
//# sourceMappingURL=APIConnector.d.ts.map
```
</Internal/APIConnector.d.ts>

---

## Internal/APIConnectorVuplex.d.ts

<Internal/APIConnectorVuplex.d.ts>
```typescript
import { ApiConnector } from './APIConnector';
import { CaxApiCommand } from "./CaxApiCommand";
declare global {
    /**
     * @internal
     */
    interface Window {
        vuplex: {
            postMessage: (parameter: {
                type: string;
                message: string;
            }) => void;
            addEventListener: (event: string, callback: ((data: {
                data: string;
            }) => void)) => void;
        };
    }
}
/**
 * @internal
 */
export declare class ApiConnectorVuplex implements ApiConnector {
    get available(): boolean;
    private inIframe;
    initialize(): void;
    private attachListener;
    sendCommand(command: CaxApiCommand): Promise<void>;
}
//# sourceMappingURL=APIConnectorVuplex.d.ts.map
```
</Internal/APIConnectorVuplex.d.ts>

---

## Internal/CaxApiCommand.d.ts

<Internal/CaxApiCommand.d.ts>
```typescript
import { ParameterBase } from "../Util/ParameterBase";
import { ApiCommands, CombineModes } from "../Util/Enums";
/** @internal */
export declare class CaxApiCommand {
    requestId: number;
    additionalParameters: ParameterBase;
    command: ApiCommands;
    commandParameters: string[];
    condition: string;
    conditionCombineMode: CombineModes;
    model: string;
    target: string;
    constructor(command: ApiCommands);
}
//# sourceMappingURL=CaxApiCommand.d.ts.map
```
</Internal/CaxApiCommand.d.ts>

---

## Objects/AttributeTree.d.ts

<Objects/AttributeTree.d.ts>
```typescript
export declare class AttributeTreeNode {
    Id: string;
    Name: string;
    Type: string;
    constructor(Id: string, Name: string, Type: string);
    /**
     * Get The Root node of the Attribute Tree
     * @returns
     */
    static getRoot(): Promise<AttributeTreeNode>;
    /**
     * Get the current Sub Folders for this attribute tree element
     * @returns
     */
    getSubFolders(): Promise<AttributeTreeNode[]>;
    /**
     * Get the Siblings for this Attribute Tree element
     * @returns
     */
    getSiblings(): Promise<AttributeTreeNode[]>;
    getTreeNodesOfFolder(): Promise<AttributeTreeNode[]>;
}
//# sourceMappingURL=AttributeTree.d.ts.map
```
</Objects/AttributeTree.d.ts>

---

## Objects/AuthenticationManager.d.ts

<Objects/AuthenticationManager.d.ts>
```typescript
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { AuthenticationContextChangedEvent } from "../ResponseTypes";
import { ApiCommands } from "../Util";
export declare class AuthenticationManager {
    openAuthenticationContext(oidcConfig: string, OidcConfigBrowserBasedViewing: string): Promise<AuthenticationContext>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
export declare class AuthenticationContext {
    private readonly _id;
    /**
     * @internal
     * @param _id
     */
    constructor(_id: number);
    private ids;
    /**
     * Retrieve new access and identity tokens before the old ones expire via a callback
     * @param callback
     */
    registerContextChangedEvent(callback: (data: AuthenticationContextChangedEvent) => void): Promise<void>;
    /**
     * Will try to perform a logout against the IDP. Needs to be called before closeAuthenticationContext
     * @returns
     */
    startLogoutProcess(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Closes the authentication loop on UPV side for this Context
     * @returns
     */
    closeAuthenticationContext(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    private createCommand;
}
//# sourceMappingURL=AuthenticationManager.d.ts.map
```
</Objects/AuthenticationManager.d.ts>

---

## Objects/Camera.d.ts

<Objects/Camera.d.ts>
```typescript
import { Vector3D, CameraView, GetSet, ClippingPlane } from "../Util";
import { Scene3d } from "../Scenes";
import { ApiResponse } from "../ResponseTypes";
export declare class Camera {
    private scene;
    /**
     * Access to the cameras position
     */
    Position: GetSet<Vector3D>;
    /**
     * Access to the cameras rotation
     */
    Rotation: GetSet<Vector3D>;
    /**
     * Access to the cameras position and rotation combined (faster)
     */
    CameraView: GetSet<CameraView>;
    /**
     * Access to the cameras position and rotation combined (faster)
     */
    ClippingPlane: GetSet<ClippingPlane>;
    /**
     * @internal
     * @param scene
     */
    constructor(scene: Scene3d);
    private setCameraView;
    private getCameraView;
    private getClippingPlane;
    private setClippingPlane;
    /**
     * Make the camera look at a target from the current view
     * @param target Vector of the target
     * @returns
     */
    lookAt(target: Vector3D): Promise<ApiResponse>;
    /**
     * Reset the view to the default position
     * @returns
     */
    resetView(): Promise<ApiResponse>;
}
//# sourceMappingURL=Camera.d.ts.map
```
</Objects/Camera.d.ts>

---

## Objects/ClashContext.d.ts

<Objects/ClashContext.d.ts>
```typescript
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ClashComputationProgressChangedEvent, GetClashCandidates, GetClashes } from "../ResponseTypes";
import { ApiCommands } from "../Util";
export declare class ClashContext {
    private ids;
    registerContextChangedEvent(callback: (data: ClashComputationProgressChangedEvent) => void): Promise<void>;
    getClashCandidates(): Promise<GetClashCandidates>;
    getClashResults(): Promise<GetClashes>;
    cancelClashComputation(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=ClashContext.d.ts.map
```
</Objects/ClashContext.d.ts>

---

## Objects/Events.d.ts

<Objects/Events.d.ts>
```typescript
import { AnimationTimestampChangedObject, CustomAttributeValueChanged, LifeCycleEvent, LinkClicked, PointerClicked, SelectionChanged, IntelliPidSelectionChanged, AuthenticationContextChangedEvent, ClashComputationProgressChangedEvent, StorageVariableChangedEvent } from "../ResponseTypes";
export declare class Events {
    private unloaded;
    private registeredEvents;
    constructor();
    private onUnload;
    /**
     * Register Selection Changed Event
     */
    registerSelectionChangedEvent(callback: (data: SelectionChanged) => void): Promise<number>;
    /**
     * Register Pointer Clicked Event
     */
    registerPointerClickedEventEvent(callback: (data: PointerClicked) => void): Promise<number>;
    /**
     * Register Lifecycle Event
     */
    registerLifeCycleEvent(callback: (data: LifeCycleEvent) => void): Promise<number>;
    /**
     * Register Link Clicked Event
     */
    registerLinkClickedEvent(callback: (data: LinkClicked) => void): Promise<number>;
    /**
     * Register CUstom Attribute Changed Event
     */
    registerCustomAttributeValueChangedEvent(callback: (data: CustomAttributeValueChanged) => void): Promise<number>;
    /**
     * Register Animation Timestamp Changed Event
     */
    registerAnimationTimestampChangedEvent(callback: (data: AnimationTimestampChangedObject) => void): Promise<number>;
    /**
     * Register Selection Changed Event for IntelliPid
     */
    registerIntellipidSelectionChangedEvent(callback: (data: IntelliPidSelectionChanged) => void): Promise<number>;
    /**
     * @experimental
     * Register Authentication context changed event. Please use Application.auth... instead
     */
    registerAuthenticationContextChangedEvent(callback: (data: AuthenticationContextChangedEvent) => void): Promise<number>;
    /**
     * @experimental
     * Register clash computation changed event  Filter3D.startClashCompution instead
     */
    registerClashComputationProgressChangedEvent(callback: (data: ClashComputationProgressChangedEvent) => void): Promise<number>;
    /**
     * @experimental
     * Register clash computation changed event  Filter3D.startClashCompution instead
     */
    registerStorageVariableChangedEvent(callback: (data: StorageVariableChangedEvent) => void): Promise<number>;
    /**
     * Use this function in react useEffect functions to automatically provide the unregister function
     * @param fun the event function that should be called
     * @param callback the callback function that this event should excute
     * @returns the unregister event function
     */
    useEffectWrapper<T>(fun: (callback: (data: T) => void) => Promise<number>, callback: (data: T) => void): () => void;
    /**
     * remove any event with that ID
     */
    removeEvent(id: number): Promise<void>;
}
//# sourceMappingURL=Events.d.ts.map
```
</Objects/Events.d.ts>

---

## Objects/FileOperations.d.ts

<Objects/FileOperations.d.ts>
```typescript
import { GenericLoadFromFileResponse, LoadFileApiReturnType, SaveFileApiReturnType } from "../ResponseTypes";
export declare class FileOperations {
    /**
     * Opens a open file dialog and returns the data if the user selected a file
     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
     * @param defaultName the default name in the dialog
     * @returns
     */
    loadFileDialog(extensions?: string, defaultName?: string): Promise<LoadFileApiReturnType>;
    /**
     * Opens a file save dialog and saves the file to disk
     * @param dataAsBase64 data to save
     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
     * @param defaultName the default name in the dialog
     * @returns
     */
    saveFileDialog(dataAsBase64: string, extensions: string, defaultName?: string): Promise<SaveFileApiReturnType>;
    /**
     * Load a file from the model folder. Some files are not allowed to be retrieved
     * @param file file to load
     * @returns
     */
    loadFileFromModelFolder(file: string): Promise<GenericLoadFromFileResponse>;
}
//# sourceMappingURL=FileOperations.d.ts.map
```
</Objects/FileOperations.d.ts>

---

## Objects/FilterOperation.d.ts

<Objects/FilterOperation.d.ts>
```typescript
import { Scene } from "../Scenes";
import { CombineModes, ApiCommands } from "../Util";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ModelObject } from "./ModelObject";
/**
 * Defines a default filteroperation
 */
export declare abstract class FilterOperation {
    protected readonly scene: Scene;
    constructor(scene: Scene);
    /**
     * The Condition used in the filter. By default this contains a match all condition (Uid=*)
     */
    Condition?: string;
    /**
     * How the {@link Condition} is evaluated
     */
    CombineMode: CombineModes;
    /**
     * Should objects returned by GetObjects include Attributes
     */
    IncludeAttributes: boolean;
    /**
     * if empty all attributes will be retrieved else only the specified. Requires {@link IncludeAttributes}
     */
    Attributes: string[];
    /**
     * Should objects returned by GetObjects include CustomAttribute Information
     */
    IncludeCustomAttributes: boolean;
    /**
     * Should objects returned by GetObjects include ChangeableAttribute Information
     */
    IncludeChangableAttributes: boolean;
    /**
     * Should objects returned by GetObjects include linked elements Information
     */
    IncludeLinkedElements: boolean;
    abstract getObjects(): Promise<ModelObject[]>;
    protected getBaseObjects(): Promise<ModelObject[]>;
    /**
     * Get all Attributes that are currently selected
     * @returns
     */
    getSelectedObjects(): Promise<ModelObject[]>;
    /**
     * Select all objects hit by this FilterOperation
     * @returns
     */
    select(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Clear the current selection
     * @returns
     */
    clearSelection(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Fit all objects hit by this FilterOperation
     * @returns
     */
    fit(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * color all objects hit by this Fileroperation with the specified color
     * @param color hex color
     * @returns
     */
    color(color: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Reset the color of all objects hit by this FilterOperation
     * @returns
     */
    clearColor(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * input the {@link Condition} into the search field inside UPV
     * @returns
     */
    searchFallback(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    abstract createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=FilterOperation.d.ts.map
```
</Objects/FilterOperation.d.ts>

---

## Objects/FilterOperation3D.d.ts

<Objects/FilterOperation3D.d.ts>
```typescript
import { AttributeTreeNode } from "./AttributeTree";
import { ApiResponse } from "../ResponseTypes";
import { Scene } from "../Scenes";
import { ClippingDescriptor, ApiCommands, Package, ClashMode } from "../Util";
import { FilterOperation } from "./FilterOperation";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ClashContext } from "./ClashContext";
import { ModelObject } from "./ModelObject";
export declare class FilterOperation3d extends FilterOperation {
    constructor(scene: Scene);
    /**
     * Should objects returned by GetObjects include the boundingbox
     */
    IncludeBoundingBox: boolean;
    /**
     * Should objects returned by GetObjects include Colors
     */
    IncludeColors: boolean;
    /**
     * Should objects returned by GetObjects include SnapInfo
     */
    IncludeSnapInfo: boolean;
    /**
     * Advanced API Clipping
     */
    ApiClippingDescriptor?: ClippingDescriptor;
    /**
     * Advanced API Filtering using the Package Logic
     * used to create more advanced posibilities then {@link Condition} and {@link CombineMode}
     * The Condition property is still evaluated. So its best to use a match all query like Uid=*
     */
    APIPackageFilter?: Package;
    /**
     * All objects based on the attributes specified in the FilterOperation
     */
    getObjects(): Promise<ModelObject[]>;
    /**
     * Highlights all Elements hit by FilterOperation
     * @returns
     */
    highlight(): Promise<ApiResponse>;
    /**
     * Clears any active hightlighting
     * @returns
     */
    clearHighlight(): Promise<ApiResponse>;
    /**
     * Show only objects hit by the FilterOpration
     * @returns
     */
    showOnly(): Promise<ApiResponse>;
    /**
     * Set the Visibility of all objects hit by this Filteropration
     * @param state new state (show/true, hide/false)
     * @returns
     */
    setVisibility(state: boolean): Promise<ApiResponse>;
    /**
     * activate a volumeClip Operation around objects hit by this Filteroperation
     * @param radius
     * @returns
     */
    volumeClip(radius: number): Promise<ApiResponse>;
    getTreeStructure(): Promise<{
        [id: string]: AttributeTreeNode[];
    }>;
    startClashComputation(tolerance?: number, aspectsToIgnore?: string[], aspectsToInclude?: string[], mode?: ClashMode, includeSketches?: boolean, computeCandidatesOnly?: boolean, packageA?: Package, PackageB?: Package): Promise<ClashContext>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=FilterOperation3D.d.ts.map
```
</Objects/FilterOperation3D.d.ts>

---

## Objects/FilterOperationPid.d.ts

<Objects/FilterOperationPid.d.ts>
```typescript
import { ApiCommands } from "../Util";
import { Scene } from "../Scenes";
import { FilterOperation } from "./FilterOperation";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ModelObject } from "./ModelObject";
/**
 * Fileropration Special for IntelliPID
 */
export declare class FilterOperationPid extends FilterOperation {
    constructor(scene: Scene);
    /**
     * DrawingFilter to use. Can be an array of the Pids or/and UPVCurrent (Currently active PID) or UPVAllOpen (All open Pids. Also in Background).
     * Default value is UPVCurrent
     */
    DrawingFilter?: string[] | "UPVCurrent"[] | "UPVAllOpen"[];
    /**
     * Should objects returned by GetObjects include the RawSVG of the element
     */
    IncludeRawSvg: boolean;
    getObjects(): Promise<ModelObject[]>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=FilterOperationPid.d.ts.map
```
</Objects/FilterOperationPid.d.ts>

---

## Objects/IntelliPidDrawing.d.ts

<Objects/IntelliPidDrawing.d.ts>
```typescript
import { Model } from ".";
import { IntelliPidDrawingInfo } from "../Util/BaseDataTypes";
export declare class IntelliPidDrawing {
    private readonly info;
    private readonly model;
    Identifier: string;
    IsOpen: boolean;
    IsFocused: boolean;
    constructor(info: IntelliPidDrawingInfo, model: Model);
    /**
     * Open the IntelliPidDrawing
     * @returns
     */
    openPid(): Promise<import("..").ApiResponse>;
    /**
     * Open the IntelliPidDrawing
     * @returns
     */
    closePid(): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=IntelliPidDrawing.d.ts.map
```
</Objects/IntelliPidDrawing.d.ts>

---

## Objects/Layer2D.d.ts

<Objects/Layer2D.d.ts>
```typescript
import { Color, Vector2D } from "../Util";
export declare class Layer2D {
    GroupId: string;
    constructor(GroupId: string);
    /**
     * Draw a Line in PID
     * @param vertices Points of the line
     * @param color The color of the line
     * @param width THe Width of the line
     */
    drawLine(vertices: Vector2D[], color: Color, width: number): Promise<void>;
    /**
     * Place a text inside a pid scene
     * @param text The text to draw
     * @param position The position of the text
     * @param rotation The rotation of the text
     * @param size The size of the text
     * @param color The color of the tex
     */
    placeText(text: string, position: Vector2D, rotation: number, size: number, color: Color): Promise<void>;
    /**
     * Place an arc
     * @param position Position of the arc
     * @param rotation Rotation of the arc
     * @param color Color of the arc
     * @param angle Angle of the arc
     * @param radius Radius of the arc
     */
    placeArc(position: Vector2D, rotation: number, color: Color, angle: number, radius: number): Promise<void>;
    /**
     * Destroy the active drawing
     */
    destroy(): Promise<void>;
    /**
     * @internal
     */
    private createCommand;
}
//# sourceMappingURL=Layer2D.d.ts.map
```
</Objects/Layer2D.d.ts>

---

## Objects/Layer3D.d.ts

<Objects/Layer3D.d.ts>
```typescript
import { Color, Instance, Vector3D } from "../Util";
export declare class Layer3D {
    GroupId: string;
    constructor(GroupId: string);
    /**
     * Place an OBJ in the scene
     * @param obj Path to the obj file
     * @param instances The Instances of this object
     * @param suppressLoadingScreen
     */
    placeObj(obj: string, instances: Instance[], suppressLoadingScreen?: boolean): Promise<void>;
    /**
     * Draw a Line in 3D
     * @param vertices Points of the line
     * @param color The color of the line
     * @param width THe Width of the line
     */
    drawLine(vertices: Vector3D[], color: Color, width: number): Promise<void>;
    /**
     * Place a text inside a 3d scene
     * @param text The text to draw
     * @param position The position of the text
     * @param rotation The rotation of the text
     * @param size The size of the text
     * @param color The color of the text
     */
    placeText(text: string, position: Vector3D, rotation: Vector3D, size: number, color: Color): Promise<void>;
    /**
     * Place an arc
     * @param position Position of the arc
     * @param rotation Rotation of the arc
     * @param color Color of the arc
     * @param angle Angle of the arc
     * @param radius Radius of the arc
     */
    placeArc(position: Vector3D, rotation: Vector3D, color: Color, angle: number, radius: number): Promise<void>;
    /**
     * Place a PLY mesh
     * @param color Color of the Mesh
     * @param vertices Every 3 vertecies build a face
     */
    placePly(color: Color, vertices: Vector3D[]): Promise<void>;
    /**
     * Destroy the active drawing
     */
    destroy(): Promise<void>;
    /**
     * @internal
     */
    private createCommand;
}
//# sourceMappingURL=Layer3D.d.ts.map
```
</Objects/Layer3D.d.ts>

---

## Objects/LocalStorage.d.ts

<Objects/LocalStorage.d.ts>
```typescript
import { GetStorageVariablesList, StorageVariableChangedEvent } from "../ResponseTypes";
export declare class LocalStorage {
    /**
     * Store a key in the local storage, only A-z and 0-9 and _ are supported key names
     * @param key
     * @param value
     * @param persist persist accross restart of UPV. Will be forced false on BBV
     * @returns
     */
    setStorageVariable(key: string, value: string, persist?: boolean): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Retrieve a storage variable
     * @param key
     * @returns
     */
    getStorageVariable(key: string): Promise<string>;
    /**
     *
     * @param key Delete a storage variable
     * @returns
     */
    deleteStorageVariable(key: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * List all the storage variables known to UPV
     * @returns
     */
    listStorageVariables(): Promise<GetStorageVariablesList>;
    /**
     * Register a callback whenever a variable has changed
     * @param callback
     * @returns
     */
    registerStorageVariableChangedEvent(callback: (data: StorageVariableChangedEvent) => void): Promise<number>;
}
//# sourceMappingURL=LocalStorage.d.ts.map
```
</Objects/LocalStorage.d.ts>

---

## Objects/Model.d.ts

<Objects/Model.d.ts>
```typescript
import { IntelliPidDrawing, Pdf, ProjectionSphereElement } from ".";
import { ApiResponse } from "../ResponseTypes";
import { Scene } from "../Scenes/Scene";
import { ModelInfo, ProjectInfo } from "../Util/BaseDataTypes";
import { ApiCommands } from "../Util/Enums";
import { CustomAttributes } from "../Util";
import { Get } from "../Util/GetSet";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
/**
 * @legacy
 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
 * */
export declare class ModelLegacy {
    private model;
    constructor(model: Model);
    /**
         * might be removed in future from wrapper
         * @legacy
         * @param path
         * @returns
         */
    loadConfigFile(file: string): Promise<ApiResponse>;
}
export declare class Model {
    Id: string;
    get Legacy(): ModelLegacy;
    Scenes: Scene[];
    ModelInfo: Get<ModelInfo[]>;
    ProjectInfo: Get<ProjectInfo>;
    /**
     * Current Porjections inside the model. 360 Panoramas and mapped imanges
     */
    Projections: Get<ProjectionSphereElement[]>;
    /**
     * Currently open projection. the Get result is null if currently not inside a projection.
     */
    CurrentProjection: Get<ProjectionSphereElement>;
    /**
     * Pids inside the model
     */
    Pids: Get<IntelliPidDrawing[]>;
    /**
     * Currently open Pids
    */
    OpenPids: Get<IntelliPidDrawing[]>;
    /**
     * Currently active Pid. Either a element or null if not one is active
     */
    ActivePid: Get<IntelliPidDrawing>;
    /**
     * Pdfs inside the model
     */
    Pdfs: Get<Pdf[]>;
    /**
     * Currently open Pdfs
    */
    OpenPdfs: Get<Pdf[]>;
    /**
     * Currently active Pid. Either a element or null if not one is active
     */
    ActivePdf: Get<Pdf>;
    /**
     * Access Custom Attributes
     */
    get CustomAttributes(): CustomAttributes;
    constructor(Id: string);
    /**
     * Retrieve the unique attribute values in 3D. Pass the attribute keys for which you are intrested in recieving attributes
     * @param attributes at least one is required
     * @returns
     */
    getUniqueAttributeValues3D(attribute: string): Promise<string[]>;
    /**
     * Retrieve the unique attribute values in Pid. Pass the attribute keys for which you are intrested in recieving attributes
     * @param attributes at least one is required
     * @returns
     */
    gGetUniqueAttributeValuesPid(attribute: string): Promise<string[]>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Model.d.ts.map
```
</Objects/Model.d.ts>

---

## Objects/ModelObject.d.ts

<Objects/ModelObject.d.ts>
```typescript
import { Scene } from "../Scenes";
import { BoundsInfo, Set, ObjectColors, SnapInfo, Definition, ElementLinks } from "../Util";
export declare class ModelObject {
    constructor(uid: string);
    /**
     * @internal
     */
    initBase(attributes?: Attribute[], elementLinks?: ElementLinks): void;
    /**
     * @internal
     */
    init3D(bounds?: BoundsInfo, objectColors?: ObjectColors, snapInfo?: SnapInfo): void;
    /**
     * @internal
     */
    initPid(rawSvg?: string[]): void;
    /**
     * Get the Attribute value. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @returns value or null if not found
     */
    getAttribute(name: string): string;
    /**
     * Set a Custom Attribute. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    setCustomAttribute(name: string, value: string, user: string): Promise<void>;
    /**
     * Update a Changable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    setAttribute(name: string, value: string): Promise<void>;
    /**
     * Uid of the object
     */
    Uid: string;
    /**
     * Attributes of the object
     */
    Attributes?: Attribute[];
    /**
     * Bounds of the object
     */
    Bounds?: BoundsInfo;
    /**
     * Snapinfo of the object
     */
    SnapInfo?: SnapInfo;
    /**
     * the current colors of the object
     */
    ObjectColors?: ObjectColors;
    /**
     * the IntelliPid Raw SVG string
     */
    RawSvg?: string[];
    /**
     * All Linked Elements to this Object. Includes 3D, Pid, Drawing, Documents and Links
     */
    ElementLinks?: ElementLinks;
}
export declare class Attribute {
    private readonly uid;
    /**
     * The value of the attribute
     */
    Value: string;
    /**
     * The key of the attribute
     */
    Key: string;
    /**
     * Is this a custom Attribute
     */
    IsCustomAttribute: boolean;
    /**
     * Is this a chanable Attribute
     */
    IsChangableAttribute: boolean;
    /**
     * Update the Custom Attribute. First parameter is the new value. second is the username of the person updating
     */
    SetCustomAttribute: Set<{
        value: string;
        user: string;
    }>;
    /**
     * Update a Changable Attribute. This does not work with custom Attributes
     */
    SetAttribute: Set<string>;
    constructor(uid: string, key: string, value: string, isCustomAttribute: boolean, customAttributeDefinition: Definition, customAttributeSourceValue: string, target: Scene, isChangableAttribute: boolean);
}
//# sourceMappingURL=ModelObject.d.ts.map
```
</Objects/ModelObject.d.ts>

---

## Objects/Pdf.d.ts

<Objects/Pdf.d.ts>
```typescript
import { Model } from ".";
import { PdfInfo } from "../Util/BaseDataTypes";
import { ApiCommands } from "../Util";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
export declare class Pdf {
    readonly Info: PdfInfo;
    private readonly model;
    IsOpen: boolean;
    IsFocused: boolean;
    constructor(Info: PdfInfo, model: Model);
    /**
     * Open the PdfDrawing
     * @returns
     */
    openPdf(): Promise<import("..").ApiResponse>;
    /**
     * Open the PdfDrawing
     * @returns
     */
    closePdf(): Promise<import("..").ApiResponse>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Pdf.d.ts.map
```
</Objects/Pdf.d.ts>

---

## Objects/Printer.d.ts

<Objects/Printer.d.ts>
```typescript
import { ColorMode } from "../Util";
import { ApiResponse } from "../ResponseTypes";
import { IntelliPidDrawing } from "./IntelliPidDrawing";
export declare class Printer {
    private printerId;
    private constructor();
    static create(): Promise<Printer>;
    delete(): Promise<ApiResponse>;
    getPdf(): Promise<string>;
    addIntellipidPage(drawing: IntelliPidDrawing, printMode: ColorMode): Promise<ApiResponse>;
}
//# sourceMappingURL=Printer.d.ts.map
```
</Objects/Printer.d.ts>

---

## Objects/ProjectionSphereElement.d.ts

<Objects/ProjectionSphereElement.d.ts>
```typescript
import { Model } from "../Objects/Model";
import { ProjectionSphere, Vector3D } from "../Util";
export declare class ProjectionSphereElement {
    readonly projectionSphere: ProjectionSphere;
    private readonly model;
    constructor(projectionSphere: ProjectionSphere, model: Model);
    /**
     * Enter the Projection
     * @param opacity optional, is set overwrite the opacity value with the new value
     * @param rotation optional, enter a rotation to view the projection from
     * @returns
     */
    enterProjectionSphere(opacity?: number, rotation?: Vector3D): Promise<import("..").ApiResponse>;
    /**
     * Leave the current Projection
     * @returns
     */
    leaveProjectionSphere(): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=ProjectionSphereElement.d.ts.map
```
</Objects/ProjectionSphereElement.d.ts>

---

## Objects/Settings.d.ts

<Objects/Settings.d.ts>
```typescript
import { ApiCommands } from "../Util/Enums";
import { Get, GetSet } from "../Util/GetSet";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
export declare class Settings {
    /**
     * Return the current Ui Colors
     */
    UiColors: Get<{
        [key: string]: string;
    }>;
    /**
     * Set or get the Ui theme via the uid of the theme
     */
    CurrentUiTheme: GetSet<string>;
    /**
     * Returns the key and description for the available themes
     */
    AvailableUiThemes: Get<{
        id: string;
        description: string;
    }[]>;
    constructor();
    private getAvailableUiThemes;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Settings.d.ts.map
```
</Objects/Settings.d.ts>

---

## Objects/index.d.ts

<Objects/index.d.ts>
```typescript
export * from "./Camera";
export * from "./Layer2D";
export * from "./Layer3D";
export * from "./Model";
export * from "./IntelliPidDrawing";
export * from "./Events";
export * from "./ProjectionSphereElement";
export * from "./ClashContext";
export * from "./FilterOperation3D";
export * from "./FilterOperationPid";
export * from "./ModelObject";
export * from "./Printer";
export * from "./LocalStorage";
export * from "./AttributeTree";
export * from "./AuthenticationManager";
export * from "./Events";
export * from "./Model";
export * from "./Settings";
export * from "./FileOperations";
export * from "./Pdf";
//# sourceMappingURL=index.d.ts.map
```
</Objects/index.d.ts>

---

## ResponseTypes/ApiResponse.d.ts

<ResponseTypes/ApiResponse.d.ts>
```typescript
export declare class ApiResponse {
    ErrorCode: number;
    ErrorMessage: string;
    RequestId: number;
}
export declare class ApiResponseWithType<T> extends ApiResponse {
    ResultData: T;
    constructor();
}
//# sourceMappingURL=ApiResponse.d.ts.map
```
</ResponseTypes/ApiResponse.d.ts>

---

## ResponseTypes/Events.d.ts

<ResponseTypes/Events.d.ts>
```typescript
import { Intellipid, Vector2D, Vector3D } from "../Util/BaseDataTypes";
import { TargetEnum } from "../Util/Enums";
/**
 * @internal
 */
export declare enum ApiEvents {
    SelectionChanged = "SelectionChanged",
    PointerClicked = "PointerClicked",
    LinkClicked = "LinkClicked",
    LifeCycle = "LifeCycle",
    CustomAttributeValueChanged = "CustomAttributeValueChanged",
    AnimationTimestampChanged = "AnimationTimestampChanged",
    IntellipidSelectionChanged = "IntellipidSelectionChanged",
    AuthenticationContextChanged = "AuthenticationContextChanged",
    ClashComputationProgressChanged = "ClashComputationProgressChanged",
    StorageVariableChanged = "StorageVariableChanged"
}
/**
 * @internal
 */
export declare class PointerClickedEvent {
    PointerClicked: PointerClicked;
}
/**
 * @internal
 */
export declare class SelectionChangedEvent {
    SelectionChanged: SelectionChanged;
}
/**
 * @internal
 */
export declare class LinkClickedEvent {
    LinkClicked: LinkClicked;
}
/**
 * @internal
 */
export declare class CustomAttributeValueChangedEvent {
    CustomAttributeValueChanged: CustomAttributeValueChanged;
}
/**
 * @internal
 */
export declare class AnimationTimestampChangedEvent {
    AnimationTimestampChanged: AnimationTimestampChangedObject;
}
export declare class CustomAttributeValueChanged {
}
export declare class ClashComputationProgressChangedEvent {
    /**
     * Between 0 and 1
     */
    Progress: number;
    CurrentClashesFound: number;
    CurrentClashesToCandidatesRatio: number;
}
export declare class PointerClicked {
    Button: string;
    X: number;
    Y: number;
    ModelPosition?: Vector3D;
    IntelliPidPosition?: Vector2D;
    IntelliPid?: Intellipid;
}
export declare class SelectionChanged {
    Objects: string[];
}
export declare class LifeCycleEvent {
    LifeCycle: string;
    Source: TargetEnum;
}
export declare class LinkClicked {
    Url: string;
    Template: string;
    AssociatedObject: string;
}
export declare class AnimationTimestampChangedObject {
    Timestamp: AnimationTimestamp;
}
export declare class AnimationTimestamp {
    Start: string;
    End: string;
    Current: string;
    IsPlaying: boolean;
}
export declare class IntelliPidSelectionChangedEvent {
    IntellipidSelectionChanged: IntelliPidSelectionChanged;
}
export declare class IntelliPidSelectionChanged {
    Intellipid: Intellipid;
    Objects: string[];
}
export declare class AuthenticationContextChangedEvent {
    AuthenticationContextId: number;
    AccessToken: string;
    IdentityToken: string;
    ExpiresIn: number;
    ErrorMessage: string;
}
export declare class StorageVariableChangedEvent {
    Key: string;
}
//# sourceMappingURL=Events.d.ts.map
```
</ResponseTypes/Events.d.ts>

---

## ResponseTypes/GetObjects.d.ts

<ResponseTypes/GetObjects.d.ts>
```typescript
import { ApiSerializationContainer, AttributeTreeNodeType, BoundsInfo, CameraView, ClippingDescriptor, Definition, ExportCustomAttributes, FilesTreeObject, CatalogSymbol, IntelliPidDrawingInfo, ModelInfo, ObjectColors, ProjectInfo, ProjectionSphere, SnapInfo, TakeScreenshot, ExportableOptions, Bounds, Vector3D, FileDialogApiReturnType, GenericLoadFromFileResponseResultType, ElementLinks, Intellipid, PdfInfo } from "../Util";
export declare class GetObjects {
    Objects: string[];
}
export declare class GetSelectedObjects {
    Intellipid: Intellipid;
    SelectedObjects: string[];
}
export declare class GetObjectsAttributes {
    ObjectsAttributes: {
        [id: string]: {
            [key: string]: string;
        };
    };
}
export declare class GetObjectsBoundingBox {
    ObjectsBoundingBox: {
        [id: string]: BoundsInfo;
    };
}
export declare class GetObjectsColors {
    ObjectsColors: {
        [id: string]: ObjectColors;
    };
}
export declare class GetModelInfo {
    ModelInfo: ModelInfo[];
}
export declare class GetClippingInfoResult {
    Clipping: ClippingDescriptor;
}
export declare class GetObjectsSnapInfo {
    ObjectsSnapInfo: {
        [id: string]: SnapInfo;
    };
}
export declare class GetCameraView {
    CameraView: CameraView;
}
export declare class GetProjectInfo {
    ProjectInfo: ProjectInfo;
}
export declare class TakeScreenshotResult {
    TakeScreenshot: TakeScreenshot;
}
export declare class GetFilesTreeObject {
    FilesTreeObject: FilesTreeObject;
}
export declare class GetFilesTreeObjects {
    FilesTreeObjects: FilesTreeObject[];
}
export declare class GetTreeConfiguration {
    TreeConfiguration: string[];
}
export declare class GetVisibleAspects {
    VisibleAspects: string[];
}
export declare class GetLifeCycleState {
    LifeCycleState: LifeCycleState;
}
export declare class LifeCycleState {
    WaitingForModelSelection: number;
    ModelFinishedLoading: number;
    CustomAttributesFinishedLoading: number;
}
export declare class GetCustomAttributesConfiguration {
    GetCustomAttributeConfiguration: Definition[];
}
export declare class GetRawSvgPidObjects {
    RawSvgPidObjects: {
        [id: string]: string[];
    };
}
export declare class ExportCustomAttributesResult {
    ExportCustomAttributes: ExportCustomAttributes;
}
export declare class GetIntellipidDrawings {
    GetIntelliPidDrawings: {
        [id: string]: IntelliPidDrawingInfo;
    };
}
export declare class GetPdfInfo {
    GetPdfInfos: PdfInfo[];
}
export declare class GetTreeRootNode {
    GetTreeRootNode: AttributeTreeNodeType;
}
export declare class GetTreeFolderChildren {
    GetTreeFolderChildren: AttributeTreeNodeType[];
}
export declare class GetTreeFolderSiblings {
    GetTreeFolderSiblings: AttributeTreeNodeType[];
}
export declare class GetTreeNodesOfFolder {
    GetTreeNodesOfFolder: AttributeTreeNodeType[];
}
export declare class GetTreeStructure {
    GetTreeStructure: {
        [id: string]: AttributeTreeNodeType[];
    };
}
export declare class GetProjectionSpheres {
    ProjectionSpheres: ProjectionSphere[];
}
export declare class GetLanguage {
    Language: string;
}
export declare class GetFilesTreeContainerObject {
    FilesTreeContainerObject: FilesTreeContainerObject;
}
export declare class FilesTreeContainerObject {
    Container: ApiSerializationContainer;
}
export declare class GetWfsRemoteContent {
    /**
     * Base64
     */
    WfsRemoteContent: string;
}
export declare class OpenAuthenticationContextResult {
    AuthenticationContextId: number;
}
export declare class GetCatalogSymbols {
    Symbols: CatalogSymbol[];
}
export declare class GetFilesTreeContent {
    FilesTreeContent: string;
}
export declare class FilesTreeGetStateResponse {
    Name: string;
    Loading: boolean;
    Selected: boolean;
    Locked: boolean;
    Expanded: boolean;
    HasChanges: boolean;
    Exportable: ExportableOptions;
}
export declare class GetChangeableAttributesResponse {
    ChangeableAttributes: {
        [id: string]: {
            [key: string]: string;
        };
    };
}
export declare class GetClashes {
    Pairs: Clash[];
}
export declare class GetClashCandidates {
    Pairs: Clash[];
}
export declare class Clash {
    ElementA: string;
    ElementB: string;
    BoundsA: Bounds;
    BoundsB: Bounds;
    AspectA: string;
    AspectB: string;
    CollisionPointSample: Vector3D;
}
export declare class ClashCandidate {
    ElementA: string;
    ElementB: string;
}
export declare class GetPdfPrinter {
    PrinterId: number;
}
export declare class GetPdfPrinterResult {
    Pdf: string;
}
export declare class GetStorageVariable {
    Value: string;
}
export declare class GetStorageVariablesList {
    Variables: string[];
}
export declare class GetUiColors {
    UiColors: {
        [id: string]: string;
    };
}
export declare class GetUiThemes {
    CurrentId: string;
    UiThemes: {
        [id: string]: string;
    };
}
export declare class LoadFileApiReturnType {
    DataBase64: string;
    FileName: string;
    ResultType: FileDialogApiReturnType;
    ErrorMessage: string;
}
export declare class SaveFileApiReturnType {
    FileName: string;
    ResultType: FileDialogApiReturnType;
    ErrorMessage: string;
}
export declare class GenericLoadFromFileResponse {
    Status: GenericLoadFromFileResponseResultType;
    FileContentAsBase64: string;
    ErrorMessage: string;
}
export declare class GetModelAttributeValues {
    ModelAttributeValues: {
        [key: string]: string[];
    };
}
export declare class GetLinkedElements {
    Links: {
        [key: string]: ElementLinks;
    };
}
//# sourceMappingURL=GetObjects.d.ts.map
```
</ResponseTypes/GetObjects.d.ts>

---

## ResponseTypes/index.d.ts

<ResponseTypes/index.d.ts>
```typescript
export * from "./ApiResponse";
export * from "./GetObjects";
export * from "./Events";
//# sourceMappingURL=index.d.ts.map
```
</ResponseTypes/index.d.ts>

---

## Scenes/AppControlScene.d.ts

<Scenes/AppControlScene.d.ts>
```typescript
import { Scene } from "./Scene";
/**
 * Provides control over a AppControl Scene
 * @alpha
 */
export declare class AppControlScene extends Scene {
    /**
     * @internal
     * @param id
     */
    constructor(id: string);
}
//# sourceMappingURL=AppControlScene.d.ts.map
```
</Scenes/AppControlScene.d.ts>

---

## Scenes/Scene.d.ts

<Scenes/Scene.d.ts>
```typescript
import { ApiCommands, SceneType } from "../Util";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
/**
 * Basesclass of all Scenes
 */
export declare abstract class Scene {
    Id: string;
    constructor(Id: string);
    /**
     * Describes what type a scene is
     */
    SceneType: SceneType;
    /**
     * Load a colorfile via a file
     * @param file path to excel colorfile
     * @returns ApiResponse can be ignored and will likely change
     */
    loadColorFile(file: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Load a linkfile via a file
     * @param file path to excel linkfile
     * @returns ApiResponse can be ignored and will likely change
     */
    loadLinkFile(file: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Clears all Links
     * @returns ApiResponse can be ignored and will likely change
     */
    clearLinks(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Takes a screenshot and returns the base64
     * @param width Width of the output picture
     * @param height Height of the output picture
     * @param fieldOfView Field of View
     * @param hideUi Draw UI in picture
     * @param enableAntiAliasing Use AntiAliasing
     * @param enableTransparentBackground Draws the brackground transparent (only SHows the model)
     * @param modelInBestQuality Take the screenshot of the model in the best quality
     * @param format jpg or png
     * @returns
     */
    takeScreenshot(width: number, height: number, fieldOfView: number, hideUi: boolean, enableAntiAliasing: boolean, enableTransparentBackground: boolean, modelInBestQuality: boolean, format: string): Promise<import("../Util").TakeScreenshot>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Scene.d.ts.map
```
</Scenes/Scene.d.ts>

---

## Scenes/Scene3d.d.ts

<Scenes/Scene3d.d.ts>
```typescript
import { Camera, FilterOperation3d } from '../Objects';
import { Scene } from './Scene';
import { ClippingDescriptor, GetSet } from '../Util';
/**
 * 3D Scene
 */
export declare class Scene3d extends Scene {
    constructor(id: string);
    /**
     * The UI Cliping descriptor currently active
     */
    UiClippingDescriptor: GetSet<ClippingDescriptor>;
    /**
     * The default filter available
     * More filters can be created using {@link getNewFilter}
     */
    DefaultFilter: FilterOperation3d;
    /**
     * The Camera object for this scene
     */
    Camera: Camera;
    /**
         * The current Tree Configuration of this scene
         * This might move
         */
    TreeConfiguration: GetSet<string[]>;
    /**
     * Defines what aspects are currently visible
     */
    VisibleAspects: GetSet<string[]>;
    /**
     * Create a new Filteropration
     * @returns FilterOperation3d
     */
    getNewFilter(): FilterOperation3d;
    private intelliClip;
    private volumeClipByCoordinates;
}
//# sourceMappingURL=Scene3d.d.ts.map
```
</Scenes/Scene3d.d.ts>

---

## Scenes/ScenePid.d.ts

<Scenes/ScenePid.d.ts>
```typescript
import { Scene } from "./Scene";
import { FilterOperationPid } from "../Objects";
/**
 * 2D Scene
 */
export declare class ScenePid extends Scene {
    constructor(id: string);
    /**
     * the default filter that can be used. New Filters can be created using {@link getNewFilter}
     */
    DefaultFilter: FilterOperationPid;
    /**
     * Create a new Filteropration
     * @returns FilterOperationPid
     */
    getNewFilter(): FilterOperationPid;
}
//# sourceMappingURL=ScenePid.d.ts.map
```
</Scenes/ScenePid.d.ts>

---

## Scenes/index.d.ts

<Scenes/index.d.ts>
```typescript
export * from "./Scene";
export * from "./Scene3d";
export * from "./ScenePid";
export * from "./AppControlScene";
//# sourceMappingURL=index.d.ts.map
```
</Scenes/index.d.ts>

---

## Theme.d.ts

<Theme.d.ts>
```typescript
/**
 * Defines the Material UI Theme
 */
export declare class Theme {
    /**
     * Provides @mui/material/styles/ThemeOptions for use in AppControls. To not add Material UI as a requirement any type is returned here
     * It is safe to cast this to ThemeOptions in your code or directly provide it to createTheme function
    */
    static getTheme(): Promise<any>;
}
//# sourceMappingURL=Theme.d.ts.map
```
</Theme.d.ts>

---

## Util/BaseDataTypes.d.ts

<Util/BaseDataTypes.d.ts>
```typescript
import { CustomAttributeDataType, ExportableOptions, FeatureTypes, PdfTypes, ProjectionSphereType } from "./Enums";
export declare class Vector2D {
    X: number;
    Y: number;
    constructor(X: number, Y: number);
}
export declare class Vector3D {
    X: number;
    Y: number;
    Z: number;
    constructor(X: number, Y: number, Z: number);
}
export declare class Vector4D {
    X: number;
    Y: number;
    Z: number;
    W: number;
    constructor(X: number, Y: number, Z: number, W: number);
}
export declare class CameraView {
    Position: Vector3D;
    Rotation: Vector3D;
    constructor(Position: Vector3D, Rotation: Vector3D);
}
export declare class Bounds {
    Min: Vector3D;
    Max: Vector3D;
    Center?: Vector3D;
}
export declare class BoundsInfo {
    LowX: number;
    LowY: number;
    LowZ: number;
    HighX: number;
    HighY: number;
    HighZ: number;
}
export declare class ObjectColors {
    Current: {
        [id: string]: string;
    };
    Default: {
        [id: string]: string;
    };
}
export declare class Color {
    R: number;
    G: number;
    B: number;
    Alpha: number;
}
export declare class ClippingPlane {
    Near: number;
    Far: number;
}
export declare class Instance {
    Position: Vector3D;
    Scale: Vector3D;
    Rotation: Vector3D;
}
export declare class ModelInfo {
    Uri: string;
    AvailableAttributes: string[];
    AvailableAspects: string[];
}
export declare class ProjectInfo {
    ConversionDateUtc: string;
    ExpirationDateUtc: string;
    MinimumSupportedMajorVersion: number;
    MaximumSupportedMajorVersion: number;
}
export declare class SnapInfo {
    Points: Vector3D[];
    Edges: Vector3D[][];
    Circles: SnapCircle[];
}
export declare class SnapCircle {
    Center: Vector3D;
    Radius: number;
    Normal: Vector3D;
}
export declare class TakeScreenshot {
    ImageData: number[];
}
export declare class FilesTreeObject {
    Name: string;
    Id: number;
    Type: FeatureTypes;
}
export declare class ChangeSet {
    Changes: ChangeSetLine[];
}
export declare class ChangeSetLine {
    Id: number;
    SourceValue: string;
    CustomValue: string;
    User: string;
    Timestamp: string;
    IsSessionChange: boolean;
}
export declare class ExportCustomAttributes {
    Changes: Change[];
}
export declare class Change extends ChangeSetLine {
}
export declare class Definition {
    Name: string;
    Mode: CustomAttributeDataType;
    Parameter1: string;
    Parameter2: string;
    Parameter3: string;
    ReadOnly: boolean;
    SourceDefinitions: CustomAttributeSourceDefinition[];
}
export declare class CustomAttributeSourceDefinition {
    Id: number;
    SourceAttribute: string;
    Filter: string;
    DefaultValue: string;
}
export declare class IntelliPidDrawingInfo {
    Identifier: string;
    IsOpen: boolean;
    IsFocused: boolean;
}
export declare class PdfInfo {
    Document: PdfDocument;
    IsOpen: boolean;
    IsFocused: boolean;
}
export declare class AttributeTreeNodeType {
    Id: string;
    Name: string;
    Type: string;
}
export declare class Quaternion {
    X: number;
    Y: number;
    Z: number;
    W: number;
    constructor(X: number, Y: number, Z: number, W: number);
    static fromEuler(value: Vector3D): Quaternion;
}
export declare class ProjectionSphere {
    Guid: string;
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Type: ProjectionSphereType;
}
export declare class CatalogSymbol {
    Path: string;
    Icon: string;
    /** 3D only */
    Variant: string;
}
export declare class FileTreeState {
    /**
     * When null - keep current value
     */
    Name?: string;
    /**
     * When null - keep current value
     */
    Loading?: boolean;
    /**
     * When null - keep current value
     */
    Selected?: boolean;
    /**
     * When null - keep current value
     */
    Locked?: boolean;
    /**
     * When null - keep current value
     */
    Expanded?: boolean;
    /**
     * When null - keep current value
     */
    HasChanges?: boolean;
    /**
     * When null - keep current value
     */
    Exportable?: ExportableOptions;
}
export declare class ElementLinks {
    ThreeDUids: string[];
    DocumentLinks: PdfDocument[];
    DrawingLinks: PdfDocument[];
    UrlLinks: UrlLink[];
    PidLinks: PidLink[];
}
export declare class UrlLink {
    Name: string;
    Url: string;
    ColorHex: string;
}
export declare class PidLink {
    IntelliPid: IntelliPidDrawingInfo;
    PidUids: string[];
}
export declare class Intellipid {
    DisplayName: string;
    Path: string;
}
export declare class PdfDocument {
    DisplayName: string;
    Path: string;
    PhysicalFileName: string;
    PdfType: PdfTypes;
}
//# sourceMappingURL=BaseDataTypes.d.ts.map
```
</Util/BaseDataTypes.d.ts>

---

## Util/CustomAttributes.d.ts

<Util/CustomAttributes.d.ts>
```typescript
import { ApiResponse } from "../ResponseTypes";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ApiCommands, UpdateModes } from "../Util/Enums";
import { Model } from "../Objects";
import { ChangeSetLine, Definition } from "../Util";
/**
 * Contains the file variants. These might be made unavailable in future versions and replaced by new commands
 * */
export declare class CustomAttributeLegacy {
    private customAttributes;
    constructor(customAttributes: CustomAttributes);
    loadCustomAttributeConfigurationFile(file: string): Promise<ApiResponse>;
    loadCustomAttributeDataFile(file: string): Promise<ApiResponse>;
}
export declare class CustomAttributes {
    private model;
    constructor(model: Model);
    get Legacy(): CustomAttributeLegacy;
    clearCustomAttributes(): Promise<ApiResponse>;
    loadCustomAttributeConfigurationBase64(contentBase64: string): Promise<ApiResponse>;
    loadCustomAttributeDataBase64(contentBase64: string): Promise<ApiResponse>;
    importCustomAttributeChangeSet(changeSets: ChangeSetLine[], showLoadScreen: boolean): Promise<ApiResponse>;
    setCustomAttributeConfiguration(definitions: Definition[], updateMode: UpdateModes): Promise<ApiResponse>;
    getCustomAttributeConfiguration(): Promise<Definition[]>;
    exportCustomAttributes(exportAll: boolean): Promise<import("./BaseDataTypes").ExportCustomAttributes>;
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=CustomAttributes.d.ts.map
```
</Util/CustomAttributes.d.ts>

---

## Util/Enums.d.ts

<Util/Enums.d.ts>
```typescript
/**
 * @deprecated
 * Old UPV Target codes
 */
export declare enum TargetEnum {
    Undefined = "0",
    ThreeD = "1",
    Intelli = "10",
    Browser = "11"
}
/**
 * how Queries will be combined
 */
export declare enum CombineModes {
    And = "AND",
    Or = "OR"
}
/**
 * The sceneType defines what this scene contains
 */
export declare enum SceneType {
    Undefined = "0",
    ThreeD = "1",
    IntelliPid = "10",
    Browser = "11"
}
export declare enum UpdateModes {
    Append = 0,
    Full = 1
}
export declare enum CustomAttributeDataType {
    Calculation = 0,
    CodeList = 1,
    FreeText = 2,
    Numeric = 3,
    Unknown = 4,
    Color = 5
}
export declare enum FeatureTypes {
    Unknown = "Unknown",
    Model = "Model",
    Sketch = "Sketch",
    Markup = "Markup",
    IntellipidSketch = "IntellipidSketch",
    AnimationConfiguration = "AnimationConfiguration",
    AnimationDefinition = "AnimationDefinition",
    Catalogue = "Catalogue",
    Symbol = "Symbol",
    MarkupContainer = "MarkupContainer",
    Orm = "Orm",
    Spraying = "Spraying",
    Comment = "Comment",
    View = "View",
    Package = "Package",
    Folder = "Folder",
    CommentSvg = "CommentSvg",
    Screenshot = "Screenshot",
    Photo = "Photo",
    TwoDToThreeD = "TwoDToThreeD",
    PointOfInterest = "PointOfInterest",
    Drawing = "Drawing",
    Files = "Files",
    MeasurementSnapshot = "MeasurementSnapshot",
    IntelliPidLegendPositions = "IntelliPidLegendPositions",
    IsolationPlan = "IsolationPlan",
    CataloguePlacement = "CataloguePlacement",
    DrawingComment = "DrawingComment",
    AppControl = "AppControl",
    Animation = "Animation",
    PIDSketch = "PIDSketch",
    Report = "Report"
}
export declare enum ProjectionSphereType {
    Picture = 0,
    Panorama = 1
}
/**
 * @internal
 */
export declare enum ApiCommands {
    SetCameraView = "SetCameraView",
    GetCameraView = "GetCameraView",
    SetClippingPlane = "SetClippingPlane",
    SetCameraViewLookAtTarget = "SetCameraViewLookAtTarget",
    ResetView = "ResetView",
    GetObjects = "GetObjects",
    GetSelectedObjects = "GetSelectedObjects",
    GetObjectsAttributes = "GetObjectsAttributes",
    GetObjectsBoundingBox = "GetObjectsBoundingBox",
    GetObjectsColors = "GetObjectsColors",
    GetObjectsSnapInfo = "GetObjectsSnapInfo",
    GetObjectsChangeableAttributes = "GetObjectsChangeableAttributes",
    SetAttribute = "SetAttribute",
    Select = "Select",
    ClearSelection = "ClearSelection",
    Fit = "Fit",
    Color = "Color",
    ClearColor = "ClearColor",
    Highlight = "Highlight",
    ClearHighlight = "ClearHighlight",
    ShowOnly = "ShowOnly",
    SetVisibility = "SetVisibility",
    GetClippingInfo = "GetClippingInfo",
    VolumeClip = "VolumeClip",
    VolumeClipByCoordinates = "VolumeClipByCoordinates",
    IntelliClip = "IntelliClip",
    ClearClipping = "ClearClipping",
    SearchFallback = "SearchFallback",
    GetIntelliPidRawSvgData = "GetIntelliPidRawSvgData",
    GetLinkedElements = "GetLinkedElements",
    PlaceObj = "PlaceObj",
    DrawLine = "DrawLine",
    PlaceText = "PlaceText",
    PlaceArc = "PlaceArc",
    PlacePly = "PlacePly",
    DestroyDrawing = "DestroyDrawing",
    GetModelInfo = "GetModelInfo",
    GetProjectInfo = "GetProjectInfo",
    LoadConfigFile = "LoadConfigFile",
    ClearCustomAttributes = "ClearCustomAttributes",
    ImportCustomAttributeChangeSet = "ImportCustomAttributeChangeset",
    LoadCustomAttributeConfigurationFile = "LoadCustomAttributeConfigurationFile",
    LoadCustomAttributeDataFile = "LoadCustomAttributeDataFile",
    SetCustomAttributeConfiguration = "SetCustomAttributeConfiguration",
    GetCustomAttributeConfiguration = "GetCustomAttributeConfiguration",
    ExportCustomAttributes = "ExportCustomAttributes",
    GetIntelliPidDrawings = "GetIntelliPidDrawings",
    OpenIntelliPidDrawings = "OpenIntelliPidDrawings",
    GetProjectionSpheres = "GetProjectionSpheres",
    GetCurrentProjectionSphere = "GetCurrentProjectionSphere",
    EnterProjectionSphere = "EnterProjectionSphere",
    LeaveProjectionSphere = "LeaveProjectionSphere",
    GetAllPids = "GetAllPids",
    GetOpenPids = "GetOpenPids",
    GetActivePid = "GetActivePid",
    OpenPid = "OpenPid",
    ClosePid = "ClosePid",
    GetModelAttributeValues = "GetModelAttributeValues",
    GetAllPdfs = "GetAllPdfs",
    GetOpenPdfsTabs = "GetOpenPdfsTabs",
    GetActivePdfTab = "GetActivePdfTab",
    OpenPdf = "OpenPdf",
    ClosePdf = "ClosePdf",
    TakeScreenshot = "TakeScreenshot",
    TakeAndSaveScreenShot = "TakeAndSaveScreenshot",
    GetTreeConfiguration = "GetTreeConfiguration",
    SetTreeConfiguration = "SetTreeConfiguration",
    GetVisibleAspects = "GetVisibleAspects",
    SetVisibleAspects = "SetVisibleAspects",
    LoadColorFile = "LoadColorFile",
    LoadLinkFile = "LoadLinkFile",
    ClearLinks = "ClearLinks",
    FilesTreeDeleteObject = "FilesTreeDeleteObject",
    GetFilesTreeChildren = "GetFilesTreeChildren",
    GetFilesTreeSiblings = "GetFilesTreeSiblings",
    FilesTreeMoveObject = "FilesTreeMoveObject",
    FilesTreeImportContainer = "FilesTreeImportContainer",
    GetFilesTreeContent = "GetFilesTreeContent",
    FilesTreeGetContainer = "FilesTreeGetContainer",
    SetMarkupTool = "SetMarkupTool",
    GetIntelliPidElementsHitByMarkup = "GetIntelliPidElementsHitByMarkup",
    FilesTreeClose = "FilesTreeClose",
    FilesTreeCreateMarkup = "FilesTreeCreateMarkup",
    FilesTreeEdit = "FilesTreeEdit",
    FilesTreeShow = "FilesTreeShow",
    FilesTreeView = "FilesTreeView",
    FilesTreeCreateSketch = "FilesTreeCreateSketch",
    FilesTreeSetState = "FilesTreeSetState",
    FilesTreeGetState = "FilesTreeGetState",
    FilesTreeCreateComment = "FilesTreeCreateComment",
    GetFilesTreeRoot = "GetFilesTreeRoot",
    FilesTreeCreateFolder = "FilesTreeCreateFolder",
    PlacePoi = "PlacePoi",
    PlacePoiWithComment = "PlacePoiWithComment",
    SetPidSketchTool = "SetPidSketchTool",
    AddEventCallback = "AddEventCallback",
    RemoveEventCallback = "RemoveEventCallback",
    GetLifeCycleState = "GetLifeCycleState",
    ShowMessage = "ShowMessage",
    FocusViewer = "FocusViewer",
    QuitApplication = "QuitApplication",
    CacheModel = "CacheModel",
    LoadModel = "LoadModel",
    DeleteModel = "DeleteModel",
    ActivateLicense = "ActivateLicense",
    DeactivateLicense = "DeactivateLicense",
    LoadFile = "LoadFile",
    ProcessFile = "ProcessFile",
    LoadSketch = "LoadSketch",
    LoadPackageFile = "LoadPackageFile",
    ExportPackageFile = "ExportPackageFile",
    ClearAuthConfig = "ClearAuthConfig",
    SetAuthConfig = "SetAuthConfig",
    OpenPath = "OpenPath",
    SetLanguage = "SetLanguage",
    GetLanguage = "GetLanguage",
    GetTreeRootNode = "GetTreeRootNode",
    GetTreeFolderChildren = "GetTreeFolderChildren",
    GetTreeFolderSiblings = "GetTreeFolderSiblings",
    GetTreeNodesOfFolder = "GetTreeNodesOfFolder",
    GetTreeStructure = "GetTreeStructure",
    WfsLoadRemote = "WfsLoadRemote",
    GetWfsRemoteContent = "GetWfsRemoteContent",
    GetRenderStreamingInfo = "GetRenderStreamingInfo",
    WfsClearAttached = "WfsClearAttached",
    OpenAuthenticationContext = "OpenAuthenticationContext",
    CloseAuthenticationContext = "CloseAuthenticationContext",
    StartLogoutAuthenticationContext = "StartLogoutAuthenticationContext",
    SelectSymbolForPlacement = "SelectSymbolForPlacement",
    GetCatalogSymbols = "GetCatalogSymbols",
    PlacePrimitive = "PlacePrimitive",
    PlaceSymbol = "PlaceSymbol",
    DeleteSketchItem = "DeleteSketchItem",
    StartClashComputation = "StartClashComputation",
    GetClashCandidates = "GetClashCandidates",
    GetClashResults = "GetClashResults",
    CancelClashComputation = "CancelClashComputation",
    PdfPrinterCreate = "PdfPrinterCreate",
    PdfPrinterDelete = "PdfPrinterDelete",
    PdfPrinterPrintToBase64 = "PdfPrinterPrintToBase64",
    PdfPrinterAddIntelliPidPage = "PdfPrinterAddIntelliPidPage",
    SetStorageVariable = "SetStorageVariable",
    GetStorageVariable = "GetStorageVariable",
    DeleteStorageVariable = "DeleteStorageVariable",
    GetStorageVariablesList = "GetStorageVariablesList",
    GetUiColors = "GetUiColors",
    GetUiThemes = "GetUiThemes",
    SetActiveUiTheme = "SetActiveUiTheme",
    SaveFileDialog = "SaveFileDialog",
    LoadFileDialog = "LoadFileDialog",
    GenericLoadFromFile = "GenericLoadFromFile"
}
export declare enum PackageConditionTypes {
    None = "None",
    IntelliVolume = "IntelliVolume",
    Group = "Group",
    Attribute = "Attribute",
    Volume = "Volume"
}
export declare enum ConsolidationMode {
    Base = "Base",
    AndNot = "AndNot",
    Or = "Or",
    And = "And"
}
export declare enum AttributeConditionComparison {
    Equals = "==",
    NotEquals = "!=",
    Like = "Like",
    NotLike = "Not Like"
}
export declare enum VolumeConditionMode {
    Includes = "Includes",
    Overlaps = "Overlaps",
    NotIncludes = "Not Includes",
    NotOverlaps = "Not Overlaps"
}
export declare enum PointOfInterestType {
    Sphere = 0,
    CustomMesh = 1
}
export declare enum ClippingMode {
    None = 0,
    Volume = 1,
    GridMeasure = 2,
    Intelli = 3
}
export declare enum MarkupMode {
    None = 0,
    Line = 1,
    FreeHand = 2,
    Rectangle = 3,
    Oval = 4,
    Text = 5,
    Erase = 6,
    OrthogonalLine = 7,
    Move = 8
}
export declare enum PidSketchToolMode {
    None = 0,
    Routing = 4,
    Rectangle = 5,
    Circle = 6,
    Valve = 7,
    Cloud = 13,
    BreakLine = 99,
    UnBreakLine = 100,
    Copy = 101,
    Rotate = 102,
    Undo = 103,
    Redo = 104
}
export declare enum ExportableOptions {
    Inherit = 0,
    Export = 1,
    Ignore = 2
}
export declare enum ColorMode {
    Default = 0,
    AsModified = 1,
    Original = 2
}
export declare enum PrimitiveType {
    GroundPlate = 300,
    Column = 310,
    Beam = 320,
    Slab = 340,
    Cube = 100,
    EquipmentVertical = 102,
    EquipmentHorizontal = 101,
    Sphere = 1050,
    Platform = 200,
    CustomObj = 9999
}
export declare enum FileDialogApiReturnType {
    Cancelled = 0,
    Ok = 1,
    Error = 2
}
export declare enum ClashMode {
    /**
     *
     */
    WithinQueryOnly = 0,
    /**
     *
     */
    QueryWithFullModel = 1,
    /**
     *
     */
    PackageAAgainstPackageBWithinQuery = 2
}
export declare enum GenericLoadFromFileResponseResultType {
    Ok = 0,
    FileNotFound = 1,
    FileNotAllowed = 2,
    OtherError = 3,
    Undefined = 4
}
export declare enum PdfTypes {
    All = 0,
    Document = 1,
    Drawing = 2
}
//# sourceMappingURL=Enums.d.ts.map
```
</Util/Enums.d.ts>

---

## Util/GetSet.d.ts

<Util/GetSet.d.ts>
```typescript
export declare class Get<T> {
    private readonly getFunction;
    constructor(getFunction: () => Promise<T>);
    /**
     * Retrieves the value asynchronous
     * @returns
     */
    get(): Promise<T>;
}
export declare class Set<T> {
    private readonly setFunction;
    constructor(setFunction: (value: T) => Promise<void>);
    /**
     * Sets the Value asynchronous
     * @param value
     * @returns
     */
    set(value: T): Promise<void>;
}
export declare class GetSet<T> {
    private readonly getFunction;
    private readonly setFunction;
    constructor(getFunction: () => Promise<T>, setFunction: (value: T) => Promise<void>);
    /**
     * Retrieves the value asynchronous
     * @returns
     */
    get(): Promise<T>;
    /**
     * Sets the Value asynchronous
     * @param value
     * @returns
     */
    set(value: T): Promise<void>;
}
//# sourceMappingURL=GetSet.d.ts.map
```
</Util/GetSet.d.ts>

---

## Util/ParameterBase.d.ts

<Util/ParameterBase.d.ts>
```typescript
import { AttributeConditionComparison, Bounds, ChangeSet, ClashMode, ClippingMode, Color, ColorMode, ConsolidationMode, Definition, FeatureTypes, FileTreeState, Instance, MarkupMode, PackageConditionTypes, PdfTypes, PidSketchToolMode, PointOfInterestType, PrimitiveType, UpdateModes, Vector3D, VolumeConditionMode } from ".";
export declare class ParameterBase {
    ClippingFilter?: ClippingDescriptor;
    DrawLine?: DrawLineParameter;
    PlaceText?: PlaceTextParameter;
    PlaceArc?: PlaceArcParameter;
    PlacePly?: PlacePlyParameter;
    PlaceObj?: PlaceObjParameter;
    PlacePoi?: PlacePoiParameter;
    PlacePoIWithComment?: PoIWithCommentParameter;
    ImportCustomAttributeChangeSet?: ImportCustomAttributeChangeSetParameter;
    SetCustomAttributeConfiguration?: SetCustomAttributeConfigParameter;
    ExportCustomAttributes?: ExportCustomAttributesParameter;
    LoadCustomAttributeConfiguration?: LoadCustomAttributeConfigurationFileParameter;
    LoadCustomAttributeDataFile?: LoadCustomAttributeDataFileParameter;
    IntelliPidDrawingFilter?: string[];
    ProcessFile?: ProcessFileParameter;
    FilesTreeImportContainer?: FilesTreeImportContainerParameter;
    PackageFilter?: PackageFilterParameter;
    SetMarkupTool?: SetMarkupToolParameter;
    OpenAuthenticationContext?: OpenAuthenticationContextParameter;
    SetPidSketchTool?: SetPidSketchToolParameter;
    FilesTreeSetState?: FilesTreeSetStateParameter;
    GetFilesTreeContent?: GetFilesTreeContentParameter;
    FilesTreeCreateComment?: FilesTreeCreateCommentParameter;
    StartClashComputation?: GetClashesParameter;
    AddPidToPdfPrinter?: AddPidToPdfPrinterParameter;
    PlacePrimitive?: PlacePrimitiveParameter;
    PlaceSymbol?: PlaceSymbolParameter;
    LoadFileDialog?: LoadFileDialogParameters;
    SaveFileDialog?: SaveFileDialogParameters;
    PdfDocument?: PdfDocumentParameter;
}
export declare class ClippingDescriptor {
    Mode: ClippingMode;
    VolumeClipping?: VolumeClippingDescriptor;
    IntelliClipping?: IntelliClippingDescriptor;
}
export declare class VolumeClippingDescriptor {
    Bounds: Bounds;
}
export declare class IntelliClippingDescriptor {
    Elements: string[];
    Offset?: number;
}
export declare class DrawLineParameter {
    DrawingId: string;
    Vertices: Vector3D[];
    Width: number;
    Color: Color;
}
export declare class PlaceTextParameter {
    DrawingId: string;
    Position: Vector3D;
    EulerRotation: Vector3D;
    Text: string;
    Color: Color;
    Size: number;
    TestMode: boolean;
}
export declare class PlaceArcParameter {
    DrawingId: string;
    Position: Vector3D;
    EulerRotation: Vector3D;
    Color: Color;
    Angle: number;
    Radius: number;
}
export declare class PlacePlyParameter {
    DrawingId: string;
    Vertices: Vector3D[];
    Color: Color;
}
export declare class PlaceObjParameter {
    DrawingId: string;
    Instances: Instance[];
    ObjLocalPath: string;
    SuppressLoadingScreen: boolean;
}
export declare class PlacePoiParameter {
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Links: Link[];
    Attributes: AttributePoi[];
    FilePath: string;
    Color: Color;
    Diameter: number;
    Type: PointOfInterestType;
    ParentId: number;
}
export declare class PoIWithCommentParameter extends PlacePoiParameter {
    Text: string;
    Offset: number;
}
export declare class Link {
    Name: string;
    Url: string;
}
export declare class AttributePoi {
    Key: string;
    Value: string;
}
export declare class LoadCustomAttributeConfigurationFileParameter {
    ContentBase64: string;
}
export declare class LoadCustomAttributeDataFileParameter {
    ContentBase64: string;
}
export declare class ImportCustomAttributeChangeSetParameter {
    ChangeSet: ChangeSet;
    ShowLoadScreen: boolean;
}
export declare class SetCustomAttributeConfigParameter {
    GeneralDefinitions: Definition[];
    UpdateMode: UpdateModes;
}
export declare class ExportCustomAttributesParameter {
    ExportAllAttributes: boolean;
}
export declare class ProcessFileParameter {
    ContentBase64: string;
    SuppressDefaultAction: boolean;
}
export declare class FilesTreeImportContainerParameter {
    Container: ApiSerializationContainer;
    ParentId: number;
    TargetId?: number;
}
export declare class ApiSerializationContainer {
    Info: ApiMetadata;
    Content: string;
    FileDependenciesBase64: {
        [key: string]: string;
    };
    PreviewPicturesBase64: {
        [key: string]: string;
    };
}
export declare class ApiMetadata {
    Identifier: string;
    VersionIdentifier: string;
    Name: string;
    FeatureType: FeatureTypes;
    MajorVersion: number;
    MinorVersion: number;
    ViewerVersion: string;
    CreatedDate: Date;
}
export declare class PackageFilterParameter {
    Package: Package;
}
export declare class Package {
    /** Only for fit internal Data structure */
    Name: string;
    /** Conditions. Use The Helper functions to create these */
    Conditions: PackageCondition[];
}
/** Please use the static Helper functions to create the Conditions */
export declare class PackageCondition {
    Type: PackageConditionTypes;
    Parameters: (string | number)[];
    SubConditions: PackageCondition[];
    Consolidation: ConsolidationMode;
    /**
     * Create a Attribute Condition
     */
    static createAttributeCondition(mode: ConsolidationMode, key: string, conditionComparision: AttributeConditionComparison, value: string): PackageCondition;
    /**
     * Create a Volume condition that contains a min and max folder
     */
    static createVolumeCondition(mode: ConsolidationMode, volumeMode: VolumeConditionMode, min: Vector3D, max: Vector3D): PackageCondition;
    /**
     * Create a group Conditions that contains multiple Conditions
     */
    static createGroupCondition(mode: ConsolidationMode, packageConditions: PackageCondition[]): PackageCondition;
    /**
     * Create a Intelli Group Condition that supports usage of a radius
     */
    static createIntelliGroupCondition(mode: ConsolidationMode, packageConditions: PackageCondition[], radius: number): PackageCondition;
}
export declare class SetMarkupToolParameter {
    Mode: MarkupMode;
    Size: number;
    MarkupColor: Color;
}
export declare class OpenAuthenticationContextParameter {
    OidcConfig: string;
    OidcConfigBrowserBasedViewing: string;
}
export declare class SetPidSketchToolParameter {
    Mode: PidSketchToolMode;
    SketchColor?: Color;
}
export declare class FilesTreeSetStateParameter extends FileTreeState {
}
export declare class GetFilesTreeContentParameter {
    /**
     * When set will only export included feature types
     */
    FeatureTypeFilter?: FeatureTypes[];
    /**
     * Set the exported root node
     */
    RootNode?: number;
    /**
     *  When set only nodes explicitly contained in the list will be exported <br/>
     *  Make sure to include the predecessor folder of an included node as well
     */
    IncludedNodes?: number[];
    /**
     * When set to true will export all nodes regardless of Exportable property
     */
    ForceExport?: boolean;
}
export declare class FilesTreeCreateCommentParameter {
    /**
     * Specify Uid to create comment for
     */
    Uid?: string;
    /**
     * how far away from the element should the comment be placed
     */
    Offset?: number;
}
export declare class GetClashesParameter {
    /**
     * The tolerance. The default value is 0.001
     */
    Tolerance?: number;
    /**
     * Which Aspects should be used to only search through. If Empty all will be used
     */
    AspectsToInclude?: string[];
    /**
     * Which Aspects should be ignored. If Empty none will be ignored
     */
    AspectsToIgnore?: string[];
    /**
     * Should Sketches be included. Default = false
     */
    IncludeSketches?: boolean;
    /**
     * The Mode of the clash Operation
     */
    Mode: ClashMode;
    /**
     * Only compute Canidates but skip Clash detection. Default = false
     */
    ComputeCandidatesOnly?: boolean;
    PackageA?: PackageFilterParameter;
    PackageB?: PackageFilterParameter;
}
export declare class AddPidToPdfPrinterParameter {
    DrawingPath: string;
    PrintMode: ColorMode;
}
export declare class PlaceSymbolParameter {
    Path: string;
    Variant: string;
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Attributes: AttributeKeyValue[];
}
export declare class PlacePrimitiveParameter {
    Type: PrimitiveType;
    Name: string;
    Position: Vector3D;
    Rotation: Vector3D;
    Attributes: AttributeKeyValue[];
    Parameters: AttributeKeyValue[];
}
export declare class AttributeKeyValue {
    Key: string;
    Value: string;
}
export declare class SaveFileDialogParameters {
    Extensions: string;
    DefaultName: string;
    DataBase64: string;
}
export declare class LoadFileDialogParameters {
    DefaultName: string;
    Extensions: string;
}
export declare class PdfDocumentParameter {
    Path: string;
    PhysicalFileName: string;
    DisplayName: string;
    PdfType: PdfTypes;
}
//# sourceMappingURL=ParameterBase.d.ts.map
```
</Util/ParameterBase.d.ts>

---

## Util/index.d.ts

<Util/index.d.ts>
```typescript
export * from "./BaseDataTypes";
export * from "./ParameterBase";
export * from "./GetSet";
export * from "./Enums";
export * from "./CustomAttributes";
//# sourceMappingURL=index.d.ts.map
```
</Util/index.d.ts>

---

## index.d.ts

<index.d.ts>
```typescript
export * from "./Application";
export * from "./Theme";
export * from "./FilesTree";
export * from "./Scenes";
export * from "./Util";
export * from "./ResponseTypes";
export * from "./Objects";
//# sourceMappingURL=index.d.ts.map
```
</index.d.ts>

---

