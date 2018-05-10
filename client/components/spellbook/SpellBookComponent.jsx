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

        return (
            <div>
                <span> Spell Book of lives </span>
                <div> { render } </div>
            </div>
        );
    }
}