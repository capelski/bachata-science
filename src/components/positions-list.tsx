import React from 'react';
import { PositionId } from '../data/positions';
import { PositionPreview } from './position-preview';

export const PositionsList = () => (
    <div className="positions-list">
        {Object.values(PositionId).map(positionId => <PositionPreview key={positionId} positionId={positionId} />)}
    </div>
);