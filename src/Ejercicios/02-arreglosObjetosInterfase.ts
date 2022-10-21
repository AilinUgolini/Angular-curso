

let habilidades: string[]= ['Bash','Counter','Healing']

interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string; //El ? es porque es opcional.
}

const personaje: Personaje= {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}
personaje.puebloNatal= 'Villa bosch'

console.table(personaje);
/*
    ===== Código de TypeScript =====
*/

