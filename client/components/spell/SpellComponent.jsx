import React from 'react';

const SpellComponent = ({name}) => (
    
    // console.log(this.state);
    // let name =  "Acid Arrow";
    <div>
        <span> {name} </span>
        <h4> Class Required </h4>
        <h4> Level Required </h4>
        <h4> Damage Type </h4>
        <h4> Damage </h4>
    </div>
);

export default SpellComponent;