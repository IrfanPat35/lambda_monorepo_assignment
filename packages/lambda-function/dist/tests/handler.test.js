"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("../src/handler");
test("returns 'Hello, Irfan' when name is provided", async () => {
    const event = { queryStringParameters: { name: "Irfan" } };
    const result = await (0, handler_1.handler)(event);
    expect(result.body).toBe(JSON.stringify({ message: "Hello, Irfan" }));
});
test("returns 'Hello, World' when no name is provided", async () => {
    const event = { queryStringParameters: {} };
    const result = await (0, handler_1.handler)(event);
    expect(result.body).toBe(JSON.stringify({ message: "Hello, World" }));
});
