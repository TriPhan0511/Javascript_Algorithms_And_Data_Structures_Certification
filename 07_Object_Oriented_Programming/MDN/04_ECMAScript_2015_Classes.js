/**
 * ECMAScript 2015 introduces class syntax to Javascript as a way to write reusable classes
 * using easier, cleaner syntax.
 *
 * In this section we'll convert the Person and the Teacher examples from prototypal inheritance
 * to classes, to show you how it's done.
 */

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}.`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

/**
 * The class statement indicates that we are creating a new class. Inside this block,
 * we define all the features of the class:
 *
 *    * The constructor() method defines the constructor function that represent our Person class.
 *
 *    * greeting() and farewell() are class methods. Any methods you want to associated with
 *      the class are defined inside it, after the constructor.
 */

/**
 * We can now instantiate object instances using the new operator, in just the same way as
 * we did before:
 */

// let person1 = new Person('Jack', 'Kick', 23, 'male', ['reading', 'boxing']);
// person1.greeting();
// Hi! I'm Jack!
// person1.farewell();
// Jack has left the building. Bye for now!

/**
 * Note: Under the hood, your classes are being converted into Prototypal Inheritance models - this
 * is just syntatic sugar.
 */
// ------------------------------------------------------------------------------------------------------

/**
 * Inheritance with class syntax
 */

/**
 * In this section we'll create our specialized Teacher class, making it inherit from Person using
 * modern class syntax. This is called CREATING A SUBCLASS or SUBCLASSING.
 */

/**
 * To create a subclass we use the extends keyword to tell Javascript the class we want to base
 * our class on:
 */

// class Teacher extends Person {
//   constructor(subject, grade) {
//     this.subject = subject;
//     this.grade = grade;
//   }
// }

/**
 * But there's a little catch.
 *
 * Unlike old-school constructor function where the new operator does the initialization of this to
 * a newly allocated object, this isn't automatically intialized for a class defined by the
 * extends keyword, i.e. the subclasses.
 * 
 * Therefore running the above code will given an error:
 * 
 * Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or
    returning from derived constructor
 * 
 */

// let teacher1 = new Teacher('Mary', 'Daisy', 23, 'female', ['reading', 'soccer'], 'Math', 10);
// Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or
// returning from derived constructor

/**
 * For sub-classes, the this initilization to a newly allocated object is always dependant on the
 * parent class constructor, i.e. the constructor function of the class from which you're extending.
 *
 * Here we are extending the Person class -  the Teacher sub-class is an extension of the Person class.
 * So for Teacher, the this initilization is done by the Person constructor.
 *
 * To call the parent constructor we have to use the super() operator, like so:
 */

// class Teacher extends Person {
//   constructor(subject, grade) {
//     super(); // Now 'this' is initialized by calling the parent constructor.
//     this.subject = subject;
//     this.grade = grade;
//   }
// }

/**
 * There is no point having a sub-class if it doesn't inherit from the parent class.
 * It is good then, that the super() operator also accepts arguments for the parent constructor.
 *
 * Looking back to our Person constructor, we can see it has the following block of code in its
 * constructor method:
 * 
    constructor(first, last, age, gender, interests) {
      this.name = {
        first: first,
        last: last,
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
 */

/**
 * Since the super() operator is actually the parent class constructor, passing it the necessary
 * arguments of the parent class constructor will also initialize the parent class properties in
 * our sub-class, thereby inheriting it:
 */

// class Teacher extends Person {
//   constructor(first, last, age, gender, interests, subject, grade) {
//     super(first, last, age, gender, interests);
//     this.subject = subject;
//     this.grade = grade;
//   }

//   // Updating the greeting method
//   greeting() {
//     console.log(`Hello! My name's ${this.name.last} and I teach ${this.subject} at ${this.grade}.`);
//   }

//   // Adding a new method
//   introduce() {
//     console.log(
//       `${
//         this.gender === 'male' ? 'He likes' : this.gender === 'female' ? 'She likes' : 'They like'
//       } ${this.interests.join(', ')}.`
//     );
//   }
// }

/** Now when we instantiate Teacher object instances, we can call methods and properties defined on both
 * Teacher and Person as we'd expect:
 */

// let teacher1 = new Teacher('Mary', 'Daisy', 23, 'female', ['reading', 'cycling'], 'Maths', 12);
// teacher1.greeting();
// Hello! My name's Daisy and I teach Maths at 12.
// teacher1.farewell();
// Mary has left the building. Bye for now!
// teacher1.introduce();
// She likes reading, cycling.
// ------------------------------------------------------------------------------------------------------

/**
 * Getters and Setters
 */

/**
 * There may be times when we want to change the values of an attribute in the classes we create or
 * we don't know what the final value of an attribute will be. Using the Teacher example, we may not
 * know what subject the teacher will teach before we create them, or their subject may change
 * between terms.
 *
 * We can handle such situations with getters and setters.
 *
 * Getters and setters work in pairs. A getter return the current value of the variable and its
 * corresponding setter changes the value of the variable to the one it defines.
 */

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);

// Check the default value
// console.log(snape.subject);
// Dart arts

// Change the value
// snape.subject = 'Balloon animals';

// Check it again and see if it matches the new value
// console.log(snape.subject);
// Balloon animals

/**
 * In our class above we have a getter and setter for the subject property. We use _ to create
 * a separate value in which to store our name property. Without using this convention, we would
 * get errors every time we call get or set. At this point:
 *
 *  * To show the current value of the _subject property of the snape object wen can use the
 *    snape.subject getter method.
 *
 *  * To assign a new value to the _subject property we can use the snape.subject = "new value"
 *    setter method.
 */

/**
 * Note: Getters and setters can be very useful at times, for example when you want to run some
 * code every time a property is requested or set. For simple cases, however, plain property access
 * without a getter or setter will do just fine.
 */
