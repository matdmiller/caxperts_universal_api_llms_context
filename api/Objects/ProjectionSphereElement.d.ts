import { Model } from "../Objects/Model";
import { ProjectionSphere, Vector3D } from "../Util";
export declare class ProjectionSphereElement {
    readonly projectionSphere: ProjectionSphere;
    private readonly model;
    constructor(projectionSphere: ProjectionSphere, model: Model);
    /**
     * Enter the Projection
     * @param opacity optional (default=-1), is set overwrite the opacity value with the new value. If -1 is provided the last value will be used. Value between 0 (transparent) to 100 (opaque)
     * @param rotation optional(default=-1), enter a rotation to view the projection from. If -1 is used for all axis UPV decides
     * @param noUi optional (default=false), if true no UI will be visible
     * @returns
     */
    enterProjectionSphere(opacity?: number, rotation?: Vector3D, noUi?: boolean): Promise<import("..").ApiResponse>;
    /**
     * Leave the current Projection
     * @returns
     */
    leaveProjectionSphere(): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=ProjectionSphereElement.d.ts.map