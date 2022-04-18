main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Determine if two movie runtimes add up to the flight length
    
    //Any movie > flighttime should be thrown out 
    const eligibleMovies = movieLengths.filter((movie) => {
        return movie < flightLength;
    });

    console.log("eligbleMovies", eligibleMovies);

    for (let i = 0; i < eligibleMovies.length; i++) {
        for (let j = 1; j < eligibleMovies.length; j++) {

            if((eligibleMovies[i] + eligibleMovies[j]) === flightLength) {
                return true;
            }
        }
    }
 
    return false;
}


//UTILITIES 

// TESTS 
function runAllTests() {

    const movies1 = [1, 2, 3, 4, 5];
    const flightLength1 = 7;
    const expected1 = true; 
    console.log(`Testing Base Case True - Expected ${expected1} Got ${canTwoMoviesFillFlight(movies1, flightLength1)}`);

    const movies2 = [1, 2, 3, 4, 5];
    const flightLength2 = 100;
    const expected2 = false; 
    console.log(`Testing Base Case True - Expected ${expected2} Got ${canTwoMoviesFillFlight(movies2, flightLength2)}`);

    const movies3 = [];
    const flightLength3 = 100;
    const expected3 = false; 
    console.log(`Testing Empty Movies - Expected ${expected3} Got ${canTwoMoviesFillFlight(movies3, flightLength3)}`);

}
