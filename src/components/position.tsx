import React from 'react';
import { getPosition, PositionProps } from '../data/positions';

export const Position = (props: PositionProps) => {
    const position = getPosition(props.positionId);

    return (
        <div className="position">
            <h3>Posicion: {position.name}</h3>
            <div className="thumbnail">🎥💃</div>
            <p>{position.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}</p>
        </div>
    );
};