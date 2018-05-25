export const getSpellByName = (spellParam) => {

    
    // let baseUrl = 'http://www.dnd5eapi.co/api/spells/';
    // const queryByName = `?name=${queryString}`; 
    

    let apiBaseUrl = process.env.NODE_ENV !== 'production' 
        ? "http://localhost:37813/api"
        : "https://dndtomeapi.azurewebsites.net/api";

    const queryStringByName = `${apiBaseUrl}/spells/${spellParam}`;
   
    return fetch(queryStringByName, {
        mode: 'no-cors'
    }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(spell => {
            const spellId = getIdFromUrl(spell);
            return getSpellById(spellId);
        })
        .catch(reason => {
            console.log(reason)
            return null;
        });
}

const getSpellById = (spellId) => {
    const baseUrl = 'http://www.dnd5eapi.co/api/spells/';
    const queryString = baseUrl+spellId;

    return fetch(queryString) 
        .then(response => { 
            if (response.ok){
                return response.json() 
            }
        });
};

const getIdFromUrl = (spell) => {
    let url = "";
    url = spell.results[0].url;
    const splitUrl = url.split("/");
    return splitUrl[splitUrl.length-1];
}
