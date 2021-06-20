/**
 * This article covers traditional Javascript constructors and classes.
 * In the next article, we talk about the modern way of doing things,
 * which provides easier syntax to achieve the same things.
 */

/**
 * Objective: To understand Javascript object prototype, how prototype chains work,
 * and how to add new methods onto the prototype property.
 */
// -------------------------------------------------------------------------------------

/**
 * A prototype-based language?
 */

/**
 * Javascript is often described as a PROTOTYPE-BASED LANGUAGE - to provide inheritance,
 * objects can have a prototype object, which acts as a template object that it inherits
 * methods and properties from.
 */

/**
 * An object's prototype object may also have a prototype object, which it inherits methods
 * and properties from, and so on. This is often reffered as a prototype chain, and explains
 * why different objects have properties and methods defined on other objects available to them.
 */

/**
 * In Javascript, a link is made between the object instance and its prototype (its __proto__ property,
 * which is derived from the prototype property on the constructor), and the properties and methods are
 * found by walking up the chain of prototypes.
 */

/**
 * Note: It's important to understand that there is a distinction between
 * AN OBJECT'S PROTOTYPE (available via Object.getPrototypeOf(obj), or via the
 * deprecated  __proto__ property) and the PROTOTYPE PROPERTY ON CONSTRUCTOR FUNCTIONS.
 *
 * The constructor function Foobar() has its own prototype, which can be found by calling
 * Object.getPrototypeOf(Foobar). However this differs from its prototype property,
 * Foobar.prototype, which is the blueprint for instances of this constructor function.
 *
 * If we were create a new instance - let fooInstance = new Foobar() - fooInstance would take
 * its prototype from it's constructor function's prototype property. Thus
 * Object.getProtypeOf(fooInstance) === Foobar.prototype.
 */

// Example
// Constructor function
// function Foobar() {}

// // Create an object instance
// let fooInstance = new Foobar();

// console.log(Object.getPrototypeOf(fooInstance) === Foobar.prototype);
// // true

// console.log(Object.getPrototypeOf(Foobar) === Function.prototype);
// // true
// -----------------------------------------------------------------------------------------

/**
 * Understanding prototype objects
 */

// Constructor function
// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first: first,
//     last: last,
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;

//   // Methods
//   this.bio = function () {
//     // interests
//     let interestsString = '';
//     let interestsLength = this.interests.length;
//     if (interestsLength === 1) {
//       interestsString = this.interests[0];
//     } else if (interestsLength === 2) {
//       interestsString = `${this.interests[0]} and ${this.interests[1]}`;
//     } else {
//       for (let i = 0; i < interestsLength; i++) {
//         if (i === interestsLength - 2) {
//           interestsString += `${this.interests[i]} `;
//         } else if (i === interestsLength - 1) {
//           interestsString += `and ${this.interests[i]}`;
//         } else {
//           interestsString += `${this.interests[i]}, `;
//         }
//       }
//     }

//     // check what the value of gender is, and set pronoun
//     // to an appropriate value in each case
//     let pronoun;
//     if (
//       this.gender === 'male' ||
//       this.gender === 'Male' ||
//       this.gender === 'm' ||
//       this.gender === 'M'
//     ) {
//       pronoun = 'He likes';
//     } else if (
//       this.gender === 'female' ||
//       this.gender === 'Female' ||
//       this.gender === 'f' ||
//       this.gender === 'F'
//     ) {
//       pronoun = 'She likes';
//     } else {
//       pronoun = 'They like';
//     }

//     console.log(
//       `${this.name.last} ${this.name.first} is ${this.age} years old. ${pronoun} ${interestsString}.`
//     );
//   };

//   this.greeting = function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   };
// }

// // Create an object instance
// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// person1.bio();
// Smith Bob is 32 years old. He likes music and skiing.

/**
 * What happens if you call a method on person1, which is actually defined on Object.prototype?
 * For example:
 */

// console.log(person1.valueOf());
// Person {name: {…}, age: 32, gender: "male", interests: Array(2), bio: ƒ, …}

/**
 * valueOf() returns the value of the object it is called on. In this case, what happend is:
 *
 *    * The browser initially checks to see if the person1 object has a valueOf() method available
 *      on it, as defined on its constructor, Person(), and it doesn't.
 *
 *    * So the browser checks to see if the person1's prototype object (is Person's prototype property)
 *      has a valueOf() method available on it. It doesn't, then the browser checks
 *      person1's prototype object's prototype object, and it has.
 *      So the method is called,a nd all is good!
 *
 */

// console.log(person1.hasOwnProperty('valueOf'));
// false

// console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
// console.log(Person.prototype.hasOwnProperty('valueOf'));
// false

// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
// console.log(Object.prototype.hasOwnProperty('valueOf'));
// true

/**
 * Note: We want to iterate that the methods and properties are NOT copied from
 * one object to another in the prototype chain.
 * They are accessed by walking up the chain as decribed above.
 */

/**
 * Note: The prototype chain is traversed only while retrieving properties. If properties
 * are set or deleted directly on the object, the prototype chain is not traversed.
 */

/**
 * Note: Before ECMAScript 2015, there wasn't officially a way to access an object's prototype directly -
 * the "link" between the items in the chain are defined in an internal property, referred to as
 * [[prototype]] in the specification for the Javascript language.
 *
 * Most modern browsers, however, do offer property available called __proto__ (that's 2 underscores either
 * side), which contains object's constructor's prototype object.
 * For example, person1.__proto__ and person1.__proto__.__proro__ to see what the chain looks like in code!
 *
 * Since ECMAScript 2015, you can access an object's prototype object indirectly via Object.getPrototypeOf(obj).
 */

// console.log(person1.__proto__ === Person.prototype);
// true
// console.log(person1.__proto__.__proto__ === Object.prototype);
// true

// Since ECMAScript 2015
// console.log(Object.getPrototypeOf(person1) === Person.prototype);
// true
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(person1)) === Object.prototype);
// true
// -----------------------------------------------------------------------------------------

/**
 * The prototype property: Where inherited members are defined
 */

/**
 * The inherited properties and methods are the ones defined on the prototype property (you
 * could call it a sub-namespace) - that is, the ones that begin with Object.prototype., and not
 * the ones begin with just Object. The prototype property's value is an object, which is
 * basically a bucket for storing properties and methods that we want to be inherited by
 * objects further down the prototypr chain.
 *
 * So Object.prototype.toString(), Object.prototype.valueOf(), etc., are available to any object
 * types that inherit from Object.prototype, including new object instances created from
 * Person() constructor.
 *
 * Object.is(), Object.keys(), and other members not defined inside the prototype bucket, are not
 * inherited by object instances or object types that inherited from Object.prototype. They are
 * methods/properties available just on the Object() constructor itself.
 */

/**
 * You can check out existing prototype properties for yourself:
 */

// console.log(Person.prototype);
// {constructor: Person}

/**
 * The output won't show you very much because we haven't defined anything on our custom
 * constructor's prototype! By default, a constructor's prototype always starts empty.
 *
 * Now try th following:
 */

// console.log(Object.prototype);
/**
 {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
 */

/**
 * You'll see a large number of methods defined on Object's prototype property, which are then available
 * on objects that inherit from Object, as shown ealier.
 */

/**
 * IMPORTANT:
 *
 * The prototype property is one of the most confusingly-name part of Javascript - you might think
 * that it points to the prototype object of the current object, but it doesn't (that's an internal object
 * that can be accessed by __proto__ or Object.getPrototypeOf(obj)). prototype instead is a property containing
 * an object on which you define members that you want to be inherited.
 */
// -----------------------------------------------------------------------------------------

/**
 * Revisiting create()
 *
 */

// let person2 = Object.create(person1);

/**
 * What create() actually does is to create a new object from a specified prototype object.
 * Here, person2 is being created using person1 as a prototype object. You can check this by entering
 * the following:
 */

// console.log(Object.getPrototypeOf(person2) === person1);
// true
// -----------------------------------------------------------------------------------------

/**
 * The constructor property
 */

/**
 * Every constructor function has a prototype property whose value is an object containing
 * a CONSTRUCTOR PROPERTY. This constructor property points to the original constructor function.
 */

// console.log(Person.prototype);
// {constructor: Person}

/**
 * As you will see in the next section, properties defined on the Person.prototype property (or
 * in general on a constructor's function's prototype property, which is an object, as mentioned
 * in the above section) become available to all the instance objects using the Person() contructor.
 * Hence, the constructor property is also available to both person1 and person2 objects:
 */

// console.log(person1.constructor === Person);
// true
// console.log(person2.constructor === Person);
// true

/**
 * person1.constructor and person2.constructor should both return the Person() constructor,
 * as it contains the original definition of these instances.
 */

// let person3 = new person1.constructor('Alex', 'Ferguson', 70, 'male', ['soccer', 'reading']);
// person3.bio();
// Ferguson Alex is 70 years old. He likes soccer and reading.

/**
 * The constructor property has other uses. For example, if you have an object instance and you
 * want to return the name of the constructor it is instance of, you can use the following:
 */

// console.log(person1.constructor.name);
// "Person"

/**
 * The value of constructor.name can change (due to prototypical inheritance, binding, preprocessors,
 * transpilers, etc.). Therefore, for more complex examples, you'll want to use instanceof operator instead.
 */

// console.log(person1 instanceof Person);
// true
// -----------------------------------------------------------------------------------------

/**
 * Modifying prototypes
 */

// Constructor function: Person()
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
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

/**
 * Let's have a look at an exmaple of modifying the prototype property of a constructor function - methods
 * added to the prototype property are then available on all object instances created from the constructor.
 * At this point we'll finally add something to our Person() constructor's prototype.
 */

Person.prototype.farewell = function () {
  console.log(`${this.name.first} has left the building. Bye for now!`);
};

person1.farewell();
// Bob has left the building. Bye for now!

/**
 * You should get an message displayed, featuring the person's name as defined in the constructor.
 * This is really useful, but what is even more useful is that the whole inheritance has updated
 * dynamically, automatically making this new method available on all object instances derived from
 * the constructor.
 */

/**
 * In our code we define the constructor, then we create an intance object from the constructor,
 * then we add a new method to the constructor's prototype.
 *
 * But the farewell() method is STILL available on the person1 object instance - its members have
 * been automatically updated to include the newly defined farewell() method.
 */

// delete Person.prototype.farewell;
// person1.farewell(); // error

// delete person1.__proto__.farewell;
// person1.farewell(); // error

/**
 * You will rarely see properties defined on the prototype property, because they are not very
 * flexible when defined like this. For example you could add a property like so:
 *
 *    Person.prototype.fullName = 'Bob Smith';
 */

/**
 * In fact, a fairly common pattern for more object definitions is to define the properties inside
 * the constructor, and the methods on the prototype. This makes the code easier to read, as the
 * constructor only contains the property definitions, and the methods are split into separate blocks.
 * For exmple:
 */

// // Constructor with property definitions
// function Test(a, b, c, d) {
//   // property definitions
// }

// // First method definition
// Test.prototype.x = function () {
//   // ...
// };

// // Second method definition
// Test.prototype.y = function () {
//   // ...
// };

// etc.

// -----------------------------------

// Or:
function Test(a, b, c, d) {
  // property definitions
}

Test.prototype = {
  // reset constructor property
  constructor: Test,

  // first method definition
  x: function () {
    // ...
  },

  // second method defintion
  y: function () {
    // ...
  },

  // etc.
};
