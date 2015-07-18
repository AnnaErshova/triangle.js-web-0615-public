'use strict';

function Triangle(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
  if ((a > 0 && b > 0 && c > 0) && ( a+b > c && b+c > a && a+c > b)){
    Triangle.prototype.kind(); // will work even with an empty if statement
    }
  else{
    throw new TriangleError ();
  }
};

Triangle.prototype.kind = function() {
  if (this.a === this.b && this.b === this.c) {
    return "equilateral";
  }
  else if ((this.a === this.b) || (this.b === this.c) || (this.a === this.c)){
    return "isosceles";
  }
  else {
    return "scalene";
  }
}; // ends prototype function

// Create a new object, that prototypally inherits from the Error constructor.
function TriangleError(message) {
  this.name = 'TriangleError';
  this.message = message || 'illegal triangle';
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

