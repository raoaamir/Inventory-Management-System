import { Compalint } from "src/Modules/compalint/entities/compalint.entity";
import { Organization } from "src/Modules/organization/entities/organization.entity";
import { Request } from "src/Modules/request/entities/request.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from '../../roles/entities/roles.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    firstName : string
    @Column()
    lastName  : string 
    @Column({unique :true})
    email     : string
    @Column()
    password  : string
    @Column()
    contactNumber : string
    @Column({nullable:true})
    otp : string
    @Column()
    first_login :boolean
    
    @ManyToOne(()=> Roles , (role)=>role.author,{eager:true})
    @JoinColumn()
    role : Roles;

    @ManyToOne(() => Organization, org => org.user)
    org: Organization;

    @OneToMany(() => Compalint , (complaint)=>complaint.user)
    @JoinColumn()
    complaint : Compalint

    @OneToMany(() => Request , (request)=>request.user)
    request : Request




    
}
