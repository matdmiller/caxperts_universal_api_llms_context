import { ColorMode } from "../Util";
import { ApiResponse } from "../ResponseTypes";
import { IntelliPidDrawing } from "./IntelliPidDrawing";
export declare class Printer {
    private printerId;
    private constructor();
    static create(): Promise<Printer>;
    delete(): Promise<ApiResponse>;
    getPdf(): Promise<string>;
    addIntellipidPage(drawing: IntelliPidDrawing, printMode: ColorMode): Promise<ApiResponse>;
}
//# sourceMappingURL=Printer.d.ts.map