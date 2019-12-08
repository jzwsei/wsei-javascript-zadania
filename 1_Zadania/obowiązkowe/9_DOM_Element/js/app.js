document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     // ex 0
     // elementy nie zawierają atrybutów "data", tylko "data-color"
     function getDatasInfo(elements) {
        let datasArray = [];

        for (let item of elements) {
            datasArray.push(item.attributes['data-color'].value);
        }

        return datasArray;
     }

     console.log(getDatasInfo(links));

     // ex 1
     let elementsArray = [homeElement, childElements, banner, blocks, links];
     console.log(elementsArray);

     for (let collection of elementsArray) {
         if (!(collection instanceof HTMLCollection)) {
             continue;
         }

         for (let collectionItem of collection) {
             console.log(collectionItem.tagName, collectionItem.className);
         }
     }

     // ex 2
     for (collectionItem of blocks) {
         // zawiera html wewnątrz tagu elementu-rodzica
         console.log(collectionItem.innerHTML);
         // zawiera html wraz z tagiem elementu-rodzica
         console.log(collectionItem.outerHTML);         
     }

    // ex 3
    let myElement = window.document.getElementById('mainFooter');

    function getId(element) {
        return element.id;
    }

    console.log(getId(myElement));

    // ex 4
    function getTags(elementsArray) {
        let tags = []; 

        for (let child of elementsArray) {
            tags.push(child.tagName);
        }

        return tags;
    }

    console.log(getTags(childElements));

    // ex 5
    function getClassInfo(element) {
        return element.className;
    }

    console.log(getClassInfo(banner));

    // ex 6
    let foundElements = window.document.querySelectorAll('nav li');

    function setDataDirection(elements) {
        for (let item of elements) {
            if (item.getAttribute('data-direction')) {
                continue;
            }

            item.setAttribute('data-direction', 'top');
        }
    }

    setDataDirection(foundElements);
});
