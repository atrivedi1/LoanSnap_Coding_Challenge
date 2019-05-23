//local requirements
const { matchingSubstrings } = require('../01_uniform_substrings.js')
const { generateString } = require('../02_generate_ordered_string.js')

//3rd party requirements
const expect = require('chai').expect;

////////////////////////////////////////////////////////////
///////////////  UNIFORM SUBSTRING TESTS!!!  ///////////////
////////////////////////////////////////////////////////////

describe('Uniform Substrings - Tests', function () {
  it('should handle empty or falsey input string', function () {
    // 1. ARRANGE
    let input = null;
    let target_values =  [4,2,5,3,7];
    let num_targets = target_values.length;
  
    // 2. ACT
    let ans = matchingSubstrings(input, target_values, num_targets);

    // 3. ASSERT
    expect(ans).to.be.eql([false, false, false, false, false]);
  });


  it('should handle sample input, target_values, and num_targets provided by LoanSnap', function () {
    // 1. ARRANGE
    let input = "abbccaadf";
    let target_values =  [4,2,5,3,7];
    let num_targets = target_values.length;
  
    // 2. ACT
    let ans = matchingSubstrings(input, target_values, num_targets);

    // 3. ASSERT
    expect(ans).to.be.eql([true, true, false, true, false]);
  });

  it('should handle input length of 1 when target value IS found', function () {
    // 1. ARRANGE
    let input = "a";
    let target_values = [1];
    let num_targets = target_values.length;
  
    // 2. ACT
    let ans = matchingSubstrings(input, target_values, num_targets);

    // 3. ASSERT
    expect(ans).to.be.eql([true]);
  });

  it('should handle input length of 1 when target value is NOT found', function () {
    // 1. ARRANGE
    let input = "a";
    let target_values = [4];
    let num_targets = target_values.length;
  
    // 2. ACT
    let ans = matchingSubstrings(input, target_values, num_targets);

    // 3. ASSERT
    expect(ans).to.be.eql([false]);
  });

  it('should handle case where num_targets greater than input length', function () {
    // 1. ARRANGE
    let input = "aff";
    let target_values =  [8,12,3,1];
    let num_targets = target_values.length;
  
    // 2. ACT
    let ans = matchingSubstrings(input, target_values, num_targets);

    // 3. ASSERT
    expect(ans).to.be.eql([false, true, false, true]);
  });

  it('should handle long input', function () {
    // 1. ARRANGE
    let input = "aspodifuaospdifupaaopiccccsiidifjaafjfkkkkjswjefjhghaiwa";
    let target_values =  [1,14,3,10,8,5,12,9,11,2];
    let num_targets = target_values.length;
  
    // 2. ACT
    let ans = matchingSubstrings(input, target_values, num_targets);

    // 3. ASSERT
    expect(ans).to.be.eql([true, false, true, true, true, true, true, true, true, true]);
  });
});



////////////////////////////////////////////////////////////
///////////////  GENERATE ORDERED STRING TESTS!!!  ///////////////
////////////////////////////////////////////////////////////

describe('Generate Ordered String - Tests', function () {

  it('should handle sample input _array provided by LoanSnap', function () {
    // 1. ARRANGE
    let _array = [[0, "op"],[1, "iii"],[2, "t"],[0, "hello"],[3, "world"],[3, "everyone"]]
    let num_elements = _array.length;
  
    // 2. ACT
    let ans = generateString(_array, num_elements);

    // 3. ASSERT
    expect(ans).to.be.equal("* hello * * world everyone");
  });

  it('should handle input of length 2 where first element is higher priority than second', function () {
    // 1. ARRANGE
    let _array = [[0, "goodbye"], [1, "hello"]]
    let num_elements = _array.length;
  
    // 2. ACT
    let ans = generateString(_array, num_elements);

    // 3. ASSERT
    expect(ans).to.be.equal("* hello");

  });

  it('should handle input of length 2 where first element is lower priority than second', function () {
    // 1. ARRANGE
    let _array = [[4, "goodbye"], [1, "hello"]]
    let num_elements = _array.length;
  
    // 2. ACT
    let ans = generateString(_array, num_elements);

    // 3. ASSERT
    expect(ans).to.be.equal("hello *");

  });

  it('should maintain order, even if all elements in input have same priority', function () {
    // 1. ARRANGE
    let _array = [[0, "oo"], [0, "hi"], [0, "hello"], [0, "world"], [0, "it's"], [0, "a"], [0, "beautiful"], [0, "day"]]
    let num_elements = _array.length;
  
    // 2. ACT
    let ans = generateString(_array, num_elements);

    // 3. ASSERT
    expect(ans).to.be.equal("* * * * it's a beautiful day");
  });

  it('should handle long input with random priority levels', function () {
    // 1. ARRANGE
    let _array = [
      [9, "a"], //*
      [1, "b"], //*
      [5, "c"], //*
      [0, "d"], //*
      [3, "e"], //*
      [2, "f"], //*
      [8, "g"], //*
      [6, "h"], //*
      [6, "i"], //*
      [1, "j"], //*
      [2, "k"], //*
      [8, "l"], //*
      [7, "m"], //*
      [4, "n"], //*
      [0, "o"], //*
      [1, "p"], //*
      [5, "q"], 
      [9, "r"],
      [9, "s"],
      [2, "t"],
      [0, "u"],
      [10, "v"],
      [4, "w"],
      [3, "x"],
      [2, "y"],
      [8, "z"],
      [4, "aa"],
      [6, "ab"],
      [1, "ac"],
      [3, "ad"],
      [7, "ae"],
      [0, "af"]
    ]

    let num_elements = _array.length;
  
    // 2. ACT
    let ans = generateString(_array, num_elements);

    // 3. ASSERT
    expect(ans).to.be.equal("* * u af * * * ac * * t y * x ad * w aa * q * * ab * ae * * z * r s v");
  });
});