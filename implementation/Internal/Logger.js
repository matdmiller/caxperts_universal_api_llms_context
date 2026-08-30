"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Logger = void 0;
class Logger {
    constructor() {
        this.debugEnabled = false;
    }
    setDebug(enabled) {
        this.debugEnabled = enabled;
    }
    debug(message, payload, options) {
        if (!this.debugEnabled) {
            return;
        }
        const prefix = this.buildPrefix("DEBUG", message, options);
        if (payload === undefined) {
            console.log(prefix);
            return;
        }
        console.log(prefix, payload);
    }
    error(message, payload) {
        const prefix = this.buildPrefix("ERROR", message);
        if (payload === undefined) {
            console.error(prefix);
            return;
        }
        console.error(prefix, payload);
    }
    warn(message, payload) {
        const prefix = this.buildPrefix("ERROR", message);
        if (payload === undefined) {
            console.warn(prefix);
            return;
        }
        console.warn(prefix, payload);
    }
    buildPrefix(level, message, options) {
        const timestamp = new Date().toISOString();
        const parts = ["[UniversalApi]", `[${level}]`, message];
        if ((options === null || options === void 0 ? void 0 : options.requestId) !== undefined) {
            parts.push(`[requestId=${options.requestId}]`);
        }
        if ((options === null || options === void 0 ? void 0 : options.elapsedMs) !== undefined) {
            parts.push(`[elapsed=${options.elapsedMs.toFixed(2)}ms]`);
        }
        return `[${timestamp}] ${parts.join(" ")}`;
    }
}
exports.Logger = Logger;
exports.logger = new Logger();
