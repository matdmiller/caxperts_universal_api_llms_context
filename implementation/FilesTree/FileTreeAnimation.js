"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeAnimation = exports.AnimationState = void 0;
const APIConnector_1 = require("../Internal/APIConnector");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
const Util_1 = require("../Util");
const FileTreeElement_1 = require("./FileTreeElement");
/**
 * A single state (keyframe value) of an animation.
 * It represents the value of one attribute of one element at a specific point in time
 * and exposes the transition that leads into the next state.
 */
class AnimationState {
    /**
     * @internal
     * @param animationId the id of the animation this state belongs to
     * @param data the raw state data returned by the viewer
     */
    constructor(animationId, data) {
        this.MillisecondsSinceStart = data.MillisecondsSinceStart;
        this.Uid = data.Uid;
        this.Attribute = data.Attribute;
        this.Value = data.Value;
        this.Transition = new Util_1.GetSet(async () => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetAnimationStateTransition);
            command.commandParameters.push(animationId.toString());
            command.additionalParameters.GetAnimationStateTransition = {
                MillisecondsSinceStart: this.MillisecondsSinceStart,
                Uid: this.Uid,
                Attribute: this.Attribute,
            };
            const response = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
            return response.ResultData.Transition;
        }, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAnimationStateTransition);
            command.commandParameters.push(animationId.toString());
            command.additionalParameters.SetAnimationStateTransition = {
                MillisecondsSinceStart: this.MillisecondsSinceStart,
                Uid: this.Uid,
                Attribute: this.Attribute,
                Transition: value,
            };
            await APIConnector_1.Api.get().sendCommand(command);
        });
    }
}
exports.AnimationState = AnimationState;
class FileTreeAnimation extends FileTreeElement_1.FileTreeElement {
    constructor(id, name, type) {
        super(id, name, type);
        this.AnimationCurrentTime = new Util_1.GetSet(async () => (await this.getInfo()).CurrentTimeMilliseconds, async (value) => {
            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAnimationCurrentTime);
            command.additionalParameters.SetAnimationCurrentTime = {
                CurrentTimeMilliseconds: value,
            };
            await APIConnector_1.Api.get().sendCommand(command);
        });
        this.AnimationStates = new Util_1.Get(async () => this.getStates());
        this.Info = new Util_1.Get(async () => this.getInfo());
    }
    /**
     * Start (or resume) playback of the animation
     */
    async start() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.AnimationStart);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Stop playback of the animation and reset it to the start
     */
    async stop() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.AnimationStop);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Pause playback of the animation at the current time
     */
    async pause() {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.AnimationPause);
        await APIConnector_1.Api.get().sendCommand(command);
    }
    /**
     * Generate a new keyframe for the animation using the specified sketching uids
     * @deprecated use {@link createStates} instead
     * @param millisecondsSinceStart at what time in the timeline the keyframe should be inserted
     * @param elementUids sketching uids to use
     * @returns
     */
    async generateAnimationKeyframe(millisecondsSinceStart, elementUids) {
        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GenerateAnimationKeyframe);
        command.target = Util_1.TargetEnum.ThreeD;
        command.additionalParameters.GenerateAnimationKeyframe = {
            ElementGuids: elementUids,
            MillisecondsSinceStart: millisecondsSinceStart,
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * Read the animated value of a single element attribute at the given time
     * @param millisecondsSinceStart the time on the timeline in milliseconds
     * @param uid the element uid
     * @param attribute the attribute key
     * @returns the value as a string. Can be a stringified number or a hex color code
     */
    async getValue(millisecondsSinceStart, uid, attribute) {
        const command = this.createCommand(Util_1.ApiCommands.GetAnimationValue);
        command.additionalParameters.GetAnimationValue = {
            MillisecondsSinceStart: millisecondsSinceStart,
            Uid: uid,
            Attribute: attribute,
        };
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Value;
    }
    /**
     * Create a single state for one element attribute at the given time
     * @param millisecondsSinceStart the time on the timeline in milliseconds
     * @param uid the element uid
     * @param attribute the attribute key
     * @param value the value to set. Can be a string, a stringified number or a hex color code
     * @returns the created state
     */
    async createState(millisecondsSinceStart, uid, attribute, value) {
        const command = this.createCommand(Util_1.ApiCommands.CreateAnimationState);
        command.additionalParameters.CreateAnimationState = {
            MillisecondsSinceStart: millisecondsSinceStart,
            Uid: uid,
            Attribute: attribute,
            Value: value,
        };
        const response = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        return new AnimationState(this.Id, response.ResultData.AnimationState);
    }
    /**
     * Generate states for the given elements at the given time using their current values
     * @param millisecondsSinceStart the time on the timeline in milliseconds
     * @param elementUids the element uids to create states for
     * @returns the states that were created for the given time and elements
     */
    async createStates(millisecondsSinceStart, elementUids) {
        await this.generateAnimationKeyframe(millisecondsSinceStart, elementUids);
        const states = await this.getStates();
        return states.filter((state) => state.MillisecondsSinceStart === millisecondsSinceStart && elementUids.includes(state.Uid));
    }
    /**
     * Delete a state from the animation
     * @param state the state to delete
     */
    async deleteState(state) {
        const command = this.createCommand(Util_1.ApiCommands.DeleteAnimationState);
        command.additionalParameters.DeleteAnimationState = {
            MillisecondsSinceStart: state.MillisecondsSinceStart,
            Uid: state.Uid,
            Attribute: state.Attribute,
        };
        await APIConnector_1.Api.get().sendCommand(command);
    }
    async getStates() {
        const command = this.createCommand(Util_1.ApiCommands.GetAnimationStates);
        const response = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        return response.ResultData.AnimationStates.map((data) => new AnimationState(this.Id, data));
    }
    async getInfo() {
        const command = this.createCommand(Util_1.ApiCommands.GetAnimationInfo);
        const response = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
        return response.ResultData.AnimationInfo;
    }
}
exports.FileTreeAnimation = FileTreeAnimation;
