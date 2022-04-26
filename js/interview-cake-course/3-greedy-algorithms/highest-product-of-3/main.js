main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function highestProductOf3(arrayOfInts) {

    let highestProductOf3 = 0;
    let highestProductOf2 = 0;
    let highest = 0; 
    let lowestProductOf2 = 0;
    let lowest = 0;


    for(let i=0; i<arrayOfInts.length; i++) {

        

    }

  }
  
  

//UTILITIES 

// TESTS 
function runAllTests() {
    let input;
    let expected; 
    let desc; 

    input = [1, 2, 3];
    expected = 6;
    desc = "Basic test"
    assertEqual(highestProductOf3(input), expected, desc);

    input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expected = 720;
    desc = "Basic test"
    assertEqual(highestProductOf3(input), expected, desc);

    input = [5, 5, 5, 5, 5, 5, 100];
    expected = 2500;
    desc = "Repeats"
    assertEqual(highestProductOf3(input), expected, desc);

    input = [-10, 1, 1, 1];
    expected = 1;
    desc = "One negative number"
    assertEqual(highestProductOf3(input), expected, desc);

    input = [-10, -10, 1, 1, 1];
    expected = 100;
    desc = "Two negative numbers"
    assertEqual(highestProductOf3(input), expected, desc);

}

function assertEqual(a, b, desc) {
    if( a === b ) {
        console.log(`${desc} ... TRUE`);
    } else {
        console.log(`${desc} ... FALSE`);
        console.log(`Expected ${b} Got ${a}`);
    }

}