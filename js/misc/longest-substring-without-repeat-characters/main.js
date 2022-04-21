main();

function main() {

    //Run tests
    runAllTests();
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    
    const strArr = Array.from(s);
    let i = 0;
    let curSubString = '';

    let isStillParsing = true; 
    while (isStillParsing) {

    }
    

};

//UTILITIES 

// TESTS 
function runAllTests() {
    //functionUnderTest, expected, varargs input
    genericTest(lengthOfLongestSubstring, 3, "abcabcbb");
    genericTest(lengthOfLongestSubstring, 1, "bbbbb");
    genericTest(lengthOfLongestSubstring, 3, "pwwkew");
}

function genericTest(functionUnderTest, expected, ...input) {
    const result = functionUnderTest(...input);
    
    console.log(`Testing ${functionUnderTest.name} input of ${JSON.stringify(input)} results in ${JSON.stringify(expected)}`);
    console.log(`Expected Result: ${JSON.stringify(expected)}`)
    console.log(`Actual Result:   ${JSON.stringify(result)}`);
    result === expected 
        ? console.log(true)
        : console.log(false);
}
