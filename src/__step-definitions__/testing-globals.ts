import { RenderResult } from '@testing-library/react';
import { SinonStub } from 'sinon';
import { Step } from '../data/steps';

export interface TestingGlobals {
    step: Partial<Step>;
    stepStub?: SinonStub;
    renderedComponents: {
        stepPreview?: RenderResult;
    };
}

export const testingGlobals: TestingGlobals = {
    step: {},
    stepStub: undefined,
    renderedComponents: {
        stepPreview: undefined
    }
};
