import { Category } from "src/Modules/categories/entities/category.entity";
import { Item } from "src/Modules/items/entities/item.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Request {

    @PrimaryGeneratedColumn()
    id :number

    @Column()
    itemName: string;

    @Column()
    requestType: 'acquired' | 'faulty';

    @Column({ nullable: true })
    faultyRequestType: 'repair' | 'replace';

    @Column()
    description : string
     
    @CreateDateColumn()
    createdAt: Date;

    @Column({default : 'Pending'})
    status : string
  
    @ManyToOne(() => Item ,(item)=> item.request)
    @JoinColumn()
    item: Item;
  
    // @ManyToOne(() => Category , (category)=> category.request)
    // @JoinColumn()
    // category: Category;

    @ManyToOne(() => User ,(user)=> user.request)
    @JoinColumn()
    user: User;


}
