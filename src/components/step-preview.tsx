import React from 'react';
import { Link } from 'react-router-dom';
import { getStep, StepProps } from '../data/steps';

export const StepPreview = (props: StepProps) => {
    const step = getStep(props.stepId);
    return <Link className="step-preview" to={`/step/${step.id}?$modena=bachata-science`}>{step.name}{step.videoFile ? <noscript /> : <span> (🚫📹)</span>}</Link>;
};