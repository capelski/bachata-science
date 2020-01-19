import React from 'react';
import { testIds } from '../__step-definitions__/test-ids';
import { Step } from '../types/steps';
import { parseSearchText } from './shared';
import { StepPreview } from './step-preview';

interface StepsListProps {
    steps: Step[];
}

// tslint:disable-next-line:variable-name
export const StepsList: React.FC<StepsListProps> = props => {
    const [steps, setSteps] = React.useState(props.steps);

    // TODO Debounce
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = event.target.value && parseSearchText(event.target.value);
        const filteredSteps = filter
            ? props.steps.filter(step => parseSearchText(step.name).indexOf(filter) > -1)
            : props.steps;

        setSteps(filteredSteps);
    };

    return (
        <React.Fragment>
            Buscar:{' '}
            <input type="text" onChange={filterChange} data-testid={testIds.stepsList.filter} />
            <div className="steps-list">
                {steps.map(step => (
                    <StepPreview key={step.id} stepId={step.id} />
                ))}
            </div>
        </React.Fragment>
    );
};
