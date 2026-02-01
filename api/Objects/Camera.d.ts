import { Vector3D, CameraView, GetSet, ClippingPlane } from "../Util";
import { Scene3d } from "../Scenes";
import { ApiResponse } from "../ResponseTypes";
export declare class Camera {
    private scene;
    /**
     * Access to the cameras position
     */
    Position: GetSet<Vector3D>;
    /**
     * Access to the cameras rotation
     */
    Rotation: GetSet<Vector3D>;
    /**
     * Access to the cameras position and rotation combined (faster)
     */
    CameraView: GetSet<CameraView>;
    /**
     * Access to the cameras position and rotation combined (faster)
     */
    ClippingPlane: GetSet<ClippingPlane>;
    /**
     * @internal
     * @param scene
     */
    constructor(scene: Scene3d);
    private setCameraView;
    private getCameraView;
    private getClippingPlane;
    private setClippingPlane;
    /**
     * Make the camera look at a target from the current view
     * @param target Vector of the target
     * @returns
     */
    lookAt(target: Vector3D): Promise<ApiResponse>;
    /**
     * Reset the view to the default position
     * @returns
     */
    resetView(): Promise<ApiResponse>;
}
//# sourceMappingURL=Camera.d.ts.map