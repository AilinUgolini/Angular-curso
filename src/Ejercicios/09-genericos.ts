function queTipoSoy<T>(argumento: T){
    return argumento
}

let soyString = queTipoSoy('Hola que tal');
let soyNumero = queTipoSoy(300);
let soyArreglo = queTipoSoy([1,2,3,4]);
let soyExplicito = queTipoSoy<number>(100);