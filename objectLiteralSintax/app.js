var person = { 
    firstName: "first name", 
    age: 25,
    secondName: "secondName",
    address: {
        city: "city",
        country: "country"
    }
};

console.log(person.firstName);
console.log(person.address.country);

function greet(person) {
    console.log("Hello " + person.firstName);
}

greet(person);
greet({
    firstName: "2nd first name",
    secondName: "2nd secondName"
});