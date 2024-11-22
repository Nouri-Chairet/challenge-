const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9e6adfc8b6mshe736177f701b195p13af22jsn62eed22b7c04',
        'x-rapidapi-host': 'omdb-api4.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};
// Challenge: Implement the fetchMovies function
// Hints:
// 1. Use the fetch API to make a GET request to the URL.
// 2. Convert the response to JSON.
// 3. Extract the 'Search' property from the data.
// 4. Export the fetchMovies function.
const fetchMovies = async (query) => {
    const url = `https://omdb-api4.p.rapidapi.com/?s=${encodeURIComponent(query)}`;
    return fetch()
    .then(response => response.json())
    .then(data => data.Search)
   
};


