import { GetGenerateAnimationKeyframe } from "../ResponseTypes";
import { FeatureTypes, Set } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeAnimation extends FileTreeElement {
    /**
     * Set the time of the animation in milliseconds
     */
    AnimationCurrentTime: Set<number>;
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Generate a new keyframe for the animation using the specified sketching uids
     * @param millisecondsSinceStart at what time in the timeline the keyframe should be inserted
     * @param elementUids sketching uids to use
     * @returns
     */
    generateAnimationKeyframe(millisecondsSinceStart: number, elementUids: string[]): Promise<GetGenerateAnimationKeyframe>;
}
//# sourceMappingURL=FileTreeAnimation.d.ts.map