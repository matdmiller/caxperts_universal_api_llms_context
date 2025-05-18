import { GetCatalogSymbols, GetObjects } from "../ResponseTypes";
import { FeatureTypes, CatalogSymbol, PidSketchToolMode, Color, Set, Vector2D } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreePIDSketch extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Set the layer color of a PID sketch
     */
    SketchColor: Set<Color>;
    /**
     * Select a symbol from the catalog for placment
     * @param symbol
     * @returns
     */
    selectSymbolForPlacement(symbol: CatalogSymbol): Promise<GetObjects>;
    /**
     * Select a primitive for placment
     * @param symbol
     */
    selectPrimitiveForPlacement(symbol: PidSketchToolMode): Promise<string[]>;
    placeSymbol(symbol: CatalogSymbol, name: string, position: Vector2D, rotation: number, attributes?: {
        [key: string]: string;
    }): Promise<GetObjects>;
    /**
     * Retrieve the Symbols in the catalog
     * @returns
     */
    getCatalogSymbols(): Promise<GetCatalogSymbols>;
    deleteSketchItem(uid: string): Promise<import("../ResponseTypes").ApiResponse>;
}
//# sourceMappingURL=FileTreePIDSketch.d.ts.map