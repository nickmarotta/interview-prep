main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

function mergeRanges(ranges) {

    const sortedByStartTime = ranges.sort((a, b) => {
        if (a.startTime  === b.startTime) return 0; 
        else if (a.startTime > b.startTime) return 1; 
        else return -1;
    }); 

    // grab first start and end 
    
    const condensedRanges = []
    let highestVisitedIndex = -1; 

    sortedByStartTime.forEach((curMeeting, curIndex) => {
        //console.log("Highest Visited Index", highestVisitedIndex);

        if(curIndex <= highestVisitedIndex) {
            //console.log("we've seen this, so we're skipping");
            return;
        }
             
        
        let curStart = curMeeting.startTime;
        let curEnd = curMeeting.endTime;
        let curNextIndex = curIndex + 1 

        while(curNextIndex <= sortedByStartTime.length - 1) {
            let nextMeeting = sortedByStartTime[curNextIndex];
            console.log(`comparing start ${curStart} and end ${curEnd} to nextMeeting ${JSON.stringify(nextMeeting)}`);

            const isNextMeetingStartTimeDuringCurrent = curStart <= nextMeeting.startTime && nextMeeting.startTime <= curEnd;
            const isNextMeetingEndTimeDuringCurrent = curStart <= nextMeeting.endTime && nextMeeting.endTime <= curEnd;

            if(isNextMeetingStartTimeDuringCurrent && !isNextMeetingEndTimeDuringCurrent) {
                curEnd = nextMeeting.endTime;
                highestVisitedIndex = curNextIndex;
            } else if(isNextMeetingStartTimeDuringCurrent && isNextMeetingEndTimeDuringCurrent) {
                highestVisitedIndex = curNextIndex;
            }

            curNextIndex++; 
        }

       // console.log(`exited while loop and adding start ${curStart} and ${curEnd}`)
        condensedRanges.push({startTime: curStart, endTime: curEnd});
        //console.log("condensedRanges", JSON.stringify(condensedRanges));
    })

    return condensedRanges;
} 


//UTILITIES 



// TESTS 
function runAllTests() {
    //functionUnderTest, verboseLogging, describe, expected, ...input
    const verboseLogging = true; 

    const i2 = [
        { startTime: 0,  endTime: 3 },
        { startTime: 4,  endTime: 6 },
    ];
    const e2 = [
        { startTime: 0,  endTime: 3 },
        { startTime: 4,  endTime: 6 },
    ];
    genericTest(mergeRanges, verboseLogging, "", e2, i2);

    const i1 = [
        { startTime: 0,  endTime: 3 },
        { startTime: 2,  endTime: 4 },
    ];
    const e1 = [
        { startTime: 0,  endTime: 4 },
    ];
    genericTest(mergeRanges, verboseLogging, "", e1, i1);

    const input = [
        { startTime: 0,  endTime: 1 },  
        { startTime: 3,  endTime: 5 },  
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
    ]
    const expected =   [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 12 },
    ]
    genericTest(mergeRanges, verboseLogging, "",expected, input);


    const i3 = [
        { startTime: 0,  endTime: 10 },
        { startTime: 2,  endTime: 4 },
    ];
    const e3 = [
        { startTime: 0,  endTime: 10 },
    ];
    
    genericTest(mergeRanges, verboseLogging, "", e3, i3);

    const i4 = [
            { startTime: 1, endTime: 2 }, 
            { startTime: 2, endTime: 3 }
    ];
    const e4 = [
        { startTime: 1, endTime: 3 }, 
    ]
    genericTest(mergeRanges, verboseLogging, "meetings only touch", e4, i4);
    
}

function genericTest(functionUnderTest, verboseLogging, describe, expected, ...input) {
    const result = functionUnderTest(...input);
    if(verboseLogging) {
        console.log("=======================================");
        console.log(`[TEST LOG]: Testing ${functionUnderTest.name}`);
        console.log(`[TEST LOG]: Describe: ${describe}`);
        console.log(`[TEST LOG]: Input:           ${JSON.stringify(...input)}`)
        console.log(`[TEST LOG]: Expected Result: ${JSON.stringify(expected)}`)
        console.log(`[TEST LOG]: Actual Result:   ${JSON.stringify(result)}`);
        JSON.stringify(result) === JSON.stringify(expected) 
            ? console.log("[TEST LOG] Passed:", true)
            : console.log("[TEST LOG] Passed:", false)
        console.log("=======================================");
    } else {
        JSON.stringify(result) === JSON.stringify(expected) 
            ? console.log(`[TEST LOG]: Testing ${functionUnderTest.name} - ${describe}\n[TEST LOG]: Passed: `, true)
            : console.log(`[TEST LOG]: Testing ${functionUnderTest.name} - ${describe}\n[TEST LOG]: Passed: `, false);
    }
}
/*

 
0 1 
3 5
4 8 
10 12 
9 10 


*/