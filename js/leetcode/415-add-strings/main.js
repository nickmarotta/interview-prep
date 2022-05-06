/*
    https://leetcode.com/problems/add-strings/
*/



main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 function addStrings(num1, num2) {
    
    const charArr1 = num1.split('');
    const charArr2 = num2.split('');

    if (charArr1.length === 0 && charArr2.length === 0) 
        return "0";
    else if (charArr1.length === 0)
        return num2;
    else if (charArr2.length === 0) 
        return num1;



    let num1Index = charArr1.length - 1;
    let num2Index = charArr2.length - 1;

    let carryTheOne = 0;
    let result = "";
    while(num1Index >= 0 || num2Index >= 0) {

        const n1 = num1Index >= 0 ? charArr1[num1Index] : 0;
        const n2 = num2Index >= 0 ? charArr2[num2Index] : 0; 

        //console.log("adding", n1, n2, "carry?", carryTheOne);

        //log("adding", n1, n2, "carry?", carryTheOne);

        let sum = (+n1) + (+n2) + carryTheOne; 

        //console.log("sum is", sum);

        if(sum > 9) {
            carryTheOne = 1; 
            sum = sum - 10; 
        } else {
            carryTheOne = 0;
        }

        num1Index--;
        num2Index--;

        //console.log("indexes", num1Index, num2Index)

        result = `${sum}${result}`;
        //console.log("result", result);
    }
    
    if (carryTheOne === 1) {
        result = `1${result}`;
    }

    return result;
};



//UTILITIES 

// TESTS 
function runAllTests() {
    
    let input1;
    let input2;

    let expected; 
    let result;

    input1 = "1";
    input2 = "1";
    expected = "2"
    result = addStrings(input1, input2);
    console.log(`Does ${input1} + ${input2} = ${expected} ... Got ${result} ${expected === result}`);

    input1 = "";
    input2 = "";
    expected = "0";
    result = addStrings(input1, input2);
    console.log(`Does ${input1} + ${input2} = ${expected} ... Got ${result} - ${expected === result}`);

    input1 = "9";
    input2 = "9";
    expected = "18";
    result = addStrings(input1, input2);
    console.log(`Does ${input1} + ${input2} = ${expected} ... Got ${result} - ${expected === result}`);

    input1 = "1000";
    input2 = "1";
    expected = "1001";
    result = addStrings(input1, input2);
    console.log(`Does ${input1} + ${input2} = ${expected} ... Got ${result} - ${expected === result}`);

    input1 = "1";
    input2 = "1000";
    expected = "1001";
    result = addStrings(input1, input2);
    console.log(`Does ${input1} + ${input2} = ${expected} ... Got ${result} - ${expected === result}`);

    input1 = "9999";
    input2 = "1";
    expected = "10000";
    result = addStrings(input1, input2);
    console.log(`Does ${input1} + ${input2} = ${expected} ... Got ${result} - ${expected === result}`);

}   




main(); 

function main() {
    runAllTests();
}


function problem(input) {
    return null;
}

