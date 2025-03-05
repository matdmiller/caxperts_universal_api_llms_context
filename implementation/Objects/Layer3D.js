"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer3D = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
//Application -> Design -> 3D -> Layer
class Layer3D {
    constructor(GroupId) {
        this.GroupId = GroupId;
    }
    /**
     * Place an OBJ in the scene
     * @param obj Path to the obj file
     * @param instances The Instances of this object
     * @param suppressLoadingScreen
     */
    async placeObj(obj, instances, suppressLoadingScreen = false) {
        const command = this.createCommand(Util_1.ApiCommands.PlaceObj);
        command.additionalParameters = {
            PlaceObj: {
                DrawingId: this.GroupId,
                Instances: instances,
                ObjLocalPath: obj,
                SuppressLoadingScreen: suppressLoadingScreen
            }
        };
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Draw a Line in 3D
     * @param vertices Points of the line
     * @param color The color of the line
     * @param width THe Width of the line
     */
    async drawLine(vertices, color, width) {
        const command = this.createCommand(Util_1.ApiCommands.DrawLine);
        command.additionalParameters = {
            DrawLine: {
                DrawingId: this.GroupId,
                Vertices: vertices,
                Color: color,
                Width: width
            }
        };
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Place a text inside a 3d scene
     * @param text The text to draw
     * @param position The position of the text
     * @param rotation The rotation of the text
     * @param size The size of the text
     * @param color The color of the text
     */
    async placeText(text, position, rotation, size, color) {
        const command = this.createCommand(Util_1.ApiCommands.PlaceText);
        command.additionalParameters = {
            PlaceText: {
                DrawingId: this.GroupId,
                Text: text,
                Position: position,
                EulerRotation: rotation,
                Color: color,
                Size: size,
                TestMode: false
            }
        };
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Place an arc
     * @param position Position of the arc
     * @param rotation Rotation of the arc
     * @param color Color of the arc
     * @param angle Angle of the arc
     * @param radius Radius of the arc
     */
    async placeArc(position, rotation, color, angle, radius) {
        const command = this.createCommand(Util_1.ApiCommands.PlaceArc);
        command.additionalParameters = {
            PlaceArc: {
                DrawingId: this.GroupId,
                Position: position,
                EulerRotation: rotation,
                Color: color,
                Angle: angle,
                Radius: radius
            }
        };
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Place a PLY mesh
     * @param color Color of the Mesh
     * @param vertices Every 3 vertecies build a face
     */
    async placePly(color, vertices) {
        const command = this.createCommand(Util_1.ApiCommands.PlacePly);
        command.additionalParameters = {
            PlacePly: {
                DrawingId: this.GroupId,
                Color: color,
                Vertices: vertices,
            }
        };
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Destroy the active drawing
     */
    async destroy() {
        const command = this.createCommand(Util_1.ApiCommands.DestroyDrawing);
        command.commandParameters.push(this.GroupId);
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * @internal
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        return command;
    }
}
exports.Layer3D = Layer3D;
