import React from 'react';
import { StepPreview } from './step-preview';
import { steps } from '../data/steps';

export const StepsList = () => (
    <div className="steps-list">
        {steps.map(step => <StepPreview key={step.id} {...step} />)}
    </div>
);