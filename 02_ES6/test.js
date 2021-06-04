// var keyword
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(`After the for loop, i = ${i}`);

// // -> 0 1 2 3 4
// // -> After the for loop, i = 5
// ------------------------------------------------

// let keyword
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(`After the for loop, i = ${i}`);
// // -> 0 1 2 3 4
// // -> Error
// ------------------------------------------------

// const keyword
// const PI = 3.14;
// console.log(PI);
// // 3.14

// PI = 100;
// // -> Error
// ------------------------------------------------

// Mutate an array declared with const
// const array = [1, 2, 3, 4];

// // array = [4, 3, 2, 1];
// // -> Error: Assignment to constant variable

// array[array.length - 1] = 1000;
// console.log(array);
// // [1, 2, 3, 1000];
// ------------------------------------------------

// Prevent object mutation
// const array = [1, 2, 3, 4];

// console.log(array[0]);
// // 1

// Object.freeze(array);

// array[0] = 1000;
// console.log(array[0]);
// // 1

// let array = [5, 4, 3, 2, 1];
// Object.freeze(array);
// array[0] = 1000;
// console.log(array[0]);
// // 5

// const user = {
//   name: 'John Doe',
//   age: 34,
// };

// user['name'] = 'Peter Pan';
// console.log(user['name']);
// // Peter Pan

// const user = {
//   name: 'Alex Ferguson',
//   age: 70,
// };

// Object.freeze(user);
// user.name = 'Peter Pan';
// console.log(user.name);
// // Alex Ferguson
// ------------------------------------------------

// Arrow Function

// const double = (e) => e * 2;
// console.log(double(10));
// // 20

// Array's methods: map, filter, reduce

// map
// let array = [1, 2, 3, 4];
// console.log(array.map((e) => `Value: ${e}`));
// // ['Value: 1', 'Value: 2', 'Value: 3', 'Value: 4']

// filter
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array.filter((e) => e > 3));
// // [4, 5, 6, 7, 8]

// reduce
// let array = [1, 2, 3, 4, 5];
// console.log(array.reduce((x, y) => x + y));
// // 15
// console.log(array.reduce((x, y) => x * y));
// // 120
// ------------------------------------------------

// map is a variant of reduce
// let array = [1, 2, 3, 4, 5];
// console.log(array.map((e) => e * 2));
// // [2, 4, 6, 8, 10];

// console.log(array.reduce((acc, e) => acc.concat(e * 2), []));
// // [2, 4, 6, 8, 10];

// filter is a variant of reduce
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.filter((e) => e % 2 === 0));
// [0, 2, 4, 6, 8]

// console.log(array.reduce((acc, e) => acc.concat(e % 2 === 0), []));

// Way 1
// console.log(
//   array.reduce((acc, e) => {
//     if (e % 2 === 0) {
//       return acc.concat(e);
//     } else return acc;
//   }, [])
// );

// Way 2: Using ternary operator
// console.log(array.reduce((acc, e) => (e % 2 === 0 ? acc.concat(e) : acc), []));
// ------------------------------------------------

// Write a map function
// function map(array, f) {
//   let newArray = [];
//   for (let item of array) {
//     newArray.push(f(item));
//   }
//   return newArray;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(map(array, (e) => e * 2));
// // [2, 4, 6, 8, 10]
// ------------------------------------------------

// Write a filter function
// function filter(array, f) {
//   let newArray = [];
//   for (let item of array) {
//     if (f(item)) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log(filter(array, (e) => e % 2 === 0));
// // [0, 2, 4, 6, 8]
// ------------------------------------------------

// Write a reduce function
// function reduce(array, f, initialValue) {
//   let accumulator = initialValue;
//   for (let item of array) {
//     accumulator = f(accumulator, item);
//   }
//   return accumulator;
// }

// let array = [1, 2, 3, 4, 5];

// console.log(reduce(array, (acc, e) => acc + e, 0));
// // 15

// console.log(reduce(array, (acc, e) => acc * e, 1));
// // 120

// console.log(reduce(array, (acc, e) => (e % 2 === 0 ? acc.concat(e) : acc), []));
// // [2, 4]
// ------------------------------------------------

// Default parameter
// function greeting(say = 'Hello', whom = 'everyone') {
//   return `${say} ${whom}!`;
// }

// console.log(greeting());
// // Hello everyone!
// console.log(greeting('Aloha'));
// // Aloha everyone!
// console.log(greeting('Good morning', 'Mr. Tri'));
// // Good morning Mr. Tri!
// ------------------------------------------------

// Rest parameter
// function greeting(say, ...rest) {
//   for (let item of rest) {
//     console.log(`${say} ${item}`);
//   }
// }

// greeting('Hello', 'Alex', 'Josh');
// // Hello Alex
// // Hello Josh
// ------------------------------------------------

// Use spread operator to evaluate arrays in-place
// let names = ['Peter', 'Mary', 'Jordan'];
// let employees = ['Daisy', ...names, 'Duck'];
// console.log(employees);
// // ["Daisy", "Peter", "Mary", "Jordan", "Duck"]

// Copy all content from an array to another array
// let array1 = [1, 2, 3, 4];
// let array2 = [...array1];
// console.log(array2);
// // [1, 2, 3, 4]

// Find the maximum value in an array
// console.log(Math.max(...[1, 4, 2]));
// // 4
// ------------------------------------------------

// Use destructuring assignment to extract values from objects
// let emp = {
//   name: 'Peter Pan',
//   age: 20,
//   isDeveloper: true,
//   skills: {
//     front_end: ['css', 'javascript'],
//     back_end: ['java', 'python'],
//   },
//   hobbies: ['reading', 'cycling', 'boxing'],
// };

// let { name, age } = emp;
// console.log(name, age);
// // Peter Pan 20

// let { name, age, ...rest } = emp;
// console.log(name, age);
// // Peter Pan 20

// console.log(rest.isDeveloper);
// // true
// console.log(rest['hobbies']);
// // ['reading', 'cycling', 'boxing']

// let { name: userName } = emp;
// console.log(userName);
// // Peter Pan

// let {
//   skills: { front_end },
// } = emp;
// for (let skill of front_end) {
//   console.log(skill);
// }
// css
// javascipt

// console.log(skills);
// skills is not defined
// ------------------------------------------------

// Use destructuring assignment to pass an object as a function's parameters
// let emp = {
//   name: 'Peter Pan',
//   age: 20,
//   isDeveloper: true,
//   skills: {
//     front_end: ['css', 'javascript'],
//     back_end: ['java', 'python'],
//   },
//   hobbies: ['reading', 'cycling', 'boxing'],
// };

// function displayFormation({ name, age, hobbies, skills, isDeveloper: developer }) {
//   if (developer) {
//     console.log(`Name: ${name}, Age: ${age}`);
//     console.log(`Hobbies: ${hobbies.join(', ')}.`);

//     for (let skill of Object.keys(skills)) {
//       console.log(`${skill}: ${skills[skill].join(', ')}`);
//     }
//   } else {
//     console.log(`No, this employee is not a developer`);
//   }
// }

// // Testing
// displayFormation(emp);
// ------------------------------------------------

// Use destructuring assignment to assign variables from arrays
// let array = [1, 2, 3, 4, 5];

// let [first, second] = array;
// console.log(first, second);
// // 1 2

// let [first, second, ...rest] = array;
// console.log(first, second, rest);
// // 1 2 [3, 4, 5]

// Swap two numbers
// let a = 10,
//   b = 20;

// [a, b] = [b, a];
// console.log(a);
// // 20
// console.log(b);
// // 10
