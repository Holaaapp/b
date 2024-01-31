const input = document.getElementById('input');
const respuesta = document.getElementById('respuesta');
const pato = document.getElementById('img-pato');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const leon = document.getElementById('img-leon');
const btnF = document.getElementById('btnF');
const btnF2 = document.getElementById('btnF2');
const alfredo = document.getElementById('freddy');
const caballo = document.getElementById('btnJ')
const caballo2 = document.getElementById('btnJ2')
const juan = document.getElementById('caballo')
const btnP = document.getElementById('btnP')
const btnP2 = document.getElementById('btnP2')
const perro = document.getElementById('perro')

 function btn() {
    const valor = input.value


if (valor === 'Gabi' || valor === 'Gabriel' || valor === 'Agus' || valor === 'Agustin') {
    respuesta.innerText = `Hola mi brother`
} else if (valor === 'Pato' || valor === 'pato') {
 btn2.style.display = "grid"
 respuesta.innerText = ``
} else if (valor === 'Leon' || valor === 'No hay plata' || valor === 'Viva la libertad carajo' || valor === 'Milei') {
    btn4.style.display = "grid"
    respuesta.innerText = ``
} else if (valor === 'Freddy' || valor === 'freddy' || valor === 'alfredo' || valor === 'ur ur ur'){
btnF.style.display = "grid"
respuesta.innerText = ``
} else if(valor === 'juan' || valor === 'Juan' || valor === 'caballo' || valor === 'Caballo'){
caballo.style.display = "grid"
} 

 else{
    respuesta.innerText = `Hola ${valor}`
}
 }

 function btn2ndo() {
    btn2.style.display = "none"
    btn3.style.display = "grid"
    pato.style.display = "grid"
    btn3.style.marginTop = "10px"
    pato.style.marginTop = "10px"
}

function btn3ro() {
    btn3.style.display = "none"
    pato.style.display = "none"
}

function btn4to(){
    btn4.style.display = "none"
    btn5.style.display = "grid"
    leon.style.display = "grid"
}

function btn5to() {
    btn5.style.display = "none"
    leon.style.display = "none"
}

function freddy() {
    btnF.style.display = "none"
    btnF2.style.display = "grid"
    alfredo.style.display = "grid"
    alfredo.style.marginTop = "10px"
    btnF2.style.marginTop = "10px"
}

function freddy2() {
    btnF2.style.display = "none"
    alfredo.style.display = "none"
}

function juancito(){
    caballo.style.display = "none"
    caballo2.style.display = "grid"
    juan.style.display = "grid"
}

function juancito2() {
    caballo2.style.display = "none"
    juan.style.display = "none"
}

function perrote() {
    btnP.style.display = "none"
    btnP2.style.display = "grid"
    perro.style.display = "grid"
}

function perrote2() {
    btnP2.style.display = "none"
    perro.style.display = "none"
}