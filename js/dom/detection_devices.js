const d=document,
n=navigator,
ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    IsMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    IsDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    IsBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie:() => ua.matches(/msie|iemobile/i),
      edge:()=> ua.match(/edge/i),
      any: function () {
        return;
        this.chrome() || this.safari() || this.firefox() || this.opera();
      },
    };


  $id.innerHTML = `
    <ul>
        <li> User Agent: <b> ${ua} </b> </li>
        <li> Plataforma: <b> ${
          IsMobile.any() ? IsMobile.any() : IsDesktop.any()
        } </b> </li>
        <li> Navegador: <b>${IsBrowser.any()} </b> </li>
        </ul>
    `;
  
    /*Contenido Exclusivo*/

  if (IsBrowser.chrome()) {
    $id.innerHTML += `<p> <mark> Este contenido solo se ve en chrome </mark> </p>`;
  }

  if (IsBrowser.firefox()) {
    $id.innerHTML += `<p> <mark> Este contenido solo se ve en firefox </mark> </p>`;
  }

  if (IsDesktop.linux()) {
    $id.innerHTML += `<p> <mark> Descarga este software para linux </mark> </p>`;
  }

  if (IsDesktop.mac()) {
    $id.innerHTML += `<p> <mark> Descarga este software para Mac </mark> </p>`;
  }

  if (IsDesktop.windows()) {
    $id.innerHTML += `<p> <mark> Descarga este software para Windows </mark> </p>`;
  }

  /* Redirecciones*/

  if (IsMobile.android()){
    window.location.href = "https://google.com"
  }

}