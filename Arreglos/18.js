/*
Este problema fue recientemente preguntado por Google.

Dado un arreglo de enteros y un número k, donde 1 <= k <= tamaño
del arreglo. Computar el maximo valor de cada sub arreglo de 
tamaño k. 

del arreglo [10,5,2,7,8,7] y k=3 deberia retornar [10,7,8,8]
10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
*/
console.clear();

const arreglo = [10, 5, 2, 7, 8, 7]
const K = 3
let arreglo_max = []

console.log(`Arreglo inicial:[${ arreglo }]`);
console.log(`K => ${ K }`);

computar = ( arreglo, K) =>{

  // console.log( arreglo.length - K );
  for(let i = 0; i <=  arreglo.length - K; i++){
  
    arreglo_max.push(Math.max( arreglo[i], arreglo[i+1], arreglo[i+2]))
  }
  console.log( arreglo_max );
}

computar(arreglo, K)

