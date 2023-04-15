import { UserRepository } from "../domain/repositories/user-repository";
import { User } from "../domain/user";
import { UserFactory } from "../domain/user-factory";

const users = [
    UserFactory.create("ae4661b2-8edf-41bf-bd8c-d0b5c8cd6b8a", "Carolina", "González", "caro@email.com", "TodoONada2023#", ["admin", "operator"]),
    UserFactory.create("2cce16a8-f0be-46a3-b1e9-f17e920e795a", "Alondra", "Samaniego", "alondra@email.com", "QuienSabe20034#", ["admin", "operator", "client"])
]

export class UserInfrastructure implements UserRepository {
    save(user: User): Promise<void> {
        return Promise.resolve();
    }
    find(id: string): Promise<User> {
        return Promise.resolve(users[0])
    }
    findAll(): Promise<User[]> {
        return Promise.resolve(users)
    }

}