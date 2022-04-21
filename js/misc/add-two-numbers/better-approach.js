/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const returnListHead = {}
    let curReturnNode = returnListHead;
    let curNodeList1 = l1;
    let curNodeList2 = l2;

    let curValue1 = 0;
    let curValue2 = 0;

    let onesPlace = 0;

    let isStillParsing = true;
    while (isStillParsing) {
        curValue1 = curNodeList1 !== null ? curNodeList1.val : 0;
        curValue2 = curNodeList2 !== null ? curNodeList2.val : 0;
        console.log(`Adding ${curValue1} and ${curValue2}`);


        //Handle Cur Nodes Value 
        let curReturnNodeVal = 0;
        const sum = curValue1 + curValue2 + onesPlace;

        if ( sum > 9 ) {
            onesPlace = 1; 
            curReturnNodeVal = sum % 10;
        } else {
            onesPlace = 0
            curReturnNodeVal = sum;
        }
        console.log(`Value calculated to be ${curReturnNodeVal} with ones place of ${onesPlace}`);
        curReturnNode.val = curReturnNodeVal;

        //Increment the Input Lists
        curNodeList1 = curNodeList1 === null ? null : curNodeList1.next;
        curNodeList2 = curNodeList2 === null ? null : curNodeList2.next;

        //Calculate Next
        const isDone = (curNodeList1 === null)
            && (curNodeList2 === null)
            && onesPlace === 0;
        console.log(`Done? ${isDone} Head: ${JSON.stringify(returnListHead)}`);

        if(isDone) {
            curReturnNode.next = null;
            isStillParsing = false;
            break;
        } 
        curReturnNode.next = {};
            
        //Increment Return List  
        curReturnNode = curReturnNode.next;
    }

    return returnListHead;
};

var addTwoNumbersBruteForce = function(l1, l2) {
    const n1 = convertListToNumber(l1);
    const n2 = convertListToNumber(l2);
    const result = n1 + n2;
    return convertIntToList(result);
};


const convertListToNumber = (list) => {
    //[2, 4, 3] = 342 

    let curNode = list;
    let numString = "";
    while(curNode.next !== null) {
        numString = curNode.val + numString; 
        curNode = curNode.next;
    }
    //Append last
    numString = curNode.val + numString;

    const result = parseInt(numString); 

    if(result === NaN) {
        return 0;
    }
    else {
        return result;
    }
}

const convertIntToList = (n) => {
    const numArr = Array.from(String(n), num => Number(num) );
    const reversed = numArr.reverse();
    
    const head = {};
    let curNode = head;
    reversed.forEach((n, index) => {
        curNode.val = n;
        const isLastNode = index == reversed.length - 1;
        if(isLastNode) {
            curNode.next = null;
        } else {
            curNode.next = {};
            curNode = curNode.next;
        }
    })

    return head; 
}

/* === TESTS === */ 

const testConvertListToNumber = () => {
    console.log("Testing convertListToNumber");

    const n3 = generateNode(3, null);
    const n2 = generateNode(4, n3);
    const n1 = generateNode(2, n2);

    convertListToNumber(n1) === 342 ? console.log(true) : console.log(false);
};

const testAddTwoNumbers = () => {
    console.log("Testing addTwoNumbers()");

    const n3 = generateNode(3, null);
    const n2 = generateNode(4, n3);
    const n1 = generateNode(2, n2);

    const m3 = generateNode(4, null);
    const m2 = generateNode(6, m3);
    const m1 = generateNode(5, m2);

    const expectedString = '{"val":7,"next":{"val":0,"next":{"val":8,"next":null}}}';
    const resultString = JSON.stringify(addTwoNumbers(m1, n1));

    console.log("expectedString: " + expectedString);
    console.log("resultString:   " + resultString);
    resultString === expectedString
        ? console.log(true)
        : console.log(false); 
};

const testAddTwoNumbersCase2 = () => {
    console.log("Testing addTwoNumbers()");

    const n2 = generateNode(9, null);
    const n1 = generateNode(9, n2);

    const m3 = generateNode(9, null);
    const m2 = generateNode(9, m3);
    const m1 = generateNode(9, m2);

    const expectedString = '{"val":8,"next":{"val":9,"next":{"val":0,"next":{"val":1,"next":null}}}}';
    const resultString = JSON.stringify(addTwoNumbers(m1, n1));

    console.log("expectedString: " + expectedString);
    console.log("resultString:   " + resultString);
    resultString === expectedString
        ? console.log(true)
        : console.log(false); 
};

const generateNode = (value, nextNode) => {
    return {
        val: value,
        next: nextNode
    }
}

const main = () => {
    //Run Tests
    testConvertListToNumber();
    testAddTwoNumbers(); 
    testAddTwoNumbersCase2();

    convertIntToList(1);
}
main();


