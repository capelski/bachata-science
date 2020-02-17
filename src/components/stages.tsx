import { getStep } from '../data/steps';
import { Stage } from '../types/stages';
import { StepsList } from './steps-list';
import React from 'react';

// TODO Test this component
interface StagesProps {
    stages: Stage[];
}

export const Stages: React.FC<StagesProps> = props => (
    <div className="stages">
        {props.stages.map(stage => (
            <div className="stage" key={stage.id}>
                <h3>Fase {stage.id}</h3>
                <StepsList steps={stage.steps.map(getStep)} />
            </div>
        ))}
    </div>
);
