function dropdown() {
    let boton = document.querySelector("button");
    let cajaEnlaces = document.querySelector(".contenedorEnlaces");

    boton.addEventListener("click", () => {
        cajaEnlaces.classList.toggle("apareceContenedorEnlaces");
    });
};

dropdown();