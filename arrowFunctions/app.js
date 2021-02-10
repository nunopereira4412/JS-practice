var a = 1+1;

function b() {
    let a = "te";
    console.log(a);
    // let a = 10; 
    console.log(a);   
    a += 1;
    console.log(a);   
}

console.log("1  //////////");
var bb = function() {
    let a = 4;
    console.log(a);
    console.log(this.a);
    function f() {
        console.log(a);
        console.log(this.a);
    }
    f();
};

bb();

console.log("2  //////////");

var bb2 = () => {
    let a = 4;
    console.log(a);
    console.log(this.a);
    let f = () => {
        console.log(a);
        console.log(this.a);
    }
    f();
};
bb2();

console.log("3  //////////");

var bb = { 
    a: 0,
    f: function() {
        let a = 4;
        console.log(a);
        console.log(this.a);
        function f() {
            console.log(a);
            console.log(this.a);            
        }
        let ff = () => {
            console.log(a);
            console.log(this.a);
        }
        f();
        ff();
        return (() => console.log(this.a));
    }
} ;
bb.f();
console.log("33  //////////");
bb.f()();


console.log("4  //////////");

var bb2 = { 
    a: 0,
    f: () => {
        let a = 4;
        console.log(a);
        console.log(this.a);
        function f() {
            console.log(a);
            console.log(this.a);            
        }
        let ff = () => {
            console.log(a);
            console.log(this.a);
        }
        f();
        ff();
        return (() => console.log(this.a));
        
    }
} 
bb2.f();
console.log("5  //////////");
bb2.f()();

console.log("6  //////////");

console.log(a);
b();
console.log(a);

console.log("////////////////////");

function f(a, b) {
    console.log(a + b);
}
f(1, 2);

var f = function(a, b) {
    console.log(a + b);
}
f(1, 3);

// ARROW FUNCTION
var f = (a, b) => console.log(a + b);
f(1, 4);


//////////////////////////////////////////

// Unlike functions, arrows share the same lexical this as their surrounding code.

// vai alterar o name do global object. reconhece o this como do global object e nao do objeto b

var b = {
    name: "name",
    two: () => {
            console.log(this);
            var self = this;

            var setName = (newName) => {
                console.log(name);
                console.log(self.name);
                console.log(this.name);
                self.name = newName;
                console.log(self.name);
                console.log("test: " + name);
            };

            setName("updated name");
            console.log(self.name);
            console.log(self);
        }
};
var name = "dsvdsc";
b.two();
console.log(name);


// Lexical this

var bob = {
    name: "bob",
    friends: [],
    printFriends() {
        this.friends.forEach(f => console.log(this.name + " knows " + f));
    }
}

bob.friends.push("one, two, tree");
bob.printFriends();

