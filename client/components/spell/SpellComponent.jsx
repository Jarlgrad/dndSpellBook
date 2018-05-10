import React from 'react';
import Spell from '../../services/models/spell';

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
            components = this.props.spell.components
               .map((c, index) => <span key={index}>{c}, </span> );
            spell.components = components;
        }
        
        if (this.props.spell.classes){
            let classes = this.props.spell.classes
                .map((c, index) => 
                <span key={index} onClick={(e) => this.searchClass(c)}>{c.name}</span>)
            spell.classes = classes;
        }
        return (
    
        <div>
            <h4> Name: {spell.name} </h4>
            <ul>
                <li> Level required: {spell.level} </li>
                <li> Class: </li>
                <li> Range: {spell.range} </li>
                <li> Components: {spell.components} </li>
                <li> {spell.material} </li>
                <li> Class: {spell.classes} </li>
            </ul>
        </div>
        )
    }
};