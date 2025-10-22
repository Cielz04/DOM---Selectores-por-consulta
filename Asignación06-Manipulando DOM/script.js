const botonPaisajes = document.querySelector("#btnPaisajes");

botonPaisajes.addEventListener("click", () => {
    const paisajes = document.querySelectorAll(".paisaje");
    paisajes.forEach(img => {
        img.classList.toggle("resaltado");
    });
});

const botonAnimales = document.querySelector("#btnAnimales");

botonAnimales.addEventListener("click", () => {
    const galeria = document.querySelector(".galeria");
    const animales = galeria.querySelectorAll(".animal");
    animales.forEach(img => {
        img.classList.toggle("resaltado");
    });
});

const botonPersonas = document.querySelector("#btnPersonas");

botonPersonas.addEventListener("click", () => {
    const galeria = document.querySelector(".galeria");
    const personas = galeria.querySelectorAll(".persona");
    personas.forEach(img => {
        img.classList.toggle("resaltado");
    });
});