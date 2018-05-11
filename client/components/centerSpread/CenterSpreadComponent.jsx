import React from 'react';
import SpellComponent from '../spell/SpellComponent.jsx';
import SpellBookComponent from '../spellbook/SpellBookComponent.jsx';
import './centerSpreadComponent.scss';
import empire from '../../static/img/aw_rymdimperiet.png';

export default class CenterSpreadComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            spell: props.spell,
            spellBook: props.spellBook
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.spell !== prevState.spell){
            return {spell: nextProps.spell};
        }
        return null;
    }

    
    render() {


        return (
            <div className="centerSpread">
                <SpellComponent 
                    className="leftPage" 
                    spell={this.state.spell} />
                <div className="rightPage"> 
                <SpellBookComponent spellBook={this.state.spellBook}/>
                </div>
            </div>
        );
    }
}