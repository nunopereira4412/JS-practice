// class statement
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get getArea() {
        return this.calcArea();
    }
    calcArea() {
        return this.width * this.height;
    }
}

Rectangle.prototype.x = function() {
    // console.log("test");
}

var r2 = new Rectangle(4, 4);

// goes to prototype to find the x method
r2.x();

//////////////////////////////////////////////////
//just to see that greet-this points to the person object
var first = "dsfvsf";
var person = {
    a: function() {console.log("TETTT")}(),
    first: "default",
    last: "default",
    greet: function() {
        return "hi " + this.first;
    }
}

// Object.create creates an empty object whose prototype is the argument of create, person.
var john = Object.create(person);


john.first = "john first";
john.last = "john last";

console.log(john);
console.log("John: " + john.prototype);
console.log(john.first);
console.log(john.greet());

// john.first = "first";

// console.log(john.first);
// // console.log(john.greet());
