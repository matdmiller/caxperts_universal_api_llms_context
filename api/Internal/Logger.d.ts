export interface LoggerDebugOptions {
    requestId?: number;
    elapsedMs?: number;
}
export declare class Logger {
    private debugEnabled;
    setDebug(enabled: boolean): void;
    debug(message: string, payload?: unknown, options?: LoggerDebugOptions): void;
    error(message: string, payload?: unknown): void;
    warn(message: string, payload?: unknown): void;
    private buildPrefix;
}
export declare const logger: Logger;
//# sourceMappingURL=Logger.d.ts.map