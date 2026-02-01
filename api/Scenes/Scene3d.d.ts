import { Camera, FilterOperation3d } from '../Objects';
import { Scene } from './Scene';
import { ClippingDescriptor, GetSet } from '../Util';
/**
 * 3D Scene
 */
export declare class Scene3d extends Scene {
    constructor(id: string);
    /**
     * The UI Cliping descriptor currently active
     */
    UiClippingDescriptor: GetSet<ClippingDescriptor>;
    /**
     * The default filter available
     * More filters can be created using {@link getNewFilter}
     */
    DefaultFilter: FilterOperation3d;
    /**
     * The Camera object for this scene
     */
    Camera: Camera;
    /**
         * The current Tree Configuration of this scene
         * This might move
         */
    TreeConfiguration: GetSet<string[]>;
    /**
     * Defines what aspects are currently visible
     */
    VisibleAspects: GetSet<string[]>;
    /**
     * Create a new Filteropration
     * @returns FilterOperation3d
     */
    getNewFilter(): FilterOperation3d;
    private intelliClip;
    private volumeClipByCoordinates;
}
//# sourceMappingURL=Scene3d.d.ts.map