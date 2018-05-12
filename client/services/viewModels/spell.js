import React from 'react';

const searchClass = (classToSearch) => {
    return alert(`You can learn more about ${classToSearch.name}s at ${classToSearch.url}`);
};

const Spell = function(input) {
    let spell = {};
    spell.name = input.name;
    spell.components = input.components
        .map((c, index) => <span key={index}>{c}, </span> );

    if (input.material) {
        let material = input.material;
        spell.material = material.replace("â€™", "'");
    }

    spell.classes = input.classes
        .map((c, index) => <span key={index} onClick={(e) => searchClass(c)}>{c.name}</span>)
    
    spell.subClasses = input.subclasses
        .map((s, index) => <span key={index} onClick={(e) => searchClass(s)}>{s.name}, </span>)
    
    spell.level = input.level;
    spell.range = input.range;
    spell.school = <span onClick={(e) => searchClass(input.school)}>{input.school.name} </span>;
    return spell;
}
export default Spell;