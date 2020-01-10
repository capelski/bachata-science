import React from 'react';
import { steps as allSteps } from '../data/steps';
import { parseSearchText } from './shared';
import { StepPreview } from './step-preview';

// tslint:disable-next-line:variable-name
export const StepsList = () => {
    const [steps, setSteps] = React.useState(allSteps);

    // TODO Debounce
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = event.target.value && parseSearchText(event.target.value);
        const filteredSteps = filter
            ? allSteps.filter(step => parseSearchText(step.name).indexOf(filter) > -1)
            : allSteps;

        setSteps(filteredSteps);
    };

    return (
        <React.Fragment>
            Buscar: <input type="text" onChange={filterChange} />
            <div className="steps-list">
                {steps.map(step => (
                    <StepPreview key={step.id} stepId={step.id} />
                ))}
            </div>
        </React.Fragment>
    );
};
