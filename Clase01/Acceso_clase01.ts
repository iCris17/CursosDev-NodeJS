class Animal {
    public raza: string
    public color: string

    constructor(){
        this.raza = "Perro"
        this.color = "Marrón"
    }

    obtenerDescripcion() {
        return `Raza: ${this.raza}, Color ${this.color}`
    }
}


const animal = new Animal();

console.log(animal);
console.log("Raza", animal.raza);
console.log("Color", animal.color);
console.log("Description", animal.obtenerDescripcion());