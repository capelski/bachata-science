import React from 'react';
import { stages } from '../data/stages';
import { StepPreview } from './step-preview';

// tslint:disable-next-line:variable-name
export const Stages: React.FC = () => (
    <div className="stages">
        {stages.map(stage => (
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
