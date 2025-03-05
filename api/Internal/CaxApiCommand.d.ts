import { ParameterBase } from "../Util/ParameterBase";
import { ApiCommands, CombineModes } from "../Util/Enums";
/** @internal */
export declare class CaxApiCommand {
    requestId: number;
    additionalParameters: ParameterBase;
    command: ApiCommands;
    commandParameters: string[];
    condition: string;
    conditionCombineMode: CombineModes;
    model: string;
    target: string;
    constructor(command: ApiCommands);
}
//# sourceMappingURL=CaxApiCommand.d.ts.map