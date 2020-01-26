let searchEl1 = document.querySelector('.first > div:first-child > p:last-child');
console.log(searchEl1.getAttribute('data-answer'));

let searchEl2 = document.querySelector('#second').parentElement.children[2];
console.log(searchEl1.getAttribute('data-answer'));

let searchEl3 = document.querySelector('[data-ex=third]').parentElement.parentElement.lastChild.firstChild.children;
searchEl3 = searchEl3[Math.floor(searchEl3.length / 2)];
console.log(searchEl3); // nie działa - błąd zadania?

let searchEl4 = document.querySelector('.forth').parentElement.querySelector('article').getElementsByTagName('p')[1];
console.log(searchEl3.getAttribute('data-answer'));



