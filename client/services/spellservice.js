export const getSpell = () => {
    let baseUrl = 'http://www.dnd5eapi.co/api/spells/1';
    
    return fetch(baseUrl)
        .then( response => {
            return response.json();
        });
}