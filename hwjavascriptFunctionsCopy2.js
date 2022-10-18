// Please write code that implements various functions, following the requirements in the list below:

// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

// let x = 0
// let y = 6
// const maxofTwoNumbers = (x,y) => {
//     if (x > y) {
//         return x;
//     } else { 
//         return y;
//     }
// }
// console.log(maxofTwoNumbers(x,y))

// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// const maxOfThree = (x, y, z) => {
//         return Math.max(x, y, z)
//     }
//  console.log(maxOfThree(9, 8, 3))

// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// const isCharacterAVowel = (letter) => {
//     if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     return "True"// or "Character is a vowel.";
//     } else {
//         return "False"// or "Charater is a Consonant.";
//     }
// };
// console.log(isCharacterAVowel("b"))

//or  const isCharacterAVowel = (letter) => {
// if ('aeiou'.includes(letter)){
//     return true;
    // } else {
    //     return false;
    // }
// }
// console.log(isCharacterAVowel('a'))


  
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// const sumArray = (array) => {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]))

// const multiplyArray = (array) => {
//     var sum = 1;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     return sum;

// }
// console.log(multiplyArray([1, 2, 3, 4]))

// 5. Write a function that returns the number of arguments passed to the function when called.
//arguments.length

// const argumentsPassed = (w, x, y, z) => {

// }
// console.log(argumentsPassed.length)

// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// const reverseString = (str) => {
//       return str.split("").reverse("").join("");
//     }
    
//     console.log(reverseString('jag testar'));

// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// let myArr = ["shortword", "supercalifragilisticexpialiodcious", "mediumlengthword"]
// const findLongestWord = (myarray) => {
//     let longestWord = "";
//     for (var i = 0; i < myarray.length; i++) { 
//         if(myarray[i].length > longestWord.length) {
//             longestWord = myarray[i]
//         }  
//     }
//     return longestWord   
// }
// console.log(findLongestWord(myArr).length)

//changing the for loops variable to equal a certain number will yield the arrays index length value. var i = 0 is "shortword" which yields "9". var i = 1 is "supercalifragilisticexpialiodcious" which yields 34, var i = 2 is "mediumlengthword which yields 16. How do I tell the for loop to loop through array automatically from start to finish to yield the longest word and its length?  Answer return longestWord was inside for loop and unable to be called per function rules. Moved return longestWord between last two curly braces and returned correct length of longest word.

// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.


let array = ["a", "bb", "ccc", "dddd", "eeeee"]

const filterLongWords = (i) => {
   let newArray = []
   for (word of array) {
      if (word.length > i) {
         newArray.push(word)
      }
   }
   return newArray
}
console.log(filterLongWords(3))





