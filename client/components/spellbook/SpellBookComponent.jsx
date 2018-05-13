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

    selectSpell = (spell) => {
        this.props.displaySpell(spell);
    }

    render() {
        const spellBook = this.state.spellBook;
        
        let renderSpellBook = spellBook
            .map((s, index) => 
            <div key={index}> 
                <span onClick={(e) => this.selectSpell(s)} className="spellBook__spell"> 
                    {index} {s.name} 
                </span> 
            </div> 
        );
        
        return (
            <div> 
                <h4> My Spell Book </h4>
                {renderSpellBook}
            </div>
        );
    }
}