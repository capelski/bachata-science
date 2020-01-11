import React from 'react';
import { Link } from 'react-router-dom';
import { getPosition, PositionProps } from '../data/positions';

// tslint:disable-next-line:variable-name
export const PositionPreview: React.FC<PositionProps> = props => {
    const position = getPosition(props.positionId);
    return (
        <Link className="position-preview" to={`/position/${position.id}?$modena=bachata-science`}>
            {position.name}
        </Link>
    );
};
