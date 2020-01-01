import React from 'react';
import { Link } from 'react-router-dom';
import { PositionProps, getPosition } from '../data/positions';

export const PositionPreview = (props: PositionProps) => {
    const position = getPosition(props.positionId);
    return <Link className="position-preview" to={`/position/${position.id}`}>{position.name}</Link>;
};