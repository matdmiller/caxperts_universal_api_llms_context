"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.ModelLegacy = void 0;
const _1 = require(".");
const APIConnector_1 = require("../Internal/APIConnector");
const Enums_1 = require("../Util/Enums");
const Util_1 = require("../Util");
const GetSet_1 = require("../Util/GetSet");
const CaxApiCommand_1 = require("../Internal/CaxApiCommand");
/**
 * @legacy
 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
 * */
class ModelLegacy {
    constructor(model) {
        this.model = model;
    }
    /**
         * might be removed in future from wrapper
         * @legacy
         * @param path
         * @returns
         */
    async loadConfigFile(file) {
        const command = this.model.createCommand(Enums_1.ApiCommands.LoadConfigFile);
        command.commandParameters.push(file);
        return await APIConnector_1.Api.get().sendCommand(command);
    }
}
exports.ModelLegacy = ModelLegacy;
class Model {
    get Legacy() {
        return new ModelLegacy(this);
    }
    /**
     * Access Custom Attributes
     */
    get CustomAttributes() {
        return new Util_1.CustomAttributes(this);
    }
    constructor(Id) {
        this.Id = Id;
        this.ModelInfo = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetModelInfo);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.ModelInfo;
        });
        this.ProjectInfo = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetProjectInfo);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.ProjectInfo;
        });
        this.Projections = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetProjectionSpheres);
            const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command));
            return result.ResultData.ProjectionSpheres.map((x) => new _1.ProjectionSphereElement(x, this));
        });
        this.CurrentProjection = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetCurrentProjectionSphere);
            const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command));
            if (result.ResultData == null)
                return null;
            return new _1.ProjectionSphereElement(result.ResultData, this);
        });
        this.Pids = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetAllPids);
            return Object.values((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetIntelliPidDrawings).map(x => new _1.IntelliPidDrawing(x, this));
        });
        this.OpenPids = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetOpenPids);
            return Object.values((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetIntelliPidDrawings).map(x => new _1.IntelliPidDrawing(x, this));
        });
        this.ActivePid = new GetSet_1.Get(async () => {
            var _a;
            const command = this.createCommand(Enums_1.ApiCommands.GetActivePid);
            return (_a = Object.values((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetIntelliPidDrawings).map(x => new _1.IntelliPidDrawing(x, this)).find(_ => true)) !== null && _a !== void 0 ? _a : null;
        });
        this.Pdfs = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetAllPdfs);
            command.commandParameters.push(Enums_1.PdfTypes.All);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetPdfInfos.map(x => new _1.Pdf(x, this));
        });
        this.OpenPdfs = new GetSet_1.Get(async () => {
            const command = this.createCommand(Enums_1.ApiCommands.GetOpenPdfsTabs);
            command.commandParameters.push(Enums_1.PdfTypes.All);
            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetPdfInfos.map(x => new _1.Pdf(x, this));
        });
        this.ActivePdf = new GetSet_1.Get(async () => {
            var _a;
            const command = this.createCommand(Enums_1.ApiCommands.GetActivePdfTab);
            command.commandParameters.push(Enums_1.PdfTypes.All);
            return (_a = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetPdfInfos.map(x => new _1.Pdf(x, this)).find(_ => true)) !== null && _a !== void 0 ? _a : null;
        });
    }
    /**
     * Retrieve the unique attribute values in 3D. Pass the attribute keys for which you are intrested in recieving attributes
     * @param attributes at least one is required
     * @returns
     */
    async getUniqueAttributeValues3D(attribute) {
        const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetModelAttributeValues);
        command.commandParameters.push(attribute);
        command.target = Enums_1.TargetEnum.ThreeD;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.ModelAttributeValues[attribute];
    }
    /**
     * Retrieve the unique attribute values in Pid. Pass the attribute keys for which you are intrested in recieving attributes
     * @param attributes at least one is required
     * @returns
     */
    async getUniqueAttributeValuesPid(attribute) {
        const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetModelAttributeValues);
        command.commandParameters.push(attribute);
        command.target = Enums_1.TargetEnum.Intelli;
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.ModelAttributeValues[attribute];
    }
    async createDiameterMeasurement(position) {
        const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.CreateDiameterMeasurement);
        command.commandParameters.push(position.X.toString());
        command.commandParameters.push(position.Y.toString());
        command.commandParameters.push(position.Z.toString());
        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
    }
    /**
     * @internal
     * @param apiCommands
     * @returns
     */
    createCommand(apiCommands) {
        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
        command.target = this.Id;
        return command;
    }
}
exports.Model = Model;
