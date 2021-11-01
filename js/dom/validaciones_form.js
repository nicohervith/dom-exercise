const d=document;

export default function contactFormValidations(){
  const $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]");

//Me detecta los 3 inputs + el textarea que tienen el elemento required
  //console.log($inputs)

  $inputs.forEach(input=>{
    const $span = d.createElement("span");
    $span.id = input.name;
    //A cada span le agrego title que es el mensaje de error de los inputs
    $span.textContent = input.title;
    $span.classList.add("contact-form-error","none")
    input.insertAdjacentElement("afterend" , $span);
  })

  d.addEventListener("keyup", (e) =>{
    if(e.target.matches(".contact-form [required]")){
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

        //console.log($input, pattern)
        
        if(pattern && $input.value !== ""){
          console.log("El input tiene patron")
          let regex = new RegExp(pattern)
          return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active")
        }

        if(!pattern){
           console.log("El input NO tiene patron");
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");

        }
    }
  })

  d.addEventListener("submit", (e)=>{
    //e.preventDefault();
    alert("Enviando formulario")

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");



      //Este setTimeout es para simular la entrega del formulario
      //Lo correcto es hacer peticion ajax
      setTimeout(() => {
        $loader.classList.add("none");
        $response.classList.remove("none");

        $form.reset()
        setTimeout(() => $response.classList.add("none"), 3000);
      }, 3000);
  })
}