let boton = document.getElementById("miBoton");
let calculo = document.getElementById("calculo");
let formulario = document.getElementById("formulario");

boton.addEventListener("click", calcular);

function calcular(){
let box1 = parseInt(document.getElementById("box1").value);
let box2 = parseInt(document.getElementById("box2").value);
let box3 = parseInt(document.getElementById("box3").value);
let box4 = parseInt(document.getElementById("box4").value);
let box5 = parseInt(document.getElementById("box5").value);
let box6 = parseInt(document.getElementById("box6").value);
let box7 = parseInt(document.getElementById("box7").value);

let resultadoNotas = (box1 + box2 + box3 + box4) / 4;
let resultadoNotasFinal = resultadoNotas * 60 / 100;
let resultadoExamen = box5 * 20 / 100;
let resultadoAe = box6 * 10 / 100;
let resultadoact = box7 * 10 / 100;

let total = (resultadoNotasFinal + resultadoExamen + resultadoAe + resultadoact);

calculo.innerHTML = total;

formulario.reset()
}
