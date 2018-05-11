import React from 'react';
import SpellComponent from '../spell/SpellComponent.jsx';

export default class SpellBookComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { spell: props.spell}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.spell !== prevState.spell){
            return {spell: nextProps.spell};
        }
        return null;
    }

    render() {        
        let render = "";
        if(this.state.spell){
            render = <SpellComponent spell={this.state.spell} />;
        }

        return (
            <div>
                <span> Spell Book of lives </span>
                <div> { render } </div>
            </div>
        );
    }
}