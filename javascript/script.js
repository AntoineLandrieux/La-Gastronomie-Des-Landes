const box = document.querySelector(".load");
console.log("Site web develloper par Antoine Landrieux de la classe de 5°B. Avec comme langage: HTML5, CSS3 et JAVASCRIPT");
console.log("Analyse et recherche fait par Lisandro Picart-Garcia de la classe de 5°B.");

window.addEventListener('load', function(load) {
    if (load.isTrusted) {
        box.classList.remove("show");
        box.classList.add("hidden");
    } else if (!load.isTrusted) {
        box.classList.remove("hidden");
        box.classList.add("show");
    }
});

document.getElementById("title").animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(1deg)' },
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-1deg)' }
    ], {
    duration: 150,
    iterations: 2,
    delay: 2000
});
