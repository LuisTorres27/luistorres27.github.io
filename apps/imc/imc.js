let Boton = document.getElementById("miBoton");
let Formulario = document.getElementById("formulario");
let Fila1 = document.getElementById("tabla").rows[1];
let Fila2 = document.getElementById("tabla").rows[2];
let Fila3 = document.getElementById("tabla").rows[3];
let Fila4 = document.getElementById("tabla").rows[4];
let Fila5 = document.getElementById("tabla").rows[5];
let Fila6 = document.getElementById("tabla").rows[6];

Boton.addEventListener("click", calcular);


function calcular(){

let Peso = parseFloat(document.getElementById("fieldPeso").value);
let Estatura = parseFloat(document.getElementById("fieldEstatura").value);

let Resultado = Peso / (Estatura * Estatura);

let Mensaje = document.getElementById("mensaje");
let infoONe = document.getElementById("info-one");
let infoTwo = document.getElementById("info-two");

infoONe.innerText = "Peso: " + Peso + " Kilos";
infoTwo.innerText = "Estatura: " + Estatura.toFixed(2) + " Metros";
Mensaje.innerText = "Su IMC es de: " + Resultado.toFixed(1);

if(Resultado <= 18.5){
    Fila1.classList.add("bg-red");

    Fila2.classList.remove("bg-green");
    Fila3.classList.remove("bg-red");
    Fila4.classList.remove("bg-red");
    Fila5.classList.remove("bg-red");
    Fila6.classList.remove("bg-red");
}

else if(Resultado >= 18.5 & Resultado <= 24.9){
    Fila2.classList.add("bg-green");

    Fila1.classList.remove("bg-red");
    Fila3.classList.remove("bg-red");
    Fila4.classList.remove("bg-red");
    Fila5.classList.remove("bg-red");
    Fila6.classList.remove("bg-red");
}

else if(Resultado >= 25.0 & Resultado <= 29.9){
    Fila3.classList.add("bg-red");

    Fila1.classList.remove("bg-red");
    Fila2.classList.remove("bg-green");
    Fila4.classList.remove("bg-red");
    Fila1.classList.remove("bg-red");
    Fila2.classList.remove("bg-green");
}

else if(Resultado >= 30.0 & Resultado <= 34.9){
    Fila4.classList.add("bg-red");

    Fila1.classList.remove("bg-red");
    Fila2.classList.remove("bg-green");
    Fila3.classList.remove("bg-red");
    Fila5.classList.remove("bg-red");
    Fila6.classList.remove("bg-red");
   
}

else if(Resultado >= 35.0 & Resultado <= 39.9){
    Fila5.classList.add("bg-red");

    Fila1.classList.remove("bg-red");
    Fila2.classList.remove("bg-green");
    Fila3.classList.remove("bg-red");
    Fila4.classList.remove("bg-red");
    Fila6.classList.remove("bg-red");
}

else if(Resultado >= 40.0){
    Fila6.classList.add("bg-red");

    Fila1.classList.remove("bg-red");
    Fila2.classList.remove("bg-green");
    Fila3.classList.remove("bg-red");
    Fila4.classList.remove("bg-red");
    Fila5.classList.remove("bg-red");
}

Formulario.reset();
}

