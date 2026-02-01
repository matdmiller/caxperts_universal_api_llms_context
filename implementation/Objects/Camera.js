"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const Util_1 = require("../Util");
const APIConnector_1 = require("../Internal/APIConnector");
class Camera {
    /**
     * @internal
     * @param scene
     */
    constructor(scene) {
        this.scene = scene;
        this.Position = new Util_1.GetSet(async () => {
            return (await this.getCameraView()).ResultData.CameraView.Position;
        }, async (value) => {
            const rotation = await this.Rotation.get();
            await this.setCameraView(new Util_1.CameraView(value, rotation));
        });
        this.Rotation = new Util_1.GetSet(async () => {
            return (await this.getCameraView()).ResultData.CameraView.Rotation;
        }, async (value) => {
            const position = await this.Position.get();
            await this.setCameraView(new Util_1.CameraView(position, value));
        });
        this.CameraView = new Util_1.GetSet(async () => {
            return (await this.getCameraView()).ResultData.CameraView;
        }, async (value) => {
            await this.setCameraView(value);
        });
        this.ClippingPlane = new Util_1.GetSet(async () => {
            return await this.getClippingPlane();
        }, async (value) => {
            await this.setClippingPlane(value);
        });
    }
    async setCameraView(value) {
        const command = this.scene.createCommand(Util_1.ApiCommands.SetCameraView);
        command.commandParameters.push(value.Position.X.toString());
        command.commandParameters.push(value.Position.Y.toString());
        command.commandParameters.push(value.Position.Z.toString());
        command.commandParameters.push(value.Rotation.X.toString());
        command.commandParameters.push(value.Rotation.Y.toString());
        command.commandParameters.push(value.Rotation.Z.toString());
        //command.Target = this.scene.id;
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    async getCameraView() {
        const command = this.scene.createCommand(Util_1.ApiCommands.GetCameraView);
        return await APIConnector_1.Api.get().sendCommandWithReturnType(command);
    }
    async getClippingPlane() {
        throw new Error("Not Implemented");
        return new Util_1.ClippingPlane();
    }
    async setClippingPlane(plane) {
        const command = this.scene.createCommand(Util_1.ApiCommands.SetClippingPlane);
        command.commandParameters.push(plane.Near.toString());
        command.commandParameters.push(plane.Far.toString());
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Make the camera look at a target from the current view
     * @param target Vector of the target
     * @returns
     */
    async lookAt(target) {
        const command = this.scene.createCommand(Util_1.ApiCommands.SetCameraViewLookAtTarget);
        const position = await this.Position.get();
        command.commandParameters.push(position.X.toString());
        command.commandParameters.push(position.Y.toString());
        command.commandParameters.push(position.Z.toString());
        command.commandParameters.push(target.X.toString());
        command.commandParameters.push(target.Y.toString());
        command.commandParameters.push(target.Z.toString());
        return await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Reset the view to the default position
     * @returns
     */
    async resetView() {
        const command = this.scene.createCommand(Util_1.ApiCommands.ResetView);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.Camera = Camera;
