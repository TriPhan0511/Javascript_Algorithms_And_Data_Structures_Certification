/**
 * BASIC ALGORITHM SCRIPTING
 */

/**
 * An algorithm is a series of step-by-step instructions that describes how to do something.
 *
 * To write an effective algorithm, it helps to break a problem down into smaller parts,
 * and think carefully about how to sove each part of code.
 *
 * In this course, you'll learn the fundamentals of algorithmic by writing algorithms that
 * do everything from converting temperatures to handling complex 2D arrays.
 */
// ---------------------------------------------------------------------------------------------

/**
 * 01 - CONVERT CELSIUS TO FAHRENHEIT
 */

/**
 * Formula : fahrenhei = celsius x (9/5) + 32
 */

// function toFahrenheit(celsius) {
//   return celsius * (9 / 5) + 32;
// }

// // Testing
// console.log(toFahrenheit(0));
// // 32
// console.log(toFahrenheit(10));
// // 50
// console.log(toFahrenheit(15));
// // 59
// ---------------------------------------------------------------------------------------------

/**
 * 02 - REVERSE  A STRING
 */

// let string = 'Hello, everybody';
// let array = [];
// for (let i = string.length - 1; i >= 0; i--) {
//   array.push(string[i]);
// }

// console.log(array.join(''));

// //  Solution 1
// function reverseString(string) {
//   let array = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     array.push(string[i]);
//   }
//   return array.join('');
// }

// // Solution 2
// function reverseString(string) {
//   return string.split('').reverse().join('');
// }

// console.log(reverseString('Hello, everybody'));
// // ydobyreve ,olleH
// ---------------------------------------------------------------------------------------------

/**
 * 03 - FACTORIALIZE A NUMVER
 */

/**
 * Return the factorial of the provided inetger.
 *
 * If the integer is represented with the letter n, a factorial is the product of all
 * positive integers less than or equal to n.
 *
 * Factorials are often represented with the shorthand notation n!
 *
 * For example: n! = 1 * 2 * 3 * 4 * 5 = 120
 */

// Solution 1: Using a for loop
// function factorialize(num) {
//   let output = 1;
//   for (let i = 1; i <= num; i++) {
//     output *= i;
//   }
//   return output;
// }

// Solution 2: Using recursion
// function factorialize(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorialize(num - 1);
//   }
// }

// // Testing
// console.log(factorialize(5));
// //120
// console.log(factorialize(0));
// // 0
// console.log(factorialize(1));
// // 1
// ---------------------------------------------------------------------------------------------

/**
 * 04 - FIND THE LENGTH OF LONGEST WORD IN A STRING
 */

/**
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 */

// function findLongestWordLength(string) {
//   // Removes the punctuations in the string
//   // And collapses multiple adjacent white space to single space
//   string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
//   return string
//     .split(' ')
//     .map((e) => e.length)
//     .reduce((x, y) => Math.max(x, y));
// }

// Testing
// console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
// // 6

// console.log(findLongestWordLength("Hello, my name's Peter"));
// // 6
// ---------------------------------------------------------------------------------------------

/**
 * 04-2 - FIND THE LONGEST WORD IN A STRING
 */

// Solution 1
// function findLongestWord(string) {
//   // Removes the punctuations in the string
//   // And collapses multiple adjacent white to single space
//   string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');

//   let array = string.split(' ');
//   let maxLength = array[0].length;
//   let longestWord = array[0];

//   for (let item of array) {
//     if (item.length > maxLength) {
//       maxLength = item.length;
//       longestWord = item;
//     }
//   }
//   return longestWord;
// }

// Solution 2:
// function findLongestWord(string) {
//   // Removes the punctuations in the string
//   // And collapses multiple adjacent white to single space
//   string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');
//   return string.split(' ').reduce((x, y) => {
//     return x.length > y.length ? x : y;
//   });
// }

// // // Testing
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // jumped

// console.log(findLongestWord("Hello, my name's Peter"));
// // name's
// ---------------------------------------------------------------------------------------------

/**
 * 05 - RETURN LARGEST NUMBERS IN ARRAYS
 */

/**
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

// function largestOfFour(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     let numbers = array[i];
//     output.push(numbers.reduce((x, y) => Math.max(x, y)));
//   }
//   return output;
// }

// function largestOfFour(array) {
//   return array.reduce((acc, current) => {
//     return acc.concat(current.reduce((x, y) => Math.max(x, y)));
//   }, []);
// }

// // Testing
// let array = [
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ];

// console.log(largestOfFour(array));
// // 5, 27, 39, 1001]
// ---------------------------------------------------------------------------------------------

/**
 * 06 - CONFIRM THE ENDING
 */

/**
 * Check if a string (first argument, str) ends with the given target string
 * (second argument, target).
 *
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But for the purpose of this challenge, we would like you to use one of the Javascript
 * substring methods instead.
 */

// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }

// // Testing
// console.log(confirmEnding('Bastian', 'n'));
// // true
// console.log(confirmEnding('Hello, world', 'rld'));
// // true
// console.log(confirmEnding('Hello, world', 'dlr'));
// // false
// console.log(confirmEnding('Hello, world', 'd'));
// // true
// console.log(confirmEnding('Hello, world', 'H'));
// // false
// ---------------------------------------------------------------------------------------------

/**
 * 07 - REPEAT A STRING REPEAT A STRING
 */

/**
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string num is not a positive number.
 *
 * For the purpose of this challenge, do not use the built-in repeat() method.
 */

// function repeatStringNumTimes(str, num) {
//   let output = '';
//   if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       output += str;
//     }
//   }
//   return output;
// }

// // Testing
// console.log(repeatStringNumTimes('hello', -1));
// // ''
// console.log(repeatStringNumTimes('hello', 0));
// // hello
// console.log(repeatStringNumTimes('hello', 1));
// // hello
// console.log(repeatStringNumTimes('hello', 3));
// // hellohellohello
// ---------------------------------------------------------------------------------------------

/**
 * 08 - TRUNCATE A STRING
 */

/**
 * Truncate a string (first argument) if it is longer than the given maximum string
 * length (second argument). Return the truncated string with a ... ending.
 */

// function truncateString(str, num) {
//   return str.length > num ? `${str.slice(0, num)}...` : str;
// }

// // Testing
// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
// // A-tisket...

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 43));
// // A-tisket a-tasket A green and yellow basket
// ---------------------------------------------------------------------------------------------

/**
 * 09 - FINDERS KEEPERS
 */

/**
 * Create a function that looks through an array arr and return the first element in it
 * that passes a 'truth test'. This means that given an element x, the 'truth test' is
 * passed if func(x) is true. If no element passes the test, return undefined.
 */

// function findElement(arr, func) {
//   for (let item of arr) {
//     if (func(item)) {
//       return item;
//     }
//   }
//   return undefined;
// }

// // Testing
// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
// // 2

// console.log(findElement([1, 9, 3, 4], (num) => num % 2 === 0));
// // 4

// console.log(findElement([1, 9, 3, 11], (num) => num % 2 === 0));
// // undefined
// ---------------------------------------------------------------------------------------------

/**
 * 10 - BOO WHO
 */

/**
 * Check if a value is classified as a boolean primitive. Return true or false.
 *
 * Boolean primitives are true and false.
 */

// function booWho(bool) {
//   return typeof bool === 'boolean';
// }

// // Testing
// console.log(booWho(null));
// // false
// ---------------------------------------------------------------------------------------------

/**
 * 11 - TITLE CASE A SENTENCE
 */

/**
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 */

// Solution 1
// function titleCase(str) {
//   let words = str.split(' ');
//   let array = [];
//   for (let word of words) {
//     let w = `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
//     array.push(w);
//   }
//   return array.join(' ');
// }

// // Solution 2
// function titleCase(str) {
//   return str
//     .split(' ')
//     .map((e) => `${e.slice(0, 1).toUpperCase()}${e.slice(1).toLowerCase()}`)
//     .join(' ');
// }

// // Testing
// console.log(titleCase("I'm a little tea pot."));
// // I'm A Little Tea Pot.
// ---------------------------------------------------------------------------------------------

/**
 * 12 - SLICE AND SPLICE
 */

/**
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */

// function frankenSplice(arr1, arr2, n) {
//   let arr3 = arr2.slice(0, n);
//   let arr4 = arr2.slice(n);
//   return [...arr3, ...arr1, ...arr4];
// }

// // Testing
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// // [4, 1, 2, 3, 5, 6]
// console.log(frankenSplice([1, 2], ['a', 'b'], 1));
// // ['a', 1, 2, 'b']
// ---------------------------------------------------------------------------------------------

/**
 * 13 - FALSY BOUNCER
 */

/**
 * Remove all falsy values from an array.
 *
 * Falsy values in Javascript are false, 0, "", null, undefined, and NaN.
 */

// // Solution 1
// function bouncer(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (!arr[i]) {
//       arr.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return arr;
// }

// // Solution 2
// function bouncer(arr) {
//   let newArray = [];
//   for (let item of arr) {
//     if (item) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// Solution 3: Using filter() method
// function bouncer(arr) {
//   return arr.filter((e) => e);
// }

// // Solution 4
// function bouncer(arr) {
//   return arr.filter(Boolean);
// }

// // Testing
// console.log(bouncer([false, 1, 2, 3]));
// // [1, 2, 3]
// console.log(bouncer([1, false, 2, 3]));
// // [1, 2, 3]
// console.log(bouncer([1, 2, null, undefined, 3]));
// // [1, 2, 3]
// ---------------------------------------------------------------------------------------------

/**
 * 14 - WHERE DO I BELONG
 */

/**
 * Return the lowest index at which a value (second argument) should be inserted into an array
 * (first argument) once it has been sorted. The returned value should be a number.
 *
 * For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is
 * greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted
 * it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length - 1;
}

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([5, 3, 20, 3], 5));

let a = [2, 1];
// a.sort();
// console.log(a);

a.sort((a, b) => a - b);
console.log(a);
