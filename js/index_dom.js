import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shorcuts } from "./dom/teclado.js";
import { moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/btn_scroll.js";
import darkTheme from "./dom/dark_theme.js";
import responsiveMedia from "./dom/obj_responsive.js";
import ResponsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/detection_devices.js";
import networkStatus from "./dom/red_detection.js";
import webCam from "./dom/webcam_detection.js";
import getGeolocation from "./dom/geolocation.js";



const d=document;

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn", ".panel",".menu a");
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
  alarm("assets/alarma.mp3", "#activar-alarma", "#detener-alarma");
  countdown("countdown","Jul 11, 2022 03:23:19", "Feliz cumpleaños")
  scrollTopButton(".scroll-top-btn");
  
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href= "https://www.youtube.com/watch?v=huie2_3Pekg" target="_blank" rel="noopener"> Ver video </a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/huie2_3Pekg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

   responsiveMedia(
     "gmaps",
     "(min-width: 1024px)",
     `<a href= "https://goo.gl/maps/LppW8oHazPjUidZw9" target="_blank" rel="noopener"> Ver mapa</a>`,
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.347359298184!2d-57.95844954961221!3d-34.92282438186194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62dd769b9d7%3A0x8e5a62b28764b5ef!2sCatedral%20de%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1634819061890!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
   );

   ResponsiveTester("responsive-tester");
   userDeviceInfo("user-device");
   webCam("web-cam");
   getGeolocation("geolocation");

})

d.addEventListener("keydown", (e) =>{
  shorcuts(e)
  moveBall(e , ".ball",  ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();