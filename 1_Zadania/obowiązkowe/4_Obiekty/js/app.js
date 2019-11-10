//ex 0a
let city = {
    capital: '',
    population: 0,
    president: '',
    primeMinisters: []
};

console.log(city);

//ex 0b
let timeMachine = {
    shape: '',
    model: '',
    run: function (date, place) {
        return date + ' ' + place;
    }
};

console.log(timeMachine);
timeMachine.run('2019-10-19', 'London');

//ex 1
let book = {
    title: 'Narnia',
    author: 'CS Lewis', 
    numberOfPages: 100
};

console.log(book);

//ex 2
let person = {
    name: 'John',
    age: 15,
    sayHello: function() {
        console.log('Hello');
    }
};

console.log(person.name, person.age);
person.sayHello();

//ex 3
let recipe = {
    title: 'Naleśniki',
    servings: 150
};

recipe.ingredients = ['mąka', 'woda', 'cukier'];

console.log(recipe);

//ex 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if (spoon.isExist) {
    console.log('łyżka istnieje'); // no istnieje
} else {
    console.log('łyżka nie istnieje');
}