import React from 'react';
import Spell from '../../services/viewModels/spell';
import Modal from 'react-modal';
import './spellComponent.scss';

Modal.setAppElement("#root");

export default class SpellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spell: props.spell,
            spellBook: props.spellBook,
            descriptionModalIsOpen: false,
        }
        this.searchClass = this.searchClass.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    searchClass (classToSearch) {
        alert(`You can learn more about ${classToSearch.name}s at ${classToSearch.url}`)
    };

    validateSpell(spell) {
        if(Object.keys(spell).length !== 0){
            let islearned = this.props.spellBook.find(s => s.name === this.props.spell.name);
            if (!islearned) return true;
        }
        return false;
    };
    
    addSpell = (spell) => {
        if(Object.keys(spell).length !== 0)
            this.props.addSpell(spell);
    };

    PlusButton = button => {
        return <span className="plus" onClick={(e) => this.addSpell(button.spell)}> + </span>;
    }

    openModal = () => {
        this.setState({ descriptionModalIsOpen: true })
    };

    closeModal = () => {
        this.setState({ descriptionModalIsOpen: false })
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.spell !== prevState.spell)
            return {spell: nextProps.spell};
        
        return null;
    }
    
    render() {
        const { spell, spellBook, descriptionModalIsOpen } = this.state;
        
        const isNewSpell = this.validateSpell(spell);

        let renderedSpell = {};
        if (Object.keys(spell).length !== 0)
            renderedSpell = new Spell(spell, this.searchClass);
        
        const spellDescriptionModal = () => {
            return ( 
                <Modal
                    isOpen={descriptionModalIsOpen}
                    onRequestClose={this.closeModal} >
                    <span> {renderedSpell.description} </span>
                </Modal>
            );
        }
        
        return (
        <div>
        { Object.keys(spell).length !== 0 &&
            <div className="spell__">

                { spellDescriptionModal() }

                <div className="spell__header">
                    {spell.name}
                    {isNewSpell &&
                        <this.PlusButton spell={spell}/>
                    }
                </div>
                <div className="spell__body">
                    <span> Level required: {renderedSpell.level} </span>
                    <span> Class: {renderedSpell.classes} </span>
                    <span> School: {renderedSpell.school} </span>
                    <span> Range: {renderedSpell.range} </span>
                    <span> Components: {renderedSpell.components} </span>
                    {spell.material &&
                        <span> Material: {renderedSpell.material} </span>
                    }
                    <span> SubClasses: {renderedSpell.subClasses} </span>
                    <span onClick={this.openModal}> Read Description </span>
                </div>
            </div>
        }
        </div>
        )
    }
};