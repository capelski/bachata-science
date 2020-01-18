import React from 'react';
import { Position } from '../types/positions';
import { PositionPreview } from './position-preview';
import { parseSearchText } from './shared';

interface PositionsListProps {
    positions: Position[];
}

// tslint:disable-next-line:variable-name
export const PositionsList: React.FC<PositionsListProps> = props => {
    const [positions, setPositions] = React.useState(props.positions);

    // TODO Debounce
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = event.target.value && parseSearchText(event.target.value);
        const filteredSteps = filter
            ? props.positions.filter(
                  position => parseSearchText(position.name).indexOf(filter) > -1
              )
            : props.positions;

        setPositions(filteredSteps);
    };

    return (
        <React.Fragment>
            Buscar: <input type="text" onChange={filterChange} />
            <div className="positions-list">
                {positions.map(position => (
                    <PositionPreview key={position.id} positionId={position.id} />
                ))}
            </div>
        </React.Fragment>
    );
};
