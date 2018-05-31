import React from 'react';
import SearchComponent from './search/SearchComponent.jsx';
import CenterSpreadComponent from './centerSpread/CenterSpreadComponent.jsx';
import { getSpellByName } from '../services/spellService.js';
import { getPlayerByName } from '../services/playerService.js';
import './style.scss';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {spell: {}}
        this.searchSpell = this.searchSpell.bind(this);
    }

    searchSpell = searchInput => {
        console.log("trying to call dndTome from app.jsx");
        getPlayerByName("jonas");
        
        getSpellByName(searchInput)
            .then(spell => {
                console.log("inside app.jsx", spell);
                this.setState({ spell: spell })
            });
    };
    
    render() {
        const spellBook = [];
        return (
            <div className="appContainer__">
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