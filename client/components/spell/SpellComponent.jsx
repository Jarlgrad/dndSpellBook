import React from 'react';
import Spell from '../../services/viewModels/spell';

export default class SpellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.searchClass = this.searchClass.bind(this);
    }
    
    searchClass (classToSearch) {
        alert(`You can learn more about ${classToSearch.name}s at ${classToSearch.url}`)
    };
    
    render() {
        let spell = {};
        let components = [];

        if (this.props.spell.components){
            
            console.log("before rendering components", this.props.spell);
            spell = new Spell(this.props.spell);
            console.log("rendered components", spell);
        }

        return (
    
        <div>
            <h4> Spell: {spell.name} </h4>
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