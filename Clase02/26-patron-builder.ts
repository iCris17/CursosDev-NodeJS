class MedicBuilder {
    name: string = ""
    lastname: string = ""
    cmp: string = ""
    email: string = ""
    speciality: string = ""
    subSpeciality: string = ""

    addName(name: string): MedicBuilder {
        this.name = name
        return this
    }

    addLastname(lastname: string): MedicBuilder {
        this.lastname = lastname
        return this
    }

    addCmp(cmp: string): MedicBuilder {
        this.cmp = cmp
        return this
    }

    addEmail(email: string): MedicBuilder {
        this.email = email
        return this
    }

    addSpeciality(speciality: string): MedicBuilder{
        this.speciality = speciality
        return this
    }

    addSubSpeciality(subSpeciality: string): MedicBuilder{
        this.speciality = speciality
        return this
    }

    create(): Medic {
        return new Medic(this)
    }
}

interface IMedic {
    name: string
    lastname: string
    cmp: string
    email: string 
    speciality: string
    subSpeciality: string
}

class Medic {
    name: string
    lastname: string
    cmp: string
    email: string 
    speciality: string
    subSpeciality: string

    constructor(properties: IMedic) {
        this.name = properties.name
        this.lastname = properties.lastname
        this.cmp = properties.cmp
        this.email = properties.email
        this.speciality = properties.speciality
        this.subSpeciality = properties.subSpeciality
    }
}
/*
const properties: IMedic = {
    name: "Juan",
    lastname: "Pérez",
    cmp: "abc-123",
    email: "juan.perez@correo.com",
    speciality: "Cardiólogo",
    subSpeciality: "Cardiólogo infantil"
}
*/

const properties = new MedicBuilder()
const medic = properties
    .addName("Juan")
    .addLastname("Pérez")
    .addCmp("abc-123")
    .addEmail("juan.perez@correo.com")
    .addSpeciality("Cardiólogo")
    .addSubSpeciality("Cardiólogo infantil")
    .create()
//const medic = new Medic(properties)