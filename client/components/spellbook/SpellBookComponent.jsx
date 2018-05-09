import React from 'react';
import Spell from '../../services/spellservice.js';
import SpellComponent from '../spell/SpellComponent.jsx';

export default class SpellBookComponent extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { spell: {} }
    }

    componentWillMount() {
        let spell;
        spell = {
            name: "Acid Arrow"
        };

        this.setState({
            spell: Spell()
        });
    }

    render() {
        return (
            <div>
                <span> Spell Book of lifes </span>
                <SpellComponent spell={this.state.spell} />
            </div>
        );
    }
}