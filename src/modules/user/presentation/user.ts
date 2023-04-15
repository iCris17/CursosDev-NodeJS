import { UserApplication } from "../application/user-application";
import { UserRepository } from "../domain/repositories/user-repository";
import { UserFactory } from "../domain/user-factory";
import { UserInfrastructure } from "../infrastructure/user-infrastructure";

(async ()=>{
    const infra:UserRepository = new UserInfrastructure()
    const app = new UserApplication(infra)

    const user = UserFactory.create("fa462b4b-eca3-46e9-9e65-82b5b901c606", "Juan", "Pérez", "juan@company.org", "FiestaT00do#", ["admin"])

    await app.save(user)

    const users = await app.findAll();

    console.log(users);
})()


