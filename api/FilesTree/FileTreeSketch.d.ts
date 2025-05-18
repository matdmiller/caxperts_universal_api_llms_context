import { GetCatalogSymbols, GetObjects } from "../ResponseTypes";
import { CatalogSymbol, FeatureTypes, PrimitiveType, Vector3D } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeSketch extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    selectSymbolForPlacement(symbol: CatalogSymbol): Promise<GetObjects>;
    placeSymbol(symbol: CatalogSymbol, name: string, position: Vector3D, rotation: Vector3D, attributes?: {
        [key: string]: string;
    }): Promise<GetObjects>;
    placePrimitive(type: PrimitiveType, name: string, position: Vector3D, rotation: Vector3D, attributes?: {
        [key: string]: string;
    }, parameters?: {
        [key: string]: string;
    }): Promise<GetObjects>;
    getCatalogSymbols(): Promise<GetCatalogSymbols>;
    deleteSketchItem(uid: string): Promise<import("../ResponseTypes").ApiResponse>;
    exportAsUpvcBase64(): Promise<string>;
    exportAsDgnBase64(): Promise<string>;
}
//# sourceMappingURL=FileTreeSketch.d.ts.map