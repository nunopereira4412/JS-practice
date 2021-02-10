var objectLiteral = {
    "name": "nome",
    age: 20,
    test: "tdsgvdzfv",
    a: {
        b: 2
    }
};

console.log(objectLiteral);

console.log("////////");

// console.log(JSON.stringify(objectLiteral));

// var jsonValue = JSON.parse('{"name": "nome", "age": 20}');

function func(token, value) {
    console.log("{" + token.toUpperCase() + ": " + value + "}");
}

var jsonValue = JSON.parse('{"test1":1, "test2":2, "test3":3}');

console.log(jsonValue);
console.log(JSON.stringify(jsonValue));

jsonValue = JSON.parse('{"test1":1, "test2":2, "test3":3}', func);

