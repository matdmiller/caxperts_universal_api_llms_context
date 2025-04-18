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