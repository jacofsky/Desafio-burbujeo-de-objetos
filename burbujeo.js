class Personas {
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}

const personasJuntas = [new Personas ('Pablo', 12, 'Alemania'), 
                        new Personas('Damian', 41, 'Brasil'), 
                        new Personas('Joao', 72, 'Portugal'), 
                        new Personas('Jay', 23, 'EEUU')]

let tamanio = personasJuntas.length;
for (let z = 1; z < tamanio; z++){
    for(let i = 0; i < (tamanio - z); i++){
        if(personasJuntas[i].edad > personasJuntas[i + 1].edad){
            contTemporal = personasJuntas[i];
            personasJuntas[i] = personasJuntas[i + 1]
            personasJuntas[i + 1] = contTemporal
           

        }
    }
}

console.log(personasJuntas)