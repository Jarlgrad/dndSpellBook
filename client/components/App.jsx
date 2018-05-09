import React from 'react';
import SearchComponent from './search/SearchComponent.jsx';
import SpellComponent from './spell/SpellComponent.jsx';
import Spell from '../services/spellservice.js';
import './style.scss';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {spell: {}}
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
            <div >
                <div style={{textAlign: 'center'}}>
                    <h1>DnD Spell Book</h1>
                </div>
                <SearchComponent className="search__"/>
                <SpellComponent name={this.state.spell.name} class />
            </div>
        );
    }
}