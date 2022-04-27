/*
    https://leetcode.com/problems/subdomain-visit-count/
*/



main();

function main() {
    console.log("Starting!");

    //Run tests
    runAllTests();
}

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 function subdomainVisits(cpdomains) {
  
    if(cpdomains.length === 0) {
        return [];
    }

    const domainsByCounts = new Map();  
    
    domainsByCounts.set

    for(let i=0; i<cpdomains.length; i++) {

        const { count, lowestLevel, middleLevel, topLevel } = splitDomain(cpdomains[i]);
        const countInt = parseInt(count);

        if(lowestLevel) {
            if(domainsByCounts.has(lowestLevel)) {
                const original = domainsByCounts.get(lowestLevel);
                domainsByCounts.set(lowestLevel, original + countInt);
            } else {
                domainsByCounts.set(lowestLevel, countInt);
            }
        }

        if(domainsByCounts.has(middleLevel)) {
            const original = domainsByCounts.get(middleLevel);
            domainsByCounts.set(middleLevel, original + countInt);
        } else {
            domainsByCounts.set(middleLevel, countInt);
        }

        if(domainsByCounts.has(topLevel)) {
            const original = domainsByCounts.get(topLevel);
            domainsByCounts.set(topLevel, original + countInt);
        } else {
            domainsByCounts.set(topLevel, countInt);
        }
    }

    const returnArray = [];

    for (const [domainKey, countValue] of domainsByCounts) {
        returnArray.push(`${countValue} ${domainKey}`);
    }

    return returnArray;
};

/*
    Example Input: "9001 discuss.leetcode.com"
    Returns {
        count: 9001,
        lowestLevel: "discuss.leetcode.com",
        middleLevel: "leetcode.com"
        topLevel: "com"
    }
*/
function splitDomain(cpDomain) {
    
    const splitBySpace = cpDomain.split(" ");
    const splitByDots = splitBySpace[1].split(".");
    
    if(splitByDots.length == 2) {
        return {
            count: splitBySpace[0],
            middleLevel: splitBySpace[1],
            topLevel: splitByDots[1]
        }
    }
    else if(splitByDots.length == 3) {
        return {
            count: splitBySpace[0],
            lowestLevel: splitBySpace[1],
            middleLevel: `${splitByDots[1]}.${splitByDots[2]}`,
            topLevel: splitByDots[2],
        }
    } else {
        throw Error("unhandled domain!", cpDomain);
    }
}


//UTILITIES 

// TESTS 
function runAllTests() {
    //console.log(JSON.stringify(splitDomain("9001 leetcode.com")));

    console.log(JSON.stringify(subdomainVisits(["9001 discuss.leetcode.com", "100 other.leetcode.com", "50 leetcode.com"])));

}
