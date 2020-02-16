import React from 'react';
import { getStep } from '../data/steps';
import { StepId } from '../types/steps';
import { PositionPreview } from './position-preview';
import { StepPreview } from './step-preview';

export interface StepProps {
    stepId: StepId;
}

// TODO Test this component

export const Step: React.FC<StepProps> = props => {
    const step = getStep(props.stepId);

    return (
        <div className="step">
            <h3>Paso: {step.name}</h3>
            {step.description && <p>{step.description}</p>}
            <p>
                <b>Tiempos</b>: {step.ticks}
            </p>

            <h4>Posiciones</h4>
            {step.positions.map((position, index) =>
                typeof position === 'string' ? (
                    <div>
                        <PositionPreview key={index} positionId={position} />
                    </div>
                ) : (
                    <div key={index}>
                        <PositionPreview positionId={position.starting} /> =>{' '}
                        <PositionPreview positionId={position.ending} />
                    </div>
                )
            )}

            {step.dependencies && (
                <React.Fragment>
                    <h4>Requiere</h4>
                    {step.dependencies.map(dependencyId => (
                        <div key={dependencyId}>
                            <StepPreview stepId={dependencyId} />
                        </div>
                    ))}
                </React.Fragment>
            )}

            {step.videoFile && (
                <video className="video-resource" controls={true}>
                    <source
                        src={`/videos/${step.videoFile}.mp4?$modena=bachata-science`}
                        type="video/mp4"
                    />
                    No se puede reproducir el video en este navegador
                </video>
            )}
        </div>
    );
};
