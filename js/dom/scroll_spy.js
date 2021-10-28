const d = document;

export default function scrollSpy () {


  //Cada entry tiene una propiedad llamada isIntersecting que es un boolean
  //Eso utilizo para reflejar en el menu cuando estoy viendo esa seccion

  const $sections = d.querySelectorAll("section[data-scroll-spy]")
  const cb = (entries) =>{
      //console.log("entries",entries)

      entries.forEach((entry) =>{
        //console.log("entry", entry)
        const id=entry.target.getAttribute("id");

        if(entry.isIntersecting){
          d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")

        }else{
          d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
            "active"
          );
        }

      })
  };

  const observer = new IntersectionObserver(cb,{
   //Con el rootMargin en negativo permito que no me detecte dos secciones a la vez
    //rootMargin: "-250px"

    threshold: [0.5, 0.75]
  });
  //console.log("observer",observer);

  $sections.forEach(el=>observer.observe(el));
}