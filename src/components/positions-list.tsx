import React from 'react';
import { testIds } from '../__step-definitions__/test-ids';
import { Position } from '../types/positions';
import { PositionPreview } from './position-preview';
import { parseSearchText } from './shared';

interface PositionsListProps {
    positions: Position[];
}

export const PositionsList: React.FC<PositionsListProps> = props => {
    const [positions, setPositions] = React.useState(props.positions);

    // TODO Debounce
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = parseSearchText(event.target.value);
        const filteredSteps = props.positions.filter(
            position => parseSearchText(position.name).indexOf(filter) > -1
        );
        setPositions(filteredSteps);
    };

    return (
        <React.Fragment>
            Buscar:{' '}
            <input type="text" onChange={filterChange} data-testid={testIds.positionsList.filter} />
            <div className="positions-list">
                {positions.length === 0 && (
                    <div
                        className="no-results-found"
                        data-testid={testIds.positionsList.noPositionsFound}
                    >
                        Ninguna posición coincide con el texto que buscas
                    </div>
                )}
                {positions.map(position => (
                    <PositionPreview key={position.id} positionId={position.id} />
                ))}
            </div>
        </React.Fragment>
    );
};
