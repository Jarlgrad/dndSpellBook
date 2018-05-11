import React from 'react';
import SearchComponent from './search/SearchComponent.jsx';
import SpellBookComponent from './spellbook/SpellBookComponent.jsx';
import { getSpellByName } from '../services/spellservice.js';
import './style.scss';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {spell: {}}
        this.searchSpell = this.searchSpell.bind(this);
    }

    searchSpell(searchInput) {
        getSpellByName(searchInput)
            .then(spell => {
                console.log("return from spellservice", spell);
                this.setState({ spell: spell })
            });
        };
    
    render() {

        return (
            <div >
                <div style={{textAlign: 'center'}}>
                    <h1>DnD Spell Book</h1>
                </div>
                <SearchComponent search={this.searchSpell}/>
                <SpellBookComponent spell={this.state.spell}/>
            </div>
        );
    }
}