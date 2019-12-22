// po przesunięciu script do head, kod wykonuje się zanim dokument html zostanie załadowany, przez co występują błędy - nie można operować na elementach które nie istnieją
// po dodaniu obsługi eventu DOMContentLoaded JS zawsze (niezależnie od położenia tagu script) czeka na załadowanie całego drzewa dom, po tym dopiero rozpoczyna wykonywanie kodu
window.document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});
