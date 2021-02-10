function greet1(name) {
    console.log(name);
}

function greet2(name) {
    name = name || 'testName';
    console.log(name);
}

greet1();
greet2();
greet1("This is a name");