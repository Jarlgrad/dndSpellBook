import React from 'react';
import { getPlayerByName } from '../../services/playerService.js';
import login from '../../static/img/login.png'
import './playerComponent.scss';
import Modal from 'react-modal';
import SearchComponent from '../search/SearchComponent.jsx';

export default class PlayerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: {image: login},
            loginModalIsOpen: false,
        }
    }


    getPlayer = playerName => {
        getPlayerByName(playerName)
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

    openModal = () => {
        this.setState({loginModalIsOpen: true});
    }

    closeModal = () => {
        this.setState({loginModalIsOpen: false});
    }

    render() {
        let imageRender = {};
        if (this.state.player.image) {
            
            imageRender = (
                <div className="player__">
                    <span>{this.state.player.playerName}</span>
                    <img src={this.state.player.image} 
                         onClick={this.openModal}/>
                </div>
            );
        }

        const loginModal = () => {
            return ( 
                <Modal className="loginModal__"
                    isOpen={this.state.loginModalIsOpen}
                    onRequestClose={this.closeModal} >
                    <SearchComponent  placeholder="enter player name" onSubmit={this.getPlayer} />
                </Modal>
            );
        }

        return(
                <div>
                    { loginModal() }
                    {imageRender}
                </div>
        );
    }
}