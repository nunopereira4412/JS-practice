// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    var eventTime = new Date().toUTCString();
    console.log(eventTime + ' - click event!');   
}

waitThreeSeconds();

// listen for the click event
document.addEventListener('click', clickHandler);
console.log('finished execution');