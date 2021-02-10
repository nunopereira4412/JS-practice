greet();

function greet() {
    console.log("Hello");
}

var anonymousGreet = function(name) {
    console.log("Hello " + (name || "name test"));    
}

greet();
anonymousGreet();
anonymousGreet("Daryl");

////////////////////////////////////////////////////////////

function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});


var test = {
    one: "one",
    two: "two",
    function: {
        function() {
            console.log("function test");
        }
    }
};

test.function.subFunction = "sub function";

console.log(test);
console.log("///////////////");
console.log(test.one);
console.log("///////////////");
console.log(test.function);
console.log("///////////////");
console.log(test.function.subFunction);

console.log("/////////////////////////////////////////////");

var test2 = new Object();

test2["one"] = "one";
test2["two"] = {
    test2One: "test2 one"
};

test2["two"]["testTwoONE"] = "test two one";

console.log(test2.one);
console.log(test2["one"]);
console.log(test2.two.testTwoONE);
console.log(test2["two"]["testTwoONE"]);
console.log(test2.two);

console.log("/////////////////////////////////////////////");

console.log(greet.name);
console.log(greet.console);
console.log(greet.function);



