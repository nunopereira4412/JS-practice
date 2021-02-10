//this 1st part just shows that a can get the whattosay value from the
//mem space of the previous outer environment

function greet(whattosay) {
    return function(name) {
        console.log(whattosay + " " + name);
    }
}

var a = greet("Hello");

a("testName");


//using closures to our advantage, ultimately using IIFE

// console.log("---------------------------------");    

function buildFunctions() {

    var arr = []

    for(var i = 0; i < 3; i++) {
        let a = i;
        arr.push(
            function() {
                console.log(a);
                // console.log(arr[0]);
                // console.log("-----------");    
            }            
        );
    }
    return arr;
}

var a = buildFunctions();

console.log(a);
console.log(a[0]);
a[1]();
a[2]();


// console.log("---------------------------------");    


// function buildFunctions2() {

//     var arr = []
//     var c = 5;
//     for(var i = 0; i < 3; i++) {
        
//         (function() {
//             console.log(c);
//             var a = i;
//             if(a == 0) {
//                 var b = 100;
//             }
//             arr.push(
//                 function() {
//                     console.log(a);
//                     console.log(b);
//                     console.log(c)
//                 }
//             );            
//         }());
//     }
//     return arr;
// }

// var a2 = buildFunctions2();

// a2[0]();
// a2[1]();
// a2[2]();

console.log("---------------------------------");    


function buildFunctions2() {

    var arr = []

    for(var i = 0; i < 3; i++) {
            arr.push(
                (function(j) {
                    return function() {
                        console.log(j);
                    };
                }(i))
            );            
    }
    return arr;
}

var a2 = buildFunctions2();

a2[0]();
a2[1]();
a2[2]();