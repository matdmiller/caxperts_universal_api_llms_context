import { Model } from ".";
import { PdfInfo } from "../Util/BaseDataTypes";
import { ApiCommands } from "../Util";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
export declare class Pdf {
    readonly Info: PdfInfo;
    private readonly model;
    IsOpen: boolean;
    IsFocused: boolean;
    constructor(Info: PdfInfo, model: Model);
    /**
     * Open the PdfDrawing
     * @returns
     */
    openPdf(): Promise<import("..").ApiResponse>;
    /**
     * Open the PdfDrawing
     * @returns
     */
    closePdf(): Promise<import("..").ApiResponse>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Pdf.d.ts.map