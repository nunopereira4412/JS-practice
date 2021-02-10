//////////////////////////////////////////////// 
//////      SETS
////////////////////////////////////////////////

// item is of the form [key, value]
// same for keys() and values()
var s = new Set();
s.add("hello").add("goodbye").add("hello").add(34);
console.log(s.size === 2);
console.log(s.has("hello") === true);


for(let item of s.entries()) {
    console.log(item[0]+item[1]);
}

let newSet = new Set([...s].filter(x => x > 0));
console.log(newSet);

// performs something on each value of the set
s.forEach(function(value) {
    console.log(value + "TEST");
})

//////////////////////////////////////////////// 
//////      MAPS
////////////////////////////////////////////////
// same as for Set

var m = new Map();
m.set("hello", 42).set(s, 34).set(1, 2);
// m.set(s, 34);
console.log(m.get(s));
console.log(m.get("hello"));
console.log(m.get(1));
console.log(m.get(s) == 34);

//////////////////////////////////////////////// 
//////      WEAK MAPS
////////////////////////////////////////////////
var wm = new WeakMap();
wm.set(s, { extra: 42 });
console.log(wm.get(s));
console.log(wm.get(s).extra);
console.log(wm.size === undefined);

//////////////////////////////////////////////// 
//////      WEAK SETS
////////////////////////////////////////////////
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set
