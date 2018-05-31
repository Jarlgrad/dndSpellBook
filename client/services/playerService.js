export const getPlayerByName = playerName => {
    let baseUrl = "https://dndtomeapi.azurewebsites.net/api/";
    let queryStringByName = `${baseUrl}players?playerName=${playerName}`;

    return fetch(queryStringByName, {
        mode: 'no-cors',
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(json => {
        console.log("PLAYER FETCHED: ", json);
        return json;
    })
    .catch(reason => {
        console.log(reason)
        return null;
    });
}