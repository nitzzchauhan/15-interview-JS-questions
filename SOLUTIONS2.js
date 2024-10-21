// Find the First Non-Repeating Character in a String.

// solution 1: hash map (object in js)

function firstNonRepeatingCharacter(str) {
  const charCount = {};

  //    step1: count the occurence of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

//   step 2: Find the first Character with a count 1
    for (const char of str) {
        if (charCount[char] === 1){
            return char
        }    
    }

    return null


}

console.log(firstNonRepeatingCharacter("swwiiss"));

// Example:
// Input: "swiss"
// Output: "w"
