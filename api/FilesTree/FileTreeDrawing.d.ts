import { GetExportedDrawing } from "../ResponseTypes";
import { DrawingExportType, FeatureTypes } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeDrawing extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Export a drawing to base64. Specify in which format you want the export to be
     * An export can be multiple exports and this would cause multiple exports
     * @param type Format to use
     * @returns
     */
    exportDrawing(type: DrawingExportType): Promise<GetExportedDrawing>;
}
//# sourceMappingURL=FileTreeDrawing.d.ts.map