"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeFolder = void 0;
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreeFolder extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
}
exports.FileTreeFolder = FileTreeFolder;
