import { GetStorageVariablesList, StorageVariableChangedEvent } from "../ResponseTypes";
export declare class LocalStorage {
    /**
     * Store a key in the local storage, only A-z and 0-9 and _ are supported key names
     * @param key
     * @param value
     * @param persist persist accross restart of UPV. Will be forced false on BBV
     * @returns
     */
    setStorageVariable(key: string, value: string, persist?: boolean): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Retrieve a storage variable
     * @param key
     * @returns
     */
    getStorageVariable(key: string): Promise<string>;
    /**
     *
     * @param key Delete a storage variable
     * @returns
     */
    deleteStorageVariable(key: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * List all the storage variables known to UPV
     * @returns
     */
    listStorageVariables(): Promise<GetStorageVariablesList>;
    /**
     * Register a callback whenever a variable has changed
     * @param callback
     * @returns
     */
    registerStorageVariableChangedEvent(callback: (data: StorageVariableChangedEvent) => void): Promise<number>;
}
//# sourceMappingURL=LocalStorage.d.ts.map