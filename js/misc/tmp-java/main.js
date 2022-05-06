
main();

function main() {

    let x = 0;
    const arr = [1,2,3];


    other(x,arr);
    console.log(x);
    console.log(arr);

    other2(x,arr);

    console.log(x);
    console.log(arr);
}

function other(x, arr) {
    x++;
    arr.push(9001);
}

function other2(x, arr) {
    x = x=1; 
    arr = [-1];
    console.log(arr);
}

