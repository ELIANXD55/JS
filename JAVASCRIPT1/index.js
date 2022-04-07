 function calcularmedia(lista){
    /*let sumalista = 0;

    for (let i = 0; i < lista.length; i++){
    
        sumalista = sumalista + lista[i];
    
    }*/

    const sumalista = lista.reduce(
        function (valoracumulada = 0,nuevoelemento){
            return valoracumulada + nuevoelemento;
        }
    );
    
    const promediolista = sumalista /lista.length;
    return promediolista;
 }




