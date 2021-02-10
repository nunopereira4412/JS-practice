// var script = document.createElement("script");
// script.src = "/Users/nunopereira/Desktop/js/scripts/generator/underscore.js";
// document.body.appendChild(script);


//////////////////////////////
//          EXE 1
//////////////////////////////
let fibonacci = {
    [Symbol.iterator]: function*() {
        //OR [Symbol.iterator]: function() {
        //OR [Symbol.iterator]: () => {
        let pre = 0, cur = 1;
        while(1) {
            let tmp = pre;
            pre = cur;
            cur += tmp;
            yield cur;
        }
    }
}

for (let n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }

//////////////////////////////
//          EXE 2
//////////////////////////////

var a = [8, 3, 100, 2, 3, -1];

let createArrayUntil = {
    [Symbol.iterator]: function*() {
        let sum = 0, i = 0;
        console.log("length: " + a.length);
        while(i < a.length) {
            sum += a[i];
            yield sum;
            i++;
        }
    }
}
for(let n of createArrayUntil) {
    console.log(n);
}

