/*
Given a list of words, find all pairs of unique indices such
that the concatenation of the two words is palindrome.

["code", "edoc", "da", "d"] , returns [(0,1), (1,0), (2,3)]
*/

const arreglo = ["code", "edoc", "da", "d"];
const resultado = [];

const verificarArreglo = () =>{

    for( let i = 0; i< arreglo.length; i++){
        for( let j = 0; j< arreglo.length; j++){

            if( arreglo[i]+arreglo[j] == (arreglo[i]+arreglo[j]).split("").reverse().join("") && i != j ){
                
                console.log( "1)"+ arreglo[i]+" "+"2)"+ arreglo[j]+" "+" -> "+ arreglo[i]+arreglo[j] +" == "+ (arreglo[i]+arreglo[j]).split("").reverse().join("") );
                resultado.push( [i,j] );
            }
        }
    }    
    console.log( resultado )
}


console.clear();
verificarArreglo( arreglo );
/*
let palabra = arreglo[0] + arreglo[1]
console.log( palabra +" == "+ palabra.split("").reverse().join("") )
*/