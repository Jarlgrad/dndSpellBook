import React from 'react';
import './spellBookComponent.scss';

export default class SpellBookComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { spellBook: props.spellBook }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.spellBook !== prevState.spellBook){
            return {spellBook: nextProps.spellBook};
        }
        return null;
    }

    render() {
        let renderSpellBook = this.state.spellBook
            .map((s, index) => <div key={index}> <span className="spellBook__spell" > {index} {s.name} </span> </div> )
        
        return (
            <div> 
                {renderSpellBook}
            </div>
        );
    }
}