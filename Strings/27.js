/*Good morning! Here's your coding interview problem for today.


Dado un arreglo de parentesis redondo, curvos y cuadrados, retornar
si los parentesis están balanceados(bien puestos).

Dado el string "([])[]({})", retornar true
Dadod el string "([)]" retornar falso
*/

console.clear()
const string1 = "[()]"
const string = string1.split("")

const diccionario = {
    '(' : '1',
    ')' : '2',
    '{' : '3',
    '}' : '4',
    '[' : '5',
    ']' : '6'
}

/* console.log( string.length )
console.log( string[1] ) */

const Parentesis = ( numeros ) => {
    let inicio = 0
    let fin = numeros.length

    console.log( Buscar( 1, numeros) )


    console.log( inicio, fin )
}

//los combierto a numeros
const Refactorizar = ( string ) => {

    console.log( string )
    const numeros = string.map( letra => diccionario[letra] );
    /* console.log( numeros ) */
    return numeros
}

const Buscar = ( posicion, numeros ) => {

    console.log( posicion, numeros)

    if( numeros[posicion] == 5){
        for( let i = posicion; i < numeros.length; i++){
            if( numeros[ i ] == 6){
                return i;
            }
        }
    }

    if( numeros[posicion] == 1){
        for( let i = posicion; i < numeros.length; i++){
            if( numeros[ i ] == 2){
                return i;
            }
        }
    }

    if( numeros[posicion] == 3){
        for( let i = posicion; i < numeros.length; i++){
            if( numeros[ i ] == 4){
                return i;
            }
        }
    }
}

Parentesis( Refactorizar( string ) );

