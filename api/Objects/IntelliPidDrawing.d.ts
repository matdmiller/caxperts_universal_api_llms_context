import { Model } from ".";
import { IntelliPidDrawingInfo } from "../Util/BaseDataTypes";
export declare class IntelliPidDrawing {
    private readonly info;
    private readonly model;
    Identifier: string;
    IsOpen: boolean;
    IsFocused: boolean;
    constructor(info: IntelliPidDrawingInfo, model: Model);
    /**
     * Open the IntelliPidDrawing
     * @returns
     */
    openPid(): Promise<import("..").ApiResponse>;
    /**
     * Open the IntelliPidDrawing
     * @returns
     */
    closePid(): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=IntelliPidDrawing.d.ts.map