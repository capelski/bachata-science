import React from 'react';
import { Link } from 'react-router-dom';
import { getStep, StepProps } from '../data/steps';

// tslint:disable-next-line:variable-name
export const StepPreview: React.FC<StepProps> = props => {
    const step = getStep(props.stepId);
    return (
        <Link className="step-preview" to={`/step/${step.id}?$modena=bachata-science`}>
            {step.name}
            {step.videoFile ? <noscript /> : <span> (🚫📹)</span>}
        </Link>
    );
};
