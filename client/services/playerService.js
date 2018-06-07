export const getPlayerByName = playerName => {

    let baseUrl = process.env.dndTomeApiUrl;
    let queryStringByName = `${baseUrl}api/players?playerName=${playerName}`;

    return fetch(queryStringByName).then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .catch(reason => {
        console.log(reason)
        return null;
    });
}