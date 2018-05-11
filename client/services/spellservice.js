export const getSpellByName = (queryString) => {
    let baseUrl = 'http://www.dnd5eapi.co/api/spells/';
    
    const queryByName = `?name=${queryString}`; 
    const queryStringByName = baseUrl+queryByName;
   
    return fetch(queryStringByName).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(spell => {
            return fetch(spell.results[0].url).then(response => {
                if(response.ok){
                    return response.json();
                }
            })
        })
        .catch(reason => console.log(reason));   
}

const getSpellByUrl = (response) => {
    console.log(response);
    fetch(response.Object.results[0].url)
}

const getSpellById = (id) => {
    const baseUrl = 'http://www.dnd5eapi.co/api/spells/';
    const queryString = baseUrl+id;

    return fetch(queryString)
        .then(response => response.json());
}