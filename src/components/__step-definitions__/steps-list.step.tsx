import { getAllByTestId, render } from '@testing-library/react';
import { expect } from 'chai';
import { After, Then, When } from 'cucumber';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { testIds } from '../../__step-definitions__/test-ids';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import { Step } from '../../types/steps';
import { StepsList } from '../steps-list';

const renderStepsListSentence = 'rendering a steps list component';
When(renderStepsListSentence, () => {
    testingGlobals.renderedComponents.stepsList = render(
        <BrowserRouter>
            <StepsList steps={testingGlobals.data.stepsList as Step[]} />
        </BrowserRouter>
    );
});

Then('the list contains {int} step preview components', (componentsNumber: number) => {
    if (!testingGlobals.renderedComponents.stepsList) {
        throw new Error(
            `You need to render a steps list with "${renderStepsListSentence}" before using this sentence`
        );
    } else {
        const stepPreviews = getAllByTestId(document.body, testIds.stepPreview.link);
        expect(stepPreviews).to.have.length(componentsNumber);
    }
});

After(() => {
    testingGlobals.renderedComponents.stepsList = undefined;
});
