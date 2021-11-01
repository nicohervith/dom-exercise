const d=document,
n=navigator,
w=window;


export default function getGeolocation (id){

  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy:true,
      timeout:5000,
      maximumAge:0,
    };

    const success = (position) => {
      let coords = position.coords;
       // console.log(position)

        $id.innerHTML = `
        <p> Tu posición actual es: </p>
        <ul>
          <li>Latitud: <b> ${coords.latitude} </b></li>
          <li>Longitud: <b> ${coords.longitude} </b></li>
          <li>Precisión: <b> ${coords.accuracy} </b> Metros</li>
        </ul>
        <a href ="https://www.google.com.ar/maps/@${coords.latitude},${coords.longitude},10z" target="_blank" rel ="noopener"> Ver en google maps </a>
        `;
        //El 10z en el enlace me permite determinar la cantidad de zoom que quiero ponerle ( Maximo 20 )
    }

    const error = (err) =>{

      $id.innerHTML = `<p><mark> Error: ${err.code} , ${err.message} </mark></p>`
      console.log( `Error: ${err.code} , ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success,error,options)

}