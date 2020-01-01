import React from 'react';
import { Link } from 'react-router-dom';
import { Step } from '../data/steps';

export const StepPreview = (props: Step) => (
    <div className="step-preview">
        <h3><Link to={`/step/${props.id}`}>{props.name}</Link></h3>
    </div>
);