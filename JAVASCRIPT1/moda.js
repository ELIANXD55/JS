const lista1 = [
1,
2,
3,
1,
2,
3,
4,
2,
1,
1,
2,
]

const ista1con = {};

lista1.map(

function (elemento){ 

if (ista1con[elemento]){

    ista1con[elemento] += 1;

}
 else {

    ista1con[elemento] = 1;

 }

}

);


const lista1array = Object.entries(ista1con).sort(

    function (valoracumulada,nuevalor){

valoracumulada -nuevalor

    }
);


const lista1ar = Object.entries(ista1con).sort(
    function (elementoA,elementoB){

return elementoA[1] - elementoB [1];

    }
);


const moda = lista1ar[lista1ar,length-1];