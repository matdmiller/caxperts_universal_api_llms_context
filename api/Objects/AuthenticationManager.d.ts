import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { AuthenticationContextChangedEvent } from "../ResponseTypes";
import { ApiCommands } from "../Util";
export declare class AuthenticationManager {
    openAuthenticationContext(oidcConfig: string, OidcConfigBrowserBasedViewing: string): Promise<AuthenticationContext>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
export declare class AuthenticationContext {
    private readonly _id;
    /**
     * @internal
     * @param _id
     */
    constructor(_id: number);
    private ids;
    /**
     * Retrieve new access and identity tokens before the old ones expire via a callback
     * @param callback
     */
    registerContextChangedEvent(callback: (data: AuthenticationContextChangedEvent) => void): Promise<void>;
    /**
     * Will try to perform a logout against the IDP. Needs to be called before closeAuthenticationContext
     * @returns
     */
    startLogoutProcess(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Closes the authentication loop on UPV side for this Context
     * @returns
     */
    closeAuthenticationContext(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    private createCommand;
}
//# sourceMappingURL=AuthenticationManager.d.ts.map