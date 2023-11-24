const pantalla =document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventlistener("click", () => {
        const boton_apretado = boton.textcontent;
        if (boton.id === "c") {
            pantalla.textcontent = "0";
            return;
        }
        if (pantalla.textContent === "0") {
            pantalla.textContent = boton_apretado;
        }else {
            pantalla.textContent += boton_apretado;
        }

    })


})