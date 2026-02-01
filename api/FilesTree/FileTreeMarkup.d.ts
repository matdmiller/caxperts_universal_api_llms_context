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