//import the fetchMovies function from the utils module.

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('search').value.trim();
    if (!query) return alert("Please enter a movie name!");
    const resultsDiv = document.getElementById('results');
    // Challenge: Implement the searchMovies function to show the movies in the resultsDiv.
    // Hint 1: Use a try-catch block to handle potential errors.
    // Hint 2: Fetch the movies using the fetchMovies function.
    // Hint 3: Sort the movies by year.
    // Hint 4: Dynamically create and append movie elements to the resultsDiv.
    
});
/* Hint: The movie element should look like this: 
<div class="movie">
     <img src="" alt="" />
     <h2></h2>
     <p></p>
     <p></p>
</div>*/
