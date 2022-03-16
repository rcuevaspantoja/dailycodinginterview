/* 

Este problema fue preguntado recientemente por JaneStreet.
cons(a,b) construyen un par, y car(par) and cdr(par) retornar el primero y ultimo elemento de ese par.
Por ejemplo, car( const(3,4) ) retorna 3, y cdr( cons(3,4) ) retorna 4

Implementar cons, car y cdr.
*/
console.clear();

cons = ( a,b ) =>{

    const f = [a,b];
    return f
}

car = ( a ) =>{

    return( a[0] )
}

cdr = ( a ) =>{

    return( a[1] )
}


