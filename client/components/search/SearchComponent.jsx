import React from 'react';
import SearchGlass from '../../static/img/search.png';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: "", inputFieldPlaceholder: this.props.placeholder}
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    buildQueryString() {
        let searchTerms = this.state.inputValue.split(" ");
        let queryString = "";
        searchTerms.forEach((w, index) => { 
            let word = w.charAt(0).toUpperCase() + w.slice(1);
            if (index < searchTerms.length-1) {
                word += "+";
            }
            queryString += word;
        });
        return queryString;
    }

    submitSearch = (e) => {
        if (e.key == "Enter" || e.type == "click"){
            const queryString = this.buildQueryString();
            this.props.onSubmit(queryString);
        } 
    }

    render() {

        return (
            <div>
                <input  type="text" 
                        placeholder={this.state.inputFieldPlaceholder}
                        onChange={this.updateInputValue} 
                        onKeyUp={this.submitSearch} />
                <img    src={SearchGlass} 
                        onClick={this.submitSearch} />
            </div>
        );
    }
}
