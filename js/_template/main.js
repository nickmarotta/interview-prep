main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function problem(n1, n2) {
    //Implement adding 2 numbers together. 

    console.log(`n1 ${n1}`);
    console.log(`n2 ${n2}`);


    const num1 = n1 ? n1 : 0;
    const num2 = n2 ? n2 : 0;
    return num1 + num2;
}

//UTILITIES 

// TESTS 
function runAllTests() {
    //Param order:
    //functionUnderTest, verboseLogging, describe, expected, ...input
    const verboseLogging = true;

    genericTest(problem, verboseLogging, "sum succeeds", 11, 5,6);
    genericTest(problem, verboseLogging, "undefined var args still works", 0); //Undefined var args still work. 
    genericTest(problem, verboseLogging, "one undefined var args still works", 5, 5); //One undefined var args still works. 
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