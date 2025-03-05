"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseWithType = exports.ApiResponse = void 0;
class ApiResponse {
    constructor() {
        this.ErrorCode = -1;
        this.ErrorMessage = "";
        this.RequestId = 0;
    }
}
exports.ApiResponse = ApiResponse;
class ApiResponseWithType extends ApiResponse {
    constructor() { super(); }
}
exports.ApiResponseWithType = ApiResponseWithType;
