import { ApiCommands, SceneType } from "../Util";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
/**
 * Basesclass of all Scenes
 */
export declare abstract class Scene {
    Id: string;
    constructor(Id: string);
    /**
     * Describes what type a scene is
     */
    SceneType: SceneType;
    /**
     * Load a colorfile via a file
     * @param file path to excel colorfile
     * @returns ApiResponse can be ignored and will likely change
     */
    loadColorFile(file: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Load a linkfile via a file
     * @param file path to excel linkfile
     * @returns ApiResponse can be ignored and will likely change
     */
    loadLinkFile(file: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Clears all Links
     * @returns ApiResponse can be ignored and will likely change
     */
    clearLinks(): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Takes a screenshot and returns the base64. By default saves as png
     * @param width Width of the output picture
     * @param height Height of the output picture
     * @param fieldOfView Field of View (default 90)
     * @param hideUi Draw UI in picture (default false)
     * @param enableAntiAliasing Use AntiAliasing (default true)
     * @param enableTransparentBackground Draws the brackground transparent (only Shows the model, only works in png) (default false)
     * @param modelInBestQuality Take the screenshot of the model in the best quality (default false)
     * @param format jpg or png (default png)
     * @returns
     */
    takeScreenshot(width: number, height: number, fieldOfView?: number, hideUi?: boolean, enableAntiAliasing?: boolean, enableTransparentBackground?: boolean, modelInBestQuality?: boolean, format?: string): Promise<import("../Util").TakeScreenshot>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Scene.d.ts.map