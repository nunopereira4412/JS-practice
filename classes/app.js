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

// class expression with no name (anonnymous)
var rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

// class expression with name
var rect = class Rect extends Rectangle {

    constructor(width, height) {
        super(width, height);
        // this.width = super.width;
        // this.height = super.height;
    }

}

var r = new Rectangle(5, 10);
console.log(r);

var r2 = new rectangle(3, 3);
console.log(r2);

var r3 = new rect(6, 6);
console.log(r3);

console.log(r.getArea); 
//50
console.log(rectangle.getArea);
//undefined
console.log(rect.prototype);
console.log(rectangle.prototype);
console.log(Rectangle.prototype);
