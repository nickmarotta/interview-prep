
class WordCloudData {
    constructor(inputString) {
      this.wordsToCounts = new Map();
      this.punctuations = new Set([',', '.', '?', '!', ':', ';', '\"']);
      this.populateWordsToCounts(inputString);
    }
  
    

    populateWordsToCounts(inputString) {
        const splitted = inputString.split(" "); 

        splitted.forEach( (word) => {
            const lastChar = word.slice(-1);
            const maybeTrimmed = this.punctuations.has(lastChar) ? word.slice(0, -1) : word; 
            const upperCased = maybeTrimmed.toUpperCase();
            
            if(this.wordsToCounts.has(upperCased)) {
                this.wordsToCounts[upperCased] = this.wordsToCounts[upperCased] + 1;
            } else {
                this.wordsToCounts[upperCased] = 1;

            }
        })
    }
  
  }
  

  function main() {
      console.log("Starting!");
  
      //Run tests
      runAllTests();
  }
  

//UTILITIES 

// TESTS 
function runAllTests() {
    const inputs = [
        "hello world!"
    ];

    const expecteds = [
        new Map([["hello", 1], ["world", 1]])
    ];
    

    for(let i=0; i<inputs.length; i++) {

        const result = new WordCloudData(inputs[i]);
        console.log(`Testing input ${inputs[i]} \nExpected ${JSON.stringify(expecteds[i])}\nGot ${JSON.stringify(result.wordsToCounts)}`);
    }
    
}


main();
