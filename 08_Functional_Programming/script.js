/** 01 - Learning about functional programming */

/**
 * Functional programming is a style of programming where solutions are simple, isolated functions,
 * without any side effects outside the function scope:
 *      INPUT -> PROCESS -> OUTPUT
 *
 * Functional programming is about:
 *  1. Isolated functions - there is no dependence on the state of program, which includes global
 *      varibales which are subject to change.
 *  2. Pure functions - the same input always give the same output.
 *  3. Functions with limited side effects - any changes, or mutations, to the state of the program
 *      outside the function are carefully controlled.
 *
 */

/** Example:
 * Call the getTea function to get 40 cups of tea for the team, and store them in the
 * tea4TeamFFC variable.
 */

// // Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// // Given a function (representing the tea type) and number of cups needed, the following function
// // returns an array of strings (each representing a cup of a specific type of tea)
// const getTea = (numOfCups) => {
//     const teaCups = [];
//     for (let cups = 1; cups <= numOfCups; cups++) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };

// const tea4TeamFFC = getTea(40);
// console.log(tea4TeamFFC);
// ------------------------------------------------------------------------------------

/** 02 - Understanding functional programming terminology */

/**
 * Some functional terminology:
 *
 *  Callbacks are functions that are slipped or passed into another function to decide the invocation
 *  of that function. You may have seen them passed to other methods, for example in filter,
 *  the callback function tells Javascript the criteria for how to filter an array.
 *
 *  Functions that can be assigned to a variable, passed into another function, or returned from another function
 *  just like any other normal value, are called first class functions.
 *  In Javascript, all functions are first class functions.
 *
 *  The functions that take a function as a argument, or return a function as a return value are called
 *  higher order functions.
 *
 *  When functions are passed in to or returned from another function, then those functions which were passed in
 *  or returned can be called a lambda.
 */

/**
 * Example:
 * Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC
 * varaibles, respectively. Note that the getTea function has been modified so it now takes a function as
 * the fisrt argument.
 */

// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';
// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// // Given a function (representing the tea type) and number of cups needed, the following function
// // returns an array of strings (each representing a cup of a specific type of tea)
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];
//   for (let cups = 1; cups <= numOfCups; cups++) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// ------------------------------------------------------------------------------------

/** 03 - Understand the hazards of using the imperstive code */

/**
 * Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened.
 * Let's try to model this using simple object-orientd code.
 *
 * A Window object is made of tabs, and you usually have more then one Windown open. The titles of each open
 * site in each Window object is held in an array. Atfer working in the browser (opening new tabs, mergin windows,
 * and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and
 * new tabs (for simplicity) get added to the end of it.
 */

// // Defines a constructor function
// let Window = function (tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function () {
//   this.tabs.push('new tab');
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function(index){

// }
