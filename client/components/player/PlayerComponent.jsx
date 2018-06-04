import React from 'react';
import CharacterImageComponent from './CharacterImageComponent.jsx';
import { getPlayerByName } from '../../services/playerService.js';

export default class PlayerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    componentDidMount() {
        const player = getPlayerByName("jonas");
        var req = require.context("../../static/img/characters", false, /\.png/);
        const images = this.importAllCharacters(req);
        const imageSrc = `${this.state.image}.png`;
        this.setState({images: images, src: imageSrc});   
    }


    render() {

        return(
                <CharacterImageComponent image="002-kraken"/>
        );
    }
}