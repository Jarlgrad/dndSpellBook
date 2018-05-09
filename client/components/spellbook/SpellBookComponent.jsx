import React from 'react';
import { Spell, getSpell } from '../../services/spellservice.js';
import SpellComponent from '../spell/SpellComponent.jsx';

export default class SpellBookComponent extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { spell: {} }
    }

    componentWillMount() {
        getSpell()
            .then(spell => {

                this.setState({
                    spell: spell
                });

                return spell;
            });
            // .then(spell => spell.map(
            //     name = spell.name
            // ));

        // console.log("after fetched", fetched) ;
        // this.setState({
        //     spell: fetched
        // });

    }

    render() {
        return (
            <div>
                <span> Spell Book of lives </span>
                <SpellComponent spell={this.state.spell} />
            </div>
        );
    }
}