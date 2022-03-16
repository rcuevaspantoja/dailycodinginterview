/* This problem was asked by Google.
The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
Hint: The basic equation of a circle is x2 + y2 = r2. */


console.clear();

const radio = 25;

calcularArea = ( radio ) =>{
    console.log(`El circulo posee un radio de 25 cm.`)
    const area = 3*( radio )*( radio )
    console.log( area )
    return (area);
}

calcularArea( radio );
