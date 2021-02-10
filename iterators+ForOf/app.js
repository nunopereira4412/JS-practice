////////////////////////////////
//          EXE 1
////////////////////////////////

let fibonacci = {
    [Symbol.iterator]() {
    //OR [Symbol.iterator]: function() {
    //OR [Symbol.iterator]: () => {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: false, value: cur }
        }
      }
    }
}
  
////////////////////////////////
////////////////////////////////
// var fibonacci = {
//     a: 2,
//     b: 4,
//     c: []
// };
// fibonacci[Symbol.iterator] = function() {
//         let pre = 0, cur = 1;
//         let next = () => {
//             [pre, cur] = [cur, pre + cur];
//             return { done: false, value: cur }
//         }
//         return {next};
//     }

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }

////////////////////////////////
//          EXE 2
////////////////////////////////

// var foo = {
//     [Symbol.iterator]
// }

var arr = {
    [Symbol.iterator]: () => {
        var items = [1, 2, 3];
        var flag = false;
        return {
            next: () => {
                if(items.length === 0) flag = true;
                return {
                    done: flag,
                    value: items.shift()
                };
            }
        }
    }
}

console.log([...arr]);
console.log(Array.from(arr));

  for(let item of arr) {
      console.log(item);
  }          



//OR
console.log("\n");
let arr2 = [4, 56, 8];

arr2[Symbol.iterator] = function() {
    let properties = Object.keys(arr2);
    console.log(properties);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count >= properties.length) isDone = true;
        return {done: isDone, value: this[properties[count++]]};
    };
    return {next};
}

console.log(...arr2);
for(let item of arr2) {
    console.log(item);
}          
console.log("Array.from: " + Array.from(arr2));