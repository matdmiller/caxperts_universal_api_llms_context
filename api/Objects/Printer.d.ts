import { ColorMode, LayerDisplayStyle } from "../Util";
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
     * @param displayStyles (optional) can be used to create PDF layers based of color files
     * @returns
     */
    addIntellipidPage(drawing: IntelliPidDrawing, printMode: ColorMode, sketchLayers?: LayerSketchPairWrapper[], displayStyles?: LayerDisplayStyle[]): Promise<ApiResponse>;
}
export declare class LayerSketchPairWrapper {
    /**
     * Name of the layer to create
     */
    Name: string;
    /**
     * Should it be enabled in the PFD by default
     */
    Visible: boolean;
    /**
     * Sketches this should contain
     */
    Sketches: FileTreePIDSketch[];
}
//# sourceMappingURL=Printer.d.ts.map