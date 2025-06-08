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
     * @param opacity optional, is set overwrite the opacity value with the new value
     * @param rotation optional, enter a rotation to view the projection from
     * @returns
     */
    async enterProjectionSphere(opacity, rotation) {
        const command = this.model.createCommand(Util_1.ApiCommands.EnterProjectionSphere);
        command.commandParameters = [this.projectionSphere.Guid];
        if (opacity != null) {
            command.commandParameters.push(opacity.toString());
        }
        if (rotation != null) {
            command.commandParameters.push(rotation.X.toString());
            command.commandParameters.push(rotation.Y.toString());
            command.commandParameters.push(rotation.Z.toString());
        }
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
