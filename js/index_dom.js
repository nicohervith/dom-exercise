import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shorcuts } from "./dom/teclado.js";

const d=document;

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn", ".panel",".menu a");
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
  alarm("assets/alarma.mp3", "#activar-alarma", "#detener-alarma");
})

d.addEventListener("keyup", (e) =>{
  shorcuts(e)
})