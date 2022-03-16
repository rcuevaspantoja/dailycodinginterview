/* 
Este problema fue preguntado por Twitter.
Implementar un sistema de autocompletado. Dado un string s y un set de posibles strings, 
retornar todos los strings en el set que tienen el string s como prefijo. 
*/


console.clear();
const s = 'de';

const biblioteca= ['dog','deer','deal']

buscar = (texto, biblioteca) => {

    let encontradas = []
    for(let i=0; i < biblioteca.length; i++){
        let contador = 0;
        for(let j=0; j < texto.split("").length; j++){
            
            if( texto[j] == biblioteca[i][j]){
                contador = contador + 1;
            }           
        }   
        if( contador == texto.split("").length){
            encontradas.push( biblioteca[i] );
        }
    }
    return( encontradas );
}

console.log( buscar(s, biblioteca) )

