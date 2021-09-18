// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

//PSUEDO for test: write test for function divByThree (not yet created), function should take number and return string to confirm whether evenly divisible by 3. Pass in 15, 0, and -7 as arguments and expect return of "15 is divisible by three", "0 is divisible by three", and "-7 is not divisible by three" respectively

describe("testing divByThree", () => {
    it("accepts number and returns a string confirming whether it is divisible by three", () =>{
        expect(divByThree(15)).toEqual("15 is divisible by three")
        expect(divByThree(0)).toEqual("0 is divisible by three")
        expect(divByThree(-7)).toEqual("-7 is not divisible by three")
    })

})
//ran $yarn jest and failed the test because "ReferenceError: divByThree is not defined"



// b) Create the function that makes the test pass.

// const divByThree = (num) => {
// //declare a variable that takes in parameter num
//     if(num % 3 === 0){
//     //use if statement to test if num is evenly divisible by three using modulus
//         return `${num} is divisible by three`
//         //if num%3 === 0 is true return string interp confirming it is evenly divisible
//     } else{
//     //if false
//         return `${num} is not divisible by three`
//         //return string interp confirming it is not evenly divisble
//     }
// }

//ran $yarn jest and the test passed. 

// refactor with ternary operator
const divByThree = (num) => {
//declare function that takes num as arg
        return (num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`)
        //return using conditonal ternary operator where it tests condition before ? and returns num is divisible if true and num is not divisible (after :) if false 
    }
    
//ran $yarn jest and the test passed. 



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//PSUEDO for test: write test for function capitalizeArray (not yet created), function should take in an array and return an array with all words capitalized. Pass in ["streetlamp", "potato", "teeth", "conclusion", "nephew"] and ["temperature", "database", "chopsticks", "mango", "deduction"] and return ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] and ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"] respectively.

describe("testing capitalizeArray", () => {
    it("accepts an array returns the array with each element capitalized", () =>{
        expect(capitalizeArray(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeArray(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })

})

//ran $yarn jest and failed the test because "ReferenceError: capitalizeArray is not defined"

// b) Create the function that makes the test pass.

// const capitalizeArray = (array) => {
// //declare function capitalizeArray that takes param array
//     for (let i = 0; i < array.length; i++){
//     //use for loop to iterate through array
//         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
//         //reassign element in array by referencing the element, finding the first char with charAt(0), use .toUpperCase() to capitalize the first char, and + array[i]slice(1) to concatenate the remainder of the string minus the first character
//     }
//     return array
//     //return mutated array
// }


//failed first run with jest test because I only ended up returning the first letter capitalized
//got green! ended up passing second time after I fixed a couple syntax errors

//refactor
const capitalizeArray = (array) => {
//declare a function capitalizeArray takes array parameter
   return array.map(value => (value.charAt(0).toUpperCase() + value.slice(1)));
       //returns .map on array
       //where .map will take each value of the old array and return the mutated value in a new array 
       //where mutated value is capitalized first char of the old array value concatenated with remainder of old value minus the first char
}

//ran $yarn jest a couple of times to get the syntax right. Test now passes.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

//PSUEDO for test: write test for function firstVowel (not yet created), function should take in a string and return the index of the first vowel. Passing in "learn", "academy", and "challenges" returns 1  0 , and 2 respectively.

describe("testing firstVowel", () => {
    it("accepts a string and returns the index of the first vowel", () =>{
        expect(firstVowel("learn")).toEqual(1)
        expect(firstVowel("academy")).toEqual(0)
        expect(firstVowel("challenges")).toEqual(2)
    })

})
//ran $yarn jest and failed the test because "ReferenceError: firstVowel is not defined"

// b) Create the function that makes the test pass.

// const firstVowel = (string) =>{
// //declare function firstVowel that takes param string
// let index;
// //first split into an array using .split()
//     for(let i = 0; i < string.length; i++){
//     //for loop to iterate through string
//         if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
//         // test each element to see if equals a, e, i ,o ,u
//             index = i;
//             break
//             //set index to i of first vowel and break loop
//         }
//     }
//     return index;
//     //return index of the first vowel we find
// }

//fixed some variable declarations and passed the test


//refactor - slimmed on some variables and logic
const firstVowel = (string) =>{
//declare function firstVowel that takes param string
    for(let i = 0; i < string.length; i++){
        //for loop to iterate through string
        let char = string[i];
        //initiate variable to increase readability
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            // test each element to see if equals a, e, i ,o ,u
            return i;
            //ends the function and returns i which is the index of the first vowel
        }
    }
    return -1;
    //if the for loop runs through the whole string and does not find a vowel, return -1 to symbolize a vowel not existing
}

//test passed after adjusting some return statement locations