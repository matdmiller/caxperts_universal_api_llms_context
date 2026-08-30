import { GetGenerateAnimationKeyframe } from "../ResponseTypes";
import { AnimationInfo, AnimationStateData, AnimationTransition, FeatureTypes, Get, GetSet } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
/**
 * A single state (keyframe value) of an animation.
 * It represents the value of one attribute of one element at a specific point in time
 * and exposes the transition that leads into the next state.
 */
export declare class AnimationState {
    /**
     * The position of the state on the timeline in milliseconds since the start
     */
    MillisecondsSinceStart: number;
    /**
     * The element uid the state belongs to
     */
    Uid: string;
    /**
     * The attribute key the state animates
     */
    Attribute: string;
    /**
     * The value of the state. Can be a string, a stringified number or a hex color code
     */
    Value: string;
    /**
     * Get or set the transition leading into this state
     */
    Transition: GetSet<AnimationTransition>;
    /**
     * @internal
     * @param animationId the id of the animation this state belongs to
     * @param data the raw state data returned by the viewer
     */
    constructor(animationId: number, data: AnimationStateData);
}
export declare class FileTreeAnimation extends FileTreeElement {
    /**
     * Get the current playback time of the animation in milliseconds, or set it to seek
     */
    AnimationCurrentTime: GetSet<number>;
    /**
     * Get all states currently defined on the animation
     */
    AnimationStates: Get<AnimationState[]>;
    /**
     * Get playback information about the animation (start, end, current time and playing state)
     */
    Info: Get<AnimationInfo>;
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Start (or resume) playback of the animation
     */
    start(): Promise<void>;
    /**
     * Stop playback of the animation and reset it to the start
     */
    stop(): Promise<void>;
    /**
     * Pause playback of the animation at the current time
     */
    pause(): Promise<void>;
    /**
     * Generate a new keyframe for the animation using the specified sketching uids
     * @deprecated use {@link createStates} instead
     * @param millisecondsSinceStart at what time in the timeline the keyframe should be inserted
     * @param elementUids sketching uids to use
     * @returns
     */
    generateAnimationKeyframe(millisecondsSinceStart: number, elementUids: string[]): Promise<GetGenerateAnimationKeyframe>;
    /**
     * Read the animated value of a single element attribute at the given time
     * @param millisecondsSinceStart the time on the timeline in milliseconds
     * @param uid the element uid
     * @param attribute the attribute key
     * @returns the value as a string. Can be a stringified number or a hex color code
     */
    getValue(millisecondsSinceStart: number, uid: string, attribute: string): Promise<string>;
    /**
     * Create a single state for one element attribute at the given time
     * @param millisecondsSinceStart the time on the timeline in milliseconds
     * @param uid the element uid
     * @param attribute the attribute key
     * @param value the value to set. Can be a string, a stringified number or a hex color code
     * @returns the created state
     */
    createState(millisecondsSinceStart: number, uid: string, attribute: string, value: string): Promise<AnimationState>;
    /**
     * Generate states for the given elements at the given time using their current values
     * @param millisecondsSinceStart the time on the timeline in milliseconds
     * @param elementUids the element uids to create states for
     * @returns the states that were created for the given time and elements
     */
    createStates(millisecondsSinceStart: number, elementUids: string[]): Promise<AnimationState[]>;
    /**
     * Delete a state from the animation
     * @param state the state to delete
     */
    deleteState(state: AnimationState): Promise<void>;
    private getStates;
    private getInfo;
}
//# sourceMappingURL=FileTreeAnimation.d.ts.map