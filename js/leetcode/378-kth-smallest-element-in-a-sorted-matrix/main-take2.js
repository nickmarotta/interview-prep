/*
    https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
*/



main();

function main() {
    console.log("Starting!");


    const arr = [1,2,3];
    console.log("oob", arr[3]);

    //Run tests
    runAllTests();
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {

    let curRightRow = 1;
    let curRightCol = 0;
    let curDownRow = 0;
    let curDownCol = 1; 

    const sortedArr = [matrix[0][0]]; 

    while (sortedArr.length < k) {

        const RIGHT_VAL = matrix[curRightCol]?.[curRightRow];
        const DOWN_VAL = matrix[curDownCol]?.[curDownRow];

        console.log(`COMPARING RIGHT: ${RIGHT_VAL} AND DOWN: ${DOWN_VAL}`);

        if(!RIGHT_VAL && !DOWN_VAL) {
            const isRemainingNumbersToInspect = sortedArr.length < (matrix.length * matrix.length);
            if (isRemainingNumbersToInspect) {
                //Right goes down and over one from where down is pointed 
                curRightCol = curRightCol + 1; 
                curRightRow = curDownCol + 1; 
            }
        } else if (!RIGHT_VAL) { 
            sortedArr.push(DOWN_VAL);

            curRightCol = curDownCol; 
            curRightRow = curDownRow + 1;
           
            curDownCol = curDownCol + 1; 
            
        } else if (!DOWN_VAL) {
            sortedArr.push(RIGHT_VAL); 

            curDownCol = curRightCol + 1;
            curDownRow = curDownRow + 1; 

            curRightRow = curRightRow + 1; 
        } else if ( RIGHT_VAL <= DOWN_VAL ) {
            sortedArr.push(RIGHT_VAL); 
            curRightRow = curRightRow + 1; 
        } else if ( RIGHT_VAL > DOWN_VAL ) {
            sortedArr.push(DOWN_VAL); 
            curDownCol = curDownCol + 1; 
        } else {
            throw new Error("help!");
        }

        console.log("sorted", sortedArr);
    }
   
    return sortedArr[k-1];
};


// TESTS 
function runAllTests() {
    
    // let matrix;
    // let k;
    // let expected; 

    // matrix = [[1,2],[1,3]];
    // k = 4;
    // expected = 3; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    // matrix = [[1,1,1,1],[2,5,5,5],[2,5,5,5],[2,5,5,5]];
    // k = 3;
    // expected = 1; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    // matrix = [[1,1,1,1],[2,5,5,5],[2,5,5,5],[2,5,5,5]];
    // k = 6;
    // expected = 2; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    // matrix = [[1,1,1,1],[2,5,5,5],[2,5,5,5],[2,5,5,5]];
    // k = 16;
    // expected = 5; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    // matrix = [[-5]];
    // k = 1;
    // expected = -5; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    // matrix = [[1,3,5],[6,7,12],[11,14,14]];
    // k = 5;
    // expected = 7; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);


    // matrix = [[1,5,9],[10,11,13],[12,13,15]];
    // k = 8;
    // expected = 13; 
    // console.log("===========");
    // console.log("Matrix: ", matrix);
    // console.log("K: ", k);
    // console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
    k = 5;
    expected = 5; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

}   

