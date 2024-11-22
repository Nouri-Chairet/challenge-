//import the fetchMovies function from the utils module.

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('search').value.trim();
    if (!query) return alert("Please enter a movie name!");
    const resultsDiv = document.getElementById('results');
    // Hint 1: Use a try-catch block to handle potential errors.
    // Hint 2: Fetch the movies using the fetchMovies function and sort them by year.
    // Hint 3: Dynamically create and append movie elements to the resultsDiv.

});