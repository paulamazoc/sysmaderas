import React from 'react';
import './title.css';

const Title = props => (
    <h2 className="title" style={{color: props.fontColor}}>{props.text}</h2>
);

export default Title;