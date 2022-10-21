class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string,
    ){}
}
class Heroe extends PersonaNormal{
   // public alterEgo: string;
   // public edad: number;
   //public nombreReal: string;

    constructor(
        public alterego: string,
        public edad: number,
        public nombreReal: string)
    {
        super(nombreReal,'Quintana 705' );

    }
}

const ironMan = new Heroe('Ironman', 20,'Arturo');
console.log(ironMan);