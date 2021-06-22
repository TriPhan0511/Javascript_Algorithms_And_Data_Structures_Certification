// Superclass: Person
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

  // Getter
  get fullname() {
    return `${this.name.first} ${this.name.last}`;
  }

  // Method: bio()
  bio() {
    // prefix, and pronoun
    let prefix = '';
    let prounoun = '';
    if (
      this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M'
    ) {
      prefix = 'He likes';
      prounoun = 'Mr.';
    } else if (
      this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'f' ||
      this.gender === 'F'
    ) {
      prefix = 'She likes';
      prounoun = 'Ms.';
    } else {
      prefix = 'They like';
      prounoun = 'Mx.';
    }

    // interests
    let interestsString = '';
    let len = this.interests.length;
    if (len === 1) {
      interestsString = this.interests[0];
    } else if (len === 2) {
      interestsString = `${this.interests[0]} and ${this.interests[1]}`;
    } else {
      for (let i = 0; i < len; i++) {
        if (i === len - 1) {
          interestsString += `and ${this.interests[i]}`;
        } else if (i === len - 2) {
          interestsString += `${this.interests[i]} `;
        } else {
          interestsString += `${this.interests[i]}, `;
        }
      }
    }

    // console.log(`This is ${prounoun} ${this.fullname}. ${prefix} ${interestsString}.`);
    return `This is ${prounoun} ${this.fullname}. ${prefix} ${interestsString}.`;
  }

  // Method: greeting()
  greeting(someone) {
    return `Hello ${someone}, I'm ${this.fullname}.`;
  }
}
// ----------------------------------------------------------------------------------------------

// Subclass: Teacher (inherits from Person class)
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    this._subject = subject;
  }

  // Getter/Setter of subject property
  get subject() {
    return this._subject;
  }
  set subject(newSubject) {
    this._subject = newSubject;
  }

  // Updating the bio() method
  bio() {
    let string = super.bio(); // Call bio() method of superclass (Person)
    // prefix
    let prefix = '';
    if (
      this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M'
    ) {
      prefix = 'He teaches';
    } else if (
      this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'f' ||
      this.gender === 'F'
    ) {
      prefix = 'She teaches';
    } else {
      prefix = 'They teach';
    }
    return `${string} ${prefix} ${this.subject}.`;
  }

  // Adding a new method: farewell()
  farewell() {
    return `I have to leave now. Good bye!`;
  }
}
// ----------------------------------------------------------------------------------------------

// Create an instance of Person
let person1 = new Person('Kelly', 'Brooks', 35, 'female', ['cycling', 'reading', 'boxing']);

// console.log(person1.fullname);
// Kelly Brook
// console.log(person1.bio());
// This is Ms. Kelly Brooks. She likes cycling, reading and boxing.
// console.log(person1.greeting('everybody'));
// Hello evrybody, I'm Kelly Brooks.

// Create an instance of Teacher
let teacher1 = new Teacher('John', 'Adams', 46, 'M', ['running', 'hiking'], 'Maths');

console.log(teacher1.bio());
// This is Mr. John Adams. He likes running and hiking. He teaches Maths.

console.log(teacher1.greeting('students'));
// Hello students, I'm John Adams.

console.log(teacher1.farewell());
// I have to leave now. Good bye!

// Reassign the subject property
teacher1.subject = 'Programming';
console.log(teacher1.bio());
// This is Mr. John Adams. He likes running and hiking. He teaches Programming.
