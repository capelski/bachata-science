import React from 'react';
import { Step } from './step';
import { steps } from './steps';

export const AllSteps = () => (
    <div className="all-steps">
        {steps.map((step, index) => <Step key={index} {...step} />)}
    </div>
);