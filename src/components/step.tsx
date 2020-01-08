import React from 'react';
import { getStep, StepProps } from '../data/steps';
import { PositionPreview } from './position-preview';

// tslint:disable-next-line:variable-name
export const Step = (props: StepProps) => {
    const step = getStep(props.stepId);

    return (
        <div className="step">
            <h3>Paso: {step.name}</h3>
            {step.videoFile && (
                <video className="video-resource" controls={true}>
                    <source
                        src={`/videos/${step.videoFile}.mp4?$modena=bachata-science`}
                        type="video/mp4"
                    />
                    No se puede reproducir el video en este navegador
                </video>
            )}
            <p>
                <b>Tiempos</b>: {step.ticks}
            </p>
            {step.description && <p>{step.description}</p>}

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
        </div>
    );
};
