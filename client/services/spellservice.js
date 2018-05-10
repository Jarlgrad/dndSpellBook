export const getSpell = (queryString) => {
    let baseUrl = 'http://www.dnd5eapi.co/api/spells/';
    const apiString = baseUrl+queryString;
    console.log("in spellservice:", apiString);

    return fetch(apiString)
        .then( response => {
            return response.json();
        });
}