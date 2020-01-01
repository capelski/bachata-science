import React from 'react';
import { PositionPreview } from './position-preview';
import { positions } from '../data/positions';

export const PositionsList = () => (
    <div className="positions-list">
        {positions.map(position => <PositionPreview key={position.id} {...position} />)}
    </div>
);