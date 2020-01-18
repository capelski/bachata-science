import React from 'react';
import { Stage } from '../types/stages';
import { StepPreview } from './step-preview';

interface StagesProps {
    stages: Stage[];
}

// tslint:disable-next-line:variable-name
export const Stages: React.FC<StagesProps> = props => (
    <div className="stages">
        {props.stages.map(stage => (
            <div className="stage" key={stage.id}>
                <h3>Fase {stage.id}</h3>
                <div className="steps-list">
                    {stage.steps.map(stepId => (
                        <StepPreview key={stepId} stepId={stepId} />
                    ))}
                </div>
            </div>
        ))}
    </div>
);
