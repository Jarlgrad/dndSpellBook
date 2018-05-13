import React from 'react';
import Spell from '../../services/viewModels/spell';
import './spellComponent.scss';

export default class SpellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spell: props.spell, spellBook: props.spellBook}
        this.searchClass = this.searchClass.bind(this);
    }
    
    searchClass (classToSearch) {
        alert(`You can learn more about ${classToSearch.name}s at ${classToSearch.url}`)
    };

    

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.spell !== prevState.spell){
            return {spell: nextProps.spell};
        }
        return null;
    }
    
    render() {
        const { spell, spellBook } = this.state;

        let renderedSpell = {};
        if (Object.keys(spell).length !== 0){
            renderedSpell = new Spell(spell);
        }

        const handleClickOnPlus = () => {
            this.props.addSpell(this.state.spell);
        }

        return (
    
        <div className="spell__">
            <div className="spell__header">
                <span> Spell: {spell.name} </span>
                <span className="plus" onClick={(e) => handleClickOnPlus()}> + </span>
            </div>
            <div className="spell__body">
                <ul>
                    <li> Level required: {renderedSpell.level} </li>
                    <li> Class: {renderedSpell.classes} </li>
                    <li> School: {renderedSpell.school} </li>
                    <li> Range: {renderedSpell.range} </li>
                    <li> Components: {renderedSpell.components} </li>
                    <li> Material: {renderedSpell.material} </li>
                    <li> SubClasses: {renderedSpell.subClasses} </li>
                    <li> Description: {renderedSpell.description} </li>
                </ul>
            </div>
        </div>
        )
    }
};