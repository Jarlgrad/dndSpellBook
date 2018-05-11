import React from 'react';
import SearchGlass from '../../static/img/search.png';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: ""}
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        })
    }

    buildQueryString() {
        let wordArray = this.state.inputValue.split(" ");
        let queryString = "";
        wordArray.forEach((w, index) => { 
            let word = w.charAt(0).toUpperCase() + w.slice(1);
            if (index < wordArray.length-1) {
                word += "+";
            }
            queryString += word;
        });
        return queryString;
    }

    onSearchButtonClick(e) {
        const queryString = this.buildQueryString();
        this.props.search(queryString);
    }

    render() {
        console.log(SearchGlass);
        return (
            <div>
                <input  type="text" 
                        placeholder="search for spells"
                        onChange={e => this.updateInputValue(e)} />
                <img    src={SearchGlass} 
                        onClick={e => this.onSearchButtonClick(e)} />
            </div>
        );
    }
}
