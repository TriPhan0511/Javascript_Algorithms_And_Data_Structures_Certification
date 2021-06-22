// Constructor function
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Add calcPerimeter() method to Shape class's prototype
Shape.prototype.calcPerimeter = function () {
  console.log(this.sides * this.sideLength);
};

// Create an instance of the Shape class
let square = new Shape('square', 4, 5);

// Call calcPerimeter() on square
square.calcPerimeter();
//-> 20

// Create another instance of Shape class
let triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();
// -> 9
