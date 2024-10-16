"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    var _a;
    const name = ((_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.name) || "World";
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, ${name}` }),
    };
};
exports.handler = handler;
