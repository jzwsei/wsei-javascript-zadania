document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */


     // ex 8.0
     let titleEl = document.querySelector('.title');

     function getDataAnimation(el) {
         return el.attributes['data-animation'].value;
     }

     console.log(getDataAnimation(titleEl));

     // ex 8.1
     let homeEl1 = document.querySelector('#home'),
        homeEl2 = document.getElementById('home'),
        liEl = document.querySelector('li[data-direction]'),
        blockEl = document.querySelector('.block');

     // ex 8.2
     let navLiElems = document.querySelectorAll('nav > li'),
        divPElems = document.querySelectorAll('div p'),
        articleDivElems = document.querySelectorAll('article > div');

     console.log(navLiElems.length + '/' + divPElems.length + '/' + articleDivElems.length);

     // ex 8.3
     let firstArticleEl = document.querySelector('article.first');
     console.log(firstArticleEl.querySelectorAll('h1').length);
});
