//default value for parameter
function f(x, y=10) {
    console.log(x+y);
}
f(3, 20);

////////////////////////////////////////
////////////////////////////////////////

var ff = function(a, b=10) {
    console.log(a+b);
}
ff(10, 5);
//OR
var ff2 = (a, b=10) => a+b;
console.log(ff2(1));

////////////////////////////////////////
////////////////////////////////////////

//to use below on map
function mapPro(item) {
    return item+"Pro";
}

function fff(x, ...spread) {
    console.log(x + " spread lenght: " + spread.length);
    var res = spread.map(function(a) {return a + 1});
    var res2 = spread.map(mapPro);
    var res3 = spread.map(a => a + 100);
    console.log(x);
    console.log(res);
    console.log(res2);
    console.log(res3);
};

fff(10, 1, 2, 3, 4, 5);

////////////////////////////////////////
////////////////////////////////////////

//pass each elem of the array as arg
function a(a, b, c) {
    console.log(a+b+c);
}
a(...[1, 2, 3]);