main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function reverseWords(message) {
    console.log("starting....")
    // Decode the message by reversing the words

    //Initially reverse: 
    reverseWord(message, 0, message.length -1);

    //Now reverse each individual word
    let curLeft = 0; 
    let curRight = 0;
    for(curRight; curRight < message.length; curRight++) {

        const isSpace = message[curRight] === ' ';
        if (isSpace) {
            sawSpace = true; 
            reverseWord(message, curLeft, curRight - 1);
            curLeft = curRight + 1; 
        }
    }

    //Flip last word, which could be the whole thing. 
    reverseWord(message, curLeft, curRight - 1); 

    return message;
}

function reverseWord(message, firstIndex, lastIndex) {

    let curLeft = firstIndex;
    let curRight = lastIndex; 

    while (curLeft < curRight) {
        const tempChar1 = message[curLeft];
        const tempChar2 = message[curRight];
        
        message[curLeft] = tempChar2;
        message[curRight] = tempChar1;

        curLeft++;
        curRight--;
    }
}


//UTILITIES 

// TESTS 
function runAllTests() {


    const message4 = ['h', 'i' , ' ', 'd', 'a', 'n']; 
    const expected4 = 'dan hi';
    reverseWords(message4);
    console.log("Got     ", message4.join(''));
    console.log(`Expected ${expected4}`);

    const message3 = ['t','e','s','t', ' ', 'i']; 
    const expected3 = 'i test';
    reverseWords(message3, 0, 3);
    console.log("Got     ", message3.join(''));
    console.log(`Expected ${expected3}`);

    const message2 = ['t','e','s','t']; 
    const expected2 = 'test';
    reverseWords(message2);
    console.log("Got     ", message2.join(''));
    console.log(`Expected ${expected2}`);
    
 
    const message1 = [ 'c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l' ];
    const expected1 = "steal pound cake";
    console.log("Basic test of reverseWords")
    reverseWords(message1);
    console.log("Got     ", message1.join(''));
    console.log(`Expected ${expected1}`);
    // Prints: 'steal pound cake'
}


/*

 const message1 = [ 'c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l' ];

    0, 3
    5, 9
    11,15

*/