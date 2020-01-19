import { getAllByTestId, render } from '@testing-library/react';
import { expect } from 'chai';
import { After, Then, When } from 'cucumber';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { testIds } from '../../__step-definitions__/test-ids';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import { Position } from '../../types/positions';
import { PositionsList } from '../positions-list';

const renderPositionsListSentence = 'rendering a positions list component';
When(renderPositionsListSentence, () => {
    testingGlobals.renderedComponents.positionsList = render(
        <BrowserRouter>
            <PositionsList positions={testingGlobals.data.positionsList as Position[]} />
        </BrowserRouter>
    );
});

Then('the list contains {int} position preview components', (componentsNumber: number) => {
    if (!testingGlobals.renderedComponents.positionsList) {
        throw new Error(
            `You need to render a positions list with "${renderPositionsListSentence}" before using this sentence`
        );
    } else {
        const positionPreviews = getAllByTestId(document.body, testIds.positionPreview.link);
        expect(positionPreviews).to.have.length(componentsNumber);
    }
});

After(() => {
    testingGlobals.renderedComponents.positionsList = undefined;
});
