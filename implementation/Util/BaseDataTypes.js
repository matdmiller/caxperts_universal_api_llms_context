"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfDocument = exports.Intellipid = exports.PidLink = exports.UrlLink = exports.ElementLinks = exports.FileTreeState = exports.CatalogSymbol = exports.ProjectionSphere = exports.Quaternion = exports.AttributeTreeNodeType = exports.PdfInfo = exports.IntelliPidDrawingInfo = exports.CustomAttributeSourceDefinition = exports.Definition = exports.Change = exports.ExportCustomAttributes = exports.ChangeSetLine = exports.ChangeSet = exports.FilesTreeObject = exports.TakeScreenshot = exports.SnapCircle = exports.SnapInfo = exports.ProjectInfo = exports.ModelInfo = exports.Instance = exports.ClippingPlane = exports.Color = exports.ObjectColors = exports.BoundsInfo = exports.Bounds = exports.CameraView = exports.Vector4D = exports.Vector3D = exports.Vector2D = void 0;
class Vector2D {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}
exports.Vector2D = Vector2D;
class Vector3D {
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
}
exports.Vector3D = Vector3D;
class Vector4D {
    constructor(X, Y, Z, W) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
        this.W = W;
    }
}
exports.Vector4D = Vector4D;
class CameraView {
    constructor(Position, Rotation) {
        this.Position = Position;
        this.Rotation = Rotation;
    }
}
exports.CameraView = CameraView;
class Bounds {
}
exports.Bounds = Bounds;
class BoundsInfo {
}
exports.BoundsInfo = BoundsInfo;
class ObjectColors {
    constructor() {
        this.Current = {};
        this.Default = {};
    }
}
exports.ObjectColors = ObjectColors;
class Color {
}
exports.Color = Color;
class ClippingPlane {
}
exports.ClippingPlane = ClippingPlane;
class Instance {
}
exports.Instance = Instance;
class ModelInfo {
}
exports.ModelInfo = ModelInfo;
class ProjectInfo {
}
exports.ProjectInfo = ProjectInfo;
class SnapInfo {
}
exports.SnapInfo = SnapInfo;
class SnapCircle {
}
exports.SnapCircle = SnapCircle;
class TakeScreenshot {
}
exports.TakeScreenshot = TakeScreenshot;
class FilesTreeObject {
}
exports.FilesTreeObject = FilesTreeObject;
class ChangeSet {
}
exports.ChangeSet = ChangeSet;
class ChangeSetLine {
}
exports.ChangeSetLine = ChangeSetLine;
class ExportCustomAttributes {
}
exports.ExportCustomAttributes = ExportCustomAttributes;
class Change extends ChangeSetLine {
}
exports.Change = Change;
class Definition {
}
exports.Definition = Definition;
class CustomAttributeSourceDefinition {
}
exports.CustomAttributeSourceDefinition = CustomAttributeSourceDefinition;
class IntelliPidDrawingInfo {
}
exports.IntelliPidDrawingInfo = IntelliPidDrawingInfo;
class PdfInfo {
}
exports.PdfInfo = PdfInfo;
class AttributeTreeNodeType {
}
exports.AttributeTreeNodeType = AttributeTreeNodeType;
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
exports.Quaternion = Quaternion;
class ProjectionSphere {
}
exports.ProjectionSphere = ProjectionSphere;
class CatalogSymbol {
}
exports.CatalogSymbol = CatalogSymbol;
class FileTreeState {
}
exports.FileTreeState = FileTreeState;
class ElementLinks {
}
exports.ElementLinks = ElementLinks;
class UrlLink {
}
exports.UrlLink = UrlLink;
class PidLink {
}
exports.PidLink = PidLink;
class Intellipid {
}
exports.Intellipid = Intellipid;
class PdfDocument {
}
exports.PdfDocument = PdfDocument;
