// Shape class
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  // calcPerimeter() method
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

// Create some instances of Shape
let square = new Shape('square', 4, 5);
let triangle = new Shape('trianle', 3, 3);

// Call calcPerimeter() method on those instances
square.calcPerimeter();
// -> 20
triangle.calcPerimeter();
// -> 9
