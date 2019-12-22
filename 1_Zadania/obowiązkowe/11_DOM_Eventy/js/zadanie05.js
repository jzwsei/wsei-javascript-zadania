window.document.addEventListener('DOMContentLoaded', function() {
    let callback = function() {
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    };

    document.querySelectorAll('div').forEach(function(item) {
        item.addEventListener('click', callback);
    });
});