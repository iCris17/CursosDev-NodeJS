import { RoleEntity } from "../../../../modules/role/infrastructure/entities/role.entity";
import { BaseEntity } from "../../../../core/infrastructure/base-entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

@Entity({name: "user"})
export class UserEntity extends BaseEntity {
    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 50 })
    lastname: string;

    @Column({ type: "varchar", length: 100 })
    email: string;

    @Column({ type: "varchar", length: 100 })
    password: string;

    @Column({ type: "varchar", length: 100 })
    photo: string;

    @Column({ type: "bool", default: true})
    active: boolean;

    @ManyToMany(() => RoleEntity, (role) => role.users)
    @JoinTable()
    roles: RoleEntity[];
}