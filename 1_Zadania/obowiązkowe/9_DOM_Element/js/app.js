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
});
