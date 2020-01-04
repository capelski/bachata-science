import React from 'react';
import { getStep, StepProps } from '../data/steps';
import { PositionPreview } from './position-preview';

export const Step = (props: StepProps) => {
    const step = getStep(props.stepId);

    return (
        <div className="step">
            <h3>Paso: {step.name}</h3>
            {step.videoFile && 
                <video className="video-resource" controls>
                    <source src={`/videos/${step.videoFile}.mp4?$modena=bachata-science`} type="video/mp4" />
                    No se puede reproducir el video en este navegador
                </video>
            }
            <p>Tiempos: {step.ticks}</p>
            <p>{step.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}</p>

            <h4>Posiciones</h4>
            {step.positions.map((position, index) => typeof position === 'string' ?
                <div><PositionPreview key={index} positionId={position} /></div> :
                <div key={index}>
                    <PositionPreview positionId={position.starting} /> => <PositionPreview positionId={position.ending} />
                </div>
            )}
        </div>
    );
};