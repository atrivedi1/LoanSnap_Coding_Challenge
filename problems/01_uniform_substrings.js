/*

UNIFORM SUBSTRINGS

1) Problem Summary:
+Inputs: input string (string), target_values (array), num_targets (integer)
+Output = array of boolean values

2) Example:
+Inputs
 -input string = abbccaadf
 -target_values = [4,2,5,3,7] 
 -num_targets = 5

Output
+[true,true,false,true,false]

3)Time Complexity of Solution (BELOW): 
 -O(N + T) ==> where N number of characters in string and T = number of targeted_values

*/

const letterValues = {
  a: 1, 
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

function matchingSubstrings(input, targeted_values, num_targets) {
  //If input value is empty, return false for all target values
  if(!input || input === "") {
    return new Array(num_targets).fill(false);
  }
 
  //otherwise, define hash + trackers
  let result = [];
  let uniformStringsByVal = {};
  let prevLetter = input[0];

  //initialize hash/current uniform string var to value of first letter 
  let prevLetterVal = calculateValueOf(prevLetter);
  uniformStringsByVal[prevLetterVal] = [prevLetter];
  let currUniformString = input[0];

  //iterate through each letter in string, starting w/ 2nd, and populate hash with all uniform strings by value
  for(let i = 1; i < input.length; i++) {
    //id current letter
    let currLetter = input[i];

    //if current letter does not equal to previous, add it to hash and reset trackers
    if(currLetter !== prevLetter) {
      //calc curr val of current letter
      let currLetterValue = calculateValueOf(currLetter);
 
      //add letter val/letter to hash
      addStringToHash(currLetterValue, currLetter, uniformStringsByVal);

      //reset trackers
      prevLetter = currLetter;
      currUniformString = currLetter;
    }

    //if current letter DOES equal previous letter, add to uniform string and add uniform string val to hash
    else {
      currUniformString += currLetter;
      let currUniformStringVal = calculateValueOf(currUniformString);
      addStringToHash(currUniformStringVal, currUniformString, uniformStringsByVal);
    }
  }

  //populate result
  for(let j = 0; j < targeted_values.length; j++) {
    let currTarget = targeted_values[j];
    uniformStringsByVal[currTarget] ? result.push(true) : result.push(false)
  }
 
  return result;
}

function calculateValueOf(string) {
  return string.length * letterValues[string[0]];
}

function addStringToHash(val, string, hash) {
  if(!hash[val]) {
    hash[val] = [string];
  } else {
    hash[val].push(string);
  }
}

module.exports = {
  matchingSubstrings: matchingSubstrings
}