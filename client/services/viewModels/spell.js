import React from 'react';

const singleQuoteRegEx = new RegExp(/(â€™)/g);

const Spell = function(input, searchClass) {
    let spell = {};
    spell.name = input.name;
    spell.components = input.components
        .map((c, index) => <span key={index}>{c}, </span> );

    if (input.material) {
        let stringToReplace = input.material;
        spell.material = stringToReplace.replace(singleQuoteRegEx, "'");
    }

    spell.classes = input.classes
        .map((c, index) => <span key={index} onClick={(e) => searchClass(c)}>{c.name},</span>)
    
    spell.subClasses = input.subclasses
        .map((s, index) => <span key={index} onClick={(e) => searchClass(s)}>{s.name}, </span>)
    
    spell.level = input.level;
    spell.range = input.range;
    spell.school = <span onClick={(e) => searchClass(input.school)}>{input.school.name} </span>;
    
    if (input.desc) {
        const tempDesc = [];
        input.desc.forEach((description, index) => {
            const replacedString = description.replace(singleQuoteRegEx, "'");
            tempDesc.push(replacedString);
        });

        spell.description = tempDesc
            .map((description, index) => <div className="spell__description" key={index}> <span>{description} </span> <br /> </div>)
        
    }
    
    return spell;
}
export default Spell;