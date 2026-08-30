import { AttributeTreeNode } from "./AttributeTree";
import { ApiResponse } from "../ResponseTypes";
import { Scene } from "../Scenes";
import { ClippingDescriptor, ApiCommands, Package, ClashMode } from "../Util";
import { FilterOperation } from "./FilterOperation";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ClashContext } from "./ClashContext";
import { ModelObject } from "./ModelObject";
export declare class FilterOperation3d extends FilterOperation {
    constructor(scene: Scene);
    /**
     * Should objects returned by GetObjects include the boundingbox
     */
    IncludeBoundingBox: boolean;
    /**
     * Should objects returned by GetObjects include Colors
     */
    IncludeColors: boolean;
    /**
     * Should objects returned by GetObjects include SnapInfo
     */
    IncludeSnapInfo: boolean;
    /**
     * Advanced API Clipping
     */
    ApiClippingDescriptor?: ClippingDescriptor;
    /**
     * Advanced API Filtering using the Package Logic
     * used to create more advanced posibilities then {@link Condition} and {@link CombineMode}
     * The Condition property is still evaluated. So its best to use a match all query like Uid=*
     */
    APIPackageFilter?: Package;
    /**
     * All objects based on the attributes specified in the FilterOperation
     */
    getObjects(): Promise<ModelObject[]>;
    /**
     * Highlights all Elements hit by FilterOperation
     * @returns
     */
    highlight(): Promise<ApiResponse>;
    /**
     * Clears any active hightlighting
     * @returns
     */
    clearHighlight(): Promise<ApiResponse>;
    /**
     * Show only objects hit by the FilterOpration
     * @returns
     */
    showOnly(): Promise<ApiResponse>;
    /**
     * Set the Visibility of all objects hit by this Filteropration
     * @param state new state (show/true, hide/false)
     * @returns
     */
    setVisibility(state: boolean): Promise<ApiResponse>;
    /**
     * activate a volumeClip Operation around objects hit by this Filteroperation
     * @param radius
     * @returns
     */
    volumeClip(radius: number): Promise<ApiResponse>;
    getTreeStructure(): Promise<{
        [id: string]: AttributeTreeNode[];
    }>;
    /**
     * @experimental
     * @param tolerance for clashes, default is 0.001. This means that if the distance between two objects is less than 0.001 units, they are considered to be in clash. The unit of the tolerance is the same as the unit of the model.
     * @param aspectsToIgnore list of aspects to ignore during clash detection
     * @param aspectsToInclude list of aspects to include during clash detection
     * @param mode mode of clash detection
     * @param includeSketches whether to include sketches in the clash detection
     * @param computeCandidatesOnly whether to compute only clash candidates
     * @param packageA first package for clash detection
     * @param PackageB comparison package for clash detection, only used in PackageAAgainstPackageBWithinQuery mode
     * @returns
     */
    startClashComputation(tolerance?: number, aspectsToIgnore?: string[], aspectsToInclude?: string[], mode?: ClashMode, includeSketches?: boolean, computeCandidatesOnly?: boolean, packageA?: Package, PackageB?: Package): Promise<ClashContext>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=FilterOperation3D.d.ts.map