var person = new Object();

person["first"] = "first name";
person["second"] = "second name";

var first = person["first"];
var firstNameProperty = "first";

// console.log(person);
// console.log(person["first"]);
// console.log(first);
// console.log(person[firstNameProperty]);

// console.log(person.first);
// console.log(person.second);

////////////////////////////////////////////////////////////

person.robot = new Object();

person.robot.first = "first robot";

console.log(person.robot.first);
console.log(person["robot"]["first"]);







