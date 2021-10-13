const d = document;

export function shorcuts(e ) {
  
  console.log(e.keycode);
  console.log(e.shiftKEy)
  console.log(`alt: ${e.altKey}`)
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);


  //Crear shorcuts
  if(e.key === "a" && e.altKey){
    alert("Haz lanzado una alerta con el teclado")
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmación con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }

}