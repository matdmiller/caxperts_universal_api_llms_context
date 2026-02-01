export declare class ApiResponse {
    ErrorCode: number;
    ErrorMessage: string;
    RequestId: number;
}
export declare class ApiResponseWithType<T> extends ApiResponse {
    ResultData: T;
    constructor();
}
//# sourceMappingURL=ApiResponse.d.ts.map