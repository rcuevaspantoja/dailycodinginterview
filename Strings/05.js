/* 
Este problema fue preguntado recientemente por Facebook 
Dada el mapeo a=1, b=2, ..., z=26 y un mensaje codificado, decifrar los numeros para decodificar
el mensaje. Pueden asumir que el mensaje es decodificable.*/

console.clear();

const decifrado ={'1':'a', '2':'b','3':'c','4':'d',
                  '5':'e','6':'f','7':'g','8':'h',
                  '9':'i','10':'j','11':'k','12':'l',
                  '13':'m','14':'n','15':'o','16':'p',
                  '17':'q','18':'r','19':'s','20':'t',
                  '21':'u','22':'v','23':'w','24':'x',
                  '25':'y','26':'z'};

const cifrado = '8 15 12 1 13 21 14 4 15';

const frase = cifrado.split(" ").map( letra => decifrado[letra] || letra ).join("").toString()







console.log( frase );
