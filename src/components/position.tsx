import { getPosition } from '../data/positions';
import { getInputSteps, getOutputSteps, getPositionSteps } from '../data/steps';
import { PositionId } from '../types/positions';
import { StepPreview } from './step-preview';
import React from 'react';

export interface PositionProps {
    positionId: PositionId;
}

// TODO Test this component

export const Position: React.FC<PositionProps> = props => {
    const position = getPosition(props.positionId);
    const inputSteps = getInputSteps(props.positionId);
    const outputSteps = getOutputSteps(props.positionId);
    const positionSteps = getPositionSteps(props.positionId);

    return (
        <div className="position">
            <h3>Posición: {position.name}</h3>

            {position.imageFile && (
                <img
                    className="image-resource"
                    src={`/images/${position.imageFile}?$modena=bachata-science`}
                />
            )}

            {position.description && <p>{position.description}</p>}

            <h4>Pasos de entrada</h4>
            {inputSteps.length > 0 ? (
                inputSteps.map(step => (
                    <div key={step.id}>
                        <StepPreview stepId={step.id} />
                    </div>
                ))
            ) : (
                <div>No hay pasos de entrada para esta posición</div>
            )}

            <h4>Pasos en posición</h4>
            {positionSteps.length > 0 ? (
                positionSteps.map(step => (
                    <div key={step.id}>
                        <StepPreview stepId={step.id} />
                    </div>
                ))
            ) : (
                <div>No hay pasos en esta posición</div>
            )}

            <h4>Pasos de salida</h4>
            {outputSteps.length > 0 ? (
                outputSteps.map(step => (
                    <div key={step.id}>
                        <StepPreview stepId={step.id} />
                    </div>
                ))
            ) : (
                <div>No hay pasos de salida para esta posición</div>
            )}
        </div>
    );
};
