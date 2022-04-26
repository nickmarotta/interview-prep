main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}



function getMaxProfit(stockPrices) {

    let maxProfit = 0;
    let lowestIndex = 0;

    for(let i=1; i < stockPrices.length; i++) {

        console.log(`comparing ${stockPrices[i]} - ${stockPrices[lowestIndex]}`);
        const todaysProfit = stockPrices[i] - stockPrices[lowestIndex];
        
        if(todaysProfit > maxProfit) {
            console.log(`maxProfit ${maxProfit} -> ${todaysProfit}`);
            maxProfit = todaysProfit;
        }

        if(stockPrices[i] < stockPrices[lowestIndex]) {
            console.log(`lowestIndex ${lowestIndex} -> ${i}`);
            lowestIndex = i;
        }

    }

    return maxProfit;
}



// TESTS 
function runAllTests() {


    const i1 = [10, 7, 5, 8, 11, 9];
    const e1 = 6

    console.log(`TESTING ${i1}`);
    console.log(`Expected: ${e1} Got: ${getMaxProfit(i1)}`);
    console.log('=========================');

    const i2 = [1,2,3,4,5];
    const e2 = 4

    console.log(`TESTING ${i2}`);
    console.log(`Expected: ${e2} Got: ${getMaxProfit(i2)}`);
    console.log('=========================');

    const i3 = [5,4,3,2,1];
    const e3 = 0
    console.log(`TESTING ${i3}`);
    console.log(`Expected: ${e3} Got: ${getMaxProfit(i3)}`);
    console.log('=========================');

    const i3 = [5,4,3,2,1];
    const e3 = 0
    console.log(`TESTING ${i3}`);
    console.log(`Expected: ${e3} Got: ${getMaxProfit(i3)}`);
    console.log('=========================');
}

