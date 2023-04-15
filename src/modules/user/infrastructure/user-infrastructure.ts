import { UserRepository } from "../domain/repositories/user-repository";
import { User } from "../domain/user";
import { UserFactory } from "../domain/user-factory";

const users = [
    {id: "ae4661b2-8edf-41bf-bd8c-d0b5c8cd6b8a", name: "Carolina", lastname: "González", email: "caro@email.com", password: "TodoONada2023#", token: ["admin", "operator"]},
    {id: "2cce16a8-f0be-46a3-b1e9-f17e920e795a", name: "Alondra", lastname: "Samaniego", email: "alondra@email.com", password: "QuienSabe20034#", token: ["admin", "operator", "client"]}
]

export class UserInfrastructure implements UserRepository {
    save(user: User): Promise<void> {
        return Promise.resolve();
    }
    find(id: string): Promise<any> {
        return Promise.resolve(users[0])
    }
    findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }

}