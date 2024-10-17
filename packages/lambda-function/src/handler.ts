import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Regular expression to allow only letters (a-z, A-Z) and spaces.
const VALID_NAME_REGEX = /^[a-zA-Z\s]+$/;

/**
 * Lambda handler function
 * @param event APIGatewayProxyEvent - AWS Lambda event
 * @returns APIGatewayProxyResult - HTTP response object
 */
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        console.log("Received event:", JSON.stringify(event, null, 2));

        const name = event.queryStringParameters?.name || "World";

        // Validate the query parameter
        if (!VALID_NAME_REGEX.test(name)) {
            console.error(`Invalid name parameter: ${name}`);
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Invalid name parameter. Only letters and spaces are allowed.",
                }),
            };
        }

        const message = `Hello, ${name}`;
        console.info(`Returning message: ${message}`);

        // Return a successful response
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    } catch (error) {
        console.error("Error handling request:", error);

        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal server error. Please try again later.",
            }),
        };
    }
};
