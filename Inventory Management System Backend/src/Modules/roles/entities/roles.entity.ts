import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (author) => author.role)
  author: User;

}