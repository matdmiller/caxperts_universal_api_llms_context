"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfDocumentParameter = exports.LoadFileDialogParameters = exports.SaveFileDialogParameters = exports.AttributeKeyValue = exports.PlacePrimitiveParameter = exports.PlaceSymbolParameter = exports.AddPidToPdfPrinterParameter = exports.GetClashesParameter = exports.FilesTreeCreateCommentParameter = exports.GetFilesTreeContentParameter = exports.FilesTreeSetStateParameter = exports.SetPidSketchToolParameter = exports.OpenAuthenticationContextParameter = exports.SetMarkupToolParameter = exports.PackageCondition = exports.Package = exports.PackageFilterParameter = exports.ApiMetadata = exports.ApiSerializationContainer = exports.FilesTreeImportContainerParameter = exports.ProcessFileParameter = exports.ExportCustomAttributesParameter = exports.SetCustomAttributeConfigParameter = exports.ImportCustomAttributeChangeSetParameter = exports.LoadCustomAttributeDataFileParameter = exports.LoadCustomAttributeConfigurationFileParameter = exports.AttributePoi = exports.Link = exports.PoIWithCommentParameter = exports.PlacePoiParameter = exports.PlaceObjParameter = exports.PlacePlyParameter = exports.PlaceArcParameter = exports.PlaceTextParameter = exports.DrawLineParameter = exports.IntelliClippingDescriptor = exports.VolumeClippingDescriptor = exports.ClippingDescriptor = exports.ParameterBase = void 0;
const _1 = require(".");
class ParameterBase {
}
exports.ParameterBase = ParameterBase;
class ClippingDescriptor {
}
exports.ClippingDescriptor = ClippingDescriptor;
class VolumeClippingDescriptor {
}
exports.VolumeClippingDescriptor = VolumeClippingDescriptor;
class IntelliClippingDescriptor {
}
exports.IntelliClippingDescriptor = IntelliClippingDescriptor;
class DrawLineParameter {
}
exports.DrawLineParameter = DrawLineParameter;
class PlaceTextParameter {
}
exports.PlaceTextParameter = PlaceTextParameter;
class PlaceArcParameter {
}
exports.PlaceArcParameter = PlaceArcParameter;
class PlacePlyParameter {
}
exports.PlacePlyParameter = PlacePlyParameter;
class PlaceObjParameter {
}
exports.PlaceObjParameter = PlaceObjParameter;
class PlacePoiParameter {
}
exports.PlacePoiParameter = PlacePoiParameter;
class PoIWithCommentParameter extends PlacePoiParameter {
}
exports.PoIWithCommentParameter = PoIWithCommentParameter;
class Link {
}
exports.Link = Link;
class AttributePoi {
}
exports.AttributePoi = AttributePoi;
class LoadCustomAttributeConfigurationFileParameter {
}
exports.LoadCustomAttributeConfigurationFileParameter = LoadCustomAttributeConfigurationFileParameter;
class LoadCustomAttributeDataFileParameter {
}
exports.LoadCustomAttributeDataFileParameter = LoadCustomAttributeDataFileParameter;
class ImportCustomAttributeChangeSetParameter {
}
exports.ImportCustomAttributeChangeSetParameter = ImportCustomAttributeChangeSetParameter;
class SetCustomAttributeConfigParameter {
}
exports.SetCustomAttributeConfigParameter = SetCustomAttributeConfigParameter;
class ExportCustomAttributesParameter {
}
exports.ExportCustomAttributesParameter = ExportCustomAttributesParameter;
class ProcessFileParameter {
}
exports.ProcessFileParameter = ProcessFileParameter;
class FilesTreeImportContainerParameter {
}
exports.FilesTreeImportContainerParameter = FilesTreeImportContainerParameter;
class ApiSerializationContainer {
}
exports.ApiSerializationContainer = ApiSerializationContainer;
class ApiMetadata {
}
exports.ApiMetadata = ApiMetadata;
class PackageFilterParameter {
}
exports.PackageFilterParameter = PackageFilterParameter;
class Package {
    constructor() {
        /** Only for fit internal Data structure */
        this.Name = "FROM API";
    }
}
exports.Package = Package;
/** Please use the static Helper functions to create the Conditions */
class PackageCondition {
    constructor() {
        this.SubConditions = [];
    }
    /**
     * Create a Attribute Condition
     */
    static createAttributeCondition(mode, key, conditionComparision, value) {
        return {
            Consolidation: mode,
            Type: _1.PackageConditionTypes.Attribute,
            Parameters: [key, conditionComparision, value],
            SubConditions: []
        };
    }
    /**
     * Create a Volume condition that contains a min and max folder
     */
    static createVolumeCondition(mode, volumeMode, min, max) {
        return {
            Consolidation: mode,
            Type: _1.PackageConditionTypes.Volume,
            Parameters: [volumeMode, min.X, min.Y, min.Z, max.X, max.Y, max.Z],
            SubConditions: []
        };
    }
    /**
     * Create a group Conditions that contains multiple Conditions
     */
    static createGroupCondition(mode, packageConditions) {
        return {
            Consolidation: mode,
            Type: _1.PackageConditionTypes.Group,
            Parameters: [],
            SubConditions: packageConditions
        };
    }
    /**
     * Create a Intelli Group Condition that supports usage of a radius
     */
    static createIntelliGroupCondition(mode, packageConditions, radius) {
        return {
            Consolidation: mode,
            Type: _1.PackageConditionTypes.IntelliVolume,
            Parameters: [radius],
            SubConditions: packageConditions
        };
    }
}
exports.PackageCondition = PackageCondition;
class SetMarkupToolParameter {
}
exports.SetMarkupToolParameter = SetMarkupToolParameter;
class OpenAuthenticationContextParameter {
}
exports.OpenAuthenticationContextParameter = OpenAuthenticationContextParameter;
class SetPidSketchToolParameter {
}
exports.SetPidSketchToolParameter = SetPidSketchToolParameter;
class FilesTreeSetStateParameter extends _1.FileTreeState {
}
exports.FilesTreeSetStateParameter = FilesTreeSetStateParameter;
class GetFilesTreeContentParameter {
}
exports.GetFilesTreeContentParameter = GetFilesTreeContentParameter;
class FilesTreeCreateCommentParameter {
}
exports.FilesTreeCreateCommentParameter = FilesTreeCreateCommentParameter;
class GetClashesParameter {
}
exports.GetClashesParameter = GetClashesParameter;
class AddPidToPdfPrinterParameter {
}
exports.AddPidToPdfPrinterParameter = AddPidToPdfPrinterParameter;
class PlaceSymbolParameter {
}
exports.PlaceSymbolParameter = PlaceSymbolParameter;
class PlacePrimitiveParameter {
}
exports.PlacePrimitiveParameter = PlacePrimitiveParameter;
class AttributeKeyValue {
}
exports.AttributeKeyValue = AttributeKeyValue;
class SaveFileDialogParameters {
}
exports.SaveFileDialogParameters = SaveFileDialogParameters;
class LoadFileDialogParameters {
}
exports.LoadFileDialogParameters = LoadFileDialogParameters;
class PdfDocumentParameter {
}
exports.PdfDocumentParameter = PdfDocumentParameter;
