import React from 'react';

export interface StepProps {
    name: string;
    description?: string;
}

export const Step = (props: StepProps) => (
    <div className="step">
        <h3>{props.name}</h3>
        <div className="thumbnail">🎥💃</div>
        <p>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}</p>
    </div>
);