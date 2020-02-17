import { testIds } from '../../__step-definitions__/test-ids';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import { Position } from '../../types/positions';
import { PositionsList } from '../positions-list';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import { expect } from 'chai';
import { After, Then, When } from 'cucumber';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const renderPositionsListSentence = 'rendering a positions list component';
When(renderPositionsListSentence, () => {
    testingGlobals.renderedComponents.positionsList = render(
        <BrowserRouter>
            <PositionsList positions={testingGlobals.data.positionsList as Position[]} />
        </BrowserRouter>
    );
});

When('writing {string} in the positions filter', (filterText: string) => {
    if (!testingGlobals.renderedComponents.positionsList) {
        throw new Error(
            `You need to render a positions list with "${renderPositionsListSentence}" before using this sentence`
        );
    } else {
        const filterElement = getByTestId(document.body, testIds.positionsList.filter);
        fireEvent.change(filterElement, { target: { value: filterText } });
    }
});

Then('the list contains {int} position preview components', (componentsNumber: number) => {
    if (!testingGlobals.renderedComponents.positionsList) {
        throw new Error(
            `You need to render a positions list with "${renderPositionsListSentence}" before using this sentence`
        );
    } else {
        // getAllByTestId throws an error if no elements are found; using querySelectorAll instead
        // const positionPreviews = getAllByTestId(document.body, testIds.positionPreview.link);

        const positionPreviews = document.body.querySelectorAll(
            `[data-testid="${testIds.positionPreview.link}"]`
        );
        expect(positionPreviews).to.have.length(componentsNumber);
    }
});

Then('a no positions found message is displayed in the list', () => {
    if (!testingGlobals.renderedComponents.positionsList) {
        throw new Error(
            `You need to render a positions list with "${renderPositionsListSentence}" before using this sentence`
        );
    } else {
        const noResultsFoundMessage = getByTestId(
            document.body,
            testIds.positionsList.noPositionsFound
        );
        expect(noResultsFoundMessage).not.to.equal(undefined);
    }
});

After(() => {
    testingGlobals.renderedComponents.positionsList = undefined;
});
