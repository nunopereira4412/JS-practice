
function test(a, b) {
    return [a, b];
}

var a = test(
    1, 
    function() {
        return "im a function object as a parameter of a function";
    }
);

console.log("1st param: " + a[0]);
console.log("2nd param: \n" + a[1]());

console.log("----------------------------------");

var arr1 = [1, 2, 3];
console.log(arr1);

function mapForEach(a, map) {
    var res = [];
    for(var i = 0; i < a.length; i++) {
        res.push(
            map(a[i])
        );
    }
    return res;
}

console.log("----------------------------------");

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr2);

console.log("----------------------------------");

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr3);

console.log("----------------------------------");

var checkPastLimit = function(limit, item) {
    return item > limit;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr4);


// but how can i do this without having to call the bind everytime i want
// to test with a new limit?

console.log("----------------------------------");

var checkPastLimit2 = function(limit) {
    return function(limit, item) {
        return item > limit;
    }.bind(this, limit);
};

var arr5 = mapForEach(arr1, checkPastLimit2(1));
console.log(arr5);





