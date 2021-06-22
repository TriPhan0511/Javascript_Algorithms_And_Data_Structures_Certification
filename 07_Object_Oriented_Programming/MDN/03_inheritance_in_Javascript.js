/**
 * This article how to create "child" object classes (constructors) that inherit features
 * from their "parent" classes. In addition, we will look at how classes are dealt with in
 * modern ECMAScript syntax.
 */

/**
 * Prototypal inheritance
 */

// Constructor function: Only properties are defined inside the constructor
function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

// The methods are all defined on the constructor's prototype
// bio() method
Person.prototype.bio = function () {
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

// greeting() method
Person.prototype.greeting = function () {
  console.log(`Hi! I'm ${this.name.first}.`);
};

// farewell() method
Person.prototype.farewell = function () {
  console.log(`${this.name.first} has left the building. Bye for now!`);
};
// ----------------------------------------------------------------------------------------------------------

/**
 * Say we want to create a Teacher class, which inherits all the members from Person,
 * but also includes:
 *
 *    1. A new property, subject - this will contain the subject the teacher teaches.
 *    2. A updated greeting() method, which sounds a bit more formal than the standard greeting()
 *      method - more suitable for a teacher addressing some students at school.
 */

// Constructor function: Teacher()
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

/**
 * This looks to the Person constructor in many ways, but there is something strange here that we've
 * not seen before - the call() function. This function basically allows to call a function defined
 * somewhere else, but in the current context. The first parameter specifies the value of this that
 * you want to use when running the function, and the other parameters are those that should be passed
 * to the function when it is invoked.
 *
 * We want the Teacher() constructor to take the same parameters as the Person() constructor it is
 * inheriting from, so we specify them all as parameters in the call() invocation.
 *
 * The last line inside the constructor defines the new subject property that teachers are going to have,
 * which generic people don't have.
 *
 * As a note, we could have done this:
 * 
 *    function Teacher(first, last, age, gender, interests, subject) {
        this.name = {
          first: first,
          last: last,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.subject = subject;
      }

 * But this is just redefining the properties anew, not inheriting them from Person(), so it
 * defeats the point of what we are trying to do. It also takes more lines of code.        
 */
// ----------------------------------------------------------------------------------------------------------

/**
 * Inheriting from a constructor with no parameters
 */

/**
 * Note that if the constructor you are inheriting from doesn't take its property values from
 * parameters, you don't need to specify them as additional arguments in call().
 * So, for example, if you had something really simple like this:
 */

// function Brick() {
//   this.width = 10;
//   this.height = 20;
// }

/**
 * You could inherit the width and height properties by doing this (as well as the other steps described
 * below, of course:)
 */

// function BlueGlassBrick() {
//   Brick.call(this);
//   this.opacity = 0.5;
//   this.color = 'blue';
// }
/**
 * Note that we've ony specified this inside call() - no other parameters are required as we are not
 * inheriting any properties from the parent that are set via parameters.
 */

// let aBlueGlassBrick = new BlueGlassBrick();
// console.log(
//   `Width: ${aBlueGlassBrick.width}, Height: ${aBlueGlassBrick.height}, Opacity: ${aBlueGlassBrick.opacity}, Color: ${aBlueGlassBrick.color}.`
// );
// Width: 10, Height: 20, Opacity: 0.5, Color: blue.
// ----------------------------------------------------------------------------------------------------------

/**
 * Setting Teacher()'s prototype and constructor reference
 */

// console.log(Teacher.constructor === Person);
// false
// console.log(Teacher.constructor === Teacher);
// false

// console.log(Person.prototype.constructor === Person);
// true

// let david = new Person('David', 'Cooper', 15, 'male', ['soccer', 'tennis']);
// console.log(david.constructor === Person);
// // true

// let daisy = new Teacher('Daisy', 'Mary', 24, 'f', ['reading', 'running']);
// console.log(daisy.constructor === Teacher);
// // true
// console.log(daisy.constructor === Person);
// // false

// console.log(daisy instanceof Teacher);
// // true
// console.log(daisy instanceof Person);
// // false

/**
 * All is good so far, but we have a problem. We have a new defined constructor, and its has
 * a prototype property, which by default just contains an object with a reference to the
 * constructor function itself. It does not contain the methods of Person constructor's prototype
 * property.
 */

// console.log(Teacher.prototype);
// // {constructor: ƒ}
// console.log(Teacher.prototype.constructor === Teacher);
// // true

// console.log(Object.getOwnPropertyNames(Teacher.prototype));
// ["constructor"]
// console.log(Object.getOwnPropertyNames(Person.prototype));
// ["constructor", "bio", "greeting", "farewell"]

// console.log(Teacher.prototype.greeting);
// undefined
// console.log(Person.prototype.greeting);
// ƒ () {
//   console.log(`Hi! I'm ${this.name.first}.`);
// }

/**
 * We need to get the Teacher() to inherit the methods defined on Person()'s prototype.
 * So how do we do that?
 */

Teacher.prototype = Object.create(Person.prototype);

/**
 * In this case, we are using Object.create() to create a new object and make it value of Teacher.prototype.
 * The new object has Person.prototype as its prototype and will therefore inherit, if and when needed,
 * all the methods available on Person.prototype.
 *
 * We need to do one more thing before we move on. After adding the last line,
 * Teacher.prototype's constructor property is now equal to Person(), because  we just set Teacher.prototype
 * to reference an object that inherits its properties from Person.prototype!
 */

// console.log(Teacher.prototype.constructor === Person);
// true

/**
 * This can become a problem, so we need to set this right:
 */

Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});

// console.log(Teacher.prototype.constructor === Teacher);
// true
// ----------------------------------------------------------------------------------------------------------

/**
 * Giving Teacher() a new greeting() function
 */

/**
 * We need to define a new greeting() function on the Teacher() constructor.
 *
 * The easiest way to do this is define it on Teacher()'s prototype:
 */

Teacher.prototype.greeting = function () {
  let prefix;
  if (
    this.gender === 'male' ||
    this.gender === 'Male' ||
    this.gender === 'm' ||
    this.gender === 'M'
  ) {
    prefix = 'Mr.';
  } else if (
    this.gender === 'female' ||
    this.gender === 'Female' ||
    this.gender === 'f' ||
    this.gender === 'F'
  ) {
    prefix = 'Ms.';
  } else {
    prefix = 'Mx.';
  }

  console.log(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
};

// let teacher1 = new Teacher('Daisy', 'Mary', 23, 'female', ['readding', 'music'], 'English');
// teacher1.greeting();
// Hello, My name is Ms. Mary, and I teach Enghlish.
// ---------------------------------------------------------------------------------------------------------

// Student() construtor function
function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

// Student()'s prototype inherits features of Person()'s prototype
Student.prototype = Object.create(Person.prototype);

// Reset Student()'s prototype's constructor property
// Solution 1
// Student.prototype.constructor = Student;
// Solution 2
Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false,
  writable: true,
});

// Update greeting() method on Student()'s prototype
Student.prototype.greeting = function () {
  console.log(`Yo! I'm ${this.name.first}.`);
};

// Create an Student object instance
// let student1 = new Student('Kelly', 'Brook', 34, 'female', ['reading', 'cycling']);
// student1.greeting();
// Yo! I'm Kelly.
// student1.bio();
// Brook Kelly is 34 years old. She likes reading and cycling.
// ---------------------------------------------------------------------------------------------------------

// Employee() constructor function
function Employee(name) {
  this.name = name;
}

// Define a method on Employee()'s prototype
Employee.prototype.farewell = function () {
  console.log(`Goodbye!`);
};

// Create an Employee object instance
let employee1 = new Employee('John');

// Calling farewell() method
employee1.farewell();
// Goodbye!
