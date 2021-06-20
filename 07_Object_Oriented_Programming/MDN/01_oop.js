// Constructor function
function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  // Methods
  this.bio = function () {
    // interests
    let interestsString = '';
    let interestsLength = this.interests.length;
    if (interestsLength === 1) {
      interestsString = this.interests[0];
    } else if (interestsLength === 2) {
      interestsString = `${this.interests[0]} and ${this.interests[1]}`;
    } else {
      for (let i = 0; i < interestsLength; i++) {
        if (i === interestsLength - 2) {
          interestsString += `${this.interests[i]} `;
        } else if (i === interestsLength - 1) {
          interestsString += `and ${this.interests[i]}`;
        } else {
          interestsString += `${this.interests[i]}, `;
        }
      }
    }

    // check what the value of gender is, and set pronoun
    // to an appropriate value in each case
    let pronoun;
    if (
      this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M'
    ) {
      pronoun = 'He likes';
    } else if (
      this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'f' ||
      this.gender === 'F'
    ) {
      pronoun = 'She likes';
    } else {
      pronoun = 'They like';
    }

    console.log(
      `${this.name.last} ${this.name.first} is ${this.age} years old. ${pronoun} ${interestsString}.`
    );
  };

  this.greeting = function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  };
}

// Create an object instance
// let person1 = new Person('Bob', 'Smith', 32, '', ['music', 'skiing', 'boxing']);

// console.log(person1['age']);
// // 32
// person1.bio();
// // Smith Bob is 32 years old. They like music, skiing and boxing.
// person1.greeting();
// // Hi! I'm Bob.
// -------------------------------------------------------------------------------------------

/**
 * OTHER WAYS TO CREATE OBJECT INSTANCES
 */

/**
 * 1. The Object() constructor
 */

// // Create an empty object
// let person1 = new Object();

// // Add properties and methods to this object using dot or bracket notation
// person1.name = 'Peter Pan';
// person1.sayHello = function () {
//   console.log(`Good morning! I'm ${this.name}.`);
// };

// console.log(person1.name);
// // Tri Phan
// person1.sayHello();
// // Good morning! I'm Peter Pan.

// Pass an object literal to the Object() constructor as a parameter,
// to prifill it with properties/methods
// let person2 = Object({
//   name: 'Alex',
//   skills: ['Javascript', 'Python'],
//   describe: function () {
//     console.log(`My name is ${this.name}. I'm good at ${this.skills.join(', ')}.`);
//   },
// });

// person2.describe();
// // My name is Alex. I'm good at Javascript, Python.
// -------------------------------------------------------------------------------------------

/**
 * 2. Using the create() method
 *
 * With Object.create(), you can create a new object, using an existing object as the prototype
 * of the newly created object.
 */

let person2 = Object({
  name: 'Alex',
  skills: ['Javascript', 'Python'],
  describe: function () {
    console.log(`My name is ${this.name}. I'm good at ${this.skills.join(', ')}.`);
  },
});

// Using Object.create() method to create an object, and using person2 as the prototype of person3
let person3 = Object.create(person2);

console.log(person3.name);
// Alex
person3.describe();
// My name is Alex. I'm good at Javascript, Python.

/**
 * person3 has been created based on person2 as its prototype - it has the same properties and
 * methods available to it.
 */
