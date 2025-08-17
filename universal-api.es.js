/**
 * @caxperts/universal.api - ES Module Bundle
 * Version: ** 7.2.1
 * Bundled on: 2025-08-17
 * This file was automatically generated from the TypeScript source.
 */

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var universal_api = {};

var Application = {};

var APIConnector = {};

var Util = {};

var BaseDataTypes = {};

var hasRequiredBaseDataTypes;

function requireBaseDataTypes () {
	if (hasRequiredBaseDataTypes) return BaseDataTypes;
	hasRequiredBaseDataTypes = 1;
	Object.defineProperty(BaseDataTypes, "__esModule", { value: true });
	BaseDataTypes.PdfDocument = BaseDataTypes.Intellipid = BaseDataTypes.PidLink = BaseDataTypes.UrlLink = BaseDataTypes.ElementLinks = BaseDataTypes.FileTreeState = BaseDataTypes.CatalogSymbol = BaseDataTypes.ProjectionSphere = BaseDataTypes.Quaternion = BaseDataTypes.AttributeTreeNodeType = BaseDataTypes.PdfInfo = BaseDataTypes.IntelliPidDrawingInfo = BaseDataTypes.CustomAttributeSourceDefinition = BaseDataTypes.Definition = BaseDataTypes.Change = BaseDataTypes.ExportCustomAttributes = BaseDataTypes.ChangeSetLine = BaseDataTypes.ChangeSet = BaseDataTypes.FilesTreeObject = BaseDataTypes.TakeScreenshot = BaseDataTypes.SnapCircle = BaseDataTypes.SnapInfo = BaseDataTypes.ProjectInfo = BaseDataTypes.ModelInfo = BaseDataTypes.Instance = BaseDataTypes.ClippingPlane = BaseDataTypes.Color = BaseDataTypes.ObjectColors = BaseDataTypes.BoundsInfo = BaseDataTypes.Bounds = BaseDataTypes.CameraView = BaseDataTypes.Vector4D = BaseDataTypes.Vector3D = BaseDataTypes.Vector2D = void 0;
	class Vector2D {
	    constructor(X, Y) {
	        this.X = X;
	        this.Y = Y;
	    }
	}
	BaseDataTypes.Vector2D = Vector2D;
	class Vector3D {
	    constructor(X, Y, Z) {
	        this.X = X;
	        this.Y = Y;
	        this.Z = Z;
	    }
	}
	BaseDataTypes.Vector3D = Vector3D;
	class Vector4D {
	    constructor(X, Y, Z, W) {
	        this.X = X;
	        this.Y = Y;
	        this.Z = Z;
	        this.W = W;
	    }
	}
	BaseDataTypes.Vector4D = Vector4D;
	class CameraView {
	    constructor(Position, Rotation) {
	        this.Position = Position;
	        this.Rotation = Rotation;
	    }
	}
	BaseDataTypes.CameraView = CameraView;
	class Bounds {
	}
	BaseDataTypes.Bounds = Bounds;
	class BoundsInfo {
	}
	BaseDataTypes.BoundsInfo = BoundsInfo;
	class ObjectColors {
	    constructor() {
	        this.Current = {};
	        this.Default = {};
	    }
	}
	BaseDataTypes.ObjectColors = ObjectColors;
	class Color {
	}
	BaseDataTypes.Color = Color;
	class ClippingPlane {
	}
	BaseDataTypes.ClippingPlane = ClippingPlane;
	class Instance {
	}
	BaseDataTypes.Instance = Instance;
	class ModelInfo {
	}
	BaseDataTypes.ModelInfo = ModelInfo;
	class ProjectInfo {
	}
	BaseDataTypes.ProjectInfo = ProjectInfo;
	class SnapInfo {
	}
	BaseDataTypes.SnapInfo = SnapInfo;
	class SnapCircle {
	}
	BaseDataTypes.SnapCircle = SnapCircle;
	class TakeScreenshot {
	}
	BaseDataTypes.TakeScreenshot = TakeScreenshot;
	class FilesTreeObject {
	}
	BaseDataTypes.FilesTreeObject = FilesTreeObject;
	class ChangeSet {
	}
	BaseDataTypes.ChangeSet = ChangeSet;
	class ChangeSetLine {
	}
	BaseDataTypes.ChangeSetLine = ChangeSetLine;
	class ExportCustomAttributes {
	}
	BaseDataTypes.ExportCustomAttributes = ExportCustomAttributes;
	class Change extends ChangeSetLine {
	}
	BaseDataTypes.Change = Change;
	class Definition {
	}
	BaseDataTypes.Definition = Definition;
	class CustomAttributeSourceDefinition {
	}
	BaseDataTypes.CustomAttributeSourceDefinition = CustomAttributeSourceDefinition;
	class IntelliPidDrawingInfo {
	}
	BaseDataTypes.IntelliPidDrawingInfo = IntelliPidDrawingInfo;
	class PdfInfo {
	}
	BaseDataTypes.PdfInfo = PdfInfo;
	class AttributeTreeNodeType {
	}
	BaseDataTypes.AttributeTreeNodeType = AttributeTreeNodeType;
	class Quaternion {
	    constructor(X, Y, Z, W) {
	        this.X = X;
	        this.Y = Y;
	        this.Z = Z;
	        this.W = W;
	    }
	    static fromEuler(value) {
	        //????
	        const roll = value.X;
	        const pitch = value.X;
	        const yaw = value.X;
	        const cr = Math.cos(roll * 0.5);
	        const sr = Math.sin(roll * 0.5);
	        const cp = Math.cos(pitch * 0.5);
	        const sp = Math.sin(pitch * 0.5);
	        const cy = Math.cos(yaw * 0.5);
	        const sy = Math.sin(yaw * 0.5);
	        const q = {
	            W: cr * cp * cy + sr * sp * sy,
	            X: sr * cp * cy - cr * sp * sy,
	            Y: cr * sp * cy + sr * cp * sy,
	            Z: cr * cp * sy - sr * sp * cy
	        };
	        return q;
	    }
	}
	BaseDataTypes.Quaternion = Quaternion;
	class ProjectionSphere {
	}
	BaseDataTypes.ProjectionSphere = ProjectionSphere;
	class CatalogSymbol {
	}
	BaseDataTypes.CatalogSymbol = CatalogSymbol;
	class FileTreeState {
	}
	BaseDataTypes.FileTreeState = FileTreeState;
	class ElementLinks {
	}
	BaseDataTypes.ElementLinks = ElementLinks;
	class UrlLink {
	}
	BaseDataTypes.UrlLink = UrlLink;
	class PidLink {
	}
	BaseDataTypes.PidLink = PidLink;
	class Intellipid {
	}
	BaseDataTypes.Intellipid = Intellipid;
	class PdfDocument {
	}
	BaseDataTypes.PdfDocument = PdfDocument;
	return BaseDataTypes;
}

var ParameterBase = {};

var hasRequiredParameterBase;

function requireParameterBase () {
	if (hasRequiredParameterBase) return ParameterBase;
	hasRequiredParameterBase = 1;
	Object.defineProperty(ParameterBase, "__esModule", { value: true });
	ParameterBase.PdfDocumentParameter = ParameterBase.LoadFileDialogParameters = ParameterBase.SaveFileDialogParameters = ParameterBase.AttributeKeyValue = ParameterBase.PlacePrimitiveParameter = ParameterBase.PlaceSymbolParameter = ParameterBase.AddPidToPdfPrinterParameter = ParameterBase.GetClashesParameter = ParameterBase.FilesTreeCreateCommentParameter = ParameterBase.GetFilesTreeContentParameter = ParameterBase.FilesTreeSetStateParameter = ParameterBase.SetPidSketchToolParameter = ParameterBase.OpenAuthenticationContextParameter = ParameterBase.SetMarkupToolParameter = ParameterBase.PackageCondition = ParameterBase.Package = ParameterBase.PackageFilterParameter = ParameterBase.ApiMetadata = ParameterBase.ApiSerializationContainer = ParameterBase.FilesTreeImportContainerParameter = ParameterBase.ProcessFileParameter = ParameterBase.ExportCustomAttributesParameter = ParameterBase.SetCustomAttributeConfigParameter = ParameterBase.ImportCustomAttributeChangeSetParameter = ParameterBase.LoadCustomAttributeDataFileParameter = ParameterBase.LoadCustomAttributeConfigurationFileParameter = ParameterBase.AttributePoi = ParameterBase.Link = ParameterBase.PoIWithCommentParameter = ParameterBase.PlacePoiParameter = ParameterBase.PlaceObjParameter = ParameterBase.PlacePlyParameter = ParameterBase.PlaceArcParameter = ParameterBase.PlaceTextParameter = ParameterBase.DrawLineParameter = ParameterBase.IntelliClippingDescriptor = ParameterBase.VolumeClippingDescriptor = ParameterBase.ClippingDescriptor = ParameterBase.ParameterBase = void 0;
	const _1 = requireUtil();
	let ParameterBase$1 = class ParameterBase {
	};
	ParameterBase.ParameterBase = ParameterBase$1;
	class ClippingDescriptor {
	}
	ParameterBase.ClippingDescriptor = ClippingDescriptor;
	class VolumeClippingDescriptor {
	}
	ParameterBase.VolumeClippingDescriptor = VolumeClippingDescriptor;
	class IntelliClippingDescriptor {
	}
	ParameterBase.IntelliClippingDescriptor = IntelliClippingDescriptor;
	class DrawLineParameter {
	}
	ParameterBase.DrawLineParameter = DrawLineParameter;
	class PlaceTextParameter {
	}
	ParameterBase.PlaceTextParameter = PlaceTextParameter;
	class PlaceArcParameter {
	}
	ParameterBase.PlaceArcParameter = PlaceArcParameter;
	class PlacePlyParameter {
	}
	ParameterBase.PlacePlyParameter = PlacePlyParameter;
	class PlaceObjParameter {
	}
	ParameterBase.PlaceObjParameter = PlaceObjParameter;
	class PlacePoiParameter {
	}
	ParameterBase.PlacePoiParameter = PlacePoiParameter;
	class PoIWithCommentParameter extends PlacePoiParameter {
	}
	ParameterBase.PoIWithCommentParameter = PoIWithCommentParameter;
	class Link {
	}
	ParameterBase.Link = Link;
	class AttributePoi {
	}
	ParameterBase.AttributePoi = AttributePoi;
	class LoadCustomAttributeConfigurationFileParameter {
	}
	ParameterBase.LoadCustomAttributeConfigurationFileParameter = LoadCustomAttributeConfigurationFileParameter;
	class LoadCustomAttributeDataFileParameter {
	}
	ParameterBase.LoadCustomAttributeDataFileParameter = LoadCustomAttributeDataFileParameter;
	class ImportCustomAttributeChangeSetParameter {
	}
	ParameterBase.ImportCustomAttributeChangeSetParameter = ImportCustomAttributeChangeSetParameter;
	class SetCustomAttributeConfigParameter {
	}
	ParameterBase.SetCustomAttributeConfigParameter = SetCustomAttributeConfigParameter;
	class ExportCustomAttributesParameter {
	}
	ParameterBase.ExportCustomAttributesParameter = ExportCustomAttributesParameter;
	class ProcessFileParameter {
	}
	ParameterBase.ProcessFileParameter = ProcessFileParameter;
	class FilesTreeImportContainerParameter {
	}
	ParameterBase.FilesTreeImportContainerParameter = FilesTreeImportContainerParameter;
	class ApiSerializationContainer {
	}
	ParameterBase.ApiSerializationContainer = ApiSerializationContainer;
	class ApiMetadata {
	}
	ParameterBase.ApiMetadata = ApiMetadata;
	class PackageFilterParameter {
	}
	ParameterBase.PackageFilterParameter = PackageFilterParameter;
	class Package {
	    constructor() {
	        /** Only for fit internal Data structure */
	        this.Name = "FROM API";
	    }
	}
	ParameterBase.Package = Package;
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
	ParameterBase.PackageCondition = PackageCondition;
	class SetMarkupToolParameter {
	}
	ParameterBase.SetMarkupToolParameter = SetMarkupToolParameter;
	class OpenAuthenticationContextParameter {
	}
	ParameterBase.OpenAuthenticationContextParameter = OpenAuthenticationContextParameter;
	class SetPidSketchToolParameter {
	}
	ParameterBase.SetPidSketchToolParameter = SetPidSketchToolParameter;
	class FilesTreeSetStateParameter extends _1.FileTreeState {
	}
	ParameterBase.FilesTreeSetStateParameter = FilesTreeSetStateParameter;
	class GetFilesTreeContentParameter {
	}
	ParameterBase.GetFilesTreeContentParameter = GetFilesTreeContentParameter;
	class FilesTreeCreateCommentParameter {
	}
	ParameterBase.FilesTreeCreateCommentParameter = FilesTreeCreateCommentParameter;
	class GetClashesParameter {
	}
	ParameterBase.GetClashesParameter = GetClashesParameter;
	class AddPidToPdfPrinterParameter {
	}
	ParameterBase.AddPidToPdfPrinterParameter = AddPidToPdfPrinterParameter;
	class PlaceSymbolParameter {
	}
	ParameterBase.PlaceSymbolParameter = PlaceSymbolParameter;
	class PlacePrimitiveParameter {
	}
	ParameterBase.PlacePrimitiveParameter = PlacePrimitiveParameter;
	class AttributeKeyValue {
	}
	ParameterBase.AttributeKeyValue = AttributeKeyValue;
	class SaveFileDialogParameters {
	}
	ParameterBase.SaveFileDialogParameters = SaveFileDialogParameters;
	class LoadFileDialogParameters {
	}
	ParameterBase.LoadFileDialogParameters = LoadFileDialogParameters;
	class PdfDocumentParameter {
	}
	ParameterBase.PdfDocumentParameter = PdfDocumentParameter;
	return ParameterBase;
}

var GetSet = {};

var hasRequiredGetSet;

function requireGetSet () {
	if (hasRequiredGetSet) return GetSet;
	hasRequiredGetSet = 1;
	Object.defineProperty(GetSet, "__esModule", { value: true });
	GetSet.GetSet = GetSet.Set = GetSet.Get = void 0;
	class Get {
	    constructor(getFunction) {
	        this.getFunction = getFunction;
	    }
	    /**
	     * Retrieves the value asynchronous
	     * @returns
	     */
	    async get() {
	        return this.getFunction();
	    }
	}
	GetSet.Get = Get;
	class Set {
	    constructor(setFunction) {
	        this.setFunction = setFunction;
	    }
	    /**
	     * Sets the Value asynchronous
	     * @param value
	     * @returns
	     */
	    async set(value) {
	        return this.setFunction(value);
	    }
	}
	GetSet.Set = Set;
	let GetSet$1 = class GetSet {
	    constructor(getFunction, setFunction) {
	        this.getFunction = getFunction;
	        this.setFunction = setFunction;
	    }
	    /**
	     * Retrieves the value asynchronous
	     * @returns
	     */
	    async get() {
	        return this.getFunction();
	    }
	    /**
	     * Sets the Value asynchronous
	     * @param value
	     * @returns
	     */
	    async set(value) {
	        return this.setFunction(value);
	    }
	};
	GetSet.GetSet = GetSet$1;
	return GetSet;
}

var Enums = {};

var hasRequiredEnums;

function requireEnums () {
	if (hasRequiredEnums) return Enums;
	hasRequiredEnums = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.PdfTypes = exports.GenericLoadFromFileResponseResultType = exports.ClashMode = exports.FileDialogApiReturnType = exports.PrimitiveType = exports.ColorMode = exports.ExportableOptions = exports.PidSketchToolMode = exports.MarkupMode = exports.ClippingMode = exports.PointOfInterestType = exports.VolumeConditionMode = exports.AttributeConditionComparison = exports.ConsolidationMode = exports.PackageConditionTypes = exports.ApiCommands = exports.ProjectionSphereType = exports.FeatureTypes = exports.CustomAttributeDataType = exports.UpdateModes = exports.SceneType = exports.CombineModes = exports.TargetEnum = void 0;
		(function (TargetEnum) {
		    TargetEnum["Undefined"] = "0";
		    TargetEnum["ThreeD"] = "1";
		    TargetEnum["Intelli"] = "10";
		    TargetEnum["Browser"] = "11";
		})(exports.TargetEnum || (exports.TargetEnum = {}));
		(function (CombineModes) {
		    CombineModes["And"] = "AND";
		    CombineModes["Or"] = "OR";
		})(exports.CombineModes || (exports.CombineModes = {}));
		(function (SceneType) {
		    SceneType["Undefined"] = "0";
		    SceneType["ThreeD"] = "1";
		    SceneType["IntelliPid"] = "10";
		    SceneType["Browser"] = "11";
		})(exports.SceneType || (exports.SceneType = {}));
		(function (UpdateModes) {
		    UpdateModes[UpdateModes["Append"] = 0] = "Append";
		    UpdateModes[UpdateModes["Full"] = 1] = "Full";
		})(exports.UpdateModes || (exports.UpdateModes = {}));
		(function (CustomAttributeDataType) {
		    CustomAttributeDataType[CustomAttributeDataType["Calculation"] = 0] = "Calculation";
		    CustomAttributeDataType[CustomAttributeDataType["CodeList"] = 1] = "CodeList";
		    CustomAttributeDataType[CustomAttributeDataType["FreeText"] = 2] = "FreeText";
		    CustomAttributeDataType[CustomAttributeDataType["Numeric"] = 3] = "Numeric";
		    CustomAttributeDataType[CustomAttributeDataType["Unknown"] = 4] = "Unknown";
		    CustomAttributeDataType[CustomAttributeDataType["Color"] = 5] = "Color";
		})(exports.CustomAttributeDataType || (exports.CustomAttributeDataType = {}));
		(function (FeatureTypes) {
		    FeatureTypes["Unknown"] = "Unknown";
		    FeatureTypes["Model"] = "Model";
		    FeatureTypes["Sketch"] = "Sketch";
		    FeatureTypes["Markup"] = "Markup";
		    FeatureTypes["IntellipidSketch"] = "IntellipidSketch";
		    FeatureTypes["AnimationConfiguration"] = "AnimationConfiguration";
		    FeatureTypes["AnimationDefinition"] = "AnimationDefinition";
		    FeatureTypes["Catalogue"] = "Catalogue";
		    FeatureTypes["Symbol"] = "Symbol";
		    FeatureTypes["MarkupContainer"] = "MarkupContainer";
		    FeatureTypes["Orm"] = "Orm";
		    FeatureTypes["Spraying"] = "Spraying";
		    FeatureTypes["Comment"] = "Comment";
		    FeatureTypes["View"] = "View";
		    FeatureTypes["Package"] = "Package";
		    FeatureTypes["Folder"] = "Folder";
		    FeatureTypes["CommentSvg"] = "CommentSvg";
		    FeatureTypes["Screenshot"] = "Screenshot";
		    FeatureTypes["Photo"] = "Photo";
		    FeatureTypes["TwoDToThreeD"] = "TwoDToThreeD";
		    FeatureTypes["PointOfInterest"] = "PointOfInterest";
		    FeatureTypes["Drawing"] = "Drawing";
		    FeatureTypes["Files"] = "Files";
		    FeatureTypes["MeasurementSnapshot"] = "MeasurementSnapshot";
		    FeatureTypes["IntelliPidLegendPositions"] = "IntelliPidLegendPositions";
		    FeatureTypes["IsolationPlan"] = "IsolationPlan";
		    FeatureTypes["CataloguePlacement"] = "CataloguePlacement";
		    FeatureTypes["DrawingComment"] = "DrawingComment";
		    FeatureTypes["AppControl"] = "AppControl";
		    FeatureTypes["Animation"] = "Animation";
		    FeatureTypes["PIDSketch"] = "PIDSketch";
		    FeatureTypes["Report"] = "Report";
		})(exports.FeatureTypes || (exports.FeatureTypes = {}));
		(function (ProjectionSphereType) {
		    ProjectionSphereType[ProjectionSphereType["Picture"] = 0] = "Picture";
		    ProjectionSphereType[ProjectionSphereType["Panorama"] = 1] = "Panorama";
		})(exports.ProjectionSphereType || (exports.ProjectionSphereType = {}));
		(function (ApiCommands) {
		    //Camera
		    ApiCommands["SetCameraView"] = "SetCameraView";
		    ApiCommands["GetCameraView"] = "GetCameraView";
		    ApiCommands["SetClippingPlane"] = "SetClippingPlane";
		    ApiCommands["SetCameraViewLookAtTarget"] = "SetCameraViewLookAtTarget";
		    ApiCommands["ResetView"] = "ResetView";
		    //Filteroperation
		    ApiCommands["GetObjects"] = "GetObjects";
		    ApiCommands["GetSelectedObjects"] = "GetSelectedObjects";
		    ApiCommands["GetObjectsAttributes"] = "GetObjectsAttributes";
		    ApiCommands["GetObjectsBoundingBox"] = "GetObjectsBoundingBox";
		    ApiCommands["GetObjectsColors"] = "GetObjectsColors";
		    ApiCommands["GetObjectsSnapInfo"] = "GetObjectsSnapInfo";
		    ApiCommands["GetObjectsChangeableAttributes"] = "GetObjectsChangeableAttributes";
		    ApiCommands["SetAttribute"] = "SetAttribute";
		    ApiCommands["Select"] = "Select";
		    ApiCommands["ClearSelection"] = "ClearSelection";
		    ApiCommands["Fit"] = "Fit";
		    ApiCommands["Color"] = "Color";
		    ApiCommands["ClearColor"] = "ClearColor";
		    ApiCommands["Highlight"] = "Highlight";
		    ApiCommands["ClearHighlight"] = "ClearHighlight";
		    ApiCommands["ShowOnly"] = "ShowOnly";
		    ApiCommands["SetVisibility"] = "SetVisibility";
		    ApiCommands["GetClippingInfo"] = "GetClippingInfo";
		    ApiCommands["VolumeClip"] = "VolumeClip";
		    ApiCommands["VolumeClipByCoordinates"] = "VolumeClipByCoordinates";
		    ApiCommands["IntelliClip"] = "IntelliClip";
		    ApiCommands["ClearClipping"] = "ClearClipping";
		    ApiCommands["SearchFallback"] = "SearchFallback";
		    ApiCommands["GetIntelliPidRawSvgData"] = "GetIntelliPidRawSvgData";
		    ApiCommands["GetLinkedElements"] = "GetLinkedElements";
		    //Scene3d
		    //Drawing
		    ApiCommands["PlaceObj"] = "PlaceObj";
		    ApiCommands["DrawLine"] = "DrawLine";
		    ApiCommands["PlaceText"] = "PlaceText";
		    ApiCommands["PlaceArc"] = "PlaceArc";
		    ApiCommands["PlacePly"] = "PlacePly";
		    ApiCommands["DestroyDrawing"] = "DestroyDrawing";
		    //Model
		    ApiCommands["GetModelInfo"] = "GetModelInfo";
		    ApiCommands["GetProjectInfo"] = "GetProjectInfo";
		    ApiCommands["LoadConfigFile"] = "LoadConfigFile";
		    ApiCommands["ClearCustomAttributes"] = "ClearCustomAttributes";
		    ApiCommands["ImportCustomAttributeChangeSet"] = "ImportCustomAttributeChangeset";
		    ApiCommands["LoadCustomAttributeConfigurationFile"] = "LoadCustomAttributeConfigurationFile";
		    ApiCommands["LoadCustomAttributeDataFile"] = "LoadCustomAttributeDataFile";
		    ApiCommands["SetCustomAttributeConfiguration"] = "SetCustomAttributeConfiguration";
		    ApiCommands["GetCustomAttributeConfiguration"] = "GetCustomAttributeConfiguration";
		    ApiCommands["ExportCustomAttributes"] = "ExportCustomAttributes";
		    ApiCommands["GetIntelliPidDrawings"] = "GetIntelliPidDrawings";
		    ApiCommands["OpenIntelliPidDrawings"] = "OpenIntelliPidDrawings";
		    ApiCommands["GetProjectionSpheres"] = "GetProjectionSpheres";
		    ApiCommands["GetCurrentProjectionSphere"] = "GetCurrentProjectionSphere";
		    ApiCommands["EnterProjectionSphere"] = "EnterProjectionSphere";
		    ApiCommands["LeaveProjectionSphere"] = "LeaveProjectionSphere";
		    ApiCommands["GetAllPids"] = "GetAllPids";
		    ApiCommands["GetOpenPids"] = "GetOpenPids";
		    ApiCommands["GetActivePid"] = "GetActivePid";
		    ApiCommands["OpenPid"] = "OpenPid";
		    ApiCommands["ClosePid"] = "ClosePid";
		    ApiCommands["GetModelAttributeValues"] = "GetModelAttributeValues";
		    ApiCommands["GetAllPdfs"] = "GetAllPdfs";
		    ApiCommands["GetOpenPdfsTabs"] = "GetOpenPdfsTabs";
		    ApiCommands["GetActivePdfTab"] = "GetActivePdfTab";
		    ApiCommands["OpenPdf"] = "OpenPdf";
		    ApiCommands["ClosePdf"] = "ClosePdf";
		    //Scene
		    ApiCommands["TakeScreenshot"] = "TakeScreenshot";
		    ApiCommands["TakeAndSaveScreenShot"] = "TakeAndSaveScreenshot";
		    ApiCommands["GetTreeConfiguration"] = "GetTreeConfiguration";
		    ApiCommands["SetTreeConfiguration"] = "SetTreeConfiguration";
		    ApiCommands["GetVisibleAspects"] = "GetVisibleAspects";
		    ApiCommands["SetVisibleAspects"] = "SetVisibleAspects";
		    ApiCommands["LoadColorFile"] = "LoadColorFile";
		    ApiCommands["LoadLinkFile"] = "LoadLinkFile";
		    ApiCommands["ClearLinks"] = "ClearLinks";
		    //FilesTree
		    ApiCommands["FilesTreeDeleteObject"] = "FilesTreeDeleteObject";
		    ApiCommands["GetFilesTreeChildren"] = "GetFilesTreeChildren";
		    ApiCommands["GetFilesTreeSiblings"] = "GetFilesTreeSiblings";
		    ApiCommands["FilesTreeMoveObject"] = "FilesTreeMoveObject";
		    ApiCommands["FilesTreeImportContainer"] = "FilesTreeImportContainer";
		    ApiCommands["GetFilesTreeContent"] = "GetFilesTreeContent";
		    ApiCommands["FilesTreeGetContainer"] = "FilesTreeGetContainer";
		    ApiCommands["SetMarkupTool"] = "SetMarkupTool";
		    ApiCommands["GetIntelliPidElementsHitByMarkup"] = "GetIntelliPidElementsHitByMarkup";
		    ApiCommands["FilesTreeClose"] = "FilesTreeClose";
		    ApiCommands["FilesTreeCreateMarkup"] = "FilesTreeCreateMarkup";
		    ApiCommands["FilesTreeEdit"] = "FilesTreeEdit";
		    ApiCommands["FilesTreeShow"] = "FilesTreeShow";
		    ApiCommands["FilesTreeView"] = "FilesTreeView";
		    ApiCommands["FilesTreeCreateSketch"] = "FilesTreeCreateSketch";
		    ApiCommands["FilesTreeSetState"] = "FilesTreeSetState";
		    ApiCommands["FilesTreeGetState"] = "FilesTreeGetState";
		    ApiCommands["FilesTreeCreateComment"] = "FilesTreeCreateComment";
		    //Folder
		    ApiCommands["GetFilesTreeRoot"] = "GetFilesTreeRoot";
		    ApiCommands["FilesTreeCreateFolder"] = "FilesTreeCreateFolder";
		    //Poi
		    ApiCommands["PlacePoi"] = "PlacePoi";
		    ApiCommands["PlacePoiWithComment"] = "PlacePoiWithComment";
		    // PidSketch
		    ApiCommands["SetPidSketchTool"] = "SetPidSketchTool";
		    //Events
		    ApiCommands["AddEventCallback"] = "AddEventCallback";
		    ApiCommands["RemoveEventCallback"] = "RemoveEventCallback";
		    //Application
		    ApiCommands["GetLifeCycleState"] = "GetLifeCycleState";
		    ApiCommands["ShowMessage"] = "ShowMessage";
		    ApiCommands["FocusViewer"] = "FocusViewer";
		    ApiCommands["QuitApplication"] = "QuitApplication";
		    ApiCommands["CacheModel"] = "CacheModel";
		    ApiCommands["LoadModel"] = "LoadModel";
		    ApiCommands["DeleteModel"] = "DeleteModel";
		    ApiCommands["ActivateLicense"] = "ActivateLicense";
		    ApiCommands["DeactivateLicense"] = "DeactivateLicense";
		    ApiCommands["LoadFile"] = "LoadFile";
		    ApiCommands["ProcessFile"] = "ProcessFile";
		    ApiCommands["LoadSketch"] = "LoadSketch";
		    ApiCommands["LoadPackageFile"] = "LoadPackageFile";
		    ApiCommands["ExportPackageFile"] = "ExportPackageFile";
		    ApiCommands["ClearAuthConfig"] = "ClearAuthConfig";
		    ApiCommands["SetAuthConfig"] = "SetAuthConfig";
		    ApiCommands["OpenPath"] = "OpenPath";
		    ApiCommands["SetLanguage"] = "SetLanguage";
		    ApiCommands["GetLanguage"] = "GetLanguage";
		    //Attribute Tree
		    ApiCommands["GetTreeRootNode"] = "GetTreeRootNode";
		    ApiCommands["GetTreeFolderChildren"] = "GetTreeFolderChildren";
		    ApiCommands["GetTreeFolderSiblings"] = "GetTreeFolderSiblings";
		    ApiCommands["GetTreeNodesOfFolder"] = "GetTreeNodesOfFolder";
		    ApiCommands["GetTreeStructure"] = "GetTreeStructure";
		    //Remote
		    ApiCommands["WfsLoadRemote"] = "WfsLoadRemote";
		    ApiCommands["GetWfsRemoteContent"] = "GetWfsRemoteContent";
		    ApiCommands["GetRenderStreamingInfo"] = "GetRenderStreamingInfo";
		    ApiCommands["WfsClearAttached"] = "WfsClearAttached";
		    //Authentication
		    ApiCommands["OpenAuthenticationContext"] = "OpenAuthenticationContext";
		    ApiCommands["CloseAuthenticationContext"] = "CloseAuthenticationContext";
		    ApiCommands["StartLogoutAuthenticationContext"] = "StartLogoutAuthenticationContext";
		    //(Pid)Sketch
		    ApiCommands["SelectSymbolForPlacement"] = "SelectSymbolForPlacement";
		    ApiCommands["GetCatalogSymbols"] = "GetCatalogSymbols";
		    ApiCommands["PlacePrimitive"] = "PlacePrimitive";
		    ApiCommands["PlaceSymbol"] = "PlaceSymbol";
		    ApiCommands["DeleteSketchItem"] = "DeleteSketchItem";
		    //Clash
		    ApiCommands["StartClashComputation"] = "StartClashComputation";
		    ApiCommands["GetClashCandidates"] = "GetClashCandidates";
		    ApiCommands["GetClashResults"] = "GetClashResults";
		    ApiCommands["CancelClashComputation"] = "CancelClashComputation";
		    //PDF Printer
		    ApiCommands["PdfPrinterCreate"] = "PdfPrinterCreate";
		    ApiCommands["PdfPrinterDelete"] = "PdfPrinterDelete";
		    ApiCommands["PdfPrinterPrintToBase64"] = "PdfPrinterPrintToBase64";
		    ApiCommands["PdfPrinterAddIntelliPidPage"] = "PdfPrinterAddIntelliPidPage";
		    //Localstorage
		    ApiCommands["SetStorageVariable"] = "SetStorageVariable";
		    ApiCommands["GetStorageVariable"] = "GetStorageVariable";
		    ApiCommands["DeleteStorageVariable"] = "DeleteStorageVariable";
		    ApiCommands["GetStorageVariablesList"] = "GetStorageVariablesList";
		    // Settings
		    ApiCommands["GetUiColors"] = "GetUiColors";
		    ApiCommands["GetUiThemes"] = "GetUiThemes";
		    ApiCommands["SetActiveUiTheme"] = "SetActiveUiTheme";
		    // Fileoperations
		    ApiCommands["SaveFileDialog"] = "SaveFileDialog";
		    ApiCommands["LoadFileDialog"] = "LoadFileDialog";
		    ApiCommands["GenericLoadFromFile"] = "GenericLoadFromFile";
		})(exports.ApiCommands || (exports.ApiCommands = {}));
		(function (PackageConditionTypes) {
		    PackageConditionTypes["None"] = "None";
		    PackageConditionTypes["IntelliVolume"] = "IntelliVolume";
		    PackageConditionTypes["Group"] = "Group";
		    PackageConditionTypes["Attribute"] = "Attribute";
		    PackageConditionTypes["Volume"] = "Volume";
		})(exports.PackageConditionTypes || (exports.PackageConditionTypes = {}));
		(function (ConsolidationMode) {
		    ConsolidationMode["Base"] = "Base";
		    ConsolidationMode["AndNot"] = "AndNot";
		    ConsolidationMode["Or"] = "Or";
		    ConsolidationMode["And"] = "And";
		})(exports.ConsolidationMode || (exports.ConsolidationMode = {}));
		(function (AttributeConditionComparison) {
		    AttributeConditionComparison["Equals"] = "==";
		    AttributeConditionComparison["NotEquals"] = "!=";
		    AttributeConditionComparison["Like"] = "Like";
		    AttributeConditionComparison["NotLike"] = "Not Like";
		})(exports.AttributeConditionComparison || (exports.AttributeConditionComparison = {}));
		(function (VolumeConditionMode) {
		    /// <summary>
		    /// Inside
		    /// </summary>
		    VolumeConditionMode["Includes"] = "Includes";
		    /// <summary>
		    /// Overlap
		    /// </summary>
		    VolumeConditionMode["Overlaps"] = "Overlaps";
		    /// <summary>
		    /// Outside overlap
		    /// </summary>
		    VolumeConditionMode["NotIncludes"] = "Not Includes";
		    /// <summary>
		    /// Outside
		    /// </summary>
		    VolumeConditionMode["NotOverlaps"] = "Not Overlaps";
		})(exports.VolumeConditionMode || (exports.VolumeConditionMode = {}));
		(function (PointOfInterestType) {
		    PointOfInterestType[PointOfInterestType["Sphere"] = 0] = "Sphere";
		    PointOfInterestType[PointOfInterestType["CustomMesh"] = 1] = "CustomMesh";
		})(exports.PointOfInterestType || (exports.PointOfInterestType = {}));
		(function (ClippingMode) {
		    ClippingMode[ClippingMode["None"] = 0] = "None";
		    ClippingMode[ClippingMode["Volume"] = 1] = "Volume";
		    ClippingMode[ClippingMode["GridMeasure"] = 2] = "GridMeasure";
		    ClippingMode[ClippingMode["Intelli"] = 3] = "Intelli";
		})(exports.ClippingMode || (exports.ClippingMode = {}));
		(function (MarkupMode) {
		    MarkupMode[MarkupMode["None"] = 0] = "None";
		    MarkupMode[MarkupMode["Line"] = 1] = "Line";
		    MarkupMode[MarkupMode["FreeHand"] = 2] = "FreeHand";
		    MarkupMode[MarkupMode["Rectangle"] = 3] = "Rectangle";
		    MarkupMode[MarkupMode["Oval"] = 4] = "Oval";
		    MarkupMode[MarkupMode["Text"] = 5] = "Text";
		    MarkupMode[MarkupMode["Erase"] = 6] = "Erase";
		    MarkupMode[MarkupMode["OrthogonalLine"] = 7] = "OrthogonalLine";
		    MarkupMode[MarkupMode["Move"] = 8] = "Move";
		})(exports.MarkupMode || (exports.MarkupMode = {}));
		(function (PidSketchToolMode) {
		    // This reflects UPV
		    PidSketchToolMode[PidSketchToolMode["None"] = 0] = "None";
		    //Comment = 1,
		    //BreakLine = 2,
		    //TextMarker = 3,
		    PidSketchToolMode[PidSketchToolMode["Routing"] = 4] = "Routing";
		    PidSketchToolMode[PidSketchToolMode["Rectangle"] = 5] = "Rectangle";
		    PidSketchToolMode[PidSketchToolMode["Circle"] = 6] = "Circle";
		    PidSketchToolMode[PidSketchToolMode["Valve"] = 7] = "Valve";
		    //CustomSymbol = 8,
		    //IntelliPidLayer = 9,
		    //Text = 10,
		    //Copied = 11,
		    //Legend = 12,
		    PidSketchToolMode[PidSketchToolMode["Cloud"] = 13] = "Cloud";
		    //
		    // These are added extra 
		    PidSketchToolMode[PidSketchToolMode["BreakLine"] = 99] = "BreakLine";
		    PidSketchToolMode[PidSketchToolMode["UnBreakLine"] = 100] = "UnBreakLine";
		    PidSketchToolMode[PidSketchToolMode["Copy"] = 101] = "Copy";
		    PidSketchToolMode[PidSketchToolMode["Rotate"] = 102] = "Rotate";
		    PidSketchToolMode[PidSketchToolMode["Undo"] = 103] = "Undo";
		    PidSketchToolMode[PidSketchToolMode["Redo"] = 104] = "Redo";
		})(exports.PidSketchToolMode || (exports.PidSketchToolMode = {}));
		(function (ExportableOptions) {
		    ExportableOptions[ExportableOptions["Inherit"] = 0] = "Inherit";
		    ExportableOptions[ExportableOptions["Export"] = 1] = "Export";
		    ExportableOptions[ExportableOptions["Ignore"] = 2] = "Ignore";
		})(exports.ExportableOptions || (exports.ExportableOptions = {}));
		(function (ColorMode) {
		    ColorMode[ColorMode["Default"] = 0] = "Default";
		    ColorMode[ColorMode["AsModified"] = 1] = "AsModified";
		    ColorMode[ColorMode["Original"] = 2] = "Original";
		})(exports.ColorMode || (exports.ColorMode = {}));
		(function (PrimitiveType) {
		    PrimitiveType[PrimitiveType["GroundPlate"] = 300] = "GroundPlate";
		    PrimitiveType[PrimitiveType["Column"] = 310] = "Column";
		    PrimitiveType[PrimitiveType["Beam"] = 320] = "Beam";
		    PrimitiveType[PrimitiveType["Slab"] = 340] = "Slab";
		    PrimitiveType[PrimitiveType["Cube"] = 100] = "Cube";
		    PrimitiveType[PrimitiveType["EquipmentVertical"] = 102] = "EquipmentVertical";
		    PrimitiveType[PrimitiveType["EquipmentHorizontal"] = 101] = "EquipmentHorizontal";
		    PrimitiveType[PrimitiveType["Sphere"] = 1050] = "Sphere";
		    PrimitiveType[PrimitiveType["Platform"] = 200] = "Platform";
		    PrimitiveType[PrimitiveType["CustomObj"] = 9999] = "CustomObj";
		})(exports.PrimitiveType || (exports.PrimitiveType = {}));
		(function (FileDialogApiReturnType) {
		    FileDialogApiReturnType[FileDialogApiReturnType["Cancelled"] = 0] = "Cancelled";
		    FileDialogApiReturnType[FileDialogApiReturnType["Ok"] = 1] = "Ok";
		    FileDialogApiReturnType[FileDialogApiReturnType["Error"] = 2] = "Error";
		})(exports.FileDialogApiReturnType || (exports.FileDialogApiReturnType = {}));
		(function (ClashMode) {
		    /**
		     *
		     */
		    ClashMode[ClashMode["WithinQueryOnly"] = 0] = "WithinQueryOnly";
		    /**
		     *
		     */
		    ClashMode[ClashMode["QueryWithFullModel"] = 1] = "QueryWithFullModel";
		    /**
		     *
		     */
		    ClashMode[ClashMode["PackageAAgainstPackageBWithinQuery"] = 2] = "PackageAAgainstPackageBWithinQuery";
		})(exports.ClashMode || (exports.ClashMode = {}));
		(function (GenericLoadFromFileResponseResultType) {
		    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["Ok"] = 0] = "Ok";
		    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["FileNotFound"] = 1] = "FileNotFound";
		    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["FileNotAllowed"] = 2] = "FileNotAllowed";
		    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["OtherError"] = 3] = "OtherError";
		    GenericLoadFromFileResponseResultType[GenericLoadFromFileResponseResultType["Undefined"] = 4] = "Undefined";
		})(exports.GenericLoadFromFileResponseResultType || (exports.GenericLoadFromFileResponseResultType = {}));
		(function (PdfTypes) {
		    PdfTypes[PdfTypes["All"] = 0] = "All";
		    PdfTypes[PdfTypes["Document"] = 1] = "Document";
		    PdfTypes[PdfTypes["Drawing"] = 2] = "Drawing";
		})(exports.PdfTypes || (exports.PdfTypes = {})); 
	} (Enums));
	return Enums;
}

var CustomAttributes = {};

var CaxApiCommand = {};

var hasRequiredCaxApiCommand;

function requireCaxApiCommand () {
	if (hasRequiredCaxApiCommand) return CaxApiCommand;
	hasRequiredCaxApiCommand = 1;
	Object.defineProperty(CaxApiCommand, "__esModule", { value: true });
	CaxApiCommand.CaxApiCommand = void 0;
	const Enums_1 = requireEnums();
	/** @internal */
	let CaxApiCommand$1 = class CaxApiCommand {
	    constructor(command) {
	        this.requestId = 0;
	        this.additionalParameters = {};
	        this.commandParameters = [];
	        this.condition = "";
	        this.conditionCombineMode = Enums_1.CombineModes.And;
	        this.model = "";
	        this.target = Enums_1.TargetEnum.ThreeD;
	        this.command = command;
	    }
	};
	CaxApiCommand.CaxApiCommand = CaxApiCommand$1;
	return CaxApiCommand;
}

var hasRequiredCustomAttributes;

function requireCustomAttributes () {
	if (hasRequiredCustomAttributes) return CustomAttributes;
	hasRequiredCustomAttributes = 1;
	Object.defineProperty(CustomAttributes, "__esModule", { value: true });
	CustomAttributes.CustomAttributes = CustomAttributes.CustomAttributeLegacy = void 0;
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Enums_1 = requireEnums();
	/**
	 * Contains the file variants. These might be made unavailable in future versions and replaced by new commands
	 * */
	class CustomAttributeLegacy {
	    constructor(customAttributes) {
	        this.customAttributes = customAttributes;
	    }
	    async loadCustomAttributeConfigurationFile(file) {
	        const command = this.customAttributes.createCommand(Enums_1.ApiCommands.LoadCustomAttributeConfigurationFile);
	        command.commandParameters.push(file);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async loadCustomAttributeDataFile(file) {
	        const command = this.customAttributes.createCommand(Enums_1.ApiCommands.LoadCustomAttributeDataFile);
	        command.commandParameters.push(file);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	}
	CustomAttributes.CustomAttributeLegacy = CustomAttributeLegacy;
	let CustomAttributes$1 = class CustomAttributes {
	    constructor(model) {
	        this.model = model;
	    }
	    get Legacy() {
	        return new CustomAttributeLegacy(this);
	    }
	    async clearCustomAttributes() {
	        const command = this.createCommand(Enums_1.ApiCommands.ClearCustomAttributes);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async loadCustomAttributeConfigurationBase64(contentBase64) {
	        const command = this.createCommand(Enums_1.ApiCommands.LoadCustomAttributeConfigurationFile);
	        command.additionalParameters = {
	            LoadCustomAttributeConfiguration: {
	                ContentBase64: contentBase64
	            }
	        };
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async loadCustomAttributeDataBase64(contentBase64) {
	        const command = this.createCommand(Enums_1.ApiCommands.LoadCustomAttributeDataFile);
	        command.additionalParameters = {
	            LoadCustomAttributeDataFile: {
	                ContentBase64: contentBase64
	            }
	        };
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async importCustomAttributeChangeSet(changeSets, showLoadScreen) {
	        const command = this.createCommand(Enums_1.ApiCommands.ImportCustomAttributeChangeSet);
	        command.additionalParameters = {
	            ImportCustomAttributeChangeSet: {
	                ShowLoadScreen: showLoadScreen,
	                ChangeSet: {
	                    Changes: changeSets
	                }
	            }
	        };
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async setCustomAttributeConfiguration(definitions, updateMode) {
	        const command = this.createCommand(Enums_1.ApiCommands.SetCustomAttributeConfiguration);
	        command.additionalParameters = {
	            SetCustomAttributeConfiguration: {
	                GeneralDefinitions: definitions,
	                UpdateMode: updateMode
	            }
	        };
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async getCustomAttributeConfiguration() {
	        const command = this.createCommand(Enums_1.ApiCommands.GetCustomAttributeConfiguration);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .GetCustomAttributeConfiguration;
	    }
	    async exportCustomAttributes(exportAll) {
	        const command = this.createCommand(Enums_1.ApiCommands.ExportCustomAttributes);
	        command.additionalParameters = {
	            ExportCustomAttributes: {
	                ExportAllAttributes: exportAll
	            }
	        };
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .ExportCustomAttributes;
	    }
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        return command;
	    }
	};
	CustomAttributes.CustomAttributes = CustomAttributes$1;
	return CustomAttributes;
}

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return Util;
	hasRequiredUtil = 1;
	(function (exports) {
		var __createBinding = (Util && Util.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (Util && Util.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireBaseDataTypes(), exports);
		__exportStar(requireParameterBase(), exports);
		__exportStar(requireGetSet(), exports);
		__exportStar(requireEnums(), exports);
		__exportStar(requireCustomAttributes(), exports); 
	} (Util));
	return Util;
}

var APIConnectorVuplex = {};

var hasRequiredAPIConnectorVuplex;

function requireAPIConnectorVuplex () {
	if (hasRequiredAPIConnectorVuplex) return APIConnectorVuplex;
	hasRequiredAPIConnectorVuplex = 1;
	Object.defineProperty(APIConnectorVuplex, "__esModule", { value: true });
	APIConnectorVuplex.ApiConnectorVuplex = void 0;
	const APIConnector_1 = requireAPIConnector();
	/**
	 * @internal
	 */
	class ApiConnectorVuplex {
	    get available() {
	        return window.vuplex != null;
	    }
	    inIframe() {
	        try {
	            return window.self !== window.top;
	        }
	        catch (_a) {
	            return true;
	        }
	    }
	    initialize() {
	        if (this.available) {
	            this.attachListener();
	        }
	        else {
	            window.addEventListener('vuplexready', this.attachListener);
	        }
	        //add another handler for window.message. If we are in an Iframe. window.vuplex is available but the event is not working
	        if (this.inIframe()) {
	            console.log("Detected Iframe. Adding additional IFrame Hook");
	            addEventListener("message", (event) => {
	                const json = JSON.parse(event.data);
	                if (json.type == "ApiResponse") {
	                    APIConnector_1.Api.get().handleEvent(json.message);
	                }
	            });
	        }
	    }
	    attachListener() {
	        window.vuplex.addEventListener('message', (event) => {
	            const json = JSON.parse(event.data);
	            if (json.type == "ApiResponse") {
	                APIConnector_1.Api.get().handleEvent(json.message);
	            }
	        });
	    }
	    async sendCommand(command) {
	        window.vuplex.postMessage({
	            type: 'Command',
	            message: JSON.stringify(command)
	        });
	    }
	}
	APIConnectorVuplex.ApiConnectorVuplex = ApiConnectorVuplex;
	return APIConnectorVuplex;
}

var hasRequiredAPIConnector;

function requireAPIConnector () {
	if (hasRequiredAPIConnector) return APIConnector;
	hasRequiredAPIConnector = 1;
	Object.defineProperty(APIConnector, "__esModule", { value: true });
	APIConnector.Api = APIConnector.ApiResponseContainer = void 0;
	const Util_1 = requireUtil();
	const APIConnectorVuplex_1 = requireAPIConnectorVuplex();
	const CaxApiCommand_1 = requireCaxApiCommand();
	class ApiResponseContainer {
	}
	APIConnector.ApiResponseContainer = ApiResponseContainer;
	/**
	 * @internal
	 * Dont use the API class unless you know what you are doing. Changes to this class could be undocumented
	 */
	class Api {
	    static get() {
	        if (this.instance != null) {
	            return this.instance;
	        }
	        this.instance = new Api();
	        this.instance.initialize();
	        return this.instance;
	    }
	    get AppControlsAvailable() {
	        var _a;
	        return ((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) && this.apiConnector instanceof APIConnectorVuplex_1.ApiConnectorVuplex;
	    }
	    get BBVAvailable() {
	        var _a;
	        return ((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) && !(this.apiConnector instanceof APIConnectorVuplex_1.ApiConnectorVuplex);
	    }
	    get Available() {
	        var _a, _b;
	        return (_b = (_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) !== null && _b !== void 0 ? _b : false;
	    }
	    /**
	     * Sets / replaces the current connector as some connectors like BBV are not yet available at start because peer
	     * connection needs to be established.
	     * @param connector to use from now on.
	     */
	    registerConnector(connector) {
	        this.apiConnector = connector;
	    }
	    handleEvent(json) {
	        if (this.debug) {
	            console.log("recieving response", json);
	        }
	        // todo: remove old property name fallback
	        const asResponse = json;
	        const requestId = asResponse.RequestId;
	        const errorCode = asResponse.ErrorCode;
	        if (requestId in Api.instance.waiting) {
	            if (errorCode != 0) {
	                const errorMessage = asResponse.ErrorMessage;
	                Api.instance.waitingFailure[requestId](errorMessage);
	                delete Api.instance.waiting[requestId];
	                delete Api.instance.waitingFailure[requestId];
	            }
	            else {
	                Api.instance.waiting[requestId](json);
	                delete Api.instance.waiting[requestId];
	                delete Api.instance.waitingFailure[requestId];
	            }
	        }
	        if (requestId in Api.instance.registeredEvents) {
	            Api.instance.registeredEvents[requestId](json);
	        }
	    }
	    initialize() {
	        this.apiConnector = new APIConnectorVuplex_1.ApiConnectorVuplex();
	        this.apiConnector.initialize();
	    }
	    constructor() {
	        this.waiting = {};
	        this.waitingFailure = {};
	        this.registeredEvents = {};
	    }
	    async sendCommandInternal(command) {
	        const requestId = Math.floor(Math.random() * 2147483647);
	        command.requestId = requestId;
	        const promise = new Promise((resolve, error) => {
	            var _a;
	            this.waiting[requestId] = resolve;
	            this.waitingFailure[requestId] = error;
	            if ((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.available) {
	                if (this.debug) {
	                    console.log('sending command', command);
	                }
	                this.apiConnector.sendCommand(command);
	            }
	            else {
	                console.error("No backend available");
	                error("No backend available");
	            }
	        });
	        const result = await promise;
	        return result;
	    }
	    async sendCommand(command) {
	        const result = await this.sendCommandInternal(command);
	        return result;
	    }
	    async sendCommandWithReturnType(command) {
	        const result = await this.sendCommandInternal(command);
	        return result;
	    }
	    async addEventCallback(event, eventId, callback) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.AddEventCallback);
	        command.commandParameters.push(event.toString());
	        command.commandParameters.push(eventId.toString());
	        this.registeredEvents[eventId] = callback;
	        return this.sendCommand(command);
	    }
	    async removeEventCallback(eventId) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.RemoveEventCallback);
	        command.commandParameters.push(eventId.toString());
	        delete this.registeredEvents[eventId];
	        return this.sendCommand(command);
	    }
	}
	APIConnector.Api = Api;
	Api.instance = undefined;
	return APIConnector;
}

var Objects = {};

var Camera = {};

var hasRequiredCamera;

function requireCamera () {
	if (hasRequiredCamera) return Camera;
	hasRequiredCamera = 1;
	Object.defineProperty(Camera, "__esModule", { value: true });
	Camera.Camera = void 0;
	const Util_1 = requireUtil();
	const APIConnector_1 = requireAPIConnector();
	let Camera$1 = class Camera {
	    /**
	     * @internal
	     * @param scene
	     */
	    constructor(scene) {
	        this.scene = scene;
	        this.Position = new Util_1.GetSet(async () => {
	            return (await this.getCameraView()).ResultData.CameraView.Position;
	        }, async (value) => {
	            const rotation = await this.Rotation.get();
	            await this.setCameraView(new Util_1.CameraView(value, rotation));
	        });
	        this.Rotation = new Util_1.GetSet(async () => {
	            return (await this.getCameraView()).ResultData.CameraView.Rotation;
	        }, async (value) => {
	            const position = await this.Position.get();
	            await this.setCameraView(new Util_1.CameraView(position, value));
	        });
	        this.CameraView = new Util_1.GetSet(async () => {
	            return (await this.getCameraView()).ResultData.CameraView;
	        }, async (value) => {
	            await this.setCameraView(value);
	        });
	        this.ClippingPlane = new Util_1.GetSet(async () => {
	            return await this.getClippingPlane();
	        }, async (value) => {
	            await this.setClippingPlane(value);
	        });
	    }
	    async setCameraView(value) {
	        const command = this.scene.createCommand(Util_1.ApiCommands.SetCameraView);
	        command.commandParameters.push(value.Position.X.toString());
	        command.commandParameters.push(value.Position.Y.toString());
	        command.commandParameters.push(value.Position.Z.toString());
	        command.commandParameters.push(value.Rotation.X.toString());
	        command.commandParameters.push(value.Rotation.Y.toString());
	        command.commandParameters.push(value.Rotation.Z.toString());
	        //command.Target = this.scene.id;
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async getCameraView() {
	        const command = this.scene.createCommand(Util_1.ApiCommands.GetCameraView);
	        return await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	    }
	    async getClippingPlane() {
	        throw new Error("Not Implemented");
	    }
	    async setClippingPlane(plane) {
	        const command = this.scene.createCommand(Util_1.ApiCommands.SetClippingPlane);
	        command.commandParameters.push(plane.Near.toString());
	        command.commandParameters.push(plane.Far.toString());
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Make the camera look at a target from the current view
	     * @param target Vector of the target
	     * @returns
	     */
	    async lookAt(target) {
	        const command = this.scene.createCommand(Util_1.ApiCommands.SetCameraViewLookAtTarget);
	        const position = await this.Position.get();
	        command.commandParameters.push(position.X.toString());
	        command.commandParameters.push(position.Y.toString());
	        command.commandParameters.push(position.Z.toString());
	        command.commandParameters.push(target.X.toString());
	        command.commandParameters.push(target.Y.toString());
	        command.commandParameters.push(target.Z.toString());
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Reset the view to the default position
	     * @returns
	     */
	    async resetView() {
	        const command = this.scene.createCommand(Util_1.ApiCommands.ResetView);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	};
	Camera.Camera = Camera$1;
	return Camera;
}

var Layer2D = {};

var hasRequiredLayer2D;

function requireLayer2D () {
	if (hasRequiredLayer2D) return Layer2D;
	hasRequiredLayer2D = 1;
	Object.defineProperty(Layer2D, "__esModule", { value: true });
	Layer2D.Layer2D = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const CaxApiCommand_1 = requireCaxApiCommand();
	let Layer2D$1 = class Layer2D {
	    constructor(GroupId) {
	        this.GroupId = GroupId;
	    }
	    /**
	     * Draw a Line in PID
	     * @param vertices Points of the line
	     * @param color The color of the line
	     * @param width THe Width of the line
	     */
	    async drawLine(vertices, color, width) {
	        const command = this.createCommand(Util_1.ApiCommands.DrawLine);
	        command.additionalParameters = {
	            DrawLine: {
	                DrawingId: this.GroupId,
	                Vertices: vertices.map(position => { return { X: position.X, Y: position.Y, Z: 0 }; }),
	                Color: color,
	                Width: width
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Place a text inside a pid scene
	     * @param text The text to draw
	     * @param position The position of the text
	     * @param rotation The rotation of the text
	     * @param size The size of the text
	     * @param color The color of the tex
	     */
	    async placeText(text, position, rotation, size, color) {
	        const command = this.createCommand(Util_1.ApiCommands.PlaceText);
	        command.additionalParameters = {
	            PlaceText: {
	                DrawingId: this.GroupId,
	                Text: text,
	                Position: { X: position.X, Y: position.Y, Z: 0 },
	                EulerRotation: { X: 0, Y: 0, Z: rotation },
	                Color: color,
	                Size: size,
	                TestMode: false
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Place an arc
	     * @param position Position of the arc
	     * @param rotation Rotation of the arc
	     * @param color Color of the arc
	     * @param angle Angle of the arc
	     * @param radius Radius of the arc
	     */
	    async placeArc(position, rotation, color, angle, radius) {
	        const command = this.createCommand(Util_1.ApiCommands.PlaceArc);
	        command.additionalParameters = {
	            PlaceArc: {
	                DrawingId: this.GroupId,
	                Position: { X: position.X, Y: position.Y, Z: 0 },
	                EulerRotation: { X: 0, Y: 0, Z: rotation },
	                Color: color,
	                Angle: angle,
	                Radius: radius
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Destroy the active drawing
	     */
	    async destroy() {
	        const command = this.createCommand(Util_1.ApiCommands.DestroyDrawing);
	        command.commandParameters.push(this.GroupId);
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * @internal
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        command.target = Util_1.TargetEnum.Intelli;
	        return command;
	    }
	};
	Layer2D.Layer2D = Layer2D$1;
	return Layer2D;
}

var Layer3D = {};

var hasRequiredLayer3D;

function requireLayer3D () {
	if (hasRequiredLayer3D) return Layer3D;
	hasRequiredLayer3D = 1;
	Object.defineProperty(Layer3D, "__esModule", { value: true });
	Layer3D.Layer3D = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const CaxApiCommand_1 = requireCaxApiCommand();
	//Application -> Design -> 3D -> Layer
	let Layer3D$1 = class Layer3D {
	    constructor(GroupId) {
	        this.GroupId = GroupId;
	    }
	    /**
	     * Place an OBJ in the scene
	     * @param obj Path to the obj file
	     * @param instances The Instances of this object
	     * @param suppressLoadingScreen
	     */
	    async placeObj(obj, instances, suppressLoadingScreen = false) {
	        const command = this.createCommand(Util_1.ApiCommands.PlaceObj);
	        command.additionalParameters = {
	            PlaceObj: {
	                DrawingId: this.GroupId,
	                Instances: instances,
	                ObjLocalPath: obj,
	                SuppressLoadingScreen: suppressLoadingScreen
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Draw a Line in 3D
	     * @param vertices Points of the line
	     * @param color The color of the line
	     * @param width THe Width of the line
	     */
	    async drawLine(vertices, color, width) {
	        const command = this.createCommand(Util_1.ApiCommands.DrawLine);
	        command.additionalParameters = {
	            DrawLine: {
	                DrawingId: this.GroupId,
	                Vertices: vertices,
	                Color: color,
	                Width: width
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Place a text inside a 3d scene
	     * @param text The text to draw
	     * @param position The position of the text
	     * @param rotation The rotation of the text
	     * @param size The size of the text
	     * @param color The color of the text
	     */
	    async placeText(text, position, rotation, size, color) {
	        const command = this.createCommand(Util_1.ApiCommands.PlaceText);
	        command.additionalParameters = {
	            PlaceText: {
	                DrawingId: this.GroupId,
	                Text: text,
	                Position: position,
	                EulerRotation: rotation,
	                Color: color,
	                Size: size,
	                TestMode: false
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Place an arc
	     * @param position Position of the arc
	     * @param rotation Rotation of the arc
	     * @param color Color of the arc
	     * @param angle Angle of the arc
	     * @param radius Radius of the arc
	     */
	    async placeArc(position, rotation, color, angle, radius) {
	        const command = this.createCommand(Util_1.ApiCommands.PlaceArc);
	        command.additionalParameters = {
	            PlaceArc: {
	                DrawingId: this.GroupId,
	                Position: position,
	                EulerRotation: rotation,
	                Color: color,
	                Angle: angle,
	                Radius: radius
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Place a PLY mesh
	     * @param color Color of the Mesh
	     * @param vertices Every 3 vertecies build a face
	     */
	    async placePly(color, vertices) {
	        const command = this.createCommand(Util_1.ApiCommands.PlacePly);
	        command.additionalParameters = {
	            PlacePly: {
	                DrawingId: this.GroupId,
	                Color: color,
	                Vertices: vertices,
	            }
	        };
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Destroy the active drawing
	     */
	    async destroy() {
	        const command = this.createCommand(Util_1.ApiCommands.DestroyDrawing);
	        command.commandParameters.push(this.GroupId);
	        APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * @internal
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        return command;
	    }
	};
	Layer3D.Layer3D = Layer3D$1;
	return Layer3D;
}

var Model = {};

var hasRequiredModel;

function requireModel () {
	if (hasRequiredModel) return Model;
	hasRequiredModel = 1;
	Object.defineProperty(Model, "__esModule", { value: true });
	Model.Model = Model.ModelLegacy = void 0;
	const _1 = requireObjects();
	const APIConnector_1 = requireAPIConnector();
	const Enums_1 = requireEnums();
	const Util_1 = requireUtil();
	const GetSet_1 = requireGetSet();
	const CaxApiCommand_1 = requireCaxApiCommand();
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
	Model.ModelLegacy = ModelLegacy;
	let Model$1 = class Model {
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
	    async gGetUniqueAttributeValuesPid(attribute) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Enums_1.ApiCommands.GetModelAttributeValues);
	        command.commandParameters.push(attribute);
	        command.target = Enums_1.TargetEnum.Intelli;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.ModelAttributeValues[attribute];
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
	};
	Model.Model = Model$1;
	return Model;
}

var IntelliPidDrawing = {};

var hasRequiredIntelliPidDrawing;

function requireIntelliPidDrawing () {
	if (hasRequiredIntelliPidDrawing) return IntelliPidDrawing;
	hasRequiredIntelliPidDrawing = 1;
	Object.defineProperty(IntelliPidDrawing, "__esModule", { value: true });
	IntelliPidDrawing.IntelliPidDrawing = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	let IntelliPidDrawing$1 = class IntelliPidDrawing {
	    constructor(info, model) {
	        this.info = info;
	        this.model = model;
	        this.Identifier = info.Identifier;
	        this.IsOpen = info.IsOpen;
	        this.IsFocused = info.IsFocused;
	    }
	    /**
	     * Open the IntelliPidDrawing
	     * @returns
	     */
	    async openPid() {
	        const command = this.model.createCommand(Util_1.ApiCommands.OpenPid);
	        command.commandParameters.push(this.Identifier);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Open the IntelliPidDrawing
	     * @returns
	     */
	    async closePid() {
	        const command = this.model.createCommand(Util_1.ApiCommands.ClosePid);
	        command.commandParameters.push(this.Identifier);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	};
	IntelliPidDrawing.IntelliPidDrawing = IntelliPidDrawing$1;
	return IntelliPidDrawing;
}

var Events$1 = {};

var ResponseTypes = {};

var ApiResponse = {};

var hasRequiredApiResponse;

function requireApiResponse () {
	if (hasRequiredApiResponse) return ApiResponse;
	hasRequiredApiResponse = 1;
	Object.defineProperty(ApiResponse, "__esModule", { value: true });
	ApiResponse.ApiResponseWithType = ApiResponse.ApiResponse = void 0;
	let ApiResponse$1 = class ApiResponse {
	    constructor() {
	        this.ErrorCode = -1;
	        this.ErrorMessage = "";
	        this.RequestId = 0;
	    }
	};
	ApiResponse.ApiResponse = ApiResponse$1;
	class ApiResponseWithType extends ApiResponse$1 {
	    constructor() { super(); }
	}
	ApiResponse.ApiResponseWithType = ApiResponseWithType;
	return ApiResponse;
}

var GetObjects = {};

var hasRequiredGetObjects;

function requireGetObjects () {
	if (hasRequiredGetObjects) return GetObjects;
	hasRequiredGetObjects = 1;
	Object.defineProperty(GetObjects, "__esModule", { value: true });
	GetObjects.GenericLoadFromFileResponse = GetObjects.SaveFileApiReturnType = GetObjects.LoadFileApiReturnType = GetObjects.GetUiThemes = GetObjects.GetUiColors = GetObjects.GetStorageVariablesList = GetObjects.GetStorageVariable = GetObjects.GetPdfPrinterResult = GetObjects.GetPdfPrinter = GetObjects.ClashCandidate = GetObjects.Clash = GetObjects.GetClashCandidates = GetObjects.GetClashes = GetObjects.GetChangeableAttributesResponse = GetObjects.FilesTreeGetStateResponse = GetObjects.GetFilesTreeContent = GetObjects.GetCatalogSymbols = GetObjects.OpenAuthenticationContextResult = GetObjects.GetWfsRemoteContent = GetObjects.FilesTreeContainerObject = GetObjects.GetFilesTreeContainerObject = GetObjects.GetLanguage = GetObjects.GetProjectionSpheres = GetObjects.GetTreeStructure = GetObjects.GetTreeNodesOfFolder = GetObjects.GetTreeFolderSiblings = GetObjects.GetTreeFolderChildren = GetObjects.GetTreeRootNode = GetObjects.GetPdfInfo = GetObjects.GetIntellipidDrawings = GetObjects.ExportCustomAttributesResult = GetObjects.GetRawSvgPidObjects = GetObjects.GetCustomAttributesConfiguration = GetObjects.LifeCycleState = GetObjects.GetLifeCycleState = GetObjects.GetVisibleAspects = GetObjects.GetTreeConfiguration = GetObjects.GetFilesTreeObjects = GetObjects.GetFilesTreeObject = GetObjects.TakeScreenshotResult = GetObjects.GetProjectInfo = GetObjects.GetCameraView = GetObjects.GetObjectsSnapInfo = GetObjects.GetClippingInfoResult = GetObjects.GetModelInfo = GetObjects.GetObjectsColors = GetObjects.GetObjectsBoundingBox = GetObjects.GetObjectsAttributes = GetObjects.GetSelectedObjects = GetObjects.GetObjects = void 0;
	GetObjects.GetLinkedElements = GetObjects.GetModelAttributeValues = void 0;
	let GetObjects$1 = class GetObjects {
	};
	GetObjects.GetObjects = GetObjects$1;
	class GetSelectedObjects {
	}
	GetObjects.GetSelectedObjects = GetSelectedObjects;
	class GetObjectsAttributes {
	    constructor() {
	        this.ObjectsAttributes = {};
	    }
	}
	GetObjects.GetObjectsAttributes = GetObjectsAttributes;
	class GetObjectsBoundingBox {
	    constructor() {
	        this.ObjectsBoundingBox = {};
	    }
	}
	GetObjects.GetObjectsBoundingBox = GetObjectsBoundingBox;
	class GetObjectsColors {
	    constructor() {
	        this.ObjectsColors = {};
	    }
	}
	GetObjects.GetObjectsColors = GetObjectsColors;
	class GetModelInfo {
	}
	GetObjects.GetModelInfo = GetModelInfo;
	class GetClippingInfoResult {
	}
	GetObjects.GetClippingInfoResult = GetClippingInfoResult;
	class GetObjectsSnapInfo {
	    constructor() {
	        this.ObjectsSnapInfo = {};
	    }
	}
	GetObjects.GetObjectsSnapInfo = GetObjectsSnapInfo;
	class GetCameraView {
	}
	GetObjects.GetCameraView = GetCameraView;
	class GetProjectInfo {
	}
	GetObjects.GetProjectInfo = GetProjectInfo;
	class TakeScreenshotResult {
	}
	GetObjects.TakeScreenshotResult = TakeScreenshotResult;
	class GetFilesTreeObject {
	}
	GetObjects.GetFilesTreeObject = GetFilesTreeObject;
	class GetFilesTreeObjects {
	}
	GetObjects.GetFilesTreeObjects = GetFilesTreeObjects;
	class GetTreeConfiguration {
	}
	GetObjects.GetTreeConfiguration = GetTreeConfiguration;
	class GetVisibleAspects {
	}
	GetObjects.GetVisibleAspects = GetVisibleAspects;
	class GetLifeCycleState {
	}
	GetObjects.GetLifeCycleState = GetLifeCycleState;
	class LifeCycleState {
	}
	GetObjects.LifeCycleState = LifeCycleState;
	class GetCustomAttributesConfiguration {
	}
	GetObjects.GetCustomAttributesConfiguration = GetCustomAttributesConfiguration;
	class GetRawSvgPidObjects {
	    constructor() {
	        this.RawSvgPidObjects = {};
	    }
	}
	GetObjects.GetRawSvgPidObjects = GetRawSvgPidObjects;
	class ExportCustomAttributesResult {
	}
	GetObjects.ExportCustomAttributesResult = ExportCustomAttributesResult;
	class GetIntellipidDrawings {
	    constructor() {
	        this.GetIntelliPidDrawings = {};
	    }
	}
	GetObjects.GetIntellipidDrawings = GetIntellipidDrawings;
	class GetPdfInfo {
	}
	GetObjects.GetPdfInfo = GetPdfInfo;
	class GetTreeRootNode {
	}
	GetObjects.GetTreeRootNode = GetTreeRootNode;
	class GetTreeFolderChildren {
	}
	GetObjects.GetTreeFolderChildren = GetTreeFolderChildren;
	class GetTreeFolderSiblings {
	}
	GetObjects.GetTreeFolderSiblings = GetTreeFolderSiblings;
	class GetTreeNodesOfFolder {
	}
	GetObjects.GetTreeNodesOfFolder = GetTreeNodesOfFolder;
	class GetTreeStructure {
	    constructor() {
	        this.GetTreeStructure = {};
	    }
	}
	GetObjects.GetTreeStructure = GetTreeStructure;
	class GetProjectionSpheres {
	    constructor() {
	        this.ProjectionSpheres = [];
	    }
	}
	GetObjects.GetProjectionSpheres = GetProjectionSpheres;
	class GetLanguage {
	}
	GetObjects.GetLanguage = GetLanguage;
	class GetFilesTreeContainerObject {
	}
	GetObjects.GetFilesTreeContainerObject = GetFilesTreeContainerObject;
	class FilesTreeContainerObject {
	}
	GetObjects.FilesTreeContainerObject = FilesTreeContainerObject;
	class GetWfsRemoteContent {
	}
	GetObjects.GetWfsRemoteContent = GetWfsRemoteContent;
	class OpenAuthenticationContextResult {
	}
	GetObjects.OpenAuthenticationContextResult = OpenAuthenticationContextResult;
	class GetCatalogSymbols {
	}
	GetObjects.GetCatalogSymbols = GetCatalogSymbols;
	class GetFilesTreeContent {
	}
	GetObjects.GetFilesTreeContent = GetFilesTreeContent;
	class FilesTreeGetStateResponse {
	}
	GetObjects.FilesTreeGetStateResponse = FilesTreeGetStateResponse;
	class GetChangeableAttributesResponse {
	    constructor() {
	        this.ChangeableAttributes = {};
	    }
	}
	GetObjects.GetChangeableAttributesResponse = GetChangeableAttributesResponse;
	class GetClashes {
	}
	GetObjects.GetClashes = GetClashes;
	class GetClashCandidates {
	}
	GetObjects.GetClashCandidates = GetClashCandidates;
	class Clash {
	}
	GetObjects.Clash = Clash;
	class ClashCandidate {
	}
	GetObjects.ClashCandidate = ClashCandidate;
	class GetPdfPrinter {
	}
	GetObjects.GetPdfPrinter = GetPdfPrinter;
	class GetPdfPrinterResult {
	}
	GetObjects.GetPdfPrinterResult = GetPdfPrinterResult;
	class GetStorageVariable {
	}
	GetObjects.GetStorageVariable = GetStorageVariable;
	class GetStorageVariablesList {
	}
	GetObjects.GetStorageVariablesList = GetStorageVariablesList;
	class GetUiColors {
	    constructor() {
	        this.UiColors = {};
	    }
	}
	GetObjects.GetUiColors = GetUiColors;
	class GetUiThemes {
	    constructor() {
	        this.UiThemes = {};
	    }
	}
	GetObjects.GetUiThemes = GetUiThemes;
	class LoadFileApiReturnType {
	}
	GetObjects.LoadFileApiReturnType = LoadFileApiReturnType;
	class SaveFileApiReturnType {
	}
	GetObjects.SaveFileApiReturnType = SaveFileApiReturnType;
	class GenericLoadFromFileResponse {
	}
	GetObjects.GenericLoadFromFileResponse = GenericLoadFromFileResponse;
	class GetModelAttributeValues {
	}
	GetObjects.GetModelAttributeValues = GetModelAttributeValues;
	class GetLinkedElements {
	}
	GetObjects.GetLinkedElements = GetLinkedElements;
	return GetObjects;
}

var Events = {};

var hasRequiredEvents$1;

function requireEvents$1 () {
	if (hasRequiredEvents$1) return Events;
	hasRequiredEvents$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.StorageVariableChangedEvent = exports.AuthenticationContextChangedEvent = exports.IntelliPidSelectionChanged = exports.IntelliPidSelectionChangedEvent = exports.AnimationTimestamp = exports.AnimationTimestampChangedObject = exports.LinkClicked = exports.LifeCycleEvent = exports.SelectionChanged = exports.PointerClicked = exports.ClashComputationProgressChangedEvent = exports.CustomAttributeValueChanged = exports.AnimationTimestampChangedEvent = exports.CustomAttributeValueChangedEvent = exports.LinkClickedEvent = exports.SelectionChangedEvent = exports.PointerClickedEvent = exports.ApiEvents = void 0;
		(function (ApiEvents) {
		    ApiEvents["SelectionChanged"] = "SelectionChanged";
		    ApiEvents["PointerClicked"] = "PointerClicked";
		    ApiEvents["LinkClicked"] = "LinkClicked";
		    ApiEvents["LifeCycle"] = "LifeCycle";
		    ApiEvents["CustomAttributeValueChanged"] = "CustomAttributeValueChanged";
		    ApiEvents["AnimationTimestampChanged"] = "AnimationTimestampChanged";
		    ApiEvents["IntellipidSelectionChanged"] = "IntellipidSelectionChanged";
		    ApiEvents["AuthenticationContextChanged"] = "AuthenticationContextChanged";
		    ApiEvents["ClashComputationProgressChanged"] = "ClashComputationProgressChanged";
		    ApiEvents["StorageVariableChanged"] = "StorageVariableChanged";
		})(exports.ApiEvents || (exports.ApiEvents = {}));
		/**
		 * @internal
		 */
		class PointerClickedEvent {
		}
		exports.PointerClickedEvent = PointerClickedEvent;
		/**
		 * @internal
		 */
		class SelectionChangedEvent {
		}
		exports.SelectionChangedEvent = SelectionChangedEvent;
		/**
		 * @internal
		 */
		class LinkClickedEvent {
		}
		exports.LinkClickedEvent = LinkClickedEvent;
		/**
		 * @internal
		 */
		class CustomAttributeValueChangedEvent {
		}
		exports.CustomAttributeValueChangedEvent = CustomAttributeValueChangedEvent;
		/**
		 * @internal
		 */
		class AnimationTimestampChangedEvent {
		}
		exports.AnimationTimestampChangedEvent = AnimationTimestampChangedEvent;
		class CustomAttributeValueChanged {
		}
		exports.CustomAttributeValueChanged = CustomAttributeValueChanged;
		class ClashComputationProgressChangedEvent {
		}
		exports.ClashComputationProgressChangedEvent = ClashComputationProgressChangedEvent;
		class PointerClicked {
		}
		exports.PointerClicked = PointerClicked;
		class SelectionChanged {
		}
		exports.SelectionChanged = SelectionChanged;
		class LifeCycleEvent {
		}
		exports.LifeCycleEvent = LifeCycleEvent;
		class LinkClicked {
		}
		exports.LinkClicked = LinkClicked;
		class AnimationTimestampChangedObject {
		}
		exports.AnimationTimestampChangedObject = AnimationTimestampChangedObject;
		class AnimationTimestamp {
		}
		exports.AnimationTimestamp = AnimationTimestamp;
		class IntelliPidSelectionChangedEvent {
		}
		exports.IntelliPidSelectionChangedEvent = IntelliPidSelectionChangedEvent;
		class IntelliPidSelectionChanged {
		}
		exports.IntelliPidSelectionChanged = IntelliPidSelectionChanged;
		class AuthenticationContextChangedEvent {
		}
		exports.AuthenticationContextChangedEvent = AuthenticationContextChangedEvent;
		class StorageVariableChangedEvent {
		}
		exports.StorageVariableChangedEvent = StorageVariableChangedEvent; 
	} (Events));
	return Events;
}

var hasRequiredResponseTypes;

function requireResponseTypes () {
	if (hasRequiredResponseTypes) return ResponseTypes;
	hasRequiredResponseTypes = 1;
	(function (exports) {
		var __createBinding = (ResponseTypes && ResponseTypes.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (ResponseTypes && ResponseTypes.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireApiResponse(), exports);
		__exportStar(requireGetObjects(), exports);
		__exportStar(requireEvents$1(), exports); 
	} (ResponseTypes));
	return ResponseTypes;
}

var hasRequiredEvents;

function requireEvents () {
	if (hasRequiredEvents) return Events$1;
	hasRequiredEvents = 1;
	Object.defineProperty(Events$1, "__esModule", { value: true });
	Events$1.Events = void 0;
	const APIConnector_1 = requireAPIConnector();
	const ResponseTypes_1 = requireResponseTypes();
	class Events {
	    constructor() {
	        this.unloaded = false;
	        //store all currently registered event so we can unload them on window close or reload
	        this.registeredEvents = [];
	        //register both eventhandlers. IN some cases unload might not get triggert. Better save then sorry
	        window.addEventListener('beforeunload', this.onUnload.bind(this));
	        window.addEventListener('unload', this.onUnload.bind(this));
	    }
	    onUnload() {
	        //Only call this function once
	        if (this.unloaded)
	            return;
	        this.unloaded = true;
	        //create a copy of the object to not have issues when RemoveEvent removes the element
	        const copy = [...this.registeredEvents];
	        copy.forEach(element => {
	            this.removeEvent(element);
	        });
	    }
	    /**
	     * Register Selection Changed Event
	     */
	    async registerSelectionChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData.SelectionChanged); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.SelectionChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Register Pointer Clicked Event
	     */
	    async registerPointerClickedEventEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData.PointerClicked); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.PointerClicked, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Register Lifecycle Event
	     */
	    async registerLifeCycleEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        //let callbackWrapper = (event: PointerClickedEvent ) => {callback(event.pointerClicked);}
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.LifeCycle, eventId, callback);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Register Link Clicked Event
	     */
	    async registerLinkClickedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData.LinkClicked); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.LinkClicked, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Register CUstom Attribute Changed Event
	     */
	    async registerCustomAttributeValueChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData.CustomAttributeValueChanged); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.CustomAttributeValueChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Register Animation Timestamp Changed Event
	     */
	    async registerAnimationTimestampChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData.AnimationTimestampChanged); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.AnimationTimestampChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Register Selection Changed Event for IntelliPid
	     */
	    async registerIntellipidSelectionChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData.IntellipidSelectionChanged); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.IntellipidSelectionChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * @experimental
	     * Register Authentication context changed event. Please use Application.auth... instead
	     */
	    async registerAuthenticationContextChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.AuthenticationContextChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * @experimental
	     * Register clash computation changed event  Filter3D.startClashCompution instead
	     */
	    async registerClashComputationProgressChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.ClashComputationProgressChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * @experimental
	     * Register clash computation changed event  Filter3D.startClashCompution instead
	     */
	    async registerStorageVariableChangedEvent(callback) {
	        const eventId = Math.floor(Math.random() * 2147483647);
	        const callbackWrapper = (event) => { callback(event.ResultData); };
	        await APIConnector_1.Api.get().addEventCallback(ResponseTypes_1.ApiEvents.StorageVariableChanged, eventId, callbackWrapper);
	        this.registeredEvents.push(eventId);
	        return eventId;
	    }
	    /**
	     * Use this function in react useEffect functions to automatically provide the unregister function
	     * @param fun the event function that should be called
	     * @param callback the callback function that this event should excute
	     * @returns the unregister event function
	     */
	    useEffectWrapper(fun, callback) {
	        const response = fun.bind(this)(callback);
	        return () => { response.then((e) => this.removeEvent(e)); };
	    }
	    /**
	     * remove any event with that ID
	     */
	    async removeEvent(id) {
	        //remove event when unregistered
	        this.registeredEvents = this.registeredEvents.filter(x => x != id);
	        await APIConnector_1.Api.get().removeEventCallback(id);
	    }
	}
	Events$1.Events = Events;
	return Events$1;
}

var ProjectionSphereElement = {};

var hasRequiredProjectionSphereElement;

function requireProjectionSphereElement () {
	if (hasRequiredProjectionSphereElement) return ProjectionSphereElement;
	hasRequiredProjectionSphereElement = 1;
	Object.defineProperty(ProjectionSphereElement, "__esModule", { value: true });
	ProjectionSphereElement.ProjectionSphereElement = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	let ProjectionSphereElement$1 = class ProjectionSphereElement {
	    constructor(projectionSphere, model) {
	        this.projectionSphere = projectionSphere;
	        this.model = model;
	    }
	    /**
	     * Enter the Projection
	     * @param opacity optional, is set overwrite the opacity value with the new value
	     * @param rotation optional, enter a rotation to view the projection from
	     * @returns
	     */
	    async enterProjectionSphere(opacity, rotation) {
	        const command = this.model.createCommand(Util_1.ApiCommands.EnterProjectionSphere);
	        command.commandParameters = [this.projectionSphere.Guid];
	        if (opacity != null) {
	            command.commandParameters.push(opacity.toString());
	        }
	        if (rotation != null) {
	            command.commandParameters.push(rotation.X.toString());
	            command.commandParameters.push(rotation.Y.toString());
	            command.commandParameters.push(rotation.Z.toString());
	        }
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Leave the current Projection
	     * @returns
	     */
	    async leaveProjectionSphere() {
	        const command = this.model.createCommand(Util_1.ApiCommands.LeaveProjectionSphere);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	};
	ProjectionSphereElement.ProjectionSphereElement = ProjectionSphereElement$1;
	return ProjectionSphereElement;
}

var ClashContext = {};

var hasRequiredClashContext;

function requireClashContext () {
	if (hasRequiredClashContext) return ClashContext;
	hasRequiredClashContext = 1;
	Object.defineProperty(ClashContext, "__esModule", { value: true });
	ClashContext.ClashContext = void 0;
	const Application_1 = requireApplication();
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	let ClashContext$1 = class ClashContext {
	    constructor() {
	        this.ids = [];
	    }
	    async registerContextChangedEvent(callback) {
	        const id = await Application_1.Application.getInstance().Events.registerClashComputationProgressChangedEvent((event) => {
	            callback(event);
	            if (event.Progress == 1) {
	                this.ids = this.ids.filter(x => x != id);
	                Application_1.Application.getInstance().Events.removeEvent(id);
	            }
	        });
	        this.ids.push(id);
	    }
	    async getClashCandidates() {
	        const command = this.createCommand(Util_1.ApiCommands.GetClashCandidates);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async getClashResults() {
	        const command = this.createCommand(Util_1.ApiCommands.GetClashResults);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async cancelClashComputation() {
	        for (const id of this.ids) {
	            await Application_1.Application.getInstance().Events.removeEvent(id);
	        }
	        const command = this.createCommand(Util_1.ApiCommands.CancelClashComputation);
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	    /**
	     * @internal
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        return command;
	    }
	};
	ClashContext.ClashContext = ClashContext$1;
	return ClashContext;
}

var FilterOperation3D = {};

var AttributeTree = {};

var hasRequiredAttributeTree;

function requireAttributeTree () {
	if (hasRequiredAttributeTree) return AttributeTree;
	hasRequiredAttributeTree = 1;
	Object.defineProperty(AttributeTree, "__esModule", { value: true });
	AttributeTree.AttributeTreeNode = void 0;
	const CaxApiCommand_1 = requireCaxApiCommand();
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	//where does this belong to? Model or Scene or Application
	class AttributeTreeNode {
	    constructor(Id, Name, Type) {
	        this.Id = Id;
	        this.Name = Name;
	        this.Type = Type;
	    }
	    //TODO move to model, scene or application
	    /**
	     * Get The Root node of the Attribute Tree
	     * @returns
	     */
	    static async getRoot() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeRootNode);
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.GetTreeRootNode;
	        return new AttributeTreeNode(result.Id, result.Name, result.Type);
	    }
	    /**
	     * Get the current Sub Folders for this attribute tree element
	     * @returns
	     */
	    async getSubFolders() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeFolderChildren);
	        command.commandParameters.push(this.Id);
	        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        const returnValue = [];
	        result.ResultData.GetTreeFolderChildren.forEach(element => {
	            returnValue.push(new AttributeTreeNode(element.Id, element.Name, element.Type));
	        });
	        return returnValue;
	    }
	    /**
	     * Get the Siblings for this Attribute Tree element
	     * @returns
	     */
	    async getSiblings() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeFolderSiblings);
	        command.commandParameters.push(this.Id);
	        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        const returnValue = [];
	        result.ResultData.GetTreeFolderSiblings.forEach(element => {
	            returnValue.push(new AttributeTreeNode(element.Id, element.Name, element.Type));
	        });
	        return returnValue;
	    }
	    async getTreeNodesOfFolder() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetTreeNodesOfFolder);
	        command.commandParameters.push(this.Id);
	        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        const returnValue = [];
	        result.ResultData.GetTreeNodesOfFolder.forEach(element => {
	            returnValue.push(new AttributeTreeNode(element.Id, element.Name, element.Type));
	        });
	        return returnValue;
	    }
	}
	AttributeTree.AttributeTreeNode = AttributeTreeNode;
	return AttributeTree;
}

var FilterOperation = {};

var ModelObject = {};

var hasRequiredModelObject;

function requireModelObject () {
	if (hasRequiredModelObject) return ModelObject;
	hasRequiredModelObject = 1;
	Object.defineProperty(ModelObject, "__esModule", { value: true });
	ModelObject.Attribute = ModelObject.ModelObject = void 0;
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	let ModelObject$1 = class ModelObject {
	    constructor(uid) {
	        this.Uid = uid;
	    }
	    /**
	     * @internal
	     */
	    initBase(attributes, elementLinks) {
	        this.Attributes = attributes;
	        this.ElementLinks = elementLinks;
	    }
	    /**
	     * @internal
	     */
	    init3D(bounds, objectColors, snapInfo) {
	        this.Bounds = bounds;
	        this.ObjectColors = objectColors;
	        this.SnapInfo = snapInfo;
	    }
	    /**
	     * @internal
	     */
	    initPid(rawSvg) {
	        this.RawSvg = rawSvg;
	    }
	    /**
	     * Get the Attribute value. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
	     * @param name attribute name
	     * @returns value or null if not found
	     */
	    getAttribute(name) {
	        if (!this.Attributes)
	            return null;
	        for (let index = 0; index < this.Attributes.length; index++) {
	            const element = this.Attributes[index];
	            if (element.Key == name) {
	                return element.Value;
	            }
	        }
	        return null;
	    }
	    /**
	     * Set a Custom Attribute. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
	     * @param name attribute name
	     * @param value new attribute value
	     * @param user username of the person changing the attribute
	     * @returns
	     */
	    async setCustomAttribute(name, value, user) {
	        if (!this.Attributes)
	            return null;
	        for (let index = 0; index < this.Attributes.length; index++) {
	            const element = this.Attributes[index];
	            if (element.Key == name) {
	                await element.SetCustomAttribute.set({ user: user, value: value });
	            }
	        }
	    }
	    /**
	     * Update a Changable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
	     * @param name attribute name
	     * @param value new attribute value
	     * @param user username of the person changing the attribute
	     * @returns
	     */
	    async setAttribute(name, value) {
	        if (!this.Attributes)
	            return null;
	        for (let index = 0; index < this.Attributes.length; index++) {
	            const element = this.Attributes[index];
	            if (element.Key == name) {
	                await element.SetAttribute.set(value);
	            }
	        }
	    }
	};
	ModelObject.ModelObject = ModelObject$1;
	class Attribute {
	    constructor(uid, key, value, isCustomAttribute, customAttributeDefinition, customAttributeSourceValue, target, isChangableAttribute) {
	        this.uid = uid;
	        this.Value = value;
	        this.Key = key;
	        this.IsCustomAttribute = isCustomAttribute;
	        this.IsChangableAttribute = isChangableAttribute;
	        this.SetCustomAttribute = new Util_1.Set(async (value) => {
	            if (customAttributeDefinition == null) {
	                throw new Error('no CustomAttribute information loaded. Specify in Filter or Attribute is no Custom Attribute');
	            }
	            if (customAttributeDefinition.ReadOnly) {
	                throw new Error('CustomAttribute is readonly');
	            }
	            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ImportCustomAttributeChangeSet);
	            command.target = target.Id;
	            command.additionalParameters = {
	                ImportCustomAttributeChangeSet: {
	                    ShowLoadScreen: false,
	                    ChangeSet: {
	                        Changes: [{
	                                CustomValue: value.value,
	                                Id: customAttributeDefinition.SourceDefinitions[0].Id,
	                                IsSessionChange: true,
	                                SourceValue: customAttributeSourceValue,
	                                Timestamp: new Date().toISOString().replace("T", " ").split(".")[0],
	                                User: value.user
	                            }]
	                    }
	                }
	            };
	            await APIConnector_1.Api.get().sendCommand(command);
	            this.Value = value.value;
	        });
	        this.SetAttribute = new Util_1.Set(async (value) => {
	            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAttribute);
	            command.target = target.Id;
	            command.commandParameters.push(this.uid);
	            command.commandParameters.push(this.Key);
	            command.commandParameters.push(value);
	            await APIConnector_1.Api.get().sendCommand(command);
	            this.Value = value;
	        });
	    }
	}
	ModelObject.Attribute = Attribute;
	return ModelObject;
}

var hasRequiredFilterOperation;

function requireFilterOperation () {
	if (hasRequiredFilterOperation) return FilterOperation;
	hasRequiredFilterOperation = 1;
	Object.defineProperty(FilterOperation, "__esModule", { value: true });
	FilterOperation.FilterOperation = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const ModelObject_1 = requireModelObject();
	/**
	 * Defines a default filteroperation
	 */
	let FilterOperation$1 = class FilterOperation {
	    constructor(scene) {
	        this.scene = scene;
	        /**
	         * The Condition used in the filter. By default this contains a match all condition (Uid=*)
	         */
	        this.Condition = "Uid=*";
	        /**
	         * How the {@link Condition} is evaluated
	         */
	        this.CombineMode = Util_1.CombineModes.And;
	        /**
	         * Should objects returned by GetObjects include Attributes
	         */
	        this.IncludeAttributes = false;
	        /**
	         * Should objects returned by GetObjects include CustomAttribute Information
	         */
	        this.IncludeCustomAttributes = false;
	        /**
	         * Should objects returned by GetObjects include ChangeableAttribute Information
	         */
	        this.IncludeChangableAttributes = false;
	        /**
	         * Should objects returned by GetObjects include linked elements Information
	         */
	        this.IncludeLinkedElements = false;
	    }
	    async getBaseObjects() {
	        const command = this.createCommand(Util_1.ApiCommands.GetObjects);
	        const models = [];
	        let getObjectsAttributes;
	        let getCustomAttributes;
	        let getChangeableAttributes;
	        let getLinkedElements;
	        const getObjects = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        if (this.IncludeAttributes) {
	            command.command = Util_1.ApiCommands.GetObjectsAttributes;
	            command.commandParameters = this.Attributes;
	            getObjectsAttributes = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	            command.commandParameters = [];
	        }
	        if (this.IncludeCustomAttributes) {
	            command.command = Util_1.ApiCommands.GetCustomAttributeConfiguration;
	            getCustomAttributes = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        }
	        if (this.IncludeChangableAttributes) {
	            command.command = Util_1.ApiCommands.GetObjectsChangeableAttributes;
	            getChangeableAttributes = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        }
	        if (this.IncludeLinkedElements) {
	            command.command = Util_1.ApiCommands.GetLinkedElements;
	            getLinkedElements = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        }
	        for (const uid of (await getObjects).ResultData.Objects) {
	            const model = new ModelObject_1.ModelObject(uid);
	            let attributes;
	            let links;
	            if (this.IncludeAttributes) {
	                attributes = [];
	                const customAttributeInfo = {};
	                if (this.IncludeCustomAttributes) {
	                    for (const configuration of (await getCustomAttributes).ResultData.GetCustomAttributeConfiguration) {
	                        customAttributeInfo[configuration.Name] = configuration;
	                    }
	                }
	                const changeableAttributes = {};
	                if (this.IncludeChangableAttributes) {
	                    try {
	                        const tempChangeable = (await getChangeableAttributes).ResultData.ChangeableAttributes[uid];
	                        for (const key of Object.keys(tempChangeable)) {
	                            changeableAttributes[key] = tempChangeable[key];
	                        }
	                    }
	                    catch (_a) {
	                        //If no changable elements exist this causes an exeption
	                    }
	                }
	                const objectsAttribute = (await getObjectsAttributes).ResultData.ObjectsAttributes[uid];
	                for (const key of Object.keys(objectsAttribute)) {
	                    if (key in customAttributeInfo) {
	                        const definition = customAttributeInfo[key].SourceDefinitions[0];
	                        attributes.push(new ModelObject_1.Attribute(uid, key, objectsAttribute[key], true, customAttributeInfo[key], objectsAttribute[definition.SourceAttribute], this.scene, key in changeableAttributes));
	                    }
	                    else {
	                        attributes.push(new ModelObject_1.Attribute(uid, key, objectsAttribute[key], false, null, null, this.scene, key in changeableAttributes));
	                    }
	                }
	            }
	            if (this.IncludeLinkedElements) {
	                links = (await getLinkedElements).ResultData.Links[model.Uid];
	            }
	            model.initBase(attributes, links);
	            models.push(model);
	        }
	        return models;
	    }
	    /**
	     * Get all Attributes that are currently selected
	     * @returns
	     */
	    async getSelectedObjects() {
	        const command = this.createCommand(Util_1.ApiCommands.GetSelectedObjects);
	        const getSelectedObjects = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        if (getSelectedObjects.ResultData.SelectedObjects.length == 0)
	            return [];
	        const oldCondition = this.Condition;
	        this.Condition = new String(getSelectedObjects.ResultData.SelectedObjects.map((x) => "Uid=" + x).join('&'))
	            .toString();
	        this.CombineMode = Util_1.CombineModes.Or;
	        const models = await this.getObjects();
	        this.Condition = oldCondition;
	        return models;
	    }
	    /**
	     * Select all objects hit by this FilterOperation
	     * @returns
	     */
	    async select() {
	        const command = this.createCommand(Util_1.ApiCommands.Select);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Clear the current selection
	     * @returns
	     */
	    async clearSelection() {
	        const command = this.createCommand(Util_1.ApiCommands.ClearSelection);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Fit all objects hit by this FilterOperation
	     * @returns
	     */
	    async fit() {
	        const command = this.createCommand(Util_1.ApiCommands.Fit);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * color all objects hit by this Fileroperation with the specified color
	     * @param color hex color
	     * @returns
	     */
	    async color(color) {
	        const command = this.createCommand(Util_1.ApiCommands.Color);
	        command.commandParameters = [color];
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Reset the color of all objects hit by this FilterOperation
	     * @returns
	     */
	    async clearColor() {
	        const command = this.createCommand(Util_1.ApiCommands.ClearColor);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * input the {@link Condition} into the search field inside UPV
	     * @returns
	     */
	    async searchFallback() {
	        const command = this.createCommand(Util_1.ApiCommands.SearchFallback);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	};
	FilterOperation.FilterOperation = FilterOperation$1;
	return FilterOperation;
}

var hasRequiredFilterOperation3D;

function requireFilterOperation3D () {
	if (hasRequiredFilterOperation3D) return FilterOperation3D;
	hasRequiredFilterOperation3D = 1;
	Object.defineProperty(FilterOperation3D, "__esModule", { value: true });
	FilterOperation3D.FilterOperation3d = void 0;
	const AttributeTree_1 = requireAttributeTree();
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const FilterOperation_1 = requireFilterOperation();
	const ClashContext_1 = requireClashContext();
	class FilterOperation3d extends FilterOperation_1.FilterOperation {
	    constructor(scene) {
	        super(scene);
	        /**
	         * Should objects returned by GetObjects include the boundingbox
	         */
	        this.IncludeBoundingBox = false;
	        /**
	         * Should objects returned by GetObjects include Colors
	         */
	        this.IncludeColors = false;
	        /**
	         * Should objects returned by GetObjects include SnapInfo
	         */
	        this.IncludeSnapInfo = false;
	    }
	    /**
	     * All objects based on the attributes specified in the FilterOperation
	     */
	    async getObjects() {
	        const command = this.createCommand(Util_1.ApiCommands.GetObjects);
	        let getObjectsBoundingBox;
	        let getObjectsColors;
	        let getObjectsSnapInfo;
	        if (this.IncludeBoundingBox) {
	            command.command = Util_1.ApiCommands.GetObjectsBoundingBox;
	            getObjectsBoundingBox = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        }
	        if (this.IncludeColors) {
	            command.command = Util_1.ApiCommands.GetObjectsColors;
	            getObjectsColors = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        }
	        if (this.IncludeSnapInfo) {
	            command.command = Util_1.ApiCommands.GetObjectsSnapInfo;
	            getObjectsSnapInfo = APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        }
	        const models = await this.getBaseObjects();
	        for (const model of models) {
	            let bounds;
	            let colors;
	            let snapInfo;
	            if (this.IncludeBoundingBox) {
	                bounds = (await getObjectsBoundingBox).ResultData.ObjectsBoundingBox[model.Uid];
	            }
	            if (this.IncludeColors) {
	                colors = (await getObjectsColors).ResultData.ObjectsColors[model.Uid];
	            }
	            if (this.IncludeSnapInfo) {
	                snapInfo = (await getObjectsSnapInfo).ResultData.ObjectsSnapInfo[model.Uid];
	            }
	            model.init3D(bounds, colors, snapInfo);
	        }
	        return models;
	    }
	    /**
	     * Highlights all Elements hit by FilterOperation
	     * @returns
	     */
	    async highlight() {
	        const command = this.createCommand(Util_1.ApiCommands.Highlight);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Clears any active hightlighting
	     * @returns
	     */
	    async clearHighlight() {
	        const command = this.createCommand(Util_1.ApiCommands.ClearHighlight);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Show only objects hit by the FilterOpration
	     * @returns
	     */
	    async showOnly() {
	        const command = this.createCommand(Util_1.ApiCommands.ShowOnly);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Set the Visibility of all objects hit by this Filteropration
	     * @param state new state (show/true, hide/false)
	     * @returns
	     */
	    async setVisibility(state) {
	        const command = this.createCommand(Util_1.ApiCommands.SetVisibility);
	        command.commandParameters.push(state ? "true" : "false");
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * activate a volumeClip Operation around objects hit by this Filteroperation
	     * @param radius
	     * @returns
	     */
	    async volumeClip(radius) {
	        const command = this.createCommand(Util_1.ApiCommands.VolumeClip);
	        command.commandParameters.push(radius.toString());
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    //TODO what is this again
	    async getTreeStructure() {
	        const command = this.createCommand(Util_1.ApiCommands.GetTreeStructure);
	        const result = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        const returnValue = {};
	        for (const key in result.ResultData.GetTreeStructure) {
	            if (Object.prototype.hasOwnProperty.call(result.ResultData.GetTreeStructure, key)) {
	                returnValue[key] = [];
	                const element = result.ResultData.GetTreeStructure[key];
	                element.forEach(element => {
	                    returnValue[key].push(new AttributeTree_1.AttributeTreeNode(element.Id, element.Name, element.Type));
	                });
	            }
	        }
	        return returnValue;
	    }
	    async startClashComputation(tolerance = 0.001, aspectsToIgnore = [], aspectsToInclude = [], mode = Util_1.ClashMode.WithinQueryOnly, includeSketches = false, computeCandidatesOnly = false, packageA, PackageB) {
	        const command = this.createCommand(Util_1.ApiCommands.StartClashComputation);
	        command.additionalParameters.StartClashComputation = {
	            Tolerance: tolerance,
	            AspectsToIgnore: aspectsToIgnore,
	            AspectsToInclude: aspectsToInclude,
	            Mode: mode,
	            IncludeSketches: includeSketches,
	            ComputeCandidatesOnly: computeCandidatesOnly,
	            PackageA: {
	                Package: packageA
	            },
	            PackageB: {
	                Package: PackageB
	            }
	        };
	        await APIConnector_1.Api.get().sendCommand(command);
	        return new ClashContext_1.ClashContext();
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
	        command.additionalParameters = {
	            ClippingFilter: this.ApiClippingDescriptor
	        };
	        if (this.APIPackageFilter != null) {
	            command.additionalParameters.PackageFilter = { Package: this.APIPackageFilter };
	        }
	        return command;
	    }
	}
	FilterOperation3D.FilterOperation3d = FilterOperation3d;
	return FilterOperation3D;
}

var FilterOperationPid = {};

var hasRequiredFilterOperationPid;

function requireFilterOperationPid () {
	if (hasRequiredFilterOperationPid) return FilterOperationPid;
	hasRequiredFilterOperationPid = 1;
	Object.defineProperty(FilterOperationPid, "__esModule", { value: true });
	FilterOperationPid.FilterOperationPid = void 0;
	const Util_1 = requireUtil();
	const FilterOperation_1 = requireFilterOperation();
	const APIConnector_1 = requireAPIConnector();
	/**
	 * Fileropration Special for IntelliPID
	 */
	let FilterOperationPid$1 = class FilterOperationPid extends FilterOperation_1.FilterOperation {
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
	};
	FilterOperationPid.FilterOperationPid = FilterOperationPid$1;
	return FilterOperationPid;
}

var Printer = {};

var hasRequiredPrinter;

function requirePrinter () {
	if (hasRequiredPrinter) return Printer;
	hasRequiredPrinter = 1;
	Object.defineProperty(Printer, "__esModule", { value: true });
	Printer.Printer = void 0;
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	let Printer$1 = class Printer {
	    constructor(printerId) {
	        this.printerId = printerId;
	    }
	    static async create() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterCreate);
	        return new Printer((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.PrinterId);
	    }
	    async delete() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterDelete);
	        command.commandParameters.push(this.printerId.toString());
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async getPdf() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterPrintToBase64);
	        command.commandParameters.push(this.printerId.toString());
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Pdf;
	    }
	    async addIntellipidPage(drawing, printMode) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PdfPrinterAddIntelliPidPage);
	        command.commandParameters.push(this.printerId.toString());
	        command.additionalParameters = {
	            AddPidToPdfPrinter: {
	                DrawingPath: drawing.Identifier,
	                PrintMode: printMode
	            }
	        };
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	};
	Printer.Printer = Printer$1;
	return Printer;
}

var LocalStorage = {};

var hasRequiredLocalStorage;

function requireLocalStorage () {
	if (hasRequiredLocalStorage) return LocalStorage;
	hasRequiredLocalStorage = 1;
	Object.defineProperty(LocalStorage, "__esModule", { value: true });
	LocalStorage.LocalStorage = void 0;
	const Application_1 = requireApplication();
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	let LocalStorage$1 = class LocalStorage {
	    /**
	     * Store a key in the local storage, only A-z and 0-9 and _ are supported key names
	     * @param key
	     * @param value
	     * @param persist persist accross restart of UPV. Will be forced false on BBV
	     * @returns
	     */
	    async setStorageVariable(key, value, persist = false) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetStorageVariable);
	        command.commandParameters.push(key);
	        command.commandParameters.push(value);
	        command.commandParameters.push(persist.toString());
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	    /**
	     * Retrieve a storage variable
	     * @param key
	     * @returns
	     */
	    async getStorageVariable(key) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetStorageVariable);
	        command.commandParameters.push(key);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Value;
	    }
	    /**
	     *
	     * @param key Delete a storage variable
	     * @returns
	     */
	    async deleteStorageVariable(key) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteStorageVariable);
	        command.commandParameters.push(key);
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	    /**
	     * List all the storage variables known to UPV
	     * @returns
	     */
	    async listStorageVariables() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetStorageVariablesList);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * Register a callback whenever a variable has changed
	     * @param callback
	     * @returns
	     */
	    async registerStorageVariableChangedEvent(callback) {
	        const id = await Application_1.Application.getInstance().Events.registerStorageVariableChangedEvent((event) => {
	            callback(event);
	        });
	        return id;
	    }
	};
	LocalStorage.LocalStorage = LocalStorage$1;
	return LocalStorage;
}

var AuthenticationManager = {};

var hasRequiredAuthenticationManager;

function requireAuthenticationManager () {
	if (hasRequiredAuthenticationManager) return AuthenticationManager;
	hasRequiredAuthenticationManager = 1;
	Object.defineProperty(AuthenticationManager, "__esModule", { value: true });
	AuthenticationManager.AuthenticationContext = AuthenticationManager.AuthenticationManager = void 0;
	const CaxApiCommand_1 = requireCaxApiCommand();
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const Application_1 = requireApplication();
	let AuthenticationManager$1 = class AuthenticationManager {
	    async openAuthenticationContext(oidcConfig, OidcConfigBrowserBasedViewing) {
	        const command = this.createCommand(Util_1.ApiCommands.OpenAuthenticationContext);
	        command.additionalParameters = {
	            OpenAuthenticationContext: {
	                OidcConfig: oidcConfig,
	                OidcConfigBrowserBasedViewing: OidcConfigBrowserBasedViewing
	            }
	        };
	        return new AuthenticationContext((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.AuthenticationContextId);
	    }
	    /**
	     * @internal
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        return command;
	    }
	};
	AuthenticationManager.AuthenticationManager = AuthenticationManager$1;
	class AuthenticationContext {
	    /**
	     * @internal
	     * @param _id
	     */
	    constructor(_id) {
	        this._id = _id;
	        this.ids = [];
	    }
	    /**
	     * Retrieve new access and identity tokens before the old ones expire via a callback
	     * @param callback
	     */
	    async registerContextChangedEvent(callback) {
	        const id = await Application_1.Application.getInstance().Events.registerAuthenticationContextChangedEvent((event) => {
	            if (event.AuthenticationContextId == this._id) {
	                callback(event);
	            }
	        });
	        this.ids.push(id);
	    }
	    /**
	     * Will try to perform a logout against the IDP. Needs to be called before closeAuthenticationContext
	     * @returns
	     */
	    async startLogoutProcess() {
	        const command = this.createCommand(Util_1.ApiCommands.StartLogoutAuthenticationContext);
	        command.commandParameters.push(this._id.toString());
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	    /**
	     * Closes the authentication loop on UPV side for this Context
	     * @returns
	     */
	    async closeAuthenticationContext() {
	        for (const id of this.ids) {
	            await Application_1.Application.getInstance().Events.removeEvent(id);
	        }
	        const command = this.createCommand(Util_1.ApiCommands.CloseAuthenticationContext);
	        command.commandParameters.push(this._id.toString());
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	    /**
	     * @internal
	     * @param apiCommands
	     * @returns
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        return command;
	    }
	}
	AuthenticationManager.AuthenticationContext = AuthenticationContext;
	return AuthenticationManager;
}

var Settings = {};

var hasRequiredSettings;

function requireSettings () {
	if (hasRequiredSettings) return Settings;
	hasRequiredSettings = 1;
	Object.defineProperty(Settings, "__esModule", { value: true });
	Settings.Settings = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Enums_1 = requireEnums();
	const GetSet_1 = requireGetSet();
	const CaxApiCommand_1 = requireCaxApiCommand();
	let Settings$1 = class Settings {
	    constructor() {
	        this.UiColors = new GetSet_1.Get(async () => {
	            const command = this.createCommand(Enums_1.ApiCommands.GetUiColors);
	            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.UiColors;
	        });
	        this.CurrentUiTheme = new GetSet_1.GetSet(async () => {
	            return (await this.getAvailableUiThemes()).CurrentId;
	        }, async (theme) => {
	            const command = this.createCommand(Enums_1.ApiCommands.SetActiveUiTheme);
	            command.commandParameters.push(theme);
	            await APIConnector_1.Api.get().sendCommand(command);
	        });
	        this.AvailableUiThemes = new GetSet_1.Get(async () => {
	            const themes = (await this.getAvailableUiThemes()).UiThemes;
	            return Object.keys(themes).map(x => { return { id: x, description: themes[x] }; });
	        });
	    }
	    async getAvailableUiThemes() {
	        const command = this.createCommand(Enums_1.ApiCommands.GetUiThemes);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * @internal
	     * @param apiCommands
	     * @returns
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        return command;
	    }
	};
	Settings.Settings = Settings$1;
	return Settings;
}

var FileOperations = {};

var hasRequiredFileOperations;

function requireFileOperations () {
	if (hasRequiredFileOperations) return FileOperations;
	hasRequiredFileOperations = 1;
	Object.defineProperty(FileOperations, "__esModule", { value: true });
	FileOperations.FileOperations = void 0;
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	let FileOperations$1 = class FileOperations {
	    /**
	     * Opens a open file dialog and returns the data if the user selected a file
	     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
	     * @param defaultName the default name in the dialog
	     * @returns
	     */
	    async loadFileDialog(extensions = "", defaultName = "") {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadFileDialog);
	        command.additionalParameters = {
	            LoadFileDialog: {
	                DefaultName: defaultName,
	                Extensions: extensions
	            }
	        };
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * Opens a file save dialog and saves the file to disk
	     * @param dataAsBase64 data to save
	     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
	     * @param defaultName the default name in the dialog
	     * @returns
	     */
	    async saveFileDialog(dataAsBase64, extensions, defaultName = "") {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SaveFileDialog);
	        command.additionalParameters = {
	            SaveFileDialog: {
	                DataBase64: dataAsBase64,
	                DefaultName: defaultName,
	                Extensions: extensions
	            }
	        };
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * Load a file from the model folder. Some files are not allowed to be retrieved
	     * @param file file to load
	     * @returns
	     */
	    async loadFileFromModelFolder(file) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GenericLoadFromFile);
	        command.commandParameters.push(file);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	};
	FileOperations.FileOperations = FileOperations$1;
	return FileOperations;
}

var Pdf = {};

var hasRequiredPdf;

function requirePdf () {
	if (hasRequiredPdf) return Pdf;
	hasRequiredPdf = 1;
	Object.defineProperty(Pdf, "__esModule", { value: true });
	Pdf.Pdf = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	let Pdf$1 = class Pdf {
	    constructor(Info, model) {
	        this.Info = Info;
	        this.model = model;
	        this.IsOpen = Info.IsOpen;
	        this.IsFocused = Info.IsFocused;
	    }
	    /**
	     * Open the PdfDrawing
	     * @returns
	     */
	    async openPdf() {
	        const command = this.createCommand(Util_1.ApiCommands.OpenPdf);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Open the PdfDrawing
	     * @returns
	     */
	    async closePdf() {
	        const command = this.createCommand(Util_1.ApiCommands.ClosePdf);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * @internal
	     * @param apiCommands
	     * @returns
	     */
	    createCommand(apiCommands) {
	        const command = this.model.createCommand(apiCommands);
	        command.additionalParameters.PdfDocument = {
	            DisplayName: this.Info.Document.DisplayName,
	            Path: this.Info.Document.Path,
	            PdfType: this.Info.Document.PdfType,
	            PhysicalFileName: this.Info.Document.PhysicalFileName
	        };
	        return command;
	    }
	};
	Pdf.Pdf = Pdf$1;
	return Pdf;
}

var hasRequiredObjects;

function requireObjects () {
	if (hasRequiredObjects) return Objects;
	hasRequiredObjects = 1;
	(function (exports) {
		var __createBinding = (Objects && Objects.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (Objects && Objects.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireCamera(), exports);
		__exportStar(requireLayer2D(), exports);
		__exportStar(requireLayer3D(), exports);
		__exportStar(requireModel(), exports);
		__exportStar(requireIntelliPidDrawing(), exports);
		__exportStar(requireEvents(), exports);
		__exportStar(requireProjectionSphereElement(), exports);
		__exportStar(requireClashContext(), exports);
		__exportStar(requireFilterOperation3D(), exports);
		__exportStar(requireFilterOperationPid(), exports);
		__exportStar(requireModelObject(), exports);
		__exportStar(requirePrinter(), exports);
		__exportStar(requireLocalStorage(), exports);
		__exportStar(requireAttributeTree(), exports);
		__exportStar(requireAuthenticationManager(), exports);
		__exportStar(requireEvents(), exports);
		__exportStar(requireModel(), exports);
		__exportStar(requireSettings(), exports);
		__exportStar(requireFileOperations(), exports);
		__exportStar(requirePdf(), exports); 
	} (Objects));
	return Objects;
}

var Scenes = {};

var Scene = {};

var hasRequiredScene;

function requireScene () {
	if (hasRequiredScene) return Scene;
	hasRequiredScene = 1;
	Object.defineProperty(Scene, "__esModule", { value: true });
	Scene.Scene = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const CaxApiCommand_1 = requireCaxApiCommand();
	/**
	 * Basesclass of all Scenes
	 */
	let Scene$1 = class Scene {
	    constructor(Id) {
	        this.Id = Id;
	        /**
	         * Describes what type a scene is
	         */
	        this.SceneType = Util_1.SceneType.Undefined;
	    }
	    /**
	     * Load a colorfile via a file
	     * @param file path to excel colorfile
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async loadColorFile(file) {
	        const command = this.createCommand(Util_1.ApiCommands.LoadColorFile);
	        command.commandParameters.push(file);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Load a linkfile via a file
	     * @param file path to excel linkfile
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async loadLinkFile(file) {
	        const command = this.createCommand(Util_1.ApiCommands.LoadLinkFile);
	        command.commandParameters.push(file);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Clears all Links
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async clearLinks() {
	        const command = this.createCommand(Util_1.ApiCommands.ClearLinks);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
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
	    async takeScreenshot(width, height, fieldOfView = 90, hideUi = true, enableAntiAliasing = true, enableTransparentBackground = false, modelInBestQuality = false, format = "png") {
	        const command = this.createCommand(Util_1.ApiCommands.TakeScreenshot);
	        command.commandParameters.push(width.toString());
	        command.commandParameters.push(height.toString());
	        command.commandParameters.push(fieldOfView.toString());
	        command.commandParameters.push(format.toString());
	        command.commandParameters.push(hideUi.toString());
	        command.commandParameters.push(enableAntiAliasing.toString());
	        command.commandParameters.push(enableTransparentBackground.toString());
	        command.commandParameters.push(modelInBestQuality.toString());
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.TakeScreenshot;
	    }
	    /**
	     * @internal
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        command.target = this.Id;
	        return command;
	    }
	};
	Scene.Scene = Scene$1;
	return Scene;
}

var Scene3d = {};

var hasRequiredScene3d;

function requireScene3d () {
	if (hasRequiredScene3d) return Scene3d;
	hasRequiredScene3d = 1;
	Object.defineProperty(Scene3d, "__esModule", { value: true });
	Scene3d.Scene3d = void 0;
	const Objects_1 = requireObjects();
	const Scene_1 = requireScene();
	const Util_1 = requireUtil();
	const APIConnector_1 = requireAPIConnector();
	/**
	 * 3D Scene
	 */
	let Scene3d$1 = class Scene3d extends Scene_1.Scene {
	    constructor(id) {
	        super(id);
	        this.DefaultFilter = new Objects_1.FilterOperation3d(this);
	        this.Camera = new Objects_1.Camera(this);
	        this.UiClippingDescriptor = new Util_1.GetSet(async () => {
	            const command = this.createCommand(Util_1.ApiCommands.GetClippingInfo);
	            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	                .Clipping;
	        }, async (value) => {
	            if (value.Mode === Util_1.ClippingMode.None) {
	                await APIConnector_1.Api.get().sendCommand(this.createCommand(Util_1.ApiCommands.ClearClipping));
	            }
	            else if (value.Mode === Util_1.ClippingMode.Intelli) {
	                await this.intelliClip(value.IntelliClipping.Elements.map((x) => { return 'Uid=' + x; }).join("&"), value.IntelliClipping.Offset, Util_1.CombineModes.Or);
	            }
	            else if (value.Mode === Util_1.ClippingMode.Volume) {
	                await this.volumeClipByCoordinates(value.VolumeClipping.Bounds.Min, value.VolumeClipping.Bounds.Max);
	            }
	        });
	        this.TreeConfiguration = new Util_1.GetSet(async () => {
	            const command = this.createCommand(Util_1.ApiCommands.GetTreeConfiguration);
	            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	                .TreeConfiguration;
	        }, async (value) => {
	            const command = this.createCommand(Util_1.ApiCommands.SetTreeConfiguration);
	            command.commandParameters = value;
	            await APIConnector_1.Api.get().sendCommand(command);
	        });
	        this.VisibleAspects = new Util_1.GetSet(async () => {
	            const command = this.createCommand(Util_1.ApiCommands.GetVisibleAspects);
	            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	                .VisibleAspects;
	        }, async (value) => {
	            const command = this.createCommand(Util_1.ApiCommands.SetVisibleAspects);
	            command.commandParameters = value;
	            await APIConnector_1.Api.get().sendCommand(command);
	        });
	    }
	    /**
	     * Create a new Filteropration
	     * @returns FilterOperation3d
	     */
	    getNewFilter() {
	        return new Objects_1.FilterOperation3d(this);
	    }
	    async intelliClip(condition, radius, combineModes = Util_1.CombineModes.And) {
	        const command = this.createCommand(Util_1.ApiCommands.IntelliClip);
	        command.condition = condition;
	        command.commandParameters.push(radius.toString());
	        command.conditionCombineMode = combineModes;
	        return APIConnector_1.Api.get().sendCommand(command);
	    }
	    async volumeClipByCoordinates(min, max) {
	        const command = this.createCommand(Util_1.ApiCommands.VolumeClipByCoordinates);
	        command.commandParameters.push(min.X.toString());
	        command.commandParameters.push(min.Y.toString());
	        command.commandParameters.push(min.Z.toString());
	        command.commandParameters.push(max.X.toString());
	        command.commandParameters.push(max.Y.toString());
	        command.commandParameters.push(max.Z.toString());
	        return APIConnector_1.Api.get().sendCommand(command);
	    }
	};
	Scene3d.Scene3d = Scene3d$1;
	return Scene3d;
}

var ScenePid = {};

var hasRequiredScenePid;

function requireScenePid () {
	if (hasRequiredScenePid) return ScenePid;
	hasRequiredScenePid = 1;
	Object.defineProperty(ScenePid, "__esModule", { value: true });
	ScenePid.ScenePid = void 0;
	const Scene_1 = requireScene();
	const Objects_1 = requireObjects();
	/**
	 * 2D Scene
	 */
	let ScenePid$1 = class ScenePid extends Scene_1.Scene {
	    constructor(id) {
	        super(id);
	        this.DefaultFilter = new Objects_1.FilterOperationPid(this);
	    }
	    /**
	     * Create a new Filteropration
	     * @returns FilterOperationPid
	     */
	    getNewFilter() {
	        return new Objects_1.FilterOperationPid(this);
	    }
	};
	ScenePid.ScenePid = ScenePid$1;
	return ScenePid;
}

var AppControlScene = {};

var hasRequiredAppControlScene;

function requireAppControlScene () {
	if (hasRequiredAppControlScene) return AppControlScene;
	hasRequiredAppControlScene = 1;
	Object.defineProperty(AppControlScene, "__esModule", { value: true });
	AppControlScene.AppControlScene = void 0;
	const Scene_1 = requireScene();
	/**
	 * Provides control over a AppControl Scene
	 * @alpha
	 */
	let AppControlScene$1 = class AppControlScene extends Scene_1.Scene {
	    /**
	     * @internal
	     * @param id
	     */
	    constructor(id) {
	        super(id);
	    }
	};
	AppControlScene.AppControlScene = AppControlScene$1;
	return AppControlScene;
}

var hasRequiredScenes;

function requireScenes () {
	if (hasRequiredScenes) return Scenes;
	hasRequiredScenes = 1;
	(function (exports) {
		var __createBinding = (Scenes && Scenes.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (Scenes && Scenes.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireScene(), exports);
		__exportStar(requireScene3d(), exports);
		__exportStar(requireScenePid(), exports);
		__exportStar(requireAppControlScene(), exports); 
	} (Scenes));
	return Scenes;
}

var FilesTree = {};

var FileTreeElement = {};

var hasRequiredFileTreeElement;

function requireFileTreeElement () {
	if (hasRequiredFileTreeElement) return FileTreeElement;
	hasRequiredFileTreeElement = 1;
	Object.defineProperty(FileTreeElement, "__esModule", { value: true });
	FileTreeElement.FileTreeElement = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Util_1 = requireUtil();
	const CaxApiCommand_1 = requireCaxApiCommand();
	let FileTreeElement$1 = class FileTreeElement {
	    /**
	     * get the id of the File Tree Element
	     */
	    get Id() {
	        return this._id;
	    }
	    /**
	     * get the name of the File Tree Element
	     */
	    get Name() {
	        return this._name;
	    }
	    /**
	     * get the type of the File Tree Element
	     */
	    get Type() {
	        return this._type;
	    }
	    /**
	     * @internal
	     * @param _id
	     * @param _name
	     * @param _type
	     */
	    constructor(_id, _name, _type) {
	        this._id = _id;
	        this._name = _name;
	        this._type = _type;
	        this.State = new Util_1.GetSet(async () => {
	            const command = this.createCommand(Util_1.ApiCommands.FilesTreeGetState);
	            const response = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	            const result = new Util_1.FileTreeState();
	            result.Name = response.Name;
	            result.Expanded = response.Expanded;
	            result.Exportable = response.Exportable;
	            result.HasChanges = response.HasChanges;
	            result.Loading = response.Loading;
	            result.Locked = response.Locked;
	            result.Selected = response.Selected;
	            return result;
	        }, async (value) => {
	            const command = this.createCommand(Util_1.ApiCommands.FilesTreeSetState);
	            command.additionalParameters = {
	                FilesTreeSetState: value
	            };
	            await APIConnector_1.Api.get().sendCommand(command);
	        });
	    }
	    /**
	     * Delete File tree element
	     */
	    async delete() {
	        const command = this.createCommand(Util_1.ApiCommands.FilesTreeDeleteObject);
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * @experimental
	     * This functions exposes the internal datastructure. THis is only intended for special usecases
	     * No documentation is available/will be made available for these internal structures
	     * Data structure changes can occour within new versions that will break old behavior
	     * @returns
	     */
	    async getContent() {
	        const command = this.createCommand(Util_1.ApiCommands.FilesTreeGetContainer);
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * This functions returns a base64 UPVF file of the element and its sub elements.
	     * Can be loaded again using FileTreeManager.loadUPVF
	     * @returns
	     */
	    async getUPVF(forceExport, featureTypeFilters, fileTreeElement = []) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeContent);
	        command.additionalParameters = {
	            GetFilesTreeContent: {
	                RootNode: this.Id,
	                FeatureTypeFilter: featureTypeFilters,
	                ForceExport: forceExport,
	                IncludedNodes: fileTreeElement.map(x => x.Id)
	            }
	        };
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.FilesTreeContent;
	    }
	    /**
	     * Closes the Filetree item if it is open (Both edit and show if applicable). If element doesnt support closing an exception is thrown
	     */
	    async closeItem() {
	        const command = this.createCommand(Util_1.ApiCommands.FilesTreeClose);
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Starts editing the Filetree item. If element doesnt support closing an exception is thrown
	     * @param noUi should the ui be hide. Not all elements might listen to this option
	     */
	    async editItem(noUi = false) {
	        const command = this.createCommand(Util_1.ApiCommands.FilesTreeEdit);
	        command.commandParameters.push(noUi + "");
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Shows the Filetree item. If element doesnt support showing an exception is thrown
	     */
	    async showItem() {
	        const command = this.createCommand(Util_1.ApiCommands.FilesTreeShow);
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Views the Filetree item. If element doesnt support viewing an exception is thrown
	     */
	    async viewItem() {
	        const command = this.createCommand(Util_1.ApiCommands.FilesTreeView);
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * @internal
	     */
	    createCommand(apiCommands) {
	        const command = new CaxApiCommand_1.CaxApiCommand(apiCommands);
	        command.commandParameters.push(this.Id.toString());
	        return command;
	    }
	};
	FileTreeElement.FileTreeElement = FileTreeElement$1;
	return FileTreeElement;
}

var FileTreeAnimation = {};

var hasRequiredFileTreeAnimation;

function requireFileTreeAnimation () {
	if (hasRequiredFileTreeAnimation) return FileTreeAnimation;
	hasRequiredFileTreeAnimation = 1;
	Object.defineProperty(FileTreeAnimation, "__esModule", { value: true });
	FileTreeAnimation.FileTreeAnimation = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeAnimation$1 = class FileTreeAnimation extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeAnimation.FileTreeAnimation = FileTreeAnimation$1;
	return FileTreeAnimation;
}

var FileTreeAppControl = {};

var hasRequiredFileTreeAppControl;

function requireFileTreeAppControl () {
	if (hasRequiredFileTreeAppControl) return FileTreeAppControl;
	hasRequiredFileTreeAppControl = 1;
	Object.defineProperty(FileTreeAppControl, "__esModule", { value: true });
	FileTreeAppControl.FileTreeAppControl = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeAppControl$1 = class FileTreeAppControl extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeAppControl.FileTreeAppControl = FileTreeAppControl$1;
	return FileTreeAppControl;
}

var FileTreeComment = {};

var hasRequiredFileTreeComment;

function requireFileTreeComment () {
	if (hasRequiredFileTreeComment) return FileTreeComment;
	hasRequiredFileTreeComment = 1;
	Object.defineProperty(FileTreeComment, "__esModule", { value: true });
	FileTreeComment.FileTreeComment = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeComment$1 = class FileTreeComment extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeComment.FileTreeComment = FileTreeComment$1;
	return FileTreeComment;
}

var FileTreeCommentSVG = {};

var hasRequiredFileTreeCommentSVG;

function requireFileTreeCommentSVG () {
	if (hasRequiredFileTreeCommentSVG) return FileTreeCommentSVG;
	hasRequiredFileTreeCommentSVG = 1;
	Object.defineProperty(FileTreeCommentSVG, "__esModule", { value: true });
	FileTreeCommentSVG.FileTreeCommentSVG = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeCommentSVG$1 = class FileTreeCommentSVG extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeCommentSVG.FileTreeCommentSVG = FileTreeCommentSVG$1;
	return FileTreeCommentSVG;
}

var FileTreeFolder = {};

var hasRequiredFileTreeFolder;

function requireFileTreeFolder () {
	if (hasRequiredFileTreeFolder) return FileTreeFolder;
	hasRequiredFileTreeFolder = 1;
	Object.defineProperty(FileTreeFolder, "__esModule", { value: true });
	FileTreeFolder.FileTreeFolder = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeFolder$1 = class FileTreeFolder extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeFolder.FileTreeFolder = FileTreeFolder$1;
	return FileTreeFolder;
}

var FileTreeMarkup = {};

var hasRequiredFileTreeMarkup;

function requireFileTreeMarkup () {
	if (hasRequiredFileTreeMarkup) return FileTreeMarkup;
	hasRequiredFileTreeMarkup = 1;
	Object.defineProperty(FileTreeMarkup, "__esModule", { value: true });
	FileTreeMarkup.FileTreeMarkup = void 0;
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	const FileTreeElement_1 = requireFileTreeElement();
	const APIConnector_1 = requireAPIConnector();
	let FileTreeMarkup$1 = class FileTreeMarkup extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	    /**
	     * Only can be excuted if the Markup is open
	     * @param mode
	     * @param size
	     * @param color
	     */
	    async setMarkupTool(mode, size, color) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetMarkupTool);
	        command.additionalParameters = {
	            SetMarkupTool: {
	                Mode: mode,
	                Size: size,
	                MarkupColor: color
	            }
	        };
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Only works for IntelliPid Markups. Markup needs to be closed first for it to work currently
	     * @returns Returns all hit elements that are fully drawn over
	     */
	    async getIntelliPidElementsHitByMarkup() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetIntelliPidElementsHitByMarkup);
	        command.commandParameters.push(this.Id.toString());
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	};
	FileTreeMarkup.FileTreeMarkup = FileTreeMarkup$1;
	return FileTreeMarkup;
}

var FileTreeModel = {};

var hasRequiredFileTreeModel;

function requireFileTreeModel () {
	if (hasRequiredFileTreeModel) return FileTreeModel;
	hasRequiredFileTreeModel = 1;
	Object.defineProperty(FileTreeModel, "__esModule", { value: true });
	FileTreeModel.FileTreeModel = void 0;
	const FileTreeFolder_1 = requireFileTreeFolder();
	let FileTreeModel$1 = class FileTreeModel extends FileTreeFolder_1.FileTreeFolder {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeModel.FileTreeModel = FileTreeModel$1;
	return FileTreeModel;
}

var FileTreePackage = {};

var hasRequiredFileTreePackage;

function requireFileTreePackage () {
	if (hasRequiredFileTreePackage) return FileTreePackage;
	hasRequiredFileTreePackage = 1;
	Object.defineProperty(FileTreePackage, "__esModule", { value: true });
	FileTreePackage.FileTreePackage = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreePackage$1 = class FileTreePackage extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreePackage.FileTreePackage = FileTreePackage$1;
	return FileTreePackage;
}

var FileTreePhoto = {};

var hasRequiredFileTreePhoto;

function requireFileTreePhoto () {
	if (hasRequiredFileTreePhoto) return FileTreePhoto;
	hasRequiredFileTreePhoto = 1;
	Object.defineProperty(FileTreePhoto, "__esModule", { value: true });
	FileTreePhoto.FileTreePhoto = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreePhoto$1 = class FileTreePhoto extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreePhoto.FileTreePhoto = FileTreePhoto$1;
	return FileTreePhoto;
}

var FileTreePIDSketch = {};

var hasRequiredFileTreePIDSketch;

function requireFileTreePIDSketch () {
	if (hasRequiredFileTreePIDSketch) return FileTreePIDSketch;
	hasRequiredFileTreePIDSketch = 1;
	Object.defineProperty(FileTreePIDSketch, "__esModule", { value: true });
	FileTreePIDSketch.FileTreePIDSketch = void 0;
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreePIDSketch$1 = class FileTreePIDSketch extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	        this.SketchColor = new Util_1.Set(async (newColor) => {
	            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetPidSketchTool);
	            command.additionalParameters = {
	                SetPidSketchTool: {
	                    Mode: Util_1.PidSketchToolMode.None,
	                    SketchColor: newColor
	                }
	            };
	            await APIConnector_1.Api.get().sendCommand(command);
	        });
	    }
	    /**
	     * Select a symbol from the catalog for placment
	     * @param symbol
	     * @returns
	     */
	    async selectSymbolForPlacement(symbol) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SelectSymbolForPlacement);
	        command.commandParameters.push(symbol.Path);
	        command.target = Util_1.TargetEnum.Intelli;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * Select a primitive for placment
	     * @param symbol
	     */
	    async selectPrimitiveForPlacement(symbol) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetPidSketchTool);
	        command.additionalParameters = {
	            SetPidSketchTool: {
	                Mode: symbol,
	                SketchColor: null
	            }
	        };
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    async placeSymbol(symbol, name, position, rotation, attributes = {}) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlaceSymbol);
	        command.additionalParameters = {
	            PlaceSymbol: {
	                Path: symbol.Path,
	                Variant: symbol.Variant,
	                Name: name,
	                Position: new Util_1.Vector3D(position.X, position.Y, 0),
	                Rotation: new Util_1.Vector3D(rotation, 0, 0),
	                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
	            }
	        };
	        command.target = Util_1.TargetEnum.Intelli;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    /**
	     * Retrieve the Symbols in the catalog
	     * @returns
	     */
	    async getCatalogSymbols() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetCatalogSymbols);
	        command.target = Util_1.TargetEnum.Intelli;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async deleteSketchItem(uid) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteSketchItem);
	        command.commandParameters.push(uid);
	        command.target = Util_1.TargetEnum.Intelli;
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	};
	FileTreePIDSketch.FileTreePIDSketch = FileTreePIDSketch$1;
	return FileTreePIDSketch;
}

var FileTreePointOfInterest = {};

var hasRequiredFileTreePointOfInterest;

function requireFileTreePointOfInterest () {
	if (hasRequiredFileTreePointOfInterest) return FileTreePointOfInterest;
	hasRequiredFileTreePointOfInterest = 1;
	Object.defineProperty(FileTreePointOfInterest, "__esModule", { value: true });
	FileTreePointOfInterest.FileTreePointOfInterest = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreePointOfInterest$1 = class FileTreePointOfInterest extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreePointOfInterest.FileTreePointOfInterest = FileTreePointOfInterest$1;
	return FileTreePointOfInterest;
}

var FileTreeReport = {};

var hasRequiredFileTreeReport;

function requireFileTreeReport () {
	if (hasRequiredFileTreeReport) return FileTreeReport;
	hasRequiredFileTreeReport = 1;
	Object.defineProperty(FileTreeReport, "__esModule", { value: true });
	FileTreeReport.FileTreeReport = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeReport$1 = class FileTreeReport extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeReport.FileTreeReport = FileTreeReport$1;
	return FileTreeReport;
}

var FileTreeScreenshot = {};

var hasRequiredFileTreeScreenshot;

function requireFileTreeScreenshot () {
	if (hasRequiredFileTreeScreenshot) return FileTreeScreenshot;
	hasRequiredFileTreeScreenshot = 1;
	Object.defineProperty(FileTreeScreenshot, "__esModule", { value: true });
	FileTreeScreenshot.FileTreeScreenshot = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeScreenshot$1 = class FileTreeScreenshot extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeScreenshot.FileTreeScreenshot = FileTreeScreenshot$1;
	return FileTreeScreenshot;
}

var FileTreeSketch = {};

var hasRequiredFileTreeSketch;

function requireFileTreeSketch () {
	if (hasRequiredFileTreeSketch) return FileTreeSketch;
	hasRequiredFileTreeSketch = 1;
	Object.defineProperty(FileTreeSketch, "__esModule", { value: true });
	FileTreeSketch.FileTreeSketch = void 0;
	const APIConnector_1 = requireAPIConnector();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const Util_1 = requireUtil();
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeSketch$1 = class FileTreeSketch extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	    async selectSymbolForPlacement(symbol) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SelectSymbolForPlacement);
	        command.commandParameters.push(symbol.Path);
	        command.commandParameters.push(symbol.Variant);
	        command.target = Util_1.TargetEnum.ThreeD;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async placeSymbol(symbol, name, position, rotation, attributes = {}) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlaceSymbol);
	        command.additionalParameters = {
	            PlaceSymbol: {
	                Path: symbol.Path,
	                Variant: symbol.Variant,
	                Name: name,
	                Position: position,
	                Rotation: rotation,
	                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
	            }
	        };
	        command.target = Util_1.TargetEnum.ThreeD;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async placePrimitive(type, name, position, rotation, attributes = {}, parameters = {}) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlacePrimitive);
	        command.additionalParameters = {
	            PlacePrimitive: {
	                Type: type,
	                Name: name,
	                Position: position,
	                Rotation: rotation,
	                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
	                Parameters: Object.keys(parameters).map(x => { return { Key: x, Value: parameters[x] }; }),
	            }
	        };
	        command.target = Util_1.TargetEnum.ThreeD;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async getCatalogSymbols() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetCatalogSymbols);
	        command.target = Util_1.TargetEnum.ThreeD;
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData;
	    }
	    async deleteSketchItem(uid) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeleteSketchItem);
	        command.commandParameters.push(uid);
	        command.target = Util_1.TargetEnum.ThreeD;
	        return (await APIConnector_1.Api.get().sendCommand(command));
	    }
	};
	FileTreeSketch.FileTreeSketch = FileTreeSketch$1;
	return FileTreeSketch;
}

var FileTreeTwoDToThreeD = {};

var hasRequiredFileTreeTwoDToThreeD;

function requireFileTreeTwoDToThreeD () {
	if (hasRequiredFileTreeTwoDToThreeD) return FileTreeTwoDToThreeD;
	hasRequiredFileTreeTwoDToThreeD = 1;
	Object.defineProperty(FileTreeTwoDToThreeD, "__esModule", { value: true });
	FileTreeTwoDToThreeD.FileTreeTwoDToThreeD = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeTwoDToThreeD$1 = class FileTreeTwoDToThreeD extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeTwoDToThreeD.FileTreeTwoDToThreeD = FileTreeTwoDToThreeD$1;
	return FileTreeTwoDToThreeD;
}

var FileTreeView = {};

var hasRequiredFileTreeView;

function requireFileTreeView () {
	if (hasRequiredFileTreeView) return FileTreeView;
	hasRequiredFileTreeView = 1;
	Object.defineProperty(FileTreeView, "__esModule", { value: true });
	FileTreeView.FileTreeView = void 0;
	const FileTreeElement_1 = requireFileTreeElement();
	let FileTreeView$1 = class FileTreeView extends FileTreeElement_1.FileTreeElement {
	    constructor(id, name, type) {
	        super(id, name, type);
	    }
	};
	FileTreeView.FileTreeView = FileTreeView$1;
	return FileTreeView;
}

var FileTreeManager = {};

var hasRequiredFileTreeManager;

function requireFileTreeManager () {
	if (hasRequiredFileTreeManager) return FileTreeManager;
	hasRequiredFileTreeManager = 1;
	Object.defineProperty(FileTreeManager, "__esModule", { value: true });
	FileTreeManager.FileTreeManager = FileTreeManager.FileTreeManagerLegacy = void 0;
	const Util_1 = requireUtil();
	const FileTreePointOfInterest_1 = requireFileTreePointOfInterest();
	const FileTreePackage_1 = requireFileTreePackage();
	const FileTreeTwoDToThreeD_1 = requireFileTreeTwoDToThreeD();
	const FileTreePhoto_1 = requireFileTreePhoto();
	const FileTreeSketch_1 = requireFileTreeSketch();
	const FileTreeScreenshot_1 = requireFileTreeScreenshot();
	const FileTreeModel_1 = requireFileTreeModel();
	const FileTreeFolder_1 = requireFileTreeFolder();
	const FileTreeComment_1 = requireFileTreeComment();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const FileTreeView_1 = requireFileTreeView();
	const FileTreeAppControl_1 = requireFileTreeAppControl();
	const APIConnector_1 = requireAPIConnector();
	const FileTreeAnimation_1 = requireFileTreeAnimation();
	const FileTreeMarkup_1 = requireFileTreeMarkup();
	const FileTreePIDSketch_1 = requireFileTreePIDSketch();
	const FileTreeReport_1 = requireFileTreeReport();
	const FileTreeCommentSVG_1 = requireFileTreeCommentSVG();
	/**
	 * @legacy
	 * Contains the file variants and old functions. These might be made unavailable in future versions and replaced by new commands or has been already replaced
	 * */
	class FileTreeManagerLegacy {
	    constructor(manager) {
	        this.manager = manager;
	    }
	    /**
	         * might be removed in future from wrapper
	         * @legacy
	         * @param path
	         * @returns
	         */
	    async loadSketch(path, viewName) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadSketch);
	        command.commandParameters.push(path);
	        if (viewName != null)
	            command.commandParameters.push(viewName);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * might be removed in future from wrapper
	     * @legacy
	     * @param path
	     * @returns
	     */
	    async loadPackageFile(path, replace) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadPackageFile);
	        command.commandParameters.push(path);
	        if (replace != null)
	            command.commandParameters.push(replace.toString());
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * might be removed in future from wrapper
	     * @legacy
	     * @param path
	     * @returns
	     */
	    async exportPackageFile(path) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ExportPackageFile);
	        command.commandParameters.push(path);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * @legacy might be removed in future from wrapper and replaced with a new function
	     */
	    async loadFile(path) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadFile);
	        command.commandParameters.push(path);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	}
	FileTreeManager.FileTreeManagerLegacy = FileTreeManagerLegacy;
	let FileTreeManager$1 = class FileTreeManager {
	    get Legacy() {
	        return new FileTreeManagerLegacy(this);
	    }
	    /**
	     * Returns the root folder in the UPV filetree
	     * @returns
	     */
	    async getRootFolder() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeRoot);
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .FilesTreeObject;
	        return new FileTreeModel_1.FileTreeModel(result.Id, result.Name, result.Type);
	    }
	    /**
	     * Get the children Elements of this File Tree Elements
	     */
	    async getChildren(folder) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeChildren);
	        command.commandParameters.push(folder.Id.toString());
	        const apiResult = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        const result = [];
	        apiResult.ResultData.FilesTreeObjects.forEach(element => {
	            result.push(this.resolveElement(element));
	        });
	        return result;
	    }
	    /**
	     * Get the sibelings Elements of this File Tree Elements
	     */
	    async getSiblings(element) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeSiblings);
	        command.commandParameters.push(element.Id.toString());
	        const apiResult = await APIConnector_1.Api.get().sendCommandWithReturnType(command);
	        const result = [];
	        apiResult.ResultData.FilesTreeObjects.forEach(element => {
	            result.push(this.resolveElement(element));
	        });
	        return result;
	    }
	    /**
	     * Move a file Tree Element into a diffrent folder
	     */
	    async moveTo(source, target) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeMoveObject);
	        command.commandParameters.push(source.Id.toString());
	        command.commandParameters.push(target.Id.toString());
	        await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * This function allows you to import any filetree element.
	     * This is not designed for normal usage and requires extensive knowledge.
	     * FileTreeElement.getContent can be used to retrieve the data
	     * Since the content of filetree element are internal datastructures no support is/will be made available
	     * Data structure changes can occour within new versions that will break old behavior
	     * @param parameter
	     */
	    async importContainer(parameter) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeImportContainer);
	        command.additionalParameters = {
	            FilesTreeImportContainer: parameter
	        };
	        return this.resolveElement((await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.FilesTreeObject);
	    }
	    /**
	     * Create a new Folder in the Filetree
	     * @param parent
	     * @param name
	     * @returns
	     */
	    async createFolder(parent, name) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateFolder);
	        command.commandParameters.push(name);
	        command.commandParameters.push(parent.Id.toString());
	        //Add 2 new fields
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .FilesTreeObject;
	        return new FileTreeFolder_1.FileTreeFolder(result.Id, result.Name, result.Type);
	    }
	    /**
	     * Create a point of interest in the filestree
	     * @param parent parent folder
	     * @param name
	     * @param position
	     * @param rotation
	     * @param color
	     * @param diameter size of the poi in meters
	     * @param attributes define attributes on the poi
	     * @param links define links on the poi
	     * @param type Use Custommesh and customMeshPath to provide a custom mesh other then the sphere
	     * @param customMeshPath path to the custom mesh in obj format. Can be a filepath or website path
	     * @returns
	     */
	    async createPointOfIntrest(parent, name, position, rotation, color, diameter, attributes = {}, links = {}, type = Util_1.PointOfInterestType.Sphere, customMeshPath = "") {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.PlacePoi);
	        command.additionalParameters = {
	            PlacePoi: {
	                ParentId: parent.Id,
	                Name: name,
	                Position: position,
	                Rotation: rotation,
	                Color: color,
	                Diameter: diameter,
	                Attributes: Object.keys(attributes).map(x => { return { Key: x, Value: attributes[x] }; }),
	                Links: Object.keys(links).map(x => { return { Name: x, Url: attributes[x] }; }),
	                Type: type,
	                FilePath: customMeshPath
	            }
	        };
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .FilesTreeObject;
	        return new FileTreePointOfInterest_1.FileTreePointOfInterest(result.Id, result.Name, result.Type);
	    }
	    /**
	     * Create a Pid or 3D Sketch
	     * @param parent parent folder
	     * @param name name of the sketch
	     * @returns Either PidSketch or Sketch depending on current UPV Context
	     */
	    async createSketch(parent, name) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateSketch);
	        command.commandParameters.push(name);
	        command.commandParameters.push(parent.Id.toString());
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .FilesTreeObject;
	        return this.resolveElement(result);
	    }
	    /**
	     * Create a Markup. Depending on if 3d,Pid,or Document/Drawing is open it will be bound to that file
	     * @param name
	     * @param parent
	     * @returns
	     */
	    async createMarkup(parent, name) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateMarkup);
	        command.commandParameters = [name, parent.Id.toString()];
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .FilesTreeObject;
	        return this.resolveElement(result);
	    }
	    /**
	    * Create a Comment. Depending on if 3d or Pid is open it will be bound to that type. It is also based on the currently selected element
	    * @param name
	    * @param parent
	    * @returns
	    */
	    async createComment(parent, name, uid = null, offset = 0) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FilesTreeCreateComment);
	        command.commandParameters = [name, parent.Id.toString()];
	        command.additionalParameters = {
	            FilesTreeCreateComment: {
	                Uid: uid,
	                Offset: offset
	            }
	        };
	        const result = (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	            .FilesTreeObject;
	        return this.resolveElement(result);
	    }
	    resolveElement(element) {
	        switch (element.Type) {
	            case Util_1.FeatureTypes.Model:
	                return new FileTreeModel_1.FileTreeModel(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Folder:
	                return new FileTreeFolder_1.FileTreeFolder(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Comment:
	                return new FileTreeComment_1.FileTreeComment(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.CommentSvg:
	                return new FileTreeCommentSVG_1.FileTreeCommentSVG(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.PointOfInterest:
	                return new FileTreePointOfInterest_1.FileTreePointOfInterest(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Package:
	                return new FileTreePackage_1.FileTreePackage(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.TwoDToThreeD:
	                return new FileTreeTwoDToThreeD_1.FileTreeTwoDToThreeD(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Photo:
	                return new FileTreePhoto_1.FileTreePhoto(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Sketch:
	                return new FileTreeSketch_1.FileTreeSketch(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Screenshot:
	                return new FileTreeScreenshot_1.FileTreeScreenshot(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.View:
	                return new FileTreeView_1.FileTreeView(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.AppControl:
	                return new FileTreeAppControl_1.FileTreeAppControl(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Animation:
	                return new FileTreeAnimation_1.FileTreeAnimation(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Markup:
	                return new FileTreeMarkup_1.FileTreeMarkup(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.PIDSketch:
	                return new FileTreePIDSketch_1.FileTreePIDSketch(element.Id, element.Name, element.Type);
	            case Util_1.FeatureTypes.Report:
	                return new FileTreeReport_1.FileTreeReport(element.Id, element.Name, element.Type);
	            default:
	                console.log("Could not resolve " + element.Type);
	            //return new FileTreeElement(element.Id, element.Name, element.Type);
	        }
	    }
	    /**
	     * Load UPVF file from a base64 string into UPV
	     * @param upfvBase64 base64 upvf content to load
	     * @param suppressDefaultAction if only one element is in the UPVF open it by default if this is set to false (default is true)
	     * @returns
	     */
	    async loadUPVF(upfvBase64, suppressDefaultAction = true) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ProcessFile);
	        command.additionalParameters = {
	            ProcessFile: {
	                ContentBase64: upfvBase64,
	                SuppressDefaultAction: suppressDefaultAction
	            }
	        };
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * This functions returns a base64 UPVF file of the tree.
	     * Can be loaded again using loadUPVF
	     * It is possible to use a diffrent root by using the FileTreeElement.getUPVF funtion of the root you want to export from
	     * @returns
	     */
	    async getUPVF(forceExport, featureTypeFilters, fileTreeElement = []) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetFilesTreeContent);
	        command.additionalParameters = {
	            GetFilesTreeContent: {
	                FeatureTypeFilter: featureTypeFilters,
	                ForceExport: forceExport,
	                IncludedNodes: fileTreeElement.map(x => x.Id)
	            }
	        };
	        return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.FilesTreeContent;
	    }
	};
	FileTreeManager.FileTreeManager = FileTreeManager$1;
	return FileTreeManager;
}

var hasRequiredFilesTree;

function requireFilesTree () {
	if (hasRequiredFilesTree) return FilesTree;
	hasRequiredFilesTree = 1;
	(function (exports) {
		var __createBinding = (FilesTree && FilesTree.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (FilesTree && FilesTree.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireFileTreeElement(), exports);
		__exportStar(requireFileTreeAnimation(), exports);
		__exportStar(requireFileTreeAppControl(), exports);
		__exportStar(requireFileTreeComment(), exports);
		__exportStar(requireFileTreeCommentSVG(), exports);
		__exportStar(requireFileTreeFolder(), exports);
		__exportStar(requireFileTreeMarkup(), exports);
		__exportStar(requireFileTreeModel(), exports);
		__exportStar(requireFileTreePackage(), exports);
		__exportStar(requireFileTreePhoto(), exports);
		__exportStar(requireFileTreePIDSketch(), exports);
		__exportStar(requireFileTreePointOfInterest(), exports);
		__exportStar(requireFileTreeReport(), exports);
		__exportStar(requireFileTreeScreenshot(), exports);
		__exportStar(requireFileTreeSketch(), exports);
		__exportStar(requireFileTreeTwoDToThreeD(), exports);
		__exportStar(requireFileTreeView(), exports);
		__exportStar(requireFileTreeManager(), exports); 
	} (FilesTree));
	return FilesTree;
}

var hasRequiredApplication;

function requireApplication () {
	if (hasRequiredApplication) return Application;
	hasRequiredApplication = 1;
	Object.defineProperty(Application, "__esModule", { value: true });
	Application.Application = void 0;
	const APIConnector_1 = requireAPIConnector();
	const Objects_1 = requireObjects();
	const Scenes_1 = requireScenes();
	const Util_1 = requireUtil();
	const CaxApiCommand_1 = requireCaxApiCommand();
	const FilesTree_1 = requireFilesTree();
	const AuthenticationManager_1 = requireAuthenticationManager();
	/**
	 * @class Application
	 * Main Entrypoint for interacting with the UPV API
	 */
	let Application$1 = class Application {
	    /**
	     *
	     * @private
	     *
	     */
	    constructor() {
	        this.State = new Util_1.Get(async () => {
	            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetLifeCycleState);
	            return await (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData
	                .LifeCycleState;
	        });
	        this.Scenes = new Util_1.Get(async () => {
	            const scenes = [];
	            scenes.push(new Scenes_1.Scene3d(Util_1.TargetEnum.ThreeD));
	            scenes.push(new Scenes_1.ScenePid(Util_1.TargetEnum.Intelli));
	            scenes.push(new Scenes_1.AppControlScene(Util_1.TargetEnum.Browser));
	            return scenes;
	        });
	        this.ScenesAppControls = new Util_1.Get(async () => {
	            const scenes = [];
	            scenes.push(new Scenes_1.AppControlScene(Util_1.TargetEnum.Browser));
	            return scenes;
	        });
	        this.Scenes3d = new Util_1.Get(async () => {
	            const scenes = [];
	            scenes.push(new Scenes_1.Scene3d(Util_1.TargetEnum.ThreeD));
	            return scenes;
	        });
	        this.ScenesPid = new Util_1.Get(async () => {
	            const scenes = [];
	            scenes.push(new Scenes_1.ScenePid(Util_1.TargetEnum.Intelli));
	            return scenes;
	        });
	        this.Models = new Util_1.Get(async () => {
	            const models = [];
	            models.push(new Objects_1.Model(Util_1.TargetEnum.ThreeD));
	            models.push(new Objects_1.Model(Util_1.TargetEnum.Intelli));
	            models.push(new Objects_1.Model(Util_1.TargetEnum.Browser));
	            return models;
	        });
	        this.Language = new Util_1.GetSet(async () => {
	            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.GetLanguage);
	            return (await APIConnector_1.Api.get().sendCommandWithReturnType(command)).ResultData.Language;
	        }, async (value) => {
	            const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetLanguage);
	            command.commandParameters.push(value);
	            (await APIConnector_1.Api.get().sendCommand(command));
	        });
	        this.Events = new Objects_1.Events();
	        this.FileTree = new FilesTree_1.FileTreeManager();
	        this.Authentication = new AuthenticationManager_1.AuthenticationManager();
	        this.LocalStorage = new Objects_1.LocalStorage();
	        this.Settings = new Objects_1.Settings();
	        this.FileOperations = new Objects_1.FileOperations();
	    }
	    /**
	     * Create an instance of this class
	     * @returns {@link Application}
	     */
	    static getInstance() {
	        return new Application();
	    }
	    /**
	     * Opens a popup with a message inside UPV
	     * @param message Message to display
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async showMessage(message) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ShowMessage);
	        command.commandParameters.push(message);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Focus the viewer into the foreground
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async focusViewer() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.FocusViewer);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Closes UPV
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async quitApplication() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.QuitApplication);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Load the model into UPV. Currently its not possible to load a model this way as AppControl are only availble inside the model for now
	     * @param modelUri path to model
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async loadModel(modelUri) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.LoadModel);
	        command.commandParameters.push(modelUri);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Caches a UPV Model
	     * @param modelUri path to model
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async cacheModel(modelUri) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.CacheModel);
	        command.commandParameters.push(modelUri);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Activate a license key
	     * @param license licensekey to activate
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async activateLicense(license) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ActivateLicense);
	        command.commandParameters.push(license);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     *
	     * @returns Deactivate an active license
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async deactivateLicense() {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.DeactivateLicense);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    //end move
	    /**
	     * Set an Authentication config used when opening models
	     * @param domainUri for which URI is the config valid
	     * @param configUri the configuration to use
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async setAuthConfig(domainUri, configUri) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.SetAuthConfig);
	        command.commandParameters.push(domainUri);
	        command.commandParameters.push(configUri);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Clear an authentication config for a URI
	     * @param domainUri the URI to delete an authentication config for
	     * @returns ApiResponse can be ignored and will likely change
	     */
	    async clearAuthConfig(domainUri) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.ClearAuthConfig);
	        command.commandParameters.push(domainUri);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Open a path on the local system
	     * @param path path to open using the system default example https://google.com
	     * @returns
	     */
	    async openPath(path) {
	        const command = new CaxApiCommand_1.CaxApiCommand(Util_1.ApiCommands.OpenPath);
	        command.commandParameters.push(path);
	        return await APIConnector_1.Api.get().sendCommand(command);
	    }
	    /**
	     * Checks if a connection to UPV is available and commands can be send to UPV
	     * @returns
	     */
	    available() {
	        return APIConnector_1.Api.get().Available;
	    }
	};
	Application.Application = Application$1;
	return Application;
}

var Theme = {};

var hasRequiredTheme;

function requireTheme () {
	if (hasRequiredTheme) return Theme;
	hasRequiredTheme = 1;
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	Object.defineProperty(Theme, "__esModule", { value: true });
	Theme.Theme = void 0;
	/**
	 * Defines the Material UI Theme
	 */
	let Theme$1 = class Theme {
	    /**
	     * Provides @mui/material/styles/ThemeOptions for use in AppControls. To not add Material UI as a requirement any type is returned here
	     * It is safe to cast this to ThemeOptions in your code or directly provide it to createTheme function
	    */
	    static async getTheme() {
	        return {
	            palette: {
	                mode: 'dark',
	                type: 'dark',
	                primary: {
	                    main: '#1976d2',
	                },
	                secondary: {
	                    main: '#f50127',
	                },
	                background: {
	                    default: '#4d4d4d',
	                    paper: '#1c1c1c',
	                },
	            },
	            shape: {
	                borderRadius: 0,
	            },
	            typography: {
	                fontFamily: 'Noto Sans,Roboto',
	            },
	        };
	    }
	};
	Theme.Theme = Theme$1;
	return Theme;
}

var hasRequiredUniversal_api;

function requireUniversal_api () {
	if (hasRequiredUniversal_api) return universal_api;
	hasRequiredUniversal_api = 1;
	(function (exports) {
		var __createBinding = (universal_api && universal_api.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (universal_api && universal_api.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireApplication(), exports);
		__exportStar(requireTheme(), exports);
		__exportStar(requireFilesTree(), exports);
		__exportStar(requireScenes(), exports);
		__exportStar(requireUtil(), exports);
		__exportStar(requireResponseTypes(), exports);
		__exportStar(requireObjects(), exports); 
	} (universal_api));
	return universal_api;
}

var universal_apiExports = requireUniversal_api();
var index = /*@__PURE__*/getDefaultExportFromCjs(universal_apiExports);

var index$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: index
}, [universal_apiExports]);

export { index$1 as universal_api };
