import { ApiConnector } from './APIConnector';
import { CaxApiCommand } from "./CaxApiCommand";
/**
 * @internal
 */
export declare class ApiConnectorBrowser implements ApiConnector {
    private webSocket;
    private readonly wsUrl;
    private reconnectAttempts;
    private readonly maxReconnectAttempts;
    private readonly reconnectDelay;
    private readonly port;
    private userRejected;
    private connected;
    constructor();
    get available(): boolean;
    initialize(): void;
    private connectWebSocket;
    sendCommand(command: CaxApiCommand): Promise<void>;
    private waitForConnection;
}
//# sourceMappingURL=APIConnectorBrowser.d.ts.map