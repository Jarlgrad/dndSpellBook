var CACHE_NAME = 'dnd-tome';

let apiBaseUrl = process.env.NODE_ENV === "production" 
    ? "https://dndtomeapi.azurewebsites.net/api"
    : "http://localhost:37813/api";

export const getSpellByName = spellParam => {
    const queryStringByName = `${apiBaseUrl}/spells?spellname=${spellParam}`;
   
    return fetch(queryStringByName)
        .then(response => response.json())
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
