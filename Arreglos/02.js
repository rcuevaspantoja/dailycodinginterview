/* 
El siguiente problmea fue pregunta por Uber.
Dado un arreglo de integers, retornar un nuevo arreglo tal que cada elemento en el index i del 
nuevo arreglo sea el producto de todos
los números en el arreglo original excepto el de la posición i.
Por ejemplo, Si tu input es [1,2,3,4,5] la salida esperada sería [120, 60, 40, 30, 24]. 
Si nuestra entrada fuera [3,2,1], la salida esperada sería [2,3,6]
 */
console.clear();
const arreglo = [1,2,3,4,5];
let arreglo2 = [];


funcion = (arreglo) =>{
    
    for( let i=0 ; i< arreglo.length ; i++){

        let multiplicación = 1;
        for( let j=0 ; j< arreglo.length; j++){

            if( j != i ){
                multiplicación = multiplicación * arreglo[ j ]
            }
        }
        arreglo2.push( multiplicación );
    } 
    return( arreglo2 )
}

console.log( arreglo )
console.log( funcion( arreglo ) )