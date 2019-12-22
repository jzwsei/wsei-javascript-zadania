window.document.addEventListener('DOMContentLoaded', function() {
    let buttonEl,
        counterEl = document.querySelector('p span');

    for (let buttonId of ['button1', 'button2', 'button3']) {
        buttonEl = document.querySelector('#' + buttonId);
        
        buttonEl.addEventListener('click', function() {
            counterEl.innerHTML = counterEl.innerHTML ? Number(counterEl.innerHTML) + 1 : 1;
        });
    }
});