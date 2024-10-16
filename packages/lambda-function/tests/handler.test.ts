import { handler } from "../src/handler";

test("returns 'Hello, Irfan' when name is provided", async () => {
  const event = { queryStringParameters: { name: "Irfan" } } as any;
  const result = await handler(event);
  expect(result.body).toBe(JSON.stringify({ message: "Hello, Irfan" }));
});

test("returns 'Hello, World' when no name is provided", async () => {
  const event = { queryStringParameters: {} } as any;
  const result = await handler(event);
  expect(result.body).toBe(JSON.stringify({ message: "Hello, World" }));
});
