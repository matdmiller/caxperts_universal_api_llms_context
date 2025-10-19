export declare class Get<T> {
    private readonly getFunction;
    constructor(getFunction: () => Promise<T>);
    /**
     * Retrieves the value asynchronous
     * @returns
     */
    get(): Promise<T>;
}
export declare class Set<T> {
    private readonly setFunction;
    constructor(setFunction: (value: T) => Promise<void>);
    /**
     * Sets the Value asynchronous
     * @param value - The value to set
     * @returns
     */
    set(value: T): Promise<void>;
}
export declare class GetSet<T> {
    private readonly getFunction;
    private readonly setFunction;
    constructor(getFunction: () => Promise<T>, setFunction: (value: T) => Promise<void>);
    /**
     * Retrieves the value asynchronous
     * @returns
     */
    get(): Promise<T>;
    /**
     * Sets the Value asynchronous
     * @param value - The value to set
     * @returns
     */
    set(value: T): Promise<void>;
}
//# sourceMappingURL=GetSet.d.ts.map