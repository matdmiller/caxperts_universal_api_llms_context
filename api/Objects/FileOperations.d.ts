import { GenericLoadFromFileResponse, LoadFileApiReturnType, SaveFileApiReturnType } from "../ResponseTypes";
export declare class FileOperations {
    /**
     * Opens a open file dialog and returns the data if the user selected a file
     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
     * @param defaultName the default name in the dialog
     * @returns
     */
    loadFileDialog(extensions?: string, defaultName?: string): Promise<LoadFileApiReturnType>;
    /**
     * Opens a file save dialog and saves the file to disk
     * @param dataAsBase64 data to save
     * @param extensions Valid extensions. Example: pdf|upvf  Default all files are allowed
     * @param defaultName the default name in the dialog
     * @returns
     */
    saveFileDialog(dataAsBase64: string, extensions: string, defaultName?: string): Promise<SaveFileApiReturnType>;
    /**
     * Load a file from the model folder. Some files are not allowed to be retrieved
     * For example Data/test.txt, otherFolder/file.xlsx, fileinRoot.json
     * Dont prepend a /on the file
     * @param file file to load
     * @returns
     */
    loadFileFromModelFolder(file: string): Promise<GenericLoadFromFileResponse>;
}
//# sourceMappingURL=FileOperations.d.ts.map