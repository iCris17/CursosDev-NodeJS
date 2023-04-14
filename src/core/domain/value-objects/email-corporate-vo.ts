export class ValueObject<TypeValue> {
    protected value: TypeValue

    getValue(): TypeValue {
        return this.value
    }
}

export class EmailCorporateVO extends ValueObject<string>{
    private value: string

    private constructor(email: string){
        super();
        this.value = email
    }

    private static validateEmailCorporate(email: string){
        const domainAllowed = ["company.org", "company.com", ]
    }

    static create(email: string){
        console.log(email);
    }
}