document.addEventListener("DOMContentLoaded", function() {
    let widthEl = document.querySelector('#windowWidth');
    let heightEl = document.querySelector('#windowHeight');
    let onResize = function() {
        widthEl.innerHTML = window.innerWidth;
        heightEl.innerHTML = window.innerHeight;
    };

    onResize();
    window.addEventListener("resize", onResize)
});