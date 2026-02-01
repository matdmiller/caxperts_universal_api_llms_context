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