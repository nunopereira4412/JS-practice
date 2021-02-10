// var a = new Object();
// a.first = "test";
// a[a.first] = "first";

// console.log(a.test);


var obj = new Object();

obj["\\test"] = "test";


var c = "\\test";
console.log(obj.c);

obj.one = new Object();
obj.one.two = "two";

console.log(obj.one.two);

var b = {
    a: 4,
    b: {
        c: 5
    }
}

console.log(b);
console.log(b.a);
console.log(b.b.c);


console.log("///////////////");
console.log(obj);

var obj = 1;
console.log(obj);

var obj = "test";
console.log(obj);