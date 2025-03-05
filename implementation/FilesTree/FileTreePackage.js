"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreePackage = void 0;
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreePackage extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
    }
}
exports.FileTreePackage = FileTreePackage;
