var person = {
    first: "first",
    last: "last",
    get getAge() {
        return this.return10();
    },
    return10() {
        return 10;
    },
    greet: function() {
        return "hey";
    }
}


/////////////////////////////////
/// quick test //////////////////
// class A {}
// class B extends A {}

// console.log(A.toString());
// console.log(B.toString());
/////////////////////////////////

var s = "s";

var d = "";
s = Object.create(person);
s.greet();
console.log(s.getAge);

console.log(s.last);
console.log(s.first);

var e = new String();

console.log(e instanceof String);

console.log("1: " + Object.prototype.toString.call(d));
console.log("2: " + typeof 4);
console.log("3: " + 4 instanceof String);
console.log("4: " + d instanceof String);
console.log("5: " + s instanceof String);
console.log("6: " + s instanceof Object);
console.log("6: " + s instanceof Object);
console.log("6: " + s instanceof Object);
console.log("7: " + [] instanceof Array);
console.log("8: " + [] instanceof Object);
console.log("9: " + [].toString);
console.log(Object.prototype.toString.call([]));



// see if a variable is a function
function A() {}
var a = new A();
console.log(typeof a);

console.log(typeof A);
console.log(a instanceof A);
