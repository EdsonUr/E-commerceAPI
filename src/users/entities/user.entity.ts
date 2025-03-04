import { CategoryEntity } from "src/categories/entities/category.entity";
import { Roles } from "src/utils/common/user-roles.enum";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({  unique: true })
    email: string;

    @Column({ select: false })
    password?: string;

    @Column({ type: 'enum', enum: Roles, array: true, default: [Roles.USER] })
    roles: Roles[]

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

    @OneToMany(() => CategoryEntity, (category) => category.addedBy)
    categories: CategoryEntity[];
    
}
