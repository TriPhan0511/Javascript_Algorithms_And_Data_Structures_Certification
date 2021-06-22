// Shape class
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  // calcPerimeter
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

// Square class: inherits from Shape class
class Square extends Shape {
  // constructor(sideLength) {
  //   super();
  //   this.name = 'square';
  //   this.sides = 4;
  //   this.sideLength = sideLength;
  // }

  constructor(sideLength) {
    super('square', 4, sideLength);
  }

  // calcArea
  calcArea() {
    console.log(Math.pow(this.sideLength, 2));
  }
}

// Create an instance of Square
let square = new Square(5);
square.calcPerimeter();
// -> 20
square.calcArea();
// -> 25
