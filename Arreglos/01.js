/* 
Este problema fue recientemente preguntado por Google en una Entrevista.
Dada una lista de números y un numero K, retornar verdadero si es que hay 2 números de la lista
que sumados den K. Por ejemplo, [10,15,3,7] y un K de 17, retorna TRUE porque 10 + 7 = 17.
*/
console.clear();

const arreglo = [10,15,3,7,2,20,19];
const K = 17;

funcionBuscar = (arreglo, K) => {

    for(let i=1; i< arreglo.length; i++){

        if( arreglo[i] < K && arreglo[0] < K){
            /* console.log(`${arreglo[0]} + ${arreglo[i]} = ${arreglo[0] + arreglo[i]}`) */
            if( arreglo[0] + arreglo[i] == K ){
                return true
            }
        }
    }
    return false
}

console.log( funcionBuscar(arreglo, K) )

/*
    1) Ignorar si el primer numero que voy a sumar es mayor a K
    2) Ignorar si el segundo numero que voy a sumar es mayor a K
*/


