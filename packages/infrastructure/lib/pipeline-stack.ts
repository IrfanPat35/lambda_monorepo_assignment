import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/pipelines';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { LambdaStack } from './lambda-stack';

export class PipelineStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create a source step using GitHub repository
        const source = new codepipeline.CodePipelineSource.gitHub(
            'IrfanPat35/lambda_monorepo_assignment', // GitHub repository path
            'main' // Branch to watch
        );

        // Define the build step (install dependencies, synthesize)
        const synth = new codepipeline.ShellStep('Synth', {
            input: source,
            commands: [
                'yarn install --frozen-lockfile',
                'yarn build',
                'npx cdk synth',
            ],
        });

        // Create a new CodePipeline
        const pipeline = new codepipeline.CodePipeline(this, 'LambdaPipeline', {
            pipelineName: 'LambdaDeploymentPipeline',
            synth,
        });

        // Add Lambda deployment stage to the pipeline
        const lambdaStage = new LambdaDeploymentStage(this, 'DeployLambdaStage');
        pipeline.addStage(lambdaStage);
    }
}

// Define Lambda Deployment Stage
class LambdaDeploymentStage extends cdk.Stage {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        new LambdaStack(this, 'LambdaFunctionStack');
    }
}
