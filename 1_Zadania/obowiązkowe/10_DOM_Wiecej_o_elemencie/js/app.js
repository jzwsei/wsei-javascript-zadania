document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // ex 0
    let listItems = window.document.querySelectorAll('.ex5 li');

    for (let itemId in listItems) {
        if (isNaN(itemId)) {
            continue;
        }

        let item = listItems[itemId];

        if (itemId % 2 == 0) {
            item.style.backgroundColor = 'green';
        }

        if (itemId == 4) {
            item.classList.add('big');
        }

        if (itemId % 3 == 0) {
            item.style.textDecoration = 'underline';
        }
    }

    // ex 1
    let browserDivs = window.document.querySelectorAll('.ex1 > div'); // 0 - chrome, 1 - edge, 2 - ff

    browserDivs[1].querySelector('div').style.backgroundImage = 'url(assets/img/edge.png)';
    browserDivs[2].querySelector('div').style.backgroundImage = 'url(assets/img/firefox.png)';

    browserDivs[0].querySelector('a').innerHTML = 'Chrome';
    browserDivs[1].querySelector('a').href = 'https://www.microsoft.com/pl-pl/windows/microsoft-edge';
    browserDivs[2].querySelector('a').href = 'https://www.mozilla.org/pl/firefox/new/';

    browserDivs[0].querySelector('div').style.width = '100px';

    // ex 2
    let name = window.document.querySelector('#name'),
        favColor = window.document.querySelector('#fav_color'),
        favMeal = window.document.querySelector('#fav_meal');
    
    name.innerHTML = 'Jarosław';
    favColor.innerHTML = 'żółty';
    favMeal.innerHTML = 'naleśniki';

    // ex 3
    let ul = window.document.querySelector('.ex3 ul');
    ul.classList.add('menu');

    for (item of ul.querySelectorAll('li')) {
        item.classList.add('menuElement');
    }

    let errorElements = window.document.querySelectorAll('.error');
    for (item of errorElements) {
        item.classList.remove('error');
    }

    // ex 4
    let counter = 1;
    for (item of window.document.querySelectorAll('.ex4 li')) {
        item.setAttribute('data-id', counter);
        counter++;
    }
});