/**
 * 01 - CREATE A BASIC JAVASCRIPT OBJECT
 */

/**
 * Think about things people see everyday, like cars, shops, and birds.
 * These are called objects: tangible things people can observe and interact with.
 *
 * What are some qualities of these objects? A car has wheels. Shops sell items.
 * Birds have wings.
 *
 * These qualities, or properties, define what make up an object.
 * Note that similar objects share the same properties, but may have different values
 * for those properties. For example, all cars have wheels, but not all cars have the
 * same number of wheels.
 *
 * Objects in Javascript are used to model real-world objects, giving them properties
 * and behavior jusk like their real-world counterparts.
 *
 * Here's an example using these concepts to create a duck object:
 */

// let duck = {
//   name: 'Aflac',
//   numLegs: 2,
// };

/**
 * This duck object has two property/value pairs: a name of Aflac and a numLegs of 2.
 */
// ------------------------------------------------------------------------------------

/**
 * 02 - USE DOT NOTATION TO ACCESS THE PROPERTIES OF AN OBJECTS
 */

// let duck = {
//   name: 'Aflac',
//   numLegs: 2,
// };

// // Access the value of Aflac
// console.log(duck.name);
// // Aflac
// ------------------------------------------------------------------------------------

/**
 * 03 - CREATE A METHOD ON AN OBJECT
 */

/**
 * Objects can have a special type of property, called method.
 *
 * Methods are properties that are functions. This adds different behavior to an object.
 *
 * Here is the duck example with a method:
 */

// let duck = {
//   name: 'Aflac',
//   numLegs: 2,
//   // sayName: function () {
//   //   return 'The name of this duck is ' + duck.name + '.';
//   // },

//   sayName: function () {
//     return 'The name of this duck is ' + this.name + '.';
//   },
// };

// console.log(duck.sayName());
// // The name of this duck is Aflac.

/**
 * The example adds the sayName method, which a function that returns a sentence
 * giving the name of the duck.
 *
 * Note that the method accessed the name property in the return statement using
 * duck.name. The next challenge will cover another way to do this.
 */

// let dog = {
//   name: 'Spot',
//   numLegs: 4,
//   sayLegs: function () {
//     return `This dog has ${this.numLegs} legs.`;
//   },
// };

// console.log(dog.sayLegs());
// ------------------------------------------------------------------------------------

/**
 * 04 - MAKE CODE MORE USEABLE WITH THE this KEYWORD
 */

/**
 * The last challenge introduced a method to the duck object. It used duck.name dot notation
 * to access the value for the name property within the return statement.
 * 
  sayName: function () {
    return 'The name of this duck is ' + duck.name + '.';
  },

 * While this is a valid way to access the object's property, there is a pitfall here.
 * If the varible name changes, any code referencing the original name would need to be 
 * updated as well. In a short definition, it isn't a problem, but if an object has many 
 * references to its properties there is a greater chance for error.
 * 
 * A way to avoid these issues is with the this keyword:
 */

// let duck = {
//   name: 'Aflac',
//   numLegs: 2,
//   sayName: function () {
//     return 'The name of this duck is ' + this.name + '.';
//   },
// };

// console.log(duck.sayName());
// // The name of this duck is Aflac.

/**
 * this is a depp topic, and the above example is only one wayto use it.
 * In the current context, this refers to the object that the method associated
 * with: duck. If the object's name is changed to mallard, it is not neccessary
 * to find all the references to duck in the code. It makes the code reusable and
 * easier to read.
 */
// ------------------------------------------------------------------------------------

/**
 * 05 - DEFINE A CONSTRUCTOR FUNCTION
 */

/**
 * Constructors are functions that create new objects. They define properties and behaviors
 * that will belong to the new object. Think of them as a blueprint for the creation of new
 * objects.
 *
 * Here is an example of constructor:
 */

// function Bird() {
//   (this.name = 'Albert'), (this.color = 'blue'), (this.numLegs = 2);
// }

/**
 * This constructor defines a Bird object with properties name, color, numLegs set to
 * 'Albert', 'blue', and 2, respectively. Constructors follow a few conventions:
 *
 *  _ Constructor are defined with a capitalized name to distinguish them from the other
 * functions that are not constructors.
 *
 *  _ Constructors use the keyword this to set the properties of the object they will
 * create. Inside the constructor, this refers to the new object it will create.
 *
 *  _ Constructors define properties and behaviors instead of returning a value as other
 * functions might.
 */
// ------------------------------------------------------------------------------------

/**
 * 06 - USE A CONSTRUCTOR TO CREATE OBJECTS
 */

/**
 * Note: this inside the constructor always refers to the object being created
 */

// // Constructor
// function Bird() {
//   (this.name = 'Albert'), (this.color = 'blue'), (this.numLegs = 2);
// }

// // Create a new Bird object
// let blueBird = new Bird();

/**
 * Notice that the new operator is used when calling a constructor. This tells Javascript
 * to create a new instance of Bird called blueBird. Without the new operator, this inside
 * the constructor would not point to the newly created object, giving unexpected results.
 *
 * Now blueBird has all properties defined inside the Bird constructor:
 */

// console.log(blueBird.name);
// // Albert
// console.log(blueBird.color);
// // blue
// console.log(blueBird.numLegs);
// // 2

/**
 * Just like any other object, its property can be accessed and modified:
 */

// blueBird.name = 'Elvira';
// console.log(blueBird.name);
// // Elvira
// ------------------------------------------------------------------------------------

/**
 * 07 - EXTEND CONSTRUCTORS TO RECEIVE ARGUMENTS
 */

/**
 * The Bird constructor from the last challenge worked well. However, notice that
 * all Birds that are created with the Bird constructor are automatically named Albert,
 * are blue in color, and have two legs.
 * What if you want birds with different values for name and color?
 * It's possible to change the properties of each bird manually but that would be
 * a lot of work:
 * 
    let swan = new Bird();
    swan.name = 'Carlos';
    swan.color = 'white';
 * 
 * Suppose you were writing a program to keep track of hundreds or even thousands of
 * different birds in an aviary. It would take a lot of time to create all the birds,
 * the change the properties to different values for every one. 
 * 
 * To more easily create different Bird objects, you can design your Bird constructor
 * accept parameters:
 */

// // Constructor
// function Bird(name, color) {
//     (this.name = name), (this.color = color), (this.numLegs = 2);
// }

// // Create a new object
// let cardinal = new Bird('Bruce', 'red');
// console.log(cardinal.name);
// // Bruce
// console.log(cardinal.color);
// // red
// console.log(cardinal.numLegs);
// // 2

/**
 * The constructor is more flexible. It's now possible to define properties for each
 * Bird at the time it is created, which is one way that Javascript constructor are so
 * useful. They group objects together based on shared characteristics and behavior and
 * define a blueprint that automates their creation.
 */
// ------------------------------------------------------------------------------------

/**
 * 08 - VERIFY AN OBJECT'S CONSTRUCTOR WITH instanceof
 */

/**
 * Anytime a constructor function creates a new object, that object is said to be an
 * instance of its constructor.
 *
 * Javascript gives a covenient way to verify this with the instanceof operator.
 * instanceof allows you to compare an object to a constructor, returning true or
 * false based on wether or not that object was created with the constructor.
 *
 * Here's an example:
 */

// function Bird(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
// }

// function Dog(name) {
//     this.name = name;
// }

// let canary = {
//     name: 'Mildred',
//     color: 'Yellow',
//     numLegs: 2,
// };

// let crow = new Bird('Alexis', 'black');
// console.log(crow instanceof Bird);
// // true
// console.log(crow instanceof Dog);
// // false
// console.log(canary instanceof Bird);
// // false
// ------------------------------------------------------------------------------------

/**
 * 09 - UNDERSTAND OWN PROPERTIES
 */

/**
 * In the following example, the Bird constructor defines two properties:
 * name and numLegs
 */

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let duck = new Bird('Donald');
// let canary = new Bird('Tweety');

/**
 * name and numLegs are called own properties, because they are defined directly on the
 * instance object. That means that duck and canary each has its own seperate copy of
 * these properties. In fact every instance of Bird will have its own copy of these
 * properties.
 *
 * The following code adds all the own properties of duck to the array ownProps:
 */

// let ownProps = [];
// for (let property in duck) {
//   ownProps.push(property);
// }

// console.log(ownProps);
// // ["name", "numLegs"]

// Another solution
// let ownProps = Object.getOwnPropertyNames(duck);
// console.log(ownProps);
// // ["name", numLegs]
// ------------------------------------------------------------------------------------

/**
 * 10 - USE prototype PROPERTIES TO REDUCE DUPLICATE CODE
 */

/**
 * Since numLegs will probably have the same value for all instances of Bird,
 * you essentially have a duplicated variable numLegs inside each Bird instance.
 *
 * This may not be an issue when there are only two instances, but imagine if there are
 * millions of instances. That would be a lot of duplicated variables.
 *
 * A better way is to use the prototype of Bird. Properties in the protoype are shared
 * among LL instances of Bird.
 *
 * Here's how to add numLegs to the Bird prototype:
 */

// // Constructor function
// function Bird(name) {
//   this.name = name;
// }

// // Create two instances of Bird
// let duck = new Bird('Donald');
// let canary = new Bird('Tweety');

// console.log(duck.name);
// // Donald
// console.log(duck.numLegs);
// // undefined

// // Add numLegs to the Bird prototype
// Bird.prototype.numLegs = 2;

/**
 * Now all instances of Bird have the numLegs property
 */

// console.log(duck.numLegs);
// // 2
// console.log(canary.numLegs);
// // 2

/**
 * Since all instances automatically have the properties on the prototype, think of a prototype
 * as a "recipe" for creating objects.
 *
 * Note that the prototype for duck and canary is a part of the Bird constructor as Bird.prototype.
 * Nearly every object in Javascript has a prototype property which is part of constructor function
 * that created it.
 */
// ------------------------------------------------------------------------------------

/**
 * 11 - ITERATE OVER ALL PROPERTIES
 */

/**
 * You have now seen two kinds of properties: own properties and prototype properties.
 * Own properties are defined directly on the object instance itself.
 * And prototype properties are defined on the prototype.
 */

// // Constuctor
// function Bird(name) {
//   this.name = name; // own property
// }

// // Add "numLegs" prototype to Bird's prototype
// Bird.prototype.numLegs = 2; // prototype property

// // Create a instance of Bird
// let duck = new Bird('Donald');

/**
 * Here is how you add duck's own properties to the array ownProps and prototype properties
 * to the array prototypeProps
 */

// let ownProps = [];
// let prototypeProps = [];

// for (let prop in duck) {
//   if (duck.hasOwnProperty(prop)) {
//     ownProps.push(prop);
//   } else {
//     prototypeProps.push(prop);
//   }
// }

// console.log(ownProps);
// // ["name"]
// console.log(prototypeProps);
// // ["numLegs"]
// ------------------------------------------------------------------------------------

/**
 * 12 - UNDERSTAND THE CONSTRUCTOR PROPERTY
 */

/**
 * There is a special constructor property located on the object instance duck that were
 * created in the previous challenge
 */

// function Bird(name) {
//   this.name = name;
// }

// let duck = new Bird('Donald');

// console.log('constructor' in duck);
// // true

// console.log(duck.constructor === Bird);
// // true

/**
 * Note that the constructor property is a reference to the constructor function that
 * created the instance.
 *
 * The advantage of the constructor property is that it's possible to check for this
 * property to find out what kind of object it is.
 *
 * Here's an example of how this could be used:
 */

// function joinBirdFraternity(candidate) {
//   return candidate.constructor === Bird;
// }

// console.log(joinBirdFraternity(duck));
// // true

/**
 * Note: Since the constructor property can be overwritten, it's generally better to use
 * the instanceof operator to check the type of an object.
 */

// console.log(duck instanceof Bird);
// // true
// ------------------------------------------------------------------------------------

/**
 * 13 - CHANGE THE prototype TO THE NEW OBJECT
 */

/**
 * Up until now you have adding properties to the prototype individually:
 *
    Bird.prototype.numLegs = 2;
 *
 * This become tedious after more than a few properties:
 * 
    Bird.prototype.eat = function () {
      console.log('nom nom nom');
    };

    Bird.prototype.describe = function () {
      return `My name is ${this.name}, and I have ${this.numLegs} legs.`;
    };
 *
 * A more efficient way is to set the prototype to a new object that already contains
 * the properties. This way, the properties are added all at once:
 */

// function Bird(name) {
//   this.name = name;
// }

// Bird.prototype = {
//   eat: function () {
//     console.log('nom nom nom');
//   },
//   describe: function () {
//     return `My name is ${this.name}.`;
//   },
// };

// let duck = new Bird('Donald');
// duck.eat();
// // nom nom nom
// console.log(duck.describe());
// // My name is Donald.
// ------------------------------------------------------------------------------------

/**
 * 14 - REMEMBER TO SET THE CONSTRUCTOR PROPERTY WHEN CHANGING THE prototype
 */

/**
 * There is one crucial side effect of manually setting the prototype to a new object.
 * It erases the constructor property! This property can be used to check which constructor
 * function created the instance, but since the property has been overwritten, it now gives
 * false results.
 */

// // Constructor function
// function Bird(name) {
//   this.name = name;
// }

// // Overwrite the prototype of Bird
// Bird.prototype = {
//   describe: function () {
//     console.log(`My name is ${this.name}.`);
//   },
// };

// // Create a new instance of Bird
// let duck = new Bird('Donald');

// // Check
// console.log(duck.constructor === Bird);
// // false
// console.log(duck.constructor === Object);
// // true
// console.log(duck instanceof Bird);
// // true

/**
 * To fix this, whenever a prototype is manually set to a new object, remember to define
 * the constructor property:
 */

// function Bird(name) {
//   this.name = name;
// }

// Bird.prototype = {
//   constructor: Bird,
//   describe: function () {
//     console.log(`My name is ${this.name}.`);
//   },
// };

// let duck = new Bird('Donald');

// // Testing
// console.log(duck.constructor === Bird);
// // true
// ------------------------------------------------------------------------------------

/**
 * 15 - UNDERSTAND WHERE AN OBJECT'S prototype COMES FROM
 */

/**
 * Just like people inherit genes from their parents, an object inherits its prototype
 * directly from the constructor function that created it.
 */

// function Bird(name) {
//   this.name = name;
// }

// let duck = new Bird('Donald');

// // There are two ways to check
// console.log(Bird.prototype.isPrototypeOf(duck));
// // true
// console.log(Object.getPrototypeOf(duck) === Bird.prototype);
// // true
// ------------------------------------------------------------------------------------

/**
 * 16 - UNDERSTAND THE PROTOTYPE CHAIN
 */

/**
 * All objects in Javascript (with a few exception) have a prototype. Also, an object's
 * prototype itself is an object.
 */

// function Bird(name) {
//   this.name = name;
// }

// console.log(typeof Bird.prototype);
// // object

/**
 * Because a prototype is an object, a prototype can have its own prototype!
 * In this case, the prototype of Bird.prototype is Object.prototype
 */

// console.log(Object.prototype.isPrototypeOf(Bird.prototype));
// // true

/**
 * How is this useful? You may recall the hasOwnProperty method from previous challenge:
 */

// let duck = new Bird('Donald');
// console.log(duck.hasOwnProperty('name'));
// // true

/**
 * The hasOwnProperty method is defined in Object.prototype, which can be accessed by
 * Bird.prototype, which can then be accessed by duck.
 *
 * This is an example of the prototype chain.
 *
 * In this prototype chain, Bird is the supertype for duck, while duck is the subtype.
 * Object is the supertype for both Bird and duck. Object is a supertype for all objects
 * in Javascript. Therefore, any object can use the hasOwnProperty method.
 */
// ------------------------------------------------------------------------------------

/**
 * 17 - USE INHERITANCE SO YOU DON'T REPEAT YOURSELF
 */

/**
 * There's a principle in programming called Don't Repeat Yourself (DRY). The reason
 * repeated code is a problem is because any change requires fixing code in multiple
 * places. Thus usually more work for programmers and more room for errors.
 *
 * Notice in the exmaple below that the describe method is shared by Bird and Dog:
 */

// function Bird(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
// }

// Bird.prototype = {
//   constructor: Bird,
//   describe: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// Dog.prototype = {
//   constructor: Dog,
//   describe: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

/**
 * The describe method is repeated in two places. The code can be edited to follow
 * the DRY principle by creating a supertype (or parent) called Animal:
 */

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   describe: function () {
//     console.log(`My name is ${this.name}.`);
//   },
// };

/**
 * Since Animal includes the describe method, you can remove it from Bird and Dog:
 */

// function Bird(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
// }

// Bird.prototype = {
//   constructor: Bird,
// };

// Dog.prototype = {
//   constructor: Dog,
// };

// // Testing
// let anAnimal = new Animal();
// anAnimal.describe();
// // My name is undefined.

// let duck = new Bird('Donald');
// duck.describe(); // Uncaught TypeError: duck.describe is not a function
// ------------------------------------------------------------------------------------

/**
 * 18 - INHERIT BEHAVIORS FROM A SUPERTYPE
 */

/**
 * In the previous challenge, you created a supertype called Animal that defined behaviors
 * shared by all animals:
 */

// function Animal() {}
// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log('nom nom nom');
//   },
// };

/**
 * This and next challenge will cover how to reuse the methods of Animal inside Bird and
 * Dog without defining them again.
 *
 * It uses a technique called inheritance.
 *
 * This challenge covers the first step: make an instance of the supertype (or parent).
 * You already know one way to create an instance of Animal using new operator:
 */

// let animal = new Animal();

/**
 * There are some disadvantages when using this syntax for inheritance, which are too
 * complex for the scope of this challenge. Instead, here's an alternative approach
 * without those disadvantages:
 */

// let animal = Object.create(Animal.prototype);

/**
 * Object.create(obj) creates a new object, and sets as the new object's prototype.
 * Recall that the prototype is like the "recipe" for creating an object.
 * By setting the prototype of animal to be the prototype of Animal, you are
 * effectively giving the animal instance the same "recipe" as any other instance
 * of Animal.
 */

// animal.eat();
// // nom nom nom
// console.log(animal instanceof Animal);
// // true
// ------------------------------------------------------------------------------------

/**
 * 19 - SET THE CHILD'S prototype TO AN INSTANCE OF THE PARENT
 */

/**
 * In the previous challenge you saw the furst step for inheriting behavior from the
 * supertype (or parent) Animal: making an instance of Animal.
 * (let animal = Object.create(Animal.prototype);)
 *
 * This challenge covers the next step: set the prototype of the subtype (or child) - in
 * this case , Bird - to be an instance of Animal:
 */

// // Animal constructor function
// function Animal() {}

// // Set Animal's prototype
// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log('nom nom nom');
//   },
// };

// // Bird constructor function
// function Bird(name) {
//   this.name = name;
// }

// // Set Bird's prototype
// Bird.prototype = Object.create(Animal.prototype);

/**
 * Remember that the prototype is like the "recipe" for creating an object.
 * In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
 */

// let duck = new Bird('Donal');
// duck.eat();
// // nom nom nom

/**
 * duck inherits all of Animal's properties, including the eat method.
 */
// ------------------------------------------------------------------------------------

/**
 * 20 - RESET AN INHERITED CONSTRUCTOR PROPERTY
 */

/**
 * When an object inherits its prototype from another object, it also inherits the
 * supertype's constructor property.
 *
 * Here's an example:
 */

// // Animal constructor function
// function Animal() {}

// // Bird constructor function
// function Bird() {}

// // Bird inherit prototype from Animal's prototype
// Bird.prototype = Object.create(Animal.prototype);

// // Create an instance of Bird
// let duck = new Bird();

// console.log(duck.constructor === Animal);
// // true

/**
 * But duck and all instances of Bird should show that they were constructed by Bird and
 * not Animal. To do so, you ca manually set the constructor property of Bird
 * to the Bird object:
 */

// Bird.prototype.constructor = Bird;

// console.log(duck.constructor === Animal);
// // false
// console.log(duck.constructor === Bird);
// // True
// ------------------------------------------------------------------------------------

/**
 * 21 - ADD METHODS AFTER INHERITANCE
 */

/**
 * A constructor function that inherits its prototype object from a supertype constructor
 * function can still have its own methods in addition to inherited methods.
 *
 * For example, Bird is a constructor function that inherits its prototype from Animal:
 */

// // Animal constructor function
// function Animal() {}

// // Add eat method to Animal's prototype
// Animal.prototype.eat = function () {
//   console.log('nom nom nom');
// };

// // Bird constructor function
// function Bird() {}

// // Bird constructor function inherit its prototype from Animal constructor function
// Bird.prototype = Object.create(Animal.prototype);

// // Reset Bird prototype's constructor property
// Bird.prototype.constructor = Bird;

/**
 * In addition to what is inherited from Animal, you wan to add behavior that is
 * unique to Bird objects.
 *
 * Here's Bird will get a fly() function. Functions are added to Bird's prototype
 * the same way as any constructor function:
 */

// Bird.prototype.fly = function () {
//   console.log("I'm flying!");
// };

/**
 * Now instances of Bird will have both eat() and fly() methods:
 */

// let duck = new Bird();
// duck.eat();
// // nom nom nom
// duck.fly();
// // I'm flying!
// ------------------------------------------------------------------------------------

/**
 * 22 - OVERRIDE INHERITED METHODS
 */

/**
 * In the previous lessons, you learned that an object can inherit its behavior (methods)
 * from another object by referencing its prototype object:
 *
 *    ChildObject.prototype = Object.create(ParentObject.prototype);
 *
 * Then the ChildObject received its own methods by chaining them onto its prototype:
 *
 *    ChildObject.prototype.methodName = function() {...};
 *
 * It's possible to override an inherited method. It's done the same way - by adding
 * a method to ChildObject.prototype using the same method name as the one to override.
 *
 * Here's an example of Bird overriding the eat() method inherited from Animal:
 */

// // Animal constructor function
// function Animal() {}

// // Add eat() method to Animal's prototype
// Animal.prototype.eat = function () {
//   return 'nom nom nom';
// };

// // Bird constructor function
// function Bird(name) {
//   this.name = name;
// }

// // Bird inherit prototype from Animal's prototype
// Bird.prototype = Object.create(Animal.prototype);

// // Reset Bird's prototype constructor property
// Bird.prototype.constructor = Bird;

// // Override the eat() method
// Bird.prototype.eat = function () {
//   // console.log('peck peck peck');
//   return 'peck peck peck';
// };

/**
 * If you have an instance let duck = new Bird('Donald'); and you call duck.eat(),
 * this is how Javascript looks for the method on the prototype chain of duck:
 *
 *    1. duck => Is eat() defined here? No.
 *    2. Bird => Is eat() defined here? Yes. Execute it and stop searching.
 *    3. Animal => eat() is also defined, but Javascript stopped searching before
 *        reaching this level.
 *    4. Object => Javascript stopped searching before reaching this level.
 */

// // Testing
// let duck = new Bird('Donald');
// console.log(duck.eat());
// // peck peck peck
// ------------------------------------------------------------------------------------

/**
 * 23 - USE A MIXIN TO ADD COMMON BEHAVIOR BETWEEN UNRELATED OBJECTS
 */

/**
 * As you have seen, behavior is shared through inheritance. However, there are cases
 * when inheritance is not the best solution.
 *
 * Inheritance does not work well for unrelated objects like Bird and Airplane. They
 * can both fly, but a Bird is not a type of a Airplane and vice versa.
 *
 * For unrelated objects, it's better to use mixins. A mixin allows other objects to
 * use a collection of functions.
 */

// let flyMixin = function (obj) {
//   obj.fly = function () {
//     console.log('Flying, wooosh!');
//   };
// };

/**
 * The flyMixin takes any object and gives it the fly method.
 */

// let bird = {
//   name: 'Donald',
//   numLegs: 2,
// };

// let plane = {
//   model: '777',
//   numPassenger: 524,
// };

// flyMixin(bird);
// flyMixin(plane);

// // Testing
// bird.fly();
// // Flying! wooosh!
// plane.fly();
// // Flying! wooosh!

/**
 * Note how the mixin allows for the same fly method to be reused by unrelated objects
 * bird and plane.
 */
// ------------------------------------------------------------------------------------

/**
 * 24 - USE CLOSURE TO PROTECT PROPERTIES WITHIN AN OBJECT FROM BEING MODIFIED EXTERNALLY
 */

/**
 * In the previous challenge, bird had a public property name. It is considered public
 * because it can be accessed and change outside of bird's definition.
 *
 *    duck.name = 'Duffy'
 *
 * Therefore, any part of your code can easily change the name of bird to any value.
 * Think about things like passwords and bank accounts being easili changeable by
 * any part of your codebase. That could cause a lot of issues.
 *
 * The simplest way to make this public property private is by creating a variable within
 * the constructor function. This changes the scope of that variable to be within
 * the constructor function versus available globally. This way, the variable can only be
 * accessed and changed by methods also within the constructor function.
 */

// function Bird() {
//   let hatchedEgg = 10;

//   this.getHatchedEggCount = function () {
//     return hatchedEgg;
//   };
// }

// let ducky = new Bird();
// console.log(ducky.getHatchedEggCount());
// // 10

// console.log(ducky.hatchedEgg);
// // undefined

/**
 * Here getHatchedEggCount is a privileged method, because it has access to the
 * private variable hatchedEgg. This is possible because hatchedEgg is delcared in
 * the same context as getHatchedEggCount. In Javascript, a function always
 * has acceess to the context in which it was created. This is called closure.
 */
// ------------------------------------------------------------------------------------

/**
 * 25 - UNDERSTAND THE IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
 */

/**
 * A common pattern in Javascript is to execute a function as soon as it is declared:
 */

// (function () {
//   console.log('Chirp, chirp!');
// })();

/**
 * This is an anonymous function expression that executes right away, and ouputs
 * "Chirp, chirp!" immediately.
 *
 * Note that the function has no name and is not stored in a variable.
 * The two parenheses () at the end of the function expression cause it immediately
 * executed or invoked.
 * This pattern is known as an immediately invoked function expression or IIFE.
 */
// ------------------------------------------------------------------------------------

/**
 * 26 - USE AN IIFE TO CREATE A MODULE
 */

/**
 * An immediately invoke function expression (IIFE) is often used to group related
 * functionality into a single object or module.
 *
 * For example, an earlier challenge defined two mixins:
 */

function glideMixin(obj) {
  obj.glide = function () {
    console.log('Gliding on the water');
  };
}

function flyMixin(obj) {
  obj.fly = function () {
    console.log('Flying, wooosh!');
  };
}

/**
 * We can group these mixins into a module as follows:
 */

let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log('Gliding on the water');
      };
    },
    flyMixin: function () {
      console.log('Flying, wooosh!');
    },
  };
})();

/**
 * Note that you have a immediateky invoked function expression (IIFE) that returns
 * an object motionModule. This returned object contains all of the mixin behaviors
 * as properties of the object.
 *
 * The advantage of the module pattern is that all of the motion behaviors can be packed
 * into a single object that can be used by other parts of your code.
 *
 * Here is an example using it:
 */

function Bird() {}
let duck = new Bird();

motionModule.glideMixin(duck);
// Testing
duck.glide();
// Gliding on the water
