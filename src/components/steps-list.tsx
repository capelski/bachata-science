import React from 'react';
import { StepId } from '../data/steps';
import { StepPreview } from './step-preview';

// tslint:disable-next-line:variable-name
export const StepsList = () => (
    <div className="steps-list">
        {Object.values(StepId).map(stepId => (
            <StepPreview key={stepId} stepId={stepId} />
        ))}
    </div>
);
