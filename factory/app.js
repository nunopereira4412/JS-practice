//instead of having 2 functions defined, greetEnglish for en and greetSpanish for es i can have only 1 that handles both languages at the same time

//////////////////////////////////////////////////////
// 1st approach to deal with simpler function calls
//////////////////////////////////////////////////////

function greet(firstName, lastName, language) {
    if(language == "en") {
        console.log("Hello " + firstName + " " + lastName);
    }
    if(language == "es") {
        console.log("Hola " + firstName + " " + lastName);
    }
}

function greetEnglish(name, last) {
    greet(name, last, "en");
}
function greetSpanish(name, last) {
    greet(name, last, "es");
}

greetEnglish("name", "last");
greetSpanish("name", "last");


//////////////////////////////////////////////////////
// 2nd approach to deal with simpler function calls
//////////////////////////////////////////////////////
function greet2(language) {
    return function(firstName, lastName) {
        if(language == "en") {
            console.log("Hello " + firstName + " " + lastName);
        }
        if(language == "es") {
            console.log("Hola " + firstName + " " + lastName);
        }
    }
}

greet2("en")("name", "last");
greet2("es")("name", "last");



