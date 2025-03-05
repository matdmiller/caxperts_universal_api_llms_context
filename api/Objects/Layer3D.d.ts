import { Color, Instance, Vector3D } from "../Util";
export declare class Layer3D {
    GroupId: string;
    constructor(GroupId: string);
    /**
     * Place an OBJ in the scene
     * @param obj Path to the obj file
     * @param instances The Instances of this object
     * @param suppressLoadingScreen
     */
    placeObj(obj: string, instances: Instance[], suppressLoadingScreen?: boolean): Promise<void>;
    /**
     * Draw a Line in 3D
     * @param vertices Points of the line
     * @param color The color of the line
     * @param width THe Width of the line
     */
    drawLine(vertices: Vector3D[], color: Color, width: number): Promise<void>;
    /**
     * Place a text inside a 3d scene
     * @param text The text to draw
     * @param position The position of the text
     * @param rotation The rotation of the text
     * @param size The size of the text
     * @param color The color of the text
     */
    placeText(text: string, position: Vector3D, rotation: Vector3D, size: number, color: Color): Promise<void>;
    /**
     * Place an arc
     * @param position Position of the arc
     * @param rotation Rotation of the arc
     * @param color Color of the arc
     * @param angle Angle of the arc
     * @param radius Radius of the arc
     */
    placeArc(position: Vector3D, rotation: Vector3D, color: Color, angle: number, radius: number): Promise<void>;
    /**
     * Place a PLY mesh
     * @param color Color of the Mesh
     * @param vertices Every 3 vertecies build a face
     */
    placePly(color: Color, vertices: Vector3D[]): Promise<void>;
    /**
     * Destroy the active drawing
     */
    destroy(): Promise<void>;
    /**
     * @internal
     */
    private createCommand;
}
//# sourceMappingURL=Layer3D.d.ts.map