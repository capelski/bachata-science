import React from 'react';
import { Step as IStep } from './steps';

export const Step = (props: IStep) => (
    <div className="step">
        <h3>{props.name}</h3>
        <div className="thumbnail">🎥💃</div>
        <p>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat interdum dictum. Suspendisse iaculis vel purus nec euismod. Donec iaculis dictum orci et acu...'}</p>
    </div>
);