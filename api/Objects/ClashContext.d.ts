import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ClashComputationProgressChangedEvent, GetClashCandidates, GetClashes } from "../ResponseTypes";
import { ApiCommands } from "../Util";
export declare class ClashContext {
    private ids;
    registerContextChangedEvent(callback: (data: ClashComputationProgressChangedEvent) => void): Promise<void>;
    getClashCandidates(): Promise<GetClashCandidates>;
    getClashResults(): Promise<GetClashes>;
    cancelClashComputation(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=ClashContext.d.ts.map