var b = {
    name: "name",
    two: function() {
            console.log(this);
            var self = this;

            var setName = function(newName) {
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
            console.log(this);
        }
};
var name = "dsvdsc";
b.two();

