"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectionSphereElement = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
class ProjectionSphereElement {
    constructor(projectionSphere, model) {
        this.projectionSphere = projectionSphere;
        this.model = model;
    }
    /**
     * Enter the Projection
     * @param opacity optional (default=-1), is set overwrite the opacity value with the new value. If -1 is provided the last value will be used. Value between 0 (transparent) to 100 (opaque)
     * @param rotation optional(default=-1), enter a rotation to view the projection from. If -1 is used for all axis UPV decides
     * @param noUi optional (default=false), if true no UI will be visible
     * @returns
     */
    async enterProjectionSphere(opacity = -1, rotation = { X: -1, Y: -1, Z: -1 }, noUi = false) {
        const command = this.model.createCommand(Util_1.ApiCommands.EnterProjectionSphere);
        command.commandParameters = [this.projectionSphere.Guid];
        command.commandParameters.push(opacity.toString());
        command.commandParameters.push(rotation.X.toString());
        command.commandParameters.push(rotation.Y.toString());
        command.commandParameters.push(rotation.Z.toString());
        command.commandParameters.push(noUi + "");
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Leave the current Projection
     * @returns
     */
    async leaveProjectionSphere() {
        const command = this.model.createCommand(Util_1.ApiCommands.LeaveProjectionSphere);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.ProjectionSphereElement = ProjectionSphereElement;
