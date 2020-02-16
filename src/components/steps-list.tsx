import React from 'react';
import { testIds } from '../__step-definitions__/test-ids';
import { Step } from '../types/steps';
import { parseSearchText } from './shared';
import { StepPreview } from './step-preview';

interface StepsListProps {
    renderSearcher?: boolean;
    steps: Step[];
}

export const StepsList: React.FC<StepsListProps> = props => {
    const [steps, setSteps] = React.useState(props.steps);

    // TODO Debounce
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filter = parseSearchText(event.target.value);
        const filteredSteps = props.steps.filter(
            step => parseSearchText(step.name).indexOf(filter) > -1
        );
        setSteps(filteredSteps);
    };

    return (
        <React.Fragment>
            {props.renderSearcher && (
                <React.Fragment>
                    Buscar:{' '}
                    <input
                        type="text"
                        onChange={filterChange}
                        data-testid={testIds.stepsList.filter}
                    />
                </React.Fragment>
            )}
            <div className="steps-list">
                {steps.length === 0 && (
                    <div className="no-results-found" data-testid={testIds.stepsList.noStepsFound}>
                        Ningún paso coincide con el texto que buscas
                    </div>
                )}
                {steps.map(step => (
                    <StepPreview key={step.id} stepId={step.id} />
                ))}
            </div>
        </React.Fragment>
    );
};
