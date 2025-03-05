"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer2D = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const Util_1 = require("../Util");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
class Layer2D {
    constructor(GroupId) {
        this.GroupId = GroupId;
    }
    /**
     * Draw a Line in PID
     * @param vertices Points of the line
     * @param color The color of the line
     * @param width THe Width of the line
     */
    async drawLine(vertices, color, width) {
        const command = this.createCommand(Util_1.ApiCommands.DrawLine);
        command.additionalParameters = {
            DrawLine: {
                DrawingId: this.GroupId,
                Vertices: vertices.map(position => { return { X: position.X, Y: position.Y, Z: 0 }; }),
                Color: color,
                Width: width
            }
        };
        APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Place a text inside a pid scene
     * @param text The text to draw
     * @param position The position of the text
     * @param rotation The rotation of the text
     * @param size The size of the text
     * @param color The color of the tex
     */
    async placeText(text, position, rotation, size, color) {
        const command = this.createCommand(Util_1.ApiCommands.PlaceText);
        command.additionalParameters = {
            PlaceText: {
                DrawingId: this.GroupId,
                Text: text,
                Position: { X: position.X, Y: position.Y, Z: 0 },
                EulerRotation: { X: 0, Y: 0, Z: rotation },
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
                Position: { X: position.X, Y: position.Y, Z: 0 },
                EulerRotation: { X: 0, Y: 0, Z: rotation },
                Color: color,
                Angle: angle,
                Radius: radius
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
        command.target = Util_1.TargetEnum.Intelli;
        return command;
    }
}
exports.Layer2D = Layer2D;
