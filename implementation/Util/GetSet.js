"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSet = exports.Set = exports.Get = void 0;
class Get {
    constructor(getFunction) {
        this.getFunction = getFunction;
    }
    /**
     * Retrieves the value asynchronous
     * @returns
     */
    async get() {
        return this.getFunction();
    }
}
exports.Get = Get;
class Set {
    constructor(setFunction) {
        this.setFunction = setFunction;
    }
    /**
     * Sets the Value asynchronous
     * @param value - The value to set
     * @returns
     */
    async set(value) {
        return this.setFunction(value);
    }
}
exports.Set = Set;
class GetSet {
    constructor(getFunction, setFunction) {
        this.getFunction = getFunction;
        this.setFunction = setFunction;
    }
    /**
     * Retrieves the value asynchronous
     * @returns
     */
    async get() {
        return this.getFunction();
    }
    /**
     * Sets the Value asynchronous
     * @param value - The value to set
     * @returns
     */
    async set(value) {
        return this.setFunction(value);
    }
}
exports.GetSet = GetSet;
