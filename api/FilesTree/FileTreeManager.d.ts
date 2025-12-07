import { FileTreeElement } from "./FileTreeElement";
import { Color, FeatureTypes, FilesTreeImportContainerParameter, PointOfInterestType, Vector3D } from "../Util";
import { FileTreePointOfInterest } from "./FileTreePointOfInterest";
import { FileTreeSketch } from "./FileTreeSketch";
import { FileTreeModel } from "./FileTreeModel";
import { FileTreeFolder } from "./FileTreeFolder";
import { FileTreeComment } from "./FileTreeComment";
import { FileTreePIDSketch } from "./FileTreePIDSketch";
import { FileTreeCommentSVG } from "./FileTreeCommentSVG";
import { FileTreeDrawing } from "./FileTreeDrawing";
/**
 * @deprecated
 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
 * */
export declare class FileTreeManagerLegacy {
    private manager;
    constructor(manager: FileTreeManager);
    /**
     *
     * @deprecated might be removed in future from wrapper
     * @param path
     * @returns
     */
    loadSketch(path: string, viewName?: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @deprecated might be removed in future from wrapper
     * @param path
     * @returns
     */
    loadPackageFile(path: string, replace?: boolean): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @deprecated might be removed in future from wrapper
     * @param path
     * @returns
     */
    exportPackageFile(path: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @deprecated might be removed in future from wrapper and replaced with a new function
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
     * @param color the color range in this case for RGBA is between 0-255 despite normal colors being between 0-1
     * @param diameter size of the poi in meters
     * @param attributes define attributes on the poi
     * @param links define links on the poi
     * @param type Use Custommesh and customMeshPath to provide a custom mesh other then the sphere
     * @param customMeshPath path to the custom mesh in obj format. Can be a filepath or website path
     * @returns
     */
    createPointOfInterest(parent: FileTreeFolder, name: string, position: Vector3D, rotation: Vector3D, color: Color, diameter: number, attributes?: {
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
     * @param parent
     * @param name
     * @param uid if nothing provided, the selected element is used
     * @param offset the offset of the comment from the object
     * @param commentPosition Position if the comment. If not provided it will use the offset
     * @param leaderLineEndPosition Position of the leader line end position. If not provided this is the center of the object
     * @returns
     */
    createComment(parent: FileTreeFolder | FileTreeSketch | FileTreePIDSketch | FileTreePointOfInterest, name: string, uid?: string, offset?: number, commentPosition?: Vector3D, leaderLineEndPosition?: Vector3D): Promise<FileTreeComment | FileTreeCommentSVG>;
    /**
     * Can be used to create a drawing in the filestree
     * @param parent
     * @param name
     * @param templateName available templates can be retrieved via the DrawingTemplates on the Model
     * @param useColors
     * @param useSelectedObjectsOnly
     * @returns
     */
    createDrawing(parent: FileTreeFolder, name: string, templateName: string, useColors: boolean, useSelectedObjectsOnly: boolean): Promise<FileTreeDrawing>;
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