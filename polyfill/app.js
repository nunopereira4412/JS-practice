// polyfill
if(!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error("Object creation implementation only accepts the 1st parameter");
        }
        function F() {};
        F.prototype = o;
        return new F();
    };
}

var person = {
    first: "first asdfsdf",
    last: "last",
    greet: function() {
        console.log("hey");
    },
    get getAge() {return this.return10();},

    return10() {return 10;}
};
