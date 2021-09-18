# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: Iteration is repeating a process over and over again until a condition is met. Most cases it is used in relation to iterating through strings or arrays.

  Researched answer: In reference to code, iteration refers to the execution of a block of code repeatedly until a condition is met (performing repetitive tasks). Specifically, we use iteration for any data types with the length property meaning strings and arrays. An example of iteration would be 'for' loops. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() takes in value(element), index, and array. Value is required, but index and array are optional.

  Researched answer:.map() is a high order function that iterates through an array and will return an array with the same length. .map() has a required parameter called callbackFn which refers to the function that mutates every element of the argument array and returns the result into a new array. It also requires the parameter element (or value) which refers to the element processed as it iterates through the argument array. There are also 3 other optional parameters: index which refers to the location of the current element as it iterates through the array, array which is the array that .map(). was called on, and thisArg which is used to specify a different argument than what 'this' may actually be referencing(?).
  
  //Hey Austin, would you let me know if im understanding thisArg correctly? (if my understanding is wrong, would you let me know what it actually refers to?)
  Thanks!



3. What is object destructuring?

  Your answer: Object destructing refers to the creation of a pathway to a specific key-value pair within an object. We usually assign the pathway to some variable and we can then call on that variable instead of looking for the property over and over again.

  Researched answer: Object destructuring is simply a special way of assigning variables. It allows us to make a direct connection to a pathway to a specific property of an object. It requires a variable keyword, the list of variable names within curly braces, and an assignment operator. 



4. What is the difference between a function and a method?

  Your answer: A function is a way to perform the same set of steps over and over again but taking in different arguments. It is dynamic and is encapsulated. A method refers to a function belonging to some object or class.

  Researched answer: Functions are a set of statements that perform a task or performs calculations over and over again. They should be encapsulated meaning they should not interact with the rest of the code. A method in comparison is a function that is a property of an object or within a class. So all methods are functions but not all functions are methods.


5. What is the difference between a class and an object?

  Your answer: An object is a collection of properties where properties are key(name) value pairs. Class is a template for objects. It allows us to create multiple objects by passing unique arguments when building the class. 

  Researched answer: As above, objects are collections of key-value pairs. They are usually set up using declaration, an assignment operator, curly braces, and key value pairs using colons and commas (key:value,) Objects can even contain functions, arrays, and other objects. Also as above, Class is considered a template for objects and is considered a special function. They contain data and behavior, are encapsulated, and have their own scope. They require declaration, name in PascalCase, executable blocks of code including constructor(), and the keyword 'new'.  



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting refers to the ability to call on something before it has been defined. For example, var supports hoisting but let and const do not. Function () supports hoisting but not arrow notation = () =>{} because it is considered anonymous. Classes are also considered not hoisted.

  Researched answer: TIL, that my understanding of hoisting is wrong. Hoisting is referred to (per W3) as JavaScript's default behavior of moving all of the declarations to the top of the current scope. When we refer to hoisting, we are referring to hoisting declaration ONLY naturally, it seems initalization is NEVER hoisted. Var supports declaration hoisting meaning that it will recognize a variable exists but will not recognize initialization. Let and const does not support hoisting of declaration. As above, function () (function declarations no expressions) support hoisting and class declarations do not.

  console.log(x)
  var x = 1; //returns undefined

  console.log(y)
  let y = 1; //returns VM142:1 Uncaught ReferenceError: y is not defined
  
  //const returns the same as let



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance refers the creation of child object classes that 'inherit' features from their parent classes. It is also referenced as a way for one class to extend another class giving us the ability to add additional (in a way) features. We use the keyword 'extends' in the declaration to add on to the behaviors and data of the parent class (class Child extends Parent{}). Using super() within constructor() is a way to pass the attributes from the constructor in the parent class to the child.

2. React: React is a free and open-source front end JavaScript library for building UI components. It is a front end framework to build web pages. It is maintained by Facebook. It uses declaritive views and is component based. 

3. React state: State is a JavaScript object used by React. The state object is a place to store property values for a specific component, specifically observable properties that dictates how the component behaves. State is initialized in the constructor method within a class. It can contain many properties and the information can change. Per W3 when the state object changes, the component re-renders.

4. React lifecycle methods: Also referred to as component lifecycle. There are three steps in the component lifecyle:
1) Mounting (or the creation and insertion of a component into a DOM: we commonly use constructor(), getDerivedStateFromProps(), render() (REQUIRED and will always be called), componentDidMount()
2) Updating (or the changes to props or state): we commonly use getDerivedStateFromProps(), shouldComponentUpdate(), render() (REQUIRED), getSnapshotBeforeUpdate(), componentDidUpdate()
3) Unmounting (or the removal of a component from the DOM): we commonly use componentWillUnmount()

5. DOM: DOM refers to Document Object Model which is the data representation of objects that is comprised of a web pages structure and content. It is not a programming language. It has a tree structure where each branch ends in a node and each node contains objects. Without it, JavaScript would not know what a web page, HTML doc, SVG doc, and what their respective components are or how they are modeled.
