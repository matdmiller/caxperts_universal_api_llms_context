import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ClashComputationProgressChangedEvent, GetClashCandidates, GetClashes } from "../ResponseTypes";
import { ApiCommands } from "../Util";
export declare class ClashContext {
    private ids;
    /**
     * Registers a callback function to be called when the clash computation progress changes.
     * @param callback The function to be called when the clash computation progress changes.
     */
    registerContextChangedEvent(callback: (data: ClashComputationProgressChangedEvent) => void): Promise<void>;
    /**
     *
     * @returns returns list of all Clash candidates after a clash detection was finished
     */
    getClashCandidates(): Promise<GetClashCandidates>;
    /**
     * returns the list of all clashes. If startIndex and maxResults are provided, it returns a subset of the clashes. This is useful if there are a lot of clashes and you want to implement pagination or lazy loading in your application.
     * @param startIndex (optional) start index for pagination
     * @param maxResults (optional) maximum number of results to return
     * @returns list of clashes
     */
    getClashResults(startIndex?: number, maxResults?: number): Promise<GetClashes>;
    /**
     * cancels the ongoing clash computation.
     */
    cancelClashComputation(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * cleans up the clash results from the last clash computation. This should be called after the clash results are consumed to free up resources.
     */
    cleanClashResults(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=ClashContext.d.ts.map