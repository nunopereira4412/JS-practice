// var exibeMensagem = function() {
//     if(true) { 
//         var escopoFuncao = 'Caelum'; 
//         let escopoBloco = 'Alura';

//        console.log(escopoBloco); // Alura 
//    } 
//    console.log(escopoFuncao); // Caelum 
//    console.log(escopoBloco); // Erro: escopoBloco só é visivel dentro do if
// }();
var a = 1;

function test() {
    var b = 1;
    if(1){
        if(1){
            let c = "c"; 
            console.log(b);
            console.log(c);
            if(1) {
                var d = "d";
                console.log(b);
                console.log(c);
                console.log(d);
            }
            console.log(d);
        }
    }
    console.log(b);
    console.log(d);
}

console.log(a);

test();
// console.log(d); //ERROR

//////////////////////////////////////////
console.log("\n\n");
//////////////////////////////////////////

function t() {
    // let aa = 1;
    // console.log(aa);
    {
        const aa = 3;
        console.log(aa);
        console.log(aa);
    };
    let aa = 2;
    console.log(aa);
}
t();

console.log("\n\n");

// var q = 1;
const q = 1;
console.log(q);
q = 2               //ERROR: assignment to const value
console.log(q);
q = 3
console.log(q);


