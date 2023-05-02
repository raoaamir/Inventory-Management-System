import { Category } from "src/Modules/categories/entities/category.entity";
import { Request } from "src/Modules/request/entities/request.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    itemName : string

    @Column()
    serialNumber :string

    @Column()
    description : string

    @Column()
    price : number

    @ManyToOne(() => Category, category => category.items)
    @JoinColumn({name : "categoryId"})
    category: Category;

    @OneToMany(() => Request , (request) => request.item)
    request : Request


}
