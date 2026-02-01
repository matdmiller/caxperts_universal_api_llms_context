"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeAnimation = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
class FileTreeAnimation extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
        this.AnimationCurrentTime = new Util_1.Set(async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAnimationCurrentTime);
            command.additionalParameters.SetAnimationCurrentTime = {
                CurrentTimeMilliseconds: value
            };
            await APIConnector_1.Api.get().sendCommand(command);
        });
    }
    /**
     * Generate a new keyframe for the animation using the specified sketching uids
     * @param millisecondsSinceStart at what time in the timeline the keyframe should be inserted
     * @param elementUids sketching uids to use
     * @returns
     */
    async generateAnimationKeyframe(millisecondsSinceStart, elementUids) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GenerateAnimationKeyframe);
        command.target = Util_1.TargetEnum.ThreeD;
        command.additionalParameters.GenerateAnimationKeyframe = {
            ElementGuids: elementUids,
            MillisecondsSinceStart: millisecondsSinceStart
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
}
exports.FileTreeAnimation = FileTreeAnimation;
