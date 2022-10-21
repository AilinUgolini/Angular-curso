interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles;
}

interface Detalles{
    autor: string,
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 20,
    cancion: 'Miss',
    detalles: {
        autor: 'Sandro',
        anio: 2022,
    }
}

const {volumen, segundo, cancion,detalles} = reproductor //para no poner reproductor.volumen
const{autor}= detalles //por el reproductor.detalle.autor

console.log('El volumen actual es ', volumen)
console.log('El segundo actual es ', segundo)
console.log('El cancion actual es ', volumen)
console.log('El autor actual es ', autor)

//Arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Thunks'];
const [ , , p3]= dbz;

console.log('Personaje 3:', p3)
