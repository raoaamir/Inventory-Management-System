
import { Category } from "src/Modules/categories/entities/category.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id :number
    @Column()
    name : string
    @Column({unique:true})
    email :string
    @Column()
    location : string
    @Column()
    contactNumber:string
    @Column()
    bio :string
    @Column()
    representative_Name : string
    @Column()
    representative_ContactNo :string
    @Column()
    logo : string
    @OneToMany(()=> User ,(user) => user.org)
    user : User

    @OneToMany(()=> Category , (category)=> category.organization)
    category : Category

}
