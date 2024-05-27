import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento) {
    evento.preventDefault();//previene que se ejecute la acción por defecto del submit

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random * 10).toString();

    //Realización con control de errores
    try {
        await conexionAPI.enviarVideo(titulo, descripcion, url, imagen);
        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => crearVideo(evento));