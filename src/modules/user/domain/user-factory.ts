import { User } from "./user";
import { EmailVO } from "../../../core/domain/value-objects/email-vo";
import { EmailCorporateVO } from "src/core/domain/value-objects/email-corporate-vo";

export class UserFactory {
    static create(id:string, name:string, lastname:string, email:string, password: string, roles: string[]){
        // if (!this.validateEmail(email) || !this.validateEmailCorporate(email)){
        //     throw new Error("Invalid email");
        // }
        const emailVO = EmailVO.create(email);
        const emailCorporateVO = EmailCorporateVO.create(email);

        // if (!this.validateEmailCorporate(email)){
        //     throw new Error("Invalid email corporate");
        // }

        if (!this.validateRoleByDomain(roles, email)){
            throw new Error("Invalid role by domain");
        }

        if (!this.validatePassword(password)){
            throw new Error("Invalid password");
        }

        if (!this.validateMinRoles(roles)){
            throw new Error("Invalid roles");
        }

        return new User(id, name, lastname, emailCorporateVO.getValue(), password, roles)
    }
    static validateRoleByDomain(roles: string[], email: string){
        const domain = email.split("@")[1];
        if (domain === "company.org" && roles.includes("admin")) {
            return true
        }
        return false
    }

    static validateMinRoles(roles: string[]) {
        return roles.length < 1;
    }

    // static validateEmail(email: string){
    //     const emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
    //     return emailRegex.test(email);
    // }

    static validateEmailCorporate(email: string){
        const domainAllowed = ["company.org", "company.com", "company.net"];
        
        const domain = email.split("@")[1]
        if (domainAllowed.includes(domain)){
            return true;
        }
        return false;
    }

    static validatePassword(password: string){
        const passwordRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
        return passwordRegex.test(password);
    }
}

const user = UserFactory.create("abc", "John", "Doe", "john.doe@company.org", "ElMundoEsMio123#", ["admin"]);

console.log(user);