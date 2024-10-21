// count vowels in a string

function countVowels(str){
    const vowels = 'aeiouAEIOU' //List of vowels (case insensitive)
    let count = 0

    for (const char of str) {
        if (vowels.includes(char))    {
            count++ // Increment count for each vowel
        }   
    }
    return count 
};  

//example usage
console.log(countVowels("chauhan"));  // Output: 2