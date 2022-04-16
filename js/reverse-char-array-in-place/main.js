main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    
    let lastIndex = arrayOfChars.length - 1; 
    for(let i = 0; i < arrayOfChars.length; i++) {
        if (i === lastIndex || i > lastIndex) {
            break;
        }

        swapIndexes(arrayOfChars, i, lastIndex);
        lastIndex--;
    }

    return arrayOfChars;
}

function swapIndexes(arrayOfChars, firstIndex, lastIndex) {

    const firstChar = arrayOfChars[firstIndex];
    const lastChar = arrayOfChars[lastIndex];

    arrayOfChars[firstIndex] = lastChar;
    arrayOfChars[lastIndex] = firstChar;

    return arrayOfChars;
}
  
//UTILITIES 

// TESTS 
function runAllTests() {
    //Param order:
    //functionUnderTest, verboseLogging, describe, expected, ...input
    const verboseLogging = true;

    const inputA = ['c','a','t'];
    const expectedA = ['t','a','c'];
    genericTest(swapIndexes, verboseLogging, "swap indexes works", expectedA, inputA, 0, 2);

    const input1 = ['t','e','s','t'];
    const expected1 = ['t','s','e','t'];
    genericTest(reverse, verboseLogging, "reverses odd length", expected1, input1);

    const input2 = ['c','a','t'];
    const expected2 = ['t','a','c'];
    genericTest(reverse, verboseLogging, "reverses even length", expected2, input2);

    const input3 = ['r','a','c','e','c','a','r'];
    const expected3 = ['r','a','c','e','c','a','r'];
    genericTest(reverse, verboseLogging, "reverses a palindrome", expected3, input3);
}

function genericTest(functionUnderTest, verboseLogging, describe, expected, ...input) {
    const result = functionUnderTest(...input);
    if(verboseLogging) {
        console.log("=======================================");
        console.log(`[TEST LOG]: Testing ${functionUnderTest.name}`);
        console.log(`[TEST LOG]: Describe: ${describe}`);
        console.log(`[TEST LOG]: Input:           ${JSON.stringify(...input)}`)
        console.log(`[TEST LOG]: Expected Result: ${JSON.stringify(expected)}`)
        console.log(`[TEST LOG]: Actual Result:   ${JSON.stringify(result)}`);
        JSON.stringify(result) === JSON.stringify(expected) 
            ? console.log("[TEST LOG] Passed:", true)
            : console.log("[TEST LOG] Passed:", false)
        console.log("=======================================");
    } else {
        JSON.stringify(result) === JSON.stringify(expected) 
            ? console.log(`[TEST LOG]: Testing ${functionUnderTest.name} - ${describe}\n[TEST LOG]: Passed: `, true)
            : console.log(`[TEST LOG]: Testing ${functionUnderTest.name} - ${describe}\n[TEST LOG]: Passed: `, false);
    }
}