import { Scene } from "../Scenes";
import { BoundsInfo, Set, ObjectColors, SnapInfo, Definition, ElementLinks } from "../Util";
export declare class ModelObject {
    constructor(uid: string);
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
     * Update a Changable Attribute. This does not work with custom Attributes. This is shortcut for get an attribute instead of using the {@link Attributes} attributes array
     * @param name attribute name
     * @param value new attribute value
     * @param user username of the person changing the attribute
     * @returns
     */
    setAttribute(name: string, value: string): Promise<void>;
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
    IsChangableAttribute: boolean;
    /**
     * Update the Custom Attribute. First parameter is the new value. second is the username of the person updating
     */
    SetCustomAttribute: Set<{
        value: string;
        user: string;
    }>;
    /**
     * Update a Changable Attribute. This does not work with custom Attributes
     */
    SetAttribute: Set<string>;
    constructor(uid: string, key: string, value: string, isCustomAttribute: boolean, customAttributeDefinition: Definition, customAttributeSourceValue: string, target: Scene, isChangableAttribute: boolean);
}
//# sourceMappingURL=ModelObject.d.ts.map