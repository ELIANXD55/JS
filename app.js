

//code del cuadrado
console.group("cuadrados");
/*
const ladocuadrado = 5;
console.log("lados del cuadrado miden:" + ladocuadrado + "cm");
*/

function perimetrocuadrado(lado) {
  return lado * 4;
}

function areacuadrado(lado) {
  return lado * lado;
}

console.groupEnd();
// /code cuadrado


// code triangulo
console.group("triangulos");

function perimetrotriangulo(lado1,lado2,base) {
  return lado1 + lado2 + base ;
}

function areatriangulo(base, alura) {
  return (base * alura) / 2;
}

console.groupEnd();
// /triangulos


// code circulo
console.group("circulo");

const pi = Math.PI;

function diametro(radio) {
  return radio * 2;
}

function perimetro(radio) {
  const diametro2 = diametro(radio);
  return diametro2 * pi;
}

function are(radio) {
  return radio * radio * pi;
}

console.groupEnd();
// /code circulos


// aqui  va el html

function calcularperimatrocuadrado(){

  const input = document.getElementById("cuadrado");
  const value = input.value;

  const perimetro1 = perimetrocuadrado(value);
  alert(perimetro1);
}

function calcularareacuadrado(){
  const input = document.getElementById("cuadrado");
  const value = input.value;

  const area1 = areacuadrado(value);
  alert(area1);
}

// triangulo

function calcularperimetrodeltriagulo(){

    const lado1 = document.getElementById("lado1");
    const lado2= document.getElementById("lado2")
    const base =document.getElementById("base")
    const valorlado1 = Number(lado1.value);
    const valorlado2 = Number(lado2.value);
    const valorbase = Number(base.value);

    const triangulo = perimetrotriangulo(valorlado1,valorlado2,valorbase);

    alert(triangulo);

}

function calcularareatriagulo(){

  const lado = document.getElementById("lado1");
  const base =document.getElementById("base")
  const valorlado = Number(lado.value);
  const valorbase = Number(base.value);

  const triangulo = areatriangulo (valorlado,valorbase);

  alert(triangulo);
}

//circulo
function perimetrocirculo(){

  const radio = document.getElementById("circulo");
  const valor = radio.value;
  
  const circuloperi = perimetro(valor)
  alert(circuloperi);
}


function areacirculo(){

  const radio = document.getElementById("circulo");
  const valor = radio.value;
  
  const circuloare = are(valor)
  alert(circuloare);
}



