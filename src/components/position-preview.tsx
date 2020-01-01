import React from 'react';
import { Link } from 'react-router-dom';
import { Position } from '../data/positions';

export const PositionPreview = (props: Position) => (
    <div className="position-preview">
        <h3><Link to={`/position/${props.id}`}>{props.name}</Link></h3>
    </div>
);