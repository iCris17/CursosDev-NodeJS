import { UserRepository } from "../repositories/user-repository";
import { User } from "../user";

export class UserApplication {
    constructor(private readonly userRepository: UserRepository){}
    async save(user: User): Promise<void> {
        return await this.userRepository.save(user);
    }

    async find(id: string): Promise<User | null> {
        return await this.userRepository.find(id);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
}