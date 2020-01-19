import { After, Given } from 'cucumber';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import sinon from 'sinon';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import * as steps from '../../data/steps';
import { Step, StepId } from '../../types/steps';

export const stepIdSentence = /(a step with id|with step id) "(.*)"/;
Given(stepIdSentence, (_: string, stepId: StepId) => {
    testingGlobals.data.step.id = stepId;
    testingGlobals.getStepStub = sinon
        .stub(steps, 'getStep')
        .returns(testingGlobals.data.step as Step);
});

export const stepNameSentence = /(a step with name|with step name) "(.*)"/;
Given(stepNameSentence, (_: string, name: string) => {
    testingGlobals.data.step.name = name;
});

Given('the steps defined in {string}', (fileName: string) => {
    const filePath = join(__dirname, '..', '..', '..', 'features', fileName);
    if (!existsSync(filePath)) {
        throw new Error(`Could not find ${fileName} (in ${filePath})`);
    }
    const fileContent = readFileSync(filePath, 'utf8');
    testingGlobals.data.stepsList = JSON.parse(fileContent);
    const getStepStub = sinon.stub(steps, 'getStep');

    testingGlobals.data.stepsList.forEach(step => {
        getStepStub.withArgs(step.id!).returns(step as Step);
    });

    testingGlobals.getStepStub = getStepStub;
});

After(() => {
    testingGlobals.getStepStub && testingGlobals.getStepStub.restore();
    testingGlobals.data.step = {};
    testingGlobals.data.stepsList = [];
});
