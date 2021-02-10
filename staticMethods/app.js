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
    // STATIC METHOD
    static isCircle() {
        return false;
    }
}

Rectangle.prototype.newMethod = function() {
    console.log("im a new method");
}

var r = new Rectangle(5, 10);


console.log(r);
console.log(r.getArea);
console.log(Rectangle.isCircle());

r.newMethod();