class User {
    readonly userId: string = "cb46b6cb-a908-4190-9801-8b93aaabfa66";
    protected readonly password: string = "df^VYfJ}}4QcU@*:"
}

class Developer extends User {
    getPasswordLength() {
        return this.password.length;
    }
}

class DeveloperCloud extends Developer {
    constructor() {
        super();
        console.log(this.password);
    }
}

const developer = new Developer();
console.log(developer.getPasswordLength());

const developerCloud = new DeveloperCloud();
