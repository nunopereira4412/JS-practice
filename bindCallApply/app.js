////////////////////////////////////////////////////////////////
//
// bind(objArg) 
//
// diz que a current this variable passa a apontar para o this do 
// objeto passado como argumento
////////////////////////////////////////////////////////////////
var person = {
    first: "first",
    last: "last",
    getFullName: function() {
        var fullName = this.first + " " + this.last;
        return fullName;
    }
};

console.log("BIND ---------------------------------");


var logName = function(lang1, lang2) {
    console.log("Args: " + lang1 + " " + lang2);
    console.log("Logged: " + this.getFullName());
};

//nao funciona porque logName() é o original, o bind foi feito mas 
//associado a nada 
// logName.bind(person);
// logName()

var a = logName.bind(person);
a();

// passar ars para a nova fç
// var a = logName.bind(person, "en", "es");
// a();

////////////////////////////////
//              OR 
////////////////////////////////

console.log("BIND ---------------------------------");

var logName2 = function(lang1, lang2) {
    console.log("Args: " + lang1 + " " + lang2);
    console.log("Logged: " + this.getFullName());
}.bind(person);  // The change is doing the bind here

logName2("en", "es");

////////////////////////////////////////////////////////////////
//
// call(objArg) 
//
// instead of creating a copy of the original function it executes 
// the original function with the this variable re-referenced, so no 
// need to store the result copy into a variable and 
// () that variable
////////////////////////////////////////////////////////////////
console.log("CALL ---------------------------------");

var logName3 = function(lang1, lang2) {
    console.log("Args: " + lang1 + " " + lang2);
    console.log("Logged: " + this.getFullName());
};

logName3.call(person);
// logName3.call(person, "en", "es");


////////////////////////////////////////////////////////////////
//
// apply(objArg) 
//
// does the same thing as bind but it requires an array for the 
// parameters
////////////////////////////////////////////////////////////////
console.log("APPLY ---------------------------------");

var logName4 = function(lang1, lang2) {
    console.log("Args: " + lang1 + " " + lang2);
    console.log("Logged: " + this.getFullName());
};

logName4.apply(person);
logName4.apply(person, ["en", "es"]);

////////////////////////////////////////////////////////////////
//
// call() VS bind()
//
// i can just pick what will be more usefull to me depending on how
// i am programming
////////////////////////////////////////////////////////////////


console.log("IIFE CALL ---------------------------------");

(function(lang1, lang2) {
    console.log("Args: " + lang1 + " " + lang2);
    console.log("Logged: " + this.getFullName());
}).call(person, "en", "es");


////////////////////////////////////////////////////////////////
//
// FUNCTION BORROWING
//
// call some object method and use current object properties
// for the "this" on that method
////////////////////////////////////////////////////////////////


console.log("FUNCTION BORROWING ---------------------------------");

var person2 = {
    first: "first2",
    last: "last2",
};


console.log(person.getFullName.call(person2));

////////////////////////////////////////////////////////////////
//
// FUNCTION CURRYING
//
// create a copy of a function but with some preset parameters
//
////////////////////////////////////////////////////////////////


// console.log("FUNCTION CURRYING ---------------------------------");

function mul(a, b) {

    var flag = arguments.length > 2;
    var res = [];
    for(var i = 0; flag && i < arguments.length; i++) {
        if(i > 1) 
            if(arguments[i] !== (a && b)) res.push(arguments[i]);
    }
    console.log(a * b);
    if(flag) console.log(res);
}

// both mul params are free for me to pick
var a = mul.bind(this);
// the 1st mul param is permanetly 2 and i can only pick a value for b
var b = mul.bind(this, 2,2);
// both a and b params of mul are permanent
var c = mul.bind(this, 2, 2);
// further arguments i pass to the bind will be interpreted as extra
var d = mul.bind(this, 2, 2, 5, "hello");

a();
b();
// the 2 here is interpreted as being the b parameter of mul since
// a is set permanent
b(2);
c();
d();



console.log("---------------------------------");
console.log("---------------------------------");
console.log("---------------------------------");
console.log("---------------------------------");


var a = 2, b = 4;

var test = {
    a: 2, 
    b: 2, 
    mul: function(a, b) {
        console.log(a * this.b);
    }
};

var test2 = test.mul.bind(this);


test.mul(a, b);
test2(a, 2);

test.mul.call(this, a, b);

test.mul.apply(this, [3, 3]);




