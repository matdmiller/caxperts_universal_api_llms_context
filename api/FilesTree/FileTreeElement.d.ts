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
    constructor(_id: number, _name: string, _type: FeatureTypes);
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