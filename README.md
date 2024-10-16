# Lambda Monorepo Assignment

This repository contains a Lambda function API built with Express, Swagger for documentation, and AWS CDK for deployment.

## Table of Contents
- [Installation](#installation)
- [Linting and Testing](#linting-and-testing)
- [Deployment](#deployment)
- [Accessing and Testing the API](#accessing-and-testing-the-api)

## Installation

To install the dependencies for this project, you will need to have Yarn installed. If you haven't installed Yarn yet, you can follow the [official Yarn installation guide](https://classic.yarnpkg.com/en/docs/install/).

Once you have Yarn installed, navigate to the project directory and run:

```bash
yarn install
```

## Linting and Testing

To run linting and ensure your code adheres to the defined style guidelines, you can use the following command:

```bash
yarn lint
```

To run tests for the Lambda function, use:

```bash
yarn test
```

## Deployment

This project uses the AWS Cloud Development Kit (CDK) for deployment. To deploy the solution to AWS, follow these steps:

1. Make sure you have the AWS CLI configured with the appropriate credentials and region. You can configure the AWS CLI using:

    ```bash
    aws configure
    ```

2. Navigate to the infrastructure package directory:

    ```bash
    cd packages/infrastructure
    ```

3. Deploy the stack using the following command:

    ```bash
    yarn cdk deploy
    ```

## Accessing and Testing the API

After successfully deploying the API, you can access it using the endpoint provided in the deployment output. The default endpoint for testing the API is:

```
http://<your-api-id>.execute-api.<region>.amazonaws.com/prod/hello?name=Irfan
```

You can replace `<your-api-id>` and `<region>` with the values specific to your deployment.

To test the API, you can use any API client (like Postman) or simply enter the URL in your web browser. You should receive a JSON response like this:

```json
{
  "message": "Hello, Irfan"
}
```

You can also test without a name parameter:

```
http://<your-api-id>.execute-api.<region>.amazonaws.com/prod/hello
```

This should return:

```json
{
  "message": "Hello, World"
}
```

## Conclusion

This README provides a clear set of instructions for installing dependencies, running linting and tests, deploying to AWS, and accessing the deployed API.
