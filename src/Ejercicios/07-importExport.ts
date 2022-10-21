import { calcularISV, Producto } from "./06-desectructuracionFuncion";

const carritoDeCompras: Producto[]= [
    {
        desc: 'Telefono 1',
        precio: 200,
    },
    {
        desc: 'Telefono 2',
        precio: 300,
    },
];

const [total,isv] = calcularISV(carritoDeCompras);
console.log(total);
console.log(isv);