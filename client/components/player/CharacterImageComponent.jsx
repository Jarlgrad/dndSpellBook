import React from 'react';
import imagesourcetest from '../../static/img/characters/002-kraken.png';

export default class CharacterImageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {image: props.image, imageSource: {}};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.image !== prevState.image)
            return {image: nextProps.image};
        
        return null;
    }

    importAllCharacters = r => {
        let images = [];
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        console.log(images);
        return images;
        // return r.keys().map(r);
    }

    render() {


        if (this.state.images) {
            // const imageSource = `${this.state.image}.png`

            // this.setState({imageSource: imageSource});

            this.image = this.state.images[this.state.src];
            console.log("constructed image", this.image);
            

        }
        // var cntxt = require.context('../../static/img/characters', false, '/\.png/');
        // const images = importAllCharacters(cntxt);

        return(
            <div>
                <img src={imagesourcetest} style={{width: '30px', height: '30px'}} />
                <img src={this.state.images[this.state.src]} style={{width: '30px', height: '30px'}} />
            </div>
        );
    }
}



// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('./images', false, '/\.png/'));

// <img src={images['0.png']} />