import { ApiCommands } from "../Util";
import { Scene } from "../Scenes";
import { FilterOperation } from "./FilterOperation";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ModelObject } from "./ModelObject";
/**
 * Fileropration Special for IntelliPID
 */
export declare class FilterOperationPid extends FilterOperation {
    constructor(scene: Scene);
    /**
     * DrawingFilter to use. Can be an array of the Pids or/and UPVCurrent (Currently active PID) or UPVAllOpen (All open Pids. Also in Background).
     * Default value is UPVCurrent
     */
    DrawingFilter?: string[] | "UPVCurrent"[] | "UPVAllOpen"[];
    /**
     * Should objects returned by GetObjects include the RawSVG of the element
     */
    IncludeRawSvg: boolean;
    getObjects(): Promise<ModelObject[]>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=FilterOperationPid.d.ts.map