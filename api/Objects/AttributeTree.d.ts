export declare class AttributeTreeNode {
    Id: string;
    Name: string;
    Type: string;
    constructor(Id: string, Name: string, Type: string);
    /**
     * Get The Root node of the Attribute Tree
     * @returns
     */
    static getRoot(): Promise<AttributeTreeNode>;
    /**
     * Get the current Sub Folders for this attribute tree element
     * @returns
     */
    getSubFolders(): Promise<AttributeTreeNode[]>;
    /**
     * Get the Siblings for this Attribute Tree element
     * @returns
     */
    getSiblings(): Promise<AttributeTreeNode[]>;
    getTreeNodesOfFolder(): Promise<AttributeTreeNode[]>;
}
//# sourceMappingURL=AttributeTree.d.ts.map