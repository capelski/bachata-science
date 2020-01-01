import React from 'react';
import { useParams } from 'react-router-dom';
import { PositionId, getPosition } from '../data/positions';

export const Position = () => {
    const { positionId } = useParams();
    const position = getPosition(positionId as PositionId);

    return (
        <div className="position">
            <h3>{position.name}</h3>
            <div className="thumbnail">🎥💃</div>
            <p>{position.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}</p>
        </div>
    );
};