let boxes = document.querySelectorAll('.listContainer');

for (let box of boxes) {
    box.addEventListener('mouseenter', function() {
        let lis = box.getElementsByTagName('li');

        for (let li of lis) {
            li.style.backgroundColor = 'green';
        }

        if (lis[0]) {
            lis[0].style.backgroundColor = 'red';
        }

        if (lis[lis.length - 1]) {
            lis[lis.length - 1].style.backgroundColor = 'blue';
        }
    });
}