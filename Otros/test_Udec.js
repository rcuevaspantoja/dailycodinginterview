/*
Crear función get_key_with

dictionary = {
'a' : [1,2,3],
'b' : [4,5,6],
'c' : [4,1,3]
}
get_key_with(dictionary, 1)

respuesta:
['a', 'c']
*/

dictionary = {
    'a' : [1,2,3],
    'b' : [4,5,6],
    'c' : [4,1,3]
}  
const numero = 1;

get_key_with = (dictionary, numero) =>{
    let indices = []
    for(let i = 0; i < Object.keys(dictionary).length; i++){

        for(let j = 0; j < dictionary[ Object.keys( dictionary)[i] ].length; j++){

            if( numero == dictionary[ Object.keys(dictionary)[i] ][j] )
                indices.push( Object.keys(dictionary)[i] )
        }
    }
    return( indices )
}

console.log(get_key_with(dictionary, numero))


