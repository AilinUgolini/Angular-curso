const sumarFlecha = (a: number, b: number): number =>{
    return a + b
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2): number{
    return numero*base;
}

/*const resultado= multiplicar(5);
console.log(resultado)*/
interface PersonajeLOR{
    nombre: String,
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR={
    nombre: 'Strider',
    pv: 20,
    mostrarHp(){
        console.log("Puntos de vida:", this.pv);
    }
}
curar(nuevoPersonaje,20)
nuevoPersonaje.mostrarHp();
