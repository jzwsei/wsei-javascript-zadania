let buttons = document.querySelectorAll('.button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let box = this.nextElementSibling;

        if (box === null) {
            return;
        }

        box.style.visibility = box.style.visibility !== 'hidden' ? 'hidden' : 'visible';
    });
}
