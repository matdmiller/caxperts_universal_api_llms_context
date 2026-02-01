"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeModel = void 0;
const FileTreeFolder_1 = require("./FileTreeFolder");
class FileTreeModel extends FileTreeFolder_1.FileTreeFolder {
    constructor(id, name, type) {
        super(id, name, type);
    }
}
exports.FileTreeModel = FileTreeModel;
