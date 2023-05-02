
import { User } from "src/Modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compalint {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    image : string

    @Column()
    description : string

    @CreateDateColumn()
    createdAt: Date;

    @Column({default : 'Pending'})
    status : string

    @ManyToOne(()=> User , (user)=> user.complaint)
    @JoinColumn()
    user : User;
    
}


