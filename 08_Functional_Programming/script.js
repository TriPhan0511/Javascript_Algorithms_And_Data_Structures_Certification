// // Function that returns a string representing a cup of green tea
// let prepareGreenTea = () => 'greenTea';

// // Function that returns a string that representing a cup of black tea
// let prepareBlackTea = () => 'blackTea';

// // Given a function (representing the tea type) and the number of cups needed,
// // the following function returns an array of strings
// // (each representing a cup of specific type of tea)
// const getTea = (prepareTea, numOfCups) => {
//     const teaCups = [];
//     for (let cups = 1; cups < numOfCups; cups++) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };

// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
// --------------------------------------------------------------------------------------------------

// // tabs is an array of titles of each site open within the window
// var Window = function (tabs) {
//     this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//     this.tabs.push('new tab');
//     return this;
// };

// // When you close a tab
// Window.prototype.closeTab = function (index) {
//     var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
//     var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
//     return this;
// };

// // let array = [1, 2, 3, 4, 5, 6, 7];
// // let index = 2;
// // let before = array.splice(0, index);
// // let after = array.splice(index + 1);

// // console.log(before);
// // console.log(after);

// let array = [1, 2, 3, 4, 5];
// console.log(array.slice(0, 2));
// console.log(array);
// ------------------------------------------------------------------------------------

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
 */

// Example:
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';
// Function that returns a string representing a cup of green tea
const prepareBlackTea = () => 'blackTea';

// Given a function (representing the tea type) and number of cups needed, the following function
// returns an array of strings (each representing a cup of a specific type of tea)
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
    for (let cups = 1; cups <= numOfCups; cups++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFFC = getTea(40);
console.log(tea4TeamFFC);
