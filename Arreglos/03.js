/* 
Dado un arreglo de enteros, encontar el primer entero positivo faltante lineamente 
En otras palabras, encontar el entero positivo más bajo que no existe en el arreglo.
El arreglo puede contener duplicados y negativos.
Por ejemplo, la entrada [3, 4, -1, 1] debería retornar 2. La entrada [1, 2, 0] deberia retornar 3
Puedes modificar las posiciones del arreglo
*/

/*
    numero entero min positivo, max positivo
*/
console.clear();
const arreglo = [3,4,-1,1];
let min = arreglo[0]; 
console.log( arreglo )
buscarMinMax = ( arreglo ) =>{

    for( let i = 0; i < arreglo.length; i++){

        if( arreglo[i] < min && arreglo[i] > 0 ){
            min = arreglo[i]
        }
    }
    buscarFaltante();
}
buscarFaltante= () =>{

    for( let j = min + 1 ; j < arreglo.length + 1; j++   ){

        let a = 0
        for( let i = 0; i < arreglo.length; i++){
            if( j == arreglo[i] ){
                a = a + 1
            }
        }

        if (a == 0){
            console.log(`el numero entero positivo faltante es ${j}`)
        }
    }
}
buscarMinMax( arreglo );
