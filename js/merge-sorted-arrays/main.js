main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function mergeArrays(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    
    //walk over each array simultaneously. 

    
    let myIndex = 0;
    let alicesIndex = 0; 
    
    let isMyExhausted = myArray.length === 0;
    let isAlexExhausted = alicesArray.length === 0;

    const mergedArray = []
    
    while(!isMyExhausted || !isAlexExhausted) {
    
        if (isMyExhausted) {
            mergedArray.push(alicesArray[alicesIndex]);
            alicesIndex++;
        } else if (isAlexExhausted) {
            mergedArray.push(myArray[myIndex]);
            myIndex++;
        } else {
            const isMySmaller = myArray[myIndex] < alicesArray[alicesIndex];
            isMySmaller ? mergedArray.push(myArray[myIndex]) : mergedArray.push(alicesArray[alicesIndex]);
            isMySmaller ? myIndex++ : alicesIndex++;
        }

        isMyExhausted = isMyExhausted || myIndex === myArray.length; 
        isAlexExhausted = isAlexExhausted || alicesIndex === alicesArray.length;
    }

    return mergedArray;
}
  

//UTILITIES 

// TESTS 
function runAllTests() {


    console.log("============================")
    const myArray5 = [1];
    const alicesArray5 = [];
    console.log("Got      ", mergeArrays(myArray5, alicesArray5));
    console.log("Expected ", [1]);


    console.log("============================")
    const myArray4 = [];
    const alicesArray4 = [1];
    console.log("Got      ", mergeArrays(myArray4, alicesArray4));
    console.log("Expected ", [1]);


    console.log("============================")
    const myArray3 = [];
    const alicesArray3 = [];
    console.log("Got      ", mergeArrays(myArray3, alicesArray3));
    console.log("Expected ", []);

    console.log("============================")
    const myArray1 = [1,3,5];
    const alicesArray1 = [2,4];
    console.log("Got      ", mergeArrays(myArray1, alicesArray1));
    console.log("Expected ", [1,2,3,4,5]);

    console.log("============================")
    const myArray2 = [2,4];
    const alicesArray2 = [1,3,5];
    console.log("Got      ", mergeArrays(myArray2, alicesArray2));
    console.log("Expected ", [1,2,3,4,5]);

    console.log("============================")
    const myArray = [3, 4, 6, 10, 11, 15];
    const alicesArray = [1, 5, 8, 12, 14, 19];
    console.log("Got      ", mergeArrays(myArray, alicesArray));
    console.log("Expected ", [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19])
}

