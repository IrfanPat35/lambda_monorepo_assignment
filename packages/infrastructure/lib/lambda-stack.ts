import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloFunction = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset('../lambda-function/dist'),
    });

    new apigateway.LambdaRestApi(this, 'HelloApi', {
      handler: helloFunction,
    });
  }
}
