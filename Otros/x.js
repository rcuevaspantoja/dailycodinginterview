/* This problem was asked by Spotify.

There are N couples sitting in a row of length 2 * N. 
They are currently ordered randomly, but would like to rearrange themselves so that each couple's 
partners can sit side by side. */

const fila = [[1,2],[2,1],[3,4],[4,3]]

buscar = (fila_inicio, num_buscado) => {
    for(let i = 0; i < fila.length; i++){
        for(let j = 0; j < fila[i].length; j++){
            if( fila_inicio != i ){
                if( fila[i][j] == num_buscado ){
                    console.log("se encontró en el par " +[i]+" en el " +[j]+ " dígito.")
                    return[i, j]
                }
            }
        }
    }
}

console.log( buscar(3,4) )
