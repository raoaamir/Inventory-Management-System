import { Category } from "src/Modules/categories/entities/category.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendor {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    vendorName : string;

    @Column()
    contactNumber : string;

    @Column()
    totalSpending : string;

    @ManyToMany(() => Category, (category) => category.vendor)
    @JoinTable()
    category: Category[]

}
