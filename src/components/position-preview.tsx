import React from 'react';
import { Link } from 'react-router-dom';
import { testIds } from '../__step-definitions__/test-ids';
import { getPosition } from '../data/positions';
import { PositionProps } from '../types/positions';

// tslint:disable-next-line:variable-name
export const PositionPreview: React.FC<PositionProps> = props => {
    const position = getPosition(props.positionId);
    return (
        <Link
            className="position-preview"
            to={`/position/${position.id}?$modena=bachata-science`}
            data-testid={testIds.positionPreview.link}
        >
            {position.name}
        </Link>
    );
};
