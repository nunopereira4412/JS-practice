console.log(a);

console.log(afunc());

console.log(person);

var person = {
    a: (function() {console.log("TETTT")}()),
    first: "default",
    last: "default",
    greet: function() {
        return "hi " + this.first;
    }
}

console.log(person);

console.log(person.greet());

console.log("/////////////");

var a = {
    b: "test"
}

console.log(a);
console.log(a.b);

function afunc() {
    console.log(this);
    console.log("dentro: " + b);
    console.log(b);
    var b = "aparece";
    console.log(b);
    console.log("dentro: " + b);
    return "b: " + b + "   test";
}

afunc();