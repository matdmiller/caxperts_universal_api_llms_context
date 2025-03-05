"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterOperation3d = void 0;
const AttributeTree_1 = require("./AttributeTree");
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const FilterOperation_1 = require("./FilterOperation");
const ClashContext_1 = require("./ClashContext");
class FilterOperation3d extends FilterOperation_1.FilterOperation {
    constructor(scene) {
        super(scene);
        /**
         * Should objects returned by GetObjects include the boundingbox
         */
        this.IncludeBoundingBox = false;
        /**
         * Should objects returned by GetObjects include Colors
         */
        this.IncludeColors = false;
        /**
         * Should objects returned by GetObjects include SnapInfo
         */
        this.IncludeSnapInfo = false;
    }
    /**
     * All objects based on the attributes specified in the FilterOperation
     */
    async getObjects() {
        const command = this.createCommand(Util_1.ApiCommands.GetObjects);
        let getObjectsBoundingBox;
        let getObjectsColors;
        let getObjectsSnapInfo;
        if (this.IncludeBoundingBox) {
            command.command = Util_1.ApiCommands.GetObjectsBoundingBox;
            getObjectsBoundingBox = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        if (this.IncludeColors) {
            command.command = Util_1.ApiCommands.GetObjectsColors;
            getObjectsColors = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        if (this.IncludeSnapInfo) {
            command.command = Util_1.ApiCommands.GetObjectsSnapInfo;
            getObjectsSnapInfo = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        const models = await this.getBaseObjects();
        for (const model of models) {
            let bounds;
            let colors;
            let snapInfo;
            if (this.IncludeBoundingBox) {
                bounds = (await getObjectsBoundingBox).ResultData.ObjectsBoundingBox[model.Uid];
            }
            if (this.IncludeColors) {
                colors = (await getObjectsColors).ResultData.ObjectsColors[model.Uid];
            }
            if (this.IncludeSnapInfo) {
                snapInfo = (await getObjectsSnapInfo).ResultData.ObjectsSnapInfo[model.Uid];
            }
            model.init3D(bounds, colors, snapInfo);
        }
        return models;
    }
    /**
     * Highlights all Elements hit by FilterOperation
     * @returns
     */
    async highlight() {
        const command = this.createCommand(Util_1.ApiCommands.Highlight);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Clears any active hightlighting
     * @returns
     */
    async clearHighlight() {
        const command = this.createCommand(Util_1.ApiCommands.ClearHighlight);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Show only objects hit by the FilterOpration
     * @returns
     */
    async showOnly() {
        const command = this.createCommand(Util_1.ApiCommands.ShowOnly);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Set the Visibility of all objects hit by this Filteropration
     * @param state new state (show/true, hide/false)
     * @returns
     */
    async setVisibility(state) {
        const command = this.createCommand(Util_1.ApiCommands.SetVisibility);
        command.commandParameters.push(state ? "true" : "false");
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * activate a volumeClip Operation around objects hit by this Filteroperation
     * @param radius
     * @returns
     */
    async volumeClip(radius) {
        const command = this.createCommand(Util_1.ApiCommands.VolumeClip);
        command.commandParameters.push(radius.toString());
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    //TODO what is this again
    async getTreeStructure() {
        const command = this.createCommand(Util_1.ApiCommands.GetTreeStructure);
        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        const returnValue = {};
        for (const key in result.ResultData.GetTreeStructure) {
            if (Object.prototype.hasOwnProperty.call(result.ResultData.GetTreeStructure, key)) {
                returnValue[key] = [];
                const element = result.ResultData.GetTreeStructure[key];
                element.forEach(element => {
                    returnValue[key].push(new AttributeTree_1.AttributeTreeNode(element.Id, element.Name, element.Type));
                });
            }
        }
        return returnValue;
    }
    async startClashComputation(tolerance = 0.001, aspectsToIgnore = [], aspectsToInclude = [], mode = Util_1.ClashMode.WithinQueryOnly, includeSketches = false, computeCandidatesOnly = false, packageA, PackageB) {
        const command = this.createCommand(Util_1.ApiCommands.StartClashComputation);
        command.additionalParameters.StartClashComputation = {
            Tolerance: tolerance,
            AspectsToIgnore: aspectsToIgnore,
            AspectsToInclude: aspectsToInclude,
            Mode: mode,
            IncludeSketches: includeSketches,
            ComputeCandidatesOnly: computeCandidatesOnly,
            PackageA: {
                Package: packageA
            },
            PackageB: {
                Package: PackageB
            }
        };
        await APIConnector_1.Api.get().sendCommand(command);
        return new ClashContext_1.ClashContext();
    }
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands) {
        const command = this.scene.createCommand(apiCommands);
        command.condition = this.Condition;
        command.conditionCombineMode = this.CombineMode;
        command.additionalParameters = {
            ClippingFilter: this.ApiClippingDescriptor
        };
        if (this.APIPackageFilter != null) {
            command.additionalParameters.PackageFilter = { Package: this.APIPackageFilter };
        }
        return command;
    }
}
exports.FilterOperation3d = FilterOperation3d;
