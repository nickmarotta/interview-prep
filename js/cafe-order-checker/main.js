main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served

    const myTakeOut = JSON.parse(JSON.stringify(takeOutOrders));
    const myDineIn = JSON.parse(JSON.stringify(dineInOrders));

    for(let curServedIndex = servedOrders.length - 1; curServedIndex >= 0; curServedIndex--) {

        const curValue = servedOrders[curServedIndex]; 

        const nextTakeout = myTakeOut.length > 0 //if doesn't exist 
            ? myTakeOut[myTakeOut.length - 1]
            : -1; 

        const nextDineIn = myDineIn.length > 0 //if doesn't exist 
            ? myDineIn[myDineIn.length - 1]
            : -1; 

        //console.log(`comparing curValue ${curValue} to nextTakeout ${nextTakeout} and nextDineIn ${nextDineIn}`);

        if (curValue === nextTakeout) {
            myTakeOut.pop();
        } else if (curValue === nextDineIn) {
            myDineIn.pop(); 
        } else {
            //console.log("Next index didn't match either. Returning false");
            return false; 
        }
    }

    const result = myTakeOut.length === myDineIn.length;
    result ? console.log("Popped arrays matched! returning true") : console.log ("Popped arrays did NOT match! returning false");
    return result; //If the lengths do not match after we've removed, then there were leftovers. 
}


// TESTS 
function runAllTests() {
    
    // const to5 = [17, 8, 24];
    // const di5 = [];
    // const expected5 = [17, 8, 24];

    // console.log("=====================");
    // console.log("Testing calculateCorrectServed");
    // console.log("Testing", to5, di5);
    // console.log("Expected ", expected5)
    // console.log("Got      ", calculateCorrectServed(to5, di5));
    // console.log("=====================")

    // const to4 = [];
    // const di4 = [12, 19, 2];
    // const expected4 = [12, 19, 2];

    // console.log("=====================");
    // console.log("Testing calculateCorrectServed");
    // console.log("Testing", to4, di4);
    // console.log("Expected ", expected4)
    // console.log("Got      ", calculateCorrectServed(to4, di4));
    // console.log("=====================")

    // const to3 = [17, 8, 24]
    // const di3 = [12, 19, 2]
    // const expected3 = [17, 8, 12, 19, 24, 2]

    // console.log("=====================");
    // console.log("Testing calculateCorrectServed");
    // console.log("Testing", to3, di3);
    // console.log("Expected ", expected3)
    // console.log("Got      ", calculateCorrectServed(to3, di3));
    // console.log("=====================")


    const to3 = [];
    const di3 = [2, 4, 6];
    const served3 = [2, 4, 6]
    const expected3 = true; 

    console.log("=====================");
    console.log("Testing isFirstComeFirstServed");
    console.log("Testing", to3, di3, served3);
    console.log("Expected ", expected3)
    console.log("Got      ", isFirstComeFirstServed(to3, di3, served3));
    console.log("=====================")

    const to1 = [1, 3, 5];
    const di1 = [2, 4, 6];
    const served1 = [1, 2, 4, 6, 5, 3]
    const expected1 = false; 

    console.log("=====================");
    console.log("Testing isFirstComeFirstServed");
    console.log("Testing", to1, di1, served1);
    console.log("Expected ", expected1)
    console.log("Got      ", isFirstComeFirstServed(to1, di1, served1));
    console.log("=====================")

    const to2 = [17, 8, 24]
    const di2 = [12, 19, 2]
    const served2 = [17, 8, 12, 19, 24, 2]
    const expected2 = true; 

    console.log("=====================")
    console.log("Testing isFirstComeFirstServed");
    console.log("Testing", to2, di2, served2);
    console.log("Expected ", expected2)
    console.log("Got      ", isFirstComeFirstServed(to2, di2, served2));
    console.log("=====================")

}
