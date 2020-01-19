import { RenderResult } from '@testing-library/react';
import { SinonStub } from 'sinon';
import { Position } from '../types/positions';
import { Step } from '../types/steps';

export interface TestingGlobals {
    data: {
        position: Partial<Position>;
        positionsList: Partial<Position>[];
        step: Partial<Step>;
        stepsList: Partial<Step>[];
    };
    getPositionStub?: SinonStub;
    getStepStub?: SinonStub;
    renderedComponents: {
        positionPreview?: RenderResult;
        positionsList?: RenderResult;
        stepPreview?: RenderResult;
        stepsList?: RenderResult;
    };
}

export const testingGlobals: TestingGlobals = {
    data: {
        position: {},
        positionsList: [],
        step: {},
        stepsList: []
    },
    getPositionStub: undefined,
    getStepStub: undefined,
    renderedComponents: {}
};
