import { Vector2D, Vector3D, CameraView, GetSet, ClippingPlane, ScreenCoordinateMode } from "../Util";
import { Scene3d } from "../Scenes";
import { ApiResponse, RaycastScreenPointResult } from "../ResponseTypes";
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
    /**
     * Raycast a screen coordinate into the model, returning the hit point and
     * object. Unlike the PointerClicked
     * event (which only fires on a real user click), this can be called on demand
     * for any coordinate.
     * @param screenPoint Screen coordinate. Origin (0,0) = bottom-left.
     * @param mode Interpret {@link screenPoint} as pixels or normalized 0..1 percent (default).
     * @returns The raycast result, including whether an object was hit.
     */
    raycastScreenPoint(screenPoint: Vector2D, mode?: ScreenCoordinateMode): Promise<RaycastScreenPointResult>;
}
//# sourceMappingURL=Camera.d.ts.map