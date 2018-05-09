import React from 'react';

const SpellComponent = ({spell}) => (
    

    <div>
        <h4> Name: {spell.name} </h4>
        <ul>
            <li> Level required: {spell.level} </li>
            <li> </li>
            <li> Range: {spell.range} </li>
            <li> {spell.desc} </li>
        </ul>
    </div>
);

let components = "W";

export default SpellComponent;