let nombro
nombro = "Manolo"

let pirulo = 10
let piromo = 15
let resultoso = pirulo + piromo;

console.log(`me pican los cocos & numero ${resultoso}`);

resultoso++;
resultoso++;

console.log(resultoso);

let capricho =['pitufo', 'pendejo', 'papanata']
console.log(capricho[1]);
console.log(capricho.length);
capricho.push ('tortitas');
console.table(capricho);

console.log(capricho);

if (resultoso > 28){
    console.log('chupame la japi');
} else{
    console.log('sos un negro');
}

//let deita = Number(prompt('¿nisman le dio un cebzaso a la bala?'))

//if(deita <= 50){
  //  console.log('cagaste');
//} else{
  //  console.log('asi me gusta')
//}

//funciones (le decis que hacer con datos "a y b" y lo llamas para tirarle los parametros)

function pitufo() {
    console.log('A Nisman lo mataron');
}

pitufo()

let trolo = 10
let trola = 15

function sumar(a, b) {
    let rispostox = a + b;
    console.log(rispostox);
}

sumar(trolo, trola)

for (let index = 0; index < capricho.length; index++) {
    console.log('me pica el:', index, capricho[index]);
}