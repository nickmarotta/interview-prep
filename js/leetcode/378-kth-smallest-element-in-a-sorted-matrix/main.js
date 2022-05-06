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

    let n = matrix.length; 
    let visitedCount = 1;
    const sortedArr = [matrix[0][0]];

    let RIGHT = { col: 0, row: 1 };  
    let DOWN = { col: 1, row: 0 }; 

    while(sortedArr.length < k) {

        const RIGHT_VAL = matrix[RIGHT.col]?.[RIGHT.row]; 
        const DOWN_VAL = matrix[DOWN.col]?.[DOWN.row];

        console.log(`COMPARING RIGHT ${RIGHT_VAL} DOWN ${DOWN_VAL}`);

        if(!RIGHT_VAL && !DOWN_VAL) {


            //Add the single value if exists 
            const OLDRIGHT = Object.clone(RIGHT); 
            const OLDDOWN = Object.clone(DOWN); 
            const SINGLE_VALUE = matrix[OLDDOWN.col+1][OLDRIGHT.row+1];
            sortedArr.push(SINGLE_VALUE);
            visitedCount++;


            //Reposition RIGHT and DOWN away from single added 
            RIGHT.col = OLDRIGHT.col + 1; 
            RIGHT.row = OLDDOWN.row + 2;
            DOWN.col = OLDRIGHT.col + 2; 
            DOWN.row = OLDDOWN.row + 1; 

        } else if (!RIGHT_VAL) {
            sortedArr.push(DOWN_VAL);
            visitedCount++;

            RIGHT.col = DOWN.col;
            RIGHT.row = DOWN.row + 1; 
            
            if (!DOWN.col + 1 > n) { //Allowing +1 out of bounds, but not more, because we will bring it back when both are undefined
                //console.log("Down was out of bounds. Not incrementing further.")
            } else {
                DOWN.col = DOWN.col + 1; 
            }
        } else if (!DOWN_VAL) {
            //console.log("DOWN WAS OUT");
            sortedArr.push(RIGHT_VAL);
            visitedCount++;

            DOWN.col = RIGHT.col + 1;
            DOWN.row = RIGHT.row;
            
            if (!RIGHT.row + 1 > n) { //Allowing +1 out of bounds, but not more, because we will bring it back when both are undefined
                //console.log("Right was out of bounds. Not incrementing further.")
            } else {
                RIGHT.row = RIGHT.row + 1; 
            }
            
        } else if (RIGHT_VAL <= DOWN_VAL) {
            sortedArr.push(RIGHT_VAL);
            visitedCount++;

            RIGHT.row = RIGHT.row + 1; 
        } else if (DOWN_VAL <= RIGHT_VAL) {
            sortedArr.push(DOWN_VAL); 
            visitedCount++;

            DOWN.col = DOWN.col + 1; 
        } else {
            throw Error("somethign happened"); 
        }

        console.log("sorted", sortedArr);
    }
    //console.log("sorted", sortedArr);

    return sortedArr[k-1];
};


// TESTS 
function runAllTests() {
    
    let matrix;
    let k;
    let expected; 

    matrix = [[1,2],[1,3]];
    k = 4;
    expected = 3; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    matrix = [[1,2],[1,2],[1,2]];
    k = 2;
    expected = 1; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    matrix = [[1,5,9],[10,11,13],[12,13,15]];
    k = 8;
    expected = 13; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

    matrix = [[1,1,1,1],[2,5,5,5],[2,5,5,5],[2,5,5,5]];
    k = 3;
    expected = 1; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

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

    matrix = [[1,3,5],[6,7,12],[11,14,14]];
    k = 5;
    expected = 7; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);


    matrix = [[1,5,9],[10,11,13],[12,13,15]];
    k = 8;
    expected = 13; 
    console.log("===========");
    console.log("Matrix: ", matrix);
    console.log("K: ", k);
    console.log(`Expected: ${expected} Got: ${kthSmallest(matrix, k)}`);

}   

