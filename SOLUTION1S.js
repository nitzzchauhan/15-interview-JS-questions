
// Reverse a String in JavaScript.
// Description: Write a function that takes a string and returns it reversed.
// Example:
// Input: "hello"
// Output: "olleh"

// solution 1: using builtin methods

// function reverseString(str){
//     return str.split('').reverse().join('')
// }


// // example usage
// console.log(reverseString("Hello")) // 'olleh' : output

// solution 2 without built in method

// function reverseString(str){
//     let reversed = ''

//     for (let i = str.length-1;i >= 0;i--){
//         reversed += str[i]
//         }    
//     return reversed
// }


// example usage
// reverseString("Hello") // 'olleh' : output



// solution 3 Using Recurion

function reverseString(str){
   if (str===""){
    return ""
   }
   return  reverseString(str.substr(1)) + str[0]  
}

// CASE 1 -> 'Hello' --> 'ello' + "h"
// CASE 2 -> 'ello' --> 'llo' + "e"
// CASE 3 -> 'llo' --> 'lo' + "l"
// CASE 4 -> 'lo' --> 'o' + "l"
// CASE 5 -> 'o' --> '' 

// "olleh" 


// example usage
console.log(reverseString("Hello")) // 'olleh' : output