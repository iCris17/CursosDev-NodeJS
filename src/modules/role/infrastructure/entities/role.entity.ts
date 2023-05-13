import { UserEntity } from "../../../../modules/user/infrastructure/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "role" })
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 50 })
    name: string;

    @ManyToMany(() => UserEntity, (user) => user.roles)
    users: UserEntity[];
}