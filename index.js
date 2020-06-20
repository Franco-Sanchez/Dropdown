function dropdown() {
    let boton = document.querySelector("button");
    let cajaEnlaces = document.querySelector(".contenedorEnlaces");

    boton.addEventListener("mouseover", () => {
        cajaEnlaces.classList.toggle("apareceContenedorEnlaces");
    });
};

dropdown();