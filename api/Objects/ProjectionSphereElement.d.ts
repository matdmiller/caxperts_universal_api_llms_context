import { Model } from "../Objects/Model";
import { ProjectionSphere, Vector3D } from "../Util";
export declare class ProjectionSphereElement {
    readonly projectionSphere: ProjectionSphere;
    private readonly model;
    constructor(projectionSphere: ProjectionSphere, model: Model);
    /**
     * Enter the Projection
     * @param opacity optional, is set overwrite the opacity value with the new value
     * @param rotation optional, enter a rotation to view the projection from
     * @returns
     */
    enterProjectionSphere(opacity?: number, rotation?: Vector3D): Promise<import("..").ApiResponse>;
    /**
     * Leave the current Projection
     * @returns
     */
    leaveProjectionSphere(): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=ProjectionSphereElement.d.ts.map