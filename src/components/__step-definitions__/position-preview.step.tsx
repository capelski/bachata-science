import { getByTestId, render } from '@testing-library/react';
import { expect } from 'chai';
import { After, Then, When } from 'cucumber';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { testIds } from '../../__step-definitions__/test-ids';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import { PositionPreview } from '../position-preview';
import { positionIdSentence } from './position-shared.step';

const renderPositionPreviewSentence = 'rendering a position preview component for the position';
When(renderPositionPreviewSentence, () => {
    if (!testingGlobals.data.position.id) {
        throw new Error(
            `You need to define a position id with "${positionIdSentence}" before using the rendering`
        );
    } else {
        testingGlobals.renderedComponents.positionPreview = render(
            <BrowserRouter>
                <PositionPreview positionId={testingGlobals.data.position.id} />
            </BrowserRouter>
        );
    }
});

Then('the position preview contains a link to {string}', (linkHref: string) => {
    if (!testingGlobals.renderedComponents.positionPreview) {
        throw new Error(
            `You need to render a position preview with "${renderPositionPreviewSentence}" before using this sentence`
        );
    } else {
        const linkHtmlElement = getByTestId(document.body, testIds.positionPreview.link);
        expect(linkHtmlElement.getAttribute('href')).to.equal(linkHref);
    }
});

Then('the position preview contains a link with text {string}', (linkText: string) => {
    if (!testingGlobals.renderedComponents.positionPreview) {
        throw new Error(
            `You need to render a position preview with "${renderPositionPreviewSentence}" before using this sentence`
        );
    } else {
        const linkHtmlElement = getByTestId(document.body, testIds.positionPreview.link);
        expect(linkHtmlElement.textContent).to.contain(linkText);
    }
});

After(() => {
    testingGlobals.renderedComponents.positionPreview = undefined;
});
