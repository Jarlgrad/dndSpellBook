import React from 'react';
import { getSpell } from '../../services/spellservice.js';
import SpellComponent from '../spell/SpellComponent.jsx';
import Spell from '../../services/models/spell.js';

export default class SpellBookComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { spell: {} }
    }

    componentWillMount() {
        getSpell().then(spell => new Spell(spell))
            .then(spell => {
                this.setState({
                    spell: spell
                });
                console.log(this.state);
            });
    };

    render() {

        const render = <SpellComponent spell={this.state.spell} />

        let components = [];
        if (this.state.spell.components){
            console.log("this.state.spell is active", this.state);
            components = this.state.spell.components
               .map( (c, index) => <span key={index}>{c}, </span> );
        }

        return (
            <div>
                <span> Spell Book of lives </span>
                <div> { render } </div>
                <div> Components: {components } </div>
                {/* <SpellComponent spell={this.state.spell} /> */}
            </div>
        );
    }
}