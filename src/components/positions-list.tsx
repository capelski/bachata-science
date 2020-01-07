import React from 'react';
import { PositionId } from '../data/positions';
import { PositionPreview } from './position-preview';

// tslint:disable-next-line:variable-name
export const PositionsList = () => (
    <div className="positions-list">
        {Object.values(PositionId).map(positionId => (
            <PositionPreview key={positionId} positionId={positionId} />
        ))}
    </div>
);
