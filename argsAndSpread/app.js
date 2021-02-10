// will set a default value for tree if theres no argument for
// it on function call
//
// function test(one, two, tree = "test") {

function test(one, two, tree) {

    // one = one || "one";
    // two = two || "two";
    // tree = tree || "tree";

    // if(arguments.length > 0) return;
    if(arguments.length === 0) return;

    console.log(one);
    console.log(two);
    console.log(tree);

    // "arguments" foi updated pra ...spread mas em muito 
    //codigo ainda se ve o "arguments"
    console.log(arguments);
    console.log(arguments.length);
    console.log("----------");
}

// we execute the test function and the 1st thing it does is setting up memory space for the arguments and set them to undefined
test();

test("um");
test("um", "dois");
test("um", "dois", "tres");
test("um", "dois", "tres");

console.log("---a----a---".split("a", 2));

// console.log("---a----a---".startsWith("-", 2)); //true
console.log("---a----a---".startsWith("-", 3)); //false

console.log("       ---a----a---  ".trim());

console.log("---a----a---".toUpperCase());

console.log("---a----a---".toLowerCase());

console.log("---a----a---".toString());

console.log("---------------------------");

// ... significa "se vier ai mais alguma coisa" entao mete no
// "spread" que é um array que guarda todos os args extra

function test2(one, two, tree, ...spread) {

    // one = one || "one";
    // two = two || "two";
    // tree = tree || "tree";

    if(arguments.length === 0) return;

    console.log(one);
    console.log(two);
    console.log(tree);
    console.log(arguments);
    console.log(arguments.length);
    
    console.log(spread);

    console.log("----------");
}

test2("one", "two", "tree", "dfvdsf", 4, 5,6 ,2,34,6, 21,4 ,45);