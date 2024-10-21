// str.--> array 
//  transform each word
// Join all the words back into a single string


function titleCase(str){
    // step: 1 convert the entire string to lowercase to avoid any mixed-case issues
    let words = str.toLowerCase().split(' ')


    // step 2: Loop through each word and capitalise the first letter    
    let titleCaseWords = words.map((word)=>{
        // capitalise the first letter and add the rest of the word 
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
 
    //step 3: Join the words back into single string with spaces in between
    return titleCaseWords.join(' ')

}


console.log(titleCase("hello world"))
console.log(titleCase("Programming is fun"))