///////////////////////////////////////////////////////////////
//
// underscore.js testings
//
///////////////////////////////////////////////////////////////

// map
//
// retorna novo array aplicando a fc a arr1

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [3, 4, 5, 6, 1, 2];

console.log("----- map");

var map = _.map(arr1, function(item) { return item * 2});

console.log(map);

// each
//
// ror cada valor de arr1, aplica a fc. Retorna no final arr1

console.log("----- each");
var each = _.each(arr1, function(item) {return item * 2});
var each = _.each(arr1, function(item) {console.log(item * 2)});

console.log(each);

// reject
//
// retorna os valores que falham o truth test

console.log("----- reject");
var reject = _.reject(arr1, function(item) { return item > 1});
console.log(reject);

// filter
//
// retorna um arr com os valores do arr inicial filtrados por fc

console.log("----- filter");
var filter = _.filter(arr1, function(item) { return item > 1});
console.log(filter);

// find
//
// retorna um arr com os valores do arr inicial filtrados por fc

console.log("----- find");
var find = _.find(arr1, function(item) { return item/2 == 2; });
console.log(find);

// every
//
// retorna um arr com os valores do arr inicial filtrados por fc

console.log("----- every");
var every1 = _.every(arr1, function(item) { return (2 < item) && (item < 5); });
var every2 = _.every(arr1, function(item) { return item > 0; });
console.log(every1);
console.log(every2);

// some
//
// retorna um arr com os valores do arr inicial filtrados por fc

console.log("----- some = any");
var some = _.some(arr1, function(item) { return item < 0; });
console.log(some);

// any
//
// retorna um arr com os valores do arr inicial filtrados por fc

console.log("----- any = some");
var any = _.any(arr1, function(item) { return item < 2; });
console.log(any);

// contains
//
// returns true or false if arr containes the element

console.log("----- contains");
var contains = _.contains(arr1, 1);
console.log(contains);

//
// key, values, pairs
//

console.log("----- key, values, pairs");
console.log(_.keys(arr1));
console.log(_.values(arr1));
console.log(_.pairs(arr1));


// invoke
//
// retorna um arr com os valores do arr inicial filtrados por fc

console.log("----- invoke");
var invokeJoin = _.invoke([arr2, arr1, arr2], 'join', "");
var invokeSort = _.invoke([arr2, arr1, arr2], 'sort');

console.log(invokeJoin);
console.log(invokeSort);

// TODO

// join
//
// joins elements with certain/s character
//
// output: 1-2-3-4-5-6

console.log("----- join");
var join = arr1.join("-");
console.log(join);

// sort
//
// sorts elements

console.log("----- sort");
console.log("Unsorted: " + _.shuffle(arr2));
var sort = arr2.sort();
console.log("Sorted: " + sort);

//
// max / min
//

console.log("----- max/min");
console.log(_.max(arr1));
console.log(_.min(arr1));

//
// shuffle
//

console.log("----- shuffle");
console.log(_.shuffle(arr1));

