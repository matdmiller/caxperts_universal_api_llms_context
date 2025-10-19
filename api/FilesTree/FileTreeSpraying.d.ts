import { FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeSpraying extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Exports a Sketch as a Base64 UPVC file
     * @returns
     */
    exportAsUpvcBase64(): Promise<string>;
}
//# sourceMappingURL=FileTreeSpraying.d.ts.map