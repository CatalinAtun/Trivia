const botonComenzar = document.getElementById("botonComenzar");
const main = document.getElementById("main");
let nombre;
let puntaje=0;
function score(){
  puntaje++;
}
let incorrectas=0
function incorrect(){
  incorrectas++
}

botonComenzar.addEventListener("click",function(){
  nombre = document.getElementById("inputNombre").value;
});

botonComenzar.addEventListener("click",function(){
  main.innerHTML=`<p align='center'> Hola ${nombre},<br> pon a prueba tus conocimientos en nuestras diferentes categorías. <br>
                                   <br> ${nombre} ¿Listo para el desafío? <p>
<center>
  <button id="botonComenzar1" onclick="categorias()">Comenzar</button>
<center>`;
});

function categorias(){
  main.innerHTML=`<p align='center'>Elige la categía que deseas jugar <p>
  <center> 
  <img src="coins-icon.png"> <button id="buttonMoneda" onclick="seccionMonedas()">Monedas &euro;</button>
  <img src="building-icon.png"><button id="buttonCapitales" onclick="seccionCapitales()">Capitales &#9992;</button>
  <center>`
}

function seccionMonedas(){
  puntaje=0;
  incorrectas=0;
  main.innerHTML=`<p align='center'> Pregunta 1 de 5 <br>¿Cuál es la moneda de Liechtenstein?<p>
  <center>
  <button id="buttonMoneda" onclick="monedas2();score()">Franco suizo</button>
  <button id="buttonMoneda" onclick="monedas2();incorrect()">Rupia</button>
  <button id="buttonMoneda" onclick="monedas2();incorrect()">Libra</button>
  <center>`
}

function monedas2(){
  main.innerHTML=`<p align='center'> Pregunta 2 de 5 <br>¿Cuál es la moneda de Malasia?><p>
  <center>
  <button id="buttonMoneda" onclick="monedas3();incorrect()">Baht</button>
  <button id="buttonMoneda" onclick="monedas3();score()">Ringgit</button>
  <button id="buttonMoneda" onclick="monedas3();incorrect()">Nuevo séquel</button>
  <center>`
}

function monedas3(){
  main.innerHTML=`<p align='center'> Pregunta 3 de 5 <br>¿Cuál es la moneda de Tailandia?<p>
  <center>
  <button id="buttonMoneda" onclick="monedas4();score()">Baht</button>
  <button id="buttonMoneda" onclick="monedas4();incorrect()">Won</button>
  <button id="buttonMoneda" onclick="monedas4();incorrect()">Yen</button>
  <center>`
}

function monedas4(){
  main.innerHTML=`<p align='center'> Pregunta 4 de 5 <br>¿Cuál es la moneda de Israel?><p>
  <center>
  <button id="buttonMoneda" onclick="monedas5();incorrect()">Libra Israeli</button>
  <button id="buttonMoneda" onclick="monedas5();score()">Nuevo Sequél</button>
  <button id="buttonMoneda" onclick="monedas5();incorrect()">Tugrik</button>
  <center>`
}

function monedas5(){
  main.innerHTML=`<p align='center'> Pregunta 5 de 5 <br>¿Cuál es la moneda de Escocia?<p>
  <center>
  <button id="buttonMoneda" onclick="score();resultados()">Libra Esterlina</button>
  <button id="buttonMoneda" onclick="incorrect();resultados()">Riyal Saudi</button>
  <button id="buttonMoneda" onclick="incorrect();resultados()">Corona Danesa</button>
  <center>`
}
 
function seccionCapitales() {
  puntaje=0;
  incorrectas=0;
  main.innerHTML=`<p align='center'> Pregunta 1 de 5 <br>¿Cuál es la capital de Francia?<p>
  <center>
  <button id="buttonCapitales" onclick="capitales2();incorrect()">Berlín</button>
  <button id="buttonCapitales" onclick="capitales2();score()">París</button>
  <button id="buttonCapitales" onclick="capitales2();incorrect()">Lisboa</button>
  <center>`
}

function capitales2(){
  main.innerHTML=`<p align='center'> Pregunta 2 de 5 <br>¿Cuál es la capital de Dinamarca?<p>
  <center>
  <button id="buttonCapitales" onclick="capitales3();incorrect()">Cochabamba</button>
  <button id="buttonCapitales" onclick="capitales3();incorrect()">Antananaviro</button>
  <button id="buttonCapitales" onclick="capitales3();score()">Copenhague</button>
  <center>`
}

function capitales3(){
  main.innerHTML=`<p align='center'> Pregunta 3 de 5 <br>¿Cuál es la capital de Rusia?<p>
  <center>
  <button id="buttonCapitales" onclick="capitales4();score()">Moscú</button>
  <button id="buttonCapitales" onclick="capitales4();incorrect()">Madrid</button>
  <button id="buttonCapitales" onclick="capitales4();incorrect()">Kazán</button>
  <center>`
}

function capitales4(){
  main.innerHTML=`<p align='center'> Pregunta 4 de 5 <br>¿Cuál es la capital de Finlandia?<p>
  <center>
  <button id="buttonCapitales" onclick="capitales5();incorrect()">Tampere</button>
  <button id="buttonCapitales" onclick="capitales5();incorrect()">Turku</button>
  <button id="buttonCapitales" onclick="capitales5();score()">Helsinki</button>
  <center>`
}

function capitales5(){
  main.innerHTML=`<p align='center'> Pregunta 5 de 5 <br>¿Cuál es la capital de Checoslovaquia?<p>
  <center>
  <button id="buttonCapitales" onclick="incorrect();resultados()">Bratislava</button>
  <button id="buttonCapitales" onclick="score();resultados()">Praga</button>
  <button id="buttonCapitales" onclick="incorrect();resultados()">Budapest</button>
  <center>`
}

function resultados(){
  main.innerHTML=`<p align='center'>Resultados Obtuviste ${puntaje} &#9745; respuestas correctas e ${incorrectas} &#9746; incorrectas<br>
  ¿Volver a jugar?<p>
  <center>
  <button id="buttonMoneda" onclick="seccionMonedas()">Monedas</button>
  <button id="buttonCapitales" onclick="seccionCapitales()">Capitales</button>
  <button id="buttonBack" onclick=location=URL> Volver al inicio </button>
  <center>` 
}
