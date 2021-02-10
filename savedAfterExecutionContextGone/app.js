// 1 - var arrGlobal = [];

function buildFunctions() {

    var arr = [];

    for(var i = 0; i < 3; i++) {
        // 2 - let j = i;
        // 1 - arrGlobal.push(i);

        arr.push(

            //por cada iteraçao é criado um contexto de execuçao onde está associado em memoria o valor de j = i. Assim, cada function no return vai ter acesso a essa info guardada mesmo depois de o respetivo contexto de execuçao deixar de existir, por causa do link para o outer context
            (function(j) {
                return function() {
                    console.log(j);
                }
                // 1 - console.log(arrGlobal[i]);
                // 2 - console.log(j);
            }(i)) 
        );
    }
    return arr;
}

var arr = buildFunctions();

// 1 - arr[0](arrGlobal[0]);
// 1 - arr[1](arrGlobal[1]);
// 1 - arr[2](arrGlobal[2]);
// 2 - arr[0]();
// 2 - arr[1]();
// 2 - arr[2]();
arr[0]();
arr[1]();
arr[2]();
