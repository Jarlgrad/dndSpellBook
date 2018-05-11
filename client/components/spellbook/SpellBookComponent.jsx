import React from 'react';
import './spellBookComponent.scss';

export default class SpellBookComponent extends React.Component {

    render() {
        
        const spellList = [
            { name: "spell 1" }, 
            { name: "spell 2" }
        ];

        let renderSpellList = spellList
            .map((s, index) => <div key={index}> <span className="spelList__spell" > {index} {s.name} </span> </div> )
        
        return (
            <div> 
                {renderSpellList}
            </div>
        );
    }
}