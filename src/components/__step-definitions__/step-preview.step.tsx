import { testIds } from '../../__step-definitions__/test-ids';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import { StepPreview } from '../step-preview';
import { stepIdSentence } from './step-shared.step';
import { getByTestId, render } from '@testing-library/react';
import { expect } from 'chai';
import { After, Then, When } from 'cucumber';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const renderStepPreviewSentence = 'rendering a step preview component for the step';
When(renderStepPreviewSentence, () => {
    if (!testingGlobals.data.step.id) {
        throw new Error(
            `You need to define a step id with "${stepIdSentence}" before using the rendering`
        );
    } else {
        testingGlobals.renderedComponents.stepPreview = render(
            <BrowserRouter>
                <StepPreview stepId={testingGlobals.data.step.id} />
            </BrowserRouter>
        );
    }
});

Then('the step preview contains a link to {string}', (linkHref: string) => {
    if (!testingGlobals.renderedComponents.stepPreview) {
        throw new Error(
            `You need to render a step preview with "${renderStepPreviewSentence}" before using this sentence`
        );
    } else {
        const linkHtmlElement = getByTestId(document.body, testIds.stepPreview.link);
        expect(linkHtmlElement.getAttribute('href')).to.equal(linkHref);
    }
});

Then('the step preview contains a link with text {string}', (linkText: string) => {
    if (!testingGlobals.renderedComponents.stepPreview) {
        throw new Error(
            `You need to render a step preview with "${renderStepPreviewSentence}" before using this sentence`
        );
    } else {
        const linkHtmlElement = getByTestId(document.body, testIds.stepPreview.link);
        expect(linkHtmlElement.textContent).to.contain(linkText);
    }
});

After(() => {
    testingGlobals.renderedComponents.stepPreview = undefined;
});
