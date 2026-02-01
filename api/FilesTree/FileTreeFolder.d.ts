import { FileTreeElement } from "./FileTreeElement";
import { FeatureTypes, FilesTreeImportBehaviour } from "../Util";
export declare class FileTreeFolder extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /***
     * Load UPVF file from a base64 string into UPV under the curent folder
     * @param upfvBase64 base64 upvf content to load
     * @param suppressDefaultAction if only one element is in the UPVF open it by default if this is set to false (default is true).
     * @param overwriteFoldersBehavior by default if the same folder already exists we will keepBoth but this behavior can be changed with this parameter. Replace for Folders behaves like a merge not a delete/create
     * @param overwriteNodesBehavior by default if the same folder already exists we will keepBoth but this behavior can be changed with this parameter
     * @param keepFolderExpandStates By default if an element is changed the containing folder will be expanded. With this option this can be supressed
     * @param overwriteEnableUi if enabled the user will be asked as if they started a manuell import
     * @returns
     */
    loadUPVF(upfvBase64: string, suppressDefaultAction?: boolean, overwriteFoldersBehavior?: FilesTreeImportBehaviour, overwriteNodesBehavior?: FilesTreeImportBehaviour, keepFolderExpandStates?: boolean, overwriteEnableUi?: boolean): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=FileTreeFolder.d.ts.map