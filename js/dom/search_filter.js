const d= document;

export default function searchFilters(input,selector){

  d.addEventListener("keyup", e=>{
    if(e.target.matches(input)){
      //console.log(e.key);

      //Con esta linea, lo que haya escrito en el buscador, si pulso "escape" se borra
      if(e.key=== "Escape")e.target.value = "";
      
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
      //Si devulve true remueve la clase filter pero si devuelve false ejecuta la clase filter
    }
  })

}