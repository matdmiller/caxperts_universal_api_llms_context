import { ApiCommands, QualityLevel, TextureRenderMode } from "../Util/Enums";
import { Get, GetSet } from "../Util/GetSet";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
export declare class Settings {
    /**
     * Return the current Ui Colors
     */
    UiColors: Get<{
        [key: string]: string;
    }>;
    /**
     * Return the current Ui Variables
     * This includes colors as well as non color attributes(roundness etc)
     */
    UiVariables: Get<{
        [key: string]: string;
    }>;
    /**
     * Set or get the Ui theme via the uid of the theme
     */
    CurrentUiTheme: GetSet<string>;
    /**
     * Returns the key and description for the available themes
     */
    AvailableUiThemes: Get<{
        id: string;
        description: string;
    }[]>;
    /**
     * The current language of UPV
     */
    Language: GetSet<string>;
    /**
     * Set or get the current Rendermode. Normal/Hightmap or no textures
     */
    TextureMode: GetSet<TextureRenderMode>;
    /**
     * Set or get the current quality level used for rendering in UPV
     */
    RenderQuality: GetSet<QualityLevel>;
    /**
     * Set or get the current panorama centres visibility
     */
    PanoramaCentresVisibility: GetSet<boolean>;
    WindowLayoutXML: GetSet<string>;
    WindowLayoutJson: GetSet<string>;
    constructor();
    private getAvailableUiThemes;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Settings.d.ts.map