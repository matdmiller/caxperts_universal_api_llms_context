import { ApiEvents, ApiResponse, ApiResponseWithType } from '../ResponseTypes';
import { CaxApiCommand } from "./CaxApiCommand";
/**
 * @internal
 * Defines capabilities of a connector.
 */
export interface ApiConnector {
    /**
     * true means calls to sendCommand will execute.
     */
    readonly available: boolean;
    /**
     * Called immediately after construction. Note: This does not ensure that the connector is ready to use, check
     * property available afterwards.
     */
    initialize(): void;
    /**
     * Send command asynchronously and wait until the response is completed.
     * @param command to execute.
     * @return Promise to wait for completion.
     */
    sendCommand(command: CaxApiCommand): Promise<void>;
}
export declare class ApiResponseContainer {
    message: any;
}
/**
 * @internal
 * Dont use the API class unless you know what you are doing. Changes to this class could be undocumented
 */
export declare class Api {
    private static instance;
    debug: boolean;
    private apiConnector;
    private waiting;
    private waitingFailure;
    private registeredEvents;
    static get(): Api;
    get AppControlsAvailable(): boolean;
    get BBVAvailable(): boolean;
    get Available(): boolean;
    /**
     * Sets / replaces the current connector as some connectors like BBV are not yet available at start because peer
     * connection needs to be established.
     * @param connector to use from now on.
     */
    registerConnector(connector: ApiConnector): void;
    handleEvent(json: any): void;
    private initialize;
    private constructor();
    private sendCommandInternal;
    sendCommand(command: CaxApiCommand): Promise<ApiResponse>;
    sendCommandWithReturnType<T>(command: CaxApiCommand): Promise<ApiResponseWithType<T>>;
    addEventCallback(event: ApiEvents, eventId: number, callback: (data: any) => void): Promise<ApiResponse>;
    removeEventCallback(eventId: number): Promise<ApiResponse>;
}
//# sourceMappingURL=APIConnector.d.ts.map