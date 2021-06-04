/**
 * 01. EXPLORE DIFFERENCES BETWEEN THE var and let KEYWORDS
 */

/**
 * One of the biggest problems with declaring variables with the var keyword is that you can override variable
 * declarations without an error.
 */

// var camper = 'James';
// var camper = 'David';
// console.log(camper);
// // David

/**
 * In a small application, you might not run into this type of problem, but when your code become larger,
 * you might accidentally overwrite a variable that you did not intend to overwrite.
 * Because this behavior do not throw an error, searching and fixing bugs becomes more difficult.
 */

/**
 * A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword.
 * If you were to replace var with let in the variable declarations of the code above, the result
 * would be an error:
 */

// let camper_2 = 'Alibaba';
// let camper_2 = 'Alepake'; // error

/**
 * So unlike var, when using let, a variable with the same name can only be declared once.
 * Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions.
 * For instance:
 */

// 'use strict';
// x = 3.14;
// // -> x is not defined
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 02. COMPARE SCOPE OF THE var AND let KEYWORDS
 */

/**
 * When you declare a variable with the var keyword, it is declared globally, or locally if delcared in a function.
 *
 * The let keyword behaves similarly, but with some extra features. When you declare a variable with
 * the let keyword inside a block , statement, or expression, its scope is limited to
 * that block, statement, expression.
 */

// Example
// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }

// console.log(numArray);
// // [0, 1, 2]
// console.log(i);
// // 3

/**
 * The code above is similar to the following:
 */
// var numArray = [];
// var i;

// for (i = 0; i < 3; i++) {
//   numArray.push(i);
// }

// console.log(numArray);
// // [0, 1, 2]
// console.log(i);
// // 3

/**
 * This behavior will cause problems if you were create a function and store it for later use inside a for loop
 * that uses the i variable. This is because the stored function will always refer to the value of the updated
 * global i variable.
 */

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }

// console.log(printNumTwo());
// // 3

/**
 * As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and
 * the printNumTwo() returns the global i and not the value i had when the function was created in the for loop.
 * The let keyword does not follow this behavior:
 */

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }

// console.log(printNumTwo());
// // 2
// console.log(i); // error: i is not defined

/**
 * Here the console will display the value 3, and an error that i is not defined.
 *
 * i is not defined because it was not delcared in the global scope. It is only declared within
 * the for loop statement.
 *
 * printNumTwo() returned the correct value because three different i variables with
 * unique values (0, 1, and 2) were created by the let keyword within the loop statement.
 */
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 04. MUTATE AN ARRAY DELCARED WITH const
 */

/**
 * It is important to understand that objects (including arrays and functions) assigned to a variable using const
 * are still mutable. Using the const only prevents reassignment of the variable identifier.
 */

// const s = [5, 6, 7];
// s[2] = 45;
// console.log(s);
// // [5, 6, 45]

// s = [1, 2, 3]; // error: Assignment to constant variable

/**
 * As you can see, you can mutate the object [5, 6, 7] itself and the variable swill still point
 * to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because
 * const was used, you cannot use the variable identifier s to point to a different array using the
 * assignment operator.
 */
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 05. PREVENT OBJECT MUTATION
 */

/**
 * As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation.
 * To ensure your data doesn't change, Javascripts provide a function Object.freeze to prevent data mutation.
 *
 * Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at
 * changing the object will be rejected without an error.
 */

// let obj = {
//   name: 'FreeCodeCamp',
//   review: 'awesome',
// };

// console.log(obj.name);
// // FreeCodeCamp

// obj.name = 'Coursera';
// console.log(obj.name);
// // Coursera

// Object.freeze(obj);

// obj.name = 'Edx';
// console.log(obj.name);
// // Coursera

// obj.newProp = 'Test';
// console.log(obj.newProp);
// // undefined
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 06. USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS
 */

/**
 * In Javascript, we often don't need to name our functions, especially when passing a function to
 * another function. Instead, we create inline functions. We don't need to name these functions because
 * we do not reuse them anywhere else.
 *
 * To achieve this, we often use the following syntax:
 */

// const myFunc = function () {
//   const myVar = 'value';
//   return myVar;
// };

/**
 * ES6 provides us with the syntactic sugar to not have to write anonymous functions this way.
 * Instead, you can use arrow function syntax:
 */

// const myFunc = () => {
//   const myVar = 'value';
//   return myVar;
// };

/**
 * When there is no function body, and only a return value, arrow function syntax allows you to omit
 * the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions
 * into one-line statements:
 */

// const myFunc = () => 'value';

// Example
// const magic = () => new Date();
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 07. WRITE ARROW FUNCTIONS WITH PARAMETERS
 */

/**
 * Just like a regular function, you can pass arguments into an arrow function
 */

// const doubler = (item) => item * 2;

// console.log(doubler(4));
// // 8

/**
 * It is possible to pass more than one argument into an arrow function
 */

// const multiplier = (item, multi) => item * multi;

// console.log(multiplier(4, 3));
// // 12
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 08. SET DEFAULT PARAMETERS FOR YOUR FUNCTIONS
 */

/**
 * In order to help us create more flexible functions, ES6 introduces default parameters for functions
 */

// const greeting = (name = 'Anonymous') => `Hello ${name}!`;

// console.log(greeting());
// // Hello Anonymous!
// console.log(greeting('Peter'));
// // Hello Peter!

/**
 * The default parameter kicks in when the argument is not specified (it is undefined)
 */
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 09. USE THE REST PARAMETER WITH FUNCTION PARAMETERS
 */

/**
 * In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
 * With the rest parameter, you can create functions that take a variable number of arguments. These arguments
 * are stored in an array that can be accessed later from inside the function.
 */

// function howMany(...args) {
//   return `You have accessed ${args.length} arguments.`;
// }

// console.log(howMany(1, 2, 3));
// // You have accessed 3 arguments.
// console.log(howMany('string', null, [1, 2, 3], {}));
// // You have accessed 4 arguments.

/**
 * The rest parameter eliminates the need to check the args array and allow us to apply map(),
 * filter() and reduce() on the parameters array.
 */

// const sum = (...args) => args.reduce((a, b) => a + b, 0);

// console.log(sum());
// // 0
// console.log(sum(1, 2, 3, 4));
// // 10
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 10. USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE
 */

/**
 * ES6 introduces the spread operator, which allow us to expand arrays and other expressions in places where
 * multiple parameters or elements are expected.
 */

/**
 * The ES5 code below uses apply() to compute the maximum value in an array:
 */

// var arr = [6, 89, 3, 45];
// var maximum = Math.max.apply(null, arr);
// console.log(maximum);
// // 89

/**
 * We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN.
 * Math.max() expects comma-separated arguments, but not an array.
 * The spread operator makes this syntax much better to read and maintain.
 */

// const arr = [6, 89, 3, 45];
// let maximum = Math.max(...arr);
// console.log(maximum);
// // 89

/**
 * ...arr returns an unpacked array, In other word, it spreads the array. However, the spread operator
 * only works in-place, like in an argument to a function or in an array literal.
 * The code following will not work:
 */

// const spreaded = ...arr;

// Example: Copy all contents of arr1 into another array arr2 using the spread operator
// const arr1 = ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY'];
// let arr2 = [...arr1];
// console.log(arr2);
// // ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY']
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 11. USE DESTRUCTURING ASSIGNMENT TO EXTRACT VALUES FROM OBJECT
 */

/**
 * Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken
 * directly from an object.
 *
 * Consider the following ES5 code:
 */

// const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;

// console.log(name, age);
// // John Doe 34

/**
 * Here's an equivalent assignment using ES6 destructuring syntax:
 */

// const user = { name: 'John Doe', age: 34 };

// const { name, age } = user;
// console.log(name, age);
// // John Doe 34

// // Another example
// const emp = {
//   name: 'John Doe',
//   age: 34,
//   isDeveloper: true,
//   location: 'New York',
//   nationality: 'USA',
// };

// const { name, age, ...rest } = emp;

// console.log(name);
// // John Doe
// console.log(age);
// // 34

// console.log(rest);
// // {isDeveloper: true, location: "New York", nationality: "USA"}

// Example
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// const { today, tomorrow } = HIGH_TEMPERATURES;
// console.log(today);
// // 77
// console.log(tomorrow);
// // 80
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 12. USE DESTRUCTURING ASSIGMENT TO ASSIGN VARIABLES FROM OBJECTS
 */

// const user = {
//   name: 'John Doe',
//   age: 34,
// };

// const { name: userName, age: userAge } = user;

// console.log(userName);
// // John Doe
// console.log(userAge);
// // 34

// /**
//  * You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.
//  */
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 13. USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM NESTED OBJECTS
 */

// const user = {
//   johnDoe: {
//     age: 34,
//     email: 'johnDoe@freecodecamp.com',
//   },
// };

/**
 * Here how to extract the values of object properties and assign them to variables with the same name:
 */

// const {
//   johnDoe: { age, email },
// } = user;

// console.log(age);
// // 34
// console.log(email);
// // johnDoe@freecodecamp.com

/**
 * And here's how you can assign an object properties' values to variables with different names:
 */

// const {
//   johnDoe: { age: johnDoeAge, email: johnDoeEmail },
// } = user;

// console.log(johnDoeAge);
// // 34
// console.log(johnDoeEmail);
// // johnDoe@freecodecamp.com

// Example
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;

// console.log(lowToday);
// // 64
// console.log(highToday);
// // 77
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 14. USE DESTRUCTURING ASSIGMENT TO ASSIGN VARIABLES FROM ARRAY
 */

/**
 * ES6 makes destructuring arrays as easy as destructuring objects.
 *
 * One key difference between the spread operator and array destructuring is that the spread operator
 * unpacks all content of an array into a comma-separated list. Consequently, you cannot pick or choose
 * which elements you want to assign to variables.
 */

/**
 * Destructuring array lets us do exactly that:
 */

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// // 1
// console.log(b);
// // 2

/**
 * The variable a is assigned the first value of the array, and b is assigned the second value of the array.
 * We can also access the value at any index in an array with destructuring by using commas
 * to reach the disired index.
 */

// const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
// console.log(c);
// // 5

// const [, , , , , last] = [1, 2, 3, 4, 5, 6];
// console.log(last);
// // 6
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 15. USE DESTRUCTURING ASSIGMENT WITH THE REST PARAMETER TO REASSIGN ARRAY ELEMENTS
 */

/**
 * In some situations involving array destructuring, we might want to collect the rest of the elements
 * into a separate array.
 */

/**
 * The result is similar to Array.prototype.slice(), as shown below:
 */

// const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// // 1
// console.log(b);
// // 2
// console.log(rest);
// // [3, 4, 5, 6]

/**
 * Variables a and b take the first and second values from the array. After that, because of the rest parameter's
 * presence, rest gets the rest of the values in the form of an array.
 * The rest element only works correctly as the last variable in the list. As in, you cannot use the
 * rest parameter to catch a subarray that leaves out the last element of the original array.
 */

// Example
// function removeFirstTwo(array) {
//   const [a, b, ...rest] = array;
//   return rest;
// }

// // Testing
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeFirstTwo(source));
// // [, 3, 4, 5, 6, 7, 8, 9, 10];

// // Using Array.prototype.slice()
// function removeFirstTwo(array) {
//   return array.slice(2);
// }

// // Testing
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeFirstTwo(source));
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 16. USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETER
 */

/**
 * In some cases, you can destructure the object in a function argument itself.
 */

/**
 * Consider the code below:
 */

// const displayProfile = (profileData) => {
//   const { name, age, nationality, location } = profileData;
//   console.log(name, age, nationality, location);
// };

// // Testing
// const emp = {
//   name: 'John',
//   age: 12,
//   nationality: 'American',
//   location: 'USA',
// };

// displayProfile(emp);

/**
 * This effectively destructures the object sent into the function. This can also be done in-place:
 */

// const displayProfile = ({ name, age, nationality, location }) =>
//   console.log(name, age, nationality, location);

// // Testing
// const emp = {
//   name: 'John',
//   age: 12,
//   nationality: 'American',
//   location: 'USA',
// };

// displayProfile(emp);
// -------------------------------------------

// // Another example
// const half = ({ min, max }) => (min + max) / 2;

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// console.log(half(stats));
// // 28.015
// ------------------------------------------------------------------------------------------------------------------------

/**
 * 17. CREATING STRINGS USING TEMPLATE LITERAL
 */

// const person = {
//   name: 'Zodiac Hasbro',
//   age: 56,
// };

// const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
// console.log(greeting);
// // Hello, my name is Zodiac Hasbro! I am 56 years old.
// -----------------------

// Another example
function makeList(array) {
  const failureItems = [];
  for (let item of array) {
    failureItems.push(`<li class="text-warning">${item}</li>`);
  }
  return failureItems;
}

// Testing
const result = {
  success: ['max-lenght', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};

// console.log(makeList(result.failure));

// console.log([1, 2, 3].map((e) => e * 2));
const failureItems = ({ failure }) => failure.map((e) => `<li class="text-warning">${e}</li>`);

console.log(failureItems(result));
