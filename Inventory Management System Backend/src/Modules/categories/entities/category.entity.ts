
import { Item } from "src/Modules/items/entities/item.entity"
import { Organization } from "src/Modules/organization/entities/organization.entity"
import { Request } from "src/Modules/request/entities/request.entity"
import { Vendor } from "src/Modules/vendor/entities/vendor.entity"
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Category_Name: string
    
    @ManyToOne(() => Category, (category) => category.subcategories , {onDelete: 'CASCADE'})
    @JoinColumn({name : "parent_id"})
    parent: Category

    @OneToMany(() => Category, (category) => category.parent ,{cascade :true})
    subcategories: Category[]

    @OneToMany(() => Item, item => item.category)
    items: Item[];

    @ManyToOne(()=> Organization , (organization)=> organization.category)
    @JoinColumn({name : "OrgId"})
    organization : Organization   

    @ManyToMany(() => Vendor, (vendor) => vendor.category)
    vendor: Vendor[]

    // @OneToMany(() => Request , (request)=>request.category)
    // request : Request
}


// async createSubcategory(id: number, data: UpdateCategoryDto) {
//     const category = await this.categoryRepo.findOneBy({id})
//     console.log(category);
    
  
//       for(const obj of data.subCategories){
//         const subCategory = new Category()
//         subCategory.Category_Name = obj.Category_Name;
//         subCategory.parent = category
//         await this.categoryRepo.save(subCategory)
//       }
      
//   return category
//   }