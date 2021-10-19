const d = document,
ls= localStorage;

export default function darkTheme(btn, classDark) {

    const $themeBtn =d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]")

      let moon = "🌙",
        sun = "☀️";

        const LightMode = () =>{
          $selectors.forEach((el) => el.classList.remove(classDark));
          $themeBtn.textContent = moon;
          ls.setItem("theme","light")
        }

        const DarkMode = () => {
            $selectors.forEach((el) => el.classList.add(classDark));
            $themeBtn.textContent = sun;
            ls.setItem("theme", "dark");
        };

        d.addEventListener("click", (e)=>{
          
          if(e.target.matches(btn)){
              //console.log($themeBtn.textContent)
              if($themeBtn.textContent === moon){
                DarkMode();
              } else{
                  LightMode();
              }
          }
        })
        d.addEventListener("DOMContentLoaded", (e) => {
          if (ls.getItem("theme")=== null)ls.setItem("theme", "light");
          
         //Con el theme y el light agrego la key y el value al localstorage
          if (ls.getItem("theme") === "light") LightMode()
          
          if (ls.getItem("theme") === "dark") DarkMode();
          
        })
}