/*

GENERATE STRING BASED ON PRIORITIES

1) Description:
Given an array where the value of an element in the array contains 2 values; first (_x) being an 
integer ranging from 0 - 10 and the second (_s) being a valid string containing only lowercase letters, 
generate a string based on _x as the priority (ascending) and use _s as the string to be added.

2) Problem Summary:
+Inputs: array of arrays, num of elements
+Output = string

3) Other Requirements:
+Replace _s within the first half of the input array with value '*'
+Separate each _s added to final string with a space.

4) Assumptions:
+NOTE: Assuming we cannot use out of the box sort function
+num_elements will always be equal to the length of _array
+num_elements will always be even
+elements will not be empty
+1<=length(_s)<=100
+0<=_x<=10

5) Example:
+Inputs 
 -array = [[0, op],[1, iii],[2, t],[0, hello],[3, world],[3, everyone]]
 -num of elements = 6

Output
* hello * * world everyone

6)Time Complexity of Solution (BELOW): 
 -O(NLog(N))
*/

function generateString(elements, num_of_elements) {
  //replace _s in first half of input array w/ "*"
  let midPoint = Math.floor(num_of_elements/2);

  for(let i = 0; i < midPoint; i++) {
    elements[i][1] = "*";
  }

  //sort updated elements by ranking
  let sortedElements = mergeSort(elements);

  //map sorted elements to array that JUST contains strings
  let mappedSortedStrings = sortedElements.map((el) => {
    return el[1];
  })

  //convert mapped/sorted elements to string and return
  return mappedSortedStrings.join(" ");
}

function mergeSort(elements) {
  //base case
  if(elements.length < 2) {
    return elements;
  }

  //define low, high, midPoint
  let low = 0;
  let high = elements.length;
  let midPoint = Math.floor((low + high)/2);

  //recursively id left and right halves of input array
  let left = mergeSort(elements.slice(low, midPoint));
  let right = mergeSort(elements.slice(midPoint));

  //merge left and right 
  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while(left.length > 0 && right.length > 0) {
    left[0][0] <= right[0][0] ? result.push(left.shift()) : result.push(right.shift());
  }

  return result.concat(left.length ? left : right);
}

module.exports = {
  generateString: generateString
}