import React from 'react';
import SearchComponent from './search/SearchComponent.jsx';
import CenterSpreadComponent from './centerSpread/CenterSpreadComponent.jsx';
import { getSpellByName } from '../services/spellService.js';
import './style.scss';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {spell: {}}
        this.searchSpell = this.searchSpell.bind(this);
    }

    searchSpell = searchInput => {
        getSpellByName(searchInput)
            .then(spell => {
                this.setState({ spell: spell })
            });
        };
    
    render() {
        const spellBook = [];
        return (
            <div classname="appContainer__">
                <div style={{textAlign: 'center'}}>
                    <h1>DnD Spell Book</h1>
                </div>
                <SearchComponent className="searchContainer__" searchSpell={this.searchSpell}/>
                <CenterSpreadComponent 
                    spell={this.state.spell}
                    spellBook={spellBook}
                    />
            </div>
        );
    }
}