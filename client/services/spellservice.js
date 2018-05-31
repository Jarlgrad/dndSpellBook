export const getSpellByName = (spellParam) => {

    let apiBaseUrl = process.env.NODE_ENV === 'production' 
        ? "https://dndtomeapi.azurewebsites.net/api"
        : "http://localhost:37813/api";

    const queryStringByName = `${apiBaseUrl}/spells/${spellParam}`;
   
    return fetch(queryStringByName, {
        mode: 'no-cors',
        headers: { 
            "Content-Type": "application/json" 
        },
    }).then(response => {
        console.log("response", response);
            cache.put(request, response);
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
