main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}


function getMaxProfit(stockPrices) {

    // Calculate the max profit
    if (stockPrices.length === 0) {
        return 0;
    }

    const seenMinIndexes = new Set();
    let minPriceIndex = findMinIndex(stockPrices, seenMinIndexes); 
    let lastHighestProfit = 0; 
    let isProcessing = true;

    do {
        const maxPriceIndex = findHighestIndexAfterMin(stockPrices, minPriceIndex);

        let curMaxProfit = 0;
        if (maxPriceIndex !== -1)
            curMaxProfit = stockPrices[maxPriceIndex] - stockPrices[minPriceIndex]
        
        if(curMaxProfit <= lastHighestProfit) {
            isProcessing = false;
        } else {
            lastHighestProfit = curMaxProfit;
            seenMinIndexes.add(minPriceIndex);
            minPriceIndex = findMinIndex(stockPrices, seenMinIndexes);
        }
        break;

    } while (isProcessing)
  
    return lastHighestProfit;
}

//Returns -1 if all indices have been seen. 
function findMinIndex(stockPrices, excludedIndices) {
    let minPrice = Number.MAX_SAFE_INTEGER; 
    let minIndex = -1;
    stockPrices.forEach( (price, index) => {
        if (price < minPrice && !excludedIndices.has(index)) {
            minPrice = price;
            minIndex = index;
        }
    })

    return minIndex;
}

//Returns -1 if nothing is greater.
function findHighestIndexAfterMin(stockPrices, minIndex) {
    let maxPrice = 0; 
    let maxIndex = -1;

    for(let i=minIndex; i < stockPrices.length; i++) {
        let price = stockPrices[i];
        
        if (price > maxPrice) {
            maxPrice = price;
            maxIndex = i;
        }
    }

    console.log(`Found max index ${maxIndex}`);    
    return maxIndex;
}

//UTILITIES 

// TESTS 
function runAllTests() {

    const i1 = [10, 7, 5, 8, 11, 9];
    const e1 = 6; 
    console.log("================================");
    console.log(`Testing ${i1} - Basic case`);
    console.log(`Expecting: ${e1} Got: ${getMaxProfit(i1)}`);

    const i2 = [];
    const e2 = 0; 
    console.log("================================");

    console.log(`Testing ${i2} - Empty Array`);
    console.log(`Expecting: ${e2} Got: ${getMaxProfit(i2)}`);

    const i3 = [1,2,3];
    const e3 = 2; 
    console.log("================================");

    console.log(`Testing ${i3} - Sorted ascending`);
    console.log(`Expecting: ${e3} Got: ${getMaxProfit(i3)}`);

    const i6 = [3, 1, 100, 1, 6];
    const e6 = 99; 
    console.log("================================");

    console.log(`Testing ${i6} - Repeats work`);
    console.log(`Expecting: ${e6} Got: ${getMaxProfit(i6)}`);

    const i8 = [3, 1, 100, 1, 6];
    const e8 = 99; 
    console.log("================================");

    console.log(`Testing ${i8} - Repeats work`);
    console.log(`Expecting: ${e8} Got: ${getMaxProfit(i8)}`);

    const i7 = [3, 1, 100, 1, 100];
    const e7 = 99; 
    console.log("================================");

    console.log(`Testing ${i7} - Repeats work`);
    console.log(`Expecting: ${e7} Got: ${getMaxProfit(i7)}`);

    const i5 = [3, 1, 6, 1, 100];
    const e5 = 99; 
    console.log("================================");

    console.log(`Testing ${i5} - Repeats work`);
    console.log(`Expecting: ${e5} Got: ${getMaxProfit(i5)}`);

    const i4 = [3,2,1];
    const e4 = 0; 
    console.log("================================");

    console.log(`Testing ${i4} - Sorted descending`);
    console.log(`Expecting: ${e4} Got: ${getMaxProfit(i4)}`);

}

/*

// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'big increase then small increase';
actual = getMaxProfit([2, 10, 1, 4]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
*/