import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: any

    @Column()
    firstName: string | undefined

    @Column()
    lastName: string | undefined
}