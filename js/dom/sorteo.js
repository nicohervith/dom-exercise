const d= document;

export default function draw(btn, selector){

  const getWinner = (selector) =>{
      const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];


        //El winner almacena una lista, con el textContent me muestra el nombre
        return `Ganador: ${winner.textContent}`
  };

    d.addEventListener("click", (e) =>{
      if(e.target.matches(btn)){
        let result = getWinner(selector);
        alert (result);
        console.log(result);
      }
    })
}

/*const getWinnerComment = (selector) => {
  const $players = d.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players(random);

  //El winner almacena una lista, con el textContent me muestra el nombre
  return `Ganador: ${winner.textContent}`;
};

//Este caso me daria un ganador en un sorteo de comentarios de youtube
getWinnerComment("ytd-comment-thread-rendered #author-text span")*/