main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}


function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    
    const splitted = theString.split(""); 

    let charMap = {};
    splitted.forEach( (char) => {
        
        charMap[char] = charMap[char] 
            ? charMap[char] = charMap[char] + 1
            : 1;
    });

    let numOdd = 0;
    Object.values(charMap).forEach( (value) => {
        const isEven = value % 2 == 0;
        if (!isEven) {
            numOdd += 1;
        }
    })

    return numOdd <= 1;
}
  
  

//UTILITIES 

// TESTS 
function runAllTests() {

    const i1 = "civic";
    const e1 = true;
    console.log(`Testing civic: Expected ${e1} Got ${hasPalindromePermutation(i1)}`);

    const i2 = "ivicc";
    const e2 = true;
    console.log(`Testing ivicc: Expected ${e2} Got ${hasPalindromePermutation(i2)}`);

    const i3 = "asdc";
    const e3 = false;
    console.log(`Testing asdc: Expected ${e3} Got ${hasPalindromePermutation(i3)}`);

    const i4 = "aaabbaaa";
    const e4 = true;
    console.log(`Testing aaabbaaa: Expected ${e4} Got ${hasPalindromePermutation(i4)}`);

}

