import React from 'react';
import { positions as allPositions } from '../data/positions';
import { PositionPreview } from './position-preview';
import { parseSearchText } from './shared';

// tslint:disable-next-line:variable-name
export const PositionsList: React.FC = () => {
    const [positions, setPositions] = React.useState(allPositions);

    // TODO Debounce
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = event.target.value && parseSearchText(event.target.value);
        const filteredSteps = filter
            ? allPositions.filter(position => parseSearchText(position.name).indexOf(filter) > -1)
            : allPositions;

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
