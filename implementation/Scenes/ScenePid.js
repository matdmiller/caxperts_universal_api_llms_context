"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePid = void 0;
const Scene_1 = require("./Scene");
const Objects_1 = require("../Objects");
/**
 * 2D Scene
 */
class ScenePid extends Scene_1.Scene {
    constructor(id) {
        super(id);
        this.DefaultFilter = new Objects_1.FilterOperationPid(this);
    }
    /**
     * Create a new Filteropration
     * @returns FilterOperationPid
     */
    getNewFilter() {
        return new Objects_1.FilterOperationPid(this);
    }
}
exports.ScenePid = ScenePid;
