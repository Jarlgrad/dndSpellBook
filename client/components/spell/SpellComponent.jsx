import React from 'react';
import Spell from '../../services/viewModels/spell';
import './spellComponent.scss';

export default class SpellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spell: props.spell}
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
        let spell = {};
        if (this.state.spell.name){
            spell = new Spell(this.props.spell);
        }

        const handleClickOnPlus = () => {
            console.log("so you want to add the spell to your book?");
        }

        return (
    
        <div className="spell__">
            <div className="spell__header">
                <span> Spell: {spell.name} </span>
                <span className="plus" onClick={(e) => handleClickOnPlus()}> + </span>
            </div>
            <ul>
                <li> Level required: {spell.level} </li>
                <li> Class: {spell.classes} </li>
                <li> School: {spell.school} </li>
                <li> Range: {spell.range} </li>
                <li> Components: {spell.components} </li>
                <li> Material: {spell.material} </li>
                <li> SubClasses: {spell.subClasses} </li>
            </ul>
        </div>
        )
    }
};