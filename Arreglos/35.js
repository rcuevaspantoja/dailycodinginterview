/*
"Dado un aarreglo estricto de 3 caracteres(R, G, B). Separar los valores del arreglo,
de tal manera que las R vengan primero, las G segundas y las B como último. Solo usando permutaciones
dentro del mismo arreglo"

Dado [G,B,R,R,B,R,G], retornar [R,R,R,G,G,B,B]
*/

console.clear();
let arreglo = ['G','B','R','R','B','R','G']

const Bubble = ( arreglo ) =>{

    let temp = []
    for(let i = 0; i < arreglo.length; i++){
        
        console.log( arreglo )
        if( arreglo[ i ] == 'B' && arreglo[ i + 1] != 'B' ){

            temp = arreglo[ i+1 ];
            arreglo[i+1] = 'B';
            arreglo[i] = temp;
        }
    }

    return 0;
}

console.log( Bubble( arreglo ) );