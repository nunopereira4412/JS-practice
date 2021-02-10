var name = "TestName";


// IIFE - immeadiately invoked function expression
var hello = function(name) {

    var name = name;

    console.log("Hello " + name);
}(name);

hello;

////////////////////////////////////////////////////////

console.log("---------------------------");

var nameLength = this.name.length;

for(i = nameLength; i > 0; i--) {
    (function(name) {

        var hello = "Hello";
        var space = " ";

        console.log(hello + space + name);
        console.log("...");
    }(name));
}

////////////////////////////////////////////////////////

console.log("---------------------------");

var test = {
    um: "um",
    test: function() {
        console.log(name);
        window.name = "changed your name";
        console.log(name);
    }()
};

test.test;


var e = (function func(name) {
    return function() {
        console.log("test");
    };
}());

e();
