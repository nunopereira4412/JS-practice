var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
        return "Full name: " + this.firstName + " " + this.lastName;
    },
    a: "a"
};

var John = {
firstName: "John",
    lastName: "Doe"
};

var jim = {
    getFirstName: function() {
        return this.firstName;
    }
};


// extending the 1st argument properties with the following arg properties
console.log(jim);
_.extend(jim);
console.log(jim);
_.extend(jim, John);
console.log(jim);
_.extend(jim, person);
console.log(jim);
_.extend(jim, John, person);
console.log(jim);

