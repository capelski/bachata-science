import { fireEvent, getByTestId, render } from '@testing-library/react';
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
            <StepsList renderSearcher={true} steps={testingGlobals.data.stepsList as Step[]} />
        </BrowserRouter>
    );
});

When('writing {string} in the steps filter', (filterText: string) => {
    if (!testingGlobals.renderedComponents.stepsList) {
        throw new Error(
            `You need to render a steps list with "${renderStepsListSentence}" before using this sentence`
        );
    } else {
        const filterElement = getByTestId(document.body, testIds.stepsList.filter);
        fireEvent.change(filterElement, { target: { value: filterText } });
    }
});

Then('the list contains {int} step preview components', (componentsNumber: number) => {
    if (!testingGlobals.renderedComponents.stepsList) {
        throw new Error(
            `You need to render a steps list with "${renderStepsListSentence}" before using this sentence`
        );
    } else {
        // getAllByTestId throws an error if no elements are found; using querySelectorAll instead
        // const stepPreviews = getAllByTestId(document.body, testIds.stepPreview.link);

        const stepPreviews = document.body.querySelectorAll(
            `[data-testid="${testIds.stepPreview.link}"]`
        );
        expect(stepPreviews).to.have.length(componentsNumber);
    }
});

After(() => {
    testingGlobals.renderedComponents.stepsList = undefined;
});
