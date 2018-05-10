import React from 'react';
import { getSpell } from '../../services/spellservice.js';
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
                // console.log(this.state);
            });
    };

    render() {
        let render = {};
        if(this.state.spell)
            render = <SpellComponent spell={this.state.spell} />;

        return (
            <div>
                <span> Spell Book of lives </span>
                <div> { render } </div>
            </div>
        );
    }
}