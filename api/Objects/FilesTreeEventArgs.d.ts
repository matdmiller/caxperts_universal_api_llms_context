import { FileTreeElement } from "../FilesTree/FileTreeElement";
import { FilesTreeObjectAddedSource } from "../Util/Enums";
/**
 * Payload of the FilesTreeObjectMoved event
 */
export declare class FilesTreeObjectMovedEventArgs {
    /**
     * The moved element
     */
    Object: FileTreeElement;
    /**
     * The parent the element was moved out of. Null when the element had no parent (root level)
     */
    OldParent: FileTreeElement;
    /**
     * The parent the element was moved into. Null when the element has no parent (root level)
     */
    NewParent: FileTreeElement;
    /**
     * The index of the element within the children of NewParent
     */
    NewIndex: number;
}
/**
 * Payload of the FilesTreeObjectNameChanged event
 */
export declare class FilesTreeObjectNameChangedEventArgs {
    /**
     * The renamed element. Its Name is a snapshot taken when the event was raised,
     * so prefer NewName over Object.Name
     */
    Object: FileTreeElement;
    /**
     * The new name of the element
     */
    NewName: string;
}
/**
 * Payload of the FilesTreeObjectHasChangesChanged event
 */
export declare class FilesTreeObjectHasChangesChangedEventArgs {
    /**
     * The element whose pending changes state changed
     */
    Object: FileTreeElement;
    /**
     * The new pending changes state of this single element (children are not included)
     */
    NewHasChanges: boolean;
}
/**
 * Payload of the FilesTreeObjectAdded event
 */
export declare class FilesTreeObjectAddedEventArgs {
    /**
     * The added element
     */
    Object: FileTreeElement;
    /**
     * The parent the element was added to. Null when the element has no parent (root level)
     */
    Parent: FileTreeElement;
    /**
     * What caused the element to be added
     */
    Source: FilesTreeObjectAddedSource;
}
/**
 * Payload of the FilesTreeObjectRemoved event
 */
export declare class FilesTreeObjectRemovedEventArgs {
    /**
     * The removed element
     */
    Object: FileTreeElement;
    /**
     * The parent the element was removed from. Null when the element had no parent (root level)
     */
    Parent: FileTreeElement;
}
//# sourceMappingURL=FilesTreeEventArgs.d.ts.map