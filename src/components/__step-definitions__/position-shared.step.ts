import { After, Given } from 'cucumber';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import sinon from 'sinon';
import { testingGlobals } from '../../__step-definitions__/testing-globals';
import * as positions from '../../data/positions';
import { Position, PositionId } from '../../types/positions';

export const positionIdSentence = /(a position with id|with position id) "(.*)"/;
Given(positionIdSentence, (_: string, positionId: PositionId) => {
    testingGlobals.data.position.id = positionId;
    testingGlobals.getPositionStub = sinon
        .stub(positions, 'getPosition')
        .returns(testingGlobals.data.position as Position);
});

export const positionNameSentence = /(a position with name|with position name) "(.*)"/;
Given(positionNameSentence, (_: string, name: string) => {
    testingGlobals.data.position.name = name;
});

Given('the positions defined in {string}', (fileName: string) => {
    const filePath = join(__dirname, '..', '..', '..', 'features', fileName);
    if (!existsSync(filePath)) {
        throw new Error(`Could not find ${fileName} (in ${filePath})`);
    }
    const fileContent = readFileSync(filePath, 'utf8');
    testingGlobals.data.positionsList = JSON.parse(fileContent);
    const getPositionStub = sinon.stub(positions, 'getPosition');

    testingGlobals.data.positionsList.forEach(position => {
        getPositionStub.withArgs(position.id!).returns(position as Position);
    });

    testingGlobals.getPositionStub = getPositionStub;
});

After(() => {
    testingGlobals.getPositionStub && testingGlobals.getPositionStub.restore();
    testingGlobals.data.position = {};
    testingGlobals.data.positionsList = [];
});
