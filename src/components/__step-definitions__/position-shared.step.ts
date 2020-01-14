import { After, Given } from 'cucumber';
import sinon from 'sinon';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import * as positions from '../../data/positions';

export const positionIdSentence = /(a position with id|with position id) "(.*)"/;
Given(positionIdSentence, (_: string, positionId: positions.PositionId) => {
    testingGlobals.position.id = positionId;
    testingGlobals.getPositionStub = sinon
        .stub(positions, 'getPosition')
        .returns(testingGlobals.position as positions.Position);
});

export const positionNameSentence = /(a position with name|with position name) "(.*)"/;
Given(positionNameSentence, (_: string, name: string) => {
    testingGlobals.position.name = name;
});

After(() => {
    testingGlobals.getPositionStub && testingGlobals.getPositionStub.restore();
    testingGlobals.position = {};
});
