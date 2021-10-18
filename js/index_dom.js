import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shorcuts } from "./dom/teclado.js";
import { moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/btn_scroll.js";


const d=document;

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn", ".panel",".menu a");
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
  alarm("assets/alarma.mp3", "#activar-alarma", "#detener-alarma");
  countdown("countdown","Jul 11, 2022 03:23:19", "Feliz cumpleaños")
  scrollTopButton(".scroll-top-btn")
})

d.addEventListener("keydown", (e) =>{
  shorcuts(e)
  moveBall(e , ".ball",  ".stage")
})