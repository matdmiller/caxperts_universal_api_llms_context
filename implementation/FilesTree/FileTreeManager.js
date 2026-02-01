"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeManager = exports.FileTreeManagerLegacy = void 0;
const FileTreeElement_1 = require("./FileTreeElement");
const Util_1 = require("../Util");
const FileTreePointOfInterest_1 = require("./FileTreePointOfInterest");
const FileTreePackage_1 = require("./FileTreePackage");
const FileTreeTwoDToThreeD_1 = require("./FileTreeTwoDToThreeD");
const FileTreePhoto_1 = require("./FileTreePhoto");
const FileTreeSketch_1 = require("./FileTreeSketch");
const FileTreeScreenshot_1 = require("./FileTreeScreenshot");
const FileTreeModel_1 = require("./FileTreeModel");
const FileTreeFolder_1 = require("./FileTreeFolder");
const FileTreeComment_1 = require("./FileTreeComment");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const FileTreeView_1 = require("./FileTreeView");
const FileTreeAppControl_1 = require("./FileTreeAppControl");
const APIConnector_1 = require("../Internal/APIConnector");
const FileTreeAnimation_1 = require("./FileTreeAnimation");
const FileTreeMarkup_1 = require("./FileTreeMarkup");
const FileTreePIDSketch_1 = require("./FileTreePIDSketch");
const FileTreeReport_1 = require("./FileTreeReport");
const FileTreeCommentSVG_1 = require("./FileTreeCommentSVG");
const FileTreeSpraying_1 = require("./FileTreeSpraying");
const FileTreeDrawing_1 = require("./FileTreeDrawing");
const FileTreeIntelliPIDLegendPosition_1 = require("./FileTreeIntelliPIDLegendPosition");
const FileTreeWindowLayout_1 = require("./FileTreeWindowLayout");
/**
 * @deprecated
 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
 * */
class FileTreeManagerLegacy {
    constructor(manager) {
        this.manager = manager;
    }
    /**
     *
     * @deprecated might be removed in future from wrapper
     * @param path
     * @returns
     */
    async loadSketch(path, viewName) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadSketch);
        command.commandParameters.push(path);
        if (viewName != null)
            command.commandParameters.push(viewName);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @deprecated might be removed in future from wrapper
     * @param path
     * @returns
     */
    async loadPackageFile(path, replace) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadPackageFile);
        command.commandParameters.push(path);
        if (replace != null)
            command.commandParameters.push(replace.toString());
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @deprecated might be removed in future from wrapper
     * @param path
     * @returns
     */
    async exportPackageFile(path) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ExportPackageFile);
        command.commandParameters.push(path);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @deprecated might be removed in future from wrapper and replaced with a new function
     */
    async loadFile(path) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadFile);
        command.commandParameters.push(path);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.FileTreeManagerLegacy = FileTreeManagerLegacy;
class FileTreeManager {
    get Legacy() {
        return new FileTreeManagerLegacy(this);
    }
    /**
     * Returns the root folder in the UPV filetree
     * @returns
     */
    async getRootFolder() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeRoot);
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return new FileTreeModel_1.FileTreeModel(result.Id, result.Name, result.Type);
    }
    /**
     * Get the children Elements of this File Tree Elements
     */
    async getChildren(folder) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeChildren);
        command.commandParameters.push(folder.Id.toString());
        const apiResult = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        const result = [];
        apiResult.ResultData.FilesTreeObjects.forEach(element => {
            result.push(this.resolveElement(element));
        });
        return result;
    }
    /**
     * Get the sibelings Elements of this File Tree Elements
     */
    async getSiblings(element) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeSiblings);
        command.commandParameters.push(element.Id.toString());
        const apiResult = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        const result = [];
        apiResult.ResultData.FilesTreeObjects.forEach(element => {
            result.push(this.resolveElement(element));
        });
        return result;
    }
    /**
     * Move a file Tree Element into a diffrent folder
     */
    async moveTo(source, target) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeMoveObject);
        command.commandParameters.push(source.Id.toString());
        command.commandParameters.push(target.Id.toString());
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * This function allows you to import any filetree element.
     * This is not designed for normal usage and requires extensive knowledge.
     * FileTreeElement.getContent can be used to retrieve the data
     * Since the content of filetree element are internal datastructures no support is/will be made available
     * Data structure changes can occour within new versions that will break old behavior
     * @param parameter
     */
    async importContainer(parameter) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeImportContainer);
        command.additionalParameters = {
            FilesTreeImportContainer: parameter
        };
        return this.resolveElement((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.FilesTreeObject);
    }
    /**
     * Create a new Folder in the Filetree
     * @param parent
     * @param name
     * @returns
     */
    async createFolder(parent, name) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateFolder);
        command.commandParameters.push(name);
        command.commandParameters.push(parent.Id.toString());
        //Add 2 new fields
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return new FileTreeFolder_1.FileTreeFolder(result.Id, result.Name, result.Type);
    }
    /**
     * Create a point of interest in the filestree
     * @param parent parent folder
     * @param name
     * @param position
     * @param rotation
     * @param color the color range in this case for RGBA is between 0-255 despite normal colors being between 0-1
     * @param diameter size of the poi in meters
     * @param attributes define attributes on the poi
     * @param links define links on the poi
     * @param type Use Custommesh and customMeshPath to provide a custom mesh other then the sphere
     * @param customMeshPath path to the custom mesh in obj format. Can be a filepath or website path
     * @returns
     */
    async createPointOfInterest(parent, name, position, rotation, color, diameter, attributes = {}, links = {}, type = Util_1.PointOfInterestType.Sphere, customMeshPath = "") {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlacePoi);
        command.additionalParameters = {
            PlacePoi: {
                ParentId: parent.Id,
                Name: name,
                Position: position,
                Rotation: rotation,
                Color: color,
                Diameter: diameter,
                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
                Links: Object.keys(links).map(x => { return { Name: x, Url: attributes[x] }; }),
                Type: type,
                FilePath: customMeshPath
            }
        };
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return new FileTreePointOfInterest_1.FileTreePointOfInterest(result.Id, result.Name, result.Type);
    }
    /**
     * Create a Pid or 3D Sketch
     * @param parent parent folder
     * @param name name of the sketch
     * @returns Either PidSketch or Sketch depending on current UPV Context
     */
    async createSketch(parent, name) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateSketch);
        command.commandParameters.push(name);
        command.commandParameters.push(parent.Id.toString());
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return this.resolveElement(result);
    }
    /**
     * Create a Markup. Depending on if 3d,Pid,or Document/Drawing is open it will be bound to that file
     * @param name
     * @param parent
     * @returns
     */
    async createMarkup(parent, name) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateMarkup);
        command.commandParameters = [name, parent.Id.toString()];
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return this.resolveElement(result);
    }
    /**
     * Create a Comment. Depending on if 3d or Pid is open it will be bound to that type. It is also based on the currently selected element
     * @param parent
     * @param name
     * @param uid if nothing provided, the selected element is used
     * @param offset the offset of the comment from the object
     * @param commentPosition Position if the comment. If not provided it will use the offset
     * @param leaderLineEndPosition Position of the leader line end position. If not provided this is the center of the object
     * @returns
     */
    async createComment(parent, name, uid = null, offset = 0, commentPosition = { X: 0, Y: 0, Z: 0 }, leaderLineEndPosition = { X: 0, Y: 0, Z: 0 }) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateComment);
        command.commandParameters = [name, parent.Id.toString()];
        command.additionalParameters = {
            FilesTreeCreateComment: {
                Uid: uid,
                Offset: offset,
                CommentPosition: commentPosition,
                LeaderLineEndPosition: leaderLineEndPosition
            }
        };
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return this.resolveElement(result);
    }
    /**
     * Can be used to create a drawing in the filestree
     * @param parent
     * @param name
     * @param templateName available templates can be retrieved via the DrawingTemplates on the Model
     * @param useColors
     * @param useSelectedObjectsOnly
     * @returns
     */
    async createDrawing(parent, name, templateName, useColors, useSelectedObjectsOnly) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateDrawing);
        command.additionalParameters = {
            FilesTreeCreateDrawing: {
                DrawingTemplateName: templateName,
                Name: name,
                ParentTreeItemId: parent.Id,
                UseColours: useColors,
                UseSelectedObjectsOnly: useSelectedObjectsOnly
            }
        };
        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
            .FilesTreeObject;
        return this.resolveElement(result);
    }
    resolveElement(element) {
        switch (element.Type) {
            case Util_1.FeatureTypes.Model:
                return new FileTreeModel_1.FileTreeModel(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Folder:
                return new FileTreeFolder_1.FileTreeFolder(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Comment:
                return new FileTreeComment_1.FileTreeComment(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.CommentSvg:
                return new FileTreeCommentSVG_1.FileTreeCommentSVG(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.PointOfInterest:
                return new FileTreePointOfInterest_1.FileTreePointOfInterest(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Package:
                return new FileTreePackage_1.FileTreePackage(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.TwoDToThreeD:
                return new FileTreeTwoDToThreeD_1.FileTreeTwoDToThreeD(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Photo:
                return new FileTreePhoto_1.FileTreePhoto(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Sketch:
                return new FileTreeSketch_1.FileTreeSketch(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Screenshot:
                return new FileTreeScreenshot_1.FileTreeScreenshot(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.View:
                return new FileTreeView_1.FileTreeView(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.AppControl:
                return new FileTreeAppControl_1.FileTreeAppControl(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Animation:
                return new FileTreeAnimation_1.FileTreeAnimation(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Markup:
                return new FileTreeMarkup_1.FileTreeMarkup(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.PIDSketch:
                return new FileTreePIDSketch_1.FileTreePIDSketch(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Report:
                return new FileTreeReport_1.FileTreeReport(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Spraying:
                return new FileTreeSpraying_1.FileTreeSpraying(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.Drawing:
                return new FileTreeDrawing_1.FileTreeDrawing(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.WindowLayout:
                return new FileTreeWindowLayout_1.FileTreeWindowLayout(element.Id, element.Name, element.Type);
            case Util_1.FeatureTypes.IntelliPIDLegendPosition:
                return new FileTreeIntelliPIDLegendPosition_1.FileTreeIntelliPIDLegendPosition(element.Id, element.Name, element.Type);
            default:
                console.log("Could not resolve " + element.Type);
                return new FileTreeElement_1.FileTreeElement(element.Id, element.Name, element.Type);
        }
    }
    /***
     * Load UPVF file from a base64 string into UPV
     * @param upfvBase64 base64 upvf content to load
     * @param suppressDefaultAction if only one element is in the UPVF open it by default if this is set to false (default is true).
     * @param overwriteFoldersBehavior by default if the same folder already exists we will keepBoth but this behavior can be changed with this parameter. Replace for Folders behaves like a merge not a delete/create
     * @param overwriteNodesBehavior by default if the same folder already exists we will keepBoth but this behavior can be changed with this parameter
     * @param keepFolderExpandStates By default if an element is changed the containing folder will be expanded. With this option this can be supressed
     * @param overwriteEnableUi if enabled the user will be asked as if they started a manuell import
     * @returns
     * @returns
     */
    async loadUPVF(upfvBase64, suppressDefaultAction = true, overwriteFoldersBehavior = Util_1.FilesTreeImportBehaviour.KeepBoth, overwriteNodesBehavior = Util_1.FilesTreeImportBehaviour.KeepBoth, keepFolderExpandStates = false, overwriteEnableUi = false) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ProcessFile);
        command.additionalParameters = {
            ProcessFile: {
                ContentBase64: upfvBase64,
                SuppressDefaultAction: suppressDefaultAction,
                OverwriteFoldersBehavior: overwriteFoldersBehavior,
                OverwriteNodesBehavior: overwriteNodesBehavior,
                KeepFolderExpandStates: keepFolderExpandStates,
                OverwriteEnableUi: overwriteEnableUi
            }
        };
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * This functions returns a base64 UPVF file of the tree.
     * Can be loaded again using loadUPVF
     * It is possible to use a diffrent root by using the FileTreeElement.getUPVF funtion of the root you want to export from
     * @returns
     */
    async getUPVF(forceExport, featureTypeFilters, fileTreeElement = []) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeContent);
        command.additionalParameters = {
            GetFilesTreeContent: {
                FeatureTypeFilter: featureTypeFilters,
                ForceExport: forceExport,
                IncludedNodes: fileTreeElement.map(x => x.Id)
            }
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.FilesTreeContent;
    }
}
exports.FileTreeManager = FileTreeManager;
