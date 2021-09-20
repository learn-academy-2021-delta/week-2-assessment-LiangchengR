// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: ["D", "e", "l", "t", "a", " ", "2", "0", "2", "1"] 
// b) Verify and explain: The .split() method is built-in method that takes a string and returns an array split by how you specify. Using ("") will split the string by each character.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: I did not realize there is no return statement....the console.log returns undefined because the function is not returning anything. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The .map() high order function will 1) take in an array, 2) iterate through that array and mutate each element depending on the instructions specified, and then 3) return a new aray. In this case, map multipied each element in the original array [4, 5, 6, 7, 8] by 2 and then stored it in a new array named multBy2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: The .filter() high order function will 1) take an array 2) iterate through the array and test each element. If the element or value equals true for the condition you specified, it will 3) add it to the new array. In this case, it is testing each element in the array [11, 12, 13, 14, 15] and testing whether the element is even or not. If it is even, it returns true and is pushed to the new array oddsOnly.


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Delta", year: 2021}
// b) Verify and explain: The code above is a class which constructs an object. An object has specific formatting as follows: { key1: value1, key2: value2, key3: value3 }. In this case, we created a variable named learnStudent and then 'built' the class Learn using the keyword new. We then passed an argument of string "George" into the class. The class then constructed the object using the passed in argument which was assigned the parameter name. Cohort and Year will always be "Delta" and 2021 respectively because they are hard coded values.
