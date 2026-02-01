import { ColorMode } from "../Util";
import { ApiResponse } from "../ResponseTypes";
import { IntelliPidDrawing } from "./IntelliPidDrawing";
import { FileTreePIDSketch } from "../FilesTree";
export declare class Printer {
    private printerId;
    private constructor();
    /**
     * Creates a new PDF printer instance always call delete once no longer required
     * @returns
     */
    static create(): Promise<Printer>;
    /**
     * Deletes an PDF printer instance
     * @returns
     */
    delete(): Promise<ApiResponse>;
    /**
     * Returns the PDF as a base64 string
     * @returns
     */
    getPdf(): Promise<string>;
    /**
     * Add in Intellipid to the PDF
     * @param drawing PID to add
     * @param printMode what mode should be used
     * @param sketchLayers (optional) can be used to assign PID sketches to individual layers
     * @returns
     */
    addIntellipidPage(drawing: IntelliPidDrawing, printMode: ColorMode, sketchLayers?: LayerSketchPairWrapper[]): Promise<ApiResponse>;
}
export declare class LayerSketchPairWrapper {
    Name: string;
    Visible: boolean;
    Sketches: FileTreePIDSketch[];
}
//# sourceMappingURL=Printer.d.ts.map