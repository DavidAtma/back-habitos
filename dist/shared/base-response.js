"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    static success(data, message = 'OK') {
        return {
            success: true,
            message,
            status: 200,
            data
        };
    }
    static error(message, status = 500) {
        return {
            success: false,
            message,
            status,
            data: null
        };
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=base-response.js.map