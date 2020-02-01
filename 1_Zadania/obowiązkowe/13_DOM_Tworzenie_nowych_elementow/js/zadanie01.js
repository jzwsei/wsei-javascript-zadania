document.addEventListener('DOMContentLoaded', () => {
    function createElement(parent, elementsNumber) {
        elementsNumber++;

        let el = document.createElement('li');
        el.innerHTML = 'Element ' + elementsNumber;

        parent.appendChild(el);
    }

    let list = document.querySelector('ul.menu');
    let button = document.querySelector('.button');

    button.addEventListener('click', () => {
        let elements = document.querySelectorAll('ul.menu > li');
        createElement(list, elements.length);
    });
});