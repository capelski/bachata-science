import React from 'react';
import { useParams } from 'react-router-dom';
import { StepId, getStep } from '../data/steps';

export const Step = () => {
    const { stepId } = useParams();
    const step = getStep(stepId as StepId);

    return (
        <div className="step">
            <h3>{step.name}</h3>
            <div className="thumbnail">🎥💃</div>
            <p>{step.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}</p>
        </div>
    );
};