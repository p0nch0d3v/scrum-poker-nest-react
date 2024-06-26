import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true }) 
    admin: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    cards: string;

    @CreateDateColumn()
    created_at: Date;
}
