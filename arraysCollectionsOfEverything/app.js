var arr = [
    1,
    false,
    {
        name: "name",
        age: 20
    },
    function(name) {
        console.log("Hello " + name);
    }
];

arr[3](arr[2].name);