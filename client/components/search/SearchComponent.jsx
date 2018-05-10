import React from 'react';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: ""}
    }


    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        })
        console.log(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input  type="text" 
                        placeholder="search for spells"
                        onChange={evt => this.updateInputValue(evt)} />
                <button type="submit" 
                        onClick={(e) => this.props.search(this.state.inputValue)}/> 
            </div>
        );

    }
}
