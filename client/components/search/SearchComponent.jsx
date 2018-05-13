import React from 'react';
import SearchGlass from '../../static/img/search.png';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: ""}
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
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

    submitSearch = (e) => {
        if (e.key == "Enter" || e.type == "click"){
            const queryString = this.buildQueryString();
            this.props.searchSpell(queryString);
        } 
    }

    render() {

        return (
            <div>
                <input  type="text" 
                        placeholder="search for spells"
                        onChange={this.updateInputValue} 
                        onKeyUp={this.submitSearch} />
                <img    src={SearchGlass} 
                        onClick={this.submitSearch} />
            </div>
        );
    }
}
