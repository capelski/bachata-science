import { testIds } from '../__step-definitions__/test-ids';
import { getPosition } from '../data/positions';
import { PositionId } from '../types/positions';
import React from 'react';
import { Link } from 'react-router-dom';

export interface PositionPreviewProps {
    positionId: PositionId;
}

export const PositionPreview: React.FC<PositionPreviewProps> = props => {
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
