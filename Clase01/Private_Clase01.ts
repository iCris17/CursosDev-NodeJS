class Animal {
    private raza: string
    private color: string

    constructor(pRaza: string, pColor: string){
        this.raza = "Perro"
        this.color = "Marrón"
    }

    obtenerDescripcion() {
        return `Raza: ${this.raza}, Color ${this.color}`
    }
}

const animal = new Animal("Gato Siames", "Pardo");

console.log(animal);
console.log("Raza", animal.raza);
console.log("Color", animal.color);
console.log("Description", animal.obtenerDescripcion());