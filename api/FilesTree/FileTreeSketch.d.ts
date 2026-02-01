import { GetCatalogSymbols, GetObjects } from "../ResponseTypes";
import { CatalogSymbol, FeatureTypes, PrimitiveType, Vector3D } from "../Util";
import { FileTreeElement } from "./FileTreeElement";
export declare class FileTreeSketch extends FileTreeElement {
    constructor(id: number, name: string, type: FeatureTypes);
    /**
     * Places the symbol in the users hand for the user to place
     * @param symbol
     * @returns
     */
    selectSymbolForPlacement(symbol: CatalogSymbol): Promise<GetObjects>;
    /**
     * Places the symbol at a specific position
     * @param symbol
     * @param name
     * @param position
     * @param rotation
     * @param attributes
     * @returns
     */
    placeSymbol(symbol: CatalogSymbol, name: string, position: Vector3D, rotation: Vector3D, attributes?: {
        [key: string]: string;
    }): Promise<GetObjects>;
    /**
     * Places a primitive at a specific position
     * Each primitive has specific parameters it requires
     * @param type
     * @param name
     * @param position
     * @param rotation
     * @param attributes
     * @param parameters
     * @returns
     */
    placePrimitive(type: PrimitiveType, name: string, position: Vector3D, rotation: Vector3D, attributes?: {
        [key: string]: string;
    }, parameters?: {
        [key: string]: string;
    }): Promise<GetObjects>;
    /**
     * Retrieve the Catalog symbols available
     * @returns
     */
    getCatalogSymbols(): Promise<GetCatalogSymbols>;
    /**
     * Delete a sketch item by its uid
     * @param uid
     * @returns
     */
    deleteSketchItem(uid: string): Promise<import("../ResponseTypes").ApiResponse>;
    /**
     * Exports a Sketch as a Base64 UPVC file
     * @returns
     */
    exportAsUpvcBase64(): Promise<string>;
    /**
     * Exports a Sketch as a Base64 DGN file
     * @returns
     */
    exportAsDgnBase64(): Promise<string>;
}
//# sourceMappingURL=FileTreeSketch.d.ts.map