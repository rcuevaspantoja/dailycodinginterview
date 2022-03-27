/*
Dado un arreglo de enteros donde cada entero aparece 3 veces excepto por un entero,
que solo ocurre una vez, encontrar y retonrar el entero no duplicado

Dado [6 ,1, 3, 3, 3, 6, 6] => 1
*/
console.clear();
const arreglo = [6 ,1, 3, 3, 3, 6, 6];

const funcion = ( arreglo ) =>{

    //suma de los valores bases del arreglo
    let temp = [];
    //Se usará esta variable para poder sumar los valores
    let temp2 = []
    let temp3 = 0
    for(let i=0; i< arreglo.length; i++){

        //condicion para un numero nuevo.
        if( temp.indexOf( arreglo[i] ) == -1 ){

            //sumo los valores unicos uqe voy encontrando.
            temp.push( arreglo[i] );
            temp3 = temp3 + arreglo[i];
        }else{

            if( temp2.indexOf( arreglo[i] ) == -1 ){

                temp2.push( arreglo[i] );
                
            }else{

                temp3 = temp3  - arreglo[i]
                
            }
        }
    }

    return temp3;
}

console.log( funcion(arreglo) ); 
