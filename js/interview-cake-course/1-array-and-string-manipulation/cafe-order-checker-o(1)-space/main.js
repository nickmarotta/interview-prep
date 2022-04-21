main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    let curToI = 0;
    let curDiI = 0; 
    let result = true;

    servedOrders.forEach( (servedOrderVal) => {

        //console.log("matched to", servedOrderVal === takeOutOrders[curToI] )
        //console.log("matched di", servedOrderVal === dineInOrders[curDiI])

        if (servedOrderVal === takeOutOrders[curToI]) {
            curToI++;
        } else if (servedOrderVal === dineInOrders[curDiI]) {
            curDiI++; 
        } else {
            //console.log("didn't match next takeout or dine in")
            result = false;  
        }
    })

    const isNoExtraOrders = servedOrders.length === takeOutOrders.length + dineInOrders.length; 

    return result && isNoExtraOrders ;
}


// TESTS 
function runAllTests() {
    

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

//Solution Tests 

// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = 'one register has extra orders';
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

desc = 'order numbers are not sequential';
actual = isFirstComeFirstServed([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18]);
assertEquals(actual, true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}