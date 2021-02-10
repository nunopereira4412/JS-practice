var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
        return "Full name: " + this.firstName + " " + this.lastName;
    }
};

var John = {
    firstName: "John",
    lastName: "Doe"
};

John.__proto__ = person;
console.log(John.getFullName());

var a = John.__proto__;
console.log(a.getFullName());

console.log(John.firstName);
console.log(person.firstName);
console.log(a.firstName);

var Jane = {
    firstName: "Jane"
};

Jane.__proto__ = person;
console.log("Jane first: " + Jane.firstName + "\nJane last: " + Jane.lastName);

console.log("Jane " + Jane.getFullName());
console.log("Jane " + person.getFullName.call(Jane));
console.log("Jane " + person.getFullName.call(John));


console.log({}.__proto__.__proto__);
console.log([].__proto__.__proto__.__proto__);
console.log((function() {}).__proto__.__proto__.__proto__);

a = (function() {}).caller;
aa = person.getFullName().caller;
console.log(a);
console.log(aa);

b = {}

c = [1].concat([1, 2, 3], [999]);
var jTest = b.__proto__.toString();

console.log(c);
aaa = {};


// quick JSON test
var jTest2 = {a: "jTest", b: 3, c: [4]};
console.log(JSON.stringify(jTest));
console.log(JSON.stringify(jTest2));


