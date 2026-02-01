import { Scene } from "../Scenes";
import { BoundsInfo, Set, ObjectColors, SnapInfo, Definition, ElementLinks, CustomAttributeDataType, ChangeableAttributeUnitType, Color } from "../Util";
export declare class ModelObject {
    private target;
    constructor(uid: string, target: Scene);
    /**
     * @internal
     */
    initBase(attributes?: Attribute[], elementLinks?: ElementLinks): void;
    /**
     * @internal
     */
    init3D(bounds?: BoundsInfo, objectColors?: ObjectColors, snapInfo?: SnapInfo): void;
    /**
     * @internal
     */
    initPid(rawSvg?: string[]): void;
    /**
     * Get the Attribute value. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @returns value or null if not found
     */
    getAttribute(name: string): string;
    /**
     * Set a Custom Attribute. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    setCustomAttribute(name: string, value: string, user: string): Promise<void>;
    /**
     * Update a Changeable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    setAttribute(name: string, value: string): Promise<void>;
    /**
     * Add a changeable Attribute to a sketch element
     * Samples:
     * await element.createChangeableAttribute("Test-Freetest", "Test-Freetest", "Hello World");
     * await element.createChangeableAttribute("Test-Color", "Test-Color", "ff1122", CustomAttributeDataType.Color);
     * await element.createChangeableAttribute("Test-Meter", "Test-Meter", "1", CustomAttributeDataType.NumericWithUnit, ChangeableAttributeUnitType.Length);
     * await element.createChangeableAttribute("Test-Angle", "Test-Angle", "2", CustomAttributeDataType.NumericWithUnit, ChangeableAttributeUnitType.Angle);
     * await element.createChangeableAttribute("Test-Numeric", "Test-Numeric", "2", CustomAttributeDataType.Numeric);
     * await element.createChangeableAttribute("Test-Codelist", "Test-Codelist", "test1", CustomAttributeDataType.CodeList, ChangeableAttributeUnitType.None, false, false, true, ["test1", "test2", "test3", "test4"]);
     * await element.createChangeableAttribute("Test-CodelistColor", "Test-CodelistColor", "blue", CustomAttributeDataType.CodeList, ChangeableAttributeUnitType.None, false, false, true, ["red", "green", "blue", "none"], [red, green, blue]);
     * await element.createChangeableAttribute("Test-Readonly", "Test-Readonly", "readonly", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, true, false, true);
     * await element.createChangeableAttribute("Test-Hidden", "Test-Hidden", "hidden", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, false, true, true);
     * await element.createChangeableAttribute("Test-nondeletable", "Test-nondeletable", "nondeletable", CustomAttributeDataType.FreeText, ChangeableAttributeUnitType.None, false, false, false);
     * @param name Internal Name
     * @param displayName  Visible name
     * @param initialValue The intial value this is set to
     * @param mode What type of Attribute to create. See Samples
     * @param unitType Leave this at none except for NumericWithUnit
     * @param readOnly User cannot edit this field
     * @param hidden User cannot see this field
     * @param deletable User cannot delete this value
     * @param codelist A codelist to use for the mode codelist
     * @param codelistColors optional colors to use for the codelist
     */
    createChangeableAttribute(name: string, displayName: string, initialValue: string, mode?: CustomAttributeDataType, unitType?: ChangeableAttributeUnitType, readOnly?: boolean, hidden?: boolean, deletable?: boolean, codelist?: string[], codelistColors?: Color[]): Promise<void>;
    /**
     * Remove a changeable attribute on a Sketch element
     * @param name
     */
    deleteChangeableAttribute(name: string): Promise<void>;
    /**
     * Uid of the object
     */
    Uid: string;
    /**
     * Attributes of the object
     */
    Attributes?: Attribute[];
    /**
     * Bounds of the object
     */
    Bounds?: BoundsInfo;
    /**
     * Snapinfo of the object
     */
    SnapInfo?: SnapInfo;
    /**
     * the current colors of the object
     */
    ObjectColors?: ObjectColors;
    /**
     * the IntelliPid Raw SVG string
     */
    RawSvg?: string[];
    /**
     * All Linked Elements to this Object. Includes 3D, Pid, Drawing, Documents and Links
     */
    ElementLinks?: ElementLinks;
}
export declare class Attribute {
    private readonly uid;
    /**
     * The value of the attribute
     */
    Value: string;
    /**
     * The key of the attribute
     */
    Key: string;
    /**
     * Is this a custom Attribute
     */
    IsCustomAttribute: boolean;
    /**
     * Is this a chanable Attribute
     */
    IsChangeableAttribute: boolean;
    /**
     * Update the Custom Attribute. First parameter is the new value. second is the username of the person updating
     */
    SetCustomAttribute: Set<{
        value: string;
        user: string;
    }>;
    /**
     * Update a Changeable Attribute. This does not work with custom Attributes
     */
    SetAttribute: Set<string>;
    constructor(uid: string, key: string, value: string, isCustomAttribute: boolean, customAttributeDefinition: Definition, customAttributeSourceValue: string, target: Scene, isChangeableAttribute: boolean);
}
//# sourceMappingURL=ModelObject.d.ts.map