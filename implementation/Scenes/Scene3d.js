"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene3d = void 0;
const Objects_1 = require("../Objects");
const Scene_1 = require("./Scene");
const Util_1 = require("../Util");
const APIConnector_1 = require("../Internal/APIConnector");
/**
 * 3D Scene
 */
class Scene3d extends Scene_1.Scene {
    constructor(id) {
        super(id);
        this.DefaultFilter = new Objects_1.FilterOperation3d(this);
        this.Camera = new Objects_1.Camera(this);
        this.UiClippingDescriptor = new Util_1.GetSet(async () => {
            const command = this.createCommand(Util_1.ApiCommands.GetClippingInfo);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
                .Clipping;
        }, async (value) => {
            if (value.Mode === Util_1.ClippingMode.None) {
                await APIConnector_1.Api.get().sendCommand(this.createCommand(Util_1.ApiCommands.ClearClipping));
            }
            else if (value.Mode === Util_1.ClippingMode.Intelli) {
                await this.intelliClip(value.IntelliClipping.Elements.map((x) => { return 'Uid=' + x; }).join("&"), value.IntelliClipping.Offset, Util_1.CombineModes.Or);
            }
            else if (value.Mode === Util_1.ClippingMode.Volume) {
                await this.volumeClipByCoordinates(value.VolumeClipping.Bounds.Min, value.VolumeClipping.Bounds.Max);
            }
        });
        this.TreeConfiguration = new Util_1.GetSet(async () => {
            const command = this.createCommand(Util_1.ApiCommands.GetTreeConfiguration);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
                .TreeConfiguration;
        }, async (value) => {
            const command = this.createCommand(Util_1.ApiCommands.SetTreeConfiguration);
            command.commandParameters = value;
            await APIConnector_1.Api.get().sendCommand(command);
        });
        this.VisibleAspects = new Util_1.GetSet(async () => {
            const command = this.createCommand(Util_1.ApiCommands.GetVisibleAspects);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
                .VisibleAspects;
        }, async (value) => {
            const command = this.createCommand(Util_1.ApiCommands.SetVisibleAspects);
            command.commandParameters = value;
            await APIConnector_1.Api.get().sendCommand(command);
        });
    }
    /**
     * Create a new Filteropration
     * @returns FilterOperation3d
     */
    getNewFilter() {
        return new Objects_1.FilterOperation3d(this);
    }
    async intelliClip(condition, radius, combineModes = Util_1.CombineModes.And) {
        const command = this.createCommand(Util_1.ApiCommands.IntelliClip);
        command.condition = condition;
        command.commandParameters.push(radius.toString());
        command.conditionCombineMode = combineModes;
        return APIConnector_1.Api.get().sendCommand(command);
    }
    async volumeClipByCoordinates(min, max) {
        const command = this.createCommand(Util_1.ApiCommands.VolumeClipByCoordinates);
        command.commandParameters.push(min.X.toString());
        command.commandParameters.push(min.Y.toString());
        command.commandParameters.push(min.Z.toString());
        command.commandParameters.push(max.X.toString());
        command.commandParameters.push(max.Y.toString());
        command.commandParameters.push(max.Z.toString());
        return APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.Scene3d = Scene3d;
