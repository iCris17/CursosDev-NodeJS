type MedicProperties {
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

    /*constructor(name: string, lastname: string, cmp: string, email: string, speciality: string, subSpeciality: string) */
    constructor(properties: MedicProperties){
        this.name = properties.name
        this.lastname = properties.lastname
        this.cmp = properties.cmp
        this.email = properties.email
        this.speciality = properties.speciality
        this.subSpeciality = properties.subSpeciality
    }
}

const properties: MedicProperties = {
    name: "Jorge",
    lastname: "Lozada",
    cmp: "abc-234",
    email: "jorge.lozada@correo.com",
    speciality: "Cardiólogo",
    subSpeciality: "Cardiólogo geriátrico"
}

//const medic = new Medic("Jorge", "Lozada", "abc-234", "jorge.lozada@correo.com", "Cardiólogo", "Cardiólogo geriátrico")
const medic = new Medic(properties)