import React from 'react';
import { getPlayerByName } from '../../services/playerService.js';
import mushroom from '../../static/img/characters/008-mushroom.png'
import SearchComponent from '../search/SearchComponent.jsx';
import './playerComponent.scss';

export default class PlayerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {player: {image: mushroom}}
    }


    getPlayer = playerName => {
        getPlayerByName("jonas")
            .then(player => {
                console.log("player is in playercomponent", player);
                player.image = this.state.images[`${player.image}.png`];
                this.setState({player: player});
            });
    }
    componentDidMount() {
        
        var req = require.context("../../static/img/characters", false, /\.png/);
        const images = this.importAllCharacters(req);

        this.setState({images: images});
    }

    importAllCharacters = r => {
        let images = [];
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    render() {
        let imageRender = {};
        if (this.state.player.image) {
            
            imageRender = (
                <div className="player__">
                    <span>{this.state.player.playerName}</span>
                    <img src={this.state.player.image} />
                </div>
            );
        }

        return(
                <div>
                    <SearchComponent className="searchContainer__" onSubmit={this.getPlayer}/>

                    {imageRender}
                </div>
        );
    }
}