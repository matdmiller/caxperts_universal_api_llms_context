import { IntelliPidDrawing, Pdf, ProjectionSphereElement } from ".";
import { ApiResponse } from "../ResponseTypes";
import { Scene } from "../Scenes/Scene";
import { ModelInfo, ProjectInfo } from "../Util/BaseDataTypes";
import { ApiCommands } from "../Util/Enums";
import { CustomAttributes } from "../Util";
import { Get } from "../Util/GetSet";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
/**
 * @legacy
 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
 * */
export declare class ModelLegacy {
    private model;
    constructor(model: Model);
    /**
         * might be removed in future from wrapper
         * @legacy
         * @param path
         * @returns
         */
    loadConfigFile(file: string): Promise<ApiResponse>;
}
export declare class Model {
    Id: string;
    get Legacy(): ModelLegacy;
    Scenes: Scene[];
    ModelInfo: Get<ModelInfo[]>;
    ProjectInfo: Get<ProjectInfo>;
    /**
     * Current Porjections inside the model. 360 Panoramas and mapped imanges
     */
    Projections: Get<ProjectionSphereElement[]>;
    /**
     * Currently open projection. the Get result is null if currently not inside a projection.
     */
    CurrentProjection: Get<ProjectionSphereElement>;
    /**
     * Pids inside the model
     */
    Pids: Get<IntelliPidDrawing[]>;
    /**
     * Currently open Pids
    */
    OpenPids: Get<IntelliPidDrawing[]>;
    /**
     * Currently active Pid. Either a element or null if not one is active
     */
    ActivePid: Get<IntelliPidDrawing>;
    /**
     * Pdfs inside the model
     */
    Pdfs: Get<Pdf[]>;
    /**
     * Currently open Pdfs
    */
    OpenPdfs: Get<Pdf[]>;
    /**
     * Currently active Pid. Either a element or null if not one is active
     */
    ActivePdf: Get<Pdf>;
    /**
     * Access Custom Attributes
     */
    get CustomAttributes(): CustomAttributes;
    constructor(Id: string);
    /**
     * Retrieve the unique attribute values in 3D. Pass the attribute keys for which you are intrested in recieving attributes
     * @param attributes at least one is required
     * @returns
     */
    getUniqueAttributeValues3D(attribute: string): Promise<string[]>;
    /**
     * Retrieve the unique attribute values in Pid. Pass the attribute keys for which you are intrested in recieving attributes
     * @param attributes at least one is required
     * @returns
     */
    gGetUniqueAttributeValuesPid(attribute: string): Promise<string[]>;
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=Model.d.ts.map