function calcularmedia(lista){

  const sumalista = lista.reduce(
      function (valoracumulada = 0,nuevoelemento){
          return valoracumulada + nuevoelemento;
      }
  );
  
  const promediolista = sumalista /lista.length;
  return promediolista;
}



const lista1 = [0,0,100,1,1 ];

const mitad = parseInt( lista1.length / 2);

function espar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;



if (espar(lista1.length)) {

  const elemento1 = lista1[mitad - 1];
  const elemento2 = lista1[mitad];
  const promedio1y2 = calcularmedia([
  elemento1,
elemento2,
  ]);

mediana = promedio1y2;

} else {

    mediana =  lista1[mitad]; 

}
