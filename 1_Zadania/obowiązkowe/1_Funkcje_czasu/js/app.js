
function countHello(howMany) {
    let counter = 0;

    let interval = setInterval(function() {
        counter++;
        console.log('Hello ' + counter);

        if (counter == howMany)
            clearInterval(interval);
    }, 500);
}