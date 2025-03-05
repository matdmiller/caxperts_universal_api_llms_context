"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterOperationPid = void 0;
const Util_1 = require("../Util");
const FilterOperation_1 = require("./FilterOperation");
const APIConnector_1 = require("../Internal/APIConnector");
/**
 * Fileropration Special for IntelliPID
 */
class FilterOperationPid extends FilterOperation_1.FilterOperation {
    constructor(scene) {
        super(scene);
        /**
         * DrawingFilter to use. Can be an array of the Pids or/and UPVCurrent (Currently active PID) or UPVAllOpen (All open Pids. Also in Background).
         * Default value is UPVCurrent
         */
        this.DrawingFilter = ["UPVCurrent"];
        /**
         * Should objects returned by GetObjects include the RawSVG of the element
         */
        this.IncludeRawSvg = false;
    }
    async getObjects() {
        const command = this.createCommand(Util_1.ApiCommands.GetObjects);
        let getRawSvg;
        if (this.IncludeRawSvg) {
            command.command = Util_1.ApiCommands.GetIntelliPidRawSvgData;
            getRawSvg = APIConnector_1.Api.get().sendCommandWithReturnType(command);
        }
        const models = await this.getBaseObjects();
        for (const model of models) {
            if (this.IncludeRawSvg) {
                model.initPid((await getRawSvg).ResultData.RawSvgPidObjects[model.Uid]);
            }
        }
        ;
        return models;
    }
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands) {
        const command = this.scene.createCommand(apiCommands);
        command.condition = this.Condition;
        command.conditionCombineMode = this.CombineMode;
        command.additionalParameters = {};
        if (this.DrawingFilter != null) {
            command.additionalParameters = {
                IntelliPidDrawingFilter: this.DrawingFilter
            };
        }
        return command;
    }
}
exports.FilterOperationPid = FilterOperationPid;
