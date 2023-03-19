import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: any

    @Column()
    firstName: string

    @Column()
    lastName: string
}