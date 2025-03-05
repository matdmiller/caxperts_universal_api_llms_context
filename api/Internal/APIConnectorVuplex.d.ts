import { ApiConnector } from './APIConnector';
import { CaxApiCommand } from "./CaxApiCommand";
declare global {
    /**
     * @internal
     */
    interface Window {
        vuplex: {
            postMessage: (parameter: {
                type: string;
                message: string;
            }) => void;
            addEventListener: (event: string, callback: ((data: {
                data: string;
            }) => void)) => void;
        };
    }
}
/**
 * @internal
 */
export declare class ApiConnectorVuplex implements ApiConnector {
    get available(): boolean;
    private inIframe;
    initialize(): void;
    private attachListener;
    sendCommand(command: CaxApiCommand): Promise<void>;
}
//# sourceMappingURL=APIConnectorVuplex.d.ts.map