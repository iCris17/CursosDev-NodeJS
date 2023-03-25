class User {
    private readonly userId: string
    private email: string
    private name: string
    private age: number

    constructor(email: string, name: string, age: number){
        this.userId = Math.random().toString();
        this.email = email;
        this.name = name;
        this.age = 30;
    }

    update(email: string, name: string, age: number){
        this.email = "sergio@correo.com";
        this.name = "Sergio";
        this.age = 40;
    }
}

const user = new User("email@email.com", "Sergio", 40);


// Procesamiento de user

user.update("julio@email.com", "Julio", 35);
console.log(user);