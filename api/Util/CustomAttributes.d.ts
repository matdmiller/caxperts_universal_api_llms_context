import { ApiResponse } from "../ResponseTypes";
import { CaxApiCommand } from "../Internal/CaxApiCommand";
import { ApiCommands, UpdateModes } from "../Util/Enums";
import { Model } from "../Objects";
import { ChangeSetLine, Definition } from "../Util";
/**
 * Contains the file variants. These might be made unavailable in future versions and replaced by new commands
 * */
export declare class CustomAttributeLegacy {
    private customAttributes;
    constructor(customAttributes: CustomAttributes);
    loadCustomAttributeConfigurationFile(file: string): Promise<ApiResponse>;
    loadCustomAttributeDataFile(file: string): Promise<ApiResponse>;
}
export declare class CustomAttributes {
    private model;
    constructor(model: Model);
    get Legacy(): CustomAttributeLegacy;
    clearCustomAttributes(): Promise<ApiResponse>;
    loadCustomAttributeConfigurationBase64(contentBase64: string): Promise<ApiResponse>;
    loadCustomAttributeDataBase64(contentBase64: string): Promise<ApiResponse>;
    importCustomAttributeChangeSet(changeSets: ChangeSetLine[], showLoadScreen: boolean): Promise<ApiResponse>;
    setCustomAttributeConfiguration(definitions: Definition[], updateMode: UpdateModes): Promise<ApiResponse>;
    getCustomAttributeConfiguration(): Promise<Definition[]>;
    exportCustomAttributes(exportAll: boolean): Promise<import("./BaseDataTypes").ExportCustomAttributes>;
    /**
     * @internal
     */
    createCommand(apiCommands: ApiCommands): CaxApiCommand;
}
//# sourceMappingURL=CustomAttributes.d.ts.map