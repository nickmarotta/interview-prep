main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    if(movieLengths.length === 0 || movieLengths.length === 1) {
        return false;
    }

    const movieLengthSet = new Set();
    movieLengths.forEach( (movieLength) => {movieLengthSet.add(movieLength)});

    for (let i=0; i < movieLengths.length; i++) {
        const remainingRuntime = flightLength - movieLengths[i]; 
        if (movieLengthSet.has(remainingRuntime)) {
            return true;
        }
    }

    return false;
}


/*
Bonus: 
1. What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?
2. What if we wanted to fill the flight length as nicely as possible with any number of movies (not just 2)?
3. What if we knew that movieLengths was sorted? Could we save some space and/or time?
*/
function bonus1(movieLengths, flightLength, xMinutes) {

    //O, xMinutes 
    //Start in Middle 

    let incrementingIndex = xMinutes/2; 
    let decreasingIndex = xMinutes/2; 

    while (incrementingIndex < flightLength && decreasingIndex >= 0) {

        const incrementingFoundOne = canTwoMoviesFillFlight(movieLengths, incrementingIndex);
        const decreasingFoundOne = canTwoMoviesFillFlight(movieLengths, decreasingIndex);

        

    }


}

function canTwoMoviesFillFlightBruteForce(movieLengths, flightLength) {

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
    console.log(`Testing Base Case True -     Expected ${expected1} Got ${canTwoMoviesFillFlight(movies1, flightLength1)}`);

    const movies2 = [1, 2, 3, 4, 5];
    const flightLength2 = 100;
    const expected2 = false; 
    console.log(`Testing Base Case False -    Expected ${expected2} Got ${canTwoMoviesFillFlight(movies2, flightLength2)}`);

    const movies3 = [];
    const flightLength3 = 100;
    const expected3 = false; 
    console.log(`Testing Empty Movies -       Expected ${expected3} Got ${canTwoMoviesFillFlight(movies3, flightLength3)}`);

    const movies4 = [50];
    const flightLength4 = 100;
    const expected4 = false; 
    console.log(`Testing no possible movies - Expected ${expected4} Got ${canTwoMoviesFillFlight(movies4, flightLength4)}`);

    const movies5 = [50, 25, 5, 26];
    const flightLength5 = 101;
    const expected5 = true; 
    console.log(`Testing many movies - Expected ${expected5} Got ${bonusCanManyMoviesFillFlight(movies5, flightLength5)}`);

    const movies6 = [50, 25, 5, 26];
    const flightLength6 = 200;
    const expected6 = false; 
    console.log(`Testing many movies - Expected ${expected6} Got ${bonusCanManyMoviesFillFlight(movies6, flightLength6)}`);

};
