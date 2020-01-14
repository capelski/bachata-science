import { RenderResult } from '@testing-library/react';
import { SinonStub } from 'sinon';
import { Position } from '../data/positions';
import { Step } from '../data/steps';

export interface TestingGlobals {
    getPositionStub?: SinonStub;
    getStepStub?: SinonStub;
    position: Partial<Position>;
    renderedComponents: {
        positionPreview?: RenderResult;
        stepPreview?: RenderResult;
    };
    step: Partial<Step>;
}

export const testingGlobals: TestingGlobals = {
    getPositionStub: undefined,
    getStepStub: undefined,
    position: {},
    renderedComponents: {
        positionPreview: undefined,
        stepPreview: undefined
    },
    step: {}
};
