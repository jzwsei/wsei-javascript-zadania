let buttonEl;

window.document.addEventListener('DOMContentLoaded', function() {
    for (let buttonId of ['button1', 'button2', 'button3']) {
        buttonEl = document.querySelector('#' + buttonId);
        
        buttonEl.addEventListener('click', function() {
            let counterEl = this.nextElementSibling.querySelector('.counter');
            counterEl.innerHTML = counterEl.innerHTML ? Number(counterEl.innerHTML) + 1 : 1;
        });
    }
});