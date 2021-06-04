// let dogs = {
//   Fido: 'Mutt',
//   Hunter: 'Doberman',
//   Snoopie: 'Beagle',
// };

// let dogName = 'Hunter';
// let dogBreed = dogs[dogName];
// console.log(dogBreed);
// // Doberman
// ----------------------------------------------------------------------------

// let someObj = {
//   propName: 'John',
// };

// function propPrefix(str) {
//   return `prop${str}`;
// }

// let someProp = propPrefix('Name');
// console.log(someObj[someProp]);
// // John
// ----------------------------------------------------------------------------

/**
 * MANIPULATING COMPLEX OBJECTS
 */

// var ourMusic = [
//   {
//     artist: 'Daft Punk',
//     title: 'Homework',
//     release_year: 1997,
//     formats: ['CD', 'Cassette', 'LP'],
//     gold: true,
//   },
// ];

// ourMusic.push({
//   artist: 'MLTR',
//   title: "That's why",
//   release_year: 2002,
//   formats: ['good', 'like'],
// });

// // for (let album of ourMusic) {
// //   console.log(album);
// // }

// ourMusic.unshift({ artist: 'Rock' });

// for (let album of ourMusic) {
//   console.log(album);
// }
// ----------------------------------------------------------------------------

// Function
/**
 * Your function must always return the entire record collection object
 * If prop isn't tracks and value isn't an emtry string, update or set that album's prop to value.
 * If prop i tracks but the album doesn't have a tracks property, create an empty array and add value to it.
 * If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
 * If value is an empty string, delete the given prop property from the album.
 */

//  let recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// function updateRecords(records, id, prop, value) {
//   if (records[id]) {
//     let album = records[id];

//     if (prop != 'tracks' && value !== '') {
//       album[prop] = value;
//     }

//     if (prop === 'tracks') {
//       if (!album.hasOwnProperty('tracks')) {
//         album[prop] = [value];
//       } else if (value !== '') {
//         album[prop].push(value);
//       }
//     }

//     if (value === '') {
//       delete album[prop];
//     }

//     records[id] = album;
//   }

//   return records;
// }

// // Testing
// updateRecords(recordCollection, 1111, 'tracks', 'rock');
// console.log(recordCollection[1111]);
// // undefined

// updateRecords(recordCollection, 5439, 'my favorite band', true);
// console.log(recordCollection[5439]['my favorite band']);
// // true

// updateRecords(recordCollection, 5439, 'tracks', 'happy new year');
// console.log(recordCollection[5439]['tracks']);
// // ['happy new year']

// updateRecords(recordCollection, 2468, 'tracks', 'Free');
// console.log(recordCollection[2468]['tracks']);
// // ['1999', 'Little Red Corvette, 'Free']

// updateRecords(recordCollection, 2468, 'tracks', '');
// console.log(recordCollection[2468]['tracks']);
// // undefined
// ----------------------------------------------------------------------------

/**
 * Iterate with While Loop
 */

// let array = [];
// let i = 0;

// while (i < 5) {
//   array.push(i);
//   i++;
// }

// for (const item of array) {
//   console.log(item);
// }
// ----------------------------------------------------------------------------

/**
 * For Loop
 */

// let array = [];
// for (let i = 0; i < 5; i++) {
//   array.push(i);
// }

// for (const item of array) {
//   console.log(item);
// }

// let array = [];
// for (let i = 0; i < 10; i += 2) {
//   array.push(i);
// }

// for (const item of array) {
//   console.log(item);
// }
// // 0 2 4 6 8
// ----------------------------------------------------------------------------

/**
 * ITERATE WITH DO...WHILE LOOP
 */

// let array = [];
// let i = 0;

// do {
//   array.push(i);
//   i++;
// } while (i < 5);

// for (const item of array) {
//   console.log(item);
// }
// 0 1 2 3 4

// let array = [];
// let i = 5;

// do {
//   array.push(i);
//   i++;
// } while (i < 5);

// console.log(array);
// ----------------------------------------------------------------------------

/**
 * REPLACE LOOPS USING RECURSION
 */

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(multiply(array, 3));
// // 6

// function multiply_2(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else return arr[n - 1] * multiply_2(arr, n - 1);
// }

// console.log(multiply_2(array, 3));
// // 6
// console.log(multiply_2(array, 4));
// // 24

// console.log(multiply_2(array, -1));

// function factor(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * factor(n - 1);
//   }
// }

// console.log(factor(5));
// // 120
// ----------------------------------------------------------------------------

/**
 * PROFILE LOOKUP
 */

// Setup
// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// Function
/**
 * The function should check if name is actual contact's firstName and the given property (prop)
 * is a property of that contact
 *
 * If both are true, the return the "value" of that property.
 *
 * If name does not correspond to any contacts then return the string "No such contact".
 *
 * If prop does not correspond to an valid properties of a contact found to match name then
 * return the string "No such property"
 */
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i]['firstName'] === name) {
//       let person = contacts[i];
//       if (person.hasOwnProperty(prop)) {
//         return person[prop];
//       } else {
//         return 'No such property';
//       }
//     }
//   }
//   return 'No such contact';
// }

// // Testing
// console.log(lookUpProfile('Tri', 'abc'));
// // No such contact

// console.log(lookUpProfile('Akira', 'hobbies'));
// // No such property

// console.log(lookUpProfile('Akira', 'likes'));
// // ['Pizza', 'Coding', Brownie Points']

// console.log(lookUpProfile('Akira', 'lastName'));
// // Laine

// console.log(lookUpProfile('Kristian', 'lastName'));
// // Vos

// console.log(lookUpProfile('Sherlock', 'likes'));
// // ['Intriguing Cases', 'Violin']
// ----------------------------------------------------------------------------

/**
 * GENERATE RANDOM FRACTIONS
 */

// console.log(Math.random());
// ----------------------------------------------------------------------------

/**
 * GENERATE RANDOM WHOLE NUMBERS
 *
 * 1. Use Math.random() to generate a random decimal.
 * 2. Multiply that random decimal by 20.
 * 3. Use another function, Math.floor() to round the number down to its nearest whole number.
 *
 * Remember that Math.random() can never quite return a 1 and, because we're rounding down,
 * it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.
 *
 * --> Math.floor(Math.random() * 20);
 */

// console.log(Math.floor(Math.random() * 20));
// ----------------------------------------------------------------------------

/**
 * GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE
 *
 * Instead of generating a random whole number between zero and a given number, we can generate
 * a random whole number that falls within a range of two specific numbers.
 *
 * To do this, we'll define a minimum number min and a maximum number max.
 *
 * Here's the formula we'll use:
 *
 *  Math.floor(Math.random() * (max - min + 1)) + min
 */

// console.log(Math.floor(Math.random() * (10 - 5 + 1)) + 1);
// ----------------------------------------------------------------------------

/**
 * USE THE parseInt FUNCTION
 *
 * The parseInt() function parses a string and returns an interger.
 * If the first character in the string can't be converted into a number, the it returns NaN.
 */

// console.log(parseInt('007'));
// // 7

// console.log(parseInt('07n'));
// // 7

// console.log(parseInt('0ab'));
// // 0

// console.log(parseInt('a7'));
// // NaN
// ----------------------------------------------------------------------------

/**
 * USE THE parseInt FUNCTION WITH A RADIX
 *
 * The parseInt() function parses a string and returns an integer. It takes a second argument fo the
 * radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
 */

// console.log(parseInt('11', 2));
// // 3
// ----------------------------------------------------------------------------

/**
 * USE TERNARY OPERATOR
 */

// function findGreaterOrEqual(a, b) {
//   return a === b ? 'a and b are equal' : a > b ? 'a is greater' : 'b is greater';
// }

// console.log(findGreaterOrEqual(10, 10));
// //
// console.log(findGreaterOrEqual(10, 5));
// console.log(findGreaterOrEqual(5, 10));
// ----------------------------------------------------------------------------

/**
 * USE RECURSION TO CREATE A COUNTDOWN
 */

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }

// console.log(countup(5));
// // [1, 2, 3, 4, 5]

// ----------------------------------------------------------------------------

/**
 * LAST CHALLENGE: RECURSION
 *
 */
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const array = rangeOfNumbers(startNum, endNum - 1);
//     array.push(endNum);
//     return array;
//   }
// }
// ---------------------------------------

function countup(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array;
}

console.log(countup(5));
// [1, 2, 3, 4, 5]

function countup_2(n) {
  if (n < 1) {
    return [];
  } else {
    let array = [];
    
  }
}
