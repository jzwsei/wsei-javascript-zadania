let buttons = document.querySelectorAll('.button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let box = this.parentElement;
        box.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
}
