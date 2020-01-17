import { After, Given } from 'cucumber';
import sinon from 'sinon';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import * as steps from '../../data/steps';
import { Step, StepId } from '../../types/steps';

export const stepIdSentence = /(a step with id|with step id) "(.*)"/;
Given(stepIdSentence, (_: string, stepId: StepId) => {
    testingGlobals.step.id = stepId;
    testingGlobals.getStepStub = sinon.stub(steps, 'getStep').returns(testingGlobals.step as Step);
});

export const stepNameSentence = /(a step with name|with step name) "(.*)"/;
Given(stepNameSentence, (_: string, name: string) => {
    testingGlobals.step.name = name;
});

After(() => {
    testingGlobals.getStepStub && testingGlobals.getStepStub.restore();
    testingGlobals.step = {};
});
