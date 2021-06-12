/**
 * In this Basic Data Structures course, you'll learn nore about the differences
 * between array and objects, and which to use in different situations.
 * You'll also learn how to use helpful JS methods like splice() and Object.keys() to
 * access and manipulate data.
 */

/**
 * 03 - ADD ITEMS TO AN ARRAY WITH push() and unshift()
 */

/**
 * The push() method adds elements to the end of an array, and unshift() adds elements
 * to the beginning.
 */

// let romanNumerals = ['XXI', 'XXII'];

// romanNumerals.push('XXIII');
// console.log(romanNumerals);
// // ["XXI", "XXII", "XXIII"]

// romanNumerals.unshift('XIX', 'XX');
// console.log(romanNumerals);
// // ["XIX", "XX", "XXI", "XXII", "XXIII"]
// -------------------------------------------------------------------------------------------------

/**
 * 04 - REMOVE ITEMS FROM AN ARRAY WITH pop() and shift()
 */

/**
 * Both push() and unshitf() have corresponding methods that are nearly functional opposites:
 * pop() and shift(). Instead of adding, pop() removes an element from the end of an array,
 * while shift() removes an element from the beginning.
 *
 * The key difference between pop() and shift() and their cousin push() and unshift(), is that
 * neither method takes parameter, and each only allows an array to be modified by a single element
 * at a time.
 *
 * We can also return the value of the removed element with either method like this:
 */

// let array = ['whats up?', 'hello', 'see ya!'];

// let popped = array.pop();
// console.log(popped);
// // "see ya!"

// let shifted = array.shift();
// console.log(shifted);
// // "whats up?"
// -------------------------------------------------------------------------------------------------

/**
 * 05 - REMOVE ITEMS USING splice()
 */

/**
 * We've learned how to remove elements from the beginning and end of an array using shift() and pop(),
 * but what if we want to remove an element from somewhere in the middle? Or remove more than one element
 * at once?
 * Well, that's where splice() comes in. splice() allow us to do that: remove any number of consecutive
 * elements from anywhere in  an array.
 *
 * splice() can take up 3 parameters, but for now, we'll focus on just the first 2.
 * The first two parameters of splice() are integers which represent indexes, or positions,
 * of the array that splice() is being called upon. And remember, arrays are zero-index, so to indicate
 * the frist element of an array, we would use 0.
 *
 * splice()'s first parameter represents the index on the array from which to begin removing elements,
 * while the second parameter indicates the number of elements to delete.
 */

// let array = [1, 2, 3, 4, 5];

// let deletedElements = array.splice(1, 2);
// console.log(array);
// // [1, 4, 5]
// console.log(deletedElements);
// // [2,3]
// -------------------------------------------------------------------------------------------------

/**
 * 06 - ADD ITEMS USING splice()
 */

/**
 * Remember in the last challenge we mentioned that splice() can take up to three parameters?
 * Well, you can use the third parameter, comprised of one or more element(s), to add to the array.
 * This can be incredibly useful for quickly switching out an element, or set of elements, for another.
 */

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
// // [10, 11, 12, 13, 14, 15]

/**
 * The second occurence of 12 is removed, and we add 13 and 14 at the same index. The numbers arrar would
 * now be [10, 11, 12, 13, 14, 15].
 *
 * Here, we begin with an array of numbers. Then, we pass the following to splice(): The index at which
 * to begin deleting elements(3), the number of elements to be deleted(1),
 * and the remaining arguments (13, 14) will be inserted starting at the same index.
 * Note that there can be any number of elements (separated by commas) following amountToDelete,
 * each of which gets inserted.
 */
// -------------------------------------------------------------------------------------------------

/**
 * 07 - COPY ARRAY ITEMS USING slice()
 */

/**
 * Rather than modifying an array, slice() copies or extracts a given number of elements to a new array,
 * leaving the array it is called upon untouched.
 *
 * slice() takes only 2 parameters - the first is the index at which to begin extraction,
 * and the second is the index at which to stop extraction (extraction will occur up to, but not including
 * the element at the index)
 */

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
// let todaysWeather = weatherConditions.slice(1, 3);

// console.log(todaysWeather);
// // ["snow", "sleet"]

// console.log(weatherConditions);
// // ["rain", "snow", "sleet", "hail", "clear"]

/**
 * In effect, we have created a new array by extracting from an existing array.
 */
// -------------------------------------------------------------------------------------------------

/**
 * 08 - COPY AN ARRAY WITH THE SPREAD OPERATOR
 */

/**
 * While slice() allow us to be selective about what elements of an array to copy, among several
 * other useful tasks, ES6's new sprea operator allow us to easily copy all an array's elements,
 * in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
 */

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];

// console.log(thatArray);
// // [true, true, undefined, false, null]
// console.log(thisArray);
// // [true, true, undefined, false, null]
// -------------------------------------------------------------------------------------------------

/**
 * 09 - COMBINE ARRAYS WITH SPREAD OPERATOR
 */

/**
 * Another huge advantage of the spread operator is the ability to combine arrays, or to insert
 * all the elements of one array into another, at any index.
 *
 * With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine
 * arrays at the end of one, and at the start of another. Spread syntax makes the following
 * extremely simple:
 */

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// console.log(thatArray);
// // ["basil", "cilantro", "sage", "rosemary", "parsley", "thyme", "coriander"]
// -------------------------------------------------------------------------------------------------

/**
 * 10 - CHECK FOR THE PRESENCE OF AN ELEMENT WITH indexOf()
 */

/**
 * Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular
 * piece of data will be o a given array, or if that element even still exists.
 *
 * Luckily, Javascript provides us with another built-in method, indexOf(). that allows us to quickly and
 * easily check for the presence of an element on an array.
 *
 * indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that
 * element, or -1 if the element does not exist on the array.
 */

// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// console.log(fruits.indexOf('dates'));
// // -1
// console.log(fruits.indexOf('oranges'));
// // 2
// console.log(fruits.indexOf('pears'));
// // 1
// -----------------------------------------

// function quickCheck(array, element) {
//   return array.indexOf(element) === -1 ? false : true;
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// // false
// -------------------------------------------------------------------------------------------------

/**
 * 11 - ITERATE THROUGH ALL AN ARRAY'S ITEMS USING FOR LOOPS
 */

/**
 * Javascript offers several built in methods that each iterate over arrays in slightly different ways
 * to achieve different results (such as every(), forEach(), map(), etc.), however, the technique which
 * is most flexible and offer us the greatest amount of control is a simle for loop.
 */

// function greaterThanTen(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element > 10) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
// // [12, 14, 80]
// ---------------------------------------------------------

// function greaterThanTen(array) {
//   let newArray = [];
//   for (const element of array) {
//     if (element > 10) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
// // [12, 14, 80]
// ---------------------------------------------------------

// console.log([2, 12, 8, 14, 80, 0, 1].filter((e) => e > 10));
// // [12, 14, 80]
// ---------------------------------------------------------

/**
 * We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments,
 * and returns a new array. elem represents an element that may or may not be present on one or more of
 * the arrays nested within arr. Modify the function, using a for loop,
 * to return a filtered version of the passed array such that any array nested within arr
 * containing elem has been removed.
 */

// function filteredArray(arr, elem) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item.indexOf(elem) === -1) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// let array = [
//   [3, 2, 3],
//   [1, 6, 3],
//   [3, 13, 26],
//   [19, 3, 9],
// ];

// console.log(filteredArray(array, 3));
// // []
// console.log(filteredArray(array, 2));
// // [[1, 6, 3], [3, 13, 26], [19, 3, 9]]
// -------------------------------------------------------------------------------------------------

/**
 * 12 - CREATE COMPLEX MULTI-DIMENSIONAL ARRAYS
 */

/**
 * One of the most powerful features when thinking of arrays as data structures, is that arrays can contain,
 * or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges,
 * but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays,
 * each with their own arbitrary levels of depth, and so on. In this way, an array can every quickly become very
 * complex data structure, known as a multi-dimensional, or nested array.
 */
// -------------------------------------------------------------------------------------------------

/**
 * 13 - ADD KEY-VALUE PAIRS TO JAVASCRIPT OBJETCS
 */

/**
 * At the most basic, objects are just collections of key-value pairs. In other words,
 * they are piece of data (values) mapped to unique identifiers called properties (keys).
 */

// const tekkenCharacter = {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
// };

/**
 * The above code defines a Tekken video game character object called tekkenCharacter.
 * It has three properties, each of which mapped to a specific value.
 *
 * If you want to add an additional property, such as "origin", it can be done by assigning
 * origin to the object:
 */

// tekkenCharacter.origin = 'South Korea';

/**
 * This uses do notation. If you were to observe the tekkenCharacter object, it will now include
 * the origin property.
 *
 * Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:
 */

// tekkenCharacter['hair color'] = 'dyed orange';

/**
 * Bracket notation is required if your property has a space in it or if you want to use a variable to
 * name the property. In the above case, the property is enclosed in quotes to denote it as a string and
 * will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of
 * the property will be whatever value the variable is. Here's an example with a variable:
 */

// const eyes = 'eye color';
// tekkenCharacter[eyes] = 'brown';

/**
 * After adding all the examples, the object will look like this:
 */

// console.log(tekkenCharacter);
/**
  {
    eye color: "brown"
    fightingStyle: "Tae Kwon Doe"
    hair color: "dyed orange"
    human: true
    origin: "South Korea"
    player: "Hwoarang"
  }
*/
// -------------------------------------------------------------------------------------------------

/**
 * 14 - MODIFY AN OBJECT NESTED WITHIN AN OBJECT
 */

/**
 * Now let's take a look at a slightly more complex object. Object properties can be nested to an
 * arbitrary depth, and their values can be any type of data supported by Javascript, including arrays
 * and even other objects. Consider the following:
 */

// let nestedObject = {
//   id: 289803703258,
//   date: 'December 31, 2016',
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8,
//     },
//   },
// };

/**
 * nestedObject has three properties: id (value is a number), date (value is a string), and
 * data (value is an object with its nested structure).
 *
 * While structures can quickly become complex, we can still use the same notation to acces
 * the information we need. To assign the value 10 to the busy property of the nested onlineStatus object,
 * we use the dot notation to reference the property:
 */

// nestedObject.data.onlineStatus.busy = 10;

// console.log(nestedObject.data.onlineStatus.busy);
// // 10
// -------------------------------------------------------------------------------------------------

/**
 * 15 - ACCESS PROPERTY NAMES WITH BRACKET NOTATION
 */

/**
 * In the first object challenge we mentioned the use of bracket notation as a way to access
 * property values using the evaluation of a variable. For instance, imagine that our foods object
 * is being used in a program for a supermarket cash register. We have some function that sets
 * the selectedFood and we want to check our foods object for the 
 */
