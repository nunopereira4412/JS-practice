// list matching
var [a, ,b] = [1, 2, ];

console.log(a);
console.log(b);

var a = "Hello", b = "world";
// var [a, b] = ["hello", "world"];

console.log(a+b);

////////////////////////////////////////////
////////////////////////////////////////////

// Can be used in parameter position
function g({name: x}, {age: y}) {
    console.log(x);
    console.log(y);
  }
  
g({name: 3}, {age: 4});

////////////////////////////////////////////
////////////////////////////////////////////