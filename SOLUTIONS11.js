// Check if a String is an Anagram

function areAnagram(str1,str2){
    const sortedStr1 = str1.split('').sort().join('') 
    const sortedStr2 = str2.split('').sort().join('')
    return sortedStr1 === sortedStr2

}


// Example usage

console.log(areAnagram("listen",'silent'))
console.log(areAnagram("madam",'madam'))
console.log(areAnagram("hello",'olleh'))
console.log(areAnagram("hello",'world'))